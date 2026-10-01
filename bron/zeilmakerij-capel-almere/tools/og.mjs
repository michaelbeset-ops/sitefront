import { chromium } from 'playwright'; import fs from 'node:fs';
const D = 'C:/Users/Micha/Downloads/Sitefront/demos/';
const b64 = (f) => fs.readFileSync(f).toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
// Capel
let d = D + 'zeilmakerij-capel-almere';
await p.setContent(`<style>@font-face{font-family:Z;src:url(data:font/woff2;base64,${b64(d + '/node_modules/@fontsource/zilla-slab/files/zilla-slab-latin-700-normal.woff2')})}
@font-face{font-family:H;src:url(data:font/woff2;base64,${b64(d + '/node_modules/@fontsource/hanken-grotesk/files/hanken-grotesk-latin-400-normal.woff2')})}
body{margin:0;width:1200px;height:630px;display:grid;grid-template-columns:560px 46px 1fr;background:#eef0ee;color:#121619;font-family:H}
.f{background:url(data:image/jpeg;base64,${b64(d + '/src/assets/werkbank-1971.jpg')}) 66% 45%/cover;position:relative}
.f span{position:absolute;left:30px;bottom:22px;font:700 72px Z;color:#fff;text-shadow:0 2px 16px #0006}
.z{background:radial-gradient(circle,#eef0ee 0 5px,#8d9499 5.5px 6.5px,#d9dddf 7px 9px,#6c7378 9.5px 10.5px,#0000 11px) 50% 50%/100% 128px repeat-y,repeating-linear-gradient(180deg,#ffffffd0 0 8px,#0000 8px 13px) 7px 0/1.5px 100% no-repeat,repeating-linear-gradient(180deg,#ffffffd0 0 8px,#0000 8px 13px) calc(100% - 7px) 0/1.5px 100% no-repeat,#1846b4}
.t{padding:70px 50px;display:flex;flex-direction:column;justify-content:space-between}
h1{font:700 64px/.95 Z;margin:0;letter-spacing:-.015em} h1 b{color:#1846b4} p{margin:0;font-size:22px;color:#50575d} p b{display:block;font:700 40px Z;color:#121619;margin-top:6px}</style>
<div class="f"><span>1971</span></div><div class="z"></div><div class="t"><h1>Zeil gescheurd? Tent lek?<br><b>Wij naaien het.</b></h1><p>Zeilmakerij Capel, De Steiger 7c, Almere<b>036 534 88 12</b></p></div>`);
await p.waitForTimeout(300); await p.screenshot({ path: d + '/public/og.jpg', type: 'jpeg', quality: 82 });
// Giethoorn
d = D + 'zeilmakerij-giethoorn';
const wimpel = fs.readFileSync(d + '/src/data/site.ts', 'utf8').match(/wimpel = `(.*)`;/)[1];
await p.setContent(`<style>@font-face{font-family:K;src:url(data:font/woff2;base64,${b64(d + '/node_modules/@fontsource/krona-one/files/krona-one-latin-400-normal.woff2')})}
@font-face{font-family:I;src:url(data:font/woff2;base64,${b64(d + '/node_modules/@fontsource/instrument-sans/files/instrument-sans-latin-400-normal.woff2')})}
body{margin:0;width:1200px;height:630px;background:#0b1638;color:#fff;font-family:I;position:relative;overflow:hidden}
.f{position:absolute;right:0;top:0;bottom:0;width:560px;background:url(data:image/jpeg;base64,${b64(d + '/src/assets/kap-meeuw-duo.jpg')}) 60% 55%/cover}
.f:before{content:'';position:absolute;inset:0;background:linear-gradient(90deg,#0b1638,#0b163800 45%)}
.t{position:absolute;left:64px;top:60px;width:700px} svg{height:84px;color:#fff}
h1{font:400 58px/1.1 K;margin:34px 0 0;letter-spacing:-.02em} p{font-size:24px;color:#c3cddf;margin:26px 0 0}
.w{position:absolute;left:0;right:0;bottom:56px;height:30px;background:repeating-linear-gradient(90deg,#ffffffb0 0 26px,#0000 26px 52px) 0 50%/100% 2px no-repeat,#18275a}
.k{position:absolute;left:0;right:0;bottom:0;height:34px;background:#2c5b8a}</style>
<div class="f"></div><div class="t"><svg viewBox="0 0 60 80">${wimpel}</svg><h1>Met de auto<br>of met de boot.</h1><p>De Zeilmakerij Giethoorn &middot; Beulakerweg 129AA &middot; 0521 36 21 23</p></div><div class="w"></div><div class="k"></div>`);
await p.waitForTimeout(300); await p.screenshot({ path: d + '/public/og.jpg', type: 'jpeg', quality: 82 });
await b.close();
