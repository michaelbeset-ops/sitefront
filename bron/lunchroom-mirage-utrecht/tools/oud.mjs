import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [w, h, n, mob] of [[1440, 900, 'google-desktop', false], [390, 844, 'google-390', true]]) {
  const p = await (await b.newContext({ viewport: { width: w, height: h }, locale: 'nl-NL', isMobile: mob, userAgent: mob ? 'Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 Chrome/140 Mobile Safari/537.36' : undefined })).newPage();
  for (let t = 0; t < 3; t++) { await p.goto('https://www.google.com/maps/search/Lunchroom+Mirage+Amsterdamsestraatweg+378+Utrecht?hl=nl', { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(3000);
  if (p.url().includes('consent')) { await p.getByRole('button', { name: /Alles afwijzen|Reject all/ }).first().click(); await p.waitForTimeout(5000); }
  await p.waitForTimeout(3000); if (await p.getByText('Website toevoegen').count()) break; }
  await p.getByText('Website toevoegen').first().scrollIntoViewIfNeeded().catch(()=>{}); await p.waitForTimeout(1000);
  await p.screenshot({ path: `bron/web/${n}.png` }); console.log(n, await p.getByText('Website toevoegen').count());
}
await b.close();
