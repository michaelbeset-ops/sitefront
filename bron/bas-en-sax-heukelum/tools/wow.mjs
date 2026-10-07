import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto('http://localhost:4418/sitefront/bas-en-sax-heukelum/#werkbon', { waitUntil: 'networkidle' });
await p.selectOption('#wb-inst', 'basklarinet'); await p.fill('#wb-merk', 'Selmer Paris'); await p.selectOption('#wb-vraag', 'stroef');
await p.waitForTimeout(1500);
console.log(await p.textContent('[data-bericht]')); console.log(decodeURIComponent(await p.getAttribute('[data-stuur]', 'href')));
await p.locator('#werkbon').screenshot({ path: 'shots/wow-1440.png' });
await b.close();
