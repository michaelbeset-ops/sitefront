// Bronfoto's (eigen site recreatieboerderijhollywoud.nl) naar src/assets
import sharp from 'sharp';
const I = 'bron/site/img/', A = 'src/assets/';
const job = [
  ['homestro4', 'hero'], ['erf1', 'koestal'], ['prijs2', 'hek'], ['imp8', 'avond'],
  ['1000029202', 'spel-kubb'], ['1000029216', 'spel-croquet'], ['1000029214', 'spel-zaklopen'], ['1000029220', 'spel-ringwerpen'],
  ['oud', 'oud-stal'], ['oud1', 'oud-erf'], ['hollyoud', 'oud-lucht'], ['oud2', 'oud-varken'],
];
for (const [s, d] of job) await sharp(I + s + '.jpg').rotate().resize({ width: 2400, height: 2400, fit: 'inside', withoutEnlargement: true }).jpeg({ quality: 85, mozjpeg: true }).toFile(A + d + '.jpg');
// Keuken: rechterdeel met persoon weggesneden
await sharp(I + 'keuken.jpg').rotate().extract({ left: 0, top: 0, width: 2780, height: 3024 }).resize({ width: 2000 }).jpeg({ quality: 85, mozjpeg: true }).toFile(A + 'keuken.jpg');
// Stroberg: overhangende tak (boven/links) weggesneden
await sharp(I + 'hekstro.jpg').rotate().extract({ left: 180, top: 300, width: 1420, height: 900 }).jpeg({ quality: 86, mozjpeg: true }).toFile(A + 'stroberg.jpg');
// og
await sharp(I + 'homestro4.jpg').resize(1200, 630, { fit: 'cover', position: 'centre' }).jpeg({ quality: 80 }).toFile('public/og.jpg');
console.log('ok');
