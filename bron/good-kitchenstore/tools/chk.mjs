import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await p.goto('http://127.0.0.1:4527/sitefront/good-kitchenstore/#projecten', { waitUntil: 'networkidle' }); await p.waitForTimeout(1500);
console.log(await p.evaluate(() => [...document.querySelectorAll('#projecten img')].map(i => [i.complete, i.naturalWidth, Math.round(i.getBoundingClientRect().height), getComputedStyle(i).opacity, i.currentSrc.slice(-40)].join(' '))));
await b.close();
