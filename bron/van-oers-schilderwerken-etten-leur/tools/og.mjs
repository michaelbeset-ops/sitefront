// public/og.jpg (1200x630): nachtblauw vlak met woordmerk en kop links, hero-foto rechts, in Zilla Slab.
import { chromium } from 'playwright'; import fs from 'node:fs';
const kop = fs.readFileSync('node_modules/@fontsource/zilla-slab/files/zilla-slab-latin-700-normal.woff2').toString('base64');
const sans = fs.readFileSync('node_modules/@fontsource-variable/instrument-sans/files/instrument-sans-latin-wght-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:Z;src:url(data:font/woff2;base64,${kop}) format('woff2');font-weight:700}
@font-face{font-family:I;src:url(data:font/woff2;base64,${sans}) format('woff2');font-weight:100 900}
body{margin:0;width:1200px;height:630px;background:#0c2238;color:#f4f5f0;font-family:I;position:relative;overflow:hidden}
img{position:absolute;right:0;top:0;width:520px;height:630px;object-fit:cover;object-position:70% 50%}
.m{position:absolute;left:72px;top:68px;display:flex;gap:6px}.s{width:5px;background:radial-gradient(circle,#219a34 2px,transparent 2.3px) 0 0/5px 6px repeat-y}
.m b{display:block;background:#fff;color:#004077;font-family:Z;font-size:30px;padding:6px 12px 4px;letter-spacing:.02em}.m small{display:block;background:#219a34;color:#fff;font-family:Z;font-size:18px;padding:3px 12px 5px;letter-spacing:.05em}
h1{position:absolute;left:72px;bottom:140px;width:580px;margin:0;font-family:Z;font-weight:700;font-size:66px;line-height:1;letter-spacing:-.02em}h1 span{color:#7fd38e}
p{position:absolute;left:72px;bottom:72px;margin:0;font-size:20px;color:#b7c2cf}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=m><span class=s></span><span><b>VAN OERS</b><small>schilderwerken</small></span></div>
<h1>Schilderwerk met de afwerking van een <span>vakschilder</span>.</h1><p>Schildersbedrijf in Etten-Leur · 06 420 766 36</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
