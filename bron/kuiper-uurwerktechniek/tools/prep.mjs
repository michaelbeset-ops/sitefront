// Beeld voorbereiden. Eigen foto's: kuiperuurwerktechniek.nl (bron/site/img). Sfeerfoto: Unsplash (bron/us). Zie src/assets/BRONNEN.txt.
import sharp from 'sharp';
const A = 'src/assets/', I = 'bron/site/img/', q = { quality: 82, mozjpeg: true };
// Hero (Unsplash 71NjPdtXI78): portret voor mobiel, breed voor desktop (foto rechts op een doek in de eigen zwarttint).
const H = 'bron/us/big_71N.jpg';
const { data } = await sharp(H).extract({ left: 0, top: 0, width: 40, height: 40 }).resize(1, 1).raw().toBuffer({ resolveWithObject: true });
const bg = { r: data[0], g: data[1], b: data[2] }; console.log('bg', bg);
await sharp(H).jpeg(q).resize(1400).toFile(A + 's-hero-m.jpg');
const hh = 1600, img = await sharp(H).resize({ height: hh }).toBuffer(); const w = Math.round(2400 * hh / 2948);
const fade = Buffer.from(`<svg width="${w}" height="${hh}"><defs><linearGradient id="g"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".22" stop-color="#fff"/></linearGradient></defs><rect width="${w}" height="${hh}" fill="url(#g)"/></svg>`);
const imgF = await sharp(img).ensureAlpha().composite([{ input: fade, blend: 'dest-in' }]).png().toBuffer();
await sharp({ create: { width: 2560, height: hh, channels: 3, background: bg } }).composite([{ input: imgF, left: 2560 - w - 120, top: 0 }]).jpeg(q).toFile(A + 's-hero-d.jpg');
// Eigen foto's
await sharp(I + 'home3.jpg').jpeg(q).toFile(A + 'e-uurwerk.jpg');
await sharp(I + 'banner4.jpg').extract({ left: 600, top: 0, width: 760, height: 564 }).jpeg(q).toFile(A + 'e-wijzerplaat.jpg');
await sharp(I + 'home2.jpg').jpeg(q).toFile(A + 'e-stof.jpg');
await sharp(I + 'home1.jpg').jpeg(q).toFile(A + 'e-robbert-vijl.jpg');
await sharp(I + 'informatie1.jpg').jpeg(q).toFile(A + 'e-robbert.jpg');
await sharp(I + 'informatie2.jpg').jpeg(q).toFile(A + 'e-binnenwerk.jpg');
await sharp(I + 'restauratie1.jpg').jpeg(q).toFile(A + 'e-rad.jpg');
await sharp(I + 'restauratie2.jpg').jpeg(q).toFile(A + 'e-klok.jpg');
await sharp(I + 'banner2.jpg').jpeg(q).toFile(A + 'e-rotterdam.jpg');
await sharp(I + 'banner1.jpg').jpeg(q).toFile(A + 'e-raderwerk.jpg');
await sharp(I + 'logo2.png').png().toFile(A + 'logo.png');
// Sfeerfoto kast (Unsplash C953386SPtc)
await sharp('bron/us/big_C95.jpg').resize(1100).jpeg(q).toFile(A + 's-kast.jpg');
console.log('ok');
