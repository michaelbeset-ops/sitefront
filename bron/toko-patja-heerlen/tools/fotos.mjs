// Snijdt de eigen Google-foto's bij naar src/assets (eenmalig). node tools/fotos.mjs <map-met-google-N.jpg>
import sharp from 'sharp';
const d = process.argv[2];
const j = (n, out, crop) => { let s = sharp(`${d}/google-${n}.jpg`); if (crop) s = s.extract(crop); return s.jpeg({ quality: 88 }).toFile(`src/assets/${out}.jpg`).then((i) => console.log(out, i.width, i.height)); };
await j(3, 'batik');
await sharp('src/assets/batik.jpg').extract({ left: 300, top: 0, width: 1000, height: 961 }).jpeg({ quality: 88 }).toFile('src/assets/batik-smal.jpg');
await j(4, 'vitrine', { left: 0, top: 290, width: 1200, height: 780 });
await j(6, 'rendang');
await j(7, 'bami');
await j(11, 'tafel', { left: 0, top: 340, width: 1600, height: 1130 });
await j(8, 'tjendol');
await j(1, 'gevel');

