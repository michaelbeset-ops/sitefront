// Bronfoto's (eigen site + Facebook) naar src/assets: draaien, max 2000px, kenteken vervagen.
const sharp = require('sharp'); const S = 'bron';
const lijst = [
  ['hero', 'wp/FB_IMG_1478201633089.jpg'], ['buiten', 'wp/DSCN3218.jpg'], ['binnen', 'wp/20140513_081415.jpg'],
  ['renovlies', 'fb/f5.jpg'], ['schuren', 'fb/f4.jpg'], ['lijstwerk', 'wp/20160927_122655.jpg'], ['kozijnen', 'wp/DSCN3219.jpg'],
  ['gevel', 'wp/20161013_152237.jpg'], ['tuinzijde', 'wp/DSCN3221.jpg'], ['horeca', 'wp/20161103_101604.jpg'],
  ['badkamer', 'wp/FB_IMG_1608151980366.jpg'], ['deur', 'wp/404403_594292723920851_1821093642_n.jpg'],
  ['aanbouw', 'wp/12036854_1183613124988805_6299357466719170395_n.jpg'], ['gang', 'fb/f3.jpg'], ['sigma', 'fb/f6.jpg'], ['erker', 'wp/12410555_1237729972910453_1945617952487971218_n.jpg'],
];
(async () => {
  for (const [n, f] of lijst) await sharp(S + '/' + f).rotate().resize(2000, 2000, { fit: 'inside', withoutEnlargement: true }).jpeg({ quality: 86, mozjpeg: true }).toFile('src/assets/' + n + '.jpg');
  // Bus: kenteken (x 140-290, y 945-1005 op 1161px) sterk vervagen in het bronbestand.
  const bron = sharp(S + '/wp/FB_IMG_1478035217882.jpg');
  const vlek = await sharp(S + '/wp/FB_IMG_1478035217882.jpg').extract({ left: 135, top: 940, width: 160, height: 70 }).blur(14).toBuffer();
  await bron.composite([{ input: vlek, left: 135, top: 940 }]).jpeg({ quality: 86, mozjpeg: true }).toFile('src/assets/bus.jpg');
  console.log('klaar');
})();
