// Beeld voorbereiden. Alle foto's zijn eigen beeld van de zaak (zie src/assets/BRONNEN.txt). Geen Unsplash nodig.
import sharp from 'sharp';
const A = 'src/assets/', F = 'bron/fotos/'; const q = { quality: 80, mozjpeg: true };
const job = [
  ['ikw-dsc-1117_4234280592.jpg', 'hero.jpg', 1500],     // stalenwand tegels in de winkel
  ['ikw-dsc-1157_2946484368.jpg', 'duo.jpg', 1400],      // Kevin en Danny voor de winkel
  ['ikw-dsc-1124_4151948558.jpg', 'pand.jpg', 1300],     // gevel Lopikerstraat 52
  ['ikw-dsc-1115_1964787051.jpg', 'showroom.jpg', 1300], // pvc-stalen in de winkel
  ['g01.jpg', 'haard.jpg', 1100], ['g02.jpg', 'raam.jpg', 1100], ['g03.jpg', 'leggen.jpg', 1000],
  ['g04.jpg', 'trap-a.jpg', 1100], ['g05.jpg', 'keukenvloer.jpg', 900], ['g06.jpg', 'overloop.jpg', 1100],
  ['g07.jpg', 'trap-b.jpg', 1100], ['g08.jpg', 'keuken.jpg', 1100], ['g09.jpg', 'wandtegel.jpg', 1100], ['g10.jpg', 'haard-b.jpg', 1100],
];
// Instagram @pvc_en_tegel_design (640x640, bron/social/img), bijschrift uit hun eigen post.
const S = 'bron/social/img/';
for (const [src, dst] of [['DdR7mo0DY1l.jpg', 'ig-portugees.jpg'], ['DdR6IF3jWs7.jpg', 'ig-salon.jpg'], ['DXOWr6DDXAF.jpg', 'ig-keuken.jpg'], ['DWQ_bM0Danu.jpg', 'ig-trap.jpg'], ['DaNQ2XrtIdw.jpg', 'ig-plank.jpg']]) await sharp(S + src).jpeg(q).toFile(A + dst);
for (const [src, dst, w] of job) { await sharp(F + src).rotate().resize({ width: w, withoutEnlargement: true }).jpeg(q).toFile(A + dst); }
console.log('ok');
