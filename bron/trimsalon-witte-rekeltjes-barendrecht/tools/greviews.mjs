import { chromium } from 'playwright';
const b = await chromium.launch({ headless: true, args: ['--lang=nl-NL'] });
const ctx = await b.newContext({ locale: 'nl-NL', viewport: { width: 1300, height: 1000 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36' });
await ctx.addCookies([{ name: 'SOCS', value: 'CAESEwgDEgk0ODE3Nzk3MjQaAmVuIAEaBgiA_LyaBg', domain: '.google.com', path: '/' }, { name: 'CONSENT', value: 'YES+', domain: '.google.com', path: '/' }]);
const p = await ctx.newPage();
await p.goto('https://www.google.com/maps/place/?q=place_id:ChIJ0U4bJPwxxEcRBgQgzQwHaQA&hl=nl', { waitUntil: 'domcontentloaded' }).catch(()=>{});
await p.goto('https://www.google.com/maps/place/Trimsalon+%22Van+de+Witte+Rekeltjes%22/@51.8428533,4.5643711,17z/data=!4m8!3m7!1s0x47c431fc241b4ed1:0x69070cdd200406!8m2!3d51.8428533!4d4.5643711!9m1!1b1!16s%2Fg%2F11b67r8blz?hl=nl', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(6000);
const tab = p.locator('button[role=tab]:has-text("Reviews")');
console.log('tabs', await tab.count());
if (await tab.count()) { await tab.first().click(); await p.waitForTimeout(3000); }
for (let i = 0; i < 10; i++) { await p.evaluate(() => { const f = document.querySelector('div.m6QErb.DxyBCb') || document.querySelector('[role=main] div[tabindex="-1"]'); if (f) f.scrollTop = f.scrollHeight; }); await p.waitForTimeout(1200); }
for (const m of await p.locator('button:has-text("Meer")').all()) { try { await m.click({ timeout: 500 }); } catch {} }
const t = await p.evaluate(() => document.querySelector('[role=main]')?.innerText || document.body.innerText);
console.log(t.slice(0, 20000));
await p.screenshot({ path: 'bron/_gm.png' });
await b.close();
