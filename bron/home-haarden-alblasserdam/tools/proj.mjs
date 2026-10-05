import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage();
await p.goto('https://home-haarden.nl/product-categorie/gerealiseerde-projecten/', { waitUntil: 'networkidle' });
console.log(await p.evaluate(() => [...document.querySelectorAll('img')].map(i=>i.closest('div.col, li, .box, .product-small')||i.parentElement).map(e => (e.querySelector('img')?.src || '-') + ' => ' + e.innerText.replace(/\s+/g, ' ').trim() + ' | ' + (e.querySelector('a')?.href || '')).join('\n')));
await b.close();
