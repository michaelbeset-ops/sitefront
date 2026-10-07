import { chromium } from 'playwright';
const b = await chromium.launch();
for (const w of [1440, 390]) {
  const p = await (await b.newContext({ viewport: { width: w, height: 900 } })).newPage();
  await p.goto('http://localhost:4431/sitefront/pallethandel-labeda-klundert/#aanvraag', { waitUntil: 'networkidle' });
  await p.check('input[value=verkopen]');
  await p.selectOption('[data-soort]', { index: 0 });
  await p.fill('input[name=aantal]', '120'); await p.fill('input[name=plaats]', 'Roosendaal');
  await p.evaluate(() => document.querySelectorAll('.rijs').forEach(e => e.classList.add('in')));
  await p.waitForTimeout(500);
  await (await p.$('#aanvraag')).screenshot({ path: `shots/wow-${w}.png` });
  console.log(w, decodeURIComponent(await p.getAttribute('[data-wa]', 'href')));
  await p.context().close();
}
await b.close();
