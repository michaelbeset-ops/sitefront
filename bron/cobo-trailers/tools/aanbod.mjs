// Verzamelt foto-hashes + soort/merk uit het aanbod (aanhangerplein-feed) als BRON voor eigen foto's; geen prijzen gebruiken.
import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 1000 } });
const reqs = new Set(); p.on('request', (r) => { if (/aanhangerplein|campersite|caravans\.nl/.test(r.url()) && !/images\./.test(r.url())) reqs.add(r.method() + ' ' + r.url()); });
await p.goto('https://cobotrailers.nl/aanbod-trailers/', { waitUntil: 'networkidle' });
await p.waitForTimeout(2000);
const alle = [];
for (let pg = 1; pg <= 8; pg++) {
  if (pg > 1) {
    const l = p.locator(`text="${pg}"`).first();
    await l.click().catch(() => {}); await p.waitForTimeout(3000);
  }
  const items = await p.$$eval('img[src*="images.aanhangerplein.nl"]', (is) => is.map((i) => { let c = i; for (let k = 0; k < 6 && c.parentElement; k++) c = c.parentElement; return { hash: i.src.match(/[0-9a-f]{64}/)?.[0], alt: i.alt, txt: c.innerText.replace(/\n+/g, ' | ').slice(0, 200), href: i.closest('a')?.href }; }));
  console.log('pagina', pg, items.length); alle.push(...items);
}
const uniek = [...new Map(alle.map((x) => [x.hash, x])).values()];
fs.writeFileSync('bron/site/aanbod.json', JSON.stringify({ reqs: [...reqs], items: uniek }, null, 1));
console.log(uniek.length, [...reqs].slice(0, 5));
await b.close();
