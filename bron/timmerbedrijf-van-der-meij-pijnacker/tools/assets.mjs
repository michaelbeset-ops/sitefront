// Kopieert de gekozen eigen foto's (portfolio timmerbedrijfvandermeij.nl + Google-profiel) naar src/assets, max 2000px.
import sharp from 'sharp'; import fs from 'node:fs';
const dir = process.argv[2];
const map = {
  'hero.jpg': '_g-avond.jpg',
  'overkapping.jpg': '_fb2017.jpg',
  'kapschuur.jpg': '_slide2020.jpg',
  'met-berging.jpg': 'maatwerk-hoekmodel-platdak__20200529_120520-min.jpg',
  'serre.jpg': 'aluminium-serre__20190318_173441-min.jpg',
  'colorado.jpg': 'huisje-colorado__Resultaat-rechts-1.jpg',
  'biohort.jpg': 'biohort-berging-europa-3__Biohort-Europa-3.jpg',
  'pergola.jpg': 'pergola-met-zonwering__Resultaat-7.jpg',
  'vakwerk.jpg': 'douglas-overkapping-met-vlonder__Bewerking-van-staanders.jpg',
  'mike.png': '_mike.png',
  'p-hoekmodel.jpg': 'maatwerk-hoekmodel-platdak__20200529_091725-min.jpg',
  'p-rob.jpg': 'kapschuur-robs-tuinverbouwing__20190411_201223tv.jpg',
  'p-prestige.jpg': 'prestige-douglas-overkapping__Eindresultaat-met-wandjes-2.jpg',
  'p-veranda.jpg': 'aluminium-veranda__20200408_161643.jpg',
  'p-tuinkamer.jpg': 'tuinkamer-met-glas__20180821_122923.jpg',
  'p-dakpannen.jpg': 'overkapping-met-dakpannen__Resultaat-zijkant.jpg',
  'vn-serre-voor.jpg': 'overkapping-met-serre-en-glazen-schuifpui__20180312_082725-min.jpg',
  'vn-serre-na.jpg': 'overkapping-met-serre-en-glazen-schuifpui__20180321_170730-min.jpg',
  'vn-vlonder-voor.jpg': 'gelijkvloerse-vlonder__Krom-getrokken-planken.jpg',
  'vn-vlonder-na.jpg': 'gelijkvloerse-vlonder__Eindresultaat.jpg',
  'vn-hoek-voor.jpg': 'douglas-overkapping-met-vlonder__Begin-situatie.jpg',
  'vn-hoek-na.jpg': 'douglas-overkapping-met-vlonder__Maatwerk-overkapping-met-verlichting-2.jpg',
};
const bron = [];
for (const [uit, inn] of Object.entries(map)) {
  const src = `${dir}/${inn}`; if (!fs.existsSync(src)) { console.log('MIST', inn); continue; }
  let s = sharp(src).rotate().resize(2000, 2000, { fit: 'inside', withoutEnlargement: true });
  s = uit.endsWith('.png') ? s.png() : s.jpeg({ quality: 82, mozjpeg: true });
  const info = await s.toFile(`src/assets/${uit}`);
  console.log(uit, info.width + 'x' + info.height);
  bron.push(`${uit}  <-  ${inn}`);
}
fs.writeFileSync('src/assets/BRONNEN.txt', "Eigen foto's van Timmerbedrijf van der Meij (opgehaald 3-10-2026):\n- portfolio op timmerbedrijfvandermeij.nl (/projects/ en /project/*), originelen zonder maat-suffix\n- hero.jpg: Google-bedrijfsprofiel, foto van de eigenaar (jul 2021)\n- overkapping.jpg/kapschuur.jpg: homepage-slider/-kaarten van hun site\n\n" + bron.join('\n') + '\n');
