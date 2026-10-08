import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 390, height: 844 } })).newPage();
await p.goto('http://localhost:4453/sitefront/enz-fairwear-baarn/', { waitUntil: 'networkidle' });
await p.fill('input[name=wat]', 'de bruine SKFK-jas'); await p.selectOption('select[name=maat]', 'M'); await p.selectOption('select[name=wanneer]', 'zaterdag');
console.log(decodeURIComponent(await p.getAttribute('[data-stuur]', 'href')));
await p.selectOption('select[name=vraag]', 'maat'); console.log(decodeURIComponent(await p.getAttribute('[data-stuur]', 'href')));
await b.close();
