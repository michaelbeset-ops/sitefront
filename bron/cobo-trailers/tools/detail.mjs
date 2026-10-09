import { chromium } from 'playwright'; import fs from 'node:fs';
const d = JSON.parse(fs.readFileSync('bron/site/aanbod.json')); const ids = process.argv.slice(2).map(Number);
const b = await chromium.launch(); const p = await b.newPage(); const out = {};
for (const i of ids) {
  await p.goto(d.items[i].href, { waitUntil: 'networkidle' }).catch(() => {}); await p.waitForTimeout(1500);
  const html = await p.content();
  out[i] = { hashes: [...new Set(html.match(/[0-9a-f]{64}/g) || [])], tekst: (await p.innerText('body')).slice(0, 2500) };
  console.log(i, out[i].hashes.length);
}
fs.writeFileSync('bron/site/detail.json', JSON.stringify(out, null, 1)); await b.close();
