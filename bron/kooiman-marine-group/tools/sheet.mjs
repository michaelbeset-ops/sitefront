// Contactsheet van grote foto's (breedte >= arg2) met bestandsnaam. Arg1: uitbestand, arg2 minbreedte, arg3 filter-regex
import fs from 'node:fs'; import sharp from 'sharp';
const [uit, min = 1400, re = '.'] = process.argv.slice(2);
const rij = fs.readFileSync('bron/foto/_maten.txt', 'utf8').split('\n').filter((r) => !r.startsWith('FOUT')).map((r) => r.split('\t'))
  .filter(([p, wh]) => +wh.split('x')[0] >= +min && new RegExp(re, 'i').test(p) && !/-[123]\.(jpe?g|png)$/i.test(p));
const W = 300, H = 200, K = 6, rows = Math.ceil(rij.length / K);
const comp = [];
for (let i = 0; i < rij.length; i++) {
  const [p, wh] = rij[i];
  const img = await sharp('bron/foto/' + p).resize(W, H, { fit: 'cover' }).toBuffer();
  const label = Buffer.from(`<svg width="${W}" height="22"><rect width="${W}" height="22" fill="#000" opacity=".75"/><text x="4" y="15" font-size="11" fill="#fff" font-family="Arial">${i} ${p.split('/').pop().slice(0, 34).replace(/&/g, '')} ${wh}</text></svg>`);
  comp.push({ input: img, left: (i % K) * W, top: Math.floor(i / K) * (H + 2) }, { input: label, left: (i % K) * W, top: Math.floor(i / K) * (H + 2) + H - 22 });
}
await sharp({ create: { width: W * K, height: rows * (H + 2), channels: 3, background: '#222' } }).composite(comp).jpeg({ quality: 80 }).toFile(uit);
fs.writeFileSync(uit + '.txt', rij.map((r, i) => i + '\t' + r.join('\t')).join('\n'));
console.log(rij.length);
