// Controle live-markering: zet de klok op dinsdag 18:20 en zaterdag 08:00.
import { chromium } from 'playwright';
const b = await chromium.launch();
for (const t of ['2026-10-06T18:20:00+02:00', '2026-10-10T08:00:00+02:00']) {
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  await p.clock.setFixedTime(new Date(t));
  await p.goto('http://localhost:4674/sitefront/sportschool-kwikkers-ridderkerk/#lestijden', { waitUntil: 'networkidle' });
  await p.waitForTimeout(1500);
  console.log(t, await p.evaluate(() => document.querySelector('[data-live-tekst]').textContent + ' / ' + document.querySelector('[data-status]').textContent + ' / ' + [...document.querySelectorAll('.les')].map((l) => l.className + ':' + (l.querySelector('.status')?.hidden ? '' : l.querySelector('.status').textContent)).join(' | ')));
  await p.screenshot({ path: `shots/_vandaag-${t.slice(8, 10)}.png` });
  await p.close();
}
await b.close();
