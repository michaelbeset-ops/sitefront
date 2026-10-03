// public/og.jpg (1200x630): eigen hero-foto rechts, woordmerk en kop links in Manrope, festoenrand onderaan.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero.jpg').toString('base64');
const logo = fs.readFileSync('src/assets/logo.png').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:M;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:200 800}
body{margin:0;width:1200px;height:630px;background:#121316;color:#f6f4f1;font-family:M;position:relative;overflow:hidden}
.f{position:absolute;right:0;top:0;width:560px;height:616px;object-fit:cover;object-position:55% 55%}
.m{position:absolute;left:72px;top:64px;display:flex;align-items:center;gap:16px}
.m img{height:54px}.m b{font-weight:800;font-size:28px;letter-spacing:-.04em}
h1{position:absolute;left:72px;top:190px;width:560px;margin:0;font-weight:800;font-size:72px;line-height:1;letter-spacing:-.045em}
h1 span{color:#ff7a66}
p{position:absolute;left:72px;bottom:80px;margin:0;font-size:22px;color:#a9a6b8;font-weight:500}
.fe{position:absolute;left:0;right:0;bottom:0;height:14px;background:#e62c1b;-webkit-mask:radial-gradient(circle at 12px 14px,#000 11.5px,transparent 12px) 0 0/24px 14px repeat-x}</style>
<img class=f src="data:image/jpeg;base64,${foto}"><div class=m><img src="data:image/png;base64,${logo}"><b>Perfect Zonwering</b></div>
<h1>Zonwering en rolluiken, <span>perfect</span> op maat.</h1><p>Sinds 1994 in Zuid-Beijerland · 06 22 06 12 76</p><div class=fe></div>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
