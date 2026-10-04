// public/og.jpg (1200x630): eigen dakfoto met donkere overlay, woordmerk en kop in Unbounded.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/unbounded/files/unbounded-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:U;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:100 900}
body{margin:0;width:1200px;height:630px;background:#121412;color:#f2f2ed;font-family:U;position:relative;overflow:hidden}
img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:60% 50%}
.o{position:absolute;inset:0;background:linear-gradient(90deg,#121412f2 0%,#121412b3 50%,#12141233 100%)}
svg{position:absolute;left:72px;top:64px;height:52px}
h1{position:absolute;left:72px;bottom:150px;width:760px;margin:0;font-weight:700;font-size:76px;line-height:1;letter-spacing:-.045em}
h1 span{color:#a9c79a}
p{position:absolute;left:72px;bottom:76px;margin:0;font-size:19px;letter-spacing:.14em;text-transform:uppercase;font-weight:500;color:#cfd3cb}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=o></div>
<svg viewBox="0 0 69 34" fill="none" stroke-width="3.4"><path d="M3.7 3.7h7.6a13.3 13.3 0 0 1 0 26.6H3.7Z" stroke="#f2f2ed"/><path d="M27.2 2.5 34.6 31.5" stroke="#7b9c6b"/><path d="M38.6 2.8 45.6 31 52.3 8.6 59.1 31 66.1 2.8" stroke="#f2f2ed"/></svg>
<h1>Specialist in <span>platte daken.</span></h1><p style="text-transform:none;letter-spacing:.04em">DW Dakbedekking en Montage · Vlijmen</p>`);
await p.waitForTimeout(400);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
