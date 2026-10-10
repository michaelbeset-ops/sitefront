// Beeld: alleen eigen foto's. bron/site/img = hun eigen site ropsverhuur.nl (uploads 2019-2022, eigen terrein en eigen vrachtwagens),
// bron/google/eig-*.jpg = Google-profiel, tab "Van eigenaar". Kentekens geblurd (Transport-2: Volvo voorkant, eig-2: geparkeerde auto).
import sharp from 'sharp';
const A = 'src/assets/';
const s = (n) => `bron/site/img/${n}`;
const g = (n) => `bron/google/${n}`;
const q = { quality: 84, mozjpeg: true };

async function blur(src, boxen) {
  let img = sharp(src);
  const comp = [];
  for (const [left, top, width, height] of boxen) {
    const stuk = await sharp(src).extract({ left, top, width, height }).blur(9).toBuffer();
    comp.push({ input: stuk, left, top });
  }
  return sharp(await img.composite(comp).toBuffer());
}

// Hero: drie schaarliften van groot naar klein, avondlicht (6000x4000). Mobiel: één hoge schaarlift (4000x6000).
await sharp(s('DSC_0552.jpg')).extract({ left: 0, top: 0, width: 6000, height: 3900 }).resize(2400).jpeg(q).toFile(A + 'hero-breed.jpg');
await sharp(s('DSC_0549-e1564077479584.jpg')).extract({ left: 0, top: 300, width: 4000, height: 5400 }).resize(1200).jpeg(q).toFile(A + 'hero-hoog.jpg');
// Het park
await sharp(s('DSC_0535.jpg')).extract({ left: 600, top: 300, width: 5000, height: 3700 }).resize(1400).jpeg(q).toFile(A + 'schaar-e.jpg');
await sharp(s('DSC_0585.jpg')).resize(2000).jpeg(q).toFile(A + 'knik-duo.jpg');
await sharp(s('DSC_0596-e1564077520508.jpg')).extract({ left: 0, top: 0, width: 4000, height: 5600 }).resize(1100).jpeg(q).toFile(A + 'telescoop.jpg');
// Transport
const t2 = await blur(s('Transport-2-scaled.jpg'), [[2090, 1005, 55, 65]]);
await t2.resize(2200).jpeg(q).toFile(A + 'vrachtwagen-zwart.jpg');
await sharp(s('Transport.jpg')).jpeg(q).toFile(A + 'vrachtwagen-wit.jpg');
// Sticker achterop de knikarm (Google, Van eigenaar)
const st = await blur(g('eig-2.jpg'), [[425, 380, 55, 35]]);
await st.extract({ left: 200, top: 0, width: 1200, height: 1200 }).resize(1100).jpeg(q).toFile(A + 'sticker.jpg');
console.log('ok');
