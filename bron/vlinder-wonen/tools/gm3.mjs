import { chromium } from 'playwright'; import fs from 'node:fs';
const OUT = 'bron/google/';
const PLACE = JSON.parse(fs.readFileSync(OUT + 'place.json')).PLACE;
const b = await chromium.launch({ args: ['--disable-blink-features=AutomationControlled'] });
const p = await (await b.newContext({ locale: 'nl-NL', viewport: { width: 1400, height: 1000 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' })).newPage();
await p.goto(PLACE, { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(2000);
const k = p.locator('button:visible:has-text("Alles afwijzen")').first();
if (await k.count()) { await k.click(); await p.waitForTimeout(4000); }
await p.waitForSelector('h1'); await p.waitForTimeout(2500);
const m = p.locator('button:has-text("Meer reviews")').first();
console.log('meer', await m.count());
if (await m.count()) { await m.click({ timeout: 5000 }); await p.waitForTimeout(3000); }
const sort = p.locator('button[aria-label*="Sorteren"], button:has-text("Sorteren")').first();
if (await sort.count()) { await sort.click({ timeout: 3000 }).catch(()=>{}); await p.waitForTimeout(1000); await p.locator('[role=menuitemradio]:has-text("Nieuwste")').first().click().catch(()=>{}); await p.waitForTimeout(2500); }
for (let i = 0; i < 40; i++) { await p.evaluate(() => { const d = [...document.querySelectorAll('div')].find(d => d.scrollHeight > d.clientHeight + 100 && /auto|scroll/.test(getComputedStyle(d).overflowY) && d.querySelector('[data-review-id]')); if (d) d.scrollTop = d.scrollHeight; }); await p.waitForTimeout(900); }
for (const mm of await p.locator('button:has-text("Meer")').all()) await mm.click({ timeout: 800 }).catch(() => {});
await p.waitForTimeout(800);
const reviews = await p.evaluate(() => [...document.querySelectorAll('div[data-review-id][aria-label]')].map(r => ({
  naam: r.getAttribute('aria-label'), info: (r.querySelector('.RfnDt') || {}).innerText || '', sterren: (r.querySelector('[role=img][aria-label*="ster"]') || {}).getAttribute?.('aria-label'),
  wanneer: (r.querySelector('.rsqaWe') || {}).innerText, tekst: (r.querySelector('.wiI7pd') || {}).innerText || '',
  antwoord: (r.querySelector('.CDe7pd') || {}).innerText || '', vol: r.innerText })));
fs.writeFileSync(OUT + 'reviews-alle.json', JSON.stringify(reviews, null, 1));
console.log('reviews', reviews.length);
await p.screenshot({ path: OUT + 'reviews2.png' });
await b.close();
const b2 = await chromium.launch({ args: ['--disable-blink-features=AutomationControlled'] });
const q = await (await b2.newContext({ locale: 'nl-NL', viewport: { width: 1400, height: 1000 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' })).newPage();
await q.goto(PLACE, { waitUntil: 'domcontentloaded' }); await q.waitForTimeout(2000);
const k2 = q.locator('button:visible:has-text("Alles afwijzen")').first();
if (await k2.count()) { await k2.click(); await q.waitForTimeout(4000); }
await q.waitForSelector('h1'); await q.waitForTimeout(2500);
await q.locator('button:has-text("67 foto")').first().click().catch(e => console.log('f', e.message));
await q.waitForTimeout(4000);
await q.screenshot({ path: OUT + 'fotos-open.png' });
console.log('tabs', await q.locator('button[role=tab]').allInnerTexts());
const s = new Set();
for (let i = 0; i < 60; i++) {
  const r = await q.evaluate(() => { const d = [...document.querySelectorAll('div')].filter(d => d.scrollHeight > d.clientHeight + 50 && /auto|scroll/.test(getComputedStyle(d).overflowY) && d.getBoundingClientRect().left < 500).pop(); const u = [...document.querySelectorAll('[style*="googleusercontent"], img[src*="googleusercontent"]')].map(e => e.src || ((e.getAttribute('style') || '').match(/url\("?([^")]+)/) || [])[1]).filter(Boolean); if (d) d.scrollTop += 600; return { u, end: d ? d.scrollTop + d.clientHeight >= d.scrollHeight - 5 : true }; });
  r.u.forEach(x => s.add(x.split('=')[0])); await q.waitForTimeout(500); if (r.end && i > 3) break;
}
const alle = [...s].filter(x => /gps-cs-s|grass-cs|\/p\//.test(x)); console.log('alle', alle.length);
const out = { Alle: alle };
const t = q.locator('button[role=tab]:has-text("Van eigenaar")').first();
if (await t.count()) { await t.click(); await q.waitForTimeout(3000); const s2 = new Set();
  for (let i = 0; i < 50; i++) { const r = await q.evaluate(() => { const d = [...document.querySelectorAll('div')].filter(d => d.scrollHeight > d.clientHeight + 50 && /auto|scroll/.test(getComputedStyle(d).overflowY) && d.getBoundingClientRect().left < 500).pop(); const u = [...document.querySelectorAll('[style*="googleusercontent"]')].map(e => ((e.getAttribute('style') || '').match(/url\("?([^")]+)/) || [])[1]).filter(Boolean); if (d) d.scrollTop += 600; return { u, end: d ? d.scrollTop + d.clientHeight >= d.scrollHeight - 5 : true }; });
    r.u.forEach(x => s2.add(x.split('=')[0])); await q.waitForTimeout(500); if (r.end && i > 3) break; }
  out['Van eigenaar'] = [...s2].filter(x => /gps-cs-s|grass-cs|\/p\//.test(x)); console.log('eig', out['Van eigenaar'].length); }
fs.writeFileSync(OUT + 'fotos.json', JSON.stringify(out, null, 1));
await q.screenshot({ path: OUT + 'fotos.png' });
await b2.close();
