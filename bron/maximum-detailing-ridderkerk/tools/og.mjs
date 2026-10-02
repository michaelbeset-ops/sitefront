// public/og.jpg (1200x630): heldfoto met donkere gradient links, kop zoals de hero, in de eigen letters.
import { chromium } from 'playwright'; import fs from 'node:fs';
const kop = fs.readFileSync('node_modules/@fontsource-variable/saira/files/saira-latin-wdth-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero-ferrari.jpg').toString('base64');
const logo = fs.readFileSync('src/assets/logo.png').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:A;src:url(data:font/woff2;base64,${kop}) format('woff2');font-weight:100 900;font-stretch:50% 125%}
body{margin:0;width:1200px;height:630px;background:#07090c;color:#f6f5f2;font-family:A;position:relative;overflow:hidden}
.f{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 60%}
.o{position:absolute;inset:0;background:linear-gradient(90deg,#07090cf2 0%,#07090cb0 45%,#07090c22 100%)}
.m{position:absolute;top:50px;left:72px;display:flex;align-items:center;gap:16px;font-weight:800;font-stretch:80%;font-size:32px;text-transform:uppercase}
.m img{width:78px;height:71px}
h1{position:absolute;left:72px;top:210px;margin:0;font-weight:800;font-stretch:82%;font-size:104px;line-height:.92;text-transform:uppercase}
h1 span{color:#2aa8e0}
p{position:absolute;left:72px;bottom:64px;margin:0;font-size:24px;font-weight:600;color:#f2f4f6d9;font-family:system-ui}</style>
<img class=f src="data:image/jpeg;base64,${foto}"><div class=o></div><div class=m><img src="data:image/png;base64,${logo}">Maximum&nbsp;<span style='color:#aeb7c2'>Detailing</span></div>
<h1>Kwaliteit<br>boven <span>kwantiteit.</span></h1><p>Auto detailing in Ridderkerk · 4,9 op Google</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
