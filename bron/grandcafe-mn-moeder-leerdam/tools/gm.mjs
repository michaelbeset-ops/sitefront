import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch();
const ctx = await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36', viewport: { width: 1400, height: 1000 } });
const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/search/Grandcaf%C3%A9+M%27n+Moeder+Kerkstraat+33a+Leerdam?hl=nl', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(3000);
if (p.url().includes('consent')) { await p.getByRole('button', { name: /Alles afwijzen|Reject all/ }).first().click(); await p.waitForTimeout(4000); }
await p.waitForTimeout(4000);
const art = p.locator('a.hfpxzc').first(); if (await art.count()) { await art.click(); await p.waitForTimeout(5000); }
await p.screenshot({ path: 'bron/google/g1.png' });
const links = await p.evaluate(() => [...document.querySelectorAll('a[href]')].map(a => a.href + ' | ' + (a.getAttribute('aria-label')||'')).filter(x=>!/google\.com\/(maps|intl)/.test(x)).join('\n'));
fs.writeFileSync('bron/google/overzicht.txt', 'LINKS:\n' + links + '\n\nMAIN:\n' + await p.evaluate(() => document.querySelector('[role=main]')?.innerText));
try { await p.getByRole('tab', { name: /^Over/ }).first().click({ timeout: 5000 }); await p.waitForTimeout(3000); fs.writeFileSync('bron/google/over.txt', await p.evaluate(() => document.querySelector('[role=main]')?.innerText || '')); } catch { console.log('geen over'); }
try { await p.getByRole('tab', { name: /^Menu/ }).first().click({ timeout: 5000 }); await p.waitForTimeout(3000); fs.writeFileSync('bron/google/menu.txt', await p.evaluate(() => document.querySelector('[role=main]')?.innerText || '')); await p.screenshot({ path: 'bron/google/menu.png' }); } catch { console.log('geen menu'); }
const tab = p.getByRole('tab', { name: /Reviews/ }).first();
await tab.click({ timeout: 5000 }); await p.waitForTimeout(3000);
// sorteer op nieuwste
try { await p.locator('button[aria-label*="Sorteren"], button:has-text("Sorteren")').first().click({ timeout: 3000 }); await p.waitForTimeout(1200); await p.getByRole('menuitemradio', { name: /Nieuwste/ }).click({ timeout: 3000 }); await p.waitForTimeout(3000); } catch (e) { console.log('sort fail', e.message.slice(0,80)); }
for (let i = 0; i < 25; i++) { await p.evaluate(() => { document.querySelectorAll('div').forEach(d => { if (d.scrollHeight > d.clientHeight + 50 && d.clientHeight > 200) d.scrollBy(0, 3000); }); }); await p.waitForTimeout(900); }
for (const m of await p.locator('button:has-text("Meer")').all()) { try { await m.click({ timeout: 500 }); } catch {} }
await p.waitForTimeout(800);
const revs = await p.evaluate(() => [...document.querySelectorAll('div[data-review-id].jftiEf, div.jftiEf')].map(e => [...e.querySelectorAll('[role=img][aria-label]')].map(s=>s.getAttribute('aria-label')).join(',') + ' @@ ' + e.innerText.replace(/\n\s*\n/g, '\n')));
fs.writeFileSync('bron/google/reviews.txt', [...new Set(revs)].join('\n=====\n'));
console.log('reviews', revs.length); await b.close();
