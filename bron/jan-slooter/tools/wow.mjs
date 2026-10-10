import { chromium } from 'playwright';
const b = await chromium.launch();
for (const w of [1440, 390]) {
  const p = await b.newPage({ viewport: { width: w, height: 900 } });
  await p.goto('http://127.0.0.1:4493/sitefront/jan-slooter/', { waitUntil: 'networkidle' });
  const h = async () => decodeURIComponent((await p.getAttribute('[data-stuur]', 'href')).split('text=')[1]);
  await p.selectOption('#z-soort', 'Grondbewerking'); await p.fill('#z-merk', 'Kverneland'); await p.fill('#z-wens', 'ploeg, 4 schaar');
  console.log(w, 'ZOEK\n' + await h());
  await p.click('#t-aanbod'); await p.fill('#a-nr', '846608');
  console.log(w, 'AANBOD\n' + await h());
  await p.click('#t-kijken'); await p.fill('#k-dag', 'zaterdagochtend');
  console.log(w, 'KIJKEN\n' + await h());
  await p.click('#t-zoeken');
  await p.locator('#zoeken').screenshot({ path: `shots/wow-${w}.png` });
  await p.close();
}
await b.close();
