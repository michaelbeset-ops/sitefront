import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto('http://localhost:4413/sitefront/ongelooflijk-lekker-vlissingen/', { waitUntil: 'networkidle' });
const h = async () => decodeURIComponent((await p.getAttribute('[data-bestel-wa]', 'href')).split('text=')[1]);
console.log(await h());
await p.selectOption('[data-soort]', 'een cadeaubon'); console.log(await h(), await p.isHidden('[data-pers-zin]'));
await p.selectOption('[data-soort]', 'verse kaasfondue'); await p.selectOption('[data-pers]', 'meer dan 25'); await p.selectOption('[data-wanneer]', 'nog niet bekend'); console.log(await h());
await p.locator('#plank').scrollIntoViewIfNeeded(); await p.waitForTimeout(1200); await p.screenshot({ path: 'shots/wow-1440.png' });
await b.close();
