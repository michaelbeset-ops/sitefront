import sharp from 'sharp';
const [f, out, H = '2600', from = '0', n = '4'] = process.argv.slice(2);
const m = await sharp(f).metadata(); const comp = [];
for (let i = 0; i < +n; i++) { const top = +from + i * +H; if (top >= m.height) break; const h = Math.min(+H, m.height - top); comp.push({ input: await sharp(f).extract({ left: 0, top, width: m.width, height: h }).toBuffer(), left: i * (m.width + 20), top: 0 }); }
await sharp({ create: { width: comp.length * (m.width + 20), height: +H, channels: 3, background: '#888' } }).composite(comp).png().toFile(out);
