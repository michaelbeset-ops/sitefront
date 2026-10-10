// Beeld voorbereiden: kentekens blurren, snedes maken. Bronnen in bron/fb (eigen FB) en bron/google (klantfoto's in hun werkplaats).
import sharp from 'sharp';
const A = 'src/assets/';
const blur = async (src, boxes, pad = 8) => {
  const img = sharp(src); const m = await img.metadata(); const comps = [];
  for (const [x1, y1, x2, y2] of boxes) {
    const left = Math.max(0, x1 - pad), top = Math.max(0, y1 - pad);
    const width = Math.min(m.width - left, x2 - x1 + 2 * pad), height = Math.min(m.height - top, y2 - y1 + 2 * pad);
    comps.push({ input: await sharp(src).extract({ left, top, width, height }).blur(20).modulate({ brightness: .78, saturation: .55 }).toBuffer(), left, top });
  }
  return sharp(await img.composite(comps).toBuffer());
};
// Hero: eigen FB-foto 6 maart 2023, de werkplaats vol Harleys onder het bord "PEET'S HD SERVICE".
const hero = await blur('bron/fb/fb-20230306.jpg', [[110,811,176,858],[374,715,422,746],[420,694,453,723],[592,911,651,961],[678,978,746,1032],[676,1096,763,1165],[829,1343,975,1448]]);
const hb = await hero.jpeg({ quality: 92 }).toBuffer();
await sharp(hb).toFile('bron/fb/_hero-geblurd.jpg');
await sharp(hb).extract({ left: 0, top: 420, width: 1152, height: 860 }).jpeg({ quality: 86, mozjpeg: true }).toFile(A + 'hero-breed.jpg');
await sharp(hb).extract({ left: 0, top: 380, width: 1152, height: 1668 }).jpeg({ quality: 84, mozjpeg: true }).toFile(A + 'hero-hoog.jpg');
await sharp('bron/google/g00-martin.jpg').extract({ left: 0, top: 260, width: 1200, height: 1340 }).jpeg({ quality: 86, mozjpeg: true }).toFile(A + 'werkbank.jpg');
await sharp('bron/google/g06-leo.jpg').extract({ left: 0, top: 440, width: 721, height: 900 }).jpeg({ quality: 88, mozjpeg: true }).toFile(A + 'vtwin.jpg');
await sharp('bron/google/g07-leo.jpg').jpeg({ quality: 86, mozjpeg: true }).toFile(A + 'distributie.jpg');
// Logo uit FB-bericht 6 juli 2026 (alleen de witte strook).
await sharp('bron/fb/fb-20260706.jpg').extract({ left: 0, top: 826, width: 946, height: 392 }).png().toFile(A + 'logo.png');
console.log('ok');
