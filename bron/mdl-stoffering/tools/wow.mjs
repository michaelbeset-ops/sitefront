import { chromium } from 'file:///C:/Users/Micha/Downloads/Sitefront/werkwijze/tools/node_modules/playwright/index.mjs';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 1440, height: 1000 } })).newPage();
await p.goto('http://127.0.0.1:4532/sitefront/mdl-stoffering/#aanvraag', { waitUntil: 'networkidle' });
const box = p.locator('[data-plan] .snede').first();
for (const [w, x] of [['trap', 'open trap'], ['karpet'], ['raam'], ['marmoleum'], ['tapijt']]) {
  await p.locator(`input[name=wat][value="${w}"]`).check({ force: true });
  if (x) await p.locator(`input[name=trap][value="${x}"]`).check({ force: true });
  if (w === 'raam') await p.fill('#ramen', '3');
  await p.waitForTimeout(200); await box.screenshot({ path: `shots/wow-${w}.png` });
  console.log(w, (await p.locator('[data-verstuur]').getAttribute('href')).slice(0, 200));
}
await b.close();
