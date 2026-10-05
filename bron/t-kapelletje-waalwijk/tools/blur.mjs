import sharp from 'sharp';
// Gezichten van gasten onherkenbaar: zachte ovale blur (gevederde masker).
async function blur(src, dst, faces) {
  const base = sharp(src).rotate(); const { width: W, height: H } = await base.metadata();
  const blurred = await sharp(src).rotate().blur(16).toBuffer();
  const svg = `<svg width="${W}" height="${H}">${faces.map(([x, y, r]) => `<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * 1.25}" fill="#fff"/>`).join('')}</svg>`;
  const mask = await sharp(await sharp(Buffer.from(svg)).flatten({ background: "#000" }).extractChannel(0).blur(7).png().toBuffer()).toBuffer();
  const masked = await sharp(blurred).joinChannel(mask).png().toBuffer();
  await sharp(src).rotate().composite([{ input: masked }]).jpeg({ quality: 86, mozjpeg: true }).toFile(dst);
}
await blur('bron/fbhi/hi-04.jpg', 'src/assets/terras-zon.jpg', [[768, 407, 20], [922, 397, 20], [848, 397, 15]]);
await blur('bron/fbhi/hi-05.jpg', 'src/assets/terras-lunch.jpg', [[893, 450, 21], [1143, 436, 17], [1198, 433, 17], [796, 396, 11], [1010, 450, 15]]);
console.log('ok');
