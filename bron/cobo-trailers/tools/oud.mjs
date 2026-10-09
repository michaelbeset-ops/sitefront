import { chromium, devices } from 'playwright'; import fs from 'node:fs';
const pages = ['', 'aanbod-trailers/', 'paardentailer/', 'privacy-policy/', 'algemene-voorwaarden/'];
const b = await chromium.launch(); const out = {};
for (const pad of pages) {
  for (const [w, h] of [[1440, 900], [390, 844]]) {
    const opts = w < 500 ? { ...devices['iPhone 13'], viewport: { width: 390, height: 844 }, locale: 'nl-NL' } : { viewport: { width: w, height: h }, locale: 'nl-NL' };
    const ctx = await b.newContext(opts);
    const p = await ctx.newPage();
    const fails = []; p.on('requestfailed', (r) => fails.push(r.url())); p.on('response', (r) => { if (r.status() >= 400) fails.push(r.status() + ' ' + r.url()); });
    await p.goto('https://cobotrailers.nl/' + pad, { waitUntil: 'networkidle', timeout: 60000 }).catch(() => {});
    await p.waitForTimeout(3000);
    const tag = pad.replace(/\/$/, '') || 'home';
    await p.screenshot({ path: `bron/web/oud-${tag}-${w}.png` });
    await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 400) { scrollTo(0, y); await new Promise(r => setTimeout(r, 150)); } scrollTo(0, 0); });
    await p.waitForTimeout(1500);
    await p.screenshot({ path: `bron/web/oud-${tag}-${w}-full.png`, fullPage: true });
    const info = await p.evaluate(() => ({ title: document.title, sw: document.documentElement.scrollWidth, h: document.documentElement.scrollHeight, vp: document.querySelector('meta[name=viewport]')?.content || 'GEEN', tel: [...document.querySelectorAll('a[href^="tel:"]')].map(a => a.href), wa: [...document.querySelectorAll('a[href*="wa.me"],a[href*="whatsapp"]')].map(a => a.href), links: [...document.querySelectorAll('a')].map(a => a.textContent.trim().slice(0, 40) + ' -> ' + a.href), text: document.body.innerText, brokenImgs: [...document.images].filter(i => i.complete && i.naturalWidth === 0).map(i => i.src), imgs: [...document.images].filter(i => i.naturalWidth > 200).map(i => i.naturalWidth + 'x' + i.naturalHeight + ' ' + (i.alt || '') + ' | ' + i.currentSrc), iframes: [...document.querySelectorAll('iframe')].map(f => f.src) }));
    info.fails = fails;
    out[tag + '@' + w] = info;
    console.log(tag, w, info.title, 'sw', info.sw, 'h', info.h, 'vp', info.vp, 'tel', info.tel.length, 'wa', info.wa.length, 'broken', info.brokenImgs.length, 'fails', fails.length);
    await ctx.close();
  }
}
fs.writeFileSync('bron/site/crawl.json', JSON.stringify(out, null, 1));
await b.close();
