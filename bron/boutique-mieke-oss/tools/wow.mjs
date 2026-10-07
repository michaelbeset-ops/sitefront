import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await p.goto('http://localhost:4424/sitefront/boutique-mieke-oss/#apart', { waitUntil: 'networkidle' });
await p.fill('[data-wat]', 'het bomberjasje'); await p.selectOption('[data-waar]', 'op Facebook'); await p.selectOption('[data-maat]', 'L'); await p.selectOption('[data-dag]', 'vrijdag');
await p.locator('#apart').scrollIntoViewIfNeeded(); await p.waitForTimeout(1200);
await p.locator('#apart').screenshot({ path: 'shots/wow-1440.png' });
console.log(decodeURIComponent(await p.getAttribute('[data-apart-wa]', 'href')));
await b.close();
