// public/og.jpg (1200x630): gevelbeeld boven, indigo rolluikpantser onder met kop in Pathway Gothic One + logo.
import { chromium } from 'playwright'; import fs from 'node:fs'; import sharp from 'sharp';
const font = fs.readFileSync('node_modules/@fontsource/pathway-gothic-one/files/pathway-gothic-one-latin-400-normal.woff2').toString('base64');
const foto = (await sharp('src/assets/gevel-screens.jpg').resize(1300).jpeg({ quality: 78 }).toBuffer()).toString('base64');
const logo = fs.readFileSync('src/components/Logo.astro', 'utf8').match(/<svg[\s\S]*<\/svg>/)[0].replace('class={cls}', 'style="height:44px;width:auto;color:#fff"');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:P;src:url(data:font/woff2;base64,${font}) format('woff2')}
body{margin:0;width:1200px;height:630px;background:#17112f;color:#fff;position:relative;overflow:hidden;font-family:system-ui,sans-serif}
img{position:absolute;left:0;top:0;width:100%;height:260px;object-fit:cover;object-position:50% 62%}
.l{position:absolute;left:64px;top:44px}
.pan{position:absolute;left:0;right:0;top:250px;bottom:0;background-color:#30235d;background-image:repeating-linear-gradient(180deg,#ffffff17 0 1px,transparent 1px 3px,#ffffff08 3px 14px,#0000002e 14px 17px,#ffffff0a 17px 18px,transparent 18px 26px)}
.pan:before{content:"";position:absolute;left:0;right:0;top:-10px;height:10px;background:linear-gradient(180deg,#5a4a9e,#30235d)}
h1{position:absolute;left:62px;top:282px;margin:0;font:400 104px/1 P}
h1 span{color:#c9c2f0}
p{position:absolute;left:64px;top:520px;margin:0;font-size:27px;color:#ffffffe0}
.g{position:absolute;inset:0 0 auto 0;height:140px;background:linear-gradient(180deg,#17112fb3,#17112f00)}
</style><img src="data:image/jpeg;base64,${foto}"><div class=g></div><div class=l>${logo}</div><div class=pan></div>
<h1>Rolluiken, brandroldeuren<br><span>en zonwering.</span></h1><p>Middeldijk 56a, Barendrecht · 0180 634 267</p>`);
await p.waitForTimeout(500);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 82 }); await b.close();
console.log(fs.statSync('public/og.jpg').size);
