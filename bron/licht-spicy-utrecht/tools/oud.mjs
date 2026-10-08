import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [w,h] of [[1440,900],[390,844]]) {
  const p = await (await b.newContext({ viewport:{width:w,height:h}, isMobile: w<500, hasTouch: w<500, deviceScaleFactor: 1 })).newPage();
  const r = await p.goto('http://lichtspicy.nl/', { waitUntil:'networkidle' }).catch(e=>null);
  await p.waitForTimeout(2500);
  const m = await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, iw: innerWidth, H: document.documentElement.scrollHeight,
    over: [...document.querySelectorAll('p,h1,h2,h3,span,div')].filter(e=>{const r=e.getBoundingClientRect(); return e.children.length===0 && e.innerText?.trim().length>10 && (r.right>innerWidth+2)}).slice(0,5).map(e=>e.innerText.trim().slice(0,60)+' @'+Math.round(e.getBoundingClientRect().right)) }));
  console.log(w, r && r.status(), JSON.stringify(m));
  await p.screenshot({ path:`bron/web/oud-${w}.png` });
  await p.screenshot({ path:`bron/web/oud-${w}-full.png`, fullPage: true });
  await p.close();
}
await b.close();
