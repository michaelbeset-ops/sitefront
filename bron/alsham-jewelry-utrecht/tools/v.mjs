import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 390, height: 844 } })).newPage();
await p.goto('http://127.0.0.1:4563/sitefront/alsham-jewelry-utrecht/privacy/'); await p.screenshot({ path: 'shots/privacy-390.png' });
console.log(await p.evaluate(() => document.documentElement.scrollWidth));
await b.close();
