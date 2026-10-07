import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' })).newPage();
for (const u of ['https://www.facebook.com/bglgoldandsilver', 'https://www.instagram.com/bglgoldandsilver/', 'https://www.bing.com/search?q=%22bglgoldandsilver%22', 'https://www.bing.com/search?q=%22B.G.L.+Gold+%26+Silver%22']) {
  await p.goto(u, { waitUntil: 'domcontentloaded' }).catch(()=>{}); await p.waitForTimeout(4000);
  console.log('==', u, await p.title(), await p.evaluate(() => document.querySelector('meta[property="og:title"]')?.content + ' | ' + document.querySelector('meta[property="og:description"]')?.content));
  if (u.includes('bing')) console.log(await p.evaluate(() => [...document.querySelectorAll('li.b_algo')].map(li => (li.querySelector('cite')?.innerText||'') + ' | ' + (li.querySelector('h2')?.innerText||'')).join('\n')));
}
await b.close();
