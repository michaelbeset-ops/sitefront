import { chromium } from 'playwright';
const b = await chromium.launch();
for (const w of [1440, 390]) {
  const p = await b.newPage({ viewport: { width: w, height: 900 } });
  await p.goto('http://localhost:4425/sitefront/kooiman-marine-group/', { waitUntil: 'networkidle' });
  console.log(w, JSON.stringify(await p.evaluate(() => [...document.querySelectorAll('main > section, footer')].map((s) => (s.id || s.tagName) + ':' + Math.round(s.getBoundingClientRect().height)))));
}
await b.close();
