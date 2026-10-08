import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [w,h,n] of [[390,844,'m'],[1440,900,'d']]) {
const c = await b.newContext({ viewport: { width: w, height: h }, isMobile: w<500, hasTouch: w<500 }); const p = await c.newPage();
await p.goto('https://dierkx-zonweringen.nl/', { waitUntil: 'load' }); await p.waitForTimeout(9000);
await p.screenshot({ path: `bron/web/oud-${n}-9s.png` });
console.log(n, await p.evaluate(() => ({ btn: [...document.querySelectorAll('.tp-caption a, rs-layer a, .tp-caption')].map(e=>e.innerText.trim()).filter(Boolean).slice(0,10), small: [...document.querySelectorAll('p,li,a')].filter(e=>parseFloat(getComputedStyle(e).fontSize)<14 && e.innerText.trim()).length, readmore: document.body.innerText.match(/Read More/g)?.length, copy: document.body.innerText.match(/©.*$/m)?.[0] })));
await c.close(); }
await b.close();
