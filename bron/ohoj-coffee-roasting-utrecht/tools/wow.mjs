import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 390, height: 844 } })).newPage();
await p.goto('http://localhost:4417/sitefront/ohoj-coffee-roasting-utrecht/', { waitUntil: 'networkidle' });
await p.selectOption('#b-methode', 'een French press'); await p.selectOption('#b-smaak', 'fruitig en fris'); await p.selectOption('#b-maling', 'gemalen');
console.log(decodeURIComponent(await p.getAttribute('[data-bonen-knop]', 'href')));
console.log(await p.evaluate(() => [...document.querySelectorAll('a[href]')].filter(a => !a.href.startsWith('http://localhost') && !/wa\.me|tel:|mailto|facebook|instagram|google\.com\/maps|sitefront\.nl/.test(a.href)).map(a => a.href)));
await b.close();
