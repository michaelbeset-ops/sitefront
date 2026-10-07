// Google-profiel via headless Chromium: overzicht, tijden, reviews (nieuwste), cookiemelding alles afwijzen.
import { createRequire } from 'node:module'; import fs from 'node:fs';
const { chromium } = createRequire('C:/Users/Micha/Downloads/Sitefront/werkwijze/tools/')('playwright');
const b = await chromium.launch(); const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1400, height: 1000 } }); const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/search/Wouwgaragedeuren+en+Wouwzonwering+Marsmanstraat+2+Zwijndrecht?hl=nl', { waitUntil: 'domcontentloaded' });
await p.waitForSelector('h1', { timeout: 20000 }).catch(()=>{}); await p.waitForTimeout(4000);
if (p.url().includes('consent')) { await p.getByRole('button', { name: /Alles afwijzen|Reject all/ }).first().click(); await p.waitForTimeout(4000); }
await p.waitForSelector('h1', { timeout: 20000 }).catch(()=>{}); await p.waitForTimeout(4000);
const over = await p.evaluate(() => document.querySelector('[role=main]')?.innerText);
fs.writeFileSync('bron/google/overzicht.txt', over || '');
const uren = await p.evaluate(() => [...document.querySelectorAll('[aria-label]')].map((e) => e.getAttribute('aria-label')).filter((t) => /maandag|dinsdag/i.test(t)).join('\n'));
fs.writeFileSync('bron/google/uren.txt', uren);
await p.screenshot({ path: 'bron/google/overzicht.png' });
const tab = p.getByRole('tab', { name: /Reviews/ });
if (await tab.count()) { await tab.first().click(); await p.waitForTimeout(3000);
  const s = p.getByRole('button', { name: /Reviews sorteren|Sorteren/ }); if (await s.count()) { await s.first().click(); await p.waitForTimeout(1200); await p.getByRole('menuitemradio', { name: /Nieuwste/ }).first().click().catch(() => {}); await p.waitForTimeout(3000); }
  for (let i = 0; i < 25; i++) { await p.mouse.move(400, 700); await p.mouse.wheel(0, 4000); await p.waitForTimeout(900); }
  await p.evaluate(() => document.querySelectorAll('button').forEach((x) => { if (/Meer/.test(x.textContent) && x.getAttribute('aria-label')?.includes('Meer')) x.click(); }));
  await p.evaluate(() => document.querySelectorAll('button.w8nwRe').forEach((x) => x.click()));
  await p.waitForTimeout(1500);
  const rev = await p.evaluate(() => [...document.querySelectorAll('[data-review-id][aria-label]')].map((r) => ({ naam: r.getAttribute('aria-label'), sterren: r.querySelector('[role=img][aria-label*=ster]')?.getAttribute('aria-label'), wanneer: r.querySelector('.rsqaWe')?.textContent, tekst: r.querySelector('.wiI7pd')?.textContent, antwoord: r.querySelector('.CDe7pd')?.innerText })));
  fs.writeFileSync('bron/google/reviews.json', JSON.stringify(rev, null, 1)); console.log('reviews', rev.length);
} else console.log('geen reviewtab', (await p.evaluate(() => [...document.querySelectorAll('[role=tab]')].map((x) => x.textContent))).join('|'));
await b.close();
