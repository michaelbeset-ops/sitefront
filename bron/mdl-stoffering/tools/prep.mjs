// Beeld: eigen foto's van mdlstoffering.nl (bron/site/img, telefoonfoto's 720px), Google-profiel (bron/google/img) en
// twee Unsplash-sfeerfoto's (bron/us). Zie src/assets/BRONNEN.txt.
import sharp from 'sharp';
const A = 'src/assets/'; const S = (n) => `bron/site/img/2015_06_${n}.jpg`; const q = { quality: 82, mozjpeg: true };
await sharp('bron/us/photo-1738168246881-40f35f8aba0a.jpg').jpeg(q).toFile(A + 'hero.jpg');
await sharp('bron/us/photo-1634208005896-a6e1d0b2e5fd.jpg').jpeg(q).toFile(A + 'slot.jpg');
for (const [n, o] of [['woning16', 'c-woning'], ['project5', 'c-project'], ['Raamdecoratie2', 'c-raam'], ['woning13', 'w-keuken'], ['woning8', 'w-trap'],
  ['woning4', 'w-laminaat'], ['woning19', 'w-tapijt'], ['woning14', 'w-laminaat2'], ['Woningstoffering2', 'plint'], ['Mikel-de-Laat', 'mikel'], ['woning121', 'w-keuken-lang']]) {
  await sharp(S(n)).jpeg(q).toFile(A + o + '.jpg');
}
// Trappenhuis: straat achter het raam onscherp (auto's).
const tp = S('project8');
const raam = await sharp(tp).extract({ left: 540, top: 0, width: 180, height: 360 }).blur(14).toBuffer();
await sharp(tp).composite([{ input: raam, left: 540, top: 0 }]).jpeg(q).toFile(A + 'w-trappenhuis.jpg');
await sharp('bron/google/img/g01.jpg').jpeg(q).toFile(A + 'showroom.jpg');
await sharp('bron/google/img/g06.jpg').jpeg(q).toFile(A + 'klant-visgraat.jpg');
// Logo: bijsnijden, zwart en wit.
const logo = sharp('bron/site/img/2015_06_MDLstoffering1.png').trim();
await logo.clone().png().toFile(A + 'logo-zwart.png');
await sharp('bron/site/img/2015_06_MDLstoffering1.png').trim().negate({ alpha: false }).png().toFile(A + 'logo-wit.png');
console.log('ok');
