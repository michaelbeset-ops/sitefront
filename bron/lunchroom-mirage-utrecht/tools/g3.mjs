import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch();
const ctx = await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36', viewport: { width: 1400, height: 1000 } });
const p = await ctx.newPage();
for (let t=0;t<4;t++){ await p.goto('https://www.google.com/maps/search/Lunchroom+Mirage+Amsterdamsestraatweg+378+Utrecht?hl=nl', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(3000);
if (p.url().includes('consent')) { await p.getByRole('button', { name: /Alles afwijzen|Reject all/ }).first().click(); await p.waitForTimeout(5000); }
await p.waitForTimeout(3000); if (await p.getByText('Online bestellen').count()) break; }
const pr = ctx.waitForEvent('page', { timeout: 8000 }).catch(()=>null);
await p.getByText('Online bestellen').first().click().catch(e=>console.log('nobtn'));
await p.waitForTimeout(4000);
const np = await pr; if (np) { await np.waitForTimeout(3000); console.log('POPUP', np.url()); }
await p.screenshot({ path: 'bron/google/bestel.png' });
console.log(await p.evaluate(() => [...document.querySelectorAll('a[href]')].map(a=>a.href).filter(h=>!/google\./.test(h)).join('\n')));
console.log(await p.evaluate(() => document.body.innerText.slice(0,1500)));
await b.close();
