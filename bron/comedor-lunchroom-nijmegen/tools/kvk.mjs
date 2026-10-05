import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ locale: 'nl-NL' });
for (const u of ['https://www.kvk.nl/zoeken/?source=all&q=23053603', 'https://www.openkvk.nl/kvk/23053603', 'https://drimble.nl/bedrijf/gorinchem/k23053603/']) {
  try { await p.goto(u, { waitUntil: 'domcontentloaded', timeout: 30000 }); await p.waitForTimeout(6000);
    const t = await p.evaluate(() => document.body.innerText); console.log('###', u, '\n', t.replace(/\n+/g, ' | ').slice(0, 1500)); } catch (e) { console.log('ERR', u, e.message.slice(0, 80)); }
}
await b.close();
