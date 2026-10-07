import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch();
const ctx = await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36', viewport: { width: 1400, height: 1000 } });
const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/search/D%C3%A9+Spellenwinkel+Speelhuislaan+68B+Breda?hl=nl', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(3000);
if (p.url().includes('consent')) { await p.getByRole('button', { name: /Alles afwijzen|Reject all/ }).first().click(); await p.waitForTimeout(4000); }
await p.waitForTimeout(5000);
const art = p.locator('a.hfpxzc').first(); if (await art.count()) { await art.click(); await p.waitForTimeout(5000); }
console.log('URL', p.url());
await p.screenshot({ path: 'bron/google/g1.png' });
const tijden = await p.evaluate(() => [...document.querySelectorAll('[aria-label*="penings"], table')].map(e => e.getAttribute('aria-label') + ' :: ' + e.innerText).join('\n'));
const links = await p.evaluate(() => [...document.querySelectorAll('a[href]')].map(a => a.href + ' | ' + (a.getAttribute('aria-label')||'')).filter(x=>!/google\.com\/(maps|intl)/.test(x)).join('\n'));
const over = await p.evaluate(() => document.querySelector('[role=main]')?.innerText || document.body.innerText);
fs.writeFileSync('bron/google/overzicht.txt', 'TIJDEN:\n' + tijden + '\n\nLINKS:\n' + links + '\n\nMAIN:\n' + over);
try { await p.getByRole('tab', { name: /^Over/ }).first().click({ timeout: 4000 }); await p.waitForTimeout(2500); fs.writeFileSync('bron/google/over.txt', await p.evaluate(() => document.querySelector('[role=main]')?.innerText || '')); } catch { console.log('no over'); }
const tab = p.getByRole('tab', { name: /Reviews|Recensies/ }).first();
try { await tab.click({ timeout: 5000 }); await p.waitForTimeout(3000); } catch (e) { console.log('no tab'); }
// sort newest
try { await p.getByRole('button', { name: /Sorteren|Meest relevant/ }).first().click({ timeout: 3000 }); await p.waitForTimeout(1000); await p.getByRole('menuitemradio', { name: /Nieuwste/ }).first().click({ timeout: 3000 }); await p.waitForTimeout(3000); } catch { console.log('no sort'); }
for (let i = 0; i < 25; i++) { await p.evaluate(() => { document.querySelectorAll('div').forEach(d => { if (d.scrollHeight > d.clientHeight + 50 && d.clientHeight > 200) d.scrollBy(0, 3000); }); }); await p.waitForTimeout(900); }
for (const m of await p.locator('button:has-text("Meer")').all()) { try { await m.click({ timeout: 700 }); } catch {} }
await p.waitForTimeout(800);
const revs = await p.evaluate(() => [...document.querySelectorAll('div[data-review-id]')].map(e => [...e.querySelectorAll('[role=img][aria-label]')].map(s=>s.getAttribute('aria-label')).join(',') + ' @@ ' + e.innerText.replace(/\n\s*\n/g, '\n')).filter((v,i,a)=>a.indexOf(v)===i));
fs.writeFileSync('bron/google/reviews.txt', revs.join('\n=====\n'));
console.log('reviews', revs.length); await b.close();
