// Beeld voorbereiden. Eigen foto's: Google-profiel Riant (bron/google/img). Sfeerfoto's: Unsplash (bron/unsplash). Zie src/assets/BRONNEN.txt.
import sharp from 'sharp';
const A = 'src/assets/', G = 'bron/google/img/', U = 'bron/unsplash/'; const q = { quality: 80, mozjpeg: true };
async function blur(src, boxes) { // boxes in bronpixels: [x,y,w,h]
  let img = sharp(src).rotate(); const comps = [];
  for (const [x, y, w, h] of boxes) comps.push({ input: await sharp(src).rotate().extract({ left: x, top: y, width: w, height: h }).blur(18).toBuffer(), left: x, top: y });
  return sharp(await img.composite(comps).toBuffer());
}
await sharp(U + 'S_HQxP9-eLA.jpg').flop().resize({ width: 2000 }).jpeg(q).toFile(A + 'hero.jpg');
await sharp(U + 'XB4bJqa_9uw.jpg').resize({ width: 1800 }).jpeg(q).toFile(A + 'doek.jpg');
const job = [
  ['g00-ram.jpg', 'w-veranda.jpg', 1400],
  ['g01-pieter.jpg', 'w-knikarm-donker.jpg', 1400],
  ['g04-riant.jpg', 'w-oranje.jpg', 1400],
  ['g05-ram.jpg', 'w-gestreept.jpg', 1400],
  ['g06-riant.jpg', 'w-screen-dicht.jpg', 1200],
  ['g08-riant.jpg', 'w-knikarm-wit.jpg', 1200],
  ['g09-bay.jpg', 'w-balkon.jpg', 1400],
  ['r-denise1.jpg', 'w-screens-kleur.jpg', 1100],
];
for (const [src, dst, w] of job) await sharp(G + src).rotate().resize({ width: w, withoutEnlargement: true }).jpeg(q).toFile(A + dst);
// huisnummers onherkenbaar
await (await blur(G + 'g02-ram.jpg', [[1745, 860, 90, 60]])).resize({ width: 1400 }).jpeg(q).toFile(A + 'w-screens.jpg');
await (await blur(G + 'g03-riant.jpg', [[1205, 930, 80, 80]])).resize({ width: 1400 }).jpeg(q).toFile(A + 'w-villa.jpg');
// groen-wit: alleen bovenste deel, zonder naambordje en huisnummer
await sharp(G + 'g07-riant.jpg').rotate().extract({ left: 0, top: 0, width: 2000, height: 860 }).resize({ width: 1400 }).jpeg(q).toFile(A + 'w-groen.jpg');
console.log('ok');
