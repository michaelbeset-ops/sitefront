const sharp = require('sharp'); const pre = process.argv[2];
(async () => {
  const fs = require('fs'); const f = fs.readdirSync('shots').filter((x) => x.startsWith(`_${pre}-390-`)).sort((a, b) => parseInt(a.split('-').pop()) - parseInt(b.split('-').pop()));
  for (let g = 0; g * 5 < f.length; g++) {
    const part = f.slice(g * 5, g * 5 + 5); const comps = [];
    for (let i = 0; i < part.length; i++) comps.push({ input: await sharp('shots/' + part[i]).resize(300).toBuffer(), left: i * 310, top: 0 });
    await sharp({ create: { width: 1550, height: 1390, channels: 3, background: '#888' } }).composite(comps).png().toFile(`shots/mob-${pre}-${g}.png`);
  }
})();
