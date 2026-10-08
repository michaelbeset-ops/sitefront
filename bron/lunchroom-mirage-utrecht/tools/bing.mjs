import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' })).newPage();
for (const q of process.argv.slice(2)) { await p.goto('https://www.bing.com/search?q=' + encodeURIComponent(q) + '&setlang=nl', { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(2500);
console.log('## ' + q); console.log((await p.evaluate(() => [...document.querySelectorAll('#b_results > li.b_algo')].map(l => (l.querySelector('a')?.href || '') + '\n   ' + l.innerText.replace(/\s+/g, ' ').slice(0, 250)))).join('\n')); }
await b.close();
