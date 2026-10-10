// Beeld: eigen Instagram (bron/ig, post 12 juni 2026 zonder watermerk) en eigen TikTok-covers (bron/tt, eigen logo-watermerk weggesneden).
import sharp from 'sharp';
const A = 'src/assets/';
const ig = (n) => `bron/ig/DZe6RPlCE7W-${n}.jpg`;
const tt = (n) => `bron/tt/${n}.jpg`;
const q = { quality: 84, mozjpeg: true };
// Hero: visgraat met zonlicht en donkere keuken (3072x4096). Punt: Hongaarse punt, oranje bouwkoker weggesneden.
await sharp(ig('03')).extract({ left: 0, top: 1150, width: 3072, height: 1900 }).resize(2400).jpeg(q).toFile(A + 'hero-breed.jpg');
await sharp(ig('03')).extract({ left: 120, top: 500, width: 2800, height: 3522 }).resize(1200).jpeg(q).toFile(A + 'hero-hoog.jpg');
await sharp(ig('04')).extract({ left: 1000, top: 1100, width: 2072, height: 2680 }).resize(1300).jpeg(q).toFile(A + 'punt.jpg');
await sharp(ig('07')).extract({ left: 0, top: 700, width: 3072, height: 3072 }).resize(1400).jpeg(q).toFile(A + 'licht.jpg');
await sharp(ig('12')).resize(1200).jpeg(q).toFile(A + 'trap.jpg');
await sharp(ig('10')).resize(1200).jpeg(q).toFile(A + 'deuren.jpg');
await sharp(ig('05')).resize(1200).jpeg(q).toFile(A + 'woonkamer.jpg');
await sharp(ig('06')).resize(1200).jpeg(q).toFile(A + 'keuken.jpg');
// Proces (TikTok-covers 1080x1920, watermerk zit rond y 1450-1650: daarboven snijden).
await sharp(tt('7637546581402717472')).extract({ left: 0, top: 80, width: 1080, height: 1350 }).jpeg(q).toFile(A + 'p-gieten.jpg');
await sharp(tt('7639002285321784608')).extract({ left: 0, top: 80, width: 1080, height: 1350 }).jpeg(q).toFile(A + 'p-glad.jpg');
await sharp(tt('7643797652181765408')).extract({ left: 0, top: 80, width: 1080, height: 1350 }).jpeg(q).toFile(A + 'p-leggen.jpg');
await sharp(tt('7632342779284311329')).extract({ left: 0, top: 80, width: 1080, height: 1350 }).jpeg(q).toFile(A + 'p-plint.jpg');
await sharp(tt('7693811143395036449')).extract({ left: 0, top: 260, width: 1080, height: 1200 }).jpeg(q).toFile(A + 'bernini.jpg');
await sharp(tt('7656401792812551456')).extract({ left: 0, top: 60, width: 1080, height: 1380 }).jpeg(q).toFile(A + 'sage.jpg');
console.log('ok');


