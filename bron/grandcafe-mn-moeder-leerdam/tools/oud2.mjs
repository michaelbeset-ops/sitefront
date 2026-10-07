import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [w, h] of [[1440, 900], [390, 844]]) {
  const p = await (await b.newContext({ viewport: { width: w, height: h } })).newPage();
  await p.goto('https://www.grandcafemnmoeder.nl/', { waitUntil: 'networkidle' }).catch(()=>{});
  const r = await p.evaluate(() => { const H = document.documentElement.scrollHeight; const n = (document.body.innerText.match(/Deprecated/g)||[]).length; const el = [...document.querySelectorAll('h1,h2,h3,a,div')].find(e => /Welkom bij Grand/.test(e.textContent) && e.children.length < 3); const logo = document.querySelector('img[src*=logo]'); return { H, n, welkom: el ? el.getBoundingClientRect().top + scrollY : null, logo: logo ? logo.getBoundingClientRect().top + scrollY : null }; });
  console.log(w, JSON.stringify(r));
  if (r.welkom) { await p.evaluate((y) => scrollTo(0, y - 300), r.welkom); await p.waitForTimeout(800); await p.screenshot({ path: `bron/web/oud-${w}-inhoud.png` }); }
}
await b.close();
