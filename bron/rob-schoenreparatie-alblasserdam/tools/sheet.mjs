import sharp from 'sharp'; import fs from 'node:fs';
const d = process.argv[2], out = process.argv[3]; const fs_ = fs.readdirSync(d).filter(f => f.endsWith('.jpg')).sort();
const W = 300, H = 220, C = 5; const comp = [];
for (const [i, f] of fs_.entries()) { const buf = await sharp(d + '/' + f).resize(W, H, { fit: 'cover' }).toBuffer();
  const lab = Buffer.from(`<svg width="${W}" height="${H}"><rect width="34" height="26" fill="#000"/><text x="5" y="19" font-size="18" fill="#fff" font-family="Arial">${i}</text></svg>`);
  comp.push({ input: buf, left: (i % C) * (W + 6), top: Math.floor(i / C) * (H + 6) }, { input: lab, left: (i % C) * (W + 6), top: Math.floor(i / C) * (H + 6) }); }
await sharp({ create: { width: C * (W + 6), height: Math.ceil(fs_.length / C) * (H + 6), channels: 3, background: '#888' } }).composite(comp).png().toFile(out);
