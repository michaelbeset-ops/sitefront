// Crawlt wouwmontage.nl en wouwzonwering.nl (+ garagedeuren), bewaart html, tekst en beeld-URL's.
import fs from 'node:fs';
const starts = ['https://www.wouwmontage.nl/', 'https://www.wouwzonwering.nl/', 'http://www.wouwgaragedeuren.nl/'];
const seen = new Set(); const q = [...starts]; const imgs = new Set(); const out = [];
const strip = (h) => h.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, ' ').replace(/<br\s*\/?>/gi, '\n').replace(/<\/(p|h\d|li|div|tr)>/gi, '\n').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&euro;/g, '€').replace(/&#(\d+);/g, (_, n) => String.fromCharCode(n)).replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16))).replace(/[ \t]+/g, ' ').replace(/\n\s*\n+/g, '\n').trim();
while (q.length && seen.size < 120) {
  const u = q.shift(); if (seen.has(u)) continue; seen.add(u);
  let r; try { r = await fetch(u, { headers: { 'user-agent': 'Mozilla/5.0' }, redirect: 'follow' }); } catch (e) { out.push(`### ${u} FOUT ${e.message}`); continue; }
  const h = await r.text(); const fin = r.url; const host = new URL(fin).host;
  const naam = (host + new URL(fin).pathname).replace(/[^\w.-]+/g, '_');
  fs.writeFileSync(`bron/web/site/${naam}.html`, h);
  const t = h.match(/<title>([^<]*)/)?.[1];
  out.push(`### ${u} -> ${fin} [${r.status}] title=${t}\n${strip(h.replace(/[\s\S]*?<body/i, '<body'))}\n`);
  for (const m of h.matchAll(/(?:src|href|data-src)="([^"]+)"/g)) {
    let l = m[1].replace(/[​]/g, ''); try { l = new URL(l, fin).href.split('#')[0]; } catch { continue; }
    if (/\.(jpe?g|png|gif|webp)(\?|$)/i.test(l)) { imgs.add(l); continue; }
    const H = new URL(l).host; if (/wouw(montage|zonwering|garagedeuren)\.nl$/.test(H) && !/combine|themes|storage/.test(l) && !seen.has(l)) q.push(l);
  }
  for (const m of h.matchAll(/url\(['"]?([^'")]+)/g)) { try { imgs.add(new URL(m[1], fin).href); } catch {} }
}
fs.writeFileSync('bron/web/paginas.txt', out.join('\n'));
fs.writeFileSync('bron/web/imgs.txt', [...imgs].join('\n'));
console.log(seen.size, 'pagina', imgs.size, 'img');
