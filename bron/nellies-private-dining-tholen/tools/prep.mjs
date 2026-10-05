import sharp from 'sharp';
const B = 'bron/fbhi/', A = 'src/assets/';
const job = [
  ['hi-18', 'sliptong'], ['hi-79', 'soepen'], ['hi-24', 'pass'], ['hi-09', 'tongschar'], ['hi-12', 'brioche'],
  ['hi-14', 'veloute'], ['hi-17', 'sticky-toffee'], ['hi-20', 'wonton'], ['hi-08', 'gazpacho'], ['hi-11', 'krab'],
  ['hi-53', 'paula'], ['hi-28', 'zeebaars-druiven'], ['hi-72', 'deur'], ['hi-68', 'kalfswang'],
];
for (const [s, d] of job) await sharp(B + s + '.jpg').rotate().resize({ width: 1800, height: 2400, fit: 'inside', withoutEnlargement: true }).jpeg({ quality: 86, mozjpeg: true }).toFile(A + d + '.jpg');
// Oude foto: kentekens onleesbaar
const plates = [{ left: 60, top: 508, width: 46, height: 22 }, { left: 610, top: 462, width: 40, height: 20 }, { left: 760, top: 447, width: 34, height: 15 }];
const base = sharp(B + 'hi-02.jpg');
const comps = [];
for (const p of plates) comps.push({ input: await sharp(B + 'hi-02.jpg').extract(p).blur(8).toBuffer(), left: p.left, top: p.top });
await base.composite(comps).greyscale().jpeg({ quality: 88 }).toFile(A + 'huis-oud.jpg');
await sharp(B + 'hi-72.jpg').extract({ left: 22, top: 124, width: 318, height: 432 }).png().toFile(A + 'tegel.png');
console.log('ok');
