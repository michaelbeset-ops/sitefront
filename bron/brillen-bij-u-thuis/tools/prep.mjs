// Beeld voorbereiden. Eigen foto's: brillenbijuthuis.nl (bron/site/img). Sfeerfoto's: Unsplash (bron/us). Zie src/assets/BRONNEN.txt.
import sharp from 'sharp';
const A = 'src/assets/'; const q = { quality: 82, mozjpeg: true };
const I = 'bron/site/img/';
// 1. Pasbril-meting (headerfoto van hun site). Op verzoek van Michael (13-10-2026) onvervaagd, zoals op hun eigen site.
await sharp(I + 'o_image1.jpeg').rotate().resize(1500).jpeg(q).toFile(A + 'eigen-meting.jpg');
// Paul past een montuur bij een klant (image0, bovenste deel).
await sharp(I + 'o_image0.jpeg').rotate().extract({ left: 0, top: 350, width: 2600, height: 1733 }).resize(1400).jpeg(q).toFile(A + 'eigen-passen.jpg');
// Pasbril (pagina Diensten, IMG_0205).
await sharp(I + 'r8_IMG_0205.JPG').rotate().jpeg(q).toFile(A + 'eigen-pasbril.jpg');
/* Oude, vervaagde versie:
const src = sharp(I + 'o_image1.jpeg');
const { width: W, height: H } = await src.metadata();
const box = { left: 1300, top: 930, width: 600, height: 760 };
const blur = await sharp(I + 'o_image1.jpeg').extract(box).blur(26).toBuffer();
const mask = Buffer.from(`<svg width="${box.width}" height="${box.height}"><defs><radialGradient id="g"><stop offset=".72" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient></defs><ellipse cx="${box.width/2}" cy="${box.height/2}" rx="${box.width/2}" ry="${box.height/2}" fill="url(#g)"/></svg>`);
const blurM = await sharp(blur).composite([{ input: mask, blend: 'dest-in' }]).png().toBuffer();
const comp = await sharp(I + 'o_image1.jpeg').composite([{ input: blurM, left: box.left, top: box.top }]).toBuffer();
await sharp(comp).resize(1500).jpeg(q).toFile(A + 'eigen-meting.jpg');
*/
// 2. Monturenlade (onderkant van image0, zonder gezichten)
await sharp(I + 'o_image0.jpeg').extract({ left: 0, top: 1700, width: 2600, height: 1767 }).resize(1400).jpeg(q).toFile(A + 'eigen-monturen.jpg');
// 3. Pasglazenkist met hun kaartje
await sharp(I + 'r6_IMG_0206.JPG').jpeg(q).toFile(A + 'eigen-pasglazen.jpg');
// 4. Partnerlogo's (van hun homepage)
await sharp(I + 'r1_ENV_ledenservice_logo_klein.jpg').png().toFile(A + 'p-envida.png');
await sharp(I + 'r2_Unknown.png').png().toFile(A + 'p-thebe.png');
await sharp(I + 'r3_IMG_6037.JPG').resize(900).png().toFile(A + 'p-meander.png');
await sharp(I + 'r4_378278675_899373015193853_1180352118078063774_n.png').png().toFile(A + 'p-aafje.png');
// 5. Sfeerfoto's
await sharp('bron/us/hero.jpg').jpeg(q).toFile(A + 's-hero.jpg');
await sharp('bron/us/meting.jpg').jpeg(q).toFile(A + 's-meting.jpg');
await sharp('bron/us/handen.jpg').jpeg(q).toFile(A + 's-handen.jpg');
console.log('ok', W, H);
