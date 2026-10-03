// public/og.jpg (1200x630): licht vlak met woordmerk en kop links, eigen Puma-foto rechts, in Red Hat Display.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/red-hat-display/files/red-hat-display-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:R;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:300 900}
body{margin:0;width:1200px;height:630px;background:#f6f7f9;color:#0f1216;font-family:R;position:relative;overflow:hidden}
img{position:absolute;right:0;top:0;width:500px;height:630px;object-fit:cover;object-position:50% 62%}
.m{position:absolute;left:72px;top:64px}.blok{display:flex;height:46px;outline:2px solid #0f1216;outline-offset:-2px;width:max-content}
.i{width:46px;background:#fff;display:grid;place-items:center;color:#2b5379}.n{background:#0f1216;color:#fff;font-weight:800;font-size:26px;letter-spacing:.04em;padding:0 16px;display:grid;place-items:center}
.s{font-family:Georgia,serif;font-size:18px;margin-top:6px}
h1{position:absolute;left:72px;top:220px;width:600px;margin:0;font-weight:900;font-size:84px;line-height:.95;letter-spacing:-.04em}h1 span{color:#2b5379}
p{position:absolute;left:72px;bottom:64px;margin:0;font-size:20px;font-weight:600;color:#535c66}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=m><div class=blok><div class=i><svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"><path d="M5 21V6.5M8.5 21V6.5M5 6.5 4 4M5 6.5 6.6 3.8M8.5 6.5 7.4 4M8.5 6.5l1.6-2.7"/><path d="M15 21V5M18.5 21V8M15 9l-2-2M15 9l2-2.2M15 12.5l-1.8-1.6M15 12.5l1.9-1.7M18.5 8l-1.3-2.4M18.5 8l1.4-2.4"/></svg></div><div class=n>MOGO</div></div><div class=s>Autopoetsbedrijf</div></div>
<h1>Uw auto weer <span>als nieuw.</span></h1><p>Poetsen en polijsten in Meerkerk · 4,8 op Google</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
