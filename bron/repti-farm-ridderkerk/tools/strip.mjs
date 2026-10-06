// node tools/strip.mjs <prefix> <breedte> : zet de 1800px-stukken naast elkaar
import sharp from 'sharp'; import fs from 'node:fs';
const [pre, w] = process.argv.slice(2);
const fsn = fs.readdirSync('shots').filter(f => f.startsWith(`_${pre}-${w}-`) && /-\d+\.png$/.test(f)).sort((a, b) => +a.match(/(\d+)\.png/)[1] - +b.match(/(\d+)\.png/)[1]);
const ims = []; let x = 0; for (const f of fsn) { const m = await sharp('shots/' + f).metadata(); ims.push({ input: 'shots/' + f, left: x, top: 0 }); x += m.width + 12; }
const buf = await sharp({ create: { width: x, height: 1800, channels: 3, background: '#888' } }).composite(ims).png().toBuffer();
await sharp(buf).resize(Math.round(x * 0.7)).toFile(`shots/_${pre}-${w}-strip.png`); console.log(fsn.length);
