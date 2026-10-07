import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: +(process.argv[2] || 390), height: 800 } });
await p.goto('http://localhost:4441/sitefront/vdb-interieurbouw-dordrecht/' + (process.argv[3] || ''), { waitUntil: 'networkidle' });
console.log(await p.evaluate(() => [...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > innerWidth + 0.2).slice(0, 12).map(e => e.tagName + '.' + (e.className?.baseVal ?? e.className) + ' ' + Math.round(e.getBoundingClientRect().right)).join('\n')));
await b.close();
