import sharp from 'sharp';
const fs=['DZe6RPlCE7W-03','DZe6RPlCE7W-04','DZe6RPlCE7W-10','DZe6RPlCE7W-11','DZe6RPlCE7W-12','DZe6RPlCE7W-07'];
const comp=[];for(const [i,f] of fs.entries()) comp.push({input:await sharp('bron/ig/'+f+'.jpg').resize(450,600).toBuffer(),left:(i%3)*460,top:Math.floor(i/3)*610});
await sharp({create:{width:1370,height:1220,channels:3,background:'#fff'}}).composite(comp).jpeg({quality:80}).toFile('bron/ig/_kand.jpg');
