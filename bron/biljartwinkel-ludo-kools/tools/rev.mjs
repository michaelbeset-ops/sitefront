import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new','--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', viewport: { width: 1400, height: 1000 } });
const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/place/Biljartwinkel+Ludo+Kools/data=!4m2!3m1!1s0x47c40d41f2c1b5af:0x7c0c7d176b4e3685?hl=nl', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(3000);
if (p.url().includes('consent')) { await p.getByRole('button', { name: /Alles afwijzen/ }).first().click(); await p.waitForTimeout(4000); }
await p.waitForSelector('h1', { timeout: 20000 }); await p.waitForTimeout(2500);
await p.locator('button[role=tab]:has-text("Reviews")').first().click(); await p.waitForTimeout(3500);
await p.locator("button:has-text(\"Sluiten\")").first().click().catch(()=>{}); await p.locator("button:has-text(\"Meer reviews\")").first().click().catch(()=>console.log("geen meer")); await p.waitForTimeout(4000); console.log(p.url());
const sb = p.locator('button[aria-label*="orteren"]').first();
if (await sb.count()) { await sb.click(); await p.waitForTimeout(1200); await p.locator('[role=menuitemradio]').nth(1).click().catch(()=>console.log('nosortitem')); await p.waitForTimeout(3000); } else console.log('geen sorteerknop');
for (let i = 0; i < 30; i++) { await p.evaluate(() => { const d = [...document.querySelectorAll('div')].find(d => d.scrollHeight > d.clientHeight + 100 && /auto|scroll/.test(getComputedStyle(d).overflowY) && d.querySelector('[data-review-id]')); if (d) d.scrollTop = d.scrollHeight; }); await p.waitForTimeout(900); }
for (const m of await p.locator('button:has-text("Meer")').all()) await m.click({ timeout: 700 }).catch(() => {});
await p.waitForTimeout(800);
const reviews = await p.evaluate(() => [...document.querySelectorAll('div[data-review-id][aria-label]')].map(r => ({
  naam: r.getAttribute('aria-label'), sterren: r.querySelector('[role=img][aria-label*="ster"]')?.getAttribute('aria-label'),
  wanneer: r.querySelector('.rsqaWe')?.innerText, tekst: r.querySelector('.wiI7pd')?.innerText || '',
  antwoord: r.querySelector('.CDe7pd')?.innerText || '', fotos: r.querySelectorAll('button[data-photo-index]').length })));
fs.writeFileSync('bron/google/reviews.json', JSON.stringify(reviews, null, 1));
console.log('reviews', reviews.length); await p.screenshot({ path: 'bron/google/reviews.png' }); await b.close();
