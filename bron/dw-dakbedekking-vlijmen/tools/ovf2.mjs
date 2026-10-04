import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 320, height: 640 } });
await p.goto('http://localhost:4800/sitefront/dw-dakbedekking-vlijmen/');
console.log(await p.evaluate(() => [...document.querySelectorAll('#offerte a.kaart')].map(a => a.getBoundingClientRect().width + ' ' + a.scrollWidth + ' | ' + [...a.children].map(c => c.tagName + ':' + Math.round(c.getBoundingClientRect().width)).join(',')).join('\n')));
console.log(await p.evaluate(() => { const u = document.querySelector('#offerte ul'); return u.getBoundingClientRect().width + ' parent ' + u.parentElement.getBoundingClientRect().width + ' ' + u.parentElement.parentElement.getBoundingClientRect().width; }));
await b.close();
