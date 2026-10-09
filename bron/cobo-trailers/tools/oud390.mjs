import { chromium, devices } from 'playwright';
const b = await chromium.launch();
for (const pad of ['', 'contact', 'blog']) {
  const ctx = await b.newContext({ ...devices['iPhone 13'], viewport: { width: 390, height: 844 }, locale: 'nl-NL' });
  const p = await ctx.newPage();
  await p.goto('https://www.expresskozijnen.nl/' + pad, { waitUntil: 'load', timeout: 60000 }).catch(() => {});
  await p.waitForTimeout(6000);
  const tag = pad || 'home';
  await p.screenshot({ path: `bron/web/oud-${tag}-390-iphone.png` });
  await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 400) { scrollTo(0, y); await new Promise(r => setTimeout(r, 150)); } scrollTo(0,0); });
  await p.waitForTimeout(1500);
  await p.screenshot({ path: `bron/web/oud-${tag}-390-iphone-full.png`, fullPage: true });
  console.log(tag, JSON.stringify(await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, h: document.documentElement.scrollHeight, vp: document.querySelector('meta[name=viewport]')?.content, tel: [...document.querySelectorAll('a[href^="tel:"]')].map(a => a.href), wa: [...document.querySelectorAll('a[href*="wa.me"],a[href*="whatsapp"]')].map(a => a.href), over: [...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > innerWidth + 2 && e.children.length===0 && e.textContent.trim()).slice(0,6).map(e => Math.round(e.getBoundingClientRect().right)+' '+e.textContent.trim().slice(0,40)), imgs: [...document.images].filter(i => i.naturalWidth > 300).map(i => i.currentSrc.split('/media/')[1]?.split('/')[0]) }))));
  await ctx.close();
}
await b.close();

