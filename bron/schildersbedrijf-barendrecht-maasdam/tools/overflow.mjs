import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 390, height: 844 } });
await p.goto('http://localhost:4765/sitefront/schildersbedrijf-barendrecht-maasdam/' + (process.argv[2] || ''));
const r = await p.evaluate(() => [...document.querySelectorAll('body *')].filter((e) => e.getBoundingClientRect().right > 392).slice(0, 12).map((e) => e.tagName + '.' + String(e.className).slice(0, 70) + ' ' + Math.round(e.getBoundingClientRect().right)));
console.log(r.join('\n')); await b.close();
