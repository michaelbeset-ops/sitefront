// Beeld: eigen foto's van hun Google-profiel (bron/google/img, Van eigenaar + bezoekers) + Unsplash-sfeerfoto's (bron/unsplash).
import sharp from 'sharp'; import fs from 'node:fs';
const G = 'bron/google/img/', U = 'bron/unsplash/', A = 'src/assets/'; const q = { quality: 82, mozjpeg: true };
fs.mkdirSync(A, { recursive: true });
const out = (src, name, opt = {}) => { let s = sharp(src); if (opt.crop) s = s.extract(opt.crop); return s.resize({ width: opt.w || 1200, height: opt.h, fit: 'cover', position: opt.pos || 'centre', withoutEnlargement: true }).jpeg(q).toFile(A + name); };
await out(U + 'hero.jpg', 'hero.jpg', { w: 2400 });
await out(U + 'hero.jpg', 'hero-m.jpg', { crop: { left: 640, top: 0, width: 1250, height: 1800 }, w: 900 });
// pand: man links weggesneden
await out(G + 'g00.jpg', 'pand.jpg', { crop: { left: 470, top: 0, width: 1930, height: 1121 }, w: 1600 });
await out(G + 'g22.jpg', 'c-bedden.jpg', { w: 1200 });
await out(G + 'g18.jpg', 'c-banken.jpg', { crop: { left: 300, top: 0, width: 1800, height: 1121 }, w: 1200 });
await out(G + 'g38.jpg', 'c-tafels.jpg', { crop: { left: 0, top: 80, width: 1620, height: 1400 }, w: 1000 });
await out(G + 'g58.jpg', 'c-vloeren.jpg', { crop: { left: 0, top: 700, width: 1152, height: 1100 }, w: 1000 });
await out(U + 'gordijn.jpg', 'c-raam.jpg', { w: 1200 });
await out(G + 'g13.jpg', 'c-tapijt.jpg', { crop: { left: 400, top: 0, width: 1500, height: 1121 }, w: 1200 });
await out(G + 'g36.jpg', 'c-kasten.jpg', { crop: { left: 0, top: 0, width: 1620, height: 1450 }, w: 1000 });
await out(U + 'trap.jpg', 'c-trap.jpg', { w: 1200 });
await out(G + 'g23.jpg', 'b-groot.jpg', { w: 1500 });
await out(G + 'g07.jpg', 'b-roze.jpg', { w: 1000 });
await out(G + 'g51.jpg', 'b-zwart.jpg', { w: 1000 });
await out(G + 'g03.jpg', 'b-licht.jpg', { w: 1000 });
for (const [g, n] of [['g04', 's-hal'], ['g11', 's-bedden'], ['g17', 's-hoek'], ['g14', 's-vloer'], ['g19', 's-laminaat']]) await out(G + g + '.jpg', n + '.jpg', { w: 1400 });
console.log(fs.readdirSync(A).join(' '));
