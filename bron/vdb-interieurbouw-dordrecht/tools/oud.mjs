import { chromium } from 'playwright';
const out = 'bron/web/';
const b = await chromium.launch();
for (const [url, n] of [['https://vdb-interieurbouw.nl/', 'oud-vdb-interieurbouw'], ['https://www.vdbinterieurbouw.nl/', 'oud-vdbinterieurbouw-500']]) for (const [w, h] of [[1440, 900], [390, 844]]) {
  const ctx = await b.newContext({ viewport: { width: w, height: h }, isMobile: w < 500, hasTouch: w < 500, locale: 'nl-NL', ignoreHTTPSErrors: true });
  const p = await ctx.newPage(); const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('console', m => m.type() === 'error' && errs.push(m.text().slice(0, 120)));
  const r = await p.goto(url, { waitUntil: 'networkidle', timeout: 60000 }).catch(e => null);
  await p.waitForTimeout(2500);
  await p.screenshot({ path: `${out}${n}-${w}.png` });
  await p.screenshot({ path: `${out}${n}-${w}-full.png`, fullPage: true }).catch(() => {});
  console.log(n, w, r && r.status(), JSON.stringify(await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, H: document.documentElement.scrollHeight, title: document.title, lorem: (document.body.innerText.match(/lorem ipsum/gi) || []).length, eng: (document.body.innerText.match(/We Are Designers|Some Facts|Our Numbers|Keep In Touch/g) || []).length, bad: (document.body.innerText.match(/�/g) || []).length }))), errs.slice(0, 4).join(' | '));
  await ctx.close();
}
await b.close();
