import sharp from 'sharp'; import fs from 'node:fs'; import path from 'node:path';
const [dir, out, cols = 6] = process.argv.slice(2);
const fs_ = fs.readdirSync(dir).filter(f => /\.(jpe?g|png|webp)$/i.test(f) && !f.startsWith('_'));
const W = 300, H = 300;
const tiles = await Promise.all(fs_.map(async (f, i) => {
  const img = await sharp(path.join(dir, f)).resize(W, H, { fit: 'contain', background: '#222' }).toBuffer();
  const meta = await sharp(path.join(dir, f)).metadata();
  const lbl = Buffer.from(`<svg width="${W}" height="22"><rect width="100%" height="100%" fill="#000"/><text x="4" y="16" font-size="14" fill="#ff0" font-family="Arial">${f} ${meta.width}x${meta.height}</text></svg>`);
  return [{ input: img, left: (i % cols) * W, top: Math.floor(i / cols) * (H + 22) }, { input: lbl, left: (i % cols) * W, top: Math.floor(i / cols) * (H + 22) + H }];
}));
await sharp({ create: { width: W * cols, height: (H + 22) * Math.ceil(fs_.length / cols), channels: 3, background: '#fff' } }).composite(tiles.flat()).jpeg({ quality: 75 }).toFile(out);
console.log(fs_.length);
