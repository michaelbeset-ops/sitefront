import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await p.goto('http://localhost:4742/sitefront/autobedrijf-motech-arkel/#apk', { waitUntil: 'networkidle' });
for (const [f, j] of [['diesel', '2024'], ['diesel', '2015'], ['benzine', '2024'], ['benzine', '2014'], ['benzine', '1970']]) {
  await p.check(`input[value=${f}]`, { force: true }); await p.selectOption('select[name=jaar]', j);
  console.log(f, j, '|', await p.textContent('[data-kop]'), '|', (await p.textContent('[data-regels]')).trim(), '|', decodeURIComponent((await p.getAttribute('[data-apk-wa]', 'href')).split('text=')[1]));
}
await b.close();
