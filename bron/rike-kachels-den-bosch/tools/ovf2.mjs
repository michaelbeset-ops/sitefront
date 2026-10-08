import { chromium } from 'playwright';
const b = await chromium.launch();
const p = await (await b.newContext({ viewport: { width: 320, height: 640 } })).newPage();
await p.goto('http://127.0.0.1:4479/sitefront/rike-kachels-den-bosch/', { waitUntil: 'networkidle' });
console.log(await p.evaluate(() => { const r=[]; for (const sec of document.querySelectorAll('body > *, main > *, .kanaal > *')) { const o=sec.style.display; sec.style.display='none'; r.push([sec.tagName+'#'+sec.id+'.'+String(sec.className).slice(0,30), document.documentElement.scrollWidth]); sec.style.display=o; } return r; }));
await b.close();
