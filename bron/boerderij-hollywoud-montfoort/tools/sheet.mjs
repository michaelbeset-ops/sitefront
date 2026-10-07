// Contactvel: node tools/sheet.mjs <map> <uit.jpg> [kolommen]
import sharp from 'sharp';
import fs from 'fs';
const [dir, uit, kol = 6] = process.argv.slice(2);
const files = fs.readdirSync(dir).filter((f) => /\.(jpe?g|png|webp)$/i.test(f)).sort();
const W = 300, H = 225, K = +kol, R = Math.ceil(files.length / K);
const comps = [];
for (let i = 0; i < files.length; i++) {
  const img = await sharp(dir + '/' + files[i]).rotate().resize(W, H - 22, { fit: 'contain', background: '#222' }).toBuffer();
  const lab = Buffer.from(`<svg width="${W}" height="22"><rect width="100%" height="100%" fill="#000"/><text x="4" y="16" font-size="14" fill="#fff" font-family="sans-serif">${i} ${files[i]}</text></svg>`);
  comps.push({ input: img, left: (i % K) * W, top: Math.floor(i / K) * H }, { input: lab, left: (i % K) * W, top: Math.floor(i / K) * H + H - 22 });
}
await sharp({ create: { width: W * K, height: H * R, channels: 3, background: '#222' } }).composite(comps).jpeg({ quality: 80 }).toFile(uit);
console.log(files.length);
