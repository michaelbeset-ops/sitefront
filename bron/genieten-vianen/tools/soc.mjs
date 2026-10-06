import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ args: ['--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1300, height: 1600 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36' });
const p = await ctx.newPage();
const go = async (u, out) => { await p.goto(u, { waitUntil: 'domcontentloaded' }).catch(()=>{}); await p.waitForTimeout(5000);
  for (const t of ['Optionele cookies afwijzen','Alleen essentiële cookies toestaan']) { const x = p.locator(`[role=button]:has-text("${t}"), button:has-text("${t}")`).first(); if (await x.count()) { await x.click().catch(()=>{}); await p.waitForTimeout(2500); } }
  const c = p.locator('[aria-label="Sluiten"]').first(); if (await c.count()) await c.click().catch(()=>{});
  await p.waitForTimeout(1000); await p.screenshot({ path: out + '.png' });
  fs.writeFileSync(out + '.txt', await p.evaluate(() => document.body.innerText)); };
await go('https://www.facebook.com/genietendl/about', 'bron/fb-about');
await go('https://www.facebook.com/genietendl/', 'bron/fb-home');
await go('https://www.instagram.com/genietendl/', 'bron/ig/ig');
const posts = await p.evaluate(() => [...new Set([...document.querySelectorAll('a[href*="/p/"]')].map(a => a.href))]);
fs.writeFileSync('bron/ig/posts.txt', posts.join('\n'));
const imgs = await p.evaluate(()=>[...document.querySelectorAll('img')].map(i=>(i.alt||'')+' || '+i.src));
fs.writeFileSync('bron/ig/ig-imgs.txt', imgs.join('\n'));
console.log(posts.length); await b.close();
