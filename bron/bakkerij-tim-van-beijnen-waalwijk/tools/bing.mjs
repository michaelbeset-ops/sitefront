import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch(); const p = await (await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' })).newPage();
const out = [];
for (const q of process.argv.slice(2)) {
  await p.goto('https://www.bing.com/search?setlang=nl&cc=NL&q=' + encodeURIComponent(q), { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(2500);
  const r = await p.evaluate(() => [...document.querySelectorAll('#b_results > li.b_algo')].map(li => (li.querySelector('h2')?.innerText || '') + ' | ' + (li.querySelector('cite')?.innerText || '') + ' | ' + (li.querySelector('.b_caption p, .b_lineclamp2, .b_lineclamp3, .b_lineclamp4')?.innerText || '')));
  out.push('### ' + q, ...r);
}
fs.appendFileSync('bron/web/bing.txt', out.join('\n') + '\n'); console.log(out.join('\n')); await b.close();
