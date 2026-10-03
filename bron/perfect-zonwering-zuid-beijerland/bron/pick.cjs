const sharp=require('C:/Users/Micha/Downloads/Sitefront/demos/fan-nails-ridderkerk/node_modules/sharp');
const L=process.argv.slice(3);(async()=>{const W=800,H=600,c=[];for(let i=0;i<L.length;i++){c.push({input:await sharp('foto/'+L[i]).rotate().resize(W,H,{fit:'cover'}).toBuffer(),left:(i%2)*W,top:Math.floor(i/2)*H})}
await sharp({create:{width:2*W,height:Math.ceil(L.length/2)*H,channels:3,background:'#fff'}}).composite(c).jpeg({quality:80}).toFile(process.argv[2])})();
