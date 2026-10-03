import { chromium, devices } from 'playwright';
const out = process.argv[2];
const b = await chromium.launch();
const ctx = await b.newContext({ ...devices['iPhone 13'] });
const p = await ctx.newPage();
const errs = []; p.on('console', m => m.type() === 'error' && errs.push(m.text().slice(0, 120)));
p.on('requestfailed', r => errs.push('FAIL ' + r.url().slice(0, 100)));
const t0 = Date.now();
await p.goto('http://www.timmerbedrijfvandermeij.nl/', { waitUntil: 'load', timeout: 60000 });
console.log('load ms', Date.now() - t0);
await p.waitForTimeout(3000);
await p.screenshot({ path: out + '/oud-390-view.png' });
await p.screenshot({ path: out + '/oud-390-full.png', fullPage: true });
console.log(await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, cw: innerWidth, H: document.documentElement.scrollHeight,
  tel: [...document.querySelectorAll('a[href^="tel:"]')].length, vp: document.querySelector('meta[name=viewport]')?.content,
  small: [...document.querySelectorAll('p,li,a,span')].filter(e => e.offsetParent && parseFloat(getComputedStyle(e).fontSize) < 12 && e.textContent.trim().length > 3).length,
  bytes: performance.getEntriesByType('resource').reduce((s, r) => s + (r.transferSize || 0), 0) })));
console.log(errs.slice(0, 15).join('\n'));
const p2 = await ctx.newPage(); await p2.goto('http://www.timmerbedrijfvandermeij.nl/contact/', { waitUntil: 'load' }); await p2.waitForTimeout(2000);
await p2.screenshot({ path: out + '/oud-390-contact.png', fullPage: true });
await b.close();
