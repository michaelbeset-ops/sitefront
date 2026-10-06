import { chromium } from 'playwright'; import fs from 'node:fs';
const want = process.argv.slice(2);
const lines = fs.readFileSync('bron/fbhi/fbhi.txt', 'utf8').split('\n').filter(l => want.some(w => l.startsWith(w + ' ')));
const b = await chromium.launch({ args: ['--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1400, height: 1800 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' });
const p = await ctx.newPage(); const out = [];
for (const l of lines) { const [fn, , u] = l.split(' | ');
  await p.goto(u, { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(3500);
  for (const t of ['Optionele cookies afwijzen']) { const x = p.locator(`[role=button]:has-text("${t}")`).first(); if (await x.count()) { await x.click().catch(()=>{}); await p.waitForTimeout(1500); } }
  const c = p.locator('[aria-label="Sluiten"]').first(); if (await c.count()) await c.click().catch(()=>{});
  const m = p.locator('[role=button]:has-text("Meer weergeven")').first(); if (await m.count()) { await m.click().catch(()=>{}); await p.waitForTimeout(800); }
  const t = await p.evaluate(() => (document.querySelector('[role=main]')?.innerText || document.body.innerText).slice(0, 2500));
  out.push('##### ' + fn + ' ' + u + '\n' + t.replace(/\n\s*\n/g, '\n'));
}
fs.writeFileSync('bron/fbhi/posts.txt', out.join('\n')); await b.close();
