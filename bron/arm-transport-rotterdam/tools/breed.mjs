import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 320, height: 640 } });
await p.goto('http://localhost:4429/sitefront/arm-transport-rotterdam/' + (process.argv[2]||''));
console.log(await p.evaluate(() => [...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > 321).map(e => e.tagName + '.' + (e.className?.baseVal ?? e.className).toString().slice(0,60) + ' ' + Math.round(e.getBoundingClientRect().right)).slice(0,15).join('\n')));
await b.close();
