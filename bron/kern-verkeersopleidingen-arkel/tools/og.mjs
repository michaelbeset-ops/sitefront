// public/og.jpg (1200x630): eigen hero-foto met donkerblauwe overloop, kop in Archivo Narrow, logo-wit.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/archivo-narrow/files/archivo-narrow-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero.jpg').toString('base64');
const logo = fs.readFileSync('src/assets/logo-wit.svg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:A;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:400 700}
body{margin:0;width:1200px;height:630px;background:#0f1638;color:#f4f5f7;font-family:A;position:relative;overflow:hidden}
.f{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:70% 40%}
.g{position:absolute;inset:0;background:linear-gradient(90deg,#0f1638f7 0%,#0f1638d9 45%,#0f163830 100%)}
.l{position:absolute;left:72px;top:64px;height:64px}
h1{position:absolute;left:72px;bottom:120px;margin:0;font-weight:700;font-size:92px;line-height:.9;text-transform:uppercase;width:640px}
h1 span{color:#f26a1b}
p{position:absolute;left:72px;bottom:64px;margin:0;font-size:24px;letter-spacing:.06em;text-transform:uppercase;color:#b7bfd8}</style>
<img class=f src="data:image/jpeg;base64,${foto}"><div class=g></div><img class=l src="data:image/svg+xml;base64,${logo}">
<h1>Leer niet alleen slagen. Leer <span>rijden.</span></h1><p>Auto · motor · bromfiets · aanhanger</p>`);
await p.waitForTimeout(400);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
