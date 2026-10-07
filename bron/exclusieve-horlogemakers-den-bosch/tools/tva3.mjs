import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch(); const p = await (await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' })).newPage();
await p.goto('https://www.tijdvooramersfoort.nl/nl/winkelen/winkeloverzicht', { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(4000);
await p.getByRole('button', { name: /weigeren|Alleen noodzakelijk|Weiger/i }).first().click({timeout:3000}).catch(()=>{});
const inp = p.locator('input[type=search], input[name*=keyword], input[placeholder*="oek"]').first();
if (await inp.count()) { await inp.fill('Gold'); await inp.press('Enter'); await p.waitForTimeout(4000); }
console.log(p.url());
const all = await p.evaluate(() => [...document.querySelectorAll('a[href]')].map(a => a.href + ' | ' + a.innerText.trim().replace(/\s+/g,' ').slice(0,60)));
console.log(all.filter(h => /gold|bgl|b-g-l|juwel/i.test(h)).join('\n'));
console.log(all.filter(h => /winkeloverzicht\/./.test(h)).slice(0,5).join('\n'));
await b.close();
