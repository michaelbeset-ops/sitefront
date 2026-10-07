// Bewijs huidige site: screenshots 1440 + 390 en metingen
import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [w,h,n] of [[1440,900,'d'],[390,844,'m']]) {
  const c = await b.newContext({ viewport: { width: w, height: h }, isMobile: w<500, hasTouch: w<500, locale: 'nl-NL' }); const p = await c.newPage();
  await p.goto('https://www.afdekproducten.nl/', { waitUntil: 'load', timeout: 60000 }); await p.waitForTimeout(3000);
  const r = await p.evaluate(() => {
    const h1 = document.querySelector('h1');
    const fold = innerHeight;
    const imgsAbove = [...document.querySelectorAll('img')].filter(i => { const b = i.getBoundingClientRect(); return b.top < fold && b.bottom > 0 && b.width > 60; }).map(i => i.alt + ' ' + Math.round(i.getBoundingClientRect().width) + 'px');
    return { sw: document.documentElement.scrollWidth, H: document.documentElement.scrollHeight, h1: h1 && h1.innerText, h1n: document.querySelectorAll('h1').length,
      tels: [...document.querySelectorAll('a[href^=tel]')].map(a=>a.getAttribute('href')), wa: [...document.querySelectorAll('a[href*="wa.me"],a[href*="whatsapp"]')].length,
      imgsAbove, title: document.title, wiezijnwij: /wie zijn wij/i.test(document.body.innerText), nreq: performance.getEntriesByType('resource').length,
      bytes: Math.round(performance.getEntriesByType('resource').reduce((s,e)=>s+(e.transferSize||0),0)/1024) };
  });
  console.log(n, JSON.stringify(r));
  await p.screenshot({ path: `bron/web/oud-${n}.png` }); await p.screenshot({ path: `bron/web/oud-${n}-full.png`, fullPage: true }); await c.close(); }
await b.close();
