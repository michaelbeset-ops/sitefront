// Beeld: eigen foto's van Lokaal de Klik (Google-profiel, geplaatst door de eigenaar), aangevuld met drie
// Unsplash-sfeerfoto's (license free) voor de kaart. Zie src/assets/BRONNEN.txt.
import sharp from 'sharp'; import fs from 'node:fs';
const A = 'src/assets/'; const q = { quality: 86, mozjpeg: true };
const cp = (f, out, w) => sharp(f).resize({ width: w, withoutEnlargement: true }).jpeg(q).toFile(A + out);
const G = 'bron/google/eigenaar/', U = 'bron/unsplash/';
await cp(G + 'e00.jpg', 'hero.jpg', 1772);     // balkonterrasje aan de Voorstraathaven, Grote Kerk (apr 2022)
await cp(G + 'e11.jpg', 'pand.jpg', 1772);     // gevel Voorstraat 433 met terras (apr 2022)
await cp(G + 'e04.jpg', 'piano.jpg', 1772);    // piano met geel glaswerk (apr 2022)
await cp(G + 'e15.jpg', 'kunst.jpg', 1772);    // lokale kunst aan de muur, gitaar (apr 2022)
await cp(G + 'e02.jpg', 'koffie.jpg', 1181);   // gele kopjes bij de espressomachine (apr 2022)
await cp(G + 'e19.jpg', 'hoek.jpg', 1772);     // boekenkast en schilderij (apr 2022)
await cp(U + 'u-1693762894461-8305cd26ba9f.jpg', 'u-soep.jpg', 1400);
await cp(U + 'u-1558985250-27a406d64cb3.jpg', 'u-broodje.jpg', 1400);
await cp(U + 'u-1568571780765-9276ac8b75a2.jpg', 'u-taart.jpg', 1400);
console.log(fs.readdirSync(A).join(' '));
