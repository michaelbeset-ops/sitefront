const sharp=require('sharp');const fs=require('fs');
const [dir,out]=process.argv.slice(2);const fs_=fs.readdirSync(dir).filter(f=>/\.(jpe?g|png|webp)$/i.test(f));
(async()=>{const W=300,H=240;const cols=5;const rows=Math.ceil(fs_.length/cols);const comp=[];
for(let i=0;i<fs_.length;i++){const m=await sharp(dir+'/'+fs_[i]).metadata();const img=await sharp(dir+'/'+fs_[i]).flatten({background:'#888'}).resize(W,H-24,{fit:'contain',background:'#ccc'}).toBuffer();
const lab=Buffer.from(`<svg width="${W}" height="24"><rect width="100%" height="100%" fill="#fff"/><text x="4" y="16" font-size="12" font-family="Arial">${i} ${fs_[i].slice(0,30)} ${m.width}x${m.height}</text></svg>`);
comp.push({input:img,left:(i%cols)*W,top:Math.floor(i/cols)*H},{input:lab,left:(i%cols)*W,top:Math.floor(i/cols)*H+H-24});}
await sharp({create:{width:cols*W,height:rows*H,channels:3,background:'#fff'}}).composite(comp).jpeg({quality:80}).toFile(out);console.log(fs_.join('\n'))})();
