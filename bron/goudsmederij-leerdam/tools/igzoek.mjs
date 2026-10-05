import { chromium } from 'playwright';
const b = await chromium.launch({ args: ['--disable-blink-features=AutomationControlled'] });
const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1280, height: 1400 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' });
const p = await ctx.newPage();
for (const h of process.argv.slice(2)) {
  await p.goto('https://www.instagram.com/' + h + '/', { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(5000);
  const x = p.locator('button:has-text("Optionele cookies afwijzen")').first(); if (await x.count()) { await x.click().catch(()=>{}); await p.waitForTimeout(2500); }
  console.log('==', h, await p.title(), (await p.evaluate(() => document.querySelector('header')?.innerText || document.body.innerText.slice(0, 300))).replace(/\n/g, ' | '));
}
await p.goto('https://www.bing.com/search?q=' + encodeURIComponent('goudsmederij leerdam instagram'), { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(3000);
console.log((await p.evaluate(() => [...document.querySelectorAll('#b_results h2 a, #b_results cite')].map(a => a.innerText + ' ' + (a.href||'')).join('\n'))));
await b.close();
