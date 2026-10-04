import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [w,h,pad] of [[390,844,''],[1440,900,''],[390,844,'index.php/occasions'],[390,844,'index.php/contact']]) {
  const p = await (await b.newContext({ viewport:{width:w,height:h}, isMobile: w<500, hasTouch: w<500 })).newPage();
  await p.goto('https://www.autobedrijfabbas.nl/'+pad, { waitUntil:'networkidle' }); await p.waitForTimeout(1500);
  const r = await p.evaluate(()=>({sw:document.documentElement.scrollWidth, H:document.documentElement.scrollHeight, fs:getComputedStyle(document.querySelector('.art-article, .art-postcontent p, body')).fontSize, tap:[...document.querySelectorAll('a')].filter(a=>{const r=a.getBoundingClientRect();return r.width>0&&r.height<24}).length}));
  console.log(w, pad, JSON.stringify(r));
  await p.screenshot({ path:`bron/oud-${w}-${pad.replace(/\W/g,'_')||'home'}.png` });
}
await b.close();
