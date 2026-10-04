import { chromium } from 'playwright';
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new','--disable-blink-features=AutomationControlled'] }); const ctx = await b.newContext({ userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', locale: 'nl-NL', viewport: { width: 1400, height: 1600 } }); const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/search/' + encodeURIComponent('Auto-Oudewater Iepenweg 15 Oudewater') + '?hl=nl', { waitUntil: 'load' }).catch(()=>{});
await p.waitForTimeout(2500);
const r = p.locator('button:has-text("Alles afwijzen")').first(); if (await r.count()) { await r.click(); await p.waitForTimeout(4000); }
await p.waitForTimeout(3000);
const t = p.locator('button[role=tab]:has-text("Reviews")').first(); await t.click(); await p.waitForTimeout(3000);
for (let i=0;i<6;i++){ await p.evaluate(()=>document.querySelectorAll('[role=main] div').forEach(d=>{if(d.scrollHeight>d.clientHeight+50)d.scrollBy(0,2500)})); await p.waitForTimeout(1200);}
console.log(await p.evaluate(()=>[...document.querySelectorAll('.jftiEf')].map(e=>{const st=e.querySelector('[role=img][aria-label*="ster"]'); return (st?st.getAttribute('aria-label'):'?')+' | '+e.innerText.split('\n').filter(Boolean).slice(0,3).join(' / ')}).join('\n')));
await b.close();
