import { createRequire } from 'node:module'; import fs from 'node:fs';
const sharp = createRequire('C:/Users/Micha/Downloads/Sitefront/werkwijze/tools/')('sharp');
const [out, ...nums] = process.argv.slice(2); const files = fs.readdirSync('bron/foto/site');
const W = 600, H = 450; const t = [];
for (const [k, n] of nums.entries()) { const f = files.find((x) => x.startsWith(n)); const b = await sharp('bron/foto/site/' + f).resize(W, H, { fit: 'contain', background: '#fff' }).toBuffer();
  t.push({ input: b, left: (k % 3) * (W + 8), top: Math.floor(k / 3) * (H + 8) }, { input: Buffer.from(`<svg width="60" height="30"><rect width="60" height="30"/><text x="6" y="22" fill="#fff" font-size="20">${n}</text></svg>`), left: (k % 3) * (W + 8), top: Math.floor(k / 3) * (H + 8) }); }
await sharp({ create: { width: 3 * (W + 8), height: Math.ceil(nums.length / 3) * (H + 8), channels: 3, background: '#ddd' } }).composite(t).jpeg({ quality: 75 }).toFile(out);
