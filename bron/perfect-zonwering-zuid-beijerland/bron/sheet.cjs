const sharp=require('/c/Users/Micha/Downloads/Sitefront/demos/fan-nails-ridderkerk/node_modules/sharp'.replace('/c/','C:/'));
const fs=require('fs');
(async()=>{const files=fs.readdirSync('foto').filter(f=>/\.(jpe?g|png)$/i.test(f)).sort();
const W=300,H=225,cols=8;const rows=Math.ceil(files.length/cols);const comps=[];
for(let i=0;i<files.length;i++){const buf=await sharp('foto/'+files[i]).rotate().resize(W,H,{fit:'cover'}).toBuffer();
const lab=Buffer.from(`<svg width="${W}" height="22"><rect width="${W}" height="22" fill="black" opacity=".7"/><text x="4" y="16" font-size="14" fill="white" font-family="Arial">${i} ${files[i].slice(0,34)}</text></svg>`);
comps.push({input:buf,left:(i%cols)*W,top:Math.floor(i/cols)*H},{input:lab,left:(i%cols)*W,top:Math.floor(i/cols)*H});}
await sharp({create:{width:cols*W,height:rows*H,channels:3,background:'#fff'}}).composite(comps).jpeg({quality:80}).toFile('_sheet.jpg');console.log(files.length,rows)})();
