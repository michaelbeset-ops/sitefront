import { chromium } from 'playwright';
const W = +(process.argv[3] || 390);
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: W, height: 844 } });
await p.goto('http://localhost:4400/sitefront/bas-van-der-ven-catering-etten-leur/' + (process.argv[2] || ''), { waitUntil: 'networkidle' });
await p.waitForTimeout(800);
console.log(await p.evaluate((W) => [...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > W + 1).slice(0, 12).map(e => e.tagName + '.' + (e.className?.baseVal ?? e.className).toString().slice(0, 60) + ' ' + Math.round(e.getBoundingClientRect().right) + ' ' + (e.textContent||'').slice(0,40)).join('\n'), W));
await b.close();
