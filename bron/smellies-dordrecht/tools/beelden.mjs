// Productbeelden: van de hoge-resolutie originelen (bron/wax-hr, smellies.nl CDN zonder cache) twee varianten:
//  src/assets/rond/<slug>.jpg  : strakke middenuitsnede (60%), voor de ronde 'bonbon'-weergave
//  src/assets/macro/<slug>.jpg : hele foto, max 1400px, voor het detailbeeld op de productpagina
// Licht gelijkgetrokken: iets helderder, iets meer verzadiging, fijne verscherping.
import sharp from 'sharp'; import fs from 'node:fs';
fs.mkdirSync('src/assets/rond', { recursive: true }); fs.mkdirSync('src/assets/macro', { recursive: true });
for (const f of fs.readdirSync('bron/wax-hr')) {
  const src = `bron/wax-hr/${f}`; const { width: w } = await sharp(src).metadata();
  const c = Math.round(w * 0.6), o = Math.round((w - c) / 2);
  const ton = (s) => s.modulate({ brightness: 1.03, saturation: 1.05 }).sharpen({ sigma: 0.6 });
  await ton(sharp(src).extract({ left: o, top: o, width: c, height: c }).resize(Math.min(c, 900))).jpeg({ quality: 90, mozjpeg: true }).toFile(`src/assets/rond/${f}`);
  await ton(sharp(src).resize(Math.min(w, 1400))).jpeg({ quality: 88, mozjpeg: true }).toFile(`src/assets/macro/${f}`);
}
console.log('klaar', fs.readdirSync('src/assets/rond').length);
