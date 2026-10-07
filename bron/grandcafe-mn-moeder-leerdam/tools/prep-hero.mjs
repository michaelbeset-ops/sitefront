import sharp from 'sharp';
const src = 'bron/gfoto/Van eigenaar/20.jpg';
const W = 1600, H = 1067;
const blurred = await sharp(src).blur(22).toBuffer();
// Zachte masker-vlekken over de gasten achter de bar (gezichten onherkenbaar), randen verzacht.
const mask = await sharp(Buffer.from(`<svg width="${W}" height="${H}"><rect width="${W}" height="${H}" fill="black"/>
<ellipse cx="1160" cy="540" rx="150" ry="190" fill="white"/><ellipse cx="1540" cy="520" rx="120" ry="150" fill="white"/><ellipse cx="610" cy="440" rx="95" ry="110" fill="white"/></svg>`)).blur(30).extractChannel(0).toBuffer();
const cut = await sharp(blurred).ensureAlpha().joinChannel(mask).png().toBuffer();
await sharp(src).composite([{ input: cut }]).jpeg({ quality: 90 }).toFile('src/assets/hero.jpg');
