import { chromium } from 'playwright'; import fs from 'node:fs';
const D = 'C:/Users/Micha/Downloads/Sitefront/demos/idylliz-hilversum/bron/web/';
const b = await chromium.launch(); const c = await b.newContext({ locale: 'nl-NL', viewport: { width: 1280, height: 1000 } });
await c.addCookies([{ name: 'SOCS', value: 'CAESHAgBEhJnd3NfMjAyMzA4MTAtMF9SQzIaAm5sIAEaBgiAo_CmBg', domain: '.google.com', path: '/' }]);
const p = await c.newPage();
await p.goto('https://www.google.com/maps/search/Idylliz+edelsmid+Hilversum?hl=nl', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(6000);
fs.writeFileSync(D + 'gm-overzicht.txt', await p.evaluate(() => document.body.innerText));
await p.screenshot({ path: D + 'gm-overzicht.png' });
// Reviews-tab
const t = p.locator('button[role=tab]:has-text("Reviews")'); if (await t.count()) { await t.first().click(); await p.waitForTimeout(3000);
  try { await p.locator('button:has-text("Sorteren")').first().click(); await p.waitForTimeout(800); await p.locator('[role=menuitemradio]:has-text("Nieuwste")').first().click(); await p.waitForTimeout(2500); } catch {}
  for (let i = 0; i < 12; i++) { await p.evaluate(() => { const s = [...document.querySelectorAll('div')].find((d) => d.scrollHeight > d.clientHeight + 200 && getComputedStyle(d).overflowY === 'auto' && d.querySelector('[data-review-id]')); if (s) s.scrollTop = s.scrollHeight; }); await p.waitForTimeout(1200); }
  for (const m of await p.locator('button:has-text("Meer")').all()) { try { await m.click({ timeout: 500 }); } catch {} }
  const revs = await p.evaluate(() => [...document.querySelectorAll('[data-review-id][aria-label]')].map((r) => ({ naam: r.getAttribute('aria-label'), sterren: r.querySelector('[role=img][aria-label*=ster]')?.getAttribute('aria-label'), wanneer: r.querySelector('span[class*="rsqaWe"]')?.innerText, tekst: r.querySelector('span[class*="wiI7pd"]')?.innerText, antwoord: r.querySelector('div[class*="CDe7pd"]')?.innerText })));
  fs.writeFileSync(D + 'gm-reviews.json', JSON.stringify(revs, null, 1)); console.log('reviews', revs.length);
}
await b.close();
