import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new','--disable-blink-features=AutomationControlled'] });
const p = await (await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', viewport: { width: 1440, height: 1000 } })).newPage();
await p.goto('https://www.facebook.com/p/Biljartwinkel-Ludo-Kools-100071602470378/', { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(4000);
for (const t of ['Optionele cookies weigeren', 'Alle cookies weigeren', 'Decline optional cookies']) { const k = p.locator(`[role=button]:has-text("${t}"), button:has-text("${t}")`).first(); if (await k.count()) { await k.click().catch(()=>{}); await p.waitForTimeout(2500); break; } }
const x = p.locator('[aria-label="Sluiten"], [aria-label="Close"]').first(); if (await x.count()) { await x.click().catch(()=>{}); await p.waitForTimeout(1500); }
for (let i = 0; i < 6; i++) { await p.mouse.wheel(0, 1500); await p.waitForTimeout(1500); const x = p.locator('[aria-label="Sluiten"]').first(); if (await x.count()) await x.click().catch(()=>{}); }
await p.evaluate(() => scrollTo(0, 0)); await p.waitForTimeout(800);
await p.screenshot({ path: 'bron/fb/fb-1440.png' }); await p.screenshot({ path: 'bron/fb/fb-full.png', fullPage: true });
fs.writeFileSync('bron/fb/fb.txt', p.url() + '\n\n' + await p.evaluate(() => document.body.innerText));
const imgs = await p.evaluate(() => [...document.querySelectorAll('img')].map(i => [i.src, i.naturalWidth, i.alt]).filter(x => x[1] > 150));
fs.writeFileSync('bron/fb/imgs.json', JSON.stringify(imgs, null, 1)); console.log(imgs.length); await b.close();
