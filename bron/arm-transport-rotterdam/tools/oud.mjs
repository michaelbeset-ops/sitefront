import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [site, naam] of [['https://www.armtransport.nl/', 'arm'], ['https://www.transportbedrijfinrotterdam.nl/', 'tbr']])
for (const [w,h,n] of [[390,844,'m'],[1440,900,'d']]) {
const c = await b.newContext({ viewport: { width: w, height: h }, isMobile: w<500 }); const p = await c.newPage();
const errs=[]; p.on('console', m => m.type()==='error' && errs.push(m.text().slice(0,120)));
await p.goto(site, { waitUntil: 'load' }); await p.waitForTimeout(3000);
const r = await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, H: document.documentElement.scrollHeight, tels: [...document.querySelectorAll('a[href^=tel]')].map(a=>a.getAttribute('href')), wa: document.querySelectorAll('a[href*="wa.me"],a[href*="whatsapp"]').length, forms: document.querySelectorAll('form').length, h1: [...document.querySelectorAll('h1')].map(h=>h.innerText.trim()), firstImgAlt: [...document.querySelectorAll('img')].filter(i=>!i.alt).length + ' img zonder alt', maps: /Oeps!/.test(document.body.innerText), adres: /Zwijndrecht/.test(document.body.innerText) }));
console.log(naam, n, JSON.stringify(r), 'consoleErrors', errs.length, errs.slice(0,3).join(' || '));
await p.screenshot({ path: `bron/web/oud-${naam}-${n}.png` }); await p.screenshot({ path: `bron/web/oud-${naam}-${n}-full.png`, fullPage: true }); await c.close(); }
await b.close();
