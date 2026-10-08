import { chromium } from 'playwright';
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new'] });
for (const w of [1440, 390]) {
const p = await (await b.newContext({ viewport: { width: w, height: 900 } })).newPage();
const errs = []; p.on('pageerror', e => errs.push(e.message));
await p.goto('http://127.0.0.1:4473/sitefront/comfort-wonen-nieuwegein/#maten', { waitUntil: 'networkidle' });
await p.waitForTimeout(800);
console.log(w, decodeURIComponent(await p.getAttribute('[data-stuur]', 'href')));
await p.locator('label:has-text("Kozijn of deur")').click();
await p.fill('input[name=plaats]', 'IJsselstein');
console.log(w, decodeURIComponent(await p.getAttribute('[data-stuur]', 'href')));
await p.locator('[data-maten]').screenshot({ path: `shots/wow-kozijn-${w}.png` });
await p.locator('label:has-text("Tuinkamer")').click();
await p.locator('input[name=b]').fill('900');
await p.locator('[data-maten]').screenshot({ path: `shots/wow-tuinkamer-${w}.png` });
console.log(w, decodeURIComponent(await p.getAttribute('[data-stuur]', 'href')), errs);
}
await b.close();
