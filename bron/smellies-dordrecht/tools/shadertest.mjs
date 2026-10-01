import { chromium } from 'playwright'; import { build } from 'esbuild'; import fs from 'node:fs';
const js = (await build({ entryPoints: ['src/scripts/smelt.ts'], bundle: true, write: false, format: 'iife', globalName: 'S' })).outputFiles[0].text;
const pals = [["#e9b9b3","#a68fdc","#93b3c1","#f1e6d6"],["#e0661a","#e3cf9f","#cfa3a9","#ece8df"],["#c84a80","#9a86d6","#cfa3a9","#efe6da"],["#86a557","#dbe0b6","#6f8f9c","#ecebe8"]];
const b = await chromium.launch({ args: ['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader'] });
const p = await b.newPage({ viewport: { width: 1440, height: 860 } });
await p.setContent(`<style>body{margin:0}canvas{width:100vw;height:100vh;display:block}</style><canvas id=c></canvas><script>${js}</script>`);
const out = [];
for (let i = 0; i < pals.length; i++) {
  await p.evaluate((pal) => { const c = document.getElementById('c'); const n = c.cloneNode(); c.replaceWith(n); S.smelt(n, [pal]); }, pals[i]);
  await p.waitForTimeout(700);
  await p.screenshot({ path: `shots/_shader${i}.png` });
}
await b.close();
