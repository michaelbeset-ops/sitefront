import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await p.goto('http://localhost:4423/sitefront/de-fransoos-leiden/#samenstellen', { waitUntil: 'networkidle' });
console.log(decodeURIComponent(await p.getAttribute('[data-sam-wa]', 'href')));
await p.selectOption('#s-wat', 'proeverij'); await p.selectOption('#s-pers', '10 of meer'); await p.selectOption('#s-voor', 'voor een verjaardag');
console.log(decodeURIComponent(await p.getAttribute('[data-sam-wa]', 'href')));
await p.selectOption('#s-wat', 'cadeaupakket'); await p.selectOption('#s-voor', 'als bedankje');
console.log(decodeURIComponent(await p.getAttribute('[data-sam-wa]', 'href')));
await b.close();
