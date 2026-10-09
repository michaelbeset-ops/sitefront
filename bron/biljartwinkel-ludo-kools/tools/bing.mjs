import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new','--disable-blink-features=AutomationControlled'] });
const p = await (await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', viewport: { width: 1440, height: 900 } })).newPage();
let out = '';
for (const q of process.argv.slice(2)) {
  await p.goto('https://www.bing.com/search?setlang=nl&cc=NL&q=' + encodeURIComponent(q), { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(3000);
  const k = p.locator('button:has-text("Weigeren"), button:has-text("Reject")').first(); if (await k.count()) { await k.click().catch(()=>{}); await p.waitForTimeout(1500); }
  const r = await p.evaluate(() => [...document.querySelectorAll('#b_results > li.b_algo')].map(li => (li.querySelector('h2 a')?.href || '') + '\n   ' + (li.querySelector('h2')?.innerText || '') + '\n   ' + (li.querySelector('.b_caption p, .b_lineclamp2, .b_lineclamp3')?.innerText || '')).join('\n'));
  out += '### ' + q + '\n' + r + '\n\n';
}
console.log(out); fs.writeFileSync('bron/web/bing-zoek.txt', out); await b.close();
