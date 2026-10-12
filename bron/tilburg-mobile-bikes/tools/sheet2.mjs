import sharp from 'sharp'; import fs from 'node:fs'; import path from 'node:path';
const dir = process.argv[2]; const out = process.argv[3];
const fs_ = fs.readdirSync(dir).filter(f => f.endsWith('.jpg')).sort();
const W = 640, H = 420, C = 3;
const tiles = await Promise.all(fs_.map(async (f, i) => {
  const img = await sharp(path.join(dir, f)).resize(W, H, { fit: 'cover' }).toBuffer();
  const svg = Buffer.from(`<svg width="${W}" height="${H}"><rect width="70" height="26" fill="black"/><text x="5" y="19" font-size="18" fill="yellow" font-family="Arial">${f.slice(0,4)}</text></svg>`);
  return { input: await sharp(img).composite([{ input: svg }]).toBuffer(), left: (i % C) * W, top: Math.floor(i / C) * H };
}));
await sharp({ create: { width: C * W, height: Math.ceil(fs_.length / C) * H, channels: 3, background: '#000' } }).composite(tiles).jpeg({ quality: 80 }).toFile(out);
