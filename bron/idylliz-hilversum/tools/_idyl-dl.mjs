import sharp from 'sharp'; import fs from 'node:fs';
const D = 'C:/Users/Micha/Downloads/Sitefront/demos/idylliz-hilversum/bron/';
const L = JSON.parse(fs.readFileSync(D + 'web/imgs.json'));
const ids = process.argv.slice(2).map(Number);
await Promise.all(ids.map(async (n) => { const u = L[n].u.replace(/\/(s|w)\d+(-h\d+)?\//, '/s2400/'); const b = Buffer.from(await (await fetch(u)).arrayBuffer()); const f = `${D}foto/${n}.jpg`; await sharp(b).rotate().jpeg({ quality: 92 }).toFile(f); const m = await sharp(f).metadata(); console.log(n, m.width + 'x' + m.height, L[n].t); }));
