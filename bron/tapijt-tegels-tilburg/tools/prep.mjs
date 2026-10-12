// Beeld: eigen foto's van hun Google-profiel (bron/google/foto), kleurstalen van tapijt-tegels.eu (bron/site/img),
// sfeerfoto's van Unsplash (bron/unsplash, license free).
import sharp from 'sharp'; import fs from 'node:fs';
const G = 'bron/google/foto/', I = 'bron/site/img/', U = 'bron/unsplash/', A = 'src/assets/'; const q = { quality: 80, mozjpeg: true };
for (const f of fs.readdirSync(A)) if (f.endsWith('.jpg')) fs.unlinkSync(A + f);
const cp = (src, out, w = 2000) => sharp(src).rotate().resize({ width: w, withoutEnlargement: true }).jpeg(q).toFile(A + out);
await cp(G + 'g01.jpg', 'hero.jpg', 1800);
await cp(G + 'g07.jpg', 'loods-2.jpg', 1400);
await cp(G + 'g03.jpg', 'loods-deur.jpg', 1400);
await cp(G + 'g09.jpg', 'loods-rek.jpg', 1400);
await cp(G + 'g08.jpg', 'bord.jpg', 1600);

await cp(G + 'g04.jpg', 'tegels-close.jpg', 1600);
await cp(U + 'photo-1594235046256-90e5572fd5f9.jpg', 'u-kantoor.jpg', 1600);
await cp(U + 'photo-1676474987690-2fc0582a07ec.jpg', 'u-tegelvloer.jpg', 2000);
// kleurstalen van hun site (350x300), vierkant uitgesneden
const st = { 'groen': '08_01Groen.jpeg', 'beige': '09_Tapijttegels-05.jpg', 'grijs-vilt': '10_03Grijs.jpeg', 'grijs-donkergrijs': '11_Tapijttegels-04.jpg', 'paars': '12_05Paars.jpg', 'blauw-groen': '13_06Groen-blauw.jpg', 'grijs-streep': '14_07-Grijs-Streep.jpeg', 'beige-2': '15_08-Beige.jpeg', 'zwart-grijs-streep': '16_09-Zwart-Grijs.jpeg', 'rood': '17_10-Rood.jpeg', 'antraciet': '18_11-Antraciet.jpeg', 'beige-geblokt': '19_12-Beige-Geblokt.jpeg' };
for (const [k, f] of Object.entries(st)) await sharp(I + f).extract({ left: 25, top: 0, width: 300, height: 300 }).jpeg({ quality: 82, mozjpeg: true }).toFile(A + 'st-' + k + '.jpg');
console.log(fs.readdirSync(A).join(' '));
