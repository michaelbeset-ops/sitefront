// Test: wissel auto/motor, kies pakket, controleer WhatsApp-link.
import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 390, height: 844 } });
await p.goto('http://localhost:4644/sitefront/rijschool-herman-ridderkerk/');
const href = () => p.$eval('[data-pakket-knop]', (a) => decodeURIComponent(a.href));
console.log('start:', await href());
await p.click('[data-soort="motor"]'); console.log('motor:', await href());
await p.click('[data-paneel="motor"] label:has-text("Pakket D")'); console.log('motor D:', await href(), await p.textContent('[data-pakket-knop]'));
await p.click('[data-soort="auto"]'); await p.click('[data-paneel="auto"] label:has-text("Pakket A")'); console.log('auto A:', await href());
console.log('panelen zichtbaar:', await p.$$eval('[data-paneel]', (els) => els.map((e) => e.dataset.paneel + '=' + !e.hidden).join(',')));
await b.close();
