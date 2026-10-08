import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto('https://www.ecologicpelletkachels.nl/pelletkachels/onze-pelletkachels/', { waitUntil: 'networkidle' });
const l = p.getByText(/3,65/).first(); console.log('zichtbaar', await l.isVisible(), await l.innerText());
await l.scrollIntoViewIfNeeded(); await p.waitForTimeout(800); await p.screenshot({ path: 'bron/web/oud-sterren-365-1440.png' });
await b.close();
