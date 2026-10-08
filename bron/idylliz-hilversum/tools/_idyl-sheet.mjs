// Downloadt thumbnails van alle Idylliz-blogfoto's en maakt genummerde contactsheets.
import sharp from 'sharp'; import fs from 'node:fs';
const D = 'C:/Users/Micha/Downloads/Sitefront/demos/idylliz-hilversum/bron/';
const L = JSON.parse(fs.readFileSync(D + 'web/imgs.json'));
const q = L.map((x, n) => ({ ...x, n })); let k = 0;
async function w() { while (k < q.length) { const x = q[k++]; const f = `${D}thumbs/${x.n}.jpg`; if (fs.existsSync(f)) continue; try { const r = await fetch(x.u.replace(/\/(s|w)\d+(-h\d+)?\//, '/s400/')); const b = Buffer.from(await r.arrayBuffer()); await sharp(b).rotate().resize(300, 300, { fit: 'cover' }).jpeg().toFile(f); } catch (e) { console.log('fail', x.n); } } }
await Promise.all(Array.from({ length: 12 }, w));
const per = 48, cols = 8;
for (let s = 0; s * per < q.length; s++) {
  const part = q.slice(s * per, s * per + per); const comp = [];
  for (const [i, x] of part.entries()) { const f = `${D}thumbs/${x.n}.jpg`; if (!fs.existsSync(f)) continue;
    comp.push({ input: f, left: (i % cols) * 300, top: Math.floor(i / cols) * 330 });
    comp.push({ input: Buffer.from(`<svg width="300" height="30"><rect width="300" height="30" fill="#000"/><text x="4" y="21" font-size="18" fill="#fff" font-family="Arial">${x.n} ${x.t.slice(0, 24).replace(/[&<>"]/g, '')}</text></svg>`), left: (i % cols) * 300, top: Math.floor(i / cols) * 330 + 300 }); }
  await sharp({ create: { width: cols * 300, height: Math.ceil(part.length / cols) * 330, channels: 3, background: '#fff' } }).composite(comp).jpeg({ quality: 70 }).toFile(`${D}thumbs/_sheet${s}.jpg`);
}
console.log('ok');
