import sharp from 'sharp';
const [f, uit, n = 4, H = 2000] = process.argv.slice(2);
const m = await sharp(f).metadata(); const k = +n; const h = Math.ceil(m.height / k); const parts = [];
for (let i = 0; i < k; i++) parts.push({ input: await sharp(f).extract({ left: 0, top: i * h, width: m.width, height: Math.min(h, m.height - i * h) }).toBuffer(), left: i * (m.width + 10), top: 0 });
const buf = await sharp({ create: { width: (m.width + 10) * k, height: h, channels: 3, background: '#888' } }).composite(parts).png().toBuffer();
await sharp(buf).resize({ height: +H }).png().toFile(uit);
