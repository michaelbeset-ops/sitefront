import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 390, height: 844 } })).newPage();
await p.goto('http://127.0.0.1:4472/sitefront/wooncomfort-halsteren/' + (process.argv[2] || ''), { waitUntil: 'networkidle' });
console.log(await p.evaluate(() => [...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > innerWidth + 1).slice(0, 12).map(e => e.tagName + '.' + (e.className?.baseVal ?? e.className).toString().slice(0, 60) + ' r=' + Math.round(e.getBoundingClientRect().right))));
await b.close();
