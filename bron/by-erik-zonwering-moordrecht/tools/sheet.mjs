import sharp from 'sharp'; import fs from 'node:fs';
const [dir, out] = process.argv.slice(2);
const fs2 = fs.readdirSync(dir).filter(f => /\.jpe?g$/i.test(f)).sort();
const W = 400, H = 300; const comp = [];
for (const [i, f] of fs2.entries()) { const m = await sharp(dir + '/' + f).metadata(); console.log(f, m.width + 'x' + m.height);
  const img = await sharp(dir + '/' + f).resize(W, H, { fit: 'contain', background: '#222' }).composite([{ input: Buffer.from(`<svg width="${W}" height="30"><rect width="${W}" height="30" fill="black"/><text x="6" y="22" font-size="20" fill="yellow">${f} ${m.width}x${m.height}</text></svg>`), top: 0, left: 0 }]).toBuffer();
  comp.push({ input: img, left: (i % 4) * (W + 6), top: Math.floor(i / 4) * (H + 6) }); }
await sharp({ create: { width: 4 * (W + 6), height: Math.ceil(fs2.length / 4) * (H + 6), channels: 3, background: '#fff' } }).composite(comp).jpeg({ quality: 80 }).toFile(out);
