import { chromium } from 'playwright'; import fs from 'node:fs';
const D = 'bron/';
const b = await chromium.launch();
const pages = ['', 'restauratie', 'informatie', 'contact'];
const p = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
const imgs = new Set(); const links = new Set();
for (const n of pages) {
  const r = await p.goto('https://kuiperuurwerktechniek.nl/' + n, { waitUntil: 'networkidle', timeout: 60000 });
  await p.waitForTimeout(1000);
  const nm = n || 'home';
  fs.writeFileSync(D + 'site/' + nm + '.txt', await p.evaluate(() => document.body.innerText));
  fs.writeFileSync(D + 'site/' + nm + '.html', await p.content());
  (await p.evaluate(() => [...document.querySelectorAll('img')].map(i => [i.currentSrc || i.src, i.naturalWidth, i.naturalHeight, i.alt].join(' | ')))).forEach(x => imgs.add(nm + ' :: ' + x));
  (await p.evaluate(() => [...document.querySelectorAll('a[href]')].map(a => a.href + ' | ' + a.innerText.trim().replace(/\s+/g, ' ')))).forEach(x => links.add(x));
  console.log(nm, r.status(), await p.title());
  for (const [w, h] of [[390, 844], [1440, 900]]) {
    const q = await (await b.newContext({ viewport: { width: w, height: h }, isMobile: w < 500, hasTouch: w<500, deviceScaleFactor: 1 })).newPage();
    await q.goto('https://kuiperuurwerktechniek.nl/' + n, { waitUntil: 'networkidle', timeout: 60000 }); await q.waitForTimeout(1500);
    await q.screenshot({ path: `${D}web/oud-${nm}-${w}.png` });
    await q.screenshot({ path: `${D}web/oud-${nm}-${w}-full.png`, fullPage: true });
    console.log(' ', w, await q.evaluate(() => [document.documentElement.scrollWidth, document.body.scrollHeight, getComputedStyle(document.body).fontSize, location.protocol]));
    await q.close();
  }
}
fs.writeFileSync(D + 'site/imgs.txt', [...imgs].join('\n'));
fs.writeFileSync(D + 'site/links.txt', [...links].join('\n'));
await b.close();
