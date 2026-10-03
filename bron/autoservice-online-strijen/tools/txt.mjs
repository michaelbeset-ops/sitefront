import { chromium } from 'playwright';
const b = await chromium.launch({ channel: 'chrome', args: ['--headless=new'] });
const p = await (await b.newContext({ locale: 'nl-NL' })).newPage();
for (const u of process.argv.slice(2)) { try { await p.goto(u, { waitUntil: 'load', timeout: 30000 }); await p.waitForTimeout(2500); console.log('== ' + p.url() + '\n' + (await p.evaluate(() => document.body.innerText)).replace(/\n\s*\n+/g, '\n').slice(0, 3000)); } catch (e) { console.log('ERR', u, e.message.slice(0, 100)); } }
await b.close();
