// Hero: Unsplash 1493256338651 gespiegeld; het merklabel op de kapmantel zacht weggewerkt in de kleur van de mantel.
import sharp from 'sharp';
const flop = await sharp('bron/unsplash-1493256338651.jpg').flop().toBuffer();
const w = 300, h = 330;
const vlek = await sharp(Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><rect x="55" y="45" width="190" height="240" rx="60" fill="#121213"/></svg>`)).blur(18).png().toBuffer();
await sharp(flop).composite([{ input: vlek, left: 1610, top: 905 }]).jpeg({ quality: 78, mozjpeg: true }).toFile('src/assets/hero-tondeuse.jpg');
await sharp('src/assets/hero-tondeuse.jpg').extract({ left: 1300, top: 600, width: 900, height: 750 }).resize(600).toFile('bron/_chk.png');
