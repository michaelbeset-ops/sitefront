import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch();
const ctx = await b.newContext({ locale: 'nl-NL', timezoneId: 'Europe/Amsterdam', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36', viewport: { width: 1400, height: 1000 } });
const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/search/Repti-Farm+Prinses+Margrietstraat+36+Ridderkerk?hl=nl', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(3000);
if (p.url().includes('consent')) { await p.getByRole('button', { name: /Alles afwijzen|Reject all/ }).first().click(); await p.waitForTimeout(4000); }
await p.waitForTimeout(5000);
const art = p.locator('a.hfpxzc').first(); if (await art.count()) { await art.click(); await p.waitForTimeout(5000); }
console.log('URL', p.url());
await p.screenshot({ path: 'bron/google/g1.png' });
const oh = p.locator('[data-item-id="oh"], [aria-label*="openingstijden" i]').first(); if (await oh.count()) { await oh.click().catch(()=>{}); await p.waitForTimeout(1500); }
const tijden = await p.evaluate(() => [...document.querySelectorAll('table')].map(e => e.innerText).join('\n'));
const aria = await p.evaluate(() => [...document.querySelectorAll('[aria-label]')].map(e => e.getAttribute('aria-label')).filter(a => /uur|open|gesloten|Adres|Telefoon|Website/i.test(a)).join('\n'));
const links = await p.evaluate(() => [...document.querySelectorAll('a[href]')].map(a => a.href + ' | ' + (a.getAttribute('aria-label')||'')).filter(x=>!/google\.com\/(maps|intl)/.test(x)).join('\n'));
const over = await p.evaluate(() => document.querySelector('[role=main]')?.innerText || document.body.innerText);
fs.writeFileSync('bron/google/overzicht.txt', 'BEKEKEN: ' + new Date().toISOString() + '\nTIJDEN:\n' + tijden + '\n\nARIA:\n' + aria + '\n\nLINKS:\n' + links + '\n\nMAIN:\n' + over);
try { await p.getByRole('tab', { name: /^Over/ }).first().click({ timeout: 4000 }); await p.waitForTimeout(2500); fs.writeFileSync('bron/google/over.txt', await p.evaluate(() => document.querySelector('[role=main]')?.innerText || '')); } catch { console.log('no over'); }
const tab = p.getByRole('tab', { name: /Reviews|Recensies/ }).first();
try { await tab.click({ timeout: 5000 }); await p.waitForTimeout(3000); } catch (e) { console.log('no tab'); }
const doRevs = async (label) => {
  for (let i = 0; i < 12; i++) { await p.evaluate(() => { document.querySelectorAll('div').forEach(d => { if (d.scrollHeight > d.clientHeight + 50 && d.clientHeight > 200) d.scrollBy(0, 3000); }); }); await p.waitForTimeout(1000); }
  for (const m of await p.locator('button:has-text("Meer")').all()) { try { await m.click({ timeout: 600 }); } catch {} }
  await p.waitForTimeout(800);
  const revs = await p.evaluate(() => [...document.querySelectorAll('div[data-review-id]')].filter(e => e.querySelector('[role=img][aria-label]')).map(e => [...e.querySelectorAll('[role=img][aria-label]')].map(s=>s.getAttribute('aria-label')).join(',') + ' @@ ' + e.innerText.replace(/\n\s*\n/g, '\n')).filter((v,i,a)=>a.indexOf(v)===i));
  fs.writeFileSync(`bron/google/reviews-${label}.txt`, revs.join('\n=====\n'));
  console.log(label, revs.length);
};
await doRevs('relevant');
try { await p.locator('button[aria-label*="Sorteren"], button:has-text("Sorteren")').first().click({ timeout: 4000 }); await p.waitForTimeout(1200); await p.locator('[role=menuitemradio]:has-text("Nieuwste")').first().click({ timeout: 4000 }); await p.waitForTimeout(3000); await doRevs('nieuwste'); } catch (e) { console.log('sort fail', e.message); }
await p.screenshot({ path: 'bron/google/g2.png' });
await b.close();
