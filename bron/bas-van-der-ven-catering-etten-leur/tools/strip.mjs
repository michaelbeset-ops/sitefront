// node tools/strip.mjs <full.png> <uit.png> [kolommen]: lange mobiele screenshot naast elkaar
import sharp from 'sharp';
const [f, uit, k = 4] = process.argv.slice(2); const n = +k;
const m = await sharp(f).metadata(); const W = m.width, H = m.height, h = Math.ceil(H / n);
const parts = []; for (let i = 0; i < n; i++) parts.push({ input: await sharp(f).extract({ left: 0, top: i * h, width: W, height: Math.min(h, H - i * h) }).toBuffer(), left: i * (W + 10), top: 0 });
const buf = await sharp({ create: { width: n * (W + 10), height: h, channels: 3, background: '#888' } }).composite(parts).png().toBuffer();
await sharp(buf).resize({ height: Math.min(h, 2400) }).png().toFile(uit);
