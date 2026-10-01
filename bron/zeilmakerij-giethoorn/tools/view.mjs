// Eerste schermen 1440x900 en 390x844 (view-*.png) voor de zelfkritiek. Args: url outDir
import { chromium } from 'playwright';
const [,, base, out] = process.argv;
const b = await chromium.launch();
for (const [w, h] of [[1440, 900], [390, 844]]) {
  const p = await (await b.newContext({ viewport: { width: w, height: h } })).newPage();
  await p.goto(base, { waitUntil: 'networkidle' });
  await p.waitForTimeout(5000);
  await p.screenshot({ path: `${out}/view-${w}.png` });
  await p.context().close();
}
await b.close();
