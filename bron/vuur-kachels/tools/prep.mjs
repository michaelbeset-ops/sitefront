// Beeld voorbereiden. Eigen foto's: vuurnogvlam.nl (bron/site/img, bron/site/proj) en Google-profiel (bron/google/img).
// Sfeerfoto's: Unsplash (bron/us). Zie src/assets/BRONNEN.txt.
import sharp from 'sharp';
const A = 'src/assets/'; const q = { quality: 80, mozjpeg: true };
const S = 'bron/site/img/', P = 'bron/site/proj/', G = 'bron/google/img/';
const job = [
  ['bron/us/hero-vp5umE7ZDyI.jpg', 'hero.jpg', 2400],
  ['bron/us/band-YOdU8nmUAB4.jpg', 'band.jpg', 2000],
  [S + '2024_02_Horizontaal_Showroom.jpg', 'cornelis.jpg', 1600],
  [S + '2024_03_Cornelis_Mekelenkamp_kachels_haarden_header-scaled-1.jpg', 'cornelis-bureau.jpg', 1600],
  [S + '2024_02_Showroom-hout.jpg', 'showroom.jpg', 1400],
  [G + 'g06.jpg', 'showroom-b.jpg', 1080],
  [G + 'g00.jpg', 'gevel.jpg', 768],
  [P + 'van-lege-nis-naar-st__tulikivi_haard_hoofdplaat2.png', 'tulikivi-cornelis.jpg', 1024],
  [G + 'r2_1.jpg', 'dak.jpg', 1200],
  [P + 'nieuwe-sfeer-met-een__andel-02.jpg', 'p-andel.jpg', 1600],
  [P + 'nieuwe-sfeer-met-een__andel-01.jpg', 'p-andel-staand.jpg', 1200],
  [P + 'van-oude-opstelling-__werkendam-01.jpg', 'p-werkendam.jpg', 1200],
  [P + 'moderne-blikvanger-m__Dik-Geurts-Odin-hanghaard-tunnel-01.jpg', 'p-odin.jpg', 1800],
  [P + 'van-open-haard-naar-__krabbendijke-02.jpg', 'p-krabbendijke.jpg', 1600],
  [P + 'inbouwhaard-vervange__tulikivi-jero-puro-terneuzen-02-e1771343425547.jpg', 'p-terneuzen.jpg', 1200],
  [P + 'driezijdige-haard__CJ-Scherpenisse-.jpg', 'p-scherpenisse.jpg', 1200],
  [P + 'haard-in-overkapping__Inbouwkachel-tuinkamer.jpg', 'p-gravendeel.jpg', 1200],
  [P + 'haard-in-nis__Nestor-martin-klant-Werkendam_1.webp', 'p-hond.jpg', 1200],
  [P + 'van-oude-haar-naar-n__project-oud-vossemeer-1-scaled.jpg', 'p-vossemeer.jpg', 1200],
  [P + 'hangende-haard-odin__Hangende_houtkachel-scaled.jpg', 'p-hang.jpg', 1200],
  [P + 'installatie-van-jaco__IMG-20240527-WA0014.jpg', 'p-jacobus.jpg', 1200],
  [P + 'van-lege-nis-naar-st__WhatsApp-Image-2026-04-01-at-15.46.02-3.jpeg', 'p-hoofdplaat.jpg', 1200],
  [S + '2026_04_Reny-cuaruba.jpg', 'buiten.jpg', 1024],
];
for (const [src, dst, w] of job) { const m = await sharp(src).rotate().resize({ width: w, withoutEnlargement: true }).jpeg(q).toFile(A + dst); console.log(dst, m.width, m.height); }
