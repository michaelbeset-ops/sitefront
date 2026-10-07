// Crawlt bolidt.com/nl (binnen /nl/), bewaart html + platte tekst + afbeeldingenlijst.
import fs from 'node:fs';
const B = 'https://www.bolidt.com/';
const uit = 'bron/web/site'; fs.mkdirSync(uit, { recursive: true });
const gezien = new Set(); const rij = ['nl/home']; const imgs = new Map(); const status = [];
const tekst = (h) => h.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<nav[\s\S]*?<\/nav>/gi, '').replace(/<footer[\s\S]*?<\/footer>/gi, '').replace(/<br\s*\/?>/gi, '\n').replace(/<\/(p|div|h\d|li|tr|a)>/gi, '\n').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&euro;/g, '€').replace(/&#39;|&rsquo;/g, "'").replace(/&eacute;/g,'é').replace(/&euml;/g,'ë').replace(/[ \t\r]+/g, ' ').replace(/\n\s*\n+/g, '\n').trim();
const max = +process.argv[2] || 400;
while (rij.length && gezien.size < max) {
  const pad = rij.shift(); if (gezien.has(pad)) continue; gezien.add(pad);
  let h, code; try { const r = await fetch(B + pad, { headers: { 'user-agent': 'Mozilla/5.0' } }); code = r.status; h = await r.text(); } catch (e) { status.push(pad + ' ERR'); continue; }
  status.push(pad + ' ' + code);
  const naam = pad.replace(/[^a-z0-9]+/gi, '_');
  fs.writeFileSync(`${uit}/${naam}.html`, h);
  fs.writeFileSync(`${uit}/${naam}.txt`, tekst(h.replace(/[\s\S]*?<body/i, '<body')));
  for (const m of h.matchAll(/(?:src|href|data-src|srcset)="([^"]+\.(?:jpe?g|png|webp))[^"]*"/gi)) { try { const u = new URL(m[1].replace(/&amp;/g, '&'), B + pad).href; if (!imgs.has(u)) imgs.set(u, pad); } catch {} }
  for (const m of h.matchAll(/url\(['"]?([^'")]+\.(?:jpe?g|png|webp))/gi)) { try { const u = new URL(m[1], B + pad).href; if (!imgs.has(u)) imgs.set(u, pad); } catch {} }
  for (const m of h.matchAll(/href="([^"#]+)"/gi)) {
    try { const abs = new URL(m[1].replace(/&amp;/g, '&'), B + pad); if (abs.host !== 'www.bolidt.com') continue; const rel = abs.pathname.replace(/^\//, ''); if (!rel.startsWith('nl/')) continue; if (/\.(pdf|jpe?g|png|css|js)$/i.test(rel)) continue; if (!gezien.has(rel)) rij.push(rel); } catch {}
  }
}
fs.writeFileSync('bron/web/imgs.txt', [...imgs].map(([u, p]) => u + '\t' + p).join('\n'));
fs.writeFileSync('bron/web/paginas.txt', status.join('\n'));
console.log('paginas', gezien.size, 'imgs', imgs.size, 'rest', rij.length);
