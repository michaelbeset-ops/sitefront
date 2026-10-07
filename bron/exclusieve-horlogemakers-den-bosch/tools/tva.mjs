import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch(); const p = await (await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' })).newPage();
await p.goto('https://www.bing.com/search?q=tijdvooramersfoort.nl+%22Gold+%26+Silver%22+Kamp', { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(3000);
const links = await p.evaluate(() => [...document.querySelectorAll('a[href]')].map(a => a.href).filter(h => /tijdvooramersfoort/.test(h)));
console.log([...new Set(links)].join('\n'));
await p.goto('https://www.tijdvooramersfoort.nl/nl/zoeken?q=B.G.L.', { waitUntil: 'domcontentloaded' }).catch(()=>{}); await p.waitForTimeout(3000);
console.log(p.url()); console.log([...new Set(await p.evaluate(() => [...document.querySelectorAll('a[href]')].map(a => a.href + ' ' + a.innerText.trim().slice(0,50)).filter(h => /gold|bgl|b-g-l/i.test(h))))].join('\n'));
await b.close();
