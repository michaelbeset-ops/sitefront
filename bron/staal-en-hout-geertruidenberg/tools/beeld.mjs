import sharp from 'sharp';
const s = 'bron/social/', a = 'src/assets/';
// hero desktop: liggende snede uit li2 (lucht boven, ponton + schip midden)
await sharp(s+'li2.jpg').extract({ left: 0, top: 300, width: 1152, height: 720 }).jpeg({ quality: 90 }).toFile(a+'hero.jpg');
// hero mobiel: staande snede rond ponton
await sharp(s+'li2.jpg').extract({ left: 230, top: 0, width: 760, height: 1536 }).jpeg({ quality: 90 }).toFile(a+'hero-m.jpg');
// li3 zonder medewerker rechts
await sharp(s+'li3.jpg').extract({ left: 0, top: 0, width: 718, height: 450 }).jpeg({ quality: 92 }).toFile(a+'ponton-kraan.jpg');
await sharp(s+'li1.jpg').jpeg({ quality: 88 }).toFile(a+'ponton-boven.jpg');
await sharp('bron/sfeer/X6thX8FvMLA.jpg').jpeg({ quality: 88 }).toFile(a+'sfeer-staal.jpg');
await sharp('bron/sfeer/cAchziokMkk.jpg').jpeg({ quality: 88 }).toFile(a+'sfeer-hout.jpg');
await sharp(s+'li2.jpg').extract({ left: 0, top: 380, width: 1152, height: 605 }).resize(1200, 630).jpeg({ quality: 80 }).toFile('public/og.jpg');
console.log('ok');
