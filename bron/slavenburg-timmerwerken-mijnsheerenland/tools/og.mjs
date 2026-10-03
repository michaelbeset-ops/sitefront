// public/og.jpg (1200x630): donker vlak met woordmerk en kop links, eigen overkapping-foto rechts, in de eigen letter.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource/bai-jamjuree/files/bai-jamjuree-latin-700-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/overkapping-tafel.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:B;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:700}
body{margin:0;width:1200px;height:630px;background:#151b18;color:#f3f1eb;font-family:B;position:relative;overflow:hidden}
img{position:absolute;right:0;top:0;width:520px;height:630px;object-fit:cover;object-position:55% 50%}
.m{position:absolute;left:72px;top:68px;font-size:26px;letter-spacing:.02em;text-transform:uppercase}
.m small{display:block;font-size:13px;letter-spacing:.32em;color:#b9c1bc;margin-top:6px}
h1{position:absolute;left:72px;bottom:150px;width:580px;margin:0;font-size:66px;line-height:1;letter-spacing:-.03em}
h1 span{color:#a9d4bd}
p{position:absolute;left:72px;bottom:72px;margin:0;font-size:17px;letter-spacing:.18em;text-transform:uppercase;color:#b9c1bc}
i{position:absolute;left:72px;bottom:118px;width:60px;height:3px;background:#a9d4bd}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=m>Slavenburg<small>Timmerwerken</small></div>
<h1>Vakwerk in hout, van overkapping tot <span>dakopbouw.</span></h1><i></i><p>Timmerman in Mijnsheerenland</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
