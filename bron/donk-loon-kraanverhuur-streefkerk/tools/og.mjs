// public/og.jpg (1200x630): eigen foto (kraan en trekker) met donkere overlay, woordmerk en kop in Titillium Web 700.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource/titillium-web/files/titillium-web-latin-700-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:T;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:700}
body{margin:0;width:1200px;height:630px;background:#0f1522;color:#f3f2ee;font-family:T;position:relative;overflow:hidden}
img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:60% 62%}
.o{position:absolute;inset:0;background:linear-gradient(90deg,#0f1522f2 0%,#0f1522bb 45%,#0f152222 85%)}
.m{position:absolute;left:72px;top:64px;display:flex;align-items:center;gap:14px}
.m i{width:52px;height:52px;background:#f5c518;border-radius:4px;display:grid;place-items:center}
.m b{display:block;font-size:34px;line-height:1;color:#fff}.m small{display:inline-block;margin-top:6px;background:#1f4fc6;color:#fff;font:700 11px system-ui;letter-spacing:.16em;padding:4px 7px;text-transform:uppercase}
h1{position:absolute;left:72px;bottom:120px;width:720px;margin:0;font-size:76px;line-height:.95;text-transform:uppercase}
h1 span{color:#f5c518}
p{position:absolute;left:72px;bottom:64px;margin:0;font:600 20px system-ui;color:#dfe3ea}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=o></div>
<div class=m><i><svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="#0f1522" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="17" width="12" height="3.6" rx="1.8"/><path d="M3.5 17v-4.5h3.2L8 9.5h3.5V17"/><path d="M11.5 12.5 16 5l4.5 3.5"/><path d="m20.5 8.5-.3 4.2-2.7.8"/></svg></i><div><b>T. DONK</b><small>Loonbedrijf · Kraanverhuur</small></div></div>
<h1>Grondverzet en loonwerk in de <span>Alblasserwaard</span></h1><p>Familiebedrijf in Streefkerk sinds 1961 · 06 16 25 22 07</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
