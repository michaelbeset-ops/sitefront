import sharp from 'sharp';
const E = 'C:/Users/Micha/AppData/Local/Temp/claude/C--Users-Micha-Downloads-Sitefront/679bea37-2636-40ab-8595-63111bb3d5b5/scratchpad/eigen/tegel-bouwbedrijf-hus-maassluis';
const kopie = { 'hero.jpg': 'g-12.jpg', 'nis.jpg': 'g-11.jpg', 'tegelwerk.jpg': 'g-1.jpg', 'badkamer.jpg': 'g-6.jpg', 'sanitair.jpg': 'g-8.jpg', 'regendouche.jpg': 'g-9.jpg', 'wastafel.jpg': 'g-5.jpg', 'douche.jpg': 'g-2.jpg', 'ligbad.jpg': 'g-7.jpg', 'radiator.jpg': 'g-10.jpg', 'bus.jpg': 'bus.jpg' };
for (const [uit, bron] of Object.entries(kopie)) await sharp(E + '/' + bron).jpeg({ quality: 88, mozjpeg: true }).toFile('src/assets/' + uit);
await sharp(E + '/marmer-vloer.jpg').extract({ left: 13, top: 13, width: 276, height: 426 }).jpeg({ quality: 90 }).toFile('src/assets/a-marmer.jpg');
await sharp(E + '/belgisch-hardsteen.jpg').extract({ left: 10, top: 10, width: 366, height: 244 }).jpeg({ quality: 90 }).toFile('src/assets/a-hardsteen.jpg');
await sharp(E + '/monkey-town.jpg').extract({ left: 13, top: 12, width: 284, height: 426 }).jpeg({ quality: 90 }).toFile('src/assets/a-monkeytown.jpg');
await sharp(E + '/nieuw-logo-dennie-2014-4-klein.jpg').toFile('bron/logo-oud.jpg');
console.log('ok');
