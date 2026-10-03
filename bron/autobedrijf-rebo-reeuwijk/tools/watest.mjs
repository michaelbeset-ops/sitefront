import { chromium } from 'playwright';
const b = await chromium.launch(); const ctx = await b.newContext(); const p = await ctx.newPage();
await p.goto('http://localhost:4772/sitefront/autobedrijf-rebo-reeuwijk/');
for (const k of ['x']) {
  await p.fill('#kenteken', k); await p.click('[data-apk] button[type=submit]'); await p.waitForTimeout(2500);
  console.log(k, '=>', (await p.textContent('[data-apk-uit]')).replace(/\s+/g, ' ').trim(), await p.getAttribute('[data-apk-uit] a', 'href').catch(() => ''));
}
await p.click('label.keuze:has-text("Banden")'); await p.fill('[data-wa] input[name=kenteken]', 'gbh12t'); await p.selectOption('select[name=dag]', 'Dinsdag');
await p.fill('input[name=naam]', 'Jan'); await p.fill('textarea[name=wens]', 'winterbanden');
const [np] = await Promise.all([ctx.waitForEvent('page'), p.click('[data-wa] button[type=submit]')]);
console.log(decodeURIComponent(np.url()));
console.log(await p.textContent('[data-status]'));
await b.close();
