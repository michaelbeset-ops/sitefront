import sharp from 'sharp'; import fs from 'node:fs';
const dir = process.argv[2], uit = process.argv[3], pre = process.argv[4] || 'w_'; const fs_ = fs.readdirSync(dir).filter(f => f.startsWith(pre) && /\.(jpe?g|png|webp)$/i.test(f));
const W = 400, H = 300, cols = 5; const parts = [];
for (const [i, f] of fs_.entries()) {
  const img = await sharp(dir + '/' + f).resize(W, H - 24, { fit: 'contain', background: '#222' }).toBuffer();
  const lab = Buffer.from(`<svg width="${W}" height="24"><rect width="100%" height="100%" fill="#000"/><text x="6" y="17" font-size="15" fill="#fff" font-family="Arial">${i} ${f}</text></svg>`);
  parts.push({ input: img, left: (i % cols) * W, top: Math.floor(i / cols) * H + 24 }, { input: lab, left: (i % cols) * W, top: Math.floor(i / cols) * H });
}
await sharp({ create: { width: W * cols, height: H * Math.ceil(fs_.length / cols), channels: 3, background: '#333' } }).composite(parts).jpeg().toFile(uit);
