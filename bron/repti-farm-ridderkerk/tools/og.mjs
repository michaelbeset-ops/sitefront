// public/og.jpg (1200x630): kalk vlak, kop in Darker Grotesque, heldfoto rechts in de terrariumlijst.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/darker-grotesque/files/darker-grotesque-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:D;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:300 900}
body{margin:0;width:1200px;height:630px;background:#eef0ea;font-family:D;position:relative;overflow:hidden}
.r{position:absolute;right:60px;top:60px;width:470px;height:510px;background:#0b1310;padding:9px 9px 24px;box-sizing:border-box;border-radius:4px}
.r img{width:100%;height:100%;object-fit:cover;object-position:40% 50%}
h1{position:absolute;left:70px;top:150px;margin:0;font-weight:850;font-size:112px;line-height:.86;color:#0f4a3b;letter-spacing:-.01em}
h1 span{color:#101a15}p{position:absolute;left:72px;top:420px;margin:0;font:500 26px system-ui;color:#4f5b54}
b{position:absolute;left:72px;top:80px;font-weight:900;font-size:44px;color:#0f4a3b}</style>
<b>Repti-Farm</b><h1>Gespecialiseerd<br><span>in reptielen.</span></h1><p>Dierenspeciaalzaak in Ridderkerk, sinds 2003</p>
<div class=r><img src="data:image/jpeg;base64,${foto}"></div>`);
await p.waitForTimeout(400); await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
