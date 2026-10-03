// public/og.jpg (1200x630): eigen foto rechts, woordmerk en kop in Chakra Petch op grafiet.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource/chakra-petch/files/chakra-petch-latin-700-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/p/hero.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:C;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:700}
body{margin:0;width:1200px;height:630px;background:#15161b;color:#f3f2ee;font-family:C;position:relative;overflow:hidden}
img{position:absolute;right:0;top:0;width:520px;height:630px;object-fit:cover;object-position:35% 40%}
.o{position:absolute;inset:0;background:linear-gradient(90deg,#15161b 0%,#15161b 56%,#15161b00 72%)}
.m{position:absolute;left:72px;top:64px;display:flex;align-items:center;gap:14px}
.m i{display:grid;place-items:center;width:56px;height:56px;background:#4b3fae;font-style:normal;font-size:34px;clip-path:polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,0 100%)}
.m span{font-size:16px;color:#b3b5bd;line-height:1}.m b{display:block;font-size:32px;color:#f3f2ee;margin-top:4px}
h1{position:absolute;left:72px;bottom:118px;width:640px;margin:0;font-size:92px;line-height:.95;letter-spacing:-.02em}
h1 span{color:#bdb6ff}
p{position:absolute;left:72px;bottom:62px;margin:0;font-size:22px;letter-spacing:.12em;text-transform:uppercase;color:#b3b5bd}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=o></div><div class=m><i>D</i><span>Herman van<b>Dommelen</b></span></div>
<h1>Graafkraan mét <span>machinist.</span></h1><p>Kraanverhuur · Papendrecht · sinds 2007</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
