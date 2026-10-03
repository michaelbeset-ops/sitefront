const sharp=require('../node_modules/sharp');const fs=require('fs');
const ids=process.argv[2].split(',').map(Number);const out=process.argv[3];
(async()=>{const fl=fs.readdirSync('img').filter(f=>/\.(jpe?g|png)$/i.test(f)).sort();const W=480,H=360,cols=4;const comp=[];
for(let k=0;k<ids.length;k++){const i=ids[k];
const buf=await sharp('img/'+fl[i]).rotate().resize(W,H,{fit:'contain',background:'#ddd'}).composite([{input:Buffer.from(`<svg width="${W}" height="${H}"><rect width="40" height="26" fill="black"/><text x="4" y="20" font-size="20" fill="yellow">${i}</text></svg>`)}]).toBuffer();
comp.push({input:buf,left:(k%cols)*W,top:Math.floor(k/cols)*H});}
await sharp({create:{width:cols*W,height:Math.ceil(ids.length/cols)*H,channels:3,background:'#fff'}}).composite(comp).jpeg({quality:82}).toFile(out);})();
