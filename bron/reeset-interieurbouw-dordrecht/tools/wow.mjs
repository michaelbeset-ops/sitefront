import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [w, h] of [[1440, 900], [390, 844]]) {
  const p = await b.newPage({ viewport: { width: w, height: h } });
  await p.goto('http://localhost:4442/sitefront/reeset-interieurbouw-dordrecht/#jouw-ruimte', { waitUntil: 'networkidle' });
  await p.evaluate(() => document.querySelectorAll('.rijs').forEach(e => e.classList.add('in')));
  await p.selectOption('select[name=ruimte]', 'een walk-in closet'); await p.selectOption('select[name=fase]', 'al een plattegrond of tekening');
  await p.fill('input[name=plaats]', 'Dordrecht'); await p.waitForTimeout(500);
  await p.locator('[data-zin] form').scrollIntoViewIfNeeded(); await p.waitForTimeout(300);
  await p.screenshot({ path: `shots/wow-${w}.png` });
  console.log(w, decodeURIComponent(await p.getAttribute('[data-stuur]', 'href')));
  await p.click('[data-f=werken]'); await p.waitForTimeout(300);
  console.log('zichtbaar na filter werken:', await p.locator('[data-soort]:visible').count());
}
await b.close();
