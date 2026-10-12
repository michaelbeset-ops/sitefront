// Beeld: Google-profiel (bron/google/img, uploader in bestandsnaam), Instagram-omslagen (bron/insta/thumbs), 1 Unsplash-sfeerfoto.
import sharp from 'sharp'; import fs from 'node:fs';
const G = 'bron/google/img/', A = 'src/assets/'; const q = { quality: 82, mozjpeg: true };
const cp = (f, out, w = 2000) => sharp(f).rotate().resize({ width: w, withoutEnlargement: true }).jpeg(q).toFile(A + out);
const crop = (f, out, left, top, width, height, w) => sharp(f).rotate().extract({ left, top, width, height }).resize({ width: w, withoutEnlargement: true }).jpeg(q).toFile(A + out);
await cp(G + '02-Ahmad_Algohbary.jpg', 'hero.jpg', 2400);
await cp(G + '04-Ammar_Fn.jpg', 'c-set.jpg', 1100);
await cp(G + '05-sofia_ismail.jpg', 'c-armband.jpg', 1100);
await crop(G + '03-Ahmad_Algohbary.jpg', 'c-oorbel.jpg', 500, 0, 1500, 1350, 1200);
await cp(G + '10-EIGENAAR.jpg', 'c-ring.jpg', 1200);
await cp(G + '07-Haya_Ha.jpg', 'c-hanger.jpg', 1100);
await cp(G + '14-Mousa_mousa.jpg', 'c-naam.jpg', 1100);
await cp(G + '00-EIGENAAR.jpg', 'winkel.jpg', 1400);
await cp(G + '08-EIGENAAR.jpg', 'vitrine.jpg', 1600);
await cp(G + '01-EIGENAAR.jpg', 'ketting.jpg', 1080);
await cp('bron/unsplash/Mr9m0tGdTIE-2000.jpg', 's-reparatie.jpg', 2000);
for (const n of ['01', '02', '03', '05', '06', '07', '08', '10']) await sharp(`bron/insta/thumbs/ig${n}.jpg`).jpeg(q).toFile(A + `ig${n}.jpg`);
console.log(fs.readdirSync(A).join(' '));
