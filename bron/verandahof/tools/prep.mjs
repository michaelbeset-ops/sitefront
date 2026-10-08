import sharp from 'sharp';
const P = 'bron/soc/post/', A = 'src/assets/';
async function blur(src, regions) {
  let img = sharp(src); const comps = [];
  for (const [x,y,w,h] of regions) comps.push({ input: await sharp(src).extract({ left:x, top:y, width:w, height:h }).blur(14).toBuffer(), left:x, top:y });
  return sharp(await img.composite(comps).toBuffer());
}
// hero desktop: glazen tuinkamer, 1024 breed -> 1600 (lanczos), lichte verscherping
await sharp(P+'p11-9.jpg').resize(1600, null, { kernel: 'lanczos3' }).sharpen({ sigma: .6 }).jpeg({ quality: 90 }).toFile(A+'hero.jpg');
await sharp(P+'p09-9.jpg').jpeg({ quality: 90 }).toFile(A+'hero-m.jpg');
// tuinzicht: onderste helft van de collage, boven het logo
await sharp(P+'p06-9.jpg').extract({ left: 0, top: 1010, width: 2048, height: 640 }).jpeg({ quality: 88 }).toFile(A+'tuinzicht.jpg');
await sharp(P+'p06-9.jpg').extract({ left: 0, top: 0, width: 2048, height: 760 }).jpeg({ quality: 88 }).toFile(A+'eettafel.jpg');
await (await blur(P+'p03-9.jpg', [[1040, 540, 200, 220]])).jpeg({ quality: 88 }).toFile(A+'schuifwand-open.jpg');
await sharp(P+'p05-9.jpg').jpeg({ quality: 88 }).toFile(A+'antraciet.jpg');
await (await blur(P+'p04-9.jpg', [[430, 530, 130, 150]])).jpeg({ quality: 88 }).toFile(A+'wit.jpg');
await sharp(P+'p12-9.jpg').extract({ left: 0, top: 0, width: 900, height: 1440 }).jpeg({ quality: 88 }).toFile(A+'glaswand.jpg');
console.log('ok');
