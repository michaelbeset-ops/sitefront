import sharp from 'sharp'; import fs from 'node:fs';
const dir = process.argv[2]; const out = process.argv[3]; const fs2 = fs.readdirSync(dir).filter(f => /\.(jpg|png|webp)$/.test(f)).sort();
const W = 300, H = 260, C = 5; const tiles = [];
for (const [i, f] of fs2.entries()) { try { const m = await sharp(dir + f).metadata();
  const img = await sharp(dir + f).resize(W, H - 22, { fit: 'cover' }).toBuffer();
  const svg = Buffer.from(`<svg width="${W}" height="22"><rect width="100%" height="100%" fill="#000"/><text x="4" y="16" font-size="13" fill="#fff" font-family="Arial">${f.slice(0, 22)} ${m.width}x${m.height}</text></svg>`);
  tiles.push({ input: img, left: (i % C) * W, top: Math.floor(i / C) * H }, { input: svg, left: (i % C) * W, top: Math.floor(i / C) * H + H - 22 }); } catch (e) { console.log('bad', f); } }
await sharp({ create: { width: W * C, height: Math.ceil(fs2.length / C) * H, channels: 3, background: '#222' } }).composite(tiles).jpeg({ quality: 80 }).toFile(out);
