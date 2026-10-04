import { chromium } from 'playwright';
const b = await chromium.launch(); const c = await b.newContext({ viewport: { width: 1440, height: 900 } }); const p = await c.newPage();
await p.goto('http://localhost:4808/sitefront/schildersbedrijf-eric-voeten-roosendaal/#offerte', { waitUntil: 'networkidle' });
await p.click('form label:has-text("Buitenschilderwerk")'); await p.click('label:has-text("Houtrotherstel") >> nth=-1'); await p.click('label:has-text("VvE-complex")');
await p.selectOption('select[name=wanneer]', 'Volgend voorjaar'); await p.fill('input[name=plaats]', 'Roosendaal'); await p.fill('input[name=naam]', 'Test');
console.log(await p.textContent('[data-voorbeeld]'));
const [pop] = await Promise.all([c.waitForEvent('page'), p.click('button[value=wa]')]);
console.log(decodeURIComponent(pop.url()).slice(0, 300));
await b.close();
