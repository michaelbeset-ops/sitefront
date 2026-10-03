import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 320, height: 640 } })).newPage();
await p.goto('http://localhost:4770/sitefront/donk-loon-kraanverhuur-streefkerk/' + (process.argv[2] || ''));
console.log(await p.evaluate(() => [...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > 321 && !e.closest('.overflow-x-auto')).slice(0, 12).map(e => e.tagName + '.' + e.className.toString().slice(0, 70) + ' ' + Math.round(e.getBoundingClientRect().right) + ' ' + (e.textContent||'').trim().slice(0,40))));
await b.close();
