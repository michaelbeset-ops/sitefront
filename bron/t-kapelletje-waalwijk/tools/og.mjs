// public/og.jpg (1200x630): kalkwit vlak met kop in Libre Caslon, eigen terrasfoto in een boog rechts.
import { chromium } from 'playwright'; import fs from 'node:fs';
const font = fs.readFileSync('node_modules/@fontsource/libre-caslon-display/files/libre-caslon-display-latin-400-normal.woff2').toString('base64');
const foto = fs.readFileSync('src/assets/terras-zon.jpg').toString('base64');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:C;src:url(data:font/woff2;base64,${font}) format('woff2')}
body{margin:0;width:1200px;height:630px;background:#f2f3ee;color:#1a1d1a;font-family:C;position:relative;overflow:hidden}
.f{position:absolute;right:64px;top:56px;width:440px;height:574px;object-fit:cover;object-position:62% 50%;border-radius:999px 999px 0 0/46% 46% 0 0}
h1{position:absolute;left:72px;top:150px;width:600px;margin:0;font-weight:400;font-size:86px;line-height:.98;letter-spacing:-.02em}
h1 span{color:#4a5b42}
p{position:absolute;left:72px;bottom:70px;margin:0;font:600 22px system-ui;color:#565c54}</style>
<img class=f src="data:image/jpeg;base64,${foto}"><h1>Restaurant &amp; terras naast het <span>kapelletje</span></h1><p>'t Kapelletje · Kloosterweg 71, Waalwijk</p>`);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 84 }); await b.close();
