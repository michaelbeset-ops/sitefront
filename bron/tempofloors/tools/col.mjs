import sharp from 'sharp';
const f='bron/ig/DZe6RPlCE7W-01.jpg';
const {data,info}=await sharp(f).extract({left:200,top:150,width:700,height:300}).raw().toBuffer({resolveWithObject:true});
const c={};for(let i=0;i<data.length;i+=3){const r=data[i],g=data[i+1],b=data[i+2]; if(r-g>40&&r-b>25){const k=[r>>3,g>>3,b>>3].join(',');c[k]=(c[k]||0)+1}}
console.log(Object.entries(c).sort((a,b)=>b[1]-a[1]).slice(0,8).map(([k,v])=>k.split(',').map(x=>(x*8).toString(16).padStart(2,'0')).join('')+' '+v).join('\n'));
await sharp(f).extract({left:150,top:120,width:780,height:360}).toFile('bron/ig/_logo-crop.png');
