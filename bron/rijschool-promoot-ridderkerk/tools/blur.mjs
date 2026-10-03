// Kentekens op de eigen motorfoto onherkenbaar maken.
import sharp from 'sharp';
const src = 'bron/google/g3.jpg', out = 'src/assets/motor-les.jpg';
const vlakken = [[515, 662, 210, 56], [625, 985, 80, 60], [930, 975, 80, 60]];
const lagen = await Promise.all(vlakken.map(async ([left, top, width, height]) => ({ input: await sharp(src).extract({ left, top, width, height }).blur(9).toBuffer(), left, top })));
await sharp(src).composite(lagen).jpeg({ quality: 86 }).toFile(out);
await sharp(out).extract({ left: 450, top: 600, width: 600, height: 500 }).toFile('bron/blurchk.png');
