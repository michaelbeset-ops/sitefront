import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage();
await p.goto('http://127.0.0.1:4563/sitefront/alsham-jewelry-utrecht/');
await p.selectOption('[data-stuk]', 'een ring'); await p.selectOption('[data-voor]', 'voor een verloving'); await p.fill('[data-extra]', 'maat 17');
console.log(decodeURIComponent(await p.getAttribute('[data-zoek-knop]', 'href')));
console.log(await p.$$eval('a[href*="wa.me"]', (as) => as.length), 'wa-links');
const html = await p.content(); console.log('emdash', /—/.test(html), 'noindex', html.includes('noindex'), 'ldjson', html.includes('ld+json'), 'canonical', html.includes('rel="canonical"'));
await b.close();
