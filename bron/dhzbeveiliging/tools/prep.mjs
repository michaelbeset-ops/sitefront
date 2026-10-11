// Beeld: alleen eigen foto's van hun Google-profiel (geplaatst door "DHZbeveiliging.nl" / "DHZ beveiliging", o.a. nov 2019).
// Geen gezichten, geen kentekens op deze foto's.
import sharp from 'sharp';
const A = 'src/assets/';
const g = (n) => `bron/google/${n}`;
const q = { quality: 84, mozjpeg: true };
await sharp(g('f05.jpg')).resize(1920, 1440, { fit: 'cover' }).jpeg(q).toFile(A + 'hero-breed.jpg');          // zwarte Dahua-dome op baksteen
await sharp(g('f05.jpg')).extract({ left: 520, top: 0, width: 900, height: 1200 }).jpeg(q).toFile(A + 'hero-hoog.jpg');
await sharp(g('f04.jpg')).jpeg(q).toFile(A + 'codeklavier.jpg');
await sharp(g('f02.jpg')).jpeg(q).toFile(A + 'dome-wit.jpg');
await sharp(g('f03.jpg')).jpeg(q).toFile(A + 'bullet.jpg');
await sharp(g('f06.jpg')).jpeg(q).toFile(A + 'dome-plafond.jpg');
await sharp(g('f08.jpg')).jpeg(q).toFile(A + 'ajax-buiten.jpg');
console.log('ok');
