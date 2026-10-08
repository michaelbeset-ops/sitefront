import { chromium } from 'playwright';
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new'] });
for (const w of [1440, 390]) {
const p = await (await b.newContext({ viewport: { width: w, height: 900 } })).newPage();
const errs = []; p.on('pageerror', e => errs.push(e.message));
await p.goto('http://127.0.0.1:4475/sitefront/verandahof/#maten', { waitUntil: 'networkidle' });
await p.waitForTimeout(800);
console.log(w, decodeURIComponent(await p.getAttribute('[data-stuur]', 'href')));
await p.locator('button[data-maat="9,3.5"]').click();
await p.fill('input[name=plaats]', 'Heusden');
console.log(w, decodeURIComponent(await p.getAttribute('[data-stuur]', 'href')));
await p.locator('[data-maten]').screenshot({ path: `shots/wow-9x35-${w}.png` });
await p.locator('label:has-text("Veranda met zijwanden")').click();
await p.locator('input[name=b]').fill('12'); await p.locator('input[name=b]').dispatchEvent('input');
await p.locator('[data-maten]').screenshot({ path: `shots/wow-zijwanden-${w}.png` });
console.log(w, decodeURIComponent(await p.getAttribute('[data-stuur]', 'href')), errs);
}
await b.close();
