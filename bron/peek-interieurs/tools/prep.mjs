// Beeld voorbereiden. Eigen foto's: peekinterieurs.nl (bron/site/img). Sfeerfoto: Unsplash (bron/us). Zie src/assets/BRONNEN.txt.
import sharp from 'sharp';
const A = 'src/assets/', I = 'bron/site/img/'; const q = { quality: 80, mozjpeg: true };
const job = [
  ['314.jpg', 'hero.jpg', 2400],                       // visgraat in een hoek, homepage
  ['IMG_6792.jpg', 'pvc.jpg', 1400],                   // Therdex 6041 visgraat
  ['eg1.jpg', 'egaliseren.jpg', 1400],                 // geegaliseerde ondervloer
  ['Snapinsta.app_438603358_937273147871111_5009656729433763149_n_1080.jpg', 'trap.jpg', 1080], // 3 verdiepingen, trap met pvc
  ['karpet-banderen.jpg', 'karpet.jpg', 1400],         // karpet met band
  ['raam6-e1551789658331.jpg', 'raam.jpg', 1400],      // plisse, showroomhoek
  ['unknown_346252377_915933246398852_6474985625462881154_n.jpg', 'plint.jpg', 1080],
  ['260833121_277909604295749_801807914028206698_n.jpg', 'bies.jpg', 1080],     // border met bies 1 cm, Hoef en Haag
  ['127663650_2872665403009751_5224559964324639875_n.jpg', 'band.jpg', 1080],   // visgraat met band en bies
  ['eg3-e1551788641635.jpg', 'vakman.jpg', 1500],      // aan het werk, van achteren
  ['image00060.jpeg', 'trapwerk.jpg', 1400],           // trap stofferen, van boven
  ['Snapinsta.app_433792343_1329632238428200_2228244713557831268_n_1080.jpg', 'showroom-a.jpg', 1080],
  ['Snapinsta.app_433739239_1510845566160598_7051095382770658466_n_1080.jpg', 'showroom-b.jpg', 1080],
  ['showroom2.jpg', 'showroom-c.jpg', 1200],
  ['Snapinsta.app_418381016_398491789306700_4673837836729894815_n_1080.jpg', 'p-anthony.jpg', 1080],
  ['Snapinsta.app_465941542_1114599593344942_2690023835050262293_n_1080.jpg', 'p-karpet.jpg', 1080],
  ['Snapinsta.app_432794947_1116017752922017_5602051613273746789_n_1080.jpg', 'p-bussum.jpg', 1080],
  ['Snapinsta.app_433745969_724501643093564_3905162550569373638_n_1080.jpg', 'p-traptapijt.jpg', 1080],
  ['Snapinsta.app_438826700_1122916568999907_2560270252045799745_n_1080.jpg', 'p-hoef.jpg', 1080],
];
for (const [src, dst, w] of job) { await sharp(I + src).rotate().resize({ width: w, withoutEnlargement: true }).jpeg(q).toFile(A + dst); }
await sharp('bron/us/1754613307771-8f2e9af41137.jpg').jpeg(q).toFile(A + 's-gordijn.jpg');
console.log('ok');
