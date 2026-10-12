// Eigen foto's (Google-profiel en Canva-site) en sfeerfoto's (Unsplash) naar src/assets. Zie src/assets/BRONNEN.txt.
import sharp from 'sharp';
const G = (n) => `bron/google/fotos/g${n}.jpg`; const C = (h) => `bron/canva/media/${h}`; const U = (id) => `bron/unsplash/${id}.jpg`;
const A = 'src/assets/'; const q = { quality: 84, mozjpeg: true };
await sharp(G(2)).jpeg(q).toFile(A + 'hal.jpg');                       // de hal vol fietsen (hero)
await sharp(G(6)).resize(1600).jpeg(q).toFile(A + 'werkplaats.jpg');    // fiets in de montagestandaard
await sharp(G(10)).resize(1400).jpeg(q).toFile(A + 'omafiets.jpg');
await sharp(G(9)).resize(1400).jpeg(q).toFile(A + 'vouwfiets.jpg');
await sharp(G(1)).jpeg(q).toFile(A + 'voltage.jpg');                    // ingang Voltage-terrein (met hun eigen logo erop)
await sharp(G(3)).resize(1400).jpeg(q).toFile(A + 'werkplaats-deur.jpg');
// Onderdelen van de Canva-site: alleen het deel zonder tekstbalk
const m = async (src, out, top) => { const i = sharp(C(src)); const md = await i.metadata(); const s = Math.min(md.width, md.height - top); await sharp(C(src)).extract({ left: Math.round((md.width - s) / 2), top, width: s, height: s }).jpeg(q).toFile(A + out); };
await m('c6a7a26182c7cd73ffbf8f1dd40927fe.jpg', 'buitenbanden.jpg', 799 - 480);
await m('edd7f45f8dc562ac9be0db4a8dfb9345.jpg', 'binnenbanden.jpg', 799 - 480);
await m('65d2e0b778c56cf606e8b1a6f3f1d75a.jpg', 'ringslot.jpg', 764 - 560);
// Logo rond uitsnijden (zonder de zwarte lijnen boven en onder)
const L = C('46525750a3df14dd251fdb26c081749b.png'); const lm = await sharp(L).metadata();
const d = Math.min(lm.width, lm.height) - 14; const left = Math.round((lm.width - d) / 2), top = Math.round((lm.height - d) / 2);
const mask = Buffer.from(`<svg width="${d}" height="${d}"><circle cx="${d / 2}" cy="${d / 2}" r="${d / 2 - 2}" fill="#fff"/></svg>`);
await sharp(await sharp(L).extract({ left, top, width: d, height: d }).toBuffer()).composite([{ input: await sharp(mask).resize(d, d).png().toBuffer(), blend: 'dest-in' }]).png().toFile(A + 'logo-groot.png'); await sharp(A + 'logo-groot.png').resize(320).png().toFile(A + 'logo.png');
// Sfeerfoto's
await sharp(U('sw9Vozf6j_4')).resize(1400).jpeg(q).toFile(A + 's-racefiets.jpg');
await sharp(U('yr22qT5pqw4')).resize(1400).jpeg(q).toFile(A + 's-mtb.jpg');
await sharp(U('c_m8bmiUH_8')).jpeg(q).toFile(A + 's-stad.jpg');
console.log('ok');
