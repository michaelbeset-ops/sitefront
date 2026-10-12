// Beeld: uitsluitend eigen foto's van Pinxos (Google "Van eigenaar" in bron/google/eigen, menu-foto's in bron/google/menu,
// en foto's van hun eigen site pinxos.nl via het webarchief in bron/archief/img). Geen stock.
import sharp from 'sharp'; import fs from 'node:fs';
const G = 'bron/google/eigen/', M = 'bron/google/menu/', W = 'bron/archief/img/', A = 'src/assets/'; const q = { quality: 80, mozjpeg: true };
const cp = (f, out, w = 1600) => sharp(f).rotate().resize({ width: w, withoutEnlargement: true }).jpeg(q).toFile(A + out);
const crop = (f, out, l, t, w, h, rw) => sharp(f).extract({ left: l, top: t, width: w, height: h }).resize({ width: rw, withoutEnlargement: true }).jpeg(q).toFile(A + out);
await cp(G + '01.jpg', 'hero.jpg', 1600);                     // vier pintxos op een plank (ook voorkant van hun menukaart)
await cp(G + '03.jpg', 'hero-m.jpg', 1280);                  // het steegje met paraplu's
await cp(G + '12.jpg', 'r-baskenland.jpg', 1100);            // plank pintxos
await cp(G + '09.jpg', 'r-sevilla.jpg', 1400);               // bravas en albondigas
await cp(G + '34.jpg', 'r-latijns.jpg', 1100);               // ribeye met pimientos
await cp(G + '18.jpg', 'vitrine.jpg', 1100);                 // pintxos op de lange plank
await cp(G + '24.jpg', 'plank-pintxos.jpg', 1100);           // pintxos op een plank, staand
await cp(G + '31.jpg', 'paella.jpg', 1400);
await cp(G + '23.jpg', 'paraplu.jpg', 1100);
await cp(G + '14.jpg', 'steeg.jpg', 1100);
await cp(G + '20.jpg', 'tuin.jpg', 1100);
await cp(G + '26.jpg', 'schuur.jpg', 1100);                  // ruimte met muurschildering
await cp(W + 'Locatie-huren-in-Roosendaal.jpg', 'bar.jpg', 1920);
await cp(G + '02.jpg', 'neon.jpg', 1152);
await cp(M + '02.jpg', 'wegwijzers.jpg', 1100);
console.log(fs.readdirSync(A).join(' '));
