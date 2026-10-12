// Beeld voorbereiden. Eigen foto's: Google-profiel en Facebook Wereld Bike. Sfeer: Unsplash (license free). Zie src/assets/BRONNEN.txt.
import sharp from 'sharp';
const A = 'src/assets/'; const q = { quality: 80, mozjpeg: true };
await sharp('bron/google/fotos/g2.jpg').jpeg(q).toFile(A + 'w-hero.jpg');                       // pand bij avond
await sharp('bron/fb/fb-1199392238249556.jpg').resize(1600).jpeg(q).toFile(A + 'w-neon.jpg');    // winkel met neonbord
await sharp('bron/fb/fb-1199392258249554.jpg').resize(1100).jpeg(q).toFile(A + 'w-rij.jpg');      // rijen fietsen (staand)
await sharp('bron/google/fotos/post-eigenaar.jpg').extract({ left: 980, top: 250, width: 1020, height: 1250 }).jpeg(q).toFile(A + 'w-gevel.jpg'); // gevel overdag
await sharp('bron/google/fotos/g3.jpg').resize(1400).jpeg(q).toFile(A + 'w-race.jpg');            // racefietsen in de etalage
await sharp('bron/unsplash/o6wceYJw2Tw.jpg').resize(1600).jpeg(q).toFile(A + 's-werk.jpg');
console.log('ok');
