import { chromium } from 'playwright';
const b = await chromium.launch();
for (const w of [1440, 390]) {
  const p = await b.newPage({ viewport: { width: w, height: 900 } });
  await p.goto('http://127.0.0.1:4478/sitefront/express-kozijnen-terheijden/#offerte', { waitUntil: 'networkidle' });
  const r1 = p.locator('[data-posities] li').nth(0);
  await r1.locator('[data-b]').fill('120'); await r1.locator('[data-h]').fill('140'); await r1.locator('[data-n]').fill('3');
  await p.click('[data-erbij]'); const r2 = p.locator('[data-posities] li').nth(1);
  await r2.locator('[data-wat]').selectOption('voordeur'); await r2.locator('[data-mat]').selectOption('aluminium');
  await p.selectOption('[data-kleur]', 'antraciet'); await p.fill('[data-plaats]', 'Breda');
  await p.waitForTimeout(1200);
  console.log(w, decodeURIComponent((await p.getAttribute('[data-stuur]', 'href')).split('text=')[1]));
  await p.locator('#offerte').screenshot({ path: `shots/wow-${w}.png` });
  await p.close();
}
await b.close();
