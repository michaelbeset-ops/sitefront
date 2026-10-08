import sharp from 'sharp';
const g = 'bron/gfoto/', a = 'src/assets/';
async function blur(src, regions, extract) {
  let img = sharp(src); if (extract) img = img.extract(extract);
  const buf = await img.toBuffer();
  const comps = [];
  for (const [l, t, w, h] of regions) { const part = await sharp(buf).extract({ left: l, top: t, width: w, height: h }).png().toBuffer(); const small = await sharp(part).resize(Math.max(2, Math.round(w / 14)), Math.max(2, Math.round(h / 14))).png().toBuffer(); comps.push({ input: await sharp(small).resize(w, h, { kernel: 'cubic' }).blur(6).png().toBuffer(), left: l, top: t }); }
  return sharp(await sharp(buf).composite(comps).png().toBuffer());
}
await (await blur(g + 'g-bouwman-terras.jpg', [[2290, 980, 170, 420]])).resize(2400).jpeg({ quality: 82, mozjpeg: true }).toFile(a + 'hero.jpg');
await (await blur(g + 'g-mens-nieuwbouw.jpg', [[150, 680, 45, 40]], { left: 0, top: 120, width: 1086, height: 760 })).jpeg({ quality: 84, mozjpeg: true }).toFile(a + 'nieuwbouw.jpg');
await (await blur(g + 'g-vdpraag-uitval.jpg', [[1560, 1230, 170, 130], [1640, 1170, 60, 80], [2470, 1240, 110, 200]])).resize(2000).jpeg({ quality: 82, mozjpeg: true }).toFile(a + 'uitvalscherm.jpg');
await sharp('bron/unsplash/SQdBSZ2YIbo.jpg').jpeg({ quality: 82, mozjpeg: true }).toFile(a + 'binnen.jpg');
console.log('ok');
