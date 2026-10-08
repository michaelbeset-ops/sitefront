// Bewijs: Google-websiteknop van Alsham Jewelry wijst naar m.latest.facebook.com (Arabische FB-pagina)
import { chromium } from 'playwright';
const u = 'https://m.latest.facebook.com/%D8%A7%D9%84%D8%B0%D9%87%D8%A8-%D8%A7%D9%84%D8%B3%D9%88%D8%B1%D9%8A-%D9%81%D9%8A-%D9%87%D9%88%D9%84%D9%86%D8%AF%D8%A7-%D9%85%D8%B5%D9%88%D8%BA%D8%A7%D8%AA-%D8%A7%D9%84%D8%B4%D8%A7%D9%85-108701563985232/';
const b = await chromium.launch();
for (const [n, vp, mob] of [['desktop', { width: 1440, height: 900 }, false], ['390', { width: 390, height: 844 }, true]]) {
  const c = await b.newContext({ viewport: vp, isMobile: mob, locale: 'nl-NL' }); const p = await c.newPage();
  await p.goto(u, { waitUntil: 'domcontentloaded', timeout: 45000 }).catch(e => console.log(e.message));
  await p.waitForTimeout(5000);
  console.log(n, p.url(), (await p.title()));
  await p.screenshot({ path: `bron/web/google-websiteknop-${n}.png` });
  console.log((await p.evaluate(() => document.body.innerText)).slice(0, 400).replace(/\n/g, ' | '));
}
await b.close();
