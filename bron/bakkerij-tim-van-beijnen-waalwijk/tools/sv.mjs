import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ locale: 'nl-NL', viewport: { width: 1400, height: 900 } })).newPage();
const [lat, lng, head, name] = process.argv.slice(2);
await p.goto(`https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${lat},${lng}&heading=${head}&fov=80`, { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(3000);
if (p.url().includes('consent')) { await p.getByRole('button', { name: /Alles afwijzen|Reject all/ }).first().click(); await p.waitForTimeout(6000); }
await p.waitForTimeout(6000); await p.screenshot({ path: `bron/google/${name}.png` }); console.log(p.url()); await b.close();
