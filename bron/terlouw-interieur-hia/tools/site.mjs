// Haalt alle pagina's van delaatkachels.nl op (crawl binnen domein), bewaart html + platte tekst en lijst van afbeeldingen.
import fs from 'node:fs';
const B = 'https://delaatkachels.nl/';
const uit = 'bron/web/site';
fs.mkdirSync(uit, { recursive: true });
const gezien = new Set(); const rij = ['', 'Page.aspx?mid=1&id=1', 'News.aspx?mid=5', 'Category.aspx?onsale=1&mid=12', 'Contact.aspx?mid=6'];
const imgs = new Set();
const tekst = (h) => h.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<br\s*\/?>/gi, '\n').replace(/<\/(p|div|h\d|li|tr)>/gi, '\n').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&euro;/g, '€').replace(/&ndash;/g, '-').replace(/&#39;/g, "'").replace(/[ \t\r]+/g, ' ').replace(/\n\s*\n+/g, '\n').trim();
const max = +process.argv[2] || 400;
while (rij.length && gezien.size < max) {
  const pad = rij.shift(); const key = pad.toLowerCase(); if (gezien.has(key)) continue; gezien.add(key);
  let h; try { const r = await fetch(B + pad, { headers: { 'user-agent': 'Mozilla/5.0' } }); h = await r.text(); } catch (e) { console.log('ERR', pad); continue; }
  const naam = (pad || 'home').replace(/[^a-z0-9]+/gi, '_');
  fs.writeFileSync(`${uit}/${naam}.html`, h);
  const t = tekst(h.replace(/[\s\S]*?<body/i, '<body'));
  fs.writeFileSync(`${uit}/${naam}.txt`, t);
  for (const m of h.matchAll(/(?:src|href)="([^"]+\.(?:jpe?g|png|gif|webp))"/gi)) imgs.add(new URL(m[1].replace(/&amp;/g, '&'), B + pad).href);
  for (const m of h.matchAll(/href="([^"#]+)"/gi)) {
    let u = m[1].replace(/&amp;/g, '&'); if (/^(https?:|mailto|javascript|tel)/i.test(u) && !u.includes('delaatkachels.nl')) continue;
    try { const abs = new URL(u, B + pad); if (!abs.host.endsWith('delaatkachels.nl')) continue; if (/\.(css|js|ico|jpe?g|png|gif|pdf)$/i.test(abs.pathname) || abs.pathname.includes('WebResource')) continue;
      const rel = (abs.pathname.replace(/^\//, '') + abs.search); if (/Basket|Login|Account|Register|Cart/i.test(rel)) continue; if (!gezien.has(rel.toLowerCase())) rij.push(rel); } catch {}
  }
}
fs.writeFileSync('bron/web/imgs.txt', [...imgs].join('\n'));
fs.writeFileSync('bron/web/paginas.txt', [...gezien].join('\n'));
console.log('paginas', gezien.size, 'imgs', imgs.size, 'rest', rij.length);
