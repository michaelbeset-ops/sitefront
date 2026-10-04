import { chromium } from 'playwright';
const b = await chromium.launch({ channel: 'chrome' });
for (const [url,w,h,name] of [['http://www.auto-oudewater.nl/',390,844,'oud-http-390'],['https://www.auto-oudewater.nl/',390,844,'oud-https-390'],['http://www.auto-oudewater.nl/',1440,900,'oud-http-1440'],['http://www.auto-oudewater.nl/occasions/',1440,900,'oud-occ-1440'],['http://www.auto-oudewater.nl/corvette/',1440,900,'oud-corvette-1440']]) {
  const ctx = await b.newContext({ viewport:{width:w,height:h}, isMobile: w<500, deviceScaleFactor:1 }); const p = await ctx.newPage();
  const errs=[]; p.on('console',m=>{ if(m.type()==='error'||m.type()==='warning') errs.push(m.text().slice(0,160)); });
  await p.goto(url,{waitUntil:'networkidle',timeout:45000}).catch(e=>errs.push('goto '+e.message.slice(0,80)));
  await p.waitForTimeout(2500);
  const m = await p.evaluate(()=>({sw:document.documentElement.scrollWidth, vp:!!document.querySelector('meta[name=viewport]'), fs:getComputedStyle(document.querySelector('.entry-content p')||document.body).fontSize, title:document.title, h:document.documentElement.scrollHeight, iframes:[...document.querySelectorAll('iframe')].map(i=>i.src.slice(0,60)+' '+i.offsetHeight)}));
  await p.screenshot({path:`shots/${name}.png`});
  console.log(name, JSON.stringify(m), '\n  ', errs.slice(0,6).join('\n   '));
  await ctx.close();
}
await b.close();
