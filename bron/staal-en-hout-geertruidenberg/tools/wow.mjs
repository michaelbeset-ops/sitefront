import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await p.goto('http://localhost:4436/sitefront/staal-en-hout-geertruidenberg/#aanvraag', { waitUntil: 'networkidle' });
await p.selectOption('#b-soort', 'onderhoud laten doen'); await p.selectOption('#b-materiaal', 'hout');
await p.fill('#b-wat', 'een houten steiger'); await p.fill('#b-waar', 'Raamsdonksveer');
console.log(decodeURIComponent(await p.getAttribute('[data-bon-wa]', 'href')));
await p.locator('#aanvraag form').scrollIntoViewIfNeeded(); await p.waitForTimeout(1200);
await p.locator('#aanvraag').screenshot({ path: 'shots/wow-1440.png' });
await b.close();
