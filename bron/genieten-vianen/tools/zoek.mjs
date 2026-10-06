import { chromium } from 'playwright';
const termen = process.argv.slice(2);
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new','--disable-blink-features=AutomationControlled'] });
const p = await b.newPage({ viewport: { width: 1400, height: 1000 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36' });
for (const t of termen) {
  const r = await p.goto(`https://unsplash.com/s/photos/${encodeURIComponent(t)}?license=free`, { waitUntil: 'domcontentloaded' });
  await p.waitForTimeout(3500);
  await p.mouse.wheel(0, 3000); await p.waitForTimeout(1500);
  const ids = await p.evaluate(() => [...document.querySelectorAll('figure img[src*="images.unsplash.com/photo-"]')].map(i => (i.src.match(/photo-[\w-]+/)||[''])[0] + ' | ' + (i.alt||'').slice(0,90)));
  console.log('###', t, r.status()); console.log([...new Set(ids)].slice(0, 30).join('\n'));
}
await b.close();
