import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage();
await p.goto('http://localhost:4621/sitefront/joris-uurwerkreparatie/');
await p.fill('input[name=merk]', 'Omega'); await p.selectOption('select[name=type]', 'Chronograaf');
await p.fill('input[name=ref]', '145.022'); await p.fill('textarea[name=vraag]', 'loopt achter');
console.log(decodeURIComponent(await p.getAttribute('[data-wa-knop]', 'href')));
await b.close();
