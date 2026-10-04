// public/og.jpg (1200x630): antraciet vlak met woordmerk en kop links, hero-foto rechts, in Nunito.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/nunito/files/nunito-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:N;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:200 1000}
body{margin:0;width:1200px;height:630px;background:#17191c;color:#f6f3ee;font-family:N;position:relative;overflow:hidden}
img{position:absolute;right:0;top:0;width:520px;height:630px;object-fit:cover;object-position:75% 50%}
.m{position:absolute;left:72px;top:68px;display:flex;align-items:center;gap:16px}
.m b{font-weight:900;font-size:34px;letter-spacing:-.03em}
.m small{display:block;font-size:13px;letter-spacing:.26em;text-transform:uppercase;font-weight:700;color:#f0a072;margin-top:4px}
h1{position:absolute;left:72px;bottom:140px;width:580px;margin:0;font-weight:900;font-size:62px;line-height:1;letter-spacing:-.04em}
h1 span{color:#f0a072}
p{position:absolute;left:72px;bottom:72px;margin:0;font-size:19px;font-weight:700;color:#b9b3ab}</style>
<img src="data:image/jpeg;base64,${foto}">
<div class=m><svg width="64" viewBox="0 0 60 44" fill="none"><ellipse cx="30" cy="22" rx="27.5" ry="19.5" stroke="#8d949c" stroke-width="3"/><path d="M25 9.5v16.2a7.3 7.3 0 0 1-12.6 5" stroke="#f0a072" stroke-width="3.4" stroke-linecap="round"/><path d="M31 9.5h3.2a12.5 12.5 0 0 1 0 25H31z" stroke="#f0a072" stroke-width="3.4" stroke-linejoin="round"/></svg><div><b>JD installatie</b><small>en onderhoud</small></div></div>
<h1>Een binnenklimaat waar u op kunt <span>vertrouwen.</span></h1><p>CV, airco, sanitair en leidingwerk in Katwijk</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
