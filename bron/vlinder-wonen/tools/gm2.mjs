import { chromium } from 'playwright'; import fs from 'node:fs';
const OUT = 'bron/google/';
const PLACE = JSON.parse(fs.readFileSync(OUT + 'place.json')).PLACE;
const b = await chromium.launch({ args: ['--disable-blink-features=AutomationControlled'] });
const p = await (await b.newContext({ locale: 'nl-NL', viewport: { width: 1400, height: 1000 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' })).newPage();
await p.goto(PLACE, { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(2000);
const k = p.locator('button:visible:has-text("Alles afwijzen")').first();
if (await k.count()) { await k.click(); await p.waitForTimeout(4000); }
await p.waitForSelector('h1'); await p.waitForTimeout(2500);
await p.locator('button[role=tab]:has-text("Reviews")').first().click(); await p.waitForTimeout(3000);
for (let i = 0; i < 20; i++) { await p.evaluate(() => { const d = [...document.querySelectorAll('div')].find(d => d.scrollHeight > d.clientHeight + 100 && /auto|scroll/.test(getComputedStyle(d).overflowY) && d.querySelector('[data-review-id]')); if (d) d.scrollTop = d.scrollHeight; }); await p.waitForTimeout(1000); }
const meer = p.locator('button[aria-label="Meer weergeven"], button.w8nwRe');
console.log('meer', await meer.count());
for (const m of await meer.all()) await m.click().catch(() => {});
await p.waitForTimeout(1000);
const reviews = await p.evaluate(() => [...document.querySelectorAll('div[data-review-id][aria-label]')].map(r => ({
  naam: r.getAttribute('aria-label'), sterren: (r.querySelector('[role=img][aria-label*="ster"]') || {}).getAttribute?.('aria-label'),
  wanneer: (r.querySelector('.rsqaWe') || {}).innerText, tekst: (r.querySelector('.wiI7pd') || {}).innerText || '',
  antwoord: (r.querySelector('.CDe7pd') || {}).innerText || '', fotos: [...r.querySelectorAll('button[data-photo-index]')].map(x => ((x.getAttribute('style')||'').match(/url\("?([^")]+)/)||[])[1]) })));
fs.writeFileSync(OUT + 'reviews-alle.json', JSON.stringify(reviews, null, 1));
console.log('reviews', reviews.length);
await p.screenshot({ path: OUT + 'reviews2.png' });
// fotos
await p.goto(PLACE, { waitUntil: 'domcontentloaded' }); await p.waitForSelector('h1'); await p.waitForTimeout(3000);
const btns = await p.evaluate(() => [...document.querySelectorAll('button')].map(b => (b.getAttribute('aria-label')||'') + '|' + b.innerText.slice(0,30)).filter(s => /foto/i.test(s)));
console.log(btns);
await p.locator('button:has-text("Foto\'s bekijken"), button[aria-label*="Foto" i]').first().click().catch(e => console.log('klik fout', e.message));
await p.waitForTimeout(4000);
await p.screenshot({ path: OUT + 'fotos-open.png' });
const tabs = await p.locator('button[role=tab]').allInnerTexts(); console.log('tabs', tabs);
const out = {};
for (const tab of ['Alle', 'Van eigenaar', 'Nieuwste', 'Binnen', 'Buiten', 'Video']) {
  const t = p.locator(`button[role=tab]:has-text("${tab}")`).first();
  if (!(await t.count())) continue;
  await t.click(); await p.waitForTimeout(2500);
  const s = new Set();
  for (let i = 0; i < 50; i++) {
    const r = await p.evaluate(() => { const d = [...document.querySelectorAll('div')].filter(d => d.scrollHeight > d.clientHeight + 50 && /auto|scroll/.test(getComputedStyle(d).overflowY) && d.getBoundingClientRect().left < 500).pop(); const u = [...document.querySelectorAll('[style*="googleusercontent"]')].map(e => ((e.getAttribute('style') || '').match(/url\("?([^")]+)/) || [])[1]).filter(Boolean); if (d) d.scrollTop += 600; return { u, end: d ? d.scrollTop + d.clientHeight >= d.scrollHeight - 5 : true }; });
    r.u.forEach(x => s.add(x.split('=')[0])); await p.waitForTimeout(500); if (r.end && i > 3) break;
  }
  out[tab] = [...s].filter(x => /gps-cs-s|grass-cs|\/p\//.test(x));
  console.log(tab, out[tab].length);
}
fs.writeFileSync(OUT + 'fotos.json', JSON.stringify(out, null, 1));
await p.screenshot({ path: OUT + 'fotos.png' });
await b.close();
