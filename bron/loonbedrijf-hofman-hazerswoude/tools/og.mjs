// public/og.jpg (1200x630): eigen hero-foto met donkere overlay, logo op wit en de kop in Sen.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/sen/files/sen-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero.jpg').toString('base64');
const logo = fs.readFileSync('src/assets/logo.png').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:S;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:400 800}
body{margin:0;width:1200px;height:630px;background:#16130f;color:#f5f2ec;font-family:S;position:relative;overflow:hidden}
.f{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:64% 50%}
.o{position:absolute;inset:0;background:linear-gradient(90deg,#16130ff2 0%,#16130fbb 48%,#16130f22 100%)}
.l{position:absolute;left:64px;top:56px;background:#fff;padding:12px 16px;border-radius:6px}.l img{height:64px;display:block}
h1{position:absolute;left:64px;bottom:118px;width:640px;margin:0;font-weight:800;font-size:66px;line-height:1;letter-spacing:-.04em}
h1 span{color:#ff6f64}p{position:absolute;left:64px;bottom:62px;margin:0;font-size:20px;font-weight:600;color:#d8d1c6}</style>
<img class=f src="data:image/jpeg;base64,${foto}"><div class=o></div><div class=l><img src="data:image/png;base64,${logo}"></div>
<h1>Van sloot tot tuin, met eigen <span>machines.</span></h1><p>Loonbedrijf Hofman · Hazerswoude-Dorp · 06 21 57 89 19</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
