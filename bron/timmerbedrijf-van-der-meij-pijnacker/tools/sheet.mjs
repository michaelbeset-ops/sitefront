import sharp from 'sharp';
import fs from 'node:fs';
const dir = process.argv[2]; const out = process.argv[3]; const filter = process.argv[4] || '';
const files = fs.readdirSync(dir).filter(f => /\.(jpe?g|png)$/i.test(f) && f.includes(filter)).sort();
const W = 300, H = 225, C = 6, per = 30;
let lines = [];
for (let s = 0; s * per < files.length; s++) {
  const part = files.slice(s * per, (s + 1) * per);
  const comps = [];
  for (let i = 0; i < part.length; i++) {
    const n = s * per + i; lines.push(`${n}\t${part[i]}`);
    let meta; try { meta = await sharp(`${dir}/${part[i]}`).metadata(); } catch { continue; }
    const buf = await sharp(`${dir}/${part[i]}`).rotate().resize(W, H, { fit: 'cover' }).toBuffer();
    const x = (i % C) * W, y = Math.floor(i / C) * (H + 20);
    comps.push({ input: buf, left: x, top: y + 20 });
    const label = Buffer.from(`<svg width="${W}" height="20"><rect width="100%" height="100%" fill="#000"/><text x="4" y="15" font-size="13" fill="#ff0" font-family="Arial">${n} ${meta.width}x${meta.height} ${part[i].slice(0,30)}</text></svg>`);
    comps.push({ input: label, left: x, top: y });
  }
  const rows = Math.ceil(part.length / C);
  await sharp({ create: { width: W * C, height: rows * (H + 20), channels: 3, background: '#222' } }).composite(comps).jpeg({ quality: 80 }).toFile(`${out}-${s}.jpg`);
}
fs.writeFileSync(`${out}.txt`, lines.join('\n'));
console.log(files.length);
