import { chromium } from 'playwright';
const b = await chromium.launch();
for (const w of [320, 390]) {
  const p = await (await b.newContext({ viewport: { width: w, height: 700 } })).newPage();
  await p.goto('http://localhost:4430/sitefront/ropapin-verpakkingen-ridderkerk/' + (process.argv[2] || ''), { waitUntil: 'networkidle' });
  console.log(w, await p.evaluate(() => document.documentElement.scrollWidth), JSON.stringify(await p.evaluate((w) => [...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > w + 1).slice(0, 8).map(e => e.tagName + '.' + (e.className?.baseVal ?? e.className).toString().slice(0, 50) + ' ' + Math.round(e.getBoundingClientRect().right) + ' ' + (e.textContent || '').trim().slice(0, 30)), w)));
}
await b.close();
