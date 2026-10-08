import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch();
for (const [u, n] of [['https://panaderoveenendaal.nl/', 'pv'], ['https://www.panadero-scheepjeshof-veenendaal.nl/', 'psv']]) {
  for (const [w, h, s] of [[1440, 900, 'd'], [390, 844, 'm']]) {
    const p = await (await b.newContext({ viewport: { width: w, height: h }, locale: 'nl-NL' })).newPage();
    try { await p.goto(u, { waitUntil: 'networkidle', timeout: 40000 }); } catch (e) { console.log('err', e.message.slice(0, 80)); }
    await p.waitForTimeout(3000);
    await p.screenshot({ path: `bron/web/${n}-${s}.png` });
    await p.screenshot({ path: `bron/web/${n}-${s}-full.png`, fullPage: true });
    const info = await p.evaluate(() => ({ url: location.href, title: document.title, sw: document.documentElement.scrollWidth, H: document.documentElement.scrollHeight, links: [...document.querySelectorAll('a[href]')].map(a => a.href).filter((v, i, a) => a.indexOf(v) === i).slice(0, 60), text: document.body.innerText.slice(0, 6000) }));
    fs.writeFileSync(`bron/web/${n}-${s}.json`, JSON.stringify(info, null, 1));
    console.log(n, s, info.url, info.title, 'sw', info.sw, 'H', info.H);
    await p.context().close();
  }
}
await b.close();
