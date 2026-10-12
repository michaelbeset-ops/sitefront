import sharp from 'sharp'; import fs from 'node:fs';
const dir = process.argv[5] || 'bron/google/foto/'; const fs2 = fs.readdirSync(dir).filter(f => f.endsWith('.jpg')).sort();
const [from, to, out] = [Number(process.argv[2]), Number(process.argv[3]), process.argv[4]];
const sel = fs2.slice(from, to); const W = 300, H = 260, C = 5;
const tiles = [];
for (const [i, f] of sel.entries()) {
  try { const m = await sharp(dir + f).metadata();
    const img = await sharp(dir + f).resize(W, H - 22, { fit: 'cover' }).toBuffer();
    const svg = Buffer.from(`<svg width="${W}" height="22"><rect width="100%" height="100%" fill="#000"/><text x="4" y="16" font-size="14" fill="#fff" font-family="Arial">${f} ${m.width}x${m.height}</text></svg>`);
    tiles.push({ input: img, left: (i % C) * W, top: Math.floor(i / C) * H }, { input: svg, left: (i % C) * W, top: Math.floor(i / C) * H + H - 22 });
  } catch (e) { console.log('bad', f); }
}
await sharp({ create: { width: W * C, height: Math.ceil(sel.length / C) * H, channels: 3, background: '#222' } }).composite(tiles).jpeg({ quality: 80 }).toFile(out);
