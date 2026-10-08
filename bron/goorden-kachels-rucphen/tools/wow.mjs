import { chromium } from 'playwright';
const b = await chromium.launch();
for (const w of [1440, 390]) {
  const p = await b.newPage({ viewport: { width: w, height: 900 } });
  await p.goto('http://localhost:4477/sitefront/goorden-kachels-rucphen/#zoeken', { waitUntil: 'networkidle' });
  await p.selectOption('[data-staat]', 'nieuwe'); await p.selectOption('[data-brandstof]', 'hout'); await p.selectOption('[data-vorm]', 'inzet');
  await p.check('[data-langs]'); await p.waitForTimeout(1200);
  console.log(w, await p.textContent('[data-bericht]'), '| huur zichtbaar:', await p.isVisible('[data-huur]'));
  console.log(decodeURIComponent(await p.getAttribute('[data-stuur]', 'href')));
  await p.locator('#zoeken').screenshot({ path: `shots/wow-${w}.png` });
  await p.close();
}
await b.close();
