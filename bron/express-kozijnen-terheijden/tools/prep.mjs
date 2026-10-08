import sharp from 'sharp';
const A = 'src/assets/', G = 'bron/google/eig/', S = 'bron/site/img/';
async function blur(src, regions, extract, out) {
  let img = sharp(src); const meta = await img.metadata();
  const comps = [];
  for (const [l, t, w, h] of regions) comps.push({ input: await sharp(src).extract({ left: l, top: t, width: w, height: h }).blur(18).toBuffer(), left: l, top: t });
  let buf = await sharp(src).composite(comps).toBuffer();
  if (extract) buf = await sharp(buf).extract(extract).toBuffer();
  await sharp(buf).jpeg({ quality: 88 }).toFile(A + out); console.log(out, meta.width, meta.height);
}
await blur(G + 'e11.jpg', [], null, 'hero.jpg');
await blur(G + 'e12.jpg', [], { left: 230, top: 180, width: 1370, height: 1098 }, 'stapel.jpg');
await blur(G + 'e13.jpg', [[0, 1200, 60, 110]], { left: 60, top: 160, width: 1540, height: 1309 }, 'heftruck.jpg');
await blur(G + 'e14.jpg', [], null, 'folie.jpg');
await blur(G + 'e08.jpg', [], null, 'gevel-groen.jpg');
await blur(G + 'e10.jpg', [], null, 'tuindeuren.jpg');
await blur(S + '5ef03e_a7507353-middelburg.jpg', [[590, 380, 110, 70], [640, 580, 70, 30]], null, 'middelburg.jpg');
await blur(S + '5ef03e_d0f9144befad44f49d8af3bc7f066628.jpg', [], { left: 0, top: 0, width: 1230, height: 900 }, 'bad-nieuweschans.jpg');
await blur(S + '5ef03e_77eaef0a9cf441d49a9debad52d98c28.jpeg', [], null, 'roosendaal.jpg');
await blur(S + '5ef03e_bcf1ed27cdb04844bff49d075e0278ee.jpg', [[730, 220, 70, 70]], { left: 160, top: 0, width: 1440, height: 900 }, 'rotterdam.jpg');
await blur(S + '5ef03e_0eb0d5f783a5416597543436fe39f4cd.jpg', [], null, 'luiken.jpg');
