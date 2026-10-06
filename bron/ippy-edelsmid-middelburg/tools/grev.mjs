import { chromium } from 'playwright';
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new','--disable-blink-features=AutomationControlled'] }); const ctx = await b.newContext({ userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', locale: 'nl-NL', viewport: { width: 1400, height: 1600 } }); const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/search/' + encodeURIComponent('IPPY Edelsmid Langeviele 52 Middelburg') + '?hl=nl', { waitUntil: 'load', timeout: 45000 }).catch(() => {});
await p.waitForTimeout(2500);
const r = p.locator('button:has-text("Alles afwijzen")').first(); if (await r.count()) { await r.click(); await p.waitForTimeout(4000); }
const f = p.locator('a.hfpxzc').first(); if (await f.count()) { await f.click().catch(() => {}); }
await p.waitForTimeout(4000);
const t = p.locator('button[role=tab]:has-text("Reviews")').first(); await t.click(); await p.waitForTimeout(2500);
for (const lab of ['Meer reviews', 'Meer reviews bekijken']) { const m = p.locator(`button:has-text("${lab}")`).first(); if (await m.count()) { await m.click().catch(()=>{}); await p.waitForTimeout(3000); console.log('klik', lab); } }
for (let i = 0; i < 25; i++) { await p.evaluate(() => { document.querySelectorAll('div').forEach(d => { if (d.scrollHeight > d.clientHeight + 50) d.scrollBy(0, 2500); }); }); await p.waitForTimeout(1200); }
await p.evaluate(() => [...document.querySelectorAll('button')].filter(x => /^Meer$/.test(x.innerText.trim())).forEach(x => x.click())); await p.waitForTimeout(800);
const txt = await p.evaluate(() => [...document.querySelectorAll("[data-review-id]")].map(e => (e.querySelector("[role=img][aria-label]")?.getAttribute("aria-label")||"") + " :: " + e.innerText.replace(/\n+/g," | ").slice(0,60)).filter((v,i,a)=>a.indexOf(v)===i).join("\n"));
console.log(txt || (await p.evaluate(()=>document.body.innerText)).slice(0,3000));
await p.screenshot({ path: 'C:/Users/Micha/Downloads/Sitefront/demos/ippy-edelsmid-middelburg/bron/google/rev.png' });
await b.close();
