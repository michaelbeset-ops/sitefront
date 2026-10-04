import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 320, height: 640 } });
await p.goto('http://localhost:4800/sitefront/dw-dakbedekking-vlijmen/' + (process.argv[2]||''));
console.log(await p.evaluate(() => [...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > 321 && !e.closest('.overflow-x-auto')).slice(0, 8).map(e => e.tagName + '.' + e.className.toString().slice(0, 60) + ' ' + Math.round(e.getBoundingClientRect().right)).join('\n')));
await b.close();
