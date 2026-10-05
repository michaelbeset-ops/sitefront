import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch();
const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1440, height: 900 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' });
const p = await ctx.newPage();
fs.mkdirSync('bron/site', { recursive: true });
const start = 'https://www.goudsmederijleerdam.nl/';
const r = await p.goto(start, { waitUntil: 'networkidle' }); console.log('status', r.status(), p.url());
await p.waitForTimeout(2000);
const links = await p.evaluate(() => [...document.querySelectorAll('a')].map(a => a.href + ' | ' + a.innerText.trim().slice(0,40)));
fs.writeFileSync('bron/site/links.txt', [...new Set(links)].join('\n'));
const pages = [...new Set(links.map(l => l.split(' | ')[0].split('#')[0]).filter(u => u.includes('goudsmederijleerdam.nl')))];
console.log(pages);
const imgs = new Set();
let i = 0;
for (const u of pages) {
  await p.goto(u, { waitUntil: 'networkidle' }).catch(e => console.log('ERR', u)); await p.waitForTimeout(1500);
  await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 500) { scrollTo(0, y); await new Promise(r => setTimeout(r, 120)); } });
  i++;
  const txt = await p.evaluate(() => document.body.innerText);
  fs.writeFileSync(`bron/site/p${i}.txt`, u + '\n\n' + txt);
  await p.screenshot({ path: `bron/site/p${i}.png`, fullPage: true });
  (await p.evaluate(() => [...document.querySelectorAll('img')].map(im => (im.currentSrc || im.src) + ' | ' + im.naturalWidth + 'x' + im.naturalHeight + ' | ' + (im.alt||'')))).forEach(x => imgs.add(x));
  (await p.evaluate(() => [...document.querySelectorAll('*')].map(e => getComputedStyle(e).backgroundImage).filter(x => x.startsWith('url')))).forEach(x => imgs.add(x));
}
fs.writeFileSync('bron/site/imgs.txt', [...imgs].join('\n'));
const html = await (await fetch(start)).text(); fs.writeFileSync('bron/site/home.html', html);
await b.close();
