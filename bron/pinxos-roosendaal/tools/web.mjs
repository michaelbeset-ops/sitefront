// Bewijs: huidige pinxos.nl op 390 en 1440, plus Google-profiel waarvan "Tafel reserveren" naar pinxos.nl wijst.
import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch();
for (const [w, h] of [[390, 844], [1440, 900]]) {
  const p = await (await b.newContext({ viewport: { width: w, height: h }, isMobile: w < 500, deviceScaleFactor: 1 })).newPage();
  await p.goto('http://www.pinxos.nl/', { waitUntil: 'load' }); await p.waitForTimeout(1000);
  await p.screenshot({ path: `bron/web/oud-${w}.png` });
  if (w === 390) fs.writeFileSync('bron/web/oud.html', await p.content());
  console.log(w, p.url(), await p.title());
}
await b.close();
