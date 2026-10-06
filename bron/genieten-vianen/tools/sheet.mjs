import sharp from 'sharp'; import fs from 'node:fs';
const [dir, out, from='0', to='999'] = process.argv.slice(2);
const files = fs.readdirSync(dir).filter(f=>/\.jpe?g$/.test(f)).sort().slice(+from, +to);
const T=260, cols=6; const rows=Math.ceil(files.length/cols);
const comps=[]; let i=0;
for (const f of files) { const buf = await sharp(dir+'/'+f).rotate().resize(T,T,{fit:'cover'}).toBuffer();
  const lab = Buffer.from(`<svg width="${T}" height="30"><rect width="${T}" height="30" fill="black"/><text x="6" y="22" font-size="20" fill="yellow" font-family="Arial">${f}</text></svg>`);
  comps.push({input:buf,left:(i%cols)*T,top:Math.floor(i/cols)*T},{input:lab,left:(i%cols)*T,top:Math.floor(i/cols)*T}); i++; }
await sharp({create:{width:cols*T,height:rows*T,channels:3,background:'#fff'}}).composite(comps).jpeg({quality:80}).toFile(out); console.log(files.length);
