// Bewijs huidige situatie: stremme.nl (404) en de laatste gearchiveerde versie (april 2026).
import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch();
const log = [];
for (const [naam, u] of [['live', 'https://stremme.nl/'], ['archief-2026-04', 'https://web.archive.org/web/20260413172541/http://www.stremme.nl/']]) {
  for (const [w, h] of [[1440, 900], [390, 844]]) {
    const p = await (await b.newContext({ viewport: { width: w, height: h } })).newPage();
    const r = await p.goto(u, { waitUntil: 'load', timeout: 90000 }).catch((e) => ({ status: () => 'ERR ' + e.message }));
    await p.waitForTimeout(2500);
    await p.screenshot({ path: `bron/web/${naam}-${w}.png` });
    log.push(`${naam} ${w}: status ${r.status()} scrollWidth ${await p.evaluate(() => document.documentElement.scrollWidth)} titel "${await p.title()}"`);
    await p.context().close();
  }
}
fs.writeFileSync('bron/web/meting.txt', log.join('\n') + '\n');
console.log(log.join('\n'));
await b.close();
