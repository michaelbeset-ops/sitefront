// Beeld: eigen foto's van Flinn (hun Canva-pagina, Google-profiel "Van eigenaar", Instagram @flinnwinkelcafe),
// aangevuld met één Unsplash-sfeerfoto (license free). Zie src/assets/BRONNEN.txt.
import sharp from 'sharp'; import fs from 'node:fs';
const A = 'src/assets/'; const q = { quality: 86, mozjpeg: true };
const cp = (f, out, w) => sharp(f).rotate().resize({ width: w, withoutEnlargement: true }).jpeg(q).toFile(A + out);
const C = 'bron/web/canva-media/', G = 'bron/google/foto/', I = 'bron/insta/img/', U = 'bron/unsplash/';
await cp(C + 'a7800c535773a7434421e67eb7916d49.jpg', 'hero.jpg', 1600);     // terras met tulpen (Canva-pagina)
await cp(C + 'cde4ee61fe36505b06271fe407e828e7.png', 'hero-m.jpg', 917);    // proosten op het terras (Canva-pagina)
await cp(C + 'f7ed9db84c3e6f3cb393bd627f2baa04.jpg', 'gevel.jpg', 646);     // stoelen voor het raam (Canva)
await cp(C + '6ee599681473850e4005be398831755d.jpg', 'pand.jpg', 703);      // tekening van het pand (Canva)
await cp(C + '57348663c29d754e11c6a3a5108fea28.jpg', 'molens.jpg', 649);    // koffiemolens aan de deur (Canva)
await cp(G + 'e05.jpg', 'bar.jpg', 1080);        // bar binnen (Google, Van eigenaar)
await cp(G + 'e03.jpg', 'zitje.jpg', 1200);      // zithoek (Google, Van eigenaar)
await cp(G + 'e04.jpg', 'gebak.jpg', 1600);      // taart onder stolp (Google, Van eigenaar)
await cp(G + 'e02.jpg', 'bowl.jpg', 1600);       // yoghurtbowl (Google, Van eigenaar)
await cp(G + 'e06.jpg', 'koeken.jpg', 1600);     // koeken en muffins (Google, Van eigenaar)
await cp(I + 'DeRRGObOiY8-1.jpg', 'latte.jpg', 1440);   // Instagram 9 okt 2026
await cp(I + 'DdGapg6ON2V-1.jpg', 'iced.jpg', 1440);    // Instagram 10 sep 2026
await cp(I + 'DbGTHb5xe0Y-1.jpg', 'burrata.jpg', 769);  // Instagram 22 jul 2026 (nieuwe lunch)
await cp(I + 'Dd8uH30Dubb-1.jpg', 'etalage.jpg', 1440); // Instagram 1 okt 2026
await cp(U + 'u-1740760540616-a3dd85e51352.jpg', 'u-winkel.jpg', 2000);
console.log(fs.readdirSync(A).join(' '));
