import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage();
const errs = []; p.on('pageerror', (e) => errs.push(e.message));
await p.goto('http://localhost:4801/sitefront/kjs-rolluiken-ossendrecht/', { waitUntil: 'networkidle' });
for (const [r, pl, sz] of [['O', 'Slaapkamer', 'Zomer (21 juni)'], ['N', 'Terras of tuin', 'Voor- en najaar'], ['Z', 'Ramen woonkamer', 'Voor- en najaar']]) {
  await p.click(`#zonnewijzer label.zk:has(span:text-is("${r}"))`); await p.click(`#zonnewijzer label:has-text("${pl}")`); await p.click(`#zonnewijzer label:has-text("${sz}")`);
  console.log(r, pl, '|', await p.textContent('[data-uren]'), '|', await p.textContent('[data-uren-sub]'), '|', await p.textContent('[data-advies]'));
}
console.log(decodeURIComponent((await p.getAttribute('[data-zon-wa]', 'href')).split('text=')[1]));
await p.click('label.optie:has-text("Garagedeur")'); await p.fill('input[name=naam]', 'Jan'); await p.fill('input[name=plaats]', 'Woensdrecht');
console.log(decodeURIComponent((await p.getAttribute('[data-stuur-wa]', 'href')).split('text=')[1]));
console.log('errs', errs);
await b.close();
