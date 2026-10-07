// Screenshot van de router: Reparatie > Dordrecht, en Elektro, op 1440 en 390.
import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [w, h] of [[1440, 1000], [390, 844]]) {
  const p = await b.newPage({ viewport: { width: w, height: h } });
  await p.goto('http://localhost:4425/sitefront/kooiman-marine-group/#helpen', { waitUntil: 'networkidle' });
  await p.click('[data-kies="reparatie"]'); await p.waitForTimeout(500);
  await p.click('[data-werf="hoebee"]'); await p.waitForTimeout(700);
  if (w < 500) await p.locator('#router-uitkomst').screenshot({ path: `shots/wow-reparatie-${w}.png` });
  else await p.locator('#helpen').screenshot({ path: `shots/wow-reparatie-${w}.png` });
  await p.click('[data-kies="elektro"]'); await p.waitForTimeout(600);
  await p.locator('#router-uitkomst').screenshot({ path: `shots/wow-elektro-${w}.png` });
  console.log(w, await p.evaluate(() => [...document.querySelectorAll('[data-paneel="elektro"] a')].map((a) => a.getAttribute('href')).join(' | ')));
}
await b.close();
