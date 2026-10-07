import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [w,h,n] of [[1440,900,'d'],[390,844,'m']]) {
const c = await b.newContext({ viewport: { width: w, height: h }, isMobile: w<500, hasTouch: w<500 }); const p = await c.newPage();
await p.goto('https://www.nobelfoodtech.nl/contact', { waitUntil: 'networkidle' }); await p.waitForTimeout(3000);
const info = await p.evaluate(() => [...document.querySelectorAll('*')].filter(e => e.children.length===0 && /555-555|mymail|Get in touch/.test(e.textContent)).map(e => { const r = e.getBoundingClientRect(); const s=getComputedStyle(e); return e.textContent.trim()+' '+[r.x,r.y,r.width,r.height].map(Math.round)+' vis='+s.visibility+' disp='+s.display+' op='+s.opacity; }));
console.log(n, info);
const el = p.locator('text=555-555-5555').first();
await el.scrollIntoViewIfNeeded().catch(()=>{}); await p.waitForTimeout(1500);
// click map marker to open popup
const mk = p.locator('.mapboxgl-marker, [class*=marker]').first(); if (await mk.count()) { await mk.scrollIntoViewIfNeeded(); await mk.click({force:true}).catch(()=>{}); await p.waitForTimeout(1500); }
const info2 = await p.evaluate(() => [...document.querySelectorAll('*')].filter(e => e.children.length===0 && /555-555|mymail|Get in touch/.test(e.textContent)).map(e => { const r = e.getBoundingClientRect(); return e.textContent.trim()+' '+[r.x,r.y,r.width,r.height].map(Math.round); }));
console.log('na klik', info2);
await p.screenshot({ path: `bron/web/oud-contact-placeholders-${n}.png` });
await c.close(); }
await b.close();
