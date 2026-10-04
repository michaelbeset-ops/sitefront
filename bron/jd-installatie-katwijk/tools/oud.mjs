import { chromium } from 'playwright';
const b = await chromium.launch(); const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 }); const p = await ctx.newPage();
const errs = []; p.on('requestfailed', r => errs.push(r.url()));
await p.goto('http://www.jdinstallatie.nl/', { waitUntil: 'domcontentloaded', timeout: 60000 });
console.log(await p.evaluate(() => ({ inner: innerWidth, sw: document.documentElement.scrollWidth, vp: !!document.querySelector('meta[name=viewport]'), h1: document.querySelectorAll('h1').length, flash: !!document.querySelector('object'), sheet: document.querySelector('.art-sheet')?.getBoundingClientRect().width })));
await p.waitForTimeout(3000); await p.screenshot({ path: 'bron/oud-390.png' });
console.log('failed', errs.slice(0, 5).join(' '));
await b.close();
