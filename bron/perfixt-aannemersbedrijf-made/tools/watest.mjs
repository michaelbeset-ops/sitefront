import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage();
await p.goto('http://localhost:4785/sitefront/perfixt-aannemersbedrijf-made/', { waitUntil: 'networkidle' });
await p.evaluate(() => { window.open = (u) => { window._u = u; }; });
await p.click('text=Stucwerk >> nth=-1'); await p.click('label:has-text("Tegelwerk")'); await p.click('label:has-text("Bedrijfspand")');
await p.fill('input[name=plaats]', 'Breda'); await p.selectOption('select[name=wanneer]', 'Binnen 3 maanden'); await p.fill('input[name=naam]', 'Test');
await p.click('button:has-text("Verstuur via WhatsApp")');
console.log(decodeURIComponent(await p.evaluate(() => window._u)));
await b.close();
