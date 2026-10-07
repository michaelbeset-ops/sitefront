import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' });
for (const q of process.argv.slice(2)) {
await p.goto('https://www.bing.com/search?setlang=nl&q=' + encodeURIComponent(q), { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(3000);
const r = await p.evaluate(() => [...document.querySelectorAll('li.b_algo')].map(li => { const h = li.querySelector('h2 a')?.href || ''; const m = h.match(/[?&]u=a1([^&]+)/); let u = h; if (m) { try { u = atob(m[1].replace(/-/g,'+').replace(/_/g,'/')); } catch {} } return u + ' || ' + li.innerText.replace(/\s+/g,' ').slice(0, 250); }));
console.log('###', q); console.log(r.join('\n')); }
await b.close();
