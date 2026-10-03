// Kentekens onherkenbaar maken (blur) en naar src/assets schrijven.
const sharp=require('sharp');
const jobs=[
 ['bron/google/g-1.jpg','src/assets/hero.jpg',[[84,770,104,38],[1308,784,122,42]]],
 ['bron/google/g-2.jpg','src/assets/aanhanger.jpg',[[68,728,72,58]]],
 ['bron/google/g-6.jpg','src/assets/team.jpg',[[104,772,72,78]]],
 ['bron/site-img/IMG_3335.jpeg','src/assets/wagens.jpg',[[236,728,232,66]]],
 ['bron/google/g-5.jpg','src/assets/motor.jpg',[]],
];
(async()=>{for(const [i,o,rs] of jobs){const base=sharp(i);const comps=[];
 for(const [x,y,w,h] of rs){comps.push({input:await sharp(i).extract({left:x,top:y,width:w,height:h}).blur(14).toBuffer(),left:x,top:y});}
 await base.composite(comps).jpeg({quality:86,mozjpeg:true}).toFile(o);
 for(const [k,[x,y,w,h]] of rs.entries()) await sharp(o).extract({left:Math.max(0,x-60),top:Math.max(0,y-40),width:w+120,height:h+80}).toFile(`bron/chk-${o.split('/').pop()}-${k}.png`);
 console.log(o)}})();
