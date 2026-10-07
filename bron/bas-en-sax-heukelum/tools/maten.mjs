import sharp from 'sharp'; import fs from 'node:fs'; import path from 'node:path';
const dir = process.argv[2]; const min = +(process.argv[3]||900); const out=[];
for (const f of fs.readdirSync(dir)) { try { const m = await sharp(path.join(dir,f)).metadata(); if (Math.max(m.width,m.height)>=min) out.push(`${m.width}x${m.height} ${f}`); } catch {} }
console.log(out.sort().join('\n'));
