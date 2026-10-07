import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [w, h] of [[1440, 900], [390, 844]]) {
  const p = await b.newPage({ viewport: { width: w, height: h } });
  await p.goto('http://localhost:4432/sitefront/machinefabriek-bgw-dordrecht/#aanvraag', { waitUntil: 'networkidle' });
  await p.evaluate(() => document.querySelectorAll('.rijs').forEach(e => e.classList.add('in')));
  await p.fill('input[name=lengte]', '8500'); await p.fill('input[name=diameter]', '420'); await p.fill('input[name=gewicht]', '3200');
  await p.check('input[value="Spiebaan steken"]'); await p.fill('input[name=naam]', 'Test BV');
  await p.waitForTimeout(700);
  await p.locator('[data-bank]').scrollIntoViewIfNeeded(); await p.waitForTimeout(300);
  await p.screenshot({ path: `shots/wow-ok-${w}.png` });
  console.log(w, decodeURIComponent(await p.getAttribute('[data-mail]', 'href')).slice(0, 400));
  await p.fill('input[name=lengte]', '13500'); await p.check('input[name=spoed][value=ja]'); await p.waitForTimeout(700);
  await p.locator('[data-bank]').scrollIntoViewIfNeeded();
  await p.screenshot({ path: `shots/wow-te-groot-${w}.png` });
  console.log(await p.textContent('[data-oordeel]'), await p.getAttribute('[data-bel]', 'class'));
}
await b.close();
