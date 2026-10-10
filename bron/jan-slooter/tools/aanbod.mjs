// Aanbod van MC-P Nederland op tractors-and-machinery.nl (dealer 845): id, titel, categorie, foto 1 (groot). GEEN prijzen gebruiken.
import fs from 'node:fs';
const UA = { 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/140.0.0.0' };
const items = [];
for (const f of ['bron/site/tam.html', 'bron/site/tam2.html']) {
  const h = fs.readFileSync(f, 'utf8');
  for (const m of h.matchAll(/href="(\/occasion\/(\d+)\/([^/]+)\/([^/]+)\/([^"]+))"/g)) items.push({ id: m[2], cat: m[3], merk: m[4], type: m[5], href: 'https://www.tractors-and-machinery.nl' + m[1] });
}
const uniek = [...new Map(items.map((x) => [x.id, x])).values()];
for (const it of uniek) {
  const h = await (await fetch(it.href, { headers: UA })).text();
  it.fotos = [...new Set(h.match(/\/media\/user\/[^"?']+/g) || [])].map((u) => 'https://www.tractors-and-machinery.nl' + u);
  const t = h.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, '').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ');
  it.oms = (t.match(/Omschrijving (.*?) Contactpersoon/) || [, ''])[1].slice(0, 300);
  it.staat = (t.match(/Staat: (\S+)/) || [, ''])[1];
  if (it.fotos[0]) fs.writeFileSync(`bron/aanbod/${it.id}.jpg`, Buffer.from(await (await fetch(it.fotos[0], { headers: UA })).arrayBuffer()));
  console.log(it.id, it.cat, it.merk, it.type, it.staat, it.fotos.length);
}
fs.writeFileSync('bron/aanbod/aanbod.json', JSON.stringify(uniek, null, 1));
