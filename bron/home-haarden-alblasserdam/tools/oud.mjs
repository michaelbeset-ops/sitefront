import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [w, h] of [[390, 844], [1440, 900]]) {
  const p = await (await b.newContext({ viewport: { width: w, height: h }, locale: 'nl-NL' })).newPage();
  const fails = []; p.on('requestfailed', r => fails.push(r.url())); p.on('response', r => { if (r.status() >= 400) fails.push(r.status() + ' ' + r.url()); });
  await p.goto('https://home-haarden.nl/', { waitUntil: 'networkidle' }); await p.waitForTimeout(2500);
  await p.screenshot({ path: `bron/oud-view-${w}.png` });
  const info = await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, vp: document.querySelector('meta[name=viewport]')?.content,
    icons: [...document.querySelectorAll('a')].filter(a => !a.innerText.trim() && a.querySelector('i,span[class*=icon]')).map(a => a.href + ' ' + getComputedStyle(a.querySelector('i,span')).fontFamily).slice(0, 12) }));
  console.log(w, JSON.stringify(info), '\nFAILS', fails.slice(0, 15).join('\n'));
}
await b.close();
