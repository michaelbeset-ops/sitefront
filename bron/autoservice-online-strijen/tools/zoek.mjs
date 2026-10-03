import { chromium } from 'playwright';
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new','--disable-blink-features=AutomationControlled'] });
const p = await (await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36' })).newPage();
for (const q of process.argv.slice(2)) {
  await p.goto('https://www.bing.com/search?setlang=nl&cc=NL&q=' + encodeURIComponent(q), { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(2500);
  const r = await p.evaluate(() => [...document.querySelectorAll('li.b_algo')].map(l => (l.querySelector('cite')?.innerText || '') + ' | ' + (l.querySelector('h2')?.innerText || '') + ' | ' + (l.querySelector('p')?.innerText || '').slice(0, 200)));
  console.log('== ' + q + '\n' + r.join('\n'));
}
await b.close();
