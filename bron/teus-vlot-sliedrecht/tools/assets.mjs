import sharp from 'sharp';
const W = 'bron/foto/wp/', A = 'src/assets/';
const j = (s) => s.jpeg({ quality: 88, mozjpeg: true });
await j(sharp('bron/foto/g_c4cf46764450_tvdm_luchtfoto.jpg')).toFile(A + 'werf-luchtfoto.jpg');
await j(sharp(W + '2026_06_AmaSofia-haven-Teus-Vlot-Diesel-Marine.webp')).toFile(A + 'haven-kraan.jpg');
await j(sharp(W + '2026_06_Teus-Vlot-Mia-Amore.webp')).toFile(A + 'scania-dc16.jpg');
await j(sharp(W + '2026_06_Teus-Vlot-Elektrotechniek-Excellence-Pearl-Elektrotechnische-installatie-1.webp')).toFile(A + 'elektro-installatie.jpg');
await j(sharp(W + '2026_06_cilinderkoppen-bewerken-machines.webp')).toFile(A + 'revisie-cilinderkoppen.jpg');
await j(sharp(W + '2026_06_Cummins-CPG-generatorsets-DMS.webp')).toFile(A + 'dms-cummins-gensets.jpg');
const m = await sharp('bron/brochure/p0021.jpg').metadata();
await j(sharp('bron/brochure/p0021.jpg').extract({ left: 0, top: 0, width: Math.round(m.width * 0.52), height: Math.round(m.height * 0.6) })).toFile(A + 'cornerpoint-veren.jpg');
const m2 = await sharp('bron/brochure/p0022.jpg').metadata();
await j(sharp('bron/brochure/p0022.jpg').extract({ left: 0, top: 0, width: m2.width, height: Math.round(m2.height * 0.68) })).toFile(A + 'machinekamer-zw.jpg');
await j(sharp(W + '2026_06_Moderne-maritieme-techniek-aan-boord-van-AmaSofia.webp')).toFile(A + 'amasofia.jpg');
await j(sharp(W + '2025_10_Complete-refit-duwboot-Nicolaas-van-der-Weest.jpg')).toFile(A + 'nicolaas-van-der-wees.jpg');
await j(sharp(W + '2025_12_Afbouw-van-10-dokboten-door-Teus-Vlot.webp')).toFile(A + 'dokboten.jpg');
await j(sharp('bron/linkedin/img/li6.jpg')).toFile(A + 'hermotorisering-haven.jpg');
await j(sharp('bron/linkedin/img/li2.jpg')).toFile(A + 'team.jpg');
for (const f of ['werf-luchtfoto', 'haven-kraan', 'cornerpoint-veren', 'machinekamer-zw']) { const x = await sharp(A + f + '.jpg').metadata(); console.log(f, x.width, x.height); }
