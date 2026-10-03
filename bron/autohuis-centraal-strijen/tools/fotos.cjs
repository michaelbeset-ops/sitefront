// Eigen foto's voorbereiden: kentekens vervagen (in het bronbestand), verkleinen, naar src/assets.
const sharp = require('sharp');
const B = 'bron/google/big/', I = 'bron/ig/', A = 'src/assets/';
async function blur(src, rects, out, w = 2000) {
  const m = await sharp(src).metadata(); const W = m.width, H = m.height;
  let buf = await sharp(src).toBuffer();
  if (rects.length) {
    const blurred = await sharp(src).blur(28).removeAlpha().toBuffer();
    const svg = `<svg width="${W}" height="${H}"><rect width="100%" height="100%" fill="black"/>${rects.map(([l, t, rw, rh]) => `<rect x="${l}" y="${t}" width="${rw}" height="${rh}" rx="${rh / 4}" fill="white"/>`).join('')}</svg>`;
    const mask = await sharp(Buffer.from(svg)).blur(4).extractChannel(0).toBuffer();
    const top = await sharp(blurred).joinChannel(mask).png().toBuffer();
    buf = await sharp(src).composite([{ input: top }]).toBuffer();
  }
  await sharp(buf).resize({ width: Math.min(w, W) }).jpeg({ quality: 84, mozjpeg: true }).toFile(A + out);
}
(async () => {
  await blur(B + 'g-13.jpg', [[2175, 755, 140, 60], [2465, 755, 135, 65]], 'hero.jpg', 2400);
  await blur(B + 'g-8.jpg', [[405, 1045, 455, 255], [2465, 760, 135, 60], [2130, 760, 110, 50]], 'audi-a3.jpg', 1400);
  await blur(B + 'g-10.jpg', [[1870, 1035, 335, 215]], 'vw-up.jpg', 1400);
  await blur(B + 'g-2.jpg', [], 'mitsubishi-asx.jpg', 1400);
  await blur(B + 'g-11.jpg', [], 'mini-countryman.jpg', 1400);
  await blur(B + 'g-6.jpg', [], 'ford-fiesta.jpg', 1400);
  await blur(B + 'g-1.jpg', [], 'citroen-c1.jpg', 1400);
  await blur(B + 'g-12.jpg', [], 'opel-combo.jpg', 1400);
  await blur(B + 'g-7.jpg', [], 'mercedes-e.jpg', 1400);
  for (const [f, o] of [['ig-03', 'mercedes-slk'], ['ig-09', 'mini-cabrio'], ['ig-07', 'vw-caddy'], ['ig-08', 'vw-transporter'], ['ig-12', 'seat-ibiza'], ['ig-04', 'mitsubishi-colt-cabrio']])
    await blur(I + f + '.jpg', [], o + '.jpg', 640);
  await sharp('bron/mp-backdrop.jpg').jpeg({ quality: 86, mozjpeg: true }).toFile(A + 'showroom.jpg');
})();
