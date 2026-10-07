import { chromium } from 'playwright';
const b = await chromium.launch();
for (const w of [390, 1440]) {
  const p = await (await b.newContext({ viewport: { width: w, height: 844 }, isMobile: w<500, hasTouch: w<500 })).newPage();
  await p.goto('https://web.archive.org/web/20250225001055/https://www.ccrolluiken.nl/', { waitUntil: 'load', timeout: 90000 }).catch(e=>console.log('err', e.message));
  await p.waitForTimeout(6000);
  const r = await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, h: document.documentElement.scrollHeight }));
  console.log(w, JSON.stringify(r));
  await p.screenshot({ path: `bron/web/oud-archief-${w}.png` });
  await p.screenshot({ path: `bron/web/oud-archief-full-${w}.png`, fullPage: true });
  const q = await p.context().newPage();
  const res = await q.goto('https://www.ccrolluiken.nl/', { timeout: 20000 }).then(r=>r.status()).catch(e=>e.message.split('\n')[0]);
  console.log('live', res);
  await q.screenshot({ path: `bron/web/oud-live-${w}.png` }).catch(()=>{});
  await p.context().close();
}
await b.close();
