import sharp from 'sharp';
const job = [
  ['bron/gfoto/g-17.jpg', 'hero'], ['bron/gfoto/g-00.jpg', 'winkel'], ['bron/gfoto/g-30.jpg', 'schildpadden'],
  ['bron/gfoto/g-31.jpg', 'terrarium'], ['bron/gfoto/g-07.jpg', 'jonge-agamen'], ['bron/gfoto/g-28.jpg', 'python'],
  ['bron/gfoto/g-32.jpg', 'agaam'], ['bron/gfoto/g-16.jpg', 'voedseldieren'], ['bron/fbhi/hi-02.jpg', 'pand'],
  ['bron/site/openingstijden-2.jpg', 'trap'],
];
for (const [s, d] of job) await sharp(s).rotate().resize({ width: 1800, height: 1800, fit: 'inside', withoutEnlargement: true }).jpeg({ quality: 88, mozjpeg: true }).toFile(`src/assets/${d}.jpg`);
console.log('ok');
