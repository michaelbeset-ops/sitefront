// node sheet.cjs <dir> <out.png> : contactsheet met bestandsnamen
const sharp=require('C:/Users/Micha/Downloads/Sitefront/demos/fan-nails-ridderkerk/node_modules/sharp');const fs=require('fs'),path=require('path');
(async()=>{const dir=process.argv[2],out=process.argv[3];const fl=fs.readdirSync(dir).filter(f=>/\.(jpe?g|png|webp)$/i.test(f));
const W=300,H=230,C=5;const comps=[];let i=0;
for(const f of fl){try{const buf=await sharp(path.join(dir,f)).resize(W-10,H-30,{fit:'contain',background:'#ddd'}).png().toBuffer();const x=(i%C)*W,y=Math.floor(i/C)*H;
comps.push({input:buf,left:x+5,top:y+5});const m=await sharp(path.join(dir,f)).metadata();
comps.push({input:Buffer.from(`<svg width="${W}" height="22"><text x="4" y="15" font-size="12" font-family="Arial">${i} ${f.slice(0,28).replace(/&/g,'')} ${m.width}x${m.height}</text></svg>`),left:x,top:y+H-24});i++}catch(e){}}
await sharp({create:{width:W*C,height:Math.ceil(i/C)*H,channels:3,background:'#fff'}}).composite(comps).png().toFile(out);console.log(i)})();
