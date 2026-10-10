// Beeld voorbereiden. Alleen eigen foto's: Google "Van eigenaar" (bron/google/g0x-eigenaar) en eigen Facebook (bron/fb).
import sharp from 'sharp';
const A = 'src/assets/', G = 'bron/google/', F = 'bron/fb/';
const j = (s, q = 84) => s.jpeg({ quality: q, mozjpeg: true });
// Hero: eiken vloer bij de tuinpuien (Google, eigenaar, juni 2026).
await j(sharp(G + 'g00-eigenaar.jpg')).toFile(A + 'hero-breed.jpg');
await j(sharp(G + 'g00-eigenaar.jpg').extract({ left: 520, top: 0, width: 1125, height: 1500 })).toFile(A + 'hero-hoog.jpg');
// Schuurmachine in strijklicht (Google, eigenaar).
await j(sharp(G + 'g03-eigenaar.jpg')).toFile(A + 'strijklicht.jpg');
// Visgraat (Google, eigenaar, met hun eigen bijschriften).
await j(sharp(G + 'g05-eigenaar.jpg')).toFile(A + 'visgraat-ruimte.jpg');
await j(sharp(G + 'g04-eigenaar.jpg')).toFile(A + 'visgraat-leggen.jpg');
// Machines (Google, eigenaar).
await j(sharp(G + 'g01-eigenaar.jpg')).toFile(A + 'machines.jpg');
// Klus van 16 juni 2026 (Facebook): grof schuren, korrel 120, eindresultaat.
await j(sharp(F + 'fb-20260616-grof-schuren.jpg')).toFile(A + 'stap-grof.jpg');
await j(sharp(F + 'fb-20260616-korrel-120.jpg').extract({ left: 0, top: 120, width: 1080, height: 1700 })).toFile(A + 'stap-120.jpg');
await j(sharp(F + 'fb-20260616-eindresultaat-a.jpg')).toFile(A + 'stap-klaar.jpg');
await j(sharp(F + 'fb-20260616-eindresultaat-b.jpg')).toFile(A + 'klaar-b.jpg');
// Facebook 11 aug 2026: alleen de onderste helft (het resultaat na Royl 2K olie, pigment 11).
await j(sharp(F + 'fb-20260811-vergeeld-eiken.jpg').extract({ left: 28, top: 1130, width: 1096, height: 700 })).toFile(A + 'royl.jpg');
console.log('ok');
