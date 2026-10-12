import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await p.goto('http://127.0.0.1:4512/sitefront/flinn-winkelcafe/', { waitUntil: 'networkidle' });
const img = p.locator('img[alt^="Twee stoelen"]'); await img.scrollIntoViewIfNeeded(); await p.waitForTimeout(1500);
console.log(await img.evaluate(i => ({ nw: i.naturalWidth, cur: i.currentSrc, op: getComputedStyle(i).opacity, cls: i.className, r: i.getBoundingClientRect().height })));
await b.close();
