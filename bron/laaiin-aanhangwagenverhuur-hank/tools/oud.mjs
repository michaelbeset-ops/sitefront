import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [w,h,mob] of [[390,844,true],[1440,900,false]]) {
  const ctx = await b.newContext({ viewport:{width:w,height:h}, isMobile:mob, hasTouch:mob, deviceScaleFactor:1 });
  const p = await ctx.newPage(); let bytes=0, reqs=0;
  p.on('response', async r=>{ reqs++; try{ const l=r.headers()['content-length']; if(l) bytes+=+l; }catch{} });
  const t=Date.now(); await p.goto('https://laaiin.nl/', {waitUntil:'networkidle', timeout:60000}); const ms=Date.now()-t;
  await p.waitForTimeout(2500);
  await p.screenshot({path:`bron/oud-${w}.png`});
  await p.screenshot({path:`bron/oud-${w}-full.png`, fullPage:true});
  const info = await p.evaluate(()=>({sw:document.documentElement.scrollWidth, H:document.documentElement.scrollHeight, h1:[...document.querySelectorAll('h1')].map(x=>x.innerText), imgsNoAlt:[...document.querySelectorAll('img')].filter(i=>!i.alt).length, imgs:document.images.length, cookie: !!document.querySelector('[id*=cookie i],[class*=cmplz i],[id*=Cookiebot i],[class*=cookie i]'), fontSizeP: getComputedStyle(document.querySelector('p')||document.body).fontSize}));
  console.log(w, ms+'ms', reqs, 'req', Math.round(bytes/1024)+'KB', JSON.stringify(info));
  await ctx.close();
}
await b.close();
