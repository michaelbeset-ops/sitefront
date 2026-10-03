import { chromium } from 'playwright'; import fs from 'node:fs';
const out = process.argv[2];
const b = await chromium.launch(); const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1400, height: 1000 } }); const p = await ctx.newPage();
await p.goto('https://www.facebook.com/StraatmakersbedrijfTenOeverEnStierman/photos', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(5000);
try { await p.getByRole('button', { name: /alleen essentiële|weigeren|Decline optional/i }).first().click({ timeout: 3000 }); } catch {}
try { await p.keyboard.press('Escape'); } catch {}
for (let i = 0; i < 15; i++) { await p.mouse.wheel(0, 1500); await p.waitForTimeout(1200); try { await p.locator('[aria-label="Sluiten"]').first().click({ timeout: 500 }); } catch {} }
const links = await p.$$eval('a[href*="photo"]', (as) => as.map((a) => ({ href: a.href, img: a.querySelector('img')?.src })).filter((x) => x.img));
console.log('links', links.length);
fs.writeFileSync(out + '/links.json', JSON.stringify(links, null, 1));
await p.screenshot({ path: out + '/_page.png' });
await b.close();
