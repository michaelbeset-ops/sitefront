// public/og.jpg (1200x630): cementzwart vlak met woordmerk en kop links, sfeerfoto (gespiegeld) rechts, in Space Grotesk.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource/space-grotesk/files/space-grotesk-latin-700-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/hero.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:S;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:700}
body{margin:0;width:1200px;height:630px;background:#17181a;color:#f4f2ee;font-family:S;position:relative;overflow:hidden}
img{position:absolute;right:0;top:0;width:520px;height:630px;object-fit:cover;object-position:20% 50%;transform:scaleX(-1)}
.m{position:absolute;left:72px;top:72px;display:flex;align-items:center;gap:16px}
.t{width:52px;height:52px;background:#b4461a;display:grid;place-items:center}
.m b{font-size:32px;letter-spacing:.02em;display:block}.m small{display:block;font-size:13px;letter-spacing:.2em;color:#b7b4ae;margin-top:4px}
h1{position:absolute;left:72px;bottom:150px;width:600px;margin:0;font-size:72px;line-height:.98;letter-spacing:-.045em}
h1 span{color:#f08a4b}
p{position:absolute;left:72px;bottom:72px;margin:0;font-size:18px;letter-spacing:.14em;text-transform:uppercase;color:#b7b4ae}</style>
<img src="data:image/jpeg;base64,${foto}"><div class=m><span class=t><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><path d="M2.5 14.5h19l-1.5 4h-16z"/><path d="M12 14.5v-4"/><rect x="8" y="4.5" width="8" height="6" rx="3"/></svg></span><span><b>ROUBOS</b><small>STUKADOORSBEDRIJF</small></span></div>
<h1>Strak stucwerk voor een <span>goede prijs.</span></h1><p>Stukadoor in 's-Gravendeel</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
