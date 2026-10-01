// Tekent public/favicon.svg uit de lauwerkrans (src/data/krans.ts): wit op bordeaux.
import fs from 'node:fs';
const src = fs.readFileSync(new URL('../src/data/krans.ts', import.meta.url), 'utf8');
const js = src.replace(/: number/g, '').replace(/: boolean/g, '').replace(/export /g, '');
const kransPad = new Function(js + '; return kransPad;')();
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#7b1e2c"/><g color="#ffffff" transform="translate(4 4) scale(.92)">${kransPad}</g><text x="50" y="62" text-anchor="middle" font-family="Impact, 'Arial Narrow', sans-serif" font-weight="700" font-size="30" fill="#ffffff">045</text></svg>`;
fs.writeFileSync(new URL('../public/favicon.svg', import.meta.url), svg);
console.log('favicon.svg', svg.length, 'bytes');
