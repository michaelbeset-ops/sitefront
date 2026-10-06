import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
for (const u of process.argv.slice(2)) { await p.goto(u, { waitUntil: 'networkidle' }); const t = await p.evaluate(() => document.body.innerText); console.log('#####', u, '\n', t.split('Tim van Beijnen patisserie boulangerie')[0].slice(0, 3000)); }
await b.close();
