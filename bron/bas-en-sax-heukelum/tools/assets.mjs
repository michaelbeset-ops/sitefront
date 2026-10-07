import sharp from 'sharp';
const L = [
 ['bron/kand1/Adolf_Sax_Project_15.jpg','hero-adolphe-sax.jpg'],
 ['bron/kand1/Adolf_Sax_Project_29.jpg','bariton-adolphe-sax.jpg'],
 ['bron/kand1/Pierret_Modele_6_1.jpg','pierret-revisie.jpg'],
 ['bron/kand1/toongaten_vlakken.jpg','toongaten-vlakken.jpg'],
 ['bron/kand1/patch_bariton.jpeg','patch-bariton.jpg'],
 ['bron/kand2/Martin%20handcraft%20tenor%20saxofoon%20(5).jpeg','martin-handcraft.jpg'],
 ['bron/kand2/Selmer%20Paris%201955%20low%20E%20(4).jpeg','selmer-paris-1955.jpg'],
 ['bron/kand2/Paperclip%20contra%20basklarinet%20(13).jpeg','paperclip-contrabas.jpg'],
 ['bron/kand1/mondstukken.jpg','mondstukkenkast.jpg'],
 ['bron/kand1/contra_alt_curved.jpeg','curved-mondstukken.jpg'],
 ['bron/google/eig/e01.jpg','sax-kleppen.jpg'],
];
for (const [a,b] of L) { const m = await sharp(a).rotate().resize(2400,2400,{fit:'inside',withoutEnlargement:true}).jpeg({quality:88}).toFile('src/assets/'+b); console.log(b, m.width, m.height); }
