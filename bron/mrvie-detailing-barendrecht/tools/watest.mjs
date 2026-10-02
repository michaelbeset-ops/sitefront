// Test: voor/na-wissel en het WhatsApp-formulier (window.open onderschept), plus privacy-screenshot.
import { chromium } from 'playwright';
const base = 'http://localhost:4691/sitefront/mrvie-detailing-barendrecht/';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto(base);
await p.evaluate(() => { window.__open = []; window.open = (u) => { window.__open.push(u); }; });
await p.click('[data-vn] [data-toon=voor]');
console.log('voor/na:', await p.evaluate(() => document.querySelector('[data-vn]').classList.contains('toon-voor')));
await p.click('text=Full Detail >> xpath=ancestor::label');
await p.fill('input[name=auto]', 'Volkswagen Golf'); await p.selectOption('select[name=dag]', 'Zaterdag'); await p.fill('input[name=naam]', 'Test');
console.log('samenvatting:', await p.textContent('[data-samenvatting]'));
await p.click('[data-wa] button[type=submit]');
console.log(decodeURIComponent((await p.evaluate(() => window.__open))[0]));
await p.goto(base + 'privacy/'); await p.screenshot({ path: 'shots/privacy-1440.png' });
await b.close();
