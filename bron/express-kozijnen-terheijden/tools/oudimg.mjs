import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto('https://www.expresskozijnen.nl/', { waitUntil: 'load', timeout: 60000 }); await p.waitForTimeout(3000);
await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 300) { scrollTo(0, y); await new Promise(r => setTimeout(r, 200)); } });
await p.waitForTimeout(2000);
console.log((await p.evaluate(() => [...document.images].map(i => Math.round(i.getBoundingClientRect().top + scrollY) + ' ' + i.naturalWidth + ' ' + (i.currentSrc.match(/media\/([^/]+)/) || [])[1]))).join('\n'));
await b.close();
