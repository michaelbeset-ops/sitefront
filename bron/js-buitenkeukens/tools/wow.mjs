import { chromium } from 'playwright';
const b = await chromium.launch({ channel: 'chrome' });
for (const w of [1440, 390]) {
  const p = await (await b.newContext({ viewport: { width: w, height: 900 } })).newPage();
  await p.goto('http://127.0.0.1:4481/sitefront/js-buitenkeukens/#tekentafel', { waitUntil: 'networkidle' });
  await p.locator('[data-breedte]').fill('420');
  for (const v of ['kamado', 'boiler', 'inductie']) await p.locator(`input[value="${v}"]`).check({ force: true });
  await p.locator('input[name="koeling"][value="2"]').check({ force: true });
  await p.locator('input[name="front"][value="zwart"]').check({ force: true });
  await p.locator('input[name="plek"][value^="onder"]').check({ force: true });
  await p.locator('[data-plaats]').fill('Teststad'); await p.locator('[data-naam]').fill('Test');
  await p.waitForTimeout(300);
  await p.locator('[data-schets]').scrollIntoViewIfNeeded();
  await p.locator('[data-schets]').screenshot({ path: `shots/wow-schets-${w}.png` });
  console.log(w, decodeURIComponent((await p.locator('[data-stuur]').getAttribute('href')).split('text=')[1]));
  console.log('krap:', await p.locator('[data-krap]').textContent());
  await p.locator('[data-breedte]').fill('150'); await p.waitForTimeout(200);
  console.log('krap150:', await p.locator('[data-krap]').textContent());
  await p.locator('[data-schets]').screenshot({ path: `shots/wow-schets-150-${w}.png` });
}
await b.close();
