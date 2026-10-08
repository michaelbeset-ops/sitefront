import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage();
await p.goto('http://127.0.0.1:4474/sitefront/zonwering-sam-alblasserdam/');
await p.selectOption('select[name=product]', 'Markies'); await p.click('span.keus:has-text("Nieuw doek")');
await p.fill('input[name=plaats]', 'Papendrecht'); await p.locator('#breedte').fill('420');
console.log(decodeURIComponent(await p.getAttribute('[data-stuur]', 'href'))); await b.close();
