import { chromium, devices } from 'playwright'; import fs from 'node:fs';
const urls = [['js-home', 'https://www.janslooter.nl/'], ['js-occasions', 'https://www.janslooter.nl/occasions.html'], ['mcp-home', 'https://www.mc-p.nl/']];
const b = await chromium.launch(); const out = {};
for (const [tag, u] of urls) {
  for (const [w, h] of [[1440, 900], [390, 844]]) {
    const opts = w < 500 ? { ...devices['iPhone 13'], viewport: { width: 390, height: 844 }, locale: 'nl-NL' } : { viewport: { width: w, height: h }, locale: 'nl-NL' };
    const ctx = await b.newContext(opts); const p = await ctx.newPage();
    const fails = []; p.on('response', (r) => { if (r.status() >= 400) fails.push(r.status() + ' ' + r.url()); });
    await p.goto(u, { waitUntil: 'networkidle', timeout: 60000 }).catch(() => {});
    await p.waitForTimeout(3000);
    await p.screenshot({ path: `bron/web/oud-${tag}-${w}.png` });
    await p.screenshot({ path: `bron/web/oud-${tag}-${w}-full.png`, fullPage: true });
    const info = await p.evaluate(() => ({ title: document.title, sw: document.documentElement.scrollWidth, h: document.documentElement.scrollHeight, vp: document.querySelector('meta[name=viewport]')?.content || 'GEEN', tel: [...document.querySelectorAll('a[href^="tel:"]')].length, mail: [...document.querySelectorAll('a[href^="mailto:"]')].length, wa: [...document.querySelectorAll('a[href*="wa.me"],a[href*="whatsapp"]')].length, fs: getComputedStyle(document.querySelector('#tekst') || document.body).fontSize, h1: document.querySelectorAll('h1').length, https: location.protocol }));
    info.fails = fails; out[tag + '@' + w] = info;
    console.log(tag, w, JSON.stringify(info));
    await ctx.close();
  }
}
fs.writeFileSync('bron/web/meting.json', JSON.stringify(out, null, 1));
await b.close();
