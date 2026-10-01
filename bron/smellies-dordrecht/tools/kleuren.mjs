// Waskleur per geur: gemeten in de ronde uitsnede (gemiddelde van de lichtste 60% pixels, zodat schaduwen niet meetellen).
import sharp from 'sharp'; import fs from 'node:fs';
const uit = {};
for (const f of fs.readdirSync('src/assets/rond')) {
  const { data } = await sharp(`src/assets/rond/${f}`).resize(60, 60).raw().toBuffer({ resolveWithObject: true });
  const px = []; for (let i = 0; i < data.length; i += 3) px.push([data[i], data[i + 1], data[i + 2]]);
  px.sort((a, b) => (b[0] + b[1] + b[2]) - (a[0] + a[1] + a[2]));
  const top = px.slice(0, Math.round(px.length * 0.6));
  const m = [0, 1, 2].map((k) => Math.round(top.reduce((s, p) => s + p[k], 0) / top.length));
  uit[f.replace('.jpg', '')] = '#' + m.map((v) => v.toString(16).padStart(2, '0')).join('');
}
fs.writeFileSync('src/data/kleuren.json', JSON.stringify(uit, null, 1)); console.log(uit);
