// Vervanging voor Lighthouse (crasht hier): LCP, CLS, bytes, imgs zonder alt, console-fouten. Mobiel 390, 4x CPU-throttle.
import { chromium } from 'playwright';
const b = await chromium.launch(); const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 }); const p = await ctx.newPage();
const errs = []; p.on('console', (m) => m.type() === 'error' && errs.push(m.text())); p.on('pageerror', (e) => errs.push(e.message));
let bytes = 0; p.on('response', async (r) => { try { bytes += (await r.body()).length; } catch {} });
const cdp = await ctx.newCDPSession(p); await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });
await cdp.send('Network.emulateNetworkConditions', { offline: false, latency: 150, downloadThroughput: 1.6e6 / 8 * 1024 / 1000 * 1000, uploadThroughput: 750e3 / 8 });
await p.addInitScript(() => { window.__lcp = 0; window.__cls = 0; new PerformanceObserver((l) => { for (const e of l.getEntries()) window.__lcp = e.startTime; }).observe({ type: 'largest-contentful-paint', buffered: true }); new PerformanceObserver((l) => { for (const e of l.getEntries()) if (!e.hadRecentInput) window.__cls += e.value; }).observe({ type: 'layout-shift', buffered: true }); });
await p.goto('http://localhost:4799/sitefront/marcel-lami-schilders-wassenaar/', { waitUntil: 'load' }); await p.waitForTimeout(2500);
const r = await p.evaluate(() => ({ lcp: Math.round(window.__lcp), cls: window.__cls.toFixed(3), noAlt: [...document.images].filter((i) => !i.hasAttribute('alt')).length, h1: document.querySelectorAll('h1').length, lang: document.documentElement.lang, title: document.title, desc: document.querySelector('meta[name=description]')?.content.length }));
console.log(r, 'KB load:', Math.round(bytes / 1024), 'errors:', errs);
await b.close();
