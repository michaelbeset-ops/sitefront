// Sectiehoogtes + elementen die breder zijn dan het venster. Arg: breedte
import { chromium } from 'playwright';
const w = +(process.argv[2] || 1440);
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: w, height: 900 } });
await p.goto('http://localhost:4811/sitefront/laaiin-aanhangwagenverhuur-hank/', { waitUntil: 'networkidle' });
console.log(await p.evaluate((w) => {
  const out = [...document.querySelectorAll('main > section, main > div, footer')].map((s) => `${(s.id || s.querySelector('h2')?.textContent || s.tagName).slice(0, 28)}: ${Math.round(s.getBoundingClientRect().height)}`);
  const breed = [...document.querySelectorAll('body *')].filter((e) => e.getBoundingClientRect().right > w + 1).slice(0, 8).map((e) => e.tagName + '.' + String(e.className).slice(0, 60) + ' ' + Math.round(e.getBoundingClientRect().right));
  return out.join('\n') + '\nBREED:\n' + breed.join('\n');
}, w));
await b.close();
