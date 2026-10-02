// Beelden klaarzetten in src/assets. Hero: Unsplash 1493256338651, gespiegeld, label op de kapmantel vervaagd.
import sharp from 'sharp';
const src = 'bron/unsplash-1493256338651.jpg';
const flop = await sharp(src).flop().toBuffer();
const box = { left: 1680, top: 960, width: 190, height: 220 };
const blur = await sharp(flop).extract(box).blur(14).toBuffer();
await sharp(flop).composite([{ input: blur, left: box.left, top: box.top }]).jpeg({ quality: 78, mozjpeg: true }).toFile('src/assets/hero-tondeuse.jpg');
await sharp('src/assets/hero-tondeuse.jpg').extract({ left: 1500, top: 800, width: 600, height: 500 }).toFile('bron/_chk.png');
const ig = { 1: 'krullen', 2: 'fade', 3: 'contour', 6: 'zaak-vloer', 8: 'zaak-stoelen', 9: 'scheiding', 10: 'golven', 11: 'rode-muur' };
for (const [n, naam] of Object.entries(ig)) await sharp(`bron/ig/ig-${n}.jpg`).jpeg({ quality: 88 }).toFile(`src/assets/w-${naam}.jpg`);
await sharp('bron/unsplash-1606333259737.jpg').jpeg({ quality: 80, mozjpeg: true }).toFile('src/assets/sfeer-kam.jpg');
