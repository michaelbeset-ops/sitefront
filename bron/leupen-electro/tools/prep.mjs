// Beeld: uitsluitend eigen foto's van leupenelectro.nl (bron/site/img, achtergronden per pagina, 1900x1200).
// Geen gezichten of kentekens in beeld. Geen Google-foto's (profiel heeft er geen).
import sharp from 'sharp';
const A = 'src/assets/'; const s = (n) => `bron/site/img/background-${n}.jpg`;
const q = { quality: 80, mozjpeg: true };
await sharp(s('mix-01')).jpeg(q).toFile(A + 'hero.jpg');
await sharp(s('mix-01')).extract({ left: 960, top: 0, width: 900, height: 1200 }).jpeg(q).toFile(A + 'hero-hoog.jpg');
const crop = (n, left, top, width, height, w, out) => sharp(s(n)).extract({ left, top, width, height }).resize(w).jpeg(q).toFile(A + out);
await crop('electra', 150, 0, 1500, 1200, 1200, 'electra.jpg');
await crop('data', 0, 150, 1900, 900, 1900, 'data.jpg');
await crop('alarm', 640, 0, 1260, 1200, 1000, 'alarm.jpg');
await crop('beveiliging', 600, 0, 1300, 1200, 1000, 'toegang.jpg');
await crop('brand', 330, 0, 1450, 1200, 1200, 'brand.jpg');
await crop('camera', 620, 0, 1280, 1200, 1000, 'camera.jpg');
await crop('geluid', 640, 60, 1260, 1080, 1100, 'geluid.jpg');
console.log('ok');
