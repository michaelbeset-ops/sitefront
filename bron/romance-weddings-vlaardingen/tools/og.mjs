// public/og.jpg (1200x630): kalkwit vlak, naam in Italiana, de zaal in een boog rechts.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource/italiana/files/italiana-latin-400-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/dansvloer.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:I;src:url(data:font/woff2;base64,${font}) format('woff2')}
body{margin:0;width:1200px;height:630px;background:#fffdfc;color:#22151b;font-family:I;position:relative;overflow:hidden}
.f{position:absolute;right:70px;top:60px;width:470px;height:570px;object-fit:cover;object-position:38% 50%;border-radius:235px 235px 0 0}
h1{position:absolute;left:80px;top:205px;margin:0;font-weight:400;font-size:112px;line-height:1;color:#9a1344}
p{position:absolute;left:84px;top:345px;margin:0;font-size:38px;line-height:1.2;width:520px}
small{position:absolute;left:86px;top:170px;font:600 14px system-ui;letter-spacing:.22em;color:#9a1344}</style>
<img class=f src="data:image/jpeg;base64,${foto}"><small>PARTYCENTRUM IN VLAARDINGEN</small>
<h1>Romance</h1><p>Weddings &amp; Events, twee zalen aan de haven</p>`);
await p.waitForTimeout(400);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
