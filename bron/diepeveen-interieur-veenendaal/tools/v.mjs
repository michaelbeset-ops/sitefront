import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [w,h] of [[390,844],[320,640]]) { const p = await (await b.newContext({ viewport: { width: w, height: h } })).newPage();
await p.goto('http://localhost:4460/sitefront/diepeveen-interieur-veenendaal/', { waitUntil: 'load' }); await p.waitForTimeout(1500);
console.log(await p.evaluate(() => { const i = document.querySelector('picture img'); return i.currentSrc + ' ' + i.getBoundingClientRect().height; }));
await p.screenshot({ path: `shots/_v${w}.png` }); }
await b.close();
