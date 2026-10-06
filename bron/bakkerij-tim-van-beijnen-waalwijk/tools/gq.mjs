import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch();
const p = await (await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36', viewport: { width: 1400, height: 1000 } })).newPage();
const [q, name] = process.argv.slice(2);
await p.goto('https://www.google.com/maps/search/' + encodeURIComponent(q) + '?hl=nl', { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(3000);
if (p.url().includes('consent')) { await p.getByRole('button', { name: /Alles afwijzen|Reject all/ }).first().click(); await p.waitForTimeout(4000); }
await p.waitForTimeout(4000);
const art = p.locator('a.hfpxzc').first(); if (await art.count()) { console.log('LIST:', await p.evaluate(() => [...document.querySelectorAll('a.hfpxzc')].map(a => a.getAttribute('aria-label')).join(' / '))); await art.click(); await p.waitForTimeout(5000); }
await p.screenshot({ path: `bron/google/${name}.png` });
const t = await p.evaluate(() => document.querySelector('[role=main]')?.innerText || '');
fs.writeFileSync(`bron/google/${name}.txt`, t); console.log(t.slice(0, 900)); await b.close();
