// Pakketkeuze en berichtformulier testen.
import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
const errs = []; p.on('pageerror', (e) => errs.push(e.message));
await p.goto('http://localhost:4692/sitefront/rijschool-herman-ridderkerk/', { waitUntil: 'networkidle' });
const href = () => p.$eval('[data-pakket-knop]', (a) => decodeURIComponent(a.href));
console.log('start:', await href());
await p.click('[data-soort="motor"]');
await p.click('[data-paneel="motor"] label.pakket >> nth=3');
console.log('motor D:', await href(), '| zichtbaar:', await p.isVisible('[data-pakket-knop]'));
await p.evaluate(() => { window.open = (u) => { window.__u = u; }; });
await p.click('form[data-wa] label.keuze:has-text("Motor (A)")'); await p.click('form[data-wa] label.keuze:has-text("Een pakket")'); await p.selectOption('select[name=wanneer]', 'In het weekend');
await p.fill('input[name=naam]', 'Sam'); await p.click('form[data-wa] button[type=submit]');
console.log('form:', decodeURIComponent(await p.evaluate(() => window.__u)));
console.log('errors:', errs.join(' | ') || 'geen'); await b.close();
