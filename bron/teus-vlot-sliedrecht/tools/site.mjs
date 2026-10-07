// Crawlt teusvlot.com/nl + de divisiesites; bewaart html + platte tekst + afbeeldingen-lijst per domein.
import fs from 'node:fs';
const starts = (process.argv[2] || 'https://teusvlot.com/nl/,https://teusvlotdieselmarine.com/,https://teusvlotelektrotechniek.nl/,https://teusvlotrevisie.nl/,https://dieselmotorenservice.nl/nl/,https://cornerpoint.nl/').split(',');
const max = +process.argv[3] || 120;
const tekst = (h) => h.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<(nav|footer)[\s\S]*?<\/\1>/gi, '').replace(/<br\s*\/?>/gi, '\n').replace(/<\/(p|div|h\d|li|tr|section)>/gi, '\n').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&euro;/g, '€').replace(/&#8211;|&ndash;/g, '-').replace(/&#8217;|&#039;|&#39;/g, "'").replace(/&#8220;|&#8221;|&quot;/g, '"').replace(/[ \t\r]+/g, ' ').replace(/\n\s*\n+/g, '\n').trim();
for (const s of starts) {
  const host = new URL(s).host; const uit = `bron/web/site/${host}`; fs.mkdirSync(uit, { recursive: true });
  const gezien = new Set(); const rij = [s]; const imgs = new Set();
  while (rij.length && gezien.size < max) {
    const u = rij.shift(); const key = u.replace(/#.*/, '').replace(/\/$/, '').toLowerCase(); if (gezien.has(key)) continue; gezien.add(key);
    let h; try { const r = await fetch(u, { headers: { 'user-agent': 'Mozilla/5.0' } }); if (!(r.headers.get('content-type') || '').includes('html')) continue; h = await r.text(); } catch (e) { console.log('ERR', u); continue; }
    const naam = (new URL(u).pathname + new URL(u).search).replace(/[^a-z0-9]+/gi, '_').replace(/^_|_$/g, '') || 'home';
    fs.writeFileSync(`${uit}/${naam}.html`, h);
    const t = tekst(h.replace(/[\s\S]*?<body/i, '<body'));
    fs.writeFileSync(`${uit}/${naam}.txt`, u + '\n\n' + t);
    for (const m of h.matchAll(/(?:src|href|data-src|srcset)=["']([^"' ]+\.(?:jpe?g|png|webp|svg|pdf)(?:\?[^"' ]*)?)/gi)) { try { imgs.add(new URL(m[1].replace(/&amp;/g, '&'), u).href); } catch {} }
    for (const m of h.matchAll(/url\(['"]?([^'")]+\.(?:jpe?g|png|webp))/gi)) { try { imgs.add(new URL(m[1], u).href); } catch {} }
    for (const m of h.matchAll(/href=["']([^"'#]+)["']/gi)) {
      try { const abs = new URL(m[1].replace(/&amp;/g, '&'), u); if (abs.host !== host) continue;
        if (/\.(css|js|ico|jpe?g|png|gif|pdf|svg|xml|json|woff2?)$/i.test(abs.pathname) || /wp-json|wp-content|xmlrpc|feed|\/en\/|\/de\/|\/fr\/|\?replytocom|wp-login|\/tag\/|\/author\//i.test(abs.href)) continue;
        if (host === 'teusvlot.com' && !abs.pathname.startsWith('/nl')) continue;
        abs.hash = ''; if (!gezien.has(abs.href.replace(/\/$/, '').toLowerCase())) rij.push(abs.href); } catch {}
    }
  }
  fs.writeFileSync(`${uit}/_imgs.txt`, [...imgs].join('\n'));
  fs.writeFileSync(`${uit}/_paginas.txt`, [...gezien].join('\n'));
  console.log(host, 'paginas', gezien.size, 'imgs', imgs.size, 'rest', rij.length);
}
