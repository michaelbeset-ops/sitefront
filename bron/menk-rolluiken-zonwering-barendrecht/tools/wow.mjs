import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [w, h] of [[1440, 900], [390, 844]]) {
  const p = await b.newPage({ viewport: { width: w, height: h } });
  const errs = []; p.on('pageerror', (e) => errs.push(e.message));
  await p.goto('http://localhost:4446/sitefront/menk-rolluiken-zonwering-barendrecht/', { waitUntil: 'networkidle' });
  await p.evaluate(() => document.querySelectorAll('.rijs').forEach(e => e.classList.add('in')));
  await p.click('[data-u="geperforeerd"]'); await p.waitForTimeout(300);
  console.log('uitvoering tekst:', (await p.textContent('[data-u-tekst]')).slice(0, 60));
  await p.fill('input[name=breedte]', '180'); await p.fill('input[name=hoogte]', '120'); await p.fill('input[name=aantal]', '3');
  await p.fill('input[name=plaats]', 'Zwijndrecht'); await p.check('input[name=bediening][value=elektrisch]', { force: true });
  await p.fill('input[name=trek]', '85'); await p.fill('input[name=naam]', 'J. Test');
  await p.waitForTimeout(600);
  await p.locator('[data-raam]').scrollIntoViewIfNeeded(); await p.waitForTimeout(300);
  await p.screenshot({ path: `shots/wow-rolluik-${w}.png` });
  console.log(w, await p.textContent('[data-zin]'));
  console.log(decodeURIComponent(await p.getAttribute('[data-mail]', 'href')));
  await p.selectOption('select[name=product]', 'Terrasoverkapping'); await p.fill('input[name=breedte]', '720'); await p.fill('input[name=hoogte]', '300'); await p.fill('input[name=aantal]', '1');
  await p.waitForTimeout(600); await p.locator('[data-raam]').scrollIntoViewIfNeeded();
  await p.screenshot({ path: `shots/wow-overkapping-${w}.png` });
  console.log(await p.textContent('[data-zin]'), '|', await p.textContent('[data-let]'), errs.join(' | '));
}
await b.close();
