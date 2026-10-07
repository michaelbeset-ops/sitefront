import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await p.goto('http://localhost:4441/sitefront/exclusieve-horlogemakers-den-bosch/#ontwerp', { waitUntil: 'networkidle' });
await p.selectOption('#wens', 'erfstuk'); await p.fill('#gravure', 'Opa & Oma 1962');
console.log(decodeURIComponent(await p.getAttribute('[data-wa]', 'href')));
console.log(await p.textContent('[data-gravure-tekst]'));
await p.locator('#ontwerp').screenshot({ path: 'shots/wow-1440.png' });
await b.close();
