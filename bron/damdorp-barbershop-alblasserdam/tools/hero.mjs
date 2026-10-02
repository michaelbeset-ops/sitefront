import sharp from 'sharp';
const src = 'bron/unsplash-Tper6bHeSUo.jpg';
// Merkopdruk en stempel op het scheermes vervagen (geen merknamen van anderen in beeld).
const box = { left: 800, top: 600, width: 820, height: 180 };
const blur = await sharp(src).extract(box).blur(10).toBuffer();
const mask = await sharp(Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${box.width}" height="${box.height}"><rect x="24" y="24" width="${box.width - 48}" height="${box.height - 48}" rx="30" fill="#fff"/></svg>`)).blur(10).png().toBuffer();
const soft = await sharp(blur).ensureAlpha().composite([{ input: mask, blend: 'dest-in' }]).png().toBuffer();
await sharp(src).composite([{ input: soft, left: box.left, top: box.top }]).jpeg({ quality: 80, mozjpeg: true }).toFile('src/assets/hero-mes.jpg');
await sharp('src/assets/hero-mes.jpg').extract({ left: 600, top: 450, width: 1100, height: 500 }).toFile('bron/_chk.png');
