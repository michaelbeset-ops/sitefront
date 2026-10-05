// Zet de gekozen eigen foto's (Google-bedrijfsprofiel + eigen Facebookpagina) om naar src/assets.
import sharp from 'sharp';
const G = 'bron/google/', A = 'src/assets/';
const job = [['g-19', 'bar-bord'], ['g-1', 'dinerbank'], ['g-3', 'motor'], ['g-4', 'muur'], ['g-6', 'zaal'], ['g-17', 'terras'], ['g-13', 'podium']];
// Kentekenplaten (decoratie aan de muur) onleesbaar maken: [bron, x, y, b, h].
const blur = { 'g-19': [[312, 314, 490, 56]] };
for (const [s, d] of job) {
  let img = sharp(G + s + '.jpg').rotate();
  const lagen = [];
  for (const [x, y, w, h] of blur[s] || []) lagen.push({ input: await sharp(G + s + '.jpg').extract({ left: x, top: y, width: w, height: h }).blur(9).toBuffer(), left: x, top: y });
  if (lagen.length) img = sharp(await img.composite(lagen).toBuffer());
  await img.jpeg({ quality: 86, mozjpeg: true }).toFile(A + d + '.jpg');
}
// Bandavond: alleen het plafond met "Nothing else matters" en het Texaco-bord, zonder herkenbare gezichten.
await sharp(G + 'g-11.jpg').extract({ left: 0, top: 140, width: 1600, height: 460 }).jpeg({ quality: 86, mozjpeg: true }).toFile(A + 'nothing-else-matters.jpg');
// Logo uit de eigen Facebook-profielfoto (wit op zwart) -> wit met transparantie.
const { data, info } = await sharp('bron/fbhi/hi-02.jpg').extract({ left: 0, top: 300, width: 1803, height: 1300 }).greyscale().raw().toBuffer({ resolveWithObject: true });
const rgba = Buffer.alloc(info.width * info.height * 4);
for (let i = 0; i < info.width * info.height; i++) { const v = data[i]; rgba[i * 4] = 255; rgba[i * 4 + 1] = 255; rgba[i * 4 + 2] = 255; rgba[i * 4 + 3] = Math.max(0, Math.min(255, (v - 30) * 1.25)); }
await sharp(rgba, { raw: { width: info.width, height: info.height, channels: 4 } }).trim().resize({ width: 900 }).png().toFile(A + 'logo-wit.png');
console.log('ok');
