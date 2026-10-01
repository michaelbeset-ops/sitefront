// public/og.jpg (1200x630): het smeltbeeld met het woordmerk, in de eigen letter.
import { chromium } from 'playwright'; import { build } from 'esbuild'; import fs from 'node:fs';
const js = (await build({ entryPoints: ['src/scripts/smelt.ts'], bundle: true, write: false, format: 'iife', globalName: 'S' })).outputFiles[0].text;
const font = fs.readFileSync('node_modules/@fontsource-variable/geist/files/geist-latin-wght-normal.woff2').toString('base64');
const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(`<style>@font-face{font-family:G;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:100 900}
body{margin:0;width:1200px;height:630px;position:relative;overflow:hidden;font-family:G;color:#2e2f34}
canvas{position:absolute;inset:0;width:100%;height:100%}
.m{position:absolute;left:0;right:0;top:232px;text-align:center;font-weight:300;font-size:112px;letter-spacing:.38em;margin-right:-.38em;line-height:1}
.m sup{font-size:.22em;letter-spacing:0;vertical-align:top;position:relative;top:.55em;margin-left:-1.45em;font-weight:400}
.t{position:absolute;left:0;right:0;top:384px;text-align:center;font-size:17px;letter-spacing:.16em;text-transform:uppercase;font-weight:500}
.d{position:absolute;left:48px;bottom:40px;font-size:24px;letter-spacing:-.02em}</style>
<canvas id=c></canvas><div class=m>SMELLIES<sup>®</sup></div><div class=t>Scents &amp; Happiness</div><div class=d>Handgemaakte geurbonbons, Dordrecht</div><script>${js}</script>`);
await p.evaluate(() => S.smelt(document.getElementById('c'), [['#e9b9b3', '#a68fdc', '#93b3c1', '#ece8df']]));
await p.waitForTimeout(800);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 82 });
await b.close();
