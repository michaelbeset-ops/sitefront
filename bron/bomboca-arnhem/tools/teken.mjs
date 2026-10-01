// Tekent de penseelrand (zoals de blauwe streepjes op hun bord) en het BB-ruitje van de gevel.
// node tools/teken.mjs  ->  public/rand.svg, public/rand-licht.svg, public/favicon.svg, src/data/ruit.ts
import fs from 'node:fs';
let s = 7;
const r = () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
// Eén streepje: een penseelstreek met een dikke kop en een iets smallere staart, licht scheef.
function streepjes(kleur) {
  const out = [];
  for (let i = 0; i < 15; i++) {
    const x = 8 + i * 16 + (r() - .5) * 2, w = 7.5 + r() * 2.4, top = 3 + r() * 4, h = 28 + r() * 6, rot = (r() - .5) * 7;
    const b = w * .8;
    out.push(`<path transform="rotate(${rot.toFixed(1)} ${x.toFixed(1)} ${(top + h / 2).toFixed(1)})" d="M${(x - w / 2).toFixed(1)} ${(top + w / 2).toFixed(1)}a${(w / 2).toFixed(1)} ${(w / 2).toFixed(1)} 0 0 1 ${w.toFixed(1)} 0L${(x + b / 2).toFixed(1)} ${(top + h - b / 2).toFixed(1)}a${(b / 2).toFixed(1)} ${(b / 2).toFixed(1)} 0 0 1 ${(-b).toFixed(1)} 0Z" fill="${kleur}"/>`);
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 40" width="240" height="40">${out.join('')}</svg>`;
}
s = 7; fs.writeFileSync('public/rand.svg', streepjes('#0e5d73'));
s = 7; fs.writeFileSync('public/rand-licht.svg', streepjes('#f4ddd8'));
// BB-ruitje: donkere ruit, lichte binnenlijn, een gespiegelde B en een B rug aan rug.
const B = 'M0 -8.5V8.5M0 -8.5H2.6a4.1 4.1 0 0 1 0 8.2H0M0 -.3H3.2a4.4 4.4 0 0 1 0 8.8H0';
const ruit = (bg, fg) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 40 40"><rect x="-13.5" y="-13.5" width="27" height="27" rx="2.5" transform="rotate(45)" fill="${bg}"/><rect x="-11" y="-11" width="22" height="22" rx="1.5" transform="rotate(45)" fill="none" stroke="${fg}" stroke-width=".9"/><g fill="none" stroke="${fg}" stroke-width="1.5" stroke-linejoin="round"><path transform="translate(.9 0)" d="${B}"/><path transform="translate(-.9 0) scale(-1 1)" d="${B}"/></g></svg>`;
fs.writeFileSync('public/favicon.svg', ruit('#13363d', '#f4ddd8'));
fs.writeFileSync('src/data/ruit.ts', `// Het BB-ruitje uit de kalklijst boven de deur, nagetekend (tools/teken.mjs).\nexport const ruit = ${JSON.stringify(ruit('currentColor', 'var(--ruit-lijn, #f4ddd8)').replace('<svg ', '<svg aria-hidden="true" class="block h-full w-full" '))};\n`);
console.log('klaar');
