// Beeld: gerechten, interieur en pand = foto's op het Google-profiel van Teppratanporn (bron/google/foto, nummers in BRONNEN.txt);
// menukaart = foto van hun eigen gedrukte kaart (bron/menu/foto); hero = Unsplash-sfeerfoto (bron/unsplash).
import sharp from 'sharp'; import fs from 'node:fs';
const G = 'bron/google/foto/', A = 'src/assets/'; const q = { quality: 82, mozjpeg: true };
const crop = (src, out, box, w) => { let s = sharp(src); if (box) s = s.extract(box); return s.resize({ width: w, withoutEnlargement: true }).jpeg(q).toFile(A + out); };
await crop('bron/unsplash/r8lDTtSWGUc-wok.jpg', 'hero.jpg', null, 2000);
const d = [['041', 'padthai'], ['022', 'tomkha'], ['012', 'massaman'], ['006', 'viskoek'], ['024', 'sate'], ['001', 'loempia'], ['014', 'laab'], ['019', 'tomyam'], ['047', 'rood'], ['016', 'wok']];
for (const [n, o] of d) await crop(G + n + '.jpg', 'g-' + o + '.jpg', null, 1100);
await crop(G + '034.jpg', 'interieur.jpg', { left: 0, top: 0, width: 2000, height: 1320 }, 1600);
await crop(G + '046.jpg', 'pand.jpg', { left: 380, top: 600, width: 1620, height: 2067 }, 1200);
await crop('bron/menu/foto/menu-00.jpg', 'menukaart.jpg', { left: 1250, top: 110, width: 1150, height: 1560 }, 1000);
console.log(fs.readdirSync(A).join(' '));
