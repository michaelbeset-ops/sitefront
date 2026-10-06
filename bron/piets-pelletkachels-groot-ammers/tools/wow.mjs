import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await p.goto('http://localhost:4404/sitefront/piets-pelletkachels-groot-ammers/#kiezen', { waitUntil: 'networkidle' });
for (const id of ['hout', 'koken', 'buiten']) {
  await p.click(`[data-keuze="${id}"]`); await p.waitForTimeout(300);
  const vis = await p.evaluate(() => [...document.querySelectorAll('[data-uitkomst]')].filter(e => !e.hidden).map(e => e.dataset.uitkomst + ' -> ' + decodeURIComponent(e.querySelector('a[href*="wa.me"]').href)));
  console.log(id, vis);
}
await p.locator('#kiezen').screenshot({ path: 'shots/wow-1440.png' });
await b.close();
