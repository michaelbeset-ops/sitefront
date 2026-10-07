import { chromium } from 'playwright';
const b = await chromium.launch();
const p = await (await b.newContext({ viewport: { width: 390, height: 844 } })).newPage();
await p.goto('https://exclusievehorlogemakers.nl/', { waitUntil: 'load', timeout: 90000 });
await p.waitForTimeout(3000);
const r = await p.evaluate(() => {
  const side = document.querySelector('.nav-sidebar, #main-menu ul');
  const all = side ? side.querySelectorAll('li').length : -1;
  const top = side ? side.querySelectorAll(':scope > li').length : -1;
  const hdr = document.querySelector('.header-nav-main');
  return { sidebarAll: all, sidebarTop: top, desktopTop: hdr ? hdr.querySelectorAll(':scope > li').length : -1, desktopAll: hdr ? hdr.querySelectorAll('li').length : -1, htmlKB: Math.round(document.documentElement.outerHTML.length/1024) };
});
console.log(JSON.stringify(r));
await p.click('[data-open="#main-menu"], .nav-icon a, a[aria-label*="enu"]').catch(e=>console.log('noclick', e.message.slice(0,80)));
await p.waitForTimeout(1500);
await p.screenshot({ path: 'bron/web/huidig-390-menu.png' });
await p.screenshot({ path: 'bron/web/huidig-390-menu-full.png', fullPage: true });
await b.close();
