import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [w, h] of [[1440, 1000], [390, 844]]) {
  const p = await (await b.newContext({ viewport: { width: w, height: h } })).newPage();
  await p.goto('http://127.0.0.1:4486/sitefront/peets-v2-service/#werkbon', { waitUntil: 'networkidle' });
  for (const v of ['Onderhoud', 'Ontsteking']) await p.locator(`input[name=klus][value="${v}"]`).check({ force: true });
  await p.fill('#model', 'Dyna, 2004'); await p.fill('#wat', 'Tikt bij koude start'); await p.fill('#naam', 'Sanne');
  await p.locator('[data-werkbon]').scrollIntoViewIfNeeded(); await p.waitForTimeout(900);
  await p.locator('[data-werkbon]').screenshot({ path: `shots/wow-${w}.png` });
  console.log(w, decodeURIComponent((await p.locator('[data-stuur]').getAttribute('href')).split('text=')[1]));
}
await b.close();
