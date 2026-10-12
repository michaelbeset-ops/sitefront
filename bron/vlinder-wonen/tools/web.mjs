import { chromium } from 'playwright'; import fs from 'node:fs';
const OUT = 'bron/web/';
const b = await chromium.launch({ channel: 'chrome', args: ['--disable-blink-features=AutomationControlled'] });
const log = [];
for (const u of ['https://vlinderwonen.nl/', 'https://www.vlinderwonen.nl/']) {
  for (const w of [390, 1440]) {
    const p = await (await b.newContext({ viewport: { width: w, height: w < 500 ? 844 : 900 }, isMobile: w < 500, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' })).newPage();
    const r = await p.goto(u, { waitUntil: 'domcontentloaded', timeout: 30000 }).catch(e => null);
    await p.waitForTimeout(5000);
    const n = (u.includes('www') ? 'www-' : '') + 'vlinderwonen-nl';
    await p.screenshot({ path: `${OUT}${n}-${w}.png` });
    const t = await p.evaluate(() => document.body.innerText.slice(0, 300).replace(/\s+/g, ' '));
    log.push(`${u} @${w}: -> ${p.url()} status ${r ? r.status() : 'fout'} titel "${await p.title()}" tekst: ${t}`);
  }
}
const cdx = 'zie eerder';

log.push('Wayback CDX: zie cdx.json');
fs.writeFileSync(OUT + 'domein-te-koop.txt', log.join('\n')); console.log(log.join('\n')); console.log(cdx.slice(0, 3000));
await b.close();
