// Google Maps: reviews (nieuwste) + foto-URL's van het profiel. Headless.
import { chromium } from 'playwright';
import fs from 'node:fs';
const url = 'https://www.google.com/maps/place/Bax+Lederwaren,+Hoeden+en+Petten/@51.9718677,5.347406,17z/data=!4m8!3m7!1s0x47c6595583409dc7:0x5bd138b357ae9791!8m2!3d51.9718677!4d5.347406!9m1!1b1?hl=nl';
const b = await chromium.launch();
const c = await b.newContext({ locale: 'nl-NL', viewport: { width: 1300, height: 1000 } });
await c.addCookies([{ name: 'SOCS', value: 'CAESHAgBEhJnd3NfMjAyMzA4MTAtMF9SQzIaAm5sIAEaBgiA_LyaBg', domain: '.google.com', path: '/' }]);
const p = await c.newPage();
await p.goto(url, { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(5000);
// sorteren op nieuwste
try { await p.click('button[aria-label="Reviews sorteren"]', { timeout: 5000 }); await p.waitForTimeout(800); await p.click('[role=menuitemradio]:nth-child(2)', { timeout: 3000 }); await p.waitForTimeout(2500); } catch (e) { console.log('sort fail', e.message); }
for (let i = 0; i < 30; i++) {
  await p.evaluate(() => document.querySelectorAll('.m6QErb.DxyBCb').forEach((s) => (s.scrollTop = s.scrollHeight)));
  await p.waitForTimeout(700);
}
await p.evaluate(() => document.querySelectorAll('button.w8nwRe').forEach((b) => b.click()));
await p.waitForTimeout(1000);
const rev = await p.evaluate(() => [...document.querySelectorAll('div.jftiEf')].map((e) => ({
  naam: e.querySelector('.d4r55')?.innerText,
  ster: e.querySelector('.kvMYJc')?.getAttribute('aria-label'),
  wanneer: e.querySelector('.rsqaWe')?.innerText,
  tekst: e.querySelector('.wiI7pd')?.innerText,
  eigenaar: e.querySelector('.CDe7pd')?.innerText,
  fotos: [...e.querySelectorAll('button.Tya61d')].map((x) => (x.style.backgroundImage || '').slice(5, -2)),
})));
fs.writeFileSync('bron/google-reviews.json', JSON.stringify(rev, null, 1));
console.log('reviews', rev.length);
await p.screenshot({ path: 'bron/gm-reviews.png' });
await b.close();
