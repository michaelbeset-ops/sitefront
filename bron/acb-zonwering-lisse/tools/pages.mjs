import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch();
const p = await (await b.newContext({ locale: 'nl-NL', viewport: { width: 1400, height: 1000 } })).newPage();
const urls = process.argv.slice(2);
for (const u of urls) {
  try {
    await p.goto(u, { waitUntil: 'domcontentloaded', timeout: 40000 }); await p.waitForTimeout(1500);
    const name = u.replace(/https?:\/\/[^/]+\//, '').replace(/[^a-z0-9]+/gi, '_').slice(0, 60) || 'root';
    fs.writeFileSync(`bron/web/p_${name}.txt`, u + '\n' + await p.evaluate(() => (document.querySelector('#content-wrapper, main, #main') || document.body).innerText));
    console.log('ok', name);
  } catch (e) { console.log('fout', u, e.message); }
}
await b.close();
