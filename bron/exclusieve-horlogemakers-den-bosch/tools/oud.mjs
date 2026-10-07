import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [w,h,n] of [[1440,900,'huidig-1440'],[390,844,'huidig-390']]) {
  const p = await (await b.newContext({ viewport: { width: w, height: h } })).newPage();
  await p.goto('https://exclusievehorlogemakers.nl/', { waitUntil: 'load', timeout: 90000 }).catch(e=>console.log(e.message));
  await p.waitForTimeout(5000);
  await p.screenshot({ path: `bron/web/${n}.png` });
  await p.screenshot({ path: `bron/web/${n}-full.png`, fullPage: true }).catch(e=>console.log(e.message));
  const info = await p.evaluate(() => {
    const menus = [...document.querySelectorAll('nav, .menu, [class*=menu]')];
    const lis = new Set(); document.querySelectorAll('nav li a, ul.menu li a, [class*="menu"] li a').forEach(a => lis.add(a));
    const main = document.querySelector('#primary-menu, nav ul, header ul');
    return { sw: document.documentElement.scrollWidth, H: document.documentElement.scrollHeight, menuLinks: lis.size, uniqueTexts: new Set([...lis].map(a=>a.textContent.trim())).size, imgs: document.images.length, h1: [...document.querySelectorAll('h1')].map(h=>h.textContent.trim()), words: document.body.innerText.split(/\s+/).length };
  });
  console.log(n, JSON.stringify(info));
}
await b.close();
