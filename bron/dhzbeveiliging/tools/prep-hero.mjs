// Hero: Unsplash-sfeerfoto (license free) photo-1568605114967-8130f3a36994, zoekterm "house-at-night"/"modern-house-night".
import sharp from 'sharp';
const q = { quality: 82, mozjpeg: true };
await sharp('bron/unsplash/photo-1568605114967-8130f3a36994.jpg').jpeg(q).toFile('src/assets/sfeer-woning.jpg');
const m = await sharp('bron/unsplash/hero-3000.jpg').metadata(); console.log(m.width, m.height);
const h = m.height, w = Math.round(h * 0.62), left = Math.round(m.width * 0.47 - w / 2);
await sharp('bron/unsplash/hero-3000.jpg').extract({ left, top: 0, width: w, height: h }).resize({ width: 1100 }).jpeg(q).toFile('src/assets/sfeer-woning-hoog.jpg');
await sharp('bron/google/f05.jpg').jpeg({ quality: 84, mozjpeg: true }).toFile('src/assets/dome-zwart.jpg');
console.log('ok');
