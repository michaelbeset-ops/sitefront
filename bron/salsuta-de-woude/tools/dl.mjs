import fs from 'node:fs';
const r = JSON.parse(fs.readFileSync('bron/site/imgs.json'));
let n = 0;
for (const [k, v] of Object.entries(r)) for (const x of v) {
  if (!x.src || /image-1\.png/.test(x.src)) continue;
  const u = x.src.split('?')[0] + '?enable-io=true&width=2000';
  const nm = `${k.slice(0,8)}_${String(x.y).padStart(5,'0')}_${x.src.split('?')[0].split('/').pop()}`;
  if (fs.existsSync('bron/img/' + nm)) continue;
  const res = await fetch(u); if (!res.ok) { console.log('fail', u); continue; }
  fs.writeFileSync('bron/img/' + nm, Buffer.from(await res.arrayBuffer())); n++;
}
console.log(n);
