import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 1440, height: 1000 } })).newPage();
await p.goto('http://localhost:4448/sitefront/stefig-dordrecht/#maatwerk', { waitUntil: 'networkidle' });
await p.selectOption('select[name=soort]', 'Eettafels'); await p.check('input[value="Massief eiken"]', { force: true });
await p.fill('input[name=b]', '300'); await p.fill('input[name=h]', '76'); await p.fill('input[name=d]', '100'); await p.fill('input[name=plaats]', 'Zwijndrecht');
await p.waitForTimeout(800); const f = p.locator('[data-intake]'); await f.scrollIntoViewIfNeeded(); await p.waitForTimeout(1200);
await f.screenshot({ path: 'shots/wow-1440.png' }); console.log(await p.locator('[data-wa]').getAttribute('href')); await b.close();
