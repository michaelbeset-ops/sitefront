import sharp from 'sharp'; import fs from 'node:fs';
const I = 'bron/img/', A = 'src/assets/';
// logo transparant + lichte variant
const { data, info } = await sharp('bron/logo.png').ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const d2 = Buffer.from(data), d3 = Buffer.from(data);
for (let i = 0; i < data.length; i += 4) {
  const [r, g, b] = [data[i], data[i + 1], data[i + 2]]; const a = 255 - Math.min(r, g, b);
  const lum = (r + g + b) / 3; const zwart = g < 120; // zwart vs lime
  d2[i + 3] = a; d3[i + 3] = a;
  if (zwart) { d3[i] = d3[i + 1] = d3[i + 2] = 250; } else { d2[i] = d3[i] = 190; d2[i+1] = d3[i+1] = 214; d2[i+2] = d3[i+2] = 0; }
  if (!zwart) { /* lime kleur rechtzetten */ }
}
await sharp(d2, { raw: info }).png().toFile(A + 'logo.png');
await sharp(d3, { raw: info }).png().toFile(A + 'logo-licht.png');
// pont met onleesbaar kenteken
const pont = I + 'home_08668_img-20230713-wa0074.jpg';
const blok = await sharp(pont).extract({ left: 376, top: 402, width: 40, height: 22 }).blur(6).toBuffer();
await sharp(pont).composite([{ input: blok, left: 376, top: 402 }]).jpeg({ quality: 92 }).toFile(A + 'pont.jpg');
await sharp(A + 'pont.jpg').extract({ left: 330, top: 380, width: 140, height: 70 }).resize(560).toFile('bron/pont-check.png');
const kopie = {
  'luchtfoto-terras.jpg': 'home_02569_img-20230903-wa0045.jpg',
  'luchtfoto-haven.jpg': 'home_03320_1692610433927.jpg',
  'luchtfoto-eiland.jpg': 'home_04064_img-20230713-wa0090.jpg',
  'vanaf-water.jpg': 'fotos-1_11630_22d7b9d6-9eca-4f2d-b015-a4ea9fb27662.jpeg',
  'steiger.jpg': 'home_28845_img_20230702_125000.jpg',
  'vuurtoren.jpg': 'fotos-1_11630_c1bcbd8c-9f2c-4336-b543-821618ad5824-1.jpeg',
  'bar.jpg': 'home_31656_img-20230709-wa00141-2.jpg',
  'pieter.jpg': 'home_22241_img-20230603-wa00181.jpg',
  'ivette-taart.jpg': 'home_24371_img-20230630-wa0016.jpg',
  'poke.jpg': 'fotos-1_11937_img-20230702-wa0027.jpg',
  'poke-zalm.jpg': 'fotos-1_11383_8b0baffb-0100-42c3-84ce-1d36b821e701-1.jpeg',
  'steaktartaar.jpg': 'fotos-1_11383_890719c7-9b0f-4264-bf54-774fe7f481c3-1.jpeg',
  'vis.jpg': 'fotos-1_11383_3b907cdd-3213-4a2a-85e2-2838b6814d55-1.jpeg',
  'vlees.jpg': 'fotos-1_11383_1a85aaab-1e2b-47a2-a862-aa84719c7efa-1.jpeg',
  'gerecht-hout.jpg': 'fotos-1_11937_img-20230702-wa0028.jpg',
  'carpaccio-hout.jpg': 'fotos-1_11937_img-20230702-wa0030.jpg',
  'cheesecake.jpg': 'fotos-1_12184_img-20230701-wa0088.jpg',
  'citroentaart.jpg': 'fotos-1_12184_img-20230629-wa0018-3.jpg',
  'clubsandwich.jpg': 'fotos-1_12184_img-20230702-wa0026.jpg',
  'zalm-gerecht.jpg': 'fotos-1_10383_img-20230603-wa0087.jpg',
};
for (const [n, f] of Object.entries(kopie)) fs.copyFileSync(I + f, A + n);
fs.writeFileSync(A + 'BRONNEN.txt', Object.entries(kopie).map(([n, f]) => `${n} <- restaurant-salsuta.nl (${f})`).join('\n') + '\npont.jpg <- restaurant-salsuta.nl (home_08668_img-20230713-wa0074.jpg), kenteken vervaagd\nlogo.png/logo-licht.png <- restaurant-salsuta.nl logo, wit transparant gemaakt\n');
console.log('ok');
