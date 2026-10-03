import { chromium } from 'playwright';
const out = 'C:/Users/Micha/Downloads/Sitefront/demos/hansler-zonwering-halsteren/bron/';
const b = await chromium.launch();
for (const [w,h,mob] of [[390,844,true],[1440,900,false]]) {
  const c = await b.newContext({ viewport:{width:w,height:h}, isMobile:mob, hasTouch:mob, deviceScaleFactor:1 });
  const p = await c.newPage();
  await p.goto('https://hansler.nl/', {waitUntil:'networkidle'}); await p.waitForTimeout(1500);
  const info = await p.evaluate(()=>{
    const sw=document.documentElement.scrollWidth;
    const wide=[...document.querySelectorAll('body *')].filter(e=>e.getBoundingClientRect().right>innerWidth+2).slice(0,8).map(e=>e.tagName+'.'+(e.className||'').toString().slice(0,60)+' r='+Math.round(e.getBoundingClientRect().right));
    const klanten=[...document.querySelectorAll('*')].find(e=>e.childElementCount===0&&/Onze klanten/.test(e.textContent));
    const kv = klanten? {vis: getComputedStyle(klanten).display, top: Math.round(klanten.getBoundingClientRect().top+scrollY)}:null;
    return {sw, H:document.documentElement.scrollHeight, wide, kv, imgs:[...document.images].map(i=>i.currentSrc+' '+i.naturalWidth+'x'+i.naturalHeight)};
  });
  console.log(w, JSON.stringify(info,null,1));
  await p.screenshot({path: out+`oud-view-${w}.png`});
  await p.screenshot({path: out+`oud-full-${w}.png`, fullPage:true});
  await c.close();
}
await b.close();
