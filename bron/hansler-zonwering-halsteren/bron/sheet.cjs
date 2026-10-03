const sharp=require('../node_modules/sharp');const fs=require('fs');
(async()=>{const fl=fs.readdirSync('img').filter(f=>/\.(jpe?g|png)$/i.test(f)).sort();const W=260,H=195,cols=8;const comp=[];
for(let i=0;i<fl.length;i++){const m=await sharp('img/'+fl[i]).metadata();console.log(i,fl[i],m.width+'x'+m.height);
const buf=await sharp('img/'+fl[i]).resize(W,H,{fit:'cover'}).composite([{input:Buffer.from(`<svg width="${W}" height="${H}"><rect width="34" height="22" fill="black"/><text x="4" y="17" font-size="16" fill="yellow">${i}</text></svg>`)}]).toBuffer();
comp.push({input:buf,left:(i%cols)*W,top:Math.floor(i/cols)*H});}
await sharp({create:{width:cols*W,height:Math.ceil(fl.length/cols)*H,channels:3,background:'#fff'}}).composite(comp).jpeg({quality:80}).toFile('fotos-sheet.jpg');})();
