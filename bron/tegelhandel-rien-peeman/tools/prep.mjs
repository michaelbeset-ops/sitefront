// Beeld voorbereiden. Eigen foto's: Google-profiel "Van eigenaar" (bron/google/img). Sfeerfoto's: Unsplash (bron/us). Zie src/assets/BRONNEN.txt.
import sharp from 'sharp';
const A = 'src/assets/', G = 'bron/google/img/', U = 'bron/us/'; const q = { quality: 80, mozjpeg: true };
const job = [
  [U + '1763485955497-f5ef5d178698.jpg', 'hero.jpg', 2400],
  [U + '1564540583246-934409427776.jpg', 's-wand.jpg', 1400],
  [U + '1708540084677-dc5838b37627.jpg', 's-vloer.jpg', 1400],
  [U + '1605696420965-9247f11e1acd.jpg', 's-terracotta.jpg', 1400],
  [U + '1651951646668-46562cfb4518.jpg', 's-badkamer.jpg', 1600],
  [U + '1763485956243-50068d04a1ad.jpg', 's-travertin.jpg', 1600],
  [G + 'g5.jpg', 'showroom-a.jpg', 1284],
  [G + 'g6.jpg', 'showroom-b.jpg', 1282],
  [G + 'g3.jpg', 'p-natuursteen.jpg', 1200],
  [G + 'g7.jpg', 'p-vloer.jpg', 1600],
  [G + 'g9.jpg', 'p-leggen.jpg', 1100],
];
for (const [src, dst, w] of job) { await sharp(src).rotate().resize({ width: w, withoutEnlargement: true }).jpeg(q).toFile(A + dst); }
await sharp('bron/archief/logo.png').toFile(A + 'logo.png');
console.log('ok');
