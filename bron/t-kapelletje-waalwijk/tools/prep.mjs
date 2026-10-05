import sharp from 'sharp';
const B = 'bron/fbhi/', A = 'src/assets/';
async function blur(src, dst, boxes, opts = {}) {
  let img = sharp(src).rotate(); const comp = [];
  for (const [l, t, w, h] of boxes) comp.push({ input: await sharp(src).rotate().extract({ left: l, top: t, width: w, height: h }).blur(14).toBuffer(), left: l, top: t });
  await sharp(await img.composite(comp).toBuffer()).jpeg({ quality: 86, mozjpeg: true }).toFile(dst);
}
await blur(B + 'hi-04.jpg', A + 'terras-zon.jpg', [[735, 380, 240, 100]]);
await blur(B + 'hi-05.jpg', A + 'terras-lunch.jpg', [[830, 420, 100, 95], [960, 430, 110, 75], [1105, 410, 115, 65], [765, 385, 55, 45]]);
await sharp(B + 'hi-03.jpg').jpeg({ quality: 84, mozjpeg: true }).toFile(A + 'tafel-raam.jpg');
await sharp(B + 'hi-02.jpg').jpeg({ quality: 84, mozjpeg: true }).toFile(A + 'sangria.jpg');
await sharp(B + 'hi-01.jpg').png().toFile('bron/logo.png');
for (const [id, n] of [['1720701247887-cab418baa6d6', 'sfeer-steak'], ['1544025162-d76694265947', 'sfeer-ribs']]) {
  const r = await fetch(`https://images.unsplash.com/photo-${id}?w=1800&q=80&fm=jpg`); await sharp(Buffer.from(await r.arrayBuffer())).jpeg({ quality: 82, mozjpeg: true }).toFile(A + n + '.jpg');
}
console.log('ok');
