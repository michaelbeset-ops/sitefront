import { chromium } from 'playwright'; import fs from 'node:fs';
const D = 'C:/Users/Micha/Downloads/Sitefront/demos/idylliz-hilversum/bron/web/';
const b = await chromium.launch(); const c = await b.newContext({ locale: 'nl-NL', viewport: { width: 1280, height: 1000 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' });
await c.addCookies([{ name: 'SOCS', value: 'CAESHAgBEhJnd3NfMjAyMzA4MTAtMF9SQzIaAm5sIAEaBgiAo_CmBg', domain: '.google.com', path: '/' }]);
const p = await c.newPage();
await p.goto('https://www.google.com/maps/search/Idylliz+edelsmid+Hilversum?hl=nl', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(6000);
console.log(p.url());
const btns = await p.evaluate(() => [...document.querySelectorAll('button,a')].map((x) => (x.getAttribute('aria-label') || x.innerText || '').trim()).filter(Boolean).slice(0, 80));
console.log(btns.join(' | '));
try { await p.locator('[aria-label*="openingstijden" i], [data-item-id="oh"], [aria-label*="Geopend"]').first().click({ timeout: 3000 }); await p.waitForTimeout(1500); } catch (e) { console.log('nohours') }
fs.writeFileSync(D + 'gm-uren.txt', await p.evaluate(() => [...document.querySelectorAll('table')].map((t) => t.innerText).join('\n---\n') + '\n' + ([...document.querySelectorAll('[aria-label]')].map(x=>x.getAttribute('aria-label')).filter(a=>/maandag|dinsdag/i.test(a)).join('\n'))));
console.log(fs.readFileSync(D + 'gm-uren.txt', 'utf8'));
await b.close();
