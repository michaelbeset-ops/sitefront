import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ args: ['--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1280, height: 1800 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' });
const p = await ctx.newPage(); const out = [];
const urls = ['https://www.facebook.com/p/T-kapelletje-61578952769126/', 'https://www.facebook.com/profile.php?id=61578952769126&sk=about', 'https://www.facebook.com/profile.php?id=61578952769126&sk=photos', 'https://www.facebook.com/profile.php?id=61578952769126&sk=reviews'];
let i = 0;
for (const u of urls) { i++;
  await p.goto(u, { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(5000);
  for (const t of ['Optionele cookies afwijzen', 'Alleen essentiële cookies toestaan', 'Decline optional cookies']) { const x = p.locator(`[role=button]:has-text("${t}"), button:has-text("${t}")`).first(); if (await x.count()) { await x.click().catch(()=>{}); await p.waitForTimeout(2500); } }
  const c = p.locator('[aria-label="Sluiten"], [aria-label="Close"]').first(); if (await c.count()) { await c.click().catch(()=>{}); await p.waitForTimeout(1500); }
  let txt = '';
  for (let k = 0; k < 10; k++) { await p.mouse.wheel(0, 1500); await p.waitForTimeout(1500); const c2 = p.locator('[aria-label="Sluiten"], [aria-label="Close"]').first(); if (await c2.count()) await c2.click().catch(()=>{});
    for (const m of await p.locator('[role=button]:has-text("Meer weergeven")').all()) { try { await m.click({ timeout: 500 }); } catch {} } }
  txt = await p.evaluate(() => document.body.innerText);
  await p.evaluate(() => scrollTo(0, 0)); await p.waitForTimeout(800);
  await p.screenshot({ path: `bron/fb/p${i}.png` });
  const imgs = await p.evaluate(() => [...document.querySelectorAll('img')].map(i => [i.src, i.naturalWidth, i.alt]).filter(x => /fbcdn|scontent/.test(x[0]) && x[1] > 200));
  out.push('######## ' + u + ' -> ' + p.url(), txt.slice(0, 20000), 'IMGS:', ...imgs.map(x => x.join(' | ')));
}
fs.writeFileSync('bron/fb/fb.txt', out.join('\n')); await b.close(); console.log('ok');
