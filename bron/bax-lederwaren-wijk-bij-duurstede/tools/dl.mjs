import fs from 'node:fs';
const txt = fs.readFileSync('bron/web/crawl.txt', 'utf8');
const seen = new Map(); let page = '';
for (const line of txt.split('\n')) {
  const m = line.match(/^######## (\S+)/); if (m) { page = m[1].replace('https://www.stefig.nl/', '') || 'home'; continue; }
  const g = line.match(/image\.jimcdn\.com\/app\/cms\/image\/transf\/[^/]+\/path\/(\w+)\/image\/(\w+)\/version\/(\d+)\/image\.(jpg|png)[^|]*\|\s*(\S*)\s*\|\s*(.*)/);
  if (g && !seen.has(g[2])) seen.set(g[2], { path: g[1], id: g[2], v: g[3], ext: g[4], page, alt: g[6].trim() });
}
const out = []; let n = 0;
for (const o of seen.values()) {
  const u = `https://image.jimcdn.com/app/cms/image/transf/none/path/${o.path}/image/${o.id}/version/${o.v}/image.${o.ext}`;
  const r = await fetch(u); if (!r.ok) { console.log('fail', u); continue; }
  const buf = Buffer.from(await r.arrayBuffer()); n++;
  const f = `${String(n).padStart(3,'0')}-${o.page.replace(/[^a-z]+/g,'_').slice(0,30)}.${o.ext}`;
  fs.writeFileSync('bron/web/img/' + f, buf); out.push(`${f} | ${o.v} | ${u} | ${o.alt}`);
}
fs.writeFileSync('bron/web/img/_lijst.txt', out.join('\n')); console.log(n);
