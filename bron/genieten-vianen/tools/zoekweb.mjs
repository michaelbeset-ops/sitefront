// Bing-zoekresultaten (Google blokkeert). Args: zoektermen
import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch(); const p = await b.newPage({ locale: 'nl-NL', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' });
const out = [];
for (const q of process.argv.slice(2)) {
  await p.goto('https://www.bing.com/search?setlang=nl&q=' + encodeURIComponent(q), { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(2500);
  const r = await p.evaluate(() => [...document.querySelectorAll('li.b_algo')].map(li => (li.querySelector('h2 a')?.href || '') + ' || ' + li.innerText.replace(/\s+/g, ' ').slice(0, 300)));
  out.push('### ' + q, ...r);
}
fs.writeFileSync('bron/web/bing.txt', out.join('\n')); console.log(out.join('\n')); await b.close();
