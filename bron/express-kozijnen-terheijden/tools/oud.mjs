import { chromium } from 'playwright'; import fs from 'node:fs';
const pages = ['', 'kozijnen','kunststofkozijnen','aluminium','hout','deuren','voordeuren','schuifdeuren','rolluiken','vliegenramen-horren','vensterbanken','glas','sierbeglazing','about-8','contact','visualisatie-uw-huis','andere','deuren-panelen','houten-deuren','kopia-kunststof-deuren','platen','schuifsystemen-houtsystemen','blog','catalog-download-products','p','kopie-van-ideal-4000','kopie-van-eko-sun-6','kopie-van-naturo-68','kopie-van-imperial','kopie-van-superial'];
const b = await chromium.launch(); const out = {};
for (const pad of pages) {
  for (const [w, h] of [[1440, 900], [390, 844]]) {
    if (w === 390 && !['', 'kozijnen', 'contact', 'about-8'].includes(pad)) continue;
    const ctx = await b.newContext({ viewport: { width: w, height: h }, isMobile: w < 500, hasTouch: w < 500, locale: 'nl-NL' });
    const p = await ctx.newPage();
    await p.goto('https://www.expresskozijnen.nl/' + pad, { waitUntil: 'networkidle', timeout: 60000 }).catch(() => {});
    await p.waitForTimeout(2500);
    const tag = pad || 'home';
    if (['', 'kozijnen', 'contact', 'about-8'].includes(pad)) { await p.screenshot({ path: `bron/web/oud-${tag}-${w}.png` }); await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 500) { scrollTo(0, y); await new Promise(r => setTimeout(r, 120)); } }); await p.waitForTimeout(1000); await p.screenshot({ path: `bron/web/oud-${tag}-${w}-full.png`, fullPage: true }); }
    const info = await p.evaluate(() => ({ title: document.title, sw: document.documentElement.scrollWidth, h: document.documentElement.scrollHeight, vp: document.querySelector('meta[name=viewport]')?.content || 'GEEN', tel: [...document.querySelectorAll('a[href^="tel:"]')].map(a=>a.href), wa: [...document.querySelectorAll('a[href*="wa.me"],a[href*="whatsapp"]')].map(a=>a.href), text: document.body.innerText, imgs: [...document.images].filter(i => i.naturalWidth > 200).map(i => i.naturalWidth + 'x' + i.naturalHeight + ' ' + (i.alt||'') + ' | ' + i.currentSrc) }));
    out[tag + '@' + w] = info;
    console.log(tag, w, info.title, 'sw', info.sw, 'h', info.h, 'tel', info.tel.length, 'wa', info.wa.length);
    await ctx.close();
  }
}
fs.writeFileSync('bron/site/crawl.json', JSON.stringify(out, null, 1));
await b.close();
