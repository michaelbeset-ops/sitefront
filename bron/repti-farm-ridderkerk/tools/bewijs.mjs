import { chromium } from 'playwright'; import fs from 'node:fs';
const b = await chromium.launch(); const log = [];
const p = await (await b.newContext({ viewport: { width: 1280, height: 900 } })).newPage();
try { await p.goto('http://www.repti-farm.nl/', { timeout: 20000 }); log.push('www: geladen ' + p.url()); } catch (e) { log.push('www (link op Google): ' + e.message.split('\n')[0]); }
const m = await (await b.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 })).newPage();
await m.goto('https://repti-farm.nl/', { waitUntil: 'networkidle' });
log.push('repti-farm.nl op 390: scrollWidth ' + await m.evaluate(() => document.documentElement.scrollWidth) + ', viewport-meta: ' + await m.evaluate(() => !!document.querySelector('meta[name=viewport]')));
await m.screenshot({ path: 'bron/web/oud-390.png' });
const d = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await d.goto('https://repti-farm.nl/', { waitUntil: 'networkidle' }); await d.screenshot({ path: 'bron/web/oud-1440.png' });
fs.writeFileSync('bron/web/bewijs.txt', 'Bekeken ' + new Date().toISOString() + '\n' + log.join('\n') + '\n'); console.log(log.join('\n')); await b.close();
