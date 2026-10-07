import { chromium } from 'playwright';
const b = await chromium.launch();
const p = await (await b.newContext({ viewport: { width: 320, height: 640 } })).newPage();
await p.goto('http://localhost:4435/sitefront/ipp-tech-de-kwakel/' + (process.argv[2] || ''), { waitUntil: 'networkidle' });
console.log(await p.evaluate(() => [...document.querySelectorAll('body *')].filter((e) => e.getBoundingClientRect().right > 320.5).slice(0, 15).map((e) => `${e.tagName}.${String(e.className).slice(0, 60)} r=${e.getBoundingClientRect().right.toFixed(1)} "${(e.textContent || '').trim().slice(0, 40)}"`).join('\n')));
await b.close();
