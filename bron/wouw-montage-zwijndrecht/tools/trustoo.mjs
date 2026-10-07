import { createRequire } from 'node:module'; import fs from 'node:fs';
const { chromium } = createRequire('C:/Users/Micha/Downloads/Sitefront/werkwijze/tools/')('playwright');
const b = await chromium.launch(); const p = await (await b.newContext({ locale: 'nl-NL', viewport: { width: 1300, height: 1000 } })).newPage();
const api = []; p.on('response', async (r) => { if (/review/i.test(r.url()) && /json/.test(r.headers()['content-type'] || '')) { try { api.push({ u: r.url(), j: await r.json() }); } catch {} } });
await p.goto('https://trustoo.nl/zuid-holland/zwijndrecht/zonwering/p-vd-wouw-montage-onderhoud-wouwgaragedeuren-en-zonwering/', { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(6000);
const nood = p.getByRole('button', { name: /Alleen noodzakelijk/ }); if (await nood.count()) { await nood.first().click(); await p.waitForTimeout(1500); }
for (let i = 0; i < 12; i++) { const m = p.getByText(/^(Toon meer reviews|Meer reviews|Laad meer)/i); if (!(await m.count())) break; await m.first().click().catch(() => {}); await p.waitForTimeout(1500); }
for (let y = 0; y < 30000; y += 800) { await p.evaluate((y) => scrollTo(0, y), y); await p.waitForTimeout(150); }
fs.writeFileSync('bron/trustoo/render.txt', await p.evaluate(() => document.body.innerText));
fs.writeFileSync('bron/trustoo/api.json', JSON.stringify(api, null, 1));
const imgs = await p.evaluate(() => [...document.querySelectorAll('img')].map((i) => i.currentSrc || i.src).filter((s) => !/static\.trustoo|logo|icon|badge/.test(s)));
fs.writeFileSync('bron/trustoo/imgs.txt', [...new Set(imgs)].join('\n'));
await p.screenshot({ path: 'bron/trustoo/top.png' });
console.log(api.length, api.map((a) => a.u).join('\n'), imgs.length);
await b.close();
