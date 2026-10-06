import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch(); const out = [];
for (const [w, h] of [[390, 844], [320, 640]]) {
  const p = await (await b.newContext({ viewport: { width: w, height: h }, isMobile: true, hasTouch: true })).newPage();
  await p.goto('https://www.vantim.nl/', { waitUntil: 'networkidle' });
  out.push(`vantim.nl @${w}: scrollWidth=${await p.evaluate(() => document.documentElement.scrollWidth)} scrollHeight=${await p.evaluate(() => document.documentElement.scrollHeight)}`);
  await p.context().close();
}
const p = await b.newPage(); await p.goto('https://www.vantim.nl/', { waitUntil: 'networkidle' });
out.push('adres-teksten: ' + (await p.evaluate(() => (document.body.innerText.match(/Hoogeinde.{0,20}/g) || []).join(' / '))));
out.push('header-tekst: ' + (await p.evaluate(() => [...document.querySelectorAll('h1,h2,h3,.header *')].map(e => e.innerText).filter(t => /Hoogeinde/.test(t)).slice(0, 3).join(' / '))));
fs.writeFileSync('bron/site/check.txt', out.join('\n')); console.log(out.join('\n')); await b.close();
