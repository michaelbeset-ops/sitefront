import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage();
await p.goto('http://localhost:4415/sitefront/grandcafe-mn-moeder-leerdam/');
await p.selectOption('select[name=wat]', 'lunchen met een groep');
await p.fill('input[name=datum]', '2026-10-11'); await p.fill('input[name=aantal]', '12'); await p.fill('input[name=naam]', 'Sanne');
await p.dispatchEvent('input[name=naam]', 'input');
console.log(decodeURIComponent(await p.getAttribute('[data-res-knop]', 'href')), '|', await p.textContent('[data-res-let]'));
console.log(await p.evaluate(() => [document.body.innerText.includes('—'), document.body.innerText.includes('–'), document.querySelectorAll('img:not([alt])').length]));
await b.close();
