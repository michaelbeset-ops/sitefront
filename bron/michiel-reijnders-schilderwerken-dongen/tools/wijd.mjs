import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: +process.argv[2] || 390, height: 800 } });
await p.goto('http://localhost:4804/sitefront/michiel-reijnders-schilderwerken-dongen/' + (process.argv[3] || ''), { waitUntil: 'networkidle' });
console.log(await p.evaluate(() => { const W = innerWidth; const inScroll = (e) => { for (let x = e.parentElement; x; x = x.parentElement) if (getComputedStyle(x).overflowX !== 'visible') return true; return false; }; return [...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > W + 0.5 && !inScroll(e)).slice(0, 8).map(e => e.tagName + '.' + String(e.className).slice(0, 60) + ' ' + Math.round(e.getBoundingClientRect().right)); }));
await b.close();
