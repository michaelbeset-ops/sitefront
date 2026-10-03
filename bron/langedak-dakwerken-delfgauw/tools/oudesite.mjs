// Huidige site langedak.nl op mobiel bekijken: scrollWidth, afgesneden elementen, screenshots.
import { chromium } from 'playwright';
const b = await chromium.launch();
for (const w of [441, 390, 360]) {
  const ctx = await b.newContext({ viewport: { width: w, height: 860 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2, userAgent: 'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36' });
  const p = await ctx.newPage();
  await p.goto('https://www.langedak.nl/', { waitUntil: 'networkidle' }); await p.waitForTimeout(1500);
  const info = await p.evaluate(() => {
    const W = innerWidth, uit = [];
    document.querySelectorAll('body *').forEach((e) => { const r = e.getBoundingClientRect(); if (r.width && (r.right > W + 2 || r.left < -2) && getComputedStyle(e).visibility !== 'hidden') uit.push(`${e.tagName}.${(e.className+'').slice(0,40)} L${Math.round(r.left)} R${Math.round(r.right)} "${(e.innerText||'').slice(0,40).replace(/\n/g,' ')}"`); });
    const h = [...document.querySelectorAll('h1,h2,h3')].map((e) => { const r = e.getBoundingClientRect(); return `${e.tagName} "${e.innerText.slice(0,40)}" L${Math.round(r.left)} R${Math.round(r.right)} fs${getComputedStyle(e).fontSize}`; });
    return { sw: document.documentElement.scrollWidth, bw: document.body.scrollWidth, H: document.documentElement.scrollHeight, uit: uit.slice(0, 25), h, tel: [...document.querySelectorAll('a[href^="tel:"]')].map(a=>a.href), wa: !!document.querySelector('a[href*="wa.me"],a[href*="whatsapp"]') };
  });
  console.log(w, JSON.stringify(info, null, 1));
  await p.screenshot({ path: `bron/oud-${w}-view.png` });
  await p.screenshot({ path: `bron/oud-${w}-full.png`, fullPage: true });
  await ctx.close();
}
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto('https://www.langedak.nl/', { waitUntil: 'networkidle' }); await p.waitForTimeout(1000);
await p.screenshot({ path: 'bron/oud-1440-view.png' }); await p.screenshot({ path: 'bron/oud-1440-full.png', fullPage: true });
await b.close();
