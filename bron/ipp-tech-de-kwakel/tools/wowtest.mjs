import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage();
await p.goto('http://localhost:4435/sitefront/ipp-tech-de-kwakel/');
await p.selectOption('select[name=machine]', 'Reachtruck'); await p.selectOption('select[name=merk]', 'Jungheinrich');
await p.fill('input[name=plaats]', 'Aalsmeer'); await p.click('label[for=spoed]');
console.log(decodeURIComponent(await p.getAttribute('[data-wa-knop]', 'href')));
await p.locator('#melden').screenshot({ path: 'shots/wow-ingevuld.png' });
await b.close();
