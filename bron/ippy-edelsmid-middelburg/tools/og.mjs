// public/og.jpg (1200x630): hun ring met de gele draad, met woordmerk en kop in Cinzel.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/cinzel/files/cinzel-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/ig-rozenkwarts-saffier.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:C;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:400 900}
body{margin:0;width:1200px;height:630px;background:#f3f1ee;color:#191816;font-family:C;position:relative;overflow:hidden}
img{position:absolute;right:0;top:0;width:520px;height:630px;object-fit:cover;object-position:46% 46%}
.m{position:absolute;left:72px;top:64px;font-size:30px;font-weight:600;letter-spacing:.2em}
h1{position:absolute;left:72px;top:170px;width:580px;margin:0;font-weight:500;font-size:62px;line-height:1.1}
p{position:absolute;left:72px;bottom:62px;margin:0;font:600 20px system-ui;color:#5c5953}
svg{position:absolute;left:72px;top:400px}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=m>IPPY</div>
<h1>Van uw oude juwelen een nieuw verhaal</h1>
<svg width="520" height="40" viewBox="0 0 400 40"><path d="M2 26 C 70 40, 120 6, 190 20 S 300 40, 330 18 C 345 6, 370 4, 398 12" fill="none" stroke="#d6a531" stroke-width="3" stroke-linecap="round"/></svg>
<p>Edelsmid · Langeviele 52, Middelburg · open op afspraak</p>`);
await p.waitForTimeout(400);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
