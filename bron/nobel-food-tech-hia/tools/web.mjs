import { chromium } from 'playwright'; import fs from 'node:fs';
const pages = ['', 'verpakkingsmachines', 'storingen-service-machines', 'aanbod-machines', 'contact'];
const b = await chromium.launch(); const log = [];
for (const [w,h,n] of [[1440,900,'d'],[390,844,'m']]) {
  const c = await b.newContext({ viewport: { width: w, height: h }, isMobile: w<500, hasTouch: w<500, deviceScaleFactor: 1, locale: 'nl-NL' });
  const p = await c.newPage();
  for (const pg of pages) {
    const slug = pg || 'home';
    await p.goto('https://www.nobelfoodtech.nl/' + pg, { waitUntil: 'networkidle', timeout: 60000 }).catch(()=>{}); await p.waitForTimeout(2500);
    for (let y=0;y<15;y++){ await p.mouse.wheel(0,800); await p.waitForTimeout(200);} await p.evaluate(()=>scrollTo(0,0)); await p.waitForTimeout(800);
    const r = await p.evaluate(() => {
      const vw = innerWidth; const over = [...document.querySelectorAll('body *')].filter(e => { const b = e.getBoundingClientRect(); return b.width>0 && b.right > vw + 2 && getComputedStyle(e).visibility!=='hidden'; }).slice(0,8).map(e => e.tagName + ' ' + (e.innerText||'').slice(0,50).replace(/\n/g,' ') + ' r=' + Math.round(e.getBoundingClientRect().right));
      return { url: location.href, title: document.title, sw: document.documentElement.scrollWidth, H: document.documentElement.scrollHeight,
      viewport: document.querySelector('meta[name=viewport]')?.content, tels: [...document.querySelectorAll('a[href^=tel]')].map(a=>a.getAttribute('href')),
      mails: [...document.querySelectorAll('a[href^=mailto]')].map(a=>a.getAttribute('href')), over,
      imgs: [...document.querySelectorAll('img')].map(i=>(i.currentSrc||i.src)+' '+i.naturalWidth+'x'+i.naturalHeight+' alt='+i.alt),
      bgs: [...document.querySelectorAll('*')].map(e=>getComputedStyle(e).backgroundImage).filter(x=>x.includes('url(')).map(x=>x.slice(0,200)) }; });
    log.push(n + ' ' + slug + ' ' + JSON.stringify(r, null, 1));
    if (n==='d') fs.writeFileSync(`bron/site/${slug}.txt`, await p.evaluate(()=>document.body.innerText));
    await p.screenshot({ path: `bron/web/oud-${slug}-${n}.png` }); await p.screenshot({ path: `bron/web/oud-${slug}-${n}-full.png`, fullPage: true });
  }
  await c.close();
}
fs.writeFileSync('bron/web/meting.txt', log.join('\n\n')); await b.close();
