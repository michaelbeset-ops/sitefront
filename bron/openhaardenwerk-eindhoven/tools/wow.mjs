import { chromium } from 'playwright';
const b = await chromium.launch();
for (const w of [320, 390, 1440]) {
  const p = await (await b.newContext({ viewport: { width: w, height: 900 } })).newPage();
  await p.goto('http://localhost:4425/sitefront/openhaardenwerk-eindhoven/', { waitUntil: 'networkidle' });
  const n = await p.locator('#k-type option').count(); let max = 0;
  for (let i = 0; i < n; i++) { await p.selectOption('#k-type', { index: i }); for (const k of [0,1,2]) { await p.selectOption('#k-kanaal', { index: k }); max = Math.max(max, await p.evaluate(() => document.documentElement.scrollWidth)); } }
  await p.selectOption('#k-type', { index: 8 }); await p.selectOption('#k-plek', { index: 2 }); await p.selectOption('#k-kanaal', { index: 0 });
  const href = await p.getAttribute('[data-kiezer-wa]', 'href'); const uit = await p.textContent('[data-uitleg]');
  await p.locator('#kiezen').screenshot({ path: `shots/wow-${w}.png` });
  console.log(w, 'maxSW', max, decodeURIComponent(href.split('text=')[1]), '|', uit);
}
await b.close();
