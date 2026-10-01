// WhatsApp-linkvoorbeeld public/og.jpg (1200x630): de batikfoto met het servetzakje erop, zoals de hero.
// Draaien vanuit scratchpad/pw (daar staat playwright): node <pad>/tools/og.mjs <pad>
import { chromium } from 'playwright'; import fs from 'node:fs';
const d = process.argv[2];
const b64 = (f) => fs.readFileSync(f).toString('base64');
const foto = b64(`${d}/src/assets/batik.jpg`);
const font = b64(`${d}/node_modules/@fontsource/tomorrow/files/tomorrow-latin-300-normal.woff2`);
const font5 = b64(`${d}/node_modules/@fontsource/tomorrow/files/tomorrow-latin-500-normal.woff2`);
const kawung = fs.readFileSync(`${d}/src/data/kawung.ts`, 'utf8').match(/"(<svg.*<\/svg>)"/)[1].replace(/\\"/g, '"');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:T;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:300}
@font-face{font-family:T;src:url(data:font/woff2;base64,${font5}) format('woff2');font-weight:500}
body{margin:0;width:1200px;height:630px;position:relative;overflow:hidden;font-family:T,sans-serif}
img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 50%}
.z{position:absolute;left:80px;top:70px;width:380px;height:600px;background:#26282c;color:#e7b8a6;text-align:center;box-sizing:border-box;padding-top:46px}
.k{width:64px;height:64px;margin:0 auto;border:1px solid #e7b8a6b3;border-radius:50%;padding:11px;box-sizing:border-box}
h1{font-weight:300;font-size:64px;line-height:1.02;letter-spacing:.2em;margin:30px -0.2em 0 0;text-transform:uppercase}
p{font-weight:500;font-size:14px;letter-spacing:.16em;text-transform:uppercase;line-height:1.6;margin:22px 0 0}
.l{width:300px;margin:30px auto 0;border-top:1px solid #e7b8a64d;padding-top:26px;color:#f6f6f3;font:italic 30px/1.2 Georgia,serif;letter-spacing:0;text-transform:none}</style>
<img src="data:image/jpeg;base64,${foto}"><div class="z"><div class="k" style="color:#e7b8a6">${kawung}</div><h1>Toko<br>Patja</h1>
<p>Indonesische specialiteiten<br>Wilhelminaplein 5, Heerlen</p></div>`);
await p.waitForTimeout(300);
await p.screenshot({ path: `${d}/public/og.jpg`, type: 'jpeg', quality: 80 }); await b.close();
