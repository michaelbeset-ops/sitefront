// node tools/overzicht.mjs shots/r3-full-390.png uit.png [kolommen]: lange mobiele pagina naast elkaar in kolommen
import sharp from 'sharp';
const [f, uit, k = 4] = process.argv.slice(2); const K = +k;
const m = await sharp(f).metadata(); const ph = Math.ceil(m.height / K); const comp = [];
for (let i = 0; i < K; i++) comp.push({ input: await sharp(f).extract({ left: 0, top: i * ph, width: m.width, height: Math.min(ph, m.height - i * ph) }).toBuffer(), left: i * (m.width + 10), top: 0 });
const buf = await sharp({ create: { width: K * (m.width + 10), height: ph, channels: 3, background: '#888' } }).composite(comp).png().toBuffer();
await sharp(buf).resize({ height: 1900 }).png().toFile(uit);
