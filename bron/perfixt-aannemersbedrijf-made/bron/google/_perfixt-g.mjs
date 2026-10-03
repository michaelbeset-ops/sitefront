import { chromium } from 'playwright'; import fs from 'node:fs';
const OUT='C:/Users/Micha/Downloads/Sitefront/demos/perfixt-aannemersbedrijf-made/bron/google/';
const b = await chromium.launch({ args: ['--disable-gpu','--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1400, height: 1500 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' });
const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/search/'+encodeURIComponent('PERFIXT Aannemersbedrijf Van den Houtstraat 8 Made')+'?hl=nl',{waitUntil:'domcontentloaded'}); await p.waitForTimeout(2500);
const r = p.locator('button:has-text("Alles afwijzen")').first(); if (await r.count()) { await r.click(); await p.waitForTimeout(5000); }
{ const f = p.locator('a.hfpxzc').first(); if (await f.count()) { await f.click().catch(()=>{}); await p.waitForTimeout(4000);} }
await p.waitForTimeout(2000);
console.log('URL', p.url());
const main = await p.evaluate(() => document.querySelector('[role=main]')?.innerText || document.body.innerText);
fs.writeFileSync(OUT+'overzicht.txt', main); console.log(main.slice(0,4000));
await p.screenshot({ path: OUT+'_overzicht.png' });
const hrs = await p.evaluate(() => [...document.querySelectorAll('[aria-label*="Openingstijden"], table.eK4R0e')].map(e=>e.getAttribute('aria-label')||e.innerText).join('\n'));
console.log('HRS', hrs);
const tab = p.locator('button[role=tab]:has-text("Reviews")').first();
if (await tab.count()) { await tab.click(); await p.waitForTimeout(3500);
  for (let i = 0; i < 6; i++) { await p.evaluate(() => { const f = document.querySelector('div.m6QErb.DxyBCb'); if (f) f.scrollTop = f.scrollHeight; }); await p.waitForTimeout(1200); }
  await p.evaluate(() => document.querySelectorAll('button').forEach(b => { if (/^(Meer|Meer weergeven)$/.test(b.innerText.trim())) b.click(); })); await p.waitForTimeout(800);
  const out = await p.evaluate(() => [...document.querySelectorAll('div.jftiEf')].map(r => ({n: r.querySelector('.d4r55')?.innerText, d: r.querySelector('.rsqaWe')?.innerText, st: r.querySelector('[role=img]')?.getAttribute('aria-label'), t: r.querySelector('.wiI7pd')?.innerText || '', own: r.querySelector('.CDe7pd')?.innerText || ''})));
  fs.writeFileSync(OUT+'reviews.json', JSON.stringify(out,null,1)); console.log('REVIEWS', out.length, JSON.stringify(out,null,1).slice(0,6000));
} else console.log('geen reviewtab');
const imgs = await p.evaluate(() => [...document.querySelectorAll('img')].map(i=>i.src).filter(s=>/googleusercontent/.test(s)));
console.log('IMGS', [...new Set(imgs)].join('\n'));
await b.close();
