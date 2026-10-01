// Tekent de kaart van het Noordereiland (Nieuwe Maas, Koningshaven, bruggen) uit een Overpass-export
// (tools/osm-noordereiland.json, OpenStreetMap, ODbL) en schrijft src/data/kaart.ts.
import fs from 'node:fs';
const d = JSON.parse(fs.readFileSync(new URL('./osm-noordereiland.json', import.meta.url), 'utf8'));
const [W0, E0, S0, N0] = [4.474, 4.512, 51.9035, 51.9205];
const k = Math.cos((51.912 * Math.PI) / 180);
const W = 1000, H = Math.round((W * (N0 - S0)) / ((E0 - W0) * k));
const P = (p) => [+(((p.lon - W0) / (E0 - W0)) * W).toFixed(1), +(((N0 - p.lat) / (N0 - S0)) * H).toFixed(1)];
const key = (p) => p.lat + ',' + p.lon;
function rings(members) {
  const segs = members.filter((m) => m.type === 'way' && m.geometry).map((m) => m.geometry.slice());
  const out = [];
  while (segs.length) {
    let r = segs.shift(); let grew = true;
    while (key(r[0]) !== key(r[r.length - 1]) && grew) {
      grew = false;
      for (let i = 0; i < segs.length; i++) {
        const s = segs[i]; const a = r[0], z = r[r.length - 1];
        if (key(s[0]) === key(z)) r = r.concat(s.slice(1));
        else if (key(s[s.length - 1]) === key(z)) r = r.concat(s.slice().reverse().slice(1));
        else if (key(s[s.length - 1]) === key(a)) r = s.concat(r.slice(1));
        else if (key(s[0]) === key(a)) r = s.slice().reverse().concat(r.slice(1));
        else continue;
        segs.splice(i, 1); grew = true; break;
      }
    }
    out.push(r);
  }
  return out;
}
const pad = (r) => 'M' + r.map((p) => P(p).join(' ')).join('L') + 'Z';
let water = '', eiland = ''; const brug = [];
for (const e of d.elements) {
  const t = e.tags || {};
  if (e.type === 'relation' && t.natural === 'water') water += rings(e.members).map(pad).join('');
  if (e.type === 'relation' && t.name === 'Noordereiland') eiland = rings(e.members).map(pad).join('');
  if (e.type === 'way' && /^(Willemsbrug|Erasmusbrug|Koninginnebrug)$/.test(t.name) && t.highway === 'secondary')
    brug.push({ n: t.name, d: 'M' + e.geometry.map((p) => P(p).join(' ')).join('L') });
}
// FEMM Scheepsuitrusting, Maaskade 132-B (OSM-node 8972078799)
const femm = P({ lat: 51.9122748, lon: 4.4914374 });
fs.writeFileSync(new URL('../src/data/kaart.ts', import.meta.url),
  `// Gegenereerd door tools/kaart.mjs uit OpenStreetMap-data (ODbL). Niet met de hand aanpassen.\nexport const kaart = ${JSON.stringify({ W, H, water, eiland, brug, femm })};\n`);
console.log(W, H, water.length, eiland.length, brug.length, femm);
