import fs from 'node:fs';
const txt = fs.readFileSync('bron/web/crawl.txt', 'utf8');
const seen = new Map(); let page = '';
for (const line of txt.split('\n')) {
  const m = line.match(/^######## (\S+)/); if (m) { page = m[1].replace(/https:\/\/www\.degoederestauraties\.nl\/?/, '') || 'home'; continue; }
  const g = line.match(/static\.wixstatic\.com\/media\/([0-9a-f]+_[0-9a-f]+~mv2\.(jpg|jpeg|png|webp))[^|]*\|\s*(\S*)\s*\|\s*(.*)/i);
  if (g && !seen.has(g[1])) seen.set(g[1], { id: g[1], ext: g[2].toLowerCase(), page, alt: g[4].trim() });
}
const out = []; let n = 0;
for (const o of seen.values()) {
  const u = `https://static.wixstatic.com/media/${o.id}`;
  const r = await fetch(u); if (!r.ok) { console.log('fail', u); continue; }
  const buf = Buffer.from(await r.arrayBuffer()); n++;
  const f = `${String(n).padStart(3,'0')}-${o.page.replace(/[^a-z]+/g,'_').slice(0,20)}.${o.ext}`;
  fs.writeFileSync('bron/web/img/' + f, buf); out.push(`${f} | ${u} | ${o.alt}`);
}
fs.writeFileSync('bron/web/img/_lijst.txt', out.join('\n')); console.log(n);
