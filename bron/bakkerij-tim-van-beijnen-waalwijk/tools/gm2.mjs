import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch();
const ctx = await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36', viewport: { width: 1400, height: 1000 } });
const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/search/Bakkerij+Tim+van+Beijnen+Hoogeinde+18a+Waalwijk?hl=nl', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(3000);
if (p.url().includes('consent')) { await p.getByRole('button', { name: /Alles afwijzen|Reject all/ }).first().click(); await p.waitForTimeout(4000); }
await p.waitForTimeout(5000);
const art = p.locator('a.hfpxzc').first(); if (await art.count()) { await art.click(); await p.waitForTimeout(5000); }
await p.screenshot({ path: 'bron/google/g1.png' });
fs.writeFileSync('bron/google/main.txt', await p.evaluate(() => document.querySelector('[role=main]')?.innerText || '') + '\n\nLINKS:\n' + await p.evaluate(() => [...document.querySelectorAll('[role=main] a[href]')].map(a => a.href + ' | ' + (a.getAttribute('aria-label')||'')).join('\n')));
console.log(await p.evaluate(() => [...document.querySelectorAll('[role=tab]')].map(e => e.getAttribute('aria-label') || e.innerText).join(' / ')));
try { await p.getByRole('tab', { name: /^Over/ }).first().click({ timeout: 5000 }); await p.waitForTimeout(2500); fs.writeFileSync('bron/google/over.txt', await p.evaluate(() => document.querySelector('[role=main]')?.innerText || '')); } catch { console.log('geen over'); }
try { await p.getByRole('tab', { name: /Reviews|Recensies/ }).first().click({ timeout: 5000 }); await p.waitForTimeout(3000); } catch { console.log('no tab'); }
// sorteer op nieuwste
try { await p.getByRole('button', { name: /Reviews sorteren|Sorteren/ }).first().click({ timeout: 3000 }); await p.waitForTimeout(1000); await p.getByRole('menuitemradio', { name: /Nieuwste/ }).first().click({ timeout: 3000 }); await p.waitForTimeout(3000); } catch { console.log('geen sort'); }
for (let i = 0; i < 25; i++) { await p.evaluate(() => { document.querySelectorAll('div').forEach(d => { if (d.scrollHeight > d.clientHeight + 50 && d.clientHeight > 200) d.scrollBy(0, 3000); }); }); await p.waitForTimeout(900); }
for (const m of await p.locator('button:has-text("Meer")').all()) { try { await m.click({ timeout: 700 }); } catch {} }
await p.waitForTimeout(800);
const revs = await p.evaluate(() => [...document.querySelectorAll('div[data-review-id].jftiEf, div.jftiEf')].map(e => [...e.querySelectorAll('[role=img][aria-label]')].map(s=>s.getAttribute('aria-label')).join(',') + ' @@ ' + e.innerText.replace(/\n\s*\n/g, '\n')));
fs.writeFileSync('bron/google/reviews.txt', revs.join('\n=====\n') + '\n\nBODY:\n' + (await p.evaluate(() => document.querySelector('[role=main]')?.innerText || '')).slice(0, 3000));
console.log('reviews', revs.length); await b.close();
