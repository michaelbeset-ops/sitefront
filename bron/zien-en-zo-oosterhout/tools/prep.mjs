// Beeld voorbereiden. Eigen beeld: vanderheijden-opticiens.nl (bron/site/img) en hun Google-profiel (bron/google/fotos). Zie src/assets/BRONNEN.txt.
import sharp from 'sharp';
const A = 'src/assets/'; const q = { quality: 80, mozjpeg: true };
const I = 'bron/site/img/'; const G = 'bron/google/fotos/';
// Hero: pand in de avond (Google, 4000x3000), onder het gevelbord afgesneden zodat het niet achter de kop valt
await sharp(G + 'o10.jpg').extract({ left: 0, top: 830, width: 4000, height: 2170 }).resize(2400).jpeg({ quality: 76, mozjpeg: true }).toFile(A + 'pand-avond.jpg');
// Pand overdag, rechts afgesneden zonder het actiebord
await sharp(G + 'o2.jpg').extract({ left: 0, top: 0, width: 3330, height: 3000 }).resize(1600).jpeg(q).toFile(A + 'pand-dag.jpg');
// Winkel binnen (site-slider) en etalage
await sharp(I + 'van-der-heijde-slider.2560x1000x1.jpg').jpeg(q).toFile(A + 'winkel.jpg');
await sharp(G + 'o1.jpg').resize(1600).jpeg(q).toFile(A + 'winkel-voor.jpg');
await sharp(I + 'contact-pagina-slider.2560x1000x1.jpg').jpeg(q).toFile(A + 'opticien.jpg');
await sharp(G + 'o6.jpg').resize(2000).jpeg(q).toFile(A + 'opticien-g.jpg');
// Dienstbeelden van hun eigen site
const d = { 'd-oogmeting': 'vd-heijden-optiek-slide-oogzorg-2025.2560x1000x1.jpg', 'd-brillen': 'zien-en-zo-slider-brillen-1.2560x1000x1.jpg', 'd-multifocaal': 'zien-en-zo-slider-multifocale-brillen-1.2560x1000.jpg', 'd-lenzen': 'vloeistoffen-contactlenzen-tab-2560x900.2560x900.jpg', 'd-kinderen': 'zien-en-zo-slider-kinderbrillen-1.2560x900.jpg', 'd-zon': 'zien-en-zo-slider-zonnebrillen-1.2560x1000x1.jpg', 'd-leesbril': 'zien-en-zo-slider-leesbrillen-1.2560x1000.jpg' };
for (const [k, f] of Object.entries(d)) await sharp(I + f).resize(1600).jpeg(q).toFile(A + k + '.jpg');
await sharp(I + 'erkend-myopie-management-1.png').extract({ left: 0, top: 0, width: 259, height: 100 }).png().toFile(A + 'myopie-badge.png');
console.log('ok');
// Hero mobiel: staande uitsnede van de verlichte etalages, zonder het bord en de deurposter (dat valt anders achter de kop)
await sharp('bron/google/fotos/o10.jpg').extract({ left: 2080, top: 1100, width: 1600, height: 1900 }).resize(1100).jpeg({ quality: 74, mozjpeg: true }).toFile(A + 'pand-avond-m.jpg');
