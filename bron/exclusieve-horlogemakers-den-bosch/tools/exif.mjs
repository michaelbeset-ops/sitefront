import sharp from 'sharp'; import fs from 'node:fs';
for (const f of process.argv.slice(2)) { let m; try { m = await sharp(f).metadata(); } catch { continue; }
 const s = m.exif ? m.exif.toString('latin1').match(/[\x20-\x7e]{4,}/g)?.join(' | ').slice(0,300) : '';
 const raw = fs.readFileSync(f).toString('latin1'); const ai = /trainedAlgorithmic|firefly|c2pa/i.test(raw) ? 'AI/C2PA' : ''; const st = /stock:|shutterstock|istock|getty/i.test(raw) ? 'STOCK' : '';
 console.log(f.split('/').pop().slice(0,60), m.width+'x'+m.height, ai, st, s); }
