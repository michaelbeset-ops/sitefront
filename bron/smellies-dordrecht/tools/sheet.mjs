import sharp from 'sharp'; import fs from 'node:fs';
const dir = process.argv[2], out = process.argv[3];
const files = fs.readdirSync(dir).filter(f=>f.endsWith('.jpg')).sort();
const S=200, cols=8, rows=Math.ceil(files.length/cols);
const comp = await Promise.all(files.map(async (f,i)=>({ input: await sharp(dir+'/'+f).resize(S,S,{fit:'contain',background:'#888'}).toBuffer(), left:(i%cols)*S, top:Math.floor(i/cols)*S })));
await sharp({create:{width:cols*S,height:rows*S,channels:3,background:'#888'}}).composite(comp).jpeg({quality:80}).toFile(out);
console.log(files.map((f,i)=>i+':'+f).join(' '));
