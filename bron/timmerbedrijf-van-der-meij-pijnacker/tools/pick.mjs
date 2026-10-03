import sharp from 'sharp'; import fs from 'node:fs';
const [dir, out, ...idx] = process.argv.slice(2);
const lines = Object.fromEntries(fs.readFileSync(dir + '/../sheet.txt', 'utf8').split('\n').map(l => l.split('\t')));
const W = 600, H = 450, C = 3, comps = [];
for (let i = 0; i < idx.length; i++) {
  const f = lines[idx[i]]; const buf = await sharp(`${dir}/${f}`).rotate().resize(W, H, { fit: 'cover' }).toBuffer();
  const x = (i % C) * W, y = Math.floor(i / C) * (H + 24);
  comps.push({ input: buf, left: x, top: y + 24 }, { input: Buffer.from(`<svg width="${W}" height="24"><rect width="100%" height="100%"/><text x="4" y="17" font-size="15" fill="#ff0" font-family="Arial">${idx[i]} ${f}</text></svg>`), left: x, top: y });
}
await sharp({ create: { width: W * C, height: Math.ceil(idx.length / C) * (H + 24), channels: 3, background: '#222' } }).composite(comps).jpeg({ quality: 82 }).toFile(out);
