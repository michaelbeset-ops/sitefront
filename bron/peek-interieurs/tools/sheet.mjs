// Contactsheet van alle eigen beelden (bron/site/img) met bestandsnaam en maat.
import sharp from 'sharp'; import fs from 'node:fs';
const D = 'bron/site/img/'; const fs2 = fs.readdirSync(D).filter(f => /\.(jpe?g|png|webp)$/i.test(f));
const rows = []; for (const f of fs2) { try { const m = await sharp(D + f).metadata(); rows.push({ f, w: m.width, h: m.height }); } catch {} }
rows.sort((a, b) => b.w * b.h - a.w * a.h);
fs.writeFileSync('bron/site/img-maten.txt', rows.map(r => `${r.f} ${r.w}x${r.h}`).join('\n'));
const big = rows.filter(r => r.w >= 700 && r.h >= 450);
const T = 240, C = 8; const per = 64;
for (let s = 0; s * per < big.length; s++) {
  const part = big.slice(s * per, s * per + per); const R = Math.ceil(part.length / C);
  const comps = [];
  for (let i = 0; i < part.length; i++) {
    const buf = await sharp(D + part[i].f).resize(T, T, { fit: 'cover' }).toBuffer();
    const lab = Buffer.from(`<svg width="${T}" height="22"><rect width="100%" height="100%" fill="#000"/><text x="3" y="15" font-size="12" fill="#fff" font-family="Arial">${(s*per+i)} ${part[i].f.slice(0, 22).replace(/&/g,'')} ${part[i].w}</text></svg>`);
    comps.push({ input: buf, left: (i % C) * T, top: Math.floor(i / C) * (T + 22) + 22 }, { input: lab, left: (i % C) * T, top: Math.floor(i / C) * (T + 22) });
  }
  await sharp({ create: { width: C * T, height: R * (T + 22), channels: 3, background: '#888' } }).composite(comps).jpeg({ quality: 70 }).toFile(`bron/_sheet${s}.jpg`);
}
console.log(rows.length, big.length);
