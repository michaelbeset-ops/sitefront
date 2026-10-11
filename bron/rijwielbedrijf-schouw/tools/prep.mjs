// Sfeerfoto's van Unsplash (license free), zie src/assets/BRONNEN.txt. Hero gespiegeld zodat de tekst links op de onscherpe achtergrond staat.
import sharp from 'sharp';
const U = (id) => `bron/unsplash/${id}.jpg`; const A = 'src/assets/'; const q = { quality: 82, mozjpeg: true };
await sharp(U('d284XSho6gU')).flop().jpeg(q).toFile(A + 's-hero.jpg');
await sharp(U('GKLmVfcXl0o')).resize(1400).jpeg(q).toFile(A + 's-reparatie.jpg');
await sharp(U('xuCX7RLMoqU')).resize(1400).jpeg(q).toFile(A + 's-onderhoud.jpg');
await sharp(U('yjAFnkLtKY0')).resize(1400).jpeg(q).toFile(A + 's-racefiets.jpg');
await sharp(U('6FZdZr0iAZY')).resize(1400).jpeg(q).toFile(A + 's-mtb.jpg');
await sharp(U('Gi0OMNguFaw')).resize(1600).jpeg(q).toFile(A + 's-weg.jpg');
await sharp(U('zxqoi4LfDPo')).resize(1600).jpeg(q).toFile(A + 's-veldrit.jpg');
console.log('ok');
