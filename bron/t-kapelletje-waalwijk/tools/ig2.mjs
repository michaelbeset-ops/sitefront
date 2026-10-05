import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ args: ['--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1280, height: 1600 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' });
const p = await ctx.newPage();
await p.goto('https://www.instagram.com/rosa.curiosa/', { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(6000);
const x = p.locator('button:has-text("Optionele cookies afwijzen")').first(); if (await x.count()) { await x.click().catch(()=>{}); await p.waitForTimeout(3000); }
const bio = await p.evaluate(() => document.querySelector('header')?.innerText || '');
const meer = p.locator('header span:has-text("meer")').first(); if (await meer.count()) { await meer.click().catch(()=>{}); await p.waitForTimeout(1500); }
const bio2 = await p.evaluate(() => document.querySelector('header')?.innerText || '');
const links = await p.evaluate(() => [...new Set([...document.querySelectorAll('a[href*="/p/"],a[href*="/reel/"]')].map(a => a.href))]);
const out = ['BIO:', bio2, '', ...links];
for (const l of links.slice(0, 14)) {
  const q = await ctx.newPage();
  try { await q.goto(l, { waitUntil: 'domcontentloaded' }); await q.waitForTimeout(3500);
    const d = await q.evaluate(() => (document.querySelector('meta[property="og:description"]')?.content || '') + ' ||| ' + (document.querySelector('meta[property="og:title"]')?.content || ''));
    out.push('### ' + l, d);
  } catch (e) { out.push('### ' + l + ' ERR ' + e.message); }
  await q.close();
}
fs.writeFileSync('bron/ig/posts.txt', out.join('\n')); console.log(out.join('\n').slice(0, 9000)); await b.close();
