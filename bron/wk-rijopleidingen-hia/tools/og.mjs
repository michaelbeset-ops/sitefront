// public/og.jpg (1200x630): nacht-vlak met woordmerk en kop, eigen vlootfoto eronder/rechts, in Sora.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/sora/files/sora-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:S;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:100 900}
body{margin:0;width:1200px;height:630px;background:#0b1530;color:#f3f6f8;font-family:S;position:relative;overflow:hidden}
img{position:absolute;left:0;bottom:0;width:1200px;height:330px;object-fit:cover;object-position:50% 72%}
.g{position:absolute;left:0;right:0;bottom:200px;height:130px;background:linear-gradient(180deg,#0b1530,#0b153000)}
.m{position:absolute;left:64px;top:52px;display:flex;align-items:center;gap:14px;font-weight:800;font-size:26px;letter-spacing:-.03em}
.m i{font-style:normal;color:#2bb0e8}
h1{position:absolute;left:64px;top:110px;margin:0;font-weight:800;font-size:66px;line-height:1;letter-spacing:-.045em}
h1 span{color:#2bb0e8}
p{position:absolute;right:64px;top:58px;margin:0;font-size:17px;letter-spacing:.12em;text-transform:uppercase;font-weight:600;color:#b4c0d3}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=g></div>
<div class=m><svg width="42" height="42" viewBox="0 0 48 48"><clipPath id="c"><circle cx="24" cy="24" r="22"/></clipPath><circle cx="24" cy="24" r="22" fill="#1d3b78"/><path clip-path="url(#c)" d="M-2 40C12 30 28 20 50 10" stroke="#fff" stroke-width="10" fill="none"/><path clip-path="url(#c)" d="M0 39C12 31 27 21.5 48 11.5" stroke="#2bb0e8" stroke-width="2.6" stroke-dasharray="4.5 3.5" fill="none"/></svg><span>WK <i>Rijopleidingen</i></span></div>
<p>Auto · Motor · Aanhanger</p>
<h1>Een uur rijles is bij ons<br><span>écht een uur.</span></h1>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 82 }); await b.close();
