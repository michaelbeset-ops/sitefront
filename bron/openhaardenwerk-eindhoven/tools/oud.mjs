// Bewijs: openhaardenwerk.nl (Google-websiteknop) lost niet meer op (geen DNS).
import { chromium } from 'playwright';
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new'] });
for (const w of [390, 1440]) {
  const p = await (await b.newContext({ viewport: { width: w, height: 844 }, isMobile: w<500, hasTouch: w<500, locale: 'nl-NL' })).newPage();
  try { await p.goto('http://www.openhaardenwerk.nl/', { timeout: 20000 }); } catch (e) { console.log(w, e.message.split('\n')[0]); }
  await p.waitForTimeout(1500);
  await p.screenshot({ path: `bron/web/oud-${w}.png` });
}
await b.close();
