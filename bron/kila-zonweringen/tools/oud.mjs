import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [w, h, n] of [[1440, 900, 'oud-home-1440'], [390, 844, 'oud-home-390']]) {
  const p = await (await b.newContext({ viewport: { width: w, height: h }, isMobile: w < 500, hasTouch: w < 500 })).newPage();
  await p.goto('http://www.kila-zonweringen.nl/', { waitUntil: 'networkidle' });
  await p.screenshot({ path: `bron/web/${n}.png` });
  if (w === 1440) await p.screenshot({ path: `bron/web/${n}-full.png`, fullPage: true });
  console.log(n, JSON.stringify(await p.evaluate(() => {
    const vis = [...document.querySelectorAll('body *')].filter(e => e.childNodes.length && [...e.childNodes].some(c => c.nodeType === 3 && /Hier wordt de inhoud/.test(c.textContent))).map(e => { const r = e.getBoundingClientRect(); const cs = getComputedStyle(e); return { tag: e.tagName, x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), vis: cs.visibility, disp: cs.display, fs: cs.fontSize }; });
    const fs = [...document.querySelectorAll('p,td,span,a')].map(e => parseFloat(getComputedStyle(e).fontSize)).filter(Boolean);
    return { sw: document.documentElement.scrollWidth, vp: document.querySelector('meta[name=viewport]')?.content || 'GEEN viewport', tel: document.querySelectorAll('a[href^="tel:"]').length, wa: document.querySelectorAll('a[href*="wa.me"],a[href*="whatsapp"]').length, h: document.documentElement.scrollHeight, title: document.title, sjabloon: vis, tables: document.querySelectorAll('table').length, minFont: Math.min(...fs), adresBlokken: (document.body.innerText.match(/Sweelinckplantsoen/g) || []).length, imgs: [...document.images].map(i => i.naturalWidth + 'x' + i.naturalHeight).slice(0, 12) };
  })));
}
const p = await (await b.newContext()).newPage();
const r = await p.goto('https://www.kila-zonweringen.nl/').catch(e => ({ err: e.message.slice(0, 120) }));
console.log('https', r?.err || r?.status?.(), p.url());
await b.close();
