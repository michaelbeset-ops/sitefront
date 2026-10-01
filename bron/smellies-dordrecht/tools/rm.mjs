import { chromium } from 'playwright';
const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await (await b.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' })).newPage();
await p.goto('http://localhost:4581/sitefront/smellies-dordrecht/', { waitUntil: 'networkidle' }); await p.waitForTimeout(2000);
const a = await p.screenshot(); await p.waitForTimeout(1500); const a2 = await p.screenshot({ path: 'shots/_reduced.png' });
console.log('reduced: canvas aan', await p.evaluate(() => document.querySelector('[data-smelt]').classList.contains('aan')), 'stil:', a.equals(a2));
await p.keyboard.press('Tab'); await p.keyboard.press('Tab'); await p.keyboard.press('Tab');
const f = await p.evaluate(() => { const e = document.activeElement; const s = getComputedStyle(e); return e.textContent.trim().slice(0, 30) + ' | ' + s.outlineStyle + ' ' + s.outlineWidth; });
console.log('focus:', f); await p.screenshot({ path: 'shots/_focus.png', clip: { x: 0, y: 0, width: 700, height: 120 } });
const q = await b.newPage({ viewport: { width: 320, height: 640 } });
for (const pad of ['', 'privacy/']) { await q.goto('http://localhost:4581/sitefront/smellies-dordrecht/' + pad, { waitUntil: 'networkidle' }); console.log(pad || 'home', 'sw320', await q.evaluate(() => document.documentElement.scrollWidth), 'h1', await q.evaluate(() => document.querySelectorAll('h1').length)); }
await q.screenshot({ path: 'shots/_privacy-320.png', fullPage: true });
await b.close();
