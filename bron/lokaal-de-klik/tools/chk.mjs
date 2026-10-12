import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true })).newPage();
await p.goto('http://127.0.0.1:4511/sitefront/lokaal-de-klik/', { waitUntil: 'networkidle' });
for (const sel of ['#bezoek', '#verhaal']) { await p.locator(sel).scrollIntoViewIfNeeded(); await p.waitForTimeout(1500); await p.screenshot({ path: `shots/chk-${sel.slice(1)}.png` }); }
await b.close();
