import sharp from 'sharp'; import fs from 'node:fs';
const [dir, out, ...files] = process.argv.slice(2);
const T = 360; const tiles = [];
for (const f of files) { const b = await sharp(dir + f).resize(T, T, { fit: 'contain', background: '#888' }).toBuffer(); tiles.push(b); }
const cols = 4, rows = Math.ceil(tiles.length / cols);
await sharp({ create: { width: cols * T, height: rows * T, channels: 3, background: '#222' } }).composite(tiles.map((b, i) => ({ input: b, left: (i % cols) * T, top: Math.floor(i / cols) * T }))).jpeg().toFile(out);
