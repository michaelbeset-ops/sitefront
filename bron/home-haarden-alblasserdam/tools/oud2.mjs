import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 390, height: 844 } })).newPage();
await p.goto('https://home-haarden.nl/', { waitUntil: 'networkidle' });
console.log(await p.evaluate(() => [...document.querySelectorAll('a[href^="tel"], a[href^="mailto"]')].map(a => a.href + ' => ' + a.innerText.trim()).join('\n')));
console.log(await p.evaluate(() => document.querySelector('.header-top, #top-bar')?.innerHTML.slice(0, 600)));
await p.goto('https://home-haarden.nl/contact/', { waitUntil: 'networkidle' });
console.log(await p.evaluate(() => [...document.querySelectorAll('a[href^="tel"], a[href^="mailto"]')].map(a => a.href + ' => ' + a.innerText.trim()).join('\n')));
await b.close();
