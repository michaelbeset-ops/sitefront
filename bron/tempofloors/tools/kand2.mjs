import sharp from 'sharp';
const fs=['7637546581402717472','7639002285321784608','7632342779284311329','7643797652181765408','7651518176403918113','7693811143395036449','7656401792812551456','7693529863315066144'];
const comp=[];for(const [i,f] of fs.entries()) comp.push({input:await sharp('bron/tt/'+f+'.jpg').resize(337,600).toBuffer(),left:(i%4)*345,top:Math.floor(i/4)*610});
await sharp({create:{width:1380,height:1220,channels:3,background:'#fff'}}).composite(comp).jpeg({quality:80}).toFile('bron/tt/_kand.jpg');
