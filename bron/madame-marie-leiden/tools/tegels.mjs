// Tekent de Delftse tegels (hoekmotief + medaillon met appeltaart of kopje) als SVG.
// node tools/tegels.mjs  -> public/tegels.svg (plint, 3 tegels), public/favicon.svg, src/data/tegel.ts (inline logo)
import fs from 'node:fs';
const K = '#1c3474', W = '#c3cde8', P = '#f8f7f2';
const hoekOud = `<g fill="none" stroke="${K}" stroke-linecap="round" stroke-width="2.2"><path d="M0 21c7-1 13-5 16-11 2-4 3-7 3-10"/><path d="M0 11c5-1 9-4 10-11" stroke-width="1.6"/></g><circle cx="5.5" cy="5.5" r="2.6" fill="${K}"/><path d="M15 15c3 1 5 4 4 7" fill="none" stroke="${K}" stroke-width="1.4" stroke-linecap="round"/>`;
const hoek = `<path d="M0 0h17c0 6-3 11-8 14-3 2-6 3-9 3Z" fill="${W}"/><path d="M0 17c3 0 6-1 9-3 5-3 8-8 8-14" fill="none" stroke="${K}" stroke-width="2" stroke-linecap="round"/><path d="M0 9c4 0 8-3 9-9" fill="none" stroke="${K}" stroke-width="1.4" stroke-linecap="round"/><path d="M0 4c2 0 4-2 4-4" fill="none" stroke="${K}" stroke-width="1.6"/><path d="M14 19c2 2 3 4 2 6M19 14c2 2 4 3 6 2" fill="none" stroke="${K}" stroke-width="1.3" stroke-linecap="round"/>`;
const hoeken = [0, 90, 180, 270].map(r => `<g transform="rotate(${r} 50 50)">${hoek}</g>`).join('');
const taart = `<path d="M33 49c3-6 9-6 11-4 3-5 10-5 12-1 4-3 10-1 11 4l1 15c0 4-8 6-17 6s-18-2-18-6Z" fill="${W}"/>
<g fill="none" stroke="${K}" stroke-linecap="round" stroke-linejoin="round"><path d="M33 51v13c0 4 8 6 17 6s17-2 17-6V51" stroke-width="2"/>
<path d="M32 51c1-5 6-7 10-5 2-5 9-6 12-2 4-3 10-2 12 3 2 1 2 3 1 4-6 3-28 3-35 0Z" stroke-width="2"/>
<path d="M37 49c3 1 6 0 7-3M47 50c3 0 6-2 6-5M56 50c3 0 6-1 7-4M41 52c5 1 10 1 14-1M57 52c3 0 6-1 8-2" stroke-width="1.4"/>
<path d="M36 62c9 3 19 3 28 0" stroke-width="1" stroke-dasharray="2 3"/>
<path d="M28 72c8 3 36 3 44 0" stroke-width="2"/><path d="M46 74l1 5h6l1-5M41 81c5 1 13 1 18 0" stroke-width="1.8"/></g>`;
const kop = `<path d="M37 50h24v5c0 8-5 13-12 13s-12-5-12-13Z" fill="${W}"/>
<g fill="none" stroke="${K}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M37 50h24v5c0 8-5 13-12 13s-12-5-12-13Z"/><path d="M61 53c5 0 6 6 1 8"/>
<path d="M31 70c8 4 28 4 36 0"/><path d="M45 44c-3-3 0-5 0-8M52 44c-3-3 0-5 0-8" stroke-width="1.5"/></g>`;
const ster = `<g stroke="${K}" stroke-linejoin="round" stroke-width="1.6">${[0,72,144,216,288].map(r=>`<path transform="rotate(${r} 50 50)" d="M50 46c-7-5-9-13-4-19 2 3 3 4 4 4s2-1 4-4c5 6 3 14-4 19Z" fill="${W}"/>`).join('')}</g><circle cx="50" cy="50" r="4.5" fill="${K}"/><g fill="${K}">${[36,108,180,252,324].map(r=>`<circle transform="rotate(${r} 50 50)" cx="50" cy="31" r="1.6"/>`).join('')}</g>`;
const medaillon = (m, grond = true) => (grond ? `<path d="M27 80c7-3 16-2 23-1 8 1 16 0 23-2" fill="none" stroke="${W}" stroke-width="4" stroke-linecap="round"/>` : '') + m;
const tegel = (m, x = 0, grond = true) => `<g transform="translate(${x} 0)"><rect width="100" height="100" fill="#d9dad3"/><rect x="1" y="1" width="98" height="98" fill="url(#gl)"/>${hoeken}${medaillon(m, grond)}</g>`;
const defs = `<defs><radialGradient id="gl" cx="45%" cy="40%" r="75%"><stop offset="0" stop-color="#fbfaf6"/><stop offset="1" stop-color="#efeee7"/></radialGradient></defs>`;
fs.writeFileSync('public/tegels.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" width="400" height="100">${defs}${tegel(ster, 0, false)}${tegel(taart, 100)}${tegel(ster, 200, false)}${tegel(kop, 300)}</svg>`);
fs.writeFileSync('public/favicon.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${defs}${tegel(taart)}</svg>`);
const merk = (m) => `<svg viewBox="0 0 100 100" aria-hidden="true" class="h-full w-full">${defs}${tegel(m)}</svg>`;
fs.writeFileSync('src/data/tegel.ts', `// Gegenereerd door tools/tegels.mjs\nexport const tegelTaart = ${JSON.stringify(merk(taart).replace(/\n/g,''))};\nexport const tegelKop = ${JSON.stringify(merk(kop).replace(/\n/g,''))};\nexport const tegelSter = ${JSON.stringify(merk(ster).replace(/\n/g,''))};\n`);
