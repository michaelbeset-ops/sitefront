// Crawlt een domein (arg1 = basis-URL, arg2 = uitmap), bewaart html + tekst + afbeeldingenlijst.
import fs from 'node:fs';
const B = process.argv[2]; const uit = process.argv[3]; const max = +process.argv[4] || 300;
const host = new URL(B).host;
fs.mkdirSync(uit, { recursive: true });
const gezien = new Set(); const rij = [B]; const imgs = new Set(); const extern = new Set();
const tekst = (h) => h.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<!--[\s\S]*?-->/g, '').replace(/<br\s*\/?>/gi, '\n').replace(/<\/(p|div|h\d|li|tr|a)>/gi, '\n').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&euro;/g, '€').replace(/&#039;|&#39;|&rsquo;/g, "'").replace(/&eacute;/g, 'é').replace(/&euml;/g, 'ë').replace(/[ \t\r]+/g, ' ').replace(/\n\s*\n+/g, '\n').trim();
while (rij.length && gezien.size < max) {
  const u = rij.shift(); const key = u.replace(/#.*/, '').toLowerCase(); if (gezien.has(key)) continue; gezien.add(key);
  let h; try { const r = await fetch(u, { headers: { 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/130' } }); if (!(r.headers.get('content-type') || '').includes('html')) continue; h = await r.text(); } catch (e) { console.log('ERR', u); continue; }
  const naam = new URL(u).pathname.replace(/^\/|\.html?$/g, '').replace(/[^a-z0-9]+/gi, '_') || 'home';
  fs.writeFileSync(`${uit}/${naam}.html`, h);
  fs.writeFileSync(`${uit}/${naam}.txt`, u + '\n' + tekst(h.replace(/[\s\S]*?<body/i, '<body')));
  for (const m of h.matchAll(/(?:src|href|data-src|srcset)=["']([^"' ]+\.(?:jpe?g|png|gif|webp))/gi)) { try { imgs.add(new URL(m[1].replace(/&amp;/g, '&'), u).href); } catch {} }
  for (const m of h.matchAll(/url\(['"]?([^'")]+\.(?:jpe?g|png|webp))/gi)) { try { imgs.add(new URL(m[1], u).href); } catch {} }
  for (const m of h.matchAll(/href=["']([^"'#]+)["']/gi)) {
    try { const abs = new URL(m[1].replace(/&amp;/g, '&'), u); if (/^(mailto|tel|javascript)/.test(abs.protocol)) { extern.add(abs.href); continue; }
      if (abs.host !== host) { extern.add(abs.href); continue; }
      if (/\.(css|js|ico|jpe?g|png|gif|pdf|webp|svg|xml|mp4)$/i.test(abs.pathname)) { if (/\.pdf$/i.test(abs.pathname)) extern.add(abs.href); continue; }
      abs.hash = ''; if (!gezien.has(abs.href.toLowerCase())) rij.push(abs.href); } catch {}
  }
}
fs.writeFileSync(`${uit}/_imgs.txt`, [...imgs].join('\n'));
fs.writeFileSync(`${uit}/_paginas.txt`, [...gezien].join('\n'));
fs.writeFileSync(`${uit}/_extern.txt`, [...extern].sort().join('\n'));
console.log('paginas', gezien.size, 'imgs', imgs.size, 'rest', rij.length);
