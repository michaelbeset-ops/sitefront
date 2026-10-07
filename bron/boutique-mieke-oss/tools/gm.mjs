import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new','--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', viewport: { width: 1400, height: 1000 } });
const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/search/' + encodeURIComponent('Boutique Mieke Kerkstraat 10 Oss') + '?hl=nl', { waitUntil: 'load', timeout: 45000 }).catch(()=>{});
await p.waitForTimeout(2500);
const r = p.locator('button:has-text("Alles afwijzen")').first(); if (await r.count()) { await r.click(); await p.waitForTimeout(4000); }
const art = p.locator('a.hfpxzc').first(); if (await art.count()) { await art.click(); await p.waitForTimeout(5000); }
await p.waitForTimeout(4000);
console.log('URL', p.url());
await p.screenshot({ path: 'bron/google/g1.png' });
for (const btn of await p.locator('[aria-expanded="false"][aria-label*="penings"], [data-item-id="oh"]').all()) { try { await btn.click({ timeout: 1500 }); } catch {} }
await p.waitForTimeout(1500);
const tijden = await p.evaluate(() => [...document.querySelectorAll('[aria-label*="penings"], table')].map(e => e.getAttribute('aria-label') + ' :: ' + e.innerText).join('\n'));
const links = await p.evaluate(() => [...document.querySelectorAll('a[href]')].map(a => a.href + ' | ' + (a.getAttribute('aria-label')||'') + ' | ' + (a.getAttribute('data-item-id')||'')).filter(x=>!/google\.com\/(maps|intl)/.test(x)).join('\n'));
const over = await p.evaluate(() => document.querySelector('[role=main]')?.innerText || document.body.innerText);
fs.writeFileSync('bron/google/overzicht.txt', 'URL ' + p.url() + '\nTIJDEN:\n' + tijden + '\n\nLINKS:\n' + links + '\n\nMAIN:\n' + over);
try { await p.getByRole('tab', { name: /^Over/ }).first().click({ timeout: 4000 }); await p.waitForTimeout(2500); fs.writeFileSync('bron/google/over.txt', await p.evaluate(() => document.querySelector('[role=main]')?.innerText || '')); } catch { console.log('no over'); }
await p.getByRole('tab', { name: /Reviews/ }).first().click({ timeout: 8000 }).catch(()=>console.log('no rev tab')); await p.waitForTimeout(3000);
try { await p.locator('button[aria-label*="Reviews sorteren"], button[data-value="Sorteren"]').first().click({ timeout: 4000 }); await p.waitForTimeout(1200); await p.locator('[role=menuitemradio]').nth(1).click({ timeout: 3000 }); await p.waitForTimeout(3000); console.log('sorted newest'); } catch (e) { console.log('no sort'); }
for (let i = 0; i < 20; i++) {
  await p.evaluate(() => { const el = [...document.querySelectorAll('div')].find(d => d.scrollHeight > d.clientHeight + 200 && d.querySelector('[data-review-id]')); if (el) el.scrollBy(0, 4000); });
  await p.waitForTimeout(700);
}
for (const m of await p.locator('button.w8nwRe, button:has-text("Meer")').all()) { try { await m.click({ timeout: 500 }); } catch {} }
await p.waitForTimeout(800);
const revs = await p.evaluate(() => { const seen = new Set(); return [...document.querySelectorAll('div.jftiEf[data-review-id]')].map(e => { const st = e.querySelector('[role=img][aria-label*="ster"]')?.getAttribute('aria-label') || ''; return st + ' @@ ' + e.innerText.replace(/\n\s*\n/g, '\n'); }).filter(t => !seen.has(t) && seen.add(t)); });
fs.writeFileSync('bron/google/reviews.txt', revs.join('\n=====\n'));
console.log('reviews', revs.length); await b.close();
