// Alle namen, omschrijvingen, samenstellingen en prijzen van de productpagina's op smellies.nl (bekeken 1 oktober 2026).
// "Dupe van <merk>" en "geïnspireerd op <merk>" zijn bewust weggelaten; verder hun eigen tekst, licht opgeschoond
// (spelling, leestekens). Prijzen: 5 stuks € 2,75 (variant 6196551), 15 stuks € 8,00 (variant 5188161), uit hun
// eigen productgegevens. Choo Choo staat op hun site nu alleen als 15 stuks.
// Waskleur: gemeten in de foto (tools/kleuren.mjs). Families: onze indeling uit hun eigen omschrijving; zie PLAN.md.
import type { ImageMetadata } from 'astro';
import kleuren from './kleuren.json';

const rond = import.meta.glob<{ default: ImageMetadata }>('../assets/rond/*.jpg', { eager: true });
const macro = import.meta.glob<{ default: ImageMetadata }>('../assets/macro/*.jpg', { eager: true });
export const beeldRond = (b: string) => rond[`../assets/rond/${b}.jpg`].default;
export const beeldMacro = (b: string) => macro[`../assets/macro/${b}.jpg`].default;

export type Familie = 'fris' | 'bloemig' | 'zoet' | 'houtig' | 'herfst';
export const families: { id: Familie; naam: string }[] = [
  { id: 'fris', naam: 'Fris' },
  { id: 'bloemig', naam: 'Bloemig' },
  { id: 'zoet', naam: 'Zoet & kruidig' },
  { id: 'houtig', naam: 'Warm & houtig' },
  { id: 'herfst', naam: 'Herfst' },
];
export const famNaam = Object.fromEntries(families.map((f) => [f.id, f.naam])) as Record<Familie, string>;

export interface Optie { stuks: number; prijs: string; href: string }
export interface Geur {
  naam: string; slug: string; beeld: string; pad: string; kleur: string;
  fam: Familie[]; zin: string; tekst: string[]; noten: string[]; opties: Optie[]; herfst: boolean;
}

const WINKEL = 'https://www.smellies.nl/';
const maak = (naam: string, slug: string, pad: string, fam: Familie[], zin: string, tekst: string[], noten: string[] = [], alleen15 = false): Geur => {
  const herfst = pad.includes('/herfst/');
  const beeld = `${herfst ? 'herfst' : 'smellies'}-${slug}`;
  const [id, ...rest] = pad.split('/');
  const variant = (v: string) => `${WINKEL}${id}-${v}/${rest.join('/')}`;
  const opties: Optie[] = [
    ...(alleen15 ? [] : [{ stuks: 5, prijs: '2,75', href: variant('6196551') }]),
    { stuks: 15, prijs: '8,00', href: variant('5188161') },
  ];
  return { naam, slug, beeld, pad: WINKEL + pad, kleur: (kleuren as Record<string, string>)[beeld], fam: herfst ? ['herfst', ...fam] : fam, zin, tekst, noten, opties, herfst };
};

export const geuren: Geur[] = [
  maak('Adore', 'adore', 'a-50644283/smellies/adore/', ['bloemig'], 'Een zeer vrouwelijke geur, vol bloemenextracten.',
    ['Een zeer vrouwelijke geur, vol bloemenextracten. Om vrolijk van te worden!'], ['bergamot', 'rozen', 'jasmijn', 'amber']),
  maak('Angel', 'angel', 'a-50644375/smellies/angel/', ['zoet'], 'Een verrukkelijke samenstelling van diverse ingrediënten.',
    ['Een verrukkelijke samenstelling van diverse ingrediënten.'], ['citroen', 'honingmeloen', 'framboos', 'krenten', 'jasmijn', 'gardenia', 'nootmuskaat', 'muskus', 'sandelhout', 'patchouli']),
  maak('Apple Pie', 'apple-pie', 'a-50644892/smellies/apple-pie/', ['zoet'], 'De geur van vers gebakken appeltaart.',
    ['Een heerlijke geur van vers gebakken appeltaart!'], ['zoete warme appels', 'nootmuskaat', 'kaneel']),
  maak('Babypowder', 'babypowder', 'a-50644938/smellies/babypowder/', ['fris'], 'De welbekende geur van babypoeder.',
    ['De welbekende geur van babypoeder.']),
  maak('Baccarat', 'baccarat', 'a-85486221/smellies/baccarat/', ['houtig'], 'Een intense mix van jasmijn, saffraan en amber.',
    ['Een intense mix van jasmijn, saffraan en amber. Ideaal om de warmte in deze wintertijd naar binnen te brengen.'], ['jasmijn', 'saffraan', 'amber']),
  maak('Bedtime Baby', 'bedtime-baby', 'a-50644959/smellies/bedtime-baby/', ['bloemig'], 'Heerlijke geur vlak voor het slapen gaan.',
    ['Heerlijke geur vlak voor het slapen gaan!'], ['kamille', 'lavendel', 'mandarijn', 'neroli', 'lelie van dalen', 'lichte muskus']),
  maak('Belle', 'belle', 'a-50644982/smellies/belle/', ['zoet', 'bloemig'], 'Iris, peer en oranjebloesem op praline en vanille.',
    ['De nummer 1 geur van dit moment!'], ['iris', 'arabische jasmijn', 'peer', 'oranjebloesem', 'zwarte bes', 'praline', 'vanille', 'patchouli']),
  maak('Black Magic', 'black-magic', 'a-50645017/smellies/black-magic/', ['zoet'], 'Een hedendaagse geur van elegantie en moderniteit.',
    ['Een hedendaagse geur van elegantie en moderniteit.'], ['koffie', 'oranjebloesem', 'vanille']),
  maak('Black Orchid', 'black-orchid', 'a-53815175/smellies/black-orchid/', ['houtig'], 'Een luxueuze en sensuele geur.',
    ['Een luxueuze en sensuele geur.'], ['zwarte orchidee', 'specerijen', 'vanille', 'houtsoorten']),
  maak('Blue Fresh', 'blue-fresh', 'a-58966296/smellies/blue-fresh/', ['fris'], 'Een krachtige frisse geur, als fris gewassen kleding.',
    ['Een krachtige frisse geur die je doet denken aan fris gewassen kleding. Het maakt je vrolijk en opgeruimd. Het hele huis vult zich met een zalige frisse geur.']),
  maak('Blush', 'blush', 'a-50645028/smellies/blush/', ['houtig', 'bloemig'], 'Een oosterse, houtachtige geur. Een exotische bloemenzee.',
    ['Een oosterse, houtachtige geur. De samenstelling is een exotische bloemenzee.'], ['gardenia', 'fresia', 'jasmijn', 'turkse roos', 'koriander', 'vanille', 'patchouli', 'vetiver']),
  maak('Cherry Pie', 'cherry-pie', 'a-62274601/smellies/cherry-pie/', ['zoet'], 'Zalig zoete geur van kersentaart.',
    ['Zalig zoete geur van kersentaart. Het water loopt je in de mond.'], ['kersen', 'deeg', 'bitterkoekjes', 'bruine suiker', 'vanille', 'kaneel']),
  maak('Choo Choo', 'choo-choo', 'a-57569009/smellies/choo-choo/', ['bloemig'], 'Een onweerstaanbare bloemige geur.',
    ['Een onweerstaanbare bloemige geur die je meeneemt op een zintuiglijke reis vol charme en vrouwelijkheid. Hij opent met een sprankelende mix van frisse appel, sappige peer en zachte fresia.',
     'Het hart onthult een weelderige combinatie van pruim, jasmijn en orchidee, sensueel en elegant. De geur vloeit uiteindelijk over in een warme basis van hout, musk en een vleugje romige vanille.'],
    ['appel', 'fresia', 'peer', 'pruim', 'jasmijn', 'orchidee', 'houtachtige tonen', 'musk', 'vanille'], true),
  maak('Clean Cotton', 'clean-cotton', 'a-50645094/smellies/clean-cotton/', ['fris'], 'De bekende, heerlijk frisse geur.',
    ['De bekende, heerlijk frisse geur!'], ['citrus', 'poeder', 'hout', 'kaffir lime', 'limoenschilletjes', 'babypoeder', 'afrikaanse viooltjes', 'jasmijn', 'witte musk']),
  maak('Dame', 'dame', 'a-50645136/smellies/dame/', [], 'Super sensuele geur, een klassieker.',
    ['Super sensuele geur, een klassieker!']),
  maak('Fabulous Lady', 'fabulous-lady', 'a-77798180/smellies/fabulous-lady/', ['bloemig'], 'Een oriëntaalse bloemengeur vol rijke geuren.',
    ['Een heerlijke oriëntaalse bloemengeur vol rijke geuren zoals mandarijnbloesem, jasmijn en tonkaboon.'], ['mandarijn', 'jasmijn', 'tuberoos', 'vanille', 'mos', 'tonkaboon', 'ylang ylang']),
  maak('Forever & Ever', 'forever-ever', 'a-57569006/smellies/forever-ever/', ['bloemig', 'fris'], 'Frisse citrus, weelderige bloemen en zoet sandelhout.',
    ['Bekende klassieke parfumgeur. Perfecte combinatie van frisse citrus, weelderige bloemen en zoet sandelhout.'], ['citrus', 'freesia', 'salie', 'lelie van dalen', 'narcis', 'sandelhout', 'musk', 'vanille']),
  maak('Fresh Linen', 'fresh-linen', 'a-50645380/smellies/fresh-linen/', ['fris'], 'De geur van wasverzachter.',
    ['De geur van wasverzachter. Deze geur staat in de top 3 van populaire geuren!']),
  maak('Gingerbread', 'gingerbread', 'a-85486092/smellies/gingerbread/', ['zoet'], 'Doet denken aan vers gebakken peperkoekjes.',
    ['Een geur die je doet denken aan vers gebakken peperkoekjes. Met tonen van gember, kaneel, nootmuskaat en kruidnagel, die een warm en geruststellend aroma creëren. Ideaal om de warmte in deze wintertijd naar binnen te brengen.'],
    ['vanille', 'bruine suiker', 'citrus', 'kaneel', 'kruidnagel', 'gember', 'nootmuskaat']),
  maak('Juicy Orange', 'juicy-orange', 'a-51551235/smellies/juicy-orange/', ['fris'], 'Frisse sinaasappelgeur, aangevuld met frisse bloemen.',
    ['Juicy ontbrak nog in het assortiment! Heerlijk frisse sinaasappelgeur, aangevuld met frisse bloemen.'], ['sinaasappel', 'mandarijn', 'perzik', 'bergamot', 'aardbei', 'framboos', 'witte musk']),
  maak('Komkommer & aloe vera', 'komkommer-aloe-vera', 'a-50645531/smellies/komkommer-aloe-vera/', ['fris'], 'Een frisse, schone en lichtgroene geur.',
    ['Een frisse, schone en lichtgroene geur, met hints van het natuurlijke, milde aroma van aloë vera en de frisse, koele geur van komkommer. Heerlijk om de kamer op te frissen en een ontspannen sfeer te creëren.']),
  maak('Libre', 'libre', 'a-62274626/smellies/libre/', ['bloemig'], 'Citrus, limoen en sinaasappel met hints van jasmijn.',
    ['Een zeer elegante geur met topnoten van citrus, limoen en sinaasappel, kruidige middennoten en hints van jasmijn.'], ['citrus', 'limoen', 'sinaasappel', 'jasmijn', 'lelietje-van-dalen', 'muskus', 'vanille', 'amber']),
  maak('Light Blue', 'light-blue', 'a-50644903/smellies/light-blue/', ['fris', 'bloemig'], 'Een frisse geur met vele zachte bloemengeuren.',
    ['Een heerlijk frisse geur met vele zachte bloemengeuren.'], ['citroen', 'hyacint', 'appel', 'bamboe', 'cederhout', 'muskus', 'witte rozen', 'jasmijn']),
  maak('Million Lady', 'million-lady', 'a-50645550/smellies/million-lady/', ['bloemig'], 'Een zeer vrouwelijke geur.',
    ['Een zeer vrouwelijke geur.'], ['rijpe frambozen', 'zoete sinaasappels', 'mint', 'sinaasappelbloesem', 'pioenrozen', 'jasmijn', 'vanille', 'patchouli', 'honing', 'amber']),
  maak('Musk & Sandelwood', 'musk-sandelwood', 'a-50645671/smellies/musk-sandelwood/', ['houtig'], 'Warme tonen zoals musk, vetiver en sandelwood.',
    ['Typische sandelwoodgeur. Warme tonen zoals musk, vetiver en sandelwood.'], ['musk', 'lelie', 'ylang ylang', 'sandelwood', 'amber', 'vetiver']),
  maak('Mystic Forest', 'mystic-forest', 'a-50645558/smellies/mystic-forest/', ['houtig', 'zoet'], 'Zoet, houtachtig en aromatisch, met oud.',
    ['Zoete, houtachtige, aromatische en complexe geur. Hoofdbestanddeel is oud (in het Arabisch oudh), dat soms wordt aangeduid als vloeibaar goud.'], ['oud']),
  maak('Olympia', 'olympia', 'a-58475174/smellies/olympia/', ['fris', 'zoet'], 'Een oriëntaals frisse geur met zoete vanille.',
    ['Een oriëntaals frisse geur met zoete vanille.'], ['zoete sinaasappel', 'peer', 'waterjasmijn', 'gember', 'waterlelie', 'amber', 'vanille', 'sandelhout']),
  maak('Relax & Zen', 'relax-zen', 'a-53815451/smellies/relax-zen/', ['houtig'], 'Houtachtig. Werkt kalmerend en ontspannend.',
    ['Een zeer vrouwelijke, houtachtige geur. Werkt kalmerend en ontspannend.'], ['amber', 'zwarte orchidee', 'gember', 'waterlelie', 'kyara hout', 'jasmijn']),
  maak('Snuggels', 'snuggels', 'a-80973461/smellies/snuggels/', ['fris'], 'Zacht, fris en onweerstaanbaar schoon.',
    ['Een zachte, frisse en onweerstaanbaar schone geur die direct een gevoel van comfort en geborgenheid oproept. Hij opent met sprankelende citrusnoten van bergamot, die zorgen voor een frisse, lichte eerste indruk.',
     'De geur sluit warm en rustgevend af met een zachte basis van houtsoorten, amber en musk. Perfect voor liefhebbers van een fris gewassen, clean en comfortabel geurprofiel dat lang blijft hangen.'],
    ['bergamot', 'perzik', 'appel', 'kokosnoot', 'aardbei', 'lelietje-van-dalen', 'lelie', 'oranjebloesem', 'viooltje', 'houtsoorten', 'amber', 'musk']),
  maak('So Delicious', 'so-delicious', 'a-50645491/smellies/so-delicious/', ['fris'], 'De bekende frisse groene-appelgeur.',
    ['De bekende frisse groene-appelgeur.'], ['groene appel', 'exotische bloemen', 'sensueel hout']),
  maak('Space', 'space', 'a-50645629/smellies/space/', ['bloemig'], 'Licht gewaagd, maar zeker niet overheersend.',
    ['Licht gewaagde geur, maar zeker niet overheersend. Gewoon goed!'], ['meloen', 'mandarijntjes', 'oranjebloesem', 'jasmijn', 'rozen', 'houttonen', 'vanille', 'musk']),
  maak('Sunshine', 'sunshine', 'a-78505154/smellies/sunshine/', ['fris'], 'De voorjaarsgeur van Smellies.',
    ['Sunshine is de voorjaarsgeur van Smellies! Een heerlijke fruitige geur die je huis laat ruiken in de stijl van de bekende wasverzachter.'],
    ['groene munt', 'romig', 'sinaasappel', 'lelietje-van-dalen', 'jasmijn', 'dennen', 'vanille', 'tonkaboon', 'houtachtige witte muskus']),
  maak('Sweet Cookies', 'sweet-cookies', 'a-50645479/smellies/sweet-cookies/', ['zoet'], 'Alsof je net verse koekjes hebt gebakken.',
    ['Een lekkere zoete geur. Alsof je net verse koekjes hebt gebakken!'], ['kaneel', 'zoetige sinaasappel', 'speculaas', 'chocolade', 'appel', 'vanille']),
  maak('Sweet Jasmine', 'sweet-jasmine', 'a-50645668/smellies/sweet-jasmine/', ['bloemig', 'fris'], 'Een combinatie van zoet en fris.',
    ['Zoete jasmijn is een combinatie van zoet en fris, ook wel bekend als Toscaanse jasmijn. Een unieke combinatiegeur waar je lang van kunt genieten.'], ['jasmijn', 'citroen', 'lichte musk', 'bergamot', 'bloesem']),
  maak('Vanille', 'vanille', 'a-50645534/smellies/vanille/', ['zoet'], 'Warm, romig en heerlijk zoet.',
    ['Een warme, romige en heerlijk zoete geur die direct zorgt voor een knus en vertrouwd gevoel in huis. Hij opent met de volle, herkenbare geur van romige vanille en doet denken aan een vers bereid dessert of een bolletje vanille-ijs.',
     'De geur ontwikkelt zich tot een rijke en comfortabele geurbeleving met zachte, zoete nuances die warmte en gezelligheid uitstralen.'], ['romige vanille']),
  maak('Yes', 'yes', 'a-60635311/smellies/yes/', ['bloemig'], 'Een vrouwelijke, elegante geur.',
    ['Een vrouwelijke, elegante geur, voor de moderne vrouw.'], ['nektar', 'sandelhout', 'freesia', 'muskus', 'zwarte bes']),

  // Herfstcollectie (eigen categorie op smellies.nl)
  maak('Happy Autumn', 'happy-autumn', 'a-65943987/herfst/happy-autumn/', ['houtig'], 'Een frisse herfstochtend, vallende bladeren.',
    ['De nieuwe Happy Autumn geur neemt je mee naar een frisse herfstochtend, waar de lucht gevuld is met een vleugje citrus en de aarde onder je voeten zacht ruikt naar vallende bladeren. Terwijl je door het bos wandelt, voel je de warmte van amber en sandelhout die je omhult, als een zachte deken tegen de kou.',
     'De lichte tonen van eucalyptus en lavendel brengen rust en balans, terwijl de diepe, houtachtige basis van ceder en patchouli de geur zijn karakter en kracht geeft.'],
    ['bergamot', 'citroen', 'eucalyptus', 'lavendel', 'aardse herfstbladeren', 'amber', 'sandelhout', 'ceder', 'patchouli']),
  maak('Love Autumn', 'love-autumn', 'a-65943992/herfst/love-autumn/', ['zoet'], 'Warme zoete sinaasappel, gelaagd op gember.',
    ['Herfst betekent guur weer, binnen alles gezellig maken en een heerlijke herfstgeur in de brander. Een geur van warme zoete sinaasappel, gelaagd op gember met een licht bloemig gevoel. Niet te kruidig, maar vol met hartnoten van vanille, kruidnagel, kaneel en nootmuskaat.'],
    ['zoete sinaasappel', 'gember', 'vanille', 'kaneel']),
  maak('Sweet Autumn', 'sweet-autumn', 'a-65943997/herfst/sweet-autumn/', ['zoet'], 'Citroen, suikerspin en vanille.',
    ['Herfst betekent guur weer, binnen alles gezellig maken en een heerlijke herfstgeur in de brander. Sweet Autumn is een geur met zoete citrusakkoorden van citroen, muskus, suikerspinnen en vanille. Deze zoete geur brengt de zoetheid in huis.'],
    ['citroen', 'suikerspinnen', 'vanille', 'muskus']),
  maak('Pumpkin Spice', 'pumpkin-spice', 'a-102141336/herfst/pumpkin-spice/', ['zoet'], 'De ultieme belichaming van de herfst.',
    ['De geur Pumpkin Spice is de ultieme belichaming van de herfst. Zodra je hem ruikt, waan je je in een keuken waar net een versgebakken pompoentaart uit de oven komt.',
     'De kruidige warmte van kaneel en kruidnagel vult de lucht, terwijl zoete fruitnoten een speels accent geven. Op de achtergrond zorgen houtachtige tonen voor diepte en warmte, en de zachte geur van pompoen maakt het geheel compleet.'],
    ['kaneel', 'kruidnagel', 'zoete fruitnoten', 'houtachtige noten', 'pompoen']),
];

export const smellies = geuren.filter((g) => !g.herfst);
export const herfst = geuren.filter((g) => g.herfst);
export const geur = (slug: string) => geuren.find((g) => g.slug === slug)!;

/** Tint achter het productbeeld: de waskleur, gemengd met papier. */
export const tint = (kleur: string, pct = 30) => `color-mix(in oklab, ${kleur} ${pct}%, #f3f1ec)`;

/** Past ook bij: drie geuren uit dezelfde familie (vaste volgorde, zodat het per build gelijk blijft). */
export const pastBij = (g: Geur) => {
  const fam = g.fam.find((f) => f !== 'herfst') ?? g.fam[0];
  const rest = geuren.filter((x) => x.slug !== g.slug);
  const zelfde = rest.filter((x) => fam && x.fam.includes(fam));
  const lijst = (zelfde.length >= 3 ? zelfde : [...zelfde, ...rest.filter((x) => !zelfde.includes(x))]);
  const start = geuren.indexOf(g) % lijst.length;
  return [...lijst.slice(start), ...lijst.slice(0, start)].slice(0, 3);
};

export const mixen = [
  { naam: 'Flower mix', zin: 'zalige bloemengeuren', pad: WINKEL + 'a-55714915/mixen/flower-mix-10/' },
  { naam: 'Fresh mix', zin: 'frisse, niet overheersende geuren', pad: WINKEL + 'a-55714930/mixen/fresh-mix-10/' },
  { naam: 'Parfum mix', zin: 'bekende parfumgeuren', pad: WINKEL + 'a-55714906/mixen/parfum-mix-10/' },
  { naam: 'Sweet mix', zin: 'zoete en kruidige geuren', pad: WINKEL + 'a-55714937/mixen/sweet-mix-10/' },
];

/** Kleuren voor het smeltbeeld in de hero: gemeten in hun eigen wax-foto's (licht opgehelderd voor zachte overgangen). */
export const smeltPaletten = [
  { namen: ['Yes', 'Space', 'Light Blue', 'Musk & Sandelwood'], kleuren: ['#e9b9b3', '#a68fdc', '#93b3c1', '#ece8df'] },
  { namen: ['Juicy Orange', 'Sweet Jasmine', 'Baccarat', 'Musk & Sandelwood'], kleuren: ['#e0661a', '#e3cf9f', '#cfa3a9', '#ece8df'] },
  { namen: ['Choo Choo', 'Snuggels', 'Baccarat', 'Musk & Sandelwood'], kleuren: ['#c84a80', '#9a86d6', '#cfa3a9', '#ece8df'] },
  { namen: ['Komkommer & aloe vera', 'So Delicious', 'Relax & Zen', 'Clean Cotton'], kleuren: ['#86a557', '#dbe0b6', '#6f8f9c', '#ecebe8'] },
];
