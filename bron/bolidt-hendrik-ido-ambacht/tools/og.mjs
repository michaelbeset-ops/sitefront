// public/og.jpg (1200x630): hun dakterras met kop in Hubot Sans.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/hubot-sans/files/hubot-sans-latin-wdth-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/campus-dak.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:H;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:200 900;font-stretch:75% 125%}
body{margin:0;width:1200px;height:630px;background:#171716;color:#fff;position:relative;overflow:hidden;font-family:system-ui}
.f{position:absolute;inset:0;width:1200px;height:630px;object-fit:cover;object-position:50% 60%}
.g{position:absolute;inset:0;background:linear-gradient(90deg,#171716f0 0%,#171716b0 45%,#17171610 80%)}
.b{position:absolute;left:72px;top:150px;display:flex;width:120px;height:7px}.b i{flex:169;background:#ef7521}.b u{flex:46;background:#fff}
h1{position:absolute;left:70px;top:180px;margin:0;font:780 74px/1 H;font-stretch:122%;letter-spacing:-.025em}
h1 span{color:#ef7521}p{position:absolute;left:72px;top:440px;margin:0;font-size:24px;color:#ffffffd9}</style>
<img class=f src="data:image/jpeg;base64,${foto}"><div class=g></div><div class=b><i></i><u></u></div>
<h1>Zelf bedacht,<br>zelf gemaakt,<br><span>zelf aangebracht.</span></h1><p>Bolidt · vloer- en deksystemen · Hendrik-Ido-Ambacht</p>`);
await p.waitForTimeout(500);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
