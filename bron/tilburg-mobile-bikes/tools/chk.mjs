import { chromium } from 'playwright';
const b = await chromium.launch({ channel: 'chrome' });
const p = await (await b.newContext({ viewport: { width: 390, height: 844 }, isMobile: true })).newPage();
await p.goto('http://127.0.0.1:4521/sitefront/tilburg-mobile-bikes/', { waitUntil: 'networkidle' });
console.log(await p.evaluate(() => ({ h: document.documentElement.scrollHeight, footBottom: Math.round([...document.querySelectorAll('footer')].pop().getBoundingClientRect().bottom + scrollY), emdash: document.body.innerText.includes('—') })));
await b.close();
