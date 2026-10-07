import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto('http://www.kila-zonweringen.nl/', { waitUntil: 'load', timeout: 30000 });
console.log(JSON.stringify(await p.evaluate(() => {
  const e = [...document.querySelectorAll('div')].find(d => [...d.childNodes].some(c => c.nodeType === 3 && /Hier wordt de inhoud/.test(c.textContent)));
  const cs = getComputedStyle(e); const r = e.getBoundingClientRect();
  return { kleur: cs.color, bg: cs.backgroundColor, y: r.y, h: r.height, z: cs.zIndex, pos: cs.position, sel: document.elementFromPoint(r.x + 5, r.y + 5)?.tagName };
})));
await p.evaluate(() => { const e = [...document.querySelectorAll('div')].find(d => [...d.childNodes].some(c => c.nodeType === 3 && /Hier wordt de inhoud/.test(c.textContent))); e.style.outline = '3px solid red'; });
await p.screenshot({ path: 'bron/web/oud-sjabloontekst-gemarkeerd.png', clip: { x: 0, y: 0, width: 1440, height: 160 } });
await b.close();
