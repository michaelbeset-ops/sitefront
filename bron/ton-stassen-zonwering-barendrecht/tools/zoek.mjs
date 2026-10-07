import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36' })).newPage();
for (const q of ['"Ton Stassen" zonwering', 'Ton Stassen Zonwering facebook', 'tonstassenzonwering', 'Ton Stassen Zonwering Barendrecht kvk']) {
  await p.goto('https://www.bing.com/search?setlang=nl&q=' + encodeURIComponent(q), { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(2500);
  const r = await p.evaluate(() => [...document.querySelectorAll('#b_results li.b_algo')].map(li => (li.querySelector('h2 a')?.href || '') + ' :: ' + (li.querySelector('h2')?.textContent || '') + ' :: ' + (li.querySelector('.b_caption p, .b_lineclamp2, .b_lineclamp3')?.textContent || '').slice(0, 200)));
  console.log('### ' + q + '\n' + r.join('\n'));
}
await b.close();
