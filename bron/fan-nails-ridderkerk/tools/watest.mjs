import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage();
await p.goto('http://localhost:4631/sitefront/fan-nails-ridderkerk/');
await p.selectOption('select[name=beh]', 'Gellak of BIAB'); await p.selectOption('select[name=dag]', 'Zaterdag');
await p.selectOption('select[name=deel]', 'Ochtend'); await p.fill('textarea[name=wens]', 'kort, nude');
console.log(decodeURIComponent(await p.getAttribute('[data-wa-knop]', 'href')));
await b.close();
