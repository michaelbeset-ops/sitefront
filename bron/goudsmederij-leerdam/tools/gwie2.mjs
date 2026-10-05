import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new','--disable-blink-features=AutomationControlled'] }); const ctx = await b.newContext({ userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', locale: 'nl-NL', viewport: { width: 1400, height: 1600 } }); const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/search/' + encodeURIComponent('Goudsmederij Leerdam Kerkstraat 40 Leerdam') + '?hl=nl', { waitUntil: 'load', timeout: 45000 }).catch(() => {});
await p.waitForTimeout(2500);
const r = p.locator('button:has-text("Alles afwijzen")').first(); if (await r.count()) { await r.click(); await p.waitForTimeout(4000); }
const btn = p.locator('button:has-text("Foto\'s bekijken"), [aria-label^="Foto"]').first();
if (await btn.count()) { await btn.click().catch(() => {}); await p.waitForTimeout(3500); }
const tiles = p.locator('a[data-photo-index]');
const n = await tiles.count(); console.log('tiles', n);
for (let i = 0; i < n; i++) {
  const t = tiles.nth(i); await t.scrollIntoViewIfNeeded().catch(()=>{}); await t.click().catch(()=>{}); await p.waitForTimeout(1800);
  const info = await p.evaluate(() => { const t = document.body.innerText; const m = t.match(/\n([^\n]+)\n(Foto|Video)[^\n]*\d{4}/); return m ? m[1] + ' | ' + m[0].split('\n').pop() : '?'; });
  await p.screenshot({ path: `bron/google/_w${i}.jpg`, clip: { x: 430, y: 0, width: 970, height: 1500 }, type: 'jpeg', quality: 40 });
  console.log(i, info);
}
await b.close();
