import sharp from 'sharp';
const A = 'src/assets/', F = 'bron/fb/', G = 'bron/google/', I = 'bron/ig/';
const cut = async (src, ex, out, blur) => {
  let img = sharp(src); if (ex) img = img.extract(ex);
  let buf = await img.toBuffer();
  for (const r of blur || []) { const patch = await sharp(buf).extract(r).blur(14).toBuffer(); buf = await sharp(buf).composite([{ input: patch, left: r.left, top: r.top }]).toBuffer(); }
  const m = await sharp(buf).jpeg({ quality: 88, mozjpeg: true }).toFile(A + out); console.log(out, m.width, m.height);
};
// hero: boeg van onderaf (Google, Marjo Hajdari, mei 2026); kenteken op trailer links onder geblurd
await cut(G + 'g00.jpg', null, 'hero.jpg', [{ left: 102, top: 1368, width: 88, height: 34 }]);
await cut(G + 'g06.jpg', null, 'loods.jpg');                       // werkplaats, Google (zaak) mei 2021
await cut(G + 'g03.jpg', { left: 240, top: 220, width: 1690, height: 1100 }, 'grete.jpg'); // Google (zaak) mrt 2021
await cut(G + 'g01.jpg', null, 'rivier.jpg');                      // Google (zaak) aug 2026
await cut(F + 'p4-20260522-a.jpg', null, 'avanti.jpg');
await cut(F + 'p3-20260703-a.jpg', null, 'sjardonee.jpg');
await cut(F + 'p2-20260815-c.jpg', null, 'gaten.jpg');
await cut(F + 'p2-20260815-a.jpg', null, 'vaarklaar.jpg');
await cut(I + 'ig-20220824-excellent.jpg', null, 'spuiten.jpg');
