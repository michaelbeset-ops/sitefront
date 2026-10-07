import sharp from 'sharp';
const B = 'bron/fbhi/', A = 'src/assets/';
const job = [
  ['hi-18', 'sliptong'], ['hi-24', 'pass'], ['hi-09', 'tongschar'], ['hi-68', 'kalfswang'],
];
for (const [s, d] of job) await sharp(B + s + '.jpg').rotate().resize({ width: 1800, height: 2400, fit: 'inside', withoutEnlargement: true }).jpeg({ quality: 86, mozjpeg: true }).toFile(A + d + '.jpg');
// Oude foto: kentekens onleesbaar
const plates = [{ left: 60, top: 508, width: 46, height: 22 }, { left: 610, top: 462, width: 40, height: 20 }, { left: 760, top: 447, width: 34, height: 15 }];
const base = sharp(B + 'hi-02.jpg');
const comps = [];
for (const p of plates) comps.push({ input: await sharp(B + 'hi-02.jpg').extract(p).blur(8).toBuffer(), left: p.left, top: p.top });
await base.composite(comps).greyscale().jpeg({ quality: 88 }).toFile(A + 'huis-oud.jpg');
console.log('ok');
