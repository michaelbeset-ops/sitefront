import sharp from 'sharp'; import fs from 'node:fs';
for (const f of process.argv.slice(2)) { const m = await sharp(f).metadata(); const raw = fs.readFileSync(f).toString('latin1');
 const hits = [...new Set(raw.match(/(Copyright|Artist|Canon|NIKON|SONY|Apple|iPhone|Adobe|Shutterstock|Getty|iStock|stock|Midjourney|DALL|OpenAI|c2pa|Firefly|trainedAlgorithmic|Google|SM-[A-Z0-9]+|Photographer|Rolex)[^\x00]{0,40}/gi)||[])].slice(0,8);
 console.log(f.split('/').pop(), m.width+'x'+m.height, m.exif?'EXIF':'', m.xmp?'XMP':'', m.icc?'ICC':'', JSON.stringify(hits)); }
