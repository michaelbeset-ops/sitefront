import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 390, height: 844 }, isMobile: true })).newPage();
await p.goto('https://tomkorbee.nl/', { waitUntil: 'load' });
console.log(await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, vp: !!document.querySelector('meta[name=viewport]'), iw: innerWidth, h: document.documentElement.scrollHeight })));
await p.screenshot({ path: 'bron/oude-site-390.png' }); await b.close();
