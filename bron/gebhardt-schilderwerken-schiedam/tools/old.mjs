import { chromium } from 'playwright';
const out='C:/Users/Micha/AppData/Local/Temp/claude/C--Users-Micha-Downloads-Sitefront/679bea37-2636-40ab-8595-63111bb3d5b5/scratchpad/geb/';
const b = await chromium.launch();
for (const w of [390,1440]) {
  const p = await (await b.newContext({ viewport: { width: w, height: w>400?900:844 } })).newPage();
  await p.goto('http://www.gebhardt.uw-vakschilder.nl/', { waitUntil: 'networkidle' }).catch(e=>console.log(e.message));
  await p.waitForTimeout(1500);
  await p.screenshot({ path: out+`old-${w}.png` });
  console.log(w, await p.evaluate(()=>({sw:document.documentElement.scrollWidth, txt:document.body.innerText.match(/Daarn.{0,40}|Email.{0,60}/g), fs:getComputedStyle(document.querySelector('p')||document.body).fontSize})));
  await p.goto('http://www.gebhardt.uw-vakschilder.nl/contact/', { waitUntil: 'networkidle' }); await p.screenshot({ path: out+`old-contact-${w}.png`, fullPage:true });
  await p.context().close();
}
const p=await b.newPage(); const r=await p.goto('https://www.gebhardt.uw-vakschilder.nl/').catch(e=>console.log('HTTPS', e.message.split('\n')[0]));
await b.close();
