import { chromium } from 'playwright';
const b = await chromium.launch();
for (const w of [390, 1440]) {
const p = await (await b.newContext({ viewport: { width: w, height: 844 }, isMobile: w<500, hasTouch: w<500, deviceScaleFactor: 1 })).newPage();
await p.goto('http://ongelooflijklekker.nl/', { waitUntil: 'networkidle' });
const r = await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, h: document.documentElement.scrollHeight, wide: [...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > innerWidth + 2).slice(0,5).map(e => e.tagName + '.' + e.className + ' ' + Math.round(e.getBoundingClientRect().right)) }));
console.log(w, JSON.stringify(r));
await p.screenshot({ path: `bron/web/oud-${w}.png` });
}
await b.close();
