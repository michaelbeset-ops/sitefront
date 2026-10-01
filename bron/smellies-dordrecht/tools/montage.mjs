import sharp from 'sharp'; import fs from 'node:fs';
const [pre, w] = [process.argv[2], process.argv[3] || '390'];
const fl = fs.readdirSync('shots').filter((f) => new RegExp(`^_${pre}-${w}-[0-9]+[.]png$`).test(f)).sort((a, b) => parseInt(a.split('-')[2]) - parseInt(b.split('-')[2]));
const per = 5, col = Number(w) + 10;
for (let r = 0; r < Math.ceil(fl.length / per); r++) {
  const set = fl.slice(r * per, r * per + per);
  const buf = await sharp({ create: { width: per * col, height: 1800, channels: 3, background: '#888' } }).composite(set.map((f, i) => ({ input: 'shots/' + f, left: i * col, top: 0 }))).png().toBuffer();
  await sharp(buf).resize(1600).toFile(`shots/_m${pre}-${w}-${r}.png`);
}
console.log(fl.length);
