import { chromium } from 'playwright';
const base = 'http://localhost:4581/sitefront/smellies-dordrecht/';
const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto(base, { waitUntil: 'networkidle' }); await p.waitForTimeout(2500);
const px = async () => p.evaluate(() => { const c = document.querySelector('[data-smelt]'); return c.classList.contains('aan') ? c.toDataURL().length : 'uit'; });
const a = await p.screenshot({ clip: { x: 0, y: 100, width: 400, height: 300 } }); await p.waitForTimeout(1500);
const a2 = await p.screenshot({ clip: { x: 0, y: 100, width: 400, height: 300 } });
console.log('canvas aan:', await p.evaluate(() => document.querySelector('[data-smelt]').classList.contains('aan')), 'beweegt:', !a.equals(a2));
console.log('kop vast bovenaan:', await p.evaluate(() => document.querySelector('[data-kop]').classList.contains('vast')));
await p.evaluate(() => document.getElementById('geuren').scrollIntoView()); await p.waitForTimeout(800);
console.log('kop vast na scroll:', await p.evaluate(() => document.querySelector('[data-kop]').classList.contains('vast')));
for (const f of ['fris', 'bloemig', 'zoet', 'houtig', 'alles']) {
  await p.click(`.filter[data-fam="${f}"]`); await p.waitForTimeout(900);
  console.log(f, await p.evaluate(() => [...document.querySelectorAll('.kaart')].filter((k) => getComputedStyle(k).display !== 'none').length), await p.textContent('[data-teller]'));
}
await p.hover('.kaart >> nth=2'); await p.waitForTimeout(800);
await p.screenshot({ path: 'shots/_hover.png', clip: { x: 0, y: 0, width: 1440, height: 900 } });
await p.evaluate(() => document.getElementById('zo-werkt-het').scrollIntoView()); 
for (const n of [1, 2, 3]) { await p.evaluate((n) => document.querySelector(`[data-stap-tekst="${n}"]`).scrollIntoView({ block: 'center' }), n); await p.waitForTimeout(1600); console.log('stap', n, await p.getAttribute('[data-tekening]', 'data-stap')); await p.screenshot({ path: `shots/_stap${n}.png` }); }
// links
const links = await p.evaluate(() => [...document.querySelectorAll('a[href]')].map((a) => a.getAttribute('href')));
const intern = [...new Set(links.filter((h) => h.includes('#')))];
for (const h of intern) { const id = h.split('#')[1]; console.log('anker', h, await p.evaluate((id) => !!document.getElementById(id), id)); }
console.log('h1', await p.evaluate(() => document.querySelectorAll('h1').length), 'shop-links', links.filter((h) => h.startsWith('https://www.smellies.nl/a-') || h.startsWith('https://www.smellies.nl/c-')).length);
const m = await b.newPage({ viewport: { width: 390, height: 844 } });
await m.goto(base, { waitUntil: 'networkidle' }); await m.click('[data-menu-knop]'); await m.waitForTimeout(500); await m.screenshot({ path: 'shots/_menu.png' });
await b.close();
