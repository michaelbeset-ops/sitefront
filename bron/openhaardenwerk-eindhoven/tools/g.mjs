import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new','--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', viewport: { width: 1400, height: 1000 } });
const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/search/' + encodeURIComponent(process.argv[2] || 'Openhaardenwerk Lucas Gasselstraat 27 Eindhoven') + '?hl=nl', { waitUntil: 'load', timeout: 45000 }).catch(()=>{});
await p.waitForTimeout(2500);
const r = p.locator('button:has-text("Alles afwijzen")').first(); if (await r.count()) { await r.click(); await p.waitForTimeout(4000); }
const f = p.locator('a.hfpxzc').first(); if (await f.count()) { await f.click().catch(() => {}); }
await p.waitForTimeout(5000);
console.log('URL', p.url());
await p.screenshot({ path: 'bron/google/g1.png' });
const tijden = await p.evaluate(() => [...document.querySelectorAll('[aria-label*="penings"], table')].map(e => e.getAttribute('aria-label') + ' :: ' + e.innerText).join('\n'));
const links = await p.evaluate(() => [...document.querySelectorAll('a[href]')].map(a => a.href + ' | ' + (a.getAttribute('aria-label')||'')).filter(x=>!/google\.com\/(maps|intl)/.test(x)).join('\n'));
const over = await p.evaluate(() => document.querySelector('[role=main]')?.innerText || document.body.innerText);
const aria = await p.evaluate(() => [...document.querySelectorAll('[role=main] [aria-label]')].map(e=>e.getAttribute('aria-label')).filter((v,i,a)=>a.indexOf(v)===i).join('\n'));
fs.writeFileSync('bron/google/overzicht.txt', 'URL ' + p.url() + '\nTIJDEN:\n' + tijden + '\n\nLINKS:\n' + links + '\n\nMAIN:\n' + over + '\n\nARIA:\n' + aria);
try { await p.getByRole('tab', { name: /^Over/ }).first().click({ timeout: 4000 }); await p.waitForTimeout(2500); fs.writeFileSync('bron/google/over.txt', await p.evaluate(() => document.querySelector('[role=main]')?.innerText || '')); } catch { console.log('no over'); }
try { await p.getByRole('tab', { name: /Reviews|Recensies/ }).first().click({ timeout: 5000 }); await p.waitForTimeout(3000); } catch (e) { console.log('no tab'); }
try { await p.locator('button[aria-label*="sorteren"], button[aria-label*="Sorteren"]').first().click({ timeout: 4000 }); await p.waitForTimeout(1200); await p.locator('[role=menuitemradio]').nth(1).click({ timeout: 3000 }); await p.waitForTimeout(3000); console.log('sorted newest'); } catch (e) { console.log('no sort'); }
for (let i = 0; i < 15; i++) { await p.evaluate(() => { document.querySelectorAll('div').forEach(d => { if (d.scrollHeight > d.clientHeight + 50 && d.clientHeight > 200) d.scrollBy(0, 3000); }); }); await p.waitForTimeout(800); }
for (const m of await p.locator('button.w8nwRe, button:has-text("Meer")').all()) { try { await m.click({ timeout: 600 }); } catch {} }
await p.waitForTimeout(800);
const revs = await p.evaluate(() => { const seen = new Set(); return [...document.querySelectorAll('div.jftiEf[data-review-id]')].map(e => { const st = e.querySelector('[role=img][aria-label*="ster"]')?.getAttribute('aria-label') || ''; return st + ' @@ ' + e.innerText.replace(/\n\s*\n/g, '\n'); }).filter(t => !seen.has(t) && seen.add(t)); });
fs.writeFileSync('bron/google/reviews.txt', revs.join('\n=====\n'));
console.log('reviews', revs.length); await b.close();
