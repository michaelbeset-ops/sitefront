// Beeld voorbereiden. Eigen foto's: Google-profiel Kopasol (bron/fotos) en hun Marktplaats-advertenties "Ksol horren" (bron/marktplaats).
// Sfeerfoto's: Unsplash (bron/us). Zie src/assets/BRONNEN.txt.
import sharp from 'sharp';
const A = 'src/assets/'; const q = { quality: 80, mozjpeg: true };
const M = 'bron/marktplaats/mp-';
await sharp(M + '7f8ca4dd-4a64-476b-b3dd-7b5046e186a2.jpg').resize(1000).jpeg(q).toFile(A + 'eigen-dubbel.jpg');
await sharp(M + '700e1d1c-3c47-4083-b7f9-ba79a8ce5ebd.jpg').resize(1000).jpeg(q).toFile(A + 'eigen-antraciet.jpg');
await sharp(M + 'e4f03bfe-eaad-4233-94bc-3e60e9296eb4.jpg').resize(1000).jpeg(q).toFile(A + 'eigen-wit.jpg');
await sharp(M + '6e9c1145-dcea-48ac-8e77-d2e77362470c.jpg').resize(1000).jpeg(q).toFile(A + 'eigen-hamstra.jpg');
await sharp('bron/fotos/gm-05.jpg').resize(1100).jpeg(q).toFile(A + 'eigen-geplaatst.jpg');
await sharp('bron/us/hero.jpg').jpeg({ quality: 82, mozjpeg: true }).toFile(A + 's-hero.jpg');
await sharp('bron/us/gordijn.jpg').jpeg(q).toFile(A + 's-gordijn.jpg');
await sharp('bron/us/deuren.jpg').jpeg(q).toFile(A + 's-deuren.jpg');
console.log('ok');
