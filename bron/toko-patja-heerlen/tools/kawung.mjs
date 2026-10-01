// Tekent het kawung-motief (klassieke batikbloem: vier ovalen rond een punt) als tegel en als favicon.
// node tools/kawung.mjs  ->  public/kawung.svg (rand, roze-koper), public/kawung-pandan.svg, public/favicon.svg, src/data/kawung.ts
import fs from 'node:fs';
const T = 40, c = T / 2;
const bloem = (kleur, hoeken = true) => {
  const p = [];
  for (const [sx, sy] of [[1, 1], [-1, 1], [-1, -1], [1, -1]]) {
    const d = 11.2, x = c + sx * d / Math.SQRT2 * 1.0, y = c + sy * d / Math.SQRT2;
    const rot = sx * sy > 0 ? 45 : -45;
    p.push(`<ellipse cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" rx="10.4" ry="5.6" transform="rotate(${rot} ${x.toFixed(2)} ${y.toFixed(2)})" fill="none" stroke="${kleur}" stroke-width="1.6"/>`);
    p.push(`<circle cx="${(c + sx * 7.6).toFixed(2)}" cy="${(c + sy * 7.6).toFixed(2)}" r="1.5" fill="${kleur}"/>`);
  }
  // kruisje in het hart en ruitjes op de hoeken waar vier bloemen samenkomen
  p.push(`<path d="M${c} ${c - 2.6}L${c + 2.6} ${c}L${c} ${c + 2.6}L${c - 2.6} ${c}Z" fill="${kleur}"/>`);
  if (hoeken) for (const [x, y] of [[0, 0], [T, 0], [0, T], [T, T]]) p.push(`<path d="M${x} ${y - 3.4}L${x + 3.4} ${y}L${x} ${y + 3.4}L${x - 3.4} ${y}Z" fill="${kleur}"/>`);
  return p.join('');
};
const tegel = (kleur) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${T} ${T}" width="${T}" height="${T}">${bloem(kleur)}</svg>`;
fs.writeFileSync('public/kawung.svg', tegel('#e7b8a6'));
fs.writeFileSync('public/kawung-pandan.svg', tegel('#9fd0bb'));
fs.writeFileSync('public/kawung-inkt.svg', tegel('#26282c'));
fs.writeFileSync('public/favicon.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${T} ${T}"><rect width="${T}" height="${T}" rx="6" fill="#26282c"/><g transform="translate(4 4) scale(.8)">${bloem("#e7b8a6", false)}</g></svg>`);
fs.writeFileSync('src/data/kawung.ts', `// Eén kawung-bloem (tools/kawung.mjs), in currentColor.\nexport const kawung = ${JSON.stringify(`<svg aria-hidden="true" viewBox="0 0 ${T} ${T}" class="block h-full w-full">${bloem('currentColor', false)}</svg>`)};\n`);
console.log('klaar');
