import sharp from 'sharp';
const E = 'bron/gfoto/Van eigenaar';
// Hero: eigenaarsfoto 20, gasten op de achtergrond extra vervagen (gezichten onherkenbaar).
const src = `${E}/20.jpg`;
const blur = async (l, t, w, h, s = 28) => ({ input: await sharp(src).extract({ left: l, top: t, width: w, height: h }).blur(s).toBuffer(), left: l, top: t });
await sharp(src).composite([await blur(1040, 400, 260, 300), await blur(1440, 420, 160, 260), await blur(520, 360, 180, 200, 14)]).jpeg({ quality: 90 }).toFile('src/assets/hero.jpg');
for (const [f, n] of [['16', 'john'], ['10', 'taart'], ['03', 'zalm'], ['08', 'salade'], ['05', 'plank'], ['07', 'nachos'], ['11', 'terras'], ['12', 'glazen']]) await sharp(`${E}/${f}.jpg`).jpeg({ quality: 90 }).toFile(`src/assets/${n}.jpg`);
await sharp('bron/web/img/logocafemnmoeder_white.png').png().toFile('src/assets/logo-wit.png');
const m = await sharp('bron/web/img/logocafemnmoeder_white.png').metadata(); console.log(m.width, m.height, m.hasAlpha, m.channels);
