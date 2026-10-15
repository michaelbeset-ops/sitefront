// Beeld voorbereiden. Alle foto's van hun eigen site goodkitchenstore.nl (bron/site/img). Zie src/assets/BRONNEN.txt.
import sharp from 'sharp';
const A = 'src/assets/', I = 'bron/site/img/'; const q = { quality: 80, mozjpeg: true };
const W = 'WhatsApp_Image_2026-';
const job = [
  [W + '02-10_at_22.14.553.jpeg', 'hero.jpg', 1200],      // marmeren eiland met hanglampen (hun eigen homepage-slider)
  [W + '03-03_at_20.11.35.jpeg', 'ontwerp-3d.jpg', 1600],  // 3D-ontwerp (pagina Ontwerpen)
  [W + '03-03_at_20.11.364.jpeg', 'ontwerp-3d-b.jpg', 1600],
  [W + '03-03_at_20.11.367.jpeg', 'ontwerp-3d-c.jpg', 1600],
  [W + '02-25_at_17.45.03.jpeg', 'werkblad.jpg', 1200],    // zwart werkblad met ader, onderverlichting
  [W + '02-10_at_09.58.4755.jpeg', 'apparatuur.jpg', 1200],// houtdecor wand met inbouwapparatuur
  ['20250531_085911.jpg', 'montage.jpg', 2000],             // hoekkeuken donker hout, plint-verlichting
  ['20211218_091704.jpg', 'leiding.jpg', 1800],             // eiland met spoelbak en kraan
  [W + '02-10_at_09.38.02.jpeg', 'montage-b.jpg', 1600],   // zelfde keuken als montage.jpg, andere hoek
  [W + '04-25_at_23.11.371.jpeg', 'badkamer.jpg', 1280],
  [W + '04-25_at_23.11.372.jpeg', 'badkamer-b.jpg', 1600],
  // projecten
  ['20241210_161119.jpg', 'p-landelijk.jpg', 1800],
  [W + '02-10_at_09.38.021.jpeg', 'p-licht-u.jpg', 1600],
  [W + '02-10_at_09.58.462.jpeg', 'p-eiland-hout.jpg', 1600],
  [W + '02-10_at_09.58.47.jpeg', 'p-visgraat.jpg', 1600],
  [W + '02-10_at_09.58.472.jpeg', 'p-schiereiland.jpg', 1387],
  [W + '02-10_at_09.58.46.jpeg', 'p-wit-hout.jpg', 1600],
  [W + '02-10_at_09.58.473.jpeg', 'p-eiland-kader.jpg', 1600],
  ['IMG-20241218-WA0011.jpg', 'p-kraan.jpg', 1536],
  [W + '02-25_at_17.45.0356.jpeg', 'p-kast.jpg', 1536],
  // opstellingen (pagina Inspiratie)
  [W + '02-10_at_22.12.18.jpeg', 'o-eiland.jpg', 1600],
];
for (const [src, dst, w] of job) { await sharp(I + src).rotate().resize({ width: w, withoutEnlargement: true }).jpeg(q).toFile(A + dst); }
console.log('ok');
