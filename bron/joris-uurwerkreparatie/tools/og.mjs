// public/og.jpg (1200x630): woordmerk links op papier, eigen werkplaatsfoto rechts, in de eigen letter.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/hanken-grotesk/files/hanken-grotesk-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/kaliber-321.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:H;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:100 900}
body{margin:0;width:1200px;height:630px;background:#f1f0ed;color:#161719;font-family:H;position:relative;overflow:hidden}
img{position:absolute;right:0;top:0;width:504px;height:630px;object-fit:cover}
.m{position:absolute;left:72px;top:72px;display:flex;flex-direction:column;align-items:center}
.m b{font-weight:300;font-size:44px;letter-spacing:.5em;margin-right:-.5em;line-height:1}
.m small{font-size:15px;letter-spacing:.34em;margin-right:-.34em;text-transform:uppercase;margin-top:12px;font-weight:500;color:#86683f}
h1{position:absolute;left:72px;bottom:150px;width:560px;margin:0;font-weight:300;font-size:58px;line-height:1.04;letter-spacing:-.032em}
p{position:absolute;left:72px;bottom:72px;margin:0;font-size:17px;letter-spacing:.16em;text-transform:uppercase;font-weight:500;color:#5e5d59}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=m><b>JORIS</b><small>Uurwerkreparatie</small></div>
<h1>Uw horloge in handen van erkend vakmanschap.</h1><p>Officieel Omega Service Center, Herten</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
