import { chromium } from 'playwright'; import fs from 'node:fs';
const [q, tag] = process.argv.slice(2);
const b = await chromium.launch();
const ctx = await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36', viewport: { width: 1400, height: 1000 } });
const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/search/'+encodeURIComponent(q)+'?hl=nl', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(3000);
if (p.url().includes('consent')) { await p.getByRole('button', { name: /Alles afwijzen|Reject all/ }).first().click(); await p.waitForTimeout(4000); }
await p.waitForTimeout(5000);
const art = p.locator('a.hfpxzc').first(); if (await art.count()) { await art.click(); await p.waitForTimeout(5000); }
console.log('URL', p.url());
await p.screenshot({ path: `bron/google/${tag}-1.png` });
// open hours dropdown
try { await p.locator('[aria-label*="openingstijden" i], [data-item-id="oh"]').first().click({timeout:3000}); await p.waitForTimeout(1500);} catch {}
const tijden = await p.evaluate(() => [...document.querySelectorAll('table')].map(e => e.innerText).join('\n'));
const over = await p.evaluate(() => document.querySelector('[role=main]')?.innerText || document.body.innerText);
const items = await p.evaluate(() => [...document.querySelectorAll('[data-item-id]')].map(e => e.getAttribute('data-item-id')+' = '+(e.getAttribute('aria-label')||e.innerText)).join('\n'));
const imgs0 = await p.evaluate(() => [...document.querySelectorAll('img')].map(i=>i.src).filter(s=>/googleusercontent/.test(s)));
fs.writeFileSync(`bron/google/${tag}-overzicht.txt`, 'URL '+p.url()+'\nTIJDEN:\n' + tijden + '\n\nITEMS:\n'+items+'\n\nMAIN:\n' + over);
const tab = p.getByRole('tab', { name: /Reviews|Recensies/ }).first();
try { await tab.click({ timeout: 5000 }); await p.waitForTimeout(3000); } catch (e) { console.log('no tab'); }
// sort newest
try { await p.getByRole('button', { name: /Reviews sorteren|Sorteren/ }).first().click({timeout:3000}); await p.waitForTimeout(1000); await p.getByRole('menuitemradio', { name: /Nieuwste/ }).first().click({timeout:3000}); await p.waitForTimeout(3000);} catch(e) { console.log('nosort'); }
for (let i = 0; i < 14; i++) { await p.evaluate(() => { document.querySelectorAll('div').forEach(d => { if (d.scrollHeight > d.clientHeight + 50 && d.clientHeight > 200) d.scrollBy(0, 3000); }); }); await p.waitForTimeout(1000); }
for (const m of await p.locator('button:has-text("Meer")').all()) { try { await m.click({ timeout: 700 }); } catch {} }
await p.waitForTimeout(800);
const revs = await p.evaluate(() => [...document.querySelectorAll('div[data-review-id]')].map(e => [...e.querySelectorAll('[role=img][aria-label]')].map(s=>s.getAttribute('aria-label')).join(',') + ' @@ ' + e.innerText.replace(/\n\s*\n/g, '\n')).filter((v,i,a)=>a.indexOf(v)===i));
fs.writeFileSync(`bron/google/${tag}-reviews.txt`, revs.join('\n=====\n'));
const imgs = await p.evaluate(() => [...document.querySelectorAll('img')].map(i=>i.src).filter(s=>/googleusercontent/.test(s)));
fs.writeFileSync(`bron/google/${tag}-imgs.txt`, [...new Set([...imgs0, ...imgs])].join('\n'));
await p.screenshot({ path: `bron/google/${tag}-2.png` });
console.log('reviews', revs.length); await b.close();
