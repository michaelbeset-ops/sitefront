import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto('http://localhost:4743/sitefront/arsam-autos-rhoon/#apk-check', { waitUntil: 'networkidle' });
for (const k of ['zb-125-j', 'XX999X', '1']) {
  await p.fill('#kenteken', k); await p.click('[data-apk] button[type=submit]'); await p.waitForTimeout(2500);
  console.log(k, '=>', (await p.innerText('[data-uitslag]')).replace(/\n/g, ' | '), '|| href:', await p.$eval('[data-uitslag]', (e) => e.querySelector('a')?.href || ''));
}
await p.fill('#kenteken', 'zb-125-j'); await p.click('[data-apk] button[type=submit]'); await p.waitForTimeout(2500);
await (await p.$('#apk-check')).screenshot({ path: 'shots/apk-check.png' });
await b.close();
