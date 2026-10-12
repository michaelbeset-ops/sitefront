// Beeld: eigen foto's van Latadia (Google-profiel "Van eigenaar" en hun eigen Instagram @latadiarotterdam),
// aangevuld met twee Unsplash-sfeerfoto's (license free). Zie src/assets/BRONNEN.txt.
import sharp from 'sharp'; import fs from 'node:fs';
const A = 'src/assets/'; const q = { quality: 84, mozjpeg: true };
const cp = (f, out, w) => sharp(f).resize({ width: w, withoutEnlargement: true }).jpeg(q).toFile(A + out);
const G = 'bron/google/eigenaar/', I = 'bron/insta/', U = 'bron/unsplash/';
await cp(G + 'e1.jpg', 'hero.jpg', 2358);              // ronde en rechte tepsi's baklava (eigenaar, apr 2020)
await cp(G + 'e2.jpg', 'baklava.jpg', 1600);           // "Our baklava" (eigenaar)
await cp(G + 'e3.jpg', 'tepsis.jpg', 1800);            // tepsi's vol baklava (eigenaar)
await cp(G + 'e4.jpg', 'pistache.jpg', 768);           // pistache-lekkernij (eigenaar)
await cp(G + 'e5.jpg', 'rond.jpg', 1600);              // ronde tepsi (eigenaar)
await cp(I + 'p-kunefe.jpg', 'kunefe.jpg', 1440);      // Instagram 7 jan 2026
await cp(I + 'p-baklava-trays.jpg', 'assortiment.jpg', 1440); // Instagram 10 mrt 2024
await cp(I + 'p-baklava-tray.jpg', 'tepsi.jpg', 1440); // Instagram 2 jun 2025
await cp(U + 'u-1777891257696-29f0d175f236.jpg', 'u-lahmacun.jpg', 2000);
await cp(U + 'u-1613987108430-b4bb3863e595.jpg', 'u-thee.jpg', 2000);
console.log(fs.readdirSync(A).join(' '));
