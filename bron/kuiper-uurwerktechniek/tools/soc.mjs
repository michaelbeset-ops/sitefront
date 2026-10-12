import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch({ args: ['--disable-blink-features=AutomationControlled'] });
const p = await (await b.newContext({ locale: 'nl-NL', viewport: { width: 1280, height: 1000 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' })).newPage();
for (const [n, u] of [['ig', 'https://www.instagram.com/kuiperuurwerktechniek/'], ['fb', 'https://www.facebook.com/Kuiper-uurwerktechniek-101677875259455']]) {
  try { await p.goto(u, { waitUntil: 'domcontentloaded', timeout: 30000 }); await p.waitForTimeout(5000);
  for (const t of ['Optionele cookies weigeren', 'Alleen essentiële cookies toestaan', 'Decline optional cookies', 'Weigeren']) await p.locator(`button:visible:has-text("${t}")`).first().click({ timeout: 1000 }).catch(() => {});
  await p.waitForTimeout(3000);
  const t = await p.evaluate(() => [document.title, document.querySelector('meta[property="og:description"]')?.content, document.body.innerText.slice(0, 2500)]);
  fs.writeFileSync(`bron/social/${n}.txt`, t.join('\n----\n')); await p.screenshot({ path: `bron/social/${n}.png` });
  const imgs = await p.evaluate(() => [...document.querySelectorAll('img')].map(i => [i.src, i.naturalWidth, i.alt].join(' | ')).filter(x => !x.includes('rsrc')));
  fs.writeFileSync(`bron/social/${n}-img.txt`, imgs.join('\n'));
  console.log(n, t[0], '\n', t[1]); } catch (e) { console.log(n, 'ERR', e.message.slice(0, 80)); }
}
await b.close();
