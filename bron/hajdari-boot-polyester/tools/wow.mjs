import { chromium } from 'playwright';
const b = await chromium.launch();
for (const w of [390, 1440]) {
  const p = await (await b.newContext({ viewport: { width: w, height: 900 } })).newPage();
  await p.goto('http://127.0.0.1:4494/sitefront/hajdari-boot-polyester/#schade', { waitUntil: 'networkidle' });
  await p.click('path[data-zone="Waterlijn"]'); await p.click('path[data-zone="Romp"]');
  await p.fill('#boot', 'Bayliner 2855, 9 meter'); await p.selectOption('#wat', 'Polyester- of gelcoatwerk');
  await p.fill('#toel', 'Stuk gelcoat beschadigd bij het aanleggen');
  await p.waitForTimeout(400);
  console.log(w, decodeURIComponent(await p.getAttribute('[data-stuur]', 'href')));
  await p.locator('#schadeform').scrollIntoViewIfNeeded(); await p.evaluate(() => document.querySelectorAll('.rijs').forEach(e => e.classList.add('in')));
  await p.locator('#schade').screenshot({ path: `shots/wow-${w}.png` });
}
await b.close();
