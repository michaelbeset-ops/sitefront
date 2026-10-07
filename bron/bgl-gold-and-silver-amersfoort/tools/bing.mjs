import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' })).newPage();
for (const q of process.argv.slice(2)) {
  await p.goto('https://www.bing.com/search?setlang=nl&q=' + encodeURIComponent(q), { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(3500);
  console.log('== ' + q); console.log(await p.evaluate(() => [...document.querySelectorAll('li.b_algo')].map(li => (li.querySelector('cite')?.innerText||'') + ' | ' + (li.querySelector('h2')?.innerText||'') + ' | ' + (li.querySelector('p, .b_caption')?.innerText||'').slice(0,200)).join('\n')));
}
await b.close();
