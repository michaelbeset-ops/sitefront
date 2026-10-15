// Beeld voorbereiden. Eigen foto's: dehaan-zonwering.nl (bron/site/img). Sfeerfoto's: Unsplash (bron/us). Zie src/assets/BRONNEN.txt.
import sharp from 'sharp';
const A = 'src/assets/', I = 'bron/site/img/'; const q = { quality: 80, mozjpeg: true };
const job = [
  ['5-1.jpg', 'terras.jpg', 1400],          // terrasscherm op dakterras (terrasschermen)
  ['4-2.jpg', 'pergola.jpg', 1024],         // pergola met led bij avond (pergolazonwering)
  ['screen-5-meter-3-hoog-3-1.jpg', 'screens.jpg', 1400], // screens appartementen (screens)
  ['1-5.jpg', 'rolluik.jpg', 1400],         // rolluiken rood baksteen (rolluiken)
  ['4-1.jpg', 'markies.jpg', 640],          // markiezen (markiezen)
  ['foto.jpg', 'uitval.jpg', 800],          // (uitvalschermen)
  ['IMG_0012.jpg', 'serre.jpg', 1400],      // (serrezonwering)
  ['WhatsApp-Image-2020-01-27-at-21.16.27.jpeg', 'bus.jpg', 1024], // eigen bus, home
  ['5-3.jpg', 'g-streep.jpg', 1024],        // pergola
  ['3-2.jpg', 'g-markies.jpg', 640],        // markiezen
  ['IMG_9191-1.jpg', 'g-screens.jpg', 1400],// screens
  ['2-2.jpg', 'g-veranda.jpg', 1400],       // terrasschermen
  ['1-3.jpg', 'g-wit.jpg', 640],            // markiezen
  ['157e4ba7-c296-4b3c-bb4e-dda9136afb8b-1.jpg', 'g-tuinhuis.jpg', 1400], // screens
  ['3-1.jpg', 'cassette.jpg', 1400],        // terrasscherm cassette met led
];
for (const [src, dst, w] of job) await sharp(I + src).rotate().resize({ width: w, withoutEnlargement: true }).jpeg(q).toFile(A + dst);
// Sfeer
await sharp('bron/us/1523181349018-de4228d5e009.jpg').jpeg({ quality: 78, mozjpeg: true }).toFile(A + 's-hero.jpg');
await sharp('bron/us/1523181349018-de4228d5e009.jpg').extract({ left: 520, top: 0, width: 760, height: 1600 }).resize({ width: 760 }).jpeg({ quality: 78, mozjpeg: true }).toFile(A + 's-hero-m.jpg');
await sharp('bron/us/1786550765744-9e6d9cffb57a.jpg').jpeg({ quality: 78, mozjpeg: true }).toFile(A + 's-doek.jpg');
console.log('ok');
