// public/og.jpg (1200x630): eigen hero-foto met donker verloop, woordmerk en kop in M PLUS Rounded 1c.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource/m-plus-rounded-1c/files/m-plus-rounded-1c-latin-800-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:M;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:800}
body{margin:0;width:1200px;height:630px;background:#16181b;color:#f6f6f4;font-family:M;position:relative;overflow:hidden}
img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:60% 60%}
.v{position:absolute;inset:0;background:linear-gradient(90deg,#16181bf2 0%,#16181bcc 45%,#16181b33 100%)}
.m{position:absolute;left:72px;top:64px;font-size:40px;letter-spacing:-.02em;padding-right:14px}
.m:before,.m:after{content:"";position:absolute;border-radius:99px;background:#d0161e}.m:before{width:12px;height:12px;right:0;top:2px}.m:after{width:15px;height:15px;right:-12px;top:13px}
h1{position:absolute;left:72px;bottom:120px;width:640px;margin:0;font-size:72px;line-height:1.04;letter-spacing:-.035em}h1 span{color:#ff7d72}
p{position:absolute;left:72px;bottom:64px;margin:0;font-family:system-ui;font-size:22px;color:#d7dadd}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=v></div><div class=m>LAAIIN</div>
<h1>Een aanhanger huren, <span>snel geregeld.</span></h1><p>Meer dan 550 aanhangwagens · loods in Hank</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
