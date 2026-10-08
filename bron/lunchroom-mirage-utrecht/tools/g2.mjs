import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch();
const ctx = await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36', viewport: { width: 1400, height: 1000 } });
const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/search/Lunchroom+Mirage+Amsterdamsestraatweg+378+Utrecht?hl=nl', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(3000);
if (p.url().includes('consent')) { await p.getByRole('button', { name: /Alles afwijzen|Reject all/ }).first().click(); await p.waitForTimeout(5000); }
await p.waitForTimeout(4000);
const art = p.locator('a.hfpxzc').first(); if (await art.count()) { await art.click(); await p.waitForTimeout(5000); }
const o = {};
o.aria = await p.evaluate(() => [...document.querySelectorAll('[aria-label]')].map(e => e.getAttribute('aria-label')).filter(t => /uur|maandag|dinsdag|Openingstijden|bestel|Adres|Telefoon|Website/i.test(t)));
o.hrefs = await p.evaluate(() => [...document.querySelectorAll('a[href]')].map(a => a.href).filter(h => !/google\./.test(h)));
await p.locator('[aria-label*="openingstijden"], [data-item-id="oh"], [jsaction*="openhours"]').first().click().catch(()=>console.log('no oh'));
await p.waitForTimeout(2000);
o.hours = await p.evaluate(() => [...document.querySelectorAll('table tr')].map(r => r.innerText.replace(/\s+/g,' ')));
await p.getByRole('tab', { name: /^Over/ }).first().click().catch(()=>{}); await p.waitForTimeout(3000);
o.over = await p.evaluate(() => [...document.querySelectorAll('[role=region], [aria-label]')].map(e=>e.getAttribute('aria-label')).filter(Boolean).join(' | ').slice(0,4000));
o.overtxt = await p.evaluate(() => document.querySelector('[role=main]')?.innerText.slice(0, 5000));
fs.writeFileSync('bron/google/g2.json', JSON.stringify(o, null, 1));
await p.getByRole('tab', { name: /^Menu/ }).first().click().catch(()=>{}); await p.waitForTimeout(3000);
await p.screenshot({ path: 'bron/google/menu-tab.png' });
fs.writeFileSync('bron/google/menu2.txt', await p.evaluate(() => document.querySelector('[role=main]')?.innerText));
fs.writeFileSync('bron/google/menu2.links', (await p.evaluate(() => [...document.querySelectorAll('a[href], button[aria-label]')].map(a => (a.href||'') + ' | ' + (a.getAttribute('aria-label')||'')))).join('\n'));
await b.close();
