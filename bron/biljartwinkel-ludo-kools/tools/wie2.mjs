import { chromium } from 'playwright';
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new','--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', viewport: { width: 1400, height: 1000 } });
const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/place/Biljartwinkel+Ludo+Kools/data=!4m2!3m1!1s0x47c40d41f2c1b5af:0x7c0c7d176b4e3685?hl=nl', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(3000);
if (p.url().includes('consent')) { await p.getByRole('button', { name: /Alles afwijzen/ }).first().click(); await p.waitForTimeout(4000); }
await p.waitForSelector('h1'); await p.waitForTimeout(2500);
await p.locator('button[aria-label*="Foto"]').first().click(); await p.waitForTimeout(4000);
for (const i of [0,2,3,4,5,6,7,8]) { await p.locator('a[data-photo-index]').nth(i).click().catch(()=>{}); await p.waitForTimeout(2500); await p.screenshot({ path: `bron/gfoto/_wie-${i}.png`, clip: { x: 430, y: 0, width: 970, height: 1000 } }); }
await b.close();
