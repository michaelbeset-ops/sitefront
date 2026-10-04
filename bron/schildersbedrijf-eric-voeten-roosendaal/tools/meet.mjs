import { chromium } from 'playwright';
const b = await chromium.launch();
for (const w of [1440, 390]) {
  const p = await (await b.newContext({ viewport: { width: w, height: 900 } })).newPage();
  await p.goto('http://localhost:4808/sitefront/schildersbedrijf-eric-voeten-roosendaal/', { waitUntil: 'networkidle' });
  const r = await p.evaluate(() => {
    const out = [...document.querySelectorAll('main > section, footer, header')].map(s => (s.id || s.getAttribute('aria-label') || s.getAttribute('aria-labelledby') || s.tagName) + ':' + Math.round(s.getBoundingClientRect().height));
    const wide = [...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > innerWidth + 1).slice(0, 8).map(e => e.tagName + '.' + String(e.className).slice(0, 60) + ' r=' + Math.round(e.getBoundingClientRect().right));
    return { out, wide };
  });
  console.log(w, r.out.join(' | ')); console.log(r.wide.join('\n'));
}
await b.close();
