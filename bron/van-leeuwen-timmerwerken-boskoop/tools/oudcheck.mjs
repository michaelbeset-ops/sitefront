import { chromium, devices } from 'playwright';
import tls from 'node:tls';
const s = tls.connect({ host: 'www.vanleeuwen-timmerwerken.nl', port: 443, servername: 'www.vanleeuwen-timmerwerken.nl', rejectUnauthorized: false }, () => {
  const c = s.getPeerCertificate(); console.log('authorized', s.authorized, s.authorizationError, 'CN', c.subject?.CN, 'SAN', c.subjectaltname, 'valid_to', c.valid_to); s.end();
});
await new Promise(r => setTimeout(r, 3000));
const b = await chromium.launch();
const ctx = await b.newContext({ ...devices['iPhone 13'] });
const p = await ctx.newPage();
await p.goto('http://www.vanleeuwen-timmerwerken.nl/', { waitUntil: 'networkidle' });
console.log('mobile', await p.evaluate(() => ({ iw: innerWidth, sw: document.documentElement.scrollWidth, vp: !!document.querySelector('meta[name=viewport]'), fs: getComputedStyle(document.body).fontSize })));
await p.screenshot({ path: process.argv[2] + '/oud-390.png' });
await p.goto('http://www.vanleeuwen-timmerwerken.nl/gastenboek.php', { waitUntil: 'networkidle' }); await p.waitForTimeout(1500);
await p.screenshot({ path: process.argv[2] + '/oud-gb-390.png', fullPage: false });
const p2 = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await p2.goto('http://www.vanleeuwen-timmerwerken.nl/', { waitUntil: 'networkidle' });
await p2.screenshot({ path: process.argv[2] + '/oud-1440.png' });
try { const r = await (await b.newContext()).newPage().then(async q => { await q.goto('https://www.vanleeuwen-timmerwerken.nl/'); return q.url(); }); console.log('https ok', r); } catch (e) { console.log('https err', e.message.split('\n')[0]); }
await b.close();
