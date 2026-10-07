import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch(); const p = await (await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' })).newPage();
for (const u of ['https://www.tijdvooramersfoort.nl/nl/zoeken?q=gold+silver', 'https://www.tijdvooramersfoort.nl/nl/zoekresultaten?q=gold', 'https://duckduckgo.com/html/?q=%22B.G.L.%22+gold+silver+amersfoort+tijdvooramersfoort']) {
  await p.goto(u, { waitUntil: 'domcontentloaded' }).catch(()=>{}); await p.waitForTimeout(4000);
  console.log('==', p.url()); console.log([...new Set(await p.evaluate(() => [...document.querySelectorAll('a[href]')].map(a => a.href + ' ' + a.innerText.trim().slice(0,60)).filter(h => /gold|bgl|b-g-l|juwel/i.test(h))))].join('\n'));
}
await b.close();
