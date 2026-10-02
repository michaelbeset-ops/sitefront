// public/og.jpg (1200x630): heldfoto donker, woordmerk en kop in het midden, in de eigen letter.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/archivo/files/archivo-latin-wdth-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero-kickboksen.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:A;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:100 900;font-stretch:62% 125%}
body{margin:0;width:1200px;height:630px;background:#101112;color:#f3f2ef;font-family:A;position:relative;overflow:hidden;text-align:center}
img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:42% 50%;filter:contrast(1.12)}
.o{position:absolute;inset:0;background:radial-gradient(ellipse at center,#10111299 0%,#101112b8 60%,#101112e6 100%)}
.m{position:absolute;top:64px;left:0;right:0;font-weight:500;font-stretch:125%;font-size:26px;letter-spacing:.34em;margin-right:-.34em}
h1{position:absolute;left:0;right:0;top:220px;margin:0;font-weight:300;font-stretch:112%;font-size:72px;line-height:1.04;letter-spacing:-.035em}
p{position:absolute;left:0;right:0;bottom:70px;margin:0;font-size:15px;letter-spacing:.18em;text-transform:uppercase;font-weight:500;font-stretch:112%;color:#f0676b}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=o></div><div class=m>KWIKKERS</div>
<h1>Taekwondo en kickboksen<br>in Ridderkerk.</h1><p>Scheldeplein 4, Bolnes</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
