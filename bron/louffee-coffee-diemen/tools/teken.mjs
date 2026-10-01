// Tekent public/stoep.svg (de gepixelde grijs-wit-zwarte bestrating voor de deur) en public/favicon.svg (het gevelhart).
import fs from 'node:fs';
let s = 7; const r = () => ((s = (s * 16807) % 2147483647) / 2147483647);
const kleuren = ['#e7e6e3', '#e7e6e3', '#d2d1ce', '#d2d1ce', '#a9aaa8', '#77797a', '#3d3f40'];
const B = 480, H = 48, rij = 6; let rects = '';
for (let y = 0; y < H; y += rij) {
  let x = -Math.floor(r() * 12);
  while (x < B) {
    const w = [6, 12, 12, 18, 24][Math.floor(r() * 5)];
    const c = kleuren[Math.floor(r() * kleuren.length)];
    rects += `<rect x="${x}" y="${y}" width="${w}" height="${rij}" fill="${c}"/>`;
    x += w;
  }
}
fs.writeFileSync('public/stoep.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${B} ${H}" width="${B}" height="${H}" shape-rendering="crispEdges">${rects}</svg>`);
export const hart = 'M50 92C24 74 6 58 6 36 6 19 18 8 32 8c8 0 14 4 18 10 4-6 10-10 18-10 14 0 26 11 26 28 0 22-18 38-44 56Z';
fs.writeFileSync('public/favicon.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="${hart}" fill="#5f6264"/><path d="${hart}" fill="none" stroke="#fff" stroke-width="5" transform="translate(50 50) scale(.84) translate(-50 -50)"/><text x="50" y="62" text-anchor="middle" font-family="Georgia,serif" font-size="44" font-style="italic" fill="#fff">L</text></svg>`);
console.log('klaar');
