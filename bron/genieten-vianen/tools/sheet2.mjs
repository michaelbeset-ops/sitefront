import sharp from 'sharp'; import fs from 'node:fs';
const [dir,out]=process.argv.slice(2); const files=fs.readdirSync(dir).filter(f=>/\.jpg$/.test(f)).sort();
const W=480,H=600,cols=5; const comps=[]; let i=0;
for (const f of files){ comps.push({input:await sharp(dir+'/'+f).resize(W,H,{fit:'contain',background:'#fff'}).toBuffer(),left:(i%cols)*W,top:Math.floor(i/cols)*H});
 comps.push({input:Buffer.from(`<svg width="200" height="34"><rect width="200" height="34" fill="black"/><text x="6" y="25" font-size="24" fill="yellow">${f}</text></svg>`),left:(i%cols)*W,top:Math.floor(i/cols)*H}); i++;}
await sharp({create:{width:cols*W,height:Math.ceil(files.length/cols)*H,channels:3,background:'#fff'}}).composite(comps).jpeg({quality:82}).toFile(out);
