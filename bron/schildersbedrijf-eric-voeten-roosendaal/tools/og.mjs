// public/og.jpg (1200x630): eigen hero-foto met donker verloop, woordmerk en kop in Lora.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/lora/files/lora-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero.jpg').toString('base64');
const vl = ['#2e3192', '#662d91', '#ec008c', '#ed1c24', '#f47920', '#fff200', '#8dc63f', '#006838', '#00aeef', '#939598'];
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:L;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:400 700}
body{margin:0;width:1200px;height:630px;position:relative;overflow:hidden;font-family:L;color:#f6f4ef;background:#111813}
img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:60% 50%}
.o{position:absolute;inset:0;background:linear-gradient(90deg,#111813f5 0%,#111813d0 48%,#11181333 100%)}
.m{position:absolute;left:72px;top:64px;background:#000;padding:12px 20px;display:flex;flex-direction:column;align-items:center;gap:6px}
.m small{font-size:20px}.m b{font-size:30px;font-weight:600}.v{display:flex;gap:3px}.v i{width:16px;height:9px;display:block}
h1{position:absolute;left:72px;bottom:120px;margin:0;font-size:72px;line-height:1.02;letter-spacing:-.03em;font-weight:700}
h1 span{color:#9ed4b3}p{position:absolute;left:72px;bottom:62px;margin:0;font:600 18px system-ui;letter-spacing:.18em;text-transform:uppercase;color:#9ed4b3}
.s{position:absolute;left:0;right:0;bottom:0;height:10px;display:grid;grid-template-columns:repeat(10,1fr)}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=o></div>
<div class=m><small>Schildersbedrijf</small><span class=v>${vl.map(k=>`<i style="background:${k}"></i>`).join('')}</span><b>Eric Voeten</b></div>
<h1>Schilderwerk dat jarenlang<br><span>strak</span> blijft.</h1><p>Schilder in Roosendaal · Repair Care</p>
<div class=s>${vl.map(k=>`<i style="background:${k}"></i>`).join('')}</div>`);
await p.waitForTimeout(400);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
