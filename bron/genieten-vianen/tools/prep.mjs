import sharp from 'sharp'; import fs from 'node:fs';
const B='bron/fbhi/', A='src/assets/';
const job=[['15','winkel'],['19','bonbons'],['21','confiture'],['37','theedrop'],['60','plankje'],['07','koffie'],['08','guatemala'],['20','pakket'],['02','eigenaresse']];
for (const [s,d] of job) await sharp(B+'hi-'+s+'.jpg').rotate().jpeg({quality:88,mozjpeg:true}).toFile(A+d+'.jpg');
// Logo: zwart op wit -> inkt op transparant (en wit voor donkere vlakken)
const src = sharp('bron/web/logo-breed.jpg').trim({threshold:20});
const { data, info } = await src.clone().greyscale().raw().toBuffer({ resolveWithObject: true });
const mk = async (rgb, out) => { const px = Buffer.alloc(info.width*info.height*4);
  for (let i=0;i<info.width*info.height;i++){ const a=Math.max(0,Math.min(255,Math.round((235-data[i])*255/205))); px[i*4]=rgb[0];px[i*4+1]=rgb[1];px[i*4+2]=rgb[2];px[i*4+3]=a; }
  await sharp(px,{raw:{width:info.width,height:info.height,channels:4}}).png({compressionLevel:9}).toFile(out); };
await mk([26,25,24], A+'logo.png'); await mk([247,246,243], A+'logo-wit.png');
console.log(info.width, info.height);
