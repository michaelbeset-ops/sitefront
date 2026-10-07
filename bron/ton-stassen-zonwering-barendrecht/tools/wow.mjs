import { chromium } from 'playwright';
const b = await chromium.launch();
for (const w of [1440, 390]) {
  const p = await b.newPage({ viewport: { width: w, height: 900 } });
  await p.goto('http://localhost:4444/sitefront/ton-stassen-zonwering-barendrecht/', { waitUntil: 'networkidle' });
  await p.evaluate(() => document.querySelectorAll('.rijs').forEach(e => e.classList.add('in')));
  await p.fill('[data-maat-b]', '320'); await p.fill('[data-maat-h]', '210');
  await p.waitForTimeout(600);
  await p.locator('#rolluiken').screenshot({ path: `shots/wow-rolluik-${w}.png` });
  console.log(await p.textContent('[data-maat-uitkomst]'));
  await p.click('[data-neem-maat]'); await p.waitForTimeout(800);
  await p.fill('[data-z="aantal"]', '5'); await p.fill('[data-z="plaats"]', 'Rhoon'); await p.waitForTimeout(300);
  await p.locator('#offerte').screenshot({ path: `shots/wow-offerte-${w}.png` });
  console.log(await p.textContent('[data-bericht]')); console.log(decodeURIComponent(await p.getAttribute('[data-stuur]', 'href')));
}
await b.close();
