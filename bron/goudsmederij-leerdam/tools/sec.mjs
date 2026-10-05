import { chromium } from 'playwright';
const b = await chromium.launch();
for (const w of [1440, 390]) {
const p = await b.newPage({ viewport: { width: w, height: 900 } });
await p.goto('http://localhost:4393/sitefront/goudsmederij-leerdam/', { waitUntil: 'networkidle' });
console.log(w, (await p.evaluate(() => [...document.querySelectorAll('body > *, main > section, footer')].filter(e=>e.offsetHeight>0).map(e => (e.id || e.tagName + '.' + String(e.className).slice(0, 20)) + ':' + e.offsetHeight))).join(' | '));
}
await b.close();
