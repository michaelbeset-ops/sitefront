// public/og.jpg (1200x630): donker vlak met woordmerk en kop links, eigen badkamerfoto rechts, in Lato.
import { chromium } from 'playwright'; import fs from 'node:fs';
const f900 = fs.readFileSync('node_modules/@fontsource/lato/files/lato-latin-900-normal.woff2').toString('base64');
const f700 = fs.readFileSync('node_modules/@fontsource/lato/files/lato-latin-700-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero.jpg').toString('base64');
const tegel = [0,1,2].flatMap(i=>[0,1,2].map(j=>`<rect x="${i*8.2}" y="${j*8.2}" width="7.4" height="7.4" fill="${(i+j)%2?'none':'#66d35c'}" stroke="${(i+j)%2?'#f6f5f1':'none'}" stroke-opacity=".35" stroke-width=".9"/>`)).join('');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:L;src:url(data:font/woff2;base64,${f900});font-weight:900}@font-face{font-family:L;src:url(data:font/woff2;base64,${f700});font-weight:700}
body{margin:0;width:1200px;height:630px;background:#151816;color:#f6f5f1;font-family:L;position:relative;overflow:hidden}
img{position:absolute;right:0;top:0;width:500px;height:630px;object-fit:cover;object-position:60% 60%}
.m{position:absolute;left:72px;top:64px;display:flex;align-items:center;gap:16px}.m b{font-weight:900;font-size:40px;letter-spacing:-.03em}.m small{display:block;font-weight:700;font-size:13px;letter-spacing:.2em;text-transform:uppercase;color:#b8bfba;margin-top:4px}
h1{position:absolute;left:72px;bottom:150px;width:600px;margin:0;font-weight:900;font-size:66px;line-height:1.02;letter-spacing:-.03em}h1 span{color:#66d35c}
p{position:absolute;left:72px;bottom:76px;margin:0;font-weight:700;font-size:18px;letter-spacing:.16em;text-transform:uppercase;color:#b8bfba}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=m><svg width="58" height="58" viewBox="0 0 40 40"><g transform="translate(20 2.6) rotate(45)">${tegel}</g></svg><span><b>D. Hus</b><small>Tegel- en bouwbedrijf</small></span></div>
<h1>Tegelwerk om door een <span>ringetje</span> te halen.</h1><p>Tegelzetter en bouwbedrijf in Maassluis</p>`);
await p.waitForTimeout(300); await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
