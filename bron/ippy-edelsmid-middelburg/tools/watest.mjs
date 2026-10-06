import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('console', m => m.type() === 'error' && errs.push(m.text()));
await p.goto('http://localhost:4401/sitefront/ippy-edelsmid-middelburg/', { waitUntil: 'networkidle' });
for (const [h, w] of [['heb-2', 'wordt-3'], ['heb-5', 'wordt-0'], ['heb-4', 'wordt-5'], ['heb-1', 'wordt-6']]) {
  await p.click(`label[for=${h}]`); await p.click(`label[for=${w}]`);
  console.log(await p.textContent('[data-bericht]'));
}
await p.click('label[for=heb-0]'); await p.click('label[for=wordt-1]');
console.log(decodeURIComponent(await p.getAttribute('[data-stuur]', 'href')));
await p.locator('#uw-verhaal').scrollIntoViewIfNeeded(); await p.waitForTimeout(1200); await p.screenshot({ path: 'shots/wow-1440.png' });
console.log('robots', await p.getAttribute('meta[name=robots]', 'content'), errs);
const links = await p.evaluate(() => [...new Set([...document.querySelectorAll('a')].map(a => a.href))]); console.log(links.join('\n'));
await b.close();
