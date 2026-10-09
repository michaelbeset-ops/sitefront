import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new','--disable-blink-features=AutomationControlled'] });
const c = await b.newContext({ locale: 'nl-NL', viewport: { width: 1280, height: 1000 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36' });
const p = await c.newPage(); await p.goto('https://www.tiktok.com/@js.buitenkeukens', { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(7000);
for (const t of ['Optionele cookies weigeren','Alle weigeren','Weigeren']) { const k = p.locator(`button:has-text("${t}")`).first(); if (await k.count()) { await k.click().catch(()=>{}); await p.waitForTimeout(2000); break; } }
await p.screenshot({ path: 'bron/web/tiktok-profiel-1280.png' });
const h = await p.content(); const m = h.match(/"signature":"([^"]*)"/); const n = h.match(/"videoCount":(\d+)/);
fs.writeFileSync('bron/web/tiktok.txt', 'bio: ' + (m && m[1]) + '\nvideos: ' + (n && n[1]) + '\n\n' + (await p.evaluate(() => document.body.innerText)).slice(0, 3000));
console.log(m && m[1], n && n[1]);
await b.close();
