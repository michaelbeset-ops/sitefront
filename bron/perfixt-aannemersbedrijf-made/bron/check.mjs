import { chromium, devices } from 'playwright';
const b = await chromium.launch();
for (const [naam, opt] of [['mob', devices['iPhone 13']], ['desk', { viewport: { width: 1440, height: 900 } }]]) {
  const ctx = await b.newContext(opt); const p = await ctx.newPage();
  const t0 = Date.now(); await p.goto('http://www.perfixt.nl/', { waitUntil: 'networkidle' }); const ms = Date.now() - t0;
  await p.waitForTimeout(1500);
  const info = await p.evaluate(() => ({ url: location.href, title: document.title, vp: !!document.querySelector('meta[name=viewport]'), frames: document.querySelectorAll('frame,iframe').length, iw: innerWidth }));
  const fr = p.frames().find(f => f.url().includes('weebly'));
  const fi = fr ? await fr.evaluate(() => ({ sw: document.documentElement.scrollWidth, iw: innerWidth, h: document.documentElement.scrollHeight, imgs: [...document.images].length, tel: [...document.querySelectorAll('a[href^="tel:"]')].length, wa: [...document.querySelectorAll('a[href*="wa.me"],a[href*="whatsapp"]')].length, h1: [...document.querySelectorAll('h1,h2')].map(h=>h.innerText.trim()).slice(0,6), ft: document.body.innerText.slice(-200) })) : null;
  console.log(naam, ms + 'ms', JSON.stringify(info), JSON.stringify(fi));
  await p.screenshot({ path: `bron/huidig-${naam}.png` });
  await ctx.close();
}
// contactpagina: verplichte marketing-checkbox?
const p = await (await b.newContext(devices['iPhone 13'])).newPage();
await p.goto('https://perfixt.weebly.com/contact.html', { waitUntil: 'networkidle' });
console.log(await p.evaluate(() => [...document.querySelectorAll('input,textarea')].map(i => `${i.type}|${i.name}|req=${i.required || i.closest('.form-field')?.className?.includes('required')}|${i.closest('label,div')?.innerText?.slice(0,80)}`).join('\n')));
console.log(await p.evaluate(()=>document.querySelector('form')?.outerHTML.match(/checkbox[\s\S]{0,600}/)?.[0]));
await p.screenshot({ path: 'bron/huidig-contact-mob.png', fullPage: true });
await b.close();
