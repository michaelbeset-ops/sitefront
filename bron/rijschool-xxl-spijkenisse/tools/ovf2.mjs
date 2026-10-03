import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 390, height: 844 } });
await p.goto('http://localhost:4741/sitefront/rijschool-xxl-spijkenisse/', { waitUntil: 'networkidle' });
await p.evaluate(()=>document.querySelector('ul.snap-x').style.display='none');console.log('sw0', await p.evaluate(() => document.documentElement.scrollWidth));
await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 400) { scrollTo(0, y); await new Promise(r => setTimeout(r, 60)); } });
await p.waitForTimeout(1500);
console.log('sw1', await p.evaluate(() => document.documentElement.scrollWidth));
console.log(await p.evaluate(() => { const out = []; for (const e of document.querySelectorAll('body *')) { const r = e.getBoundingClientRect(); if (r.right > innerWidth + 1 && !e.closest('ul.snap-x')) out.push(e.tagName + '.' + String(e.className).slice(0, 50) + ' ' + Math.round(r.right)); } return out.slice(0, 10).join('\n'); }));
await b.close();
