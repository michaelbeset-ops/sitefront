import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [w, h] of [[1440, 1000], [390, 844]]) {
  const p = await (await b.newContext({ viewport: { width: w, height: h } })).newPage();
  await p.goto('http://127.0.0.1:4485/sitefront/goudse-camperbouw/#bouwen', { waitUntil: 'networkidle' });
  for (const v of ['raam', 'keuken', 'bed', 'tafel']) await p.locator(`input[name=deel][value=${v}]`).check({ force: true });
  await p.fill('#bus', 'VW Transporter T5, 2008'); await p.fill('#naam', 'Sanne');
  await p.locator('#tekening').scrollIntoViewIfNeeded(); await p.waitForTimeout(800);
  await p.locator('#tekening svg.tek').screenshot({ path: `shots/wow-tekening-${w}.png` });
  await p.locator('#tekening').screenshot({ path: `shots/wow-${w}.png` });
  console.log(w, decodeURIComponent((await p.locator('[data-stuur]').getAttribute('href')).split('text=')[1]));
}
await b.close();
