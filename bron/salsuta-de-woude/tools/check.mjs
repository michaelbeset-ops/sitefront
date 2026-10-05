import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage();
await p.goto('https://www.restaurant-salsuta.nl/', { waitUntil: 'networkidle' });
console.log('link bij "deze link":', await p.evaluate(() => { const el = [...document.querySelectorAll('p,div,span')].find(e => e.textContent.includes('deze link te gebruiken') && e.children.length < 5); return el ? (el.querySelector('a')?.href || 'GEEN <a>') : 'niet gevonden'; }));
console.log('26 juni-melding:', await p.evaluate(() => [...document.images].some(i => i.src.includes('20260625'))), '15 sept-tekst:', (await p.content()).includes('maandag 15 september'));
await b.close();
