import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 1440, height: 1000 } })).newPage();
await p.goto('http://localhost:' + (process.env.POORT || 4431) + '/sitefront/afdekproducten-dordrecht/#keuzehulp', { waitUntil: 'networkidle' });
await p.selectOption('[data-voor]', 'aanhanger'); await p.selectOption('[data-duur]', 'jaren'); await p.fill('[data-l]', '2,5'); await p.fill('[data-b]', '1,3');
await p.waitForTimeout(500);
console.log(await p.textContent('[data-titel]'), '|', await p.getAttribute('[data-knop1]', 'href'), '|', decodeURIComponent(await p.getAttribute('[data-wa]', 'href')));
await p.locator('#keuzehulp').screenshot({ path: 'shots/wow-1440.png' });
await b.close();
