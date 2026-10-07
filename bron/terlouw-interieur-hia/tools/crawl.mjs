// Haalt kernpagina's van terlouwinterieur.nl (alles behalve de ~400 plaatsnaam-SEO-pagina's, daarvan 3 als steekproef).
import fs from 'node:fs';
const uit = 'bron/web/site'; fs.mkdirSync(uit, { recursive: true });
const alle = fs.readFileSync('bron/web/sitemap.txt', 'utf8').split('\n').map(l => l.split(/\s+/)[0]).filter(Boolean);
const plaats = /-(s-gravendeel|hardinxveld-giessendam|sliedrecht|papendrecht|dordrecht|zwijndrecht|heerjansdam|hendrik-ido-ambacht|hoekse-waard(-2)?|gorinchem|zuid-holland|puttershoek|strijen|numansdorp|barendrecht|ridderkerk|drechtsteden|rijnmond)\/$/;
const kies = alle.filter(u => !plaats.test(u) || u.includes('project-details')).concat(['https://www.terlouwinterieur.nl/vouwgordijnen-dordrecht/','https://www.terlouwinterieur.nl/zonwering-hendrik-ido-ambacht/','https://www.terlouwinterieur.nl/screens-gorinchem/']);
const tekst = (h) => h.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<br\s*\/?>/gi, '\n').replace(/<\/(p|div|h\d|li|tr|a)>/gi, '\n').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&#8211;/g, '-').replace(/&#8217;/g, "'").replace(/&#038;/g, '&').replace(/[ \t\r]+/g, ' ').replace(/\n\s*\n+/g, '\n').trim();
const imgs = new Set();
for (const u of kies) {
  const naam = (u.replace('https://www.terlouwinterieur.nl/', '').replace(/\/$/, '') || 'home').replace(/[^a-z0-9]+/gi, '_');
  try { const r = await fetch(u, { headers: { 'user-agent': 'Mozilla/5.0' } }); const h = await r.text();
    fs.writeFileSync(`${uit}/${naam}.html`, h);
    const body = h.replace(/[\s\S]*?<body/i, '<body');
    fs.writeFileSync(`${uit}/${naam}.txt`, u + '\n' + (h.match(/<title>([^<]*)/)||[])[1] + '\n' + tekst(body));
    for (const m of h.matchAll(/(?:src|href|data-src|srcset)="([^"]+?\.(?:jpe?g|png|webp))[\s"]/gi)) imgs.add(m[1]);
    for (const m of h.matchAll(/url\(['"]?([^'")]+\.(?:jpe?g|png|webp))/gi)) imgs.add(m[1]);
  } catch (e) { console.log('ERR', u); }
}
fs.writeFileSync('bron/web/imgs.txt', [...imgs].join('\n'));
console.log('paginas', kies.length, 'imgs', imgs.size);
