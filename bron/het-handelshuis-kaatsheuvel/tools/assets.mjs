// Beeld: eigen foto's uit hun Marktplaats-advertenties (bron/mp/img, 1024 px) + 1 Unsplash-sfeerfoto voor de hero.
import sharp from 'sharp'; import fs from 'node:fs';
const M = 'bron/mp/img/', A = 'src/assets/'; const q = { quality: 84, mozjpeg: true };
const cp = (f, out, w = 1024) => sharp(M + f).resize({ width: w, withoutEnlargement: true }).jpeg(q).toFile(A + out);
await sharp('bron/unsplash/hero-1779144639439.jpg').resize({ width: 2400 }).jpeg({ quality: 80, mozjpeg: true }).toFile(A + 'hero.jpg');
await cp('mp070.jpg', 'c-hoek.jpg');
await cp('mp041.jpg', 'c-bank.jpg');
await cp('mp080.jpg', 'c-relax.jpg');
await cp('mp123.jpg', 'c-staop.jpg');
await cp('mp065.jpg', 'c-tafel.jpg');
await cp('mp002.jpg', 'c-mango.jpg');
await cp('mp061.jpg', 'maatwerk.jpg');
await cp('mp111.jpg', 's-relax.jpg');
await cp('mp063.jpg', 's-tafels.jpg');
await cp('mp107.jpg', 's-fauteuil.jpg');
await cp('mp054.jpg', 's-leer.jpg');
console.log(fs.readdirSync(A).join(' '));
