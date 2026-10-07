// Google-profiel Bas en Sax: overzicht, reviews, foto-URL's. Cookiemelding: alles afwijzen.
import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch(); const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1400, height: 1000 } }); const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/search/Bas+en+Sax+Molenstraat+6+Heukelum?hl=nl', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(2500);
if (p.url().includes('consent')) { await p.getByRole('button', { name: /Alles afwijzen|Reject all/ }).first().click(); await p.waitForTimeout(4000); }
await p.waitForTimeout(4000);
const first = p.locator('a.hfpxzc').first(); if (await first.count()) { await first.click(); await p.waitForTimeout(4000); }
await p.screenshot({ path: 'bron/google/overzicht.png' });
fs.writeFileSync('bron/google/overzicht.txt', p.url() + '\n' + await p.evaluate(() => document.querySelector('div[role=main]')?.innerText || document.body.innerText));
// uren
const uren = await p.evaluate(() => [...document.querySelectorAll('table')].map(t => t.innerText).join('\n')); fs.appendFileSync('bron/google/overzicht.txt', '\n---UREN\n' + uren);
// reviews
const rt = p.getByRole('tab', { name: /Reviews/ }); if (await rt.count()) { await rt.first().click(); await p.waitForTimeout(3000);
  for (let i = 0; i < 8; i++) { await p.mouse.move(300, 600); await p.mouse.wheel(0, 3000); await p.waitForTimeout(800); }
  for (const m of await p.locator('button:has-text("Meer")').all()) { try { await m.click({ timeout: 500 }); } catch {} }
  fs.writeFileSync('bron/google/reviews.txt', await p.evaluate(() => document.querySelector('div[role=main]')?.innerText)); await p.screenshot({ path: 'bron/google/reviews.png' }); }
// foto's
const ov = p.getByRole('tab', { name: /Overzicht/ }); if (await ov.count()) { await ov.first().click(); await p.waitForTimeout(2000); }
const fb = p.locator('button[aria-label^="Foto van"]').first(); if (await fb.count()) { await fb.click(); await p.waitForTimeout(4000);
  const lab = await p.evaluate(() => [...document.querySelectorAll('button,[role=tab]')].map((b) => (b.getAttribute('aria-label') || b.textContent).trim()).filter(Boolean)); fs.writeFileSync('bron/google/foto-tabs.txt', lab.join(' | '));
  for (let i = 0; i < 15; i++) { await p.mouse.move(300, 500); await p.mouse.wheel(0, 3000); await p.waitForTimeout(700); }
  const urls = await p.evaluate(() => { const s = new Set(); document.querySelectorAll('*').forEach((e) => { const bg = e.style && e.style.backgroundImage; const m = bg && bg.match(/(https?:)?\/\/lh\d\.googleusercontent\.com\/(gps-cs-s|grass-cs|p)\/[^"=)]+/); if (m) s.add(m[0].replace(/^\/\//, 'https://')); }); document.querySelectorAll('img').forEach(i => { const m = i.src.match(/https:\/\/lh\d\.googleusercontent\.com\/(gps-cs-s|grass-cs|p)\/[^=]+/); if (m) s.add(m[0]); }); return [...s]; });
  await p.screenshot({ path: 'bron/google/fotos.png' }); fs.writeFileSync('bron/google/fotos.txt', urls.join('\n')); console.log('fotos', urls.length); }
await b.close();
