// Google-profiel headless: reviews (nieuwste eerst, volledige tekst) + foto-URL's per tab (Alle / Van eigenaar).
import { chromium } from 'playwright';
import fs from 'node:fs';
const PLACE = 'https://www.google.com/maps/place/Het+Goede+Leven/@51.9721332,5.3462004,17z/data=!4m6!3m5!1s0x47c65967d61b9f4f:0x2009815d9ac7485d!8m2!3d51.9721332!4d5.3462004!16s%2Fg%2F11wfvstn5b?hl=nl';
const b = await chromium.launch();
const p = await (await b.newContext({ locale: 'nl-NL', viewport: { width: 1400, height: 1000 } })).newPage();
await p.goto(PLACE, { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(2000);
const k = p.locator('button:has-text("Alles afwijzen")').first();
if (await k.count()) { await k.click(); await p.waitForTimeout(4000); }
await p.waitForSelector('h1', { timeout: 15000 }); await p.screenshot({path:'../../demos/het-goede-leven-wijk-bij-duurstede/bron/google/start.png'});
await p.waitForTimeout(2000);
// Reviews
await p.locator('[role=tab]:has-text("Reviews")').first().click(); await p.waitForTimeout(2500);
const sort = p.locator('button[aria-label*="Sorteren"], button:has-text("Sorteren")').first();
if (await sort.count()) { await sort.click(); await p.waitForTimeout(1000); await p.locator('[role=menuitemradio]:has-text("Nieuwste")').first().click().catch(()=>{}); await p.waitForTimeout(2500); }
for (let i = 0; i < 10; i++) { await p.evaluate(() => { const d = [...document.querySelectorAll('div')].find(d => d.scrollHeight > d.clientHeight + 100 && /auto|scroll/.test(getComputedStyle(d).overflowY) && d.querySelector('[data-review-id]')); if (d) d.scrollTop = d.scrollHeight; }); await p.waitForTimeout(900); }
for (const m of await p.locator('button:has-text("Meer")').all()) await m.click().catch(() => {});
await p.waitForTimeout(800);
const reviews = await p.evaluate(() => [...document.querySelectorAll('div[data-review-id][aria-label]')].map(r => ({
  naam: r.getAttribute('aria-label'), sterren: (r.querySelector('[role=img][aria-label*="ster"]') || {}).getAttribute?.('aria-label'),
  wanneer: (r.querySelector('.rsqaWe') || {}).innerText, tekst: (r.querySelector('.wiI7pd') || {}).innerText || '',
  antwoord: (r.querySelector('.CDe7pd') || {}).innerText || '', fotos: r.querySelectorAll('button[data-photo-index]').length })));
fs.writeFileSync('../../demos/het-goede-leven-wijk-bij-duurstede/bron/google/reviews.json', JSON.stringify(reviews, null, 1));
console.log('reviews', reviews.length);
await p.screenshot({ path: '../../demos/het-goede-leven-wijk-bij-duurstede/bron/google/reviews.png' });
// Foto's
await p.goto(PLACE, { waitUntil: 'domcontentloaded' }); await p.waitForSelector('h1'); await p.waitForTimeout(2500);
await p.locator('button[aria-label^="Foto"]').first().click().catch(async () => { await p.locator('button:has-text("Foto\'s bekijken")').first().click(); });
await p.waitForTimeout(3500);
const out = {};
for (const tab of ['Alle', 'Van eigenaar', 'Eten en drinken', 'Sfeer', 'Video\'s', 'Menu']) {
  const t = p.locator(`[role=tab]:has-text("${tab}")`).first();
  if (!(await t.count())) continue;
  await t.click(); await p.waitForTimeout(2500);
  const s = new Set();
  for (let i = 0; i < 40; i++) {
    const r = await p.evaluate(() => { const d = [...document.querySelectorAll('div')].filter(d => d.scrollHeight > d.clientHeight + 50 && /auto|scroll/.test(getComputedStyle(d).overflowY) && d.getBoundingClientRect().left < 500).pop(); const u = [...document.querySelectorAll('[style*="googleusercontent"]')].map(e => ((e.getAttribute('style') || '').match(/url\("?([^")]+)/) || [])[1]).filter(Boolean); if (d) d.scrollTop += 600; return { u, end: d ? d.scrollTop + d.clientHeight >= d.scrollHeight - 5 : true }; });
    r.u.forEach(x => s.add(x.split('=')[0])); await p.waitForTimeout(500); if (r.end && i > 3) break;
  }
  out[tab] = [...s].filter(x => /gps-cs-s|grass-cs|\/p\//.test(x));
  console.log(tab, out[tab].length);
}
fs.writeFileSync('../../demos/het-goede-leven-wijk-bij-duurstede/bron/google/fotos.json', JSON.stringify(out, null, 1));
await p.screenshot({ path: '../../demos/het-goede-leven-wijk-bij-duurstede/bron/google/fotos.png' });
await b.close();
