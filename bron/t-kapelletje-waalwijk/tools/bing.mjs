import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' });
for (const q of process.argv.slice(2)) {
  await p.goto('https://www.bing.com/search?setlang=nl&q=' + encodeURIComponent(q), { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(2500);
  const r = await p.evaluate(() => [...document.querySelectorAll('li.b_algo')].map(e => (e.querySelector('h2')?.innerText || '') + ' | ' + (e.querySelector('a')?.href || '') + ' | ' + (e.querySelector('.b_caption p, .b_lineclamp2, .b_lineclamp3')?.innerText || '').slice(0, 300)));
  console.log('###', q); console.log(r.join('\n'));
}
await b.close();
