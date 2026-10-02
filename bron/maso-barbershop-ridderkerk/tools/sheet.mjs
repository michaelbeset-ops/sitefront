import sharp from 'sharp'; import fs from 'node:fs';
const dir = process.argv[2], out = process.argv[3];
const fs_ = fs.readdirSync(dir).filter(f => /\.jpe?g$/.test(f)).sort((a,b)=>a.localeCompare(b,undefined,{numeric:true}));
const W = 300, H = 400, cols = 6; const comps = [];
for (const [i, f] of fs_.entries()) {
  const img = await sharp(dir + '/' + f).resize(W, H, { fit: 'contain', background: '#222' }).toBuffer();
  const lab = Buffer.from(`<svg width="${W}" height="30"><rect width="${W}" height="30" fill="#000"/><text x="8" y="21" font-size="18" fill="#ff0" font-family="Arial">${f}</text></svg>`);
  comps.push({ input: img, left: (i % cols) * W, top: Math.floor(i / cols) * (H + 30) + 30 }, { input: lab, left: (i % cols) * W, top: Math.floor(i / cols) * (H + 30) });
}
const rows = Math.ceil(fs_.length / cols);
await sharp({ create: { width: cols * W, height: rows * (H + 30), channels: 3, background: '#111' } }).composite(comps).png().toFile(out);
