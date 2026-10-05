import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ args: ['--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1280, height: 1400 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' });
const p = await ctx.newPage();
for (const u of process.argv.slice(2)) {
  const r = await p.goto(u, { waitUntil: 'domcontentloaded' }).catch(e => null); await p.waitForTimeout(6000);
  for (const t of ['Optionele cookies weigeren', 'Alleen essentiële cookies toestaan', 'Alles afwijzen']) { const x = p.locator(`[role=button]:has-text("${t}"), button:has-text("${t}")`).first(); if (await x.count()) { await x.click().catch(() => {}); await p.waitForTimeout(2500); break; } }
  const c = p.locator('[aria-label="Sluiten"]').first(); if (await c.count()) await c.click().catch(() => {});
  await p.mouse.wheel(0, 1500); await p.waitForTimeout(2500);
  const t = await p.evaluate(() => document.body.innerText);
  const n = u.replace(/\W+/g, '_').slice(-40);
  await p.screenshot({ path: `bron/${n}.png` });
  console.log('#####', u, r?.status(), p.url()); console.log(t.slice(0, 3000));
}
await b.close();
