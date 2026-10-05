import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ args: ['--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1280, height: 1400 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' });
const p = await ctx.newPage();
await p.goto('https://www.instagram.com/goudsmederijleerdam.nl/', { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(5000);
const x = p.locator('button:has-text("Optionele cookies afwijzen")').first(); if (await x.count()) { await x.click().catch(()=>{}); await p.waitForTimeout(2500); }
const links = await p.evaluate(() => [...new Set([...document.querySelectorAll('a[href*="/p/"], a[href*="/reel/"]')].map(a => a.href))]);
const extra = ['https://www.instagram.com/p/Dbs26K6svxO/','https://www.instagram.com/p/DYkCw_nsJ0g/','https://www.instagram.com/p/DZrrTqnMZUY/','https://www.instagram.com/reel/DWonGHqjKIw/','https://www.instagram.com/p/DVejf_8jPcQ/'];
const out = [];
for (const u of [...new Set([...links, ...extra])]) {
  const r = await p.goto(u, { waitUntil: 'domcontentloaded' }).catch(()=>null); await p.waitForTimeout(3500);
  const d = await p.evaluate(() => (document.querySelector('meta[property="og:description"]')?.content || '') + ' || ' + (document.querySelector('meta[property="og:title"]')?.content || ''));
  out.push(u + '\n' + d); console.log(u, d.slice(0, 400));
}
fs.writeFileSync('bron/ig/captions.txt', out.join('\n\n'));
await b.close();
