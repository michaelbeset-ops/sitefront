// Bewerkt eigen foto's (hansler.nl en Google-profiel) naar src/assets. Kentekens geblurd in het bronbestand.
const sharp=require('sharp');const fs=require('fs');
const I=f=>'bron/img/'+f, W='WhatsApp-Image-2024-12-06-at-';
const job=[
 ['hero.jpg', I(W+'14.31.14-2.jpeg'), 2400],
 ['rolluiken.jpg', I(W+'14.37.00-3.jpeg'), 1200],
 ['screens.jpg', I(W+'14.31.18-1.jpeg'), 1200],
 ['zonneschermen.jpg', I(W+'14.37.08-1.jpeg'), 1200],
 ['garagedeuren.jpg', I(W+'14.31.07-1.jpeg'), 1200],
 ['team.jpg', I('IMG_9817.jpg'), 1600],
 ['p1.jpg', I(W+'14.31.11-1.jpeg'), 1000],
 ['p2.jpg', I(W+'14.31.18.jpeg'), 1000],
 ['p3.jpg', I('IMG-20190115-WA0007-1.jpg'), 1000],
 ['p6.jpg', I(W+'14.37.02-1.jpeg'), 1000],
 ['p7.jpg', I(W+'14.37.01-1.jpeg'), 1000],
];
(async()=>{
 fs.mkdirSync('src/assets',{recursive:true});
 for(const [o,src,w] of job){await sharp(src).rotate().resize({width:w,withoutEnlargement:true}).jpeg({quality:82,mozjpeg:true}).toFile('src/assets/'+o);}
 // service.jpg: Google-profielfoto, kenteken van de bus links geblurd
 const g=sharp('bron/google/g1.jpg'); const reg={left:330,top:960,width:110,height:110};
 const blur=await sharp('bron/google/g1.jpg').extract(reg).blur(14).toBuffer();
 await g.composite([{input:blur,left:reg.left,top:reg.top}]).jpeg({quality:82,mozjpeg:true}).toFile('src/assets/service.jpg');
 await sharp('src/assets/service.jpg').extract({left:250,top:900,width:300,height:250}).toFile('bron/plate-check.png');
 console.log('ok');
})();
// bord.jpg: Google-profielfoto van hun bord "Service & reparatie", bijgesneden boven de auto's (geen kentekens in beeld).
(async()=>{await sharp('bron/google/g2.jpg').extract({left:0,top:380,width:1200,height:820}).jpeg({quality:82,mozjpeg:true}).toFile('src/assets/bord.jpg');})();
