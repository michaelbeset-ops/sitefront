import sharp from 'sharp'; import fs from 'node:fs'; import path from 'node:path';
const [dir, out, cols = 5, T = 360] = process.argv.slice(2);
const fs_ = fs.readdirSync(dir).filter(f => /\.(jpe?g|png|webp)$/i.test(f) && !f.startsWith('_'));
const C = +cols, S = +T, rows = Math.ceil(fs_.length / C);
const comp = [];
for (let i = 0; i < fs_.length; i++) {
  const buf = await sharp(path.join(dir, fs_[i])).flatten({background:'#888'}).resize(S, S, { fit: 'contain', background: '#222' }).toBuffer();
  comp.push({ input: buf, left: (i % C) * S, top: Math.floor(i / C) * (S + 24) });
  const lbl = Buffer.from(`<svg width="${S}" height="24"><rect width="100%" height="100%" fill="#fff"/><text x="4" y="17" font-size="14" font-family="Arial">${i+1}: ${fs_[i].slice(0,40)}</text></svg>`);
  comp.push({ input: lbl, left: (i % C) * S, top: Math.floor(i / C) * (S + 24) + S });
}
await sharp({ create: { width: C * S, height: rows * (S + 24), channels: 3, background: '#fff' } }).composite(comp).jpeg({quality:80}).toFile(out);
console.log(fs_.length);
