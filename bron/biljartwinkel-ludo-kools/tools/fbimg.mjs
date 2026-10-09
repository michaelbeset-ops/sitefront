// Haalt de grootste varianten van de foto's uit de opgeslagen Facebook-HTML (bron/fb/page.html + about.html).
import fs from 'node:fs';
import sharp from 'sharp';
const dir = 'bron/fb/';
const t = fs.readFileSync(dir + 'page.html', 'utf8') + fs.readFileSync(dir + 'about.html', 'utf8');
const re = /"uri":"(https:\\\/\\\/scontent[^"]+?)"/g;
const best = {};
let m;
while ((m = re.exec(t))) {
  const u = JSON.parse('"' + m[1] + '"');
  const id = u.split('?')[0].split('/').pop();
  const ctx = t.slice(Math.max(0, m.index - 80), m.index + m[0].length + 80);
  const w = +((ctx.match(/"width":(\d+)/) || [0, 0])[1]);
  if (!best[id] || w > best[id].w) best[id] = { u, w };
}
fs.mkdirSync(dir + 'groot', { recursive: true });
const log = [];
for (const [id, { u, w }] of Object.entries(best)) {
  const r = await fetch(u);
  if (!r.ok) continue;
  const b = Buffer.from(await r.arrayBuffer());
  if (b.length < 15000) continue;
  try { const md = await sharp(b).metadata(); fs.writeFileSync(dir + 'groot/' + id, b); log.push(`${id} ${md.width}x${md.height} ${u}`); } catch {}
}
fs.writeFileSync(dir + 'groot/_urls.txt', log.join('\n'));
console.log(log.map((l) => l.slice(0, 70)).join('\n'));
