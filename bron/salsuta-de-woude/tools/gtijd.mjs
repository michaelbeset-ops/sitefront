import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch();
const p = await (await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36', viewport: { width: 1400, height: 1000 } })).newPage();
await p.goto('https://www.google.com/maps/search/Restaurant+Salsuta+Woude+1+De+Woude?hl=nl', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(3000);
if (p.url().includes('consent')) { await p.getByRole('button', { name: /Alles afwijzen|Reject all/ }).first().click(); await p.waitForTimeout(4000); }
await p.waitForTimeout(5000);
const art = p.locator('a.hfpxzc').first(); if (await art.count()) { await art.click(); await p.waitForTimeout(5000); }
const t = await p.evaluate(() => [...document.querySelectorAll('[aria-label]')].map(e => e.getAttribute('aria-label')).filter(a => /maandag|dinsdag|woensdag|geopend|gesloten/i.test(a)).join('\n'));
const x = p.getByText('Meer openingstijden weergeven').first(); if (await x.count()) { await x.click().catch(()=>{}); await p.waitForTimeout(2500); }
const tab = await p.evaluate(() => [...document.querySelectorAll('table')].map(x => x.innerText).join('\n---\n'));
await p.screenshot({ path: 'bron/google/tijden.png' });
fs.writeFileSync('bron/google/tijden.txt', t + '\n\nTABEL:\n' + tab); console.log(t, '\nTABEL\n', tab);
await b.close();
