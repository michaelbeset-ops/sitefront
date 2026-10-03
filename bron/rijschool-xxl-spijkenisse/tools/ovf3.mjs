import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: Number(process.argv[2] || 390), height: 844 } });
await p.goto('http://localhost:4741/sitefront/rijschool-xxl-spijkenisse/', { waitUntil: 'networkidle' });
console.log(await p.evaluate(() => { const out = []; for (const e of document.querySelectorAll('body *')) { if (e.closest('ul.snap-x')) continue; const r = e.getBoundingClientRect(); const rr = r.left + e.scrollWidth; if (rr > innerWidth + 1 && getComputedStyle(e).overflowX === 'visible') out.push(e.tagName + '.' + String(e.className).slice(0, 50) + ' ' + Math.round(rr) + ' ' + (e.textContent||'').trim().slice(0,40)); } return out.slice(-10).join('\n'); }));
await b.close();
