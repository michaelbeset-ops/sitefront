import { chromium } from 'playwright'; import fs from 'node:fs';
const f = (p) => fs.readFileSync('node_modules/@fontsource-variable/' + p).toString('base64');
const fonts = [['Instrument', 'instrument-sans/files/instrument-sans-latin-wght-normal.woff2'], ['Hanken', 'hanken-grotesk/files/hanken-grotesk-latin-wght-normal.woff2']];
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.setContent(`<style>${fonts.map(([n, u]) => `@font-face{font-family:${n};src:url(data:font/woff2;base64,${f(u)});font-weight:100 900}`).join('')}
body{margin:0;background:#efece6;color:#1b1916;padding:40px 80px}
.r{display:grid;grid-template-columns:1fr;gap:6px;margin-bottom:46px}
h1{font-size:76px;line-height:1.02;letter-spacing:-.035em;font-weight:440;margin:0}
.w{font-size:15px;letter-spacing:.32em;font-weight:500;text-transform:uppercase}
.u{font-size:12px;letter-spacing:.12em;text-transform:uppercase;font-weight:500}
p{font-size:18px;line-height:1.6;color:#69645c;max-width:560px;margin:0}</style>
${fonts.map(([n]) => `<div class=r style="font-family:${n}"><div class=w>Schoenmaker Toon</div><h1>Uw ambachtelijk schoenmaker in Middelharnis.</h1><p>Schoenreparaties, sleutels, naamplaten en lijsten. Aan het Zandpad 66, dinsdag tot en met vrijdag.</p><div class=u>${n} · Stuur een WhatsApp · Openingstijden 10.00–17.00</div></div>`).join('')}`);
await p.waitForTimeout(500); await p.screenshot({ path: 'shots/_fonts.png' }); await b.close();
