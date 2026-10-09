import { chromium } from 'playwright';
const b = await chromium.launch();
for (const w of [1440, 390]) {
  const p = await b.newPage({ viewport: { width: w, height: 900 } });
  await p.goto('http://127.0.0.1:4483/sitefront/cobo-trailers/', { waitUntil: 'networkidle' });
  await p.click('text=Ik zoek een trailer >> nth=0');
  await p.selectOption('#z-soort', 'Gesloten aanhangwagen'); await p.click('#p-zoeken label:has-text("Gebruikt")'); await p.click('#p-zoeken label:has-text("BE")');
  await p.fill('#z-wens', 'voor een minigraver');
  console.log(w, 'ZOEK', decodeURIComponent((await p.getAttribute('[data-stuur]', 'href')).split('text=')[1]));
  await p.click('#t-verkopen'); await p.fill('#v-merk', 'Böckmann tweepaards'); await p.fill('#v-jaar', '2015');
  console.log(w, 'VERKOOP', decodeURIComponent((await p.getAttribute('[data-stuur]', 'href')).split('text=')[1]));
  await p.click('#t-werk'); await p.selectOption('#w-wat', 'Speciaalbouw');
  console.log(w, 'WERK', decodeURIComponent((await p.getAttribute('[data-stuur]', 'href')).split('text=')[1]));
  await p.click('#t-zoeken');
  await p.locator('#zoeken').screenshot({ path: `shots/wow-${w}.png` });
  await p.close();
}
await b.close();
