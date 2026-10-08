import { chromium } from 'playwright'; import fs from 'node:fs';
const out = 'bron/web'; const b = await chromium.launch();
for (const u of ['https://by-erik.nl/', 'http://www.by-erik.nl/', 'https://www.by-erik.nl/']) {
  for (const [w, h, tag] of [[390, 844, 'm'], [1440, 900, 'd']]) {
    const c = await b.newContext({ viewport: { width: w, height: h }, isMobile: w < 500, deviceScaleFactor: 1, ignoreHTTPSErrors: true });
    const p = await c.newPage(); const name = u.replace(/https?:\/\//, '').replace(/[\/:]/g, '_') + (u.startsWith('https') ? 'S' : 'H');
    try { const r = await p.goto(u, { waitUntil: 'networkidle', timeout: 30000 }); await p.waitForTimeout(2000);
      console.log(u, tag, r.status(), p.url(), await p.evaluate(() => [document.title, document.documentElement.scrollWidth, document.body.innerText.slice(0, 400).replace(/\s+/g, ' ')]));
      await p.screenshot({ path: `${out}/${name}-${tag}.png` }); await p.screenshot({ path: `${out}/${name}-${tag}-full.png`, fullPage: true });
      if (tag === 'd') fs.writeFileSync(`${out}/${name}.txt`, await p.evaluate(() => document.body.innerText));
    } catch (e) { console.log(u, tag, 'ERR', e.message.slice(0, 200)); }
    await c.close(); } }
await b.close();
