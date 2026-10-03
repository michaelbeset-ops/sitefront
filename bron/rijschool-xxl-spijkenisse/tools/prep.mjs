// Bronfoto's -> src/assets: bijsnijden, kentekens (en verouderde prijzen op de garagedeur) onleesbaar maken.
import sharp from 'sharp';
const B = 'bron/', A = 'src/assets/';
async function maak(bron, uit, { blur = [], crop, breed = 1800, q = 82 } = {}) {
  let img = sharp(B + bron).rotate();
  const buf = await img.toBuffer();
  const lagen = [];
  for (const [left, top, width, height] of blur) {
    const stuk = await sharp(buf).extract({ left, top, width, height }).blur(Math.max(8, Math.round(height / 4))).modulate({ brightness: 1 }).toBuffer();
    lagen.push({ input: stuk, left, top });
  }
  let s = sharp(buf).composite(lagen);
  let tmp = await s.toBuffer();
  if (crop) tmp = await sharp(tmp).extract(crop).toBuffer();
  await sharp(tmp).resize({ width: breed, withoutEnlargement: true }).jpeg({ quality: q, mozjpeg: true }).toFile(A + uit);
  console.log(uit);
}
await maak('google/g-39.jpg', 'hero.jpg', { blur: [[48, 612, 92, 100]], crop: { left: 0, top: 0, width: 1600, height: 1130 }, breed: 1600 });
await maak('google/g-41.jpg', 'auto.jpg', { blur: [[100, 1062, 210, 100]], crop: { left: 0, top: 380, width: 760, height: 950 }, breed: 760 });
await maak('site/john-van-der-linden-fotografie-rijschool-flits06.jpg', 'motor.jpg', { crop: { left: 0, top: 0, width: 1000, height: 610 }, breed: 1000 });
await maak('site/scooter-rijles2.jpg', 'brom.jpg', { blur: [[1995, 1785, 145, 120]], crop: { left: 0, top: 650, width: 2448, height: 2000 }, breed: 1200 });
await maak('site/ffff-e1550688813982.jpg', 'pand.jpg', { blur: [[4370, 1185, 300, 90], [920, 560, 540, 160], [1110, 750, 620, 100], [5520, 1160, 220, 110]], crop: { left: 300, top: 150, width: 6367, height: 1850 }, breed: 2400 });
await maak('site/zz-test-2.jpg', 'tony.jpg', { breed: 709 });
await maak('site/xxxzzzzzzzzzz.jpg', 'kevin.jpg', { breed: 165 });
await maak('site/Cheyenne-5.jpg', 'cheyenne.jpg', { breed: 600 });
await maak('site/Melissa-2.jpg', 'melissa.jpg', { crop: { left: 0, top: 0, width: 2362, height: 2600 }, breed: 600 });
await maak('google/g-22.jpg', 'dakbord.jpg', { breed: 1200 });
await maak('site/john-van-der-linden-fotografie-rijschool-flits08.jpg', 'l-motor1.jpg', { crop: { left: 0, top: 0, width: 1000, height: 610 }, breed: 1000 });
await maak('site/john-van-der-linden-fotografie-rijschool-fdlits14.jpg', 'l-motor2.jpg', { crop: { left: 0, top: 0, width: 1000, height: 610 }, breed: 1000 });
await maak('site/IMG_4365-1-e1514653894640.jpg', 'l-brom.jpg', { breed: 960 });
await maak('site/john-van-der-linden-fotografie-rijschool-flits12.jpg', 'l-terrein.jpg', { crop: { left: 0, top: 0, width: 1000, height: 610 }, breed: 1000 });
await maak('google/g-18.jpg', 'l-bord.jpg', { breed: 1000 });
