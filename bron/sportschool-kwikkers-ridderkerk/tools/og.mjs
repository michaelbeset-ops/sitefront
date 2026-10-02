// public/og.jpg (1200x630): heldfoto met donkere gradient links, kop zoals de hero, in de eigen letters.
import { chromium } from 'playwright'; import fs from 'node:fs';
const kop = fs.readFileSync('node_modules/@fontsource-variable/archivo/files/archivo-latin-wdth-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero-kickboksen.jpg').toString('base64');
const logo = fs.readFileSync('src/assets/logo.png').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:A;src:url(data:font/woff2;base64,${kop}) format('woff2');font-weight:100 900;font-stretch:62% 125%}
body{margin:0;width:1200px;height:630px;background:#0f1011;color:#f6f5f2;font-family:A;position:relative;overflow:hidden}
.f{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:40% 50%;filter:contrast(1.1)}
.o{position:absolute;inset:0;background:linear-gradient(90deg,#0f1011f2 0%,#0f1011c2 45%,#0f101144 100%)}
.m{position:absolute;top:56px;left:72px;display:flex;align-items:center;gap:16px;font-weight:800;font-size:28px;letter-spacing:-.02em}
.m img{width:64px;height:64px}
h1{position:absolute;left:72px;top:210px;margin:0;font-weight:800;font-stretch:104%;font-size:104px;line-height:.95;letter-spacing:-.045em}
h1 span{color:#ff6b70}
p{position:absolute;left:72px;bottom:64px;margin:0;font-size:24px;font-weight:600;color:#f6f5f2cc}</style>
<img class=f src="data:image/jpeg;base64,${foto}"><div class=o></div><div class=m><img src="data:image/png;base64,${logo}">Sportschool Kwikkers</div>
<h1>Hard trainen,<br>met <span>respect.</span></h1><p>Taekwondo en kickboksen · Scheldeplein 4, Bolnes</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
