// public/og.jpg (1200x630): heldere sfeerfoto met kop en woordmerk, in de eigen letter.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource-variable/mona-sans/files/mona-sans-latin-standard-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero-mes.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:M;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:200 900;font-stretch:75% 125%}
body{margin:0;width:1200px;height:630px;background:#0d0d0d;color:#f3f2ef;font-family:M;position:relative;overflow:hidden}
img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:70% 50%}
.s{position:absolute;inset:0;background:linear-gradient(90deg,#0d0d0df0 0%,#0d0d0d99 45%,#0d0d0d10 80%)}
.m{position:absolute;left:72px;top:64px;display:flex;align-items:baseline;gap:14px}
.m b{font-weight:720;font-stretch:75%;font-size:40px;letter-spacing:.02em}
.m small{font-size:14px;letter-spacing:.26em;text-transform:uppercase;font-weight:560;color:#a9a7a1}
h1{position:absolute;left:72px;bottom:130px;margin:0;font-weight:640;font-stretch:75%;font-size:104px;line-height:.9;text-transform:uppercase}
p{position:absolute;left:72px;bottom:64px;margin:0;font-size:17px;letter-spacing:.16em;text-transform:uppercase;font-weight:560;color:#a9a7a1}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=s></div><div class=m><b>DAMDORP</b><small>Barbershop</small></div>
<h1>Making people<br>look good.</h1><p>Makado-Center 10, Alblasserdam</p>`);
await p.waitForTimeout(400);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 82 }); await b.close();
