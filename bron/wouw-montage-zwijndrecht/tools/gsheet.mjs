import { createRequire } from 'node:module'; import fs from 'node:fs';
const sharp = createRequire('C:/Users/Micha/Downloads/Sitefront/werkwijze/tools/')('sharp');
const [dir, out] = process.argv.slice(2); const f = fs.readdirSync(dir).filter((x) => /\.jpe?g$/.test(x)); const W = 500, H = 380; const t = [];
for (const [k, n] of f.entries()) { const m = await sharp(dir + '/' + n).metadata(); t.push({ input: await sharp(dir + '/' + n).resize(W, H, { fit: 'contain', background: '#fff' }).toBuffer(), left: (k % 3) * (W + 8), top: Math.floor(k / 3) * (H + 8) }, { input: Buffer.from(`<svg width="200" height="28"><rect width="200" height="28"/><text x="6" y="20" fill="#fff" font-size="18">${n} ${m.width}x${m.height}</text></svg>`), left: (k % 3) * (W + 8), top: Math.floor(k / 3) * (H + 8) }); }
await sharp({ create: { width: 3 * (W + 8), height: Math.ceil(f.length / 3) * (H + 8), channels: 3, background: '#ddd' } }).composite(t).jpeg({ quality: 75 }).toFile(out);
