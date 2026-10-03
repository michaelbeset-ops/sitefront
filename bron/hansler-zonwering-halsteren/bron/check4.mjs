import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [w,mob] of [[1440,false],[390,true]]) {
const p = await b.newPage({viewport:{width:w,height:900},isMobile:mob});
await p.goto('https://hansler.nl/',{waitUntil:'networkidle'});
for (let y=0;y<6000;y+=300){await p.evaluate(y=>scrollTo(0,y),y);await p.waitForTimeout(200);}
await p.waitForTimeout(1500);
const r = await p.evaluate(()=>{
 const secs=[...document.querySelectorAll('.elementor-top-section, .e-con.e-parent, section')].map(e=>{const b=e.getBoundingClientRect();return Math.round(b.top+scrollY)+'-'+Math.round(b.bottom+scrollY)+' '+e.className.toString().slice(0,60)+' txt:'+e.innerText.trim().slice(0,40).replace(/\n/g,' ')});
 const imgs=[...document.images].filter(i=>!i.naturalWidth).map(i=>(i.getAttribute('src')||i.getAttribute('data-src')||'').slice(0,90)+' '+Math.round(i.getBoundingClientRect().top+scrollY)+' '+i.width+'x'+i.height);
 return {secs,imgs, sw:document.documentElement.scrollWidth};});
console.log(w, JSON.stringify(r,null,1));
if(w===1440){await p.evaluate(()=>scrollTo(0,1900));await p.waitForTimeout(800);await p.screenshot({path:'bron/oud-gat-1440.png'});}
}
await b.close();
