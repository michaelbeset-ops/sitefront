// Eigen Google-foto's (bron/) -> src/assets: strakke uitsnede, licht gelijkgetrokken (iets minder verzadigd, warm).
import sharp from 'sharp';
const zet = (inp, out, crop, { sat = 0.82, bri = 1.02 } = {}) =>
  sharp('bron/' + inp).extract(crop).modulate({ saturation: sat, brightness: bri }).linear(1.04, -4).sharpen({ sigma: 0.6 })
    .jpeg({ quality: 84, mozjpeg: true }).toFile('src/assets/' + out).then((i) => console.log(out, i.width, i.height));
await zet('g03-nov2021.jpg', 'laarzen-bruin.jpg', { left: 0, top: 80, width: 1200, height: 1260 }, { sat: 0.58, bri: 0.98 });
await zet('g04-nov2021.jpg', 'laarzen-groen.jpg', { left: 0, top: 120, width: 1200, height: 1480 }, { sat: 0.8 });
await zet('g02-mrt2026.jpg', 'winkel.jpg', { left: 0, top: 0, width: 1600, height: 1200 }, { sat: 0.9, bri: 1 });
await zet('g05-mei2020.jpg', 'laarzen-lang.jpg', { left: 0, top: 0, width: 1200, height: 1600 }, { sat: 0.8 });
