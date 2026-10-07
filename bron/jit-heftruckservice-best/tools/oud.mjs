import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch(); const log = [];
for (const [w,h,n] of [[1440,900,'d'],[390,844,'m']]) {
  const c = await b.newContext({ viewport: { width: w, height: h }, isMobile: w<500, hasTouch: w<500 }); const p = await c.newPage();
  await p.goto('http://jitheftruckservice.nl/', { waitUntil: 'load', timeout: 60000 }); await p.waitForTimeout(3000);
  const r = await p.evaluate(() => ({ url: location.href, sw: document.documentElement.scrollWidth, H: document.documentElement.scrollHeight,
    viewport: document.querySelector('meta[name=viewport]')?.content ?? null, tels: [...document.querySelectorAll('a[href^=tel]')].length,
    fontPx: getComputedStyle([...document.querySelectorAll('span')].find(s=>/Voor alles/.test(s.innerText))||document.body).fontSize,
    h1: document.querySelectorAll('h1').length, title: document.title }));
  log.push(n + ' ' + JSON.stringify(r));
  await p.screenshot({ path: `bron/web/oud-${n}.png` }); await p.screenshot({ path: `bron/web/oud-${n}-full.png`, fullPage: true }); await c.close();
}
const p = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
try { await p.goto('https://jitheftruckservice.nl/', { timeout: 20000 }); log.push('https -> ' + p.url()); } catch (e) { log.push('https FOUT: ' + e.message.split('\n')[0]); }
const q = await p.context().newPage(); await q.goto('http://jitheftruckservice.nl/jit-heftruckserviceverkoop.html'); await q.waitForTimeout(1500); await q.screenshot({ path: 'bron/web/oud-verkoop.png', fullPage: true });
await q.goto('http://jitheftruckservice.nl/jit-heftruckservice-contactformulier.html'); await q.waitForTimeout(5000); await q.screenshot({ path: 'bron/web/oud-contact.png', fullPage: true });
log.push('contactformulier frames: ' + q.frames().map(f=>f.url()).join(' , '));
fs.writeFileSync('bron/web/meting.txt', log.join('\n')); console.log(log.join('\n')); await b.close();
