import sharp from 'sharp';
const B = 'bron/fbhi/', A = 'src/assets/';
const job = [
  ['hi-60', 'etalage-turquoise'], ['hi-17', 'etalage-roest'], ['hi-28', 'etalage-blauw'], ['hi-57', 'etalage-broeken'],
  ['hi-35', 'item-tuniek'], ['hi-16', 'item-riemen'], ['hi-36', 'item-truien'], ['hi-69', 'detail-borduur'], ['hi-10', 'item-sjaal'],
];
for (const [s, d] of job) { await sharp(B + s + '.jpg').rotate().resize({ width: 1800, height: 2400, fit: 'inside' }).jpeg({ quality: 84, mozjpeg: true }).toFile(A + d + '.jpg'); }
await sharp('bron/ig/ig-13.jpg').jpeg({ quality: 90 }).toFile(A + 'item-jassen.jpg');
await sharp(B + 'hi-01.jpg').jpeg({ quality: 90 }).toFile(A + 'curiosa-omslag.jpg');
// Engeltje uit het logo: bovenste deel, wit -> transparant
const { data, info } = await sharp('bron/logo-fb.jpg').extract({ left: 20, top: 10, width: 385, height: 270 }).greyscale().raw().toBuffer({ resolveWithObject: true });
const rgba = Buffer.alloc(info.width * info.height * 4);
for (let i = 0; i < info.width * info.height; i++) { const v = data[i]; const a = Math.max(0, Math.min(255, (235 - v) * 1.35)); rgba[i * 4] = 0; rgba[i * 4 + 1] = 0; rgba[i * 4 + 2] = 0; rgba[i * 4 + 3] = a; }
await sharp(rgba, { raw: { width: info.width, height: info.height, channels: 4 } }).png().toFile(A + 'engel.png');
console.log('ok');
