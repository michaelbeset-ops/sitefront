import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new','--disable-blink-features=AutomationControlled'] });
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36';
const out = [];
for (const [w,h,tag] of [[1440,900,'d'],[390,844,'m']]) {
  const ctx = await b.newContext({ locale:'nl-NL', userAgent: UA, viewport:{width:w,height:h} });
  const p = await ctx.newPage();
  for (const u of ['http://staalenhout.nl/','https://staalenhout.nl/','http://www.staalenhout.nl/']) {
    try { const r = await p.goto(u,{waitUntil:'load',timeout:30000}); await p.waitForTimeout(1500);
      out.push(`${tag} ${u} -> ${r?.status()} ${p.url()} title="${await p.title()}" text="${(await p.evaluate(()=>document.body.innerText)).replace(/\s+/g,' ').slice(0,400)}"`);
      if (u.startsWith('http://staalenhout')) { await p.screenshot({path:`bron/web/staalenhout-${tag}.png`}); fs.writeFileSync('bron/web/staalenhout.html', await p.content()); }
    } catch(e){ out.push(`${tag} ${u} FOUT ${e.message.split('\n')[0]}`); }
  }
  await p.goto('https://www.google.com/maps/place/Staal+en+Hout+B.V./@51.7005005,4.8475075,17z/data=!3m1!4b1!4m6!3m5!1s0x47c69c7a6ef0f305:0xabcef7699bbdaa27!8m2!3d51.7005005!4d4.8475075?hl=nl',{waitUntil:'load',timeout:45000}).catch(()=>{});
  await p.waitForTimeout(2500);
  const r = p.locator('button[aria-label="Alles afwijzen"]:visible').first(); if (await r.count()) { await r.click({timeout:5000}).catch(()=>{}); await p.waitForTimeout(5000); }
  await p.waitForTimeout(3000);
  await p.screenshot({path:`bron/web/google-profiel-${tag}.png`});
  out.push(`${tag} google: ${(await p.evaluate(()=>document.body.innerText)).replace(/\s+/g,' ').slice(0,600)}`);
  await ctx.close();
}
fs.writeFileSync('bron/web/meting.txt', out.join('\n')); console.log(out.join('\n'));
await b.close();
