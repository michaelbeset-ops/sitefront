import { chromium } from 'playwright';
const b = await chromium.launch();
for (const w of [1440, 390]) {
  const p = await b.newPage({ viewport: { width: w, height: 900 } });
  await p.goto('http://localhost:4478/sitefront/kila-zonweringen/#offerte', { waitUntil: 'networkidle' });
  await p.selectOption('[name=wat]', 'een nieuw zonneschermdoek');
  await p.selectOption('[name=maat]', 'ongeveer 4 meter breed');
  await p.fill('[name=plaats]', 'Dordrecht');
  await p.check('[name=boeken]');
  await p.waitForTimeout(1500);
  if (w === 1440) { console.log(await p.textContent('[data-bericht]')); console.log(decodeURIComponent(await p.getAttribute('[data-stuur]', 'href'))); }
  await p.locator('#offerte').screenshot({ path: `shots/wow-${w}.png` });
  await p.close();
}
await b.close();
