import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ args: ['--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1280, height: 1800 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' });
const p = await ctx.newPage(); const out = [];
for (const u of ['https://www.facebook.com/RosaGorinchem/', 'https://www.facebook.com/RosaGorinchem/about', 'https://www.facebook.com/RosaGorinchem/reviews', 'https://www.facebook.com/RosaGorinchem/photos']) {
  await p.goto(u, { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(5000);
  for (const t of ['Optionele cookies afwijzen', 'Alleen essentiële cookies toestaan', 'Decline optional cookies']) { const x = p.locator(`[role=button]:has-text("${t}"), button:has-text("${t}")`).first(); if (await x.count()) { await x.click().catch(()=>{}); await p.waitForTimeout(2500); } }
  const c = p.locator('[aria-label="Sluiten"], [aria-label="Close"]').first(); if (await c.count()) { await c.click().catch(()=>{}); await p.waitForTimeout(1500); }
  for (let i = 0; i < 4; i++) { await p.mouse.wheel(0, 1500); await p.waitForTimeout(1500); const c2 = p.locator('[aria-label="Sluiten"], [aria-label="Close"]').first(); if (await c2.count()) await c2.click().catch(()=>{}); }
  const name = u.split('/').filter(Boolean).pop();
  await p.evaluate(() => scrollTo(0, 0)); await p.waitForTimeout(800);
  await p.screenshot({ path: `bron/fb/${name}.png` });
  const txt = await p.evaluate(() => document.body.innerText);
  const imgs = await p.evaluate(() => [...document.querySelectorAll('img')].map(i => [i.src, i.naturalWidth, i.alt]).filter(x => /fbcdn|scontent/.test(x[0]) && x[1] > 200));
  out.push('######## ' + u, txt.slice(0, 6000), 'IMGS:', ...imgs.map(x => x.join(' | ')));
}
fs.writeFileSync('bron/fb/fb.txt', out.join('\n')); await b.close(); console.log('ok');
