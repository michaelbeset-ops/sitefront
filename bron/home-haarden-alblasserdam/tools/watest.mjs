import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('console', m => m.type() === 'error' && errs.push(m.text()));
await p.goto('http://localhost:4392/sitefront/home-haarden-alblasserdam/', { waitUntil: 'networkidle' });
for (const [s, k] of [['gas', 'wel'], ['gas', 'geen'], ['hout', 'geen'], ['hout', 'wel'], ['elek', 'weet'], ['weet', 'wel']]) {
  await p.selectOption('select[name=soort]', s); await p.selectOption('select[name=kanaal]', k);
  await p.selectOption('select[name=zicht]', 'aan drie kanten'); await p.selectOption('select[name=waar]', 'bij mij thuis');
  console.log(s, k, '|', await p.textContent('[data-kop]'), '|', await p.textContent('[data-uitleg]'));
  console.log('   ', decodeURIComponent((await p.getAttribute('[data-stuur]', 'href')).split('text=')[1]));
}
await p.locator('#keuzehulp').scrollIntoViewIfNeeded(); await p.waitForTimeout(1200); await p.screenshot({ path: 'shots/wow-1440.png' });
console.log('robots', await p.getAttribute('meta[name=robots]', 'content'), 'errs', errs);
await b.close();
