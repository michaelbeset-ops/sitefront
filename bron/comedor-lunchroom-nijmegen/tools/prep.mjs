import sharp from 'sharp';
const A = 'src/assets/';
const job = [
  // hete-kip-nijmegen: bovenste 420px weggesneden (hand van een gast), zie README
  ['bron/gfoto-nij/a-05.jpg', 'vitrine-nijmegen'],
  ['bron/gfoto-nij/a-01.jpg', 'toonbank-nijmegen'],
  ['bron/gfoto-nij/a-06.jpg', 'soep-nijmegen'],
  ['bron/gfoto-nij/a-09.jpg', 'broodje-nijmegen'],
  ['bron/gfoto-nij/a-03.jpg', 'broodje-patat-nijmegen'],
  ['bron/gfoto-arn/a-04.jpg', 'broodje-kip-arnhem'],
  ['bron/gfoto-arn/a-07.jpg', 'interieur-arnhem'],
  ['bron/gfoto-arn/a-08.jpg', 'burger-arnhem'],
  ['bron/gfoto-arn/a-10.jpg', 'msemmen-arnhem'],
  ['bron/site/2023_03_2021-07-31.jpeg', 'pand-arnhem'],
];
for (const [s, d] of job) await sharp(s).rotate().resize({ width: 1800, height: 2400, fit: 'inside', withoutEnlargement: true }).jpeg({ quality: 84, mozjpeg: true }).toFile(A + d + '.jpg');
await sharp('bron/site/2023_03_comedorlogg.png').png().toFile(A + 'logo-wit.png');
// donkere versie: zelfde alpha, inkt-kleur
const { data, info } = await sharp('bron/site/2023_03_comedorlogg.png').ensureAlpha().raw().toBuffer({ resolveWithObject: true });
for (let i = 0; i < data.length; i += 4) { data[i] = 0x14; data[i + 1] = 0x14; data[i + 2] = 0x12; }
await sharp(data, { raw: info }).png().toFile(A + 'logo-inkt.png');
console.log('ok');
