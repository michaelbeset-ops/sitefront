import { chromium } from 'playwright';
const b = await chromium.launch();
const u = 'https://www.google.com/maps/place/%C3%A8nz.+FAIRWEAR/@52.2119269,5.2865901,17z/data=!4m6!3m5!1s0x47c64039c2b72899:0x9f88cb0b3ad2c839!8m2!3d52.2119269!4d5.2865901!16s%2Fg%2F11c55rn5yx?hl=nl';
for (const [w, h, n] of [[1440, 900, 'google-profiel-1440'], [390, 844, 'google-profiel-390']]) {
  const p = await (await b.newContext({ viewport: { width: w, height: h }, locale: 'nl-NL' })).newPage();
  await p.goto(u, { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(2500);
  for (const t of ['Alles afwijzen', 'Reject all']) { const k = p.getByRole('button', { name: t }).first(); if (await k.count()) { await k.click().catch(() => {}); break; } }
  await p.waitForTimeout(5000);
  await p.screenshot({ path: `bron/web/${n}.png` });
  const txt = await p.evaluate(() => document.body.innerText);
  console.log(n, /Website toevoegen/.test(txt) ? 'WEBSITE TOEVOEGEN gevonden' : 'geen tekst gevonden', /Bezoek de website|Website:/.test(txt) ? 'MAAR websiteknop?' : '');
}
await b.close();
