import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await p.goto('http://localhost:4422/sitefront/cc-rolluiken-waalwijk/#maten', { waitUntil: 'networkidle' });
await p.fill('[data-b]', '267'); await p.fill('[data-h]', '255'); await p.selectOption('[data-aantal]', '2'); await p.selectOption('[data-soort]', 'roldeur voor garage of winkel'); await p.selectOption('[data-kleur]', 'antraciet');
console.log(decodeURIComponent(await p.getAttribute('[data-wa]', 'href')));
await p.locator('#maten').screenshot({ path: 'shots/wow-1440.png' });
await b.close();
