// Alle namen, prijzen, omschrijvingen en samenstellingen van smellies.nl (categorie- en productpagina's,
// bekeken 1 oktober 2026). "Dupe van <merk>" is bewust weggelaten. De zin is hun eigen zin, soms ingekort.
// Kleur = gemeten in hun eigen productfoto van de wax. Families: onze indeling, afgeleid uit hun eigen
// omschrijving (woorden als fris, bloemen, zoet, kruidig, houtachtig) of hun samenstelling; zie PLAN.md.
import type { ImageMetadata } from 'astro';
const fotos = import.meta.glob<{ default: ImageMetadata }>('../assets/wax/*.jpg', { eager: true });
export const foto = (bestand: string) => fotos[`../assets/wax/${bestand}.jpg`].default;

export type Familie = 'fris' | 'bloemig' | 'zoet' | 'houtig';
export const families: { id: Familie; naam: string }[] = [
  { id: 'fris', naam: 'Fris' },
  { id: 'bloemig', naam: 'Bloemig' },
  { id: 'zoet', naam: 'Zoet & kruidig' },
  { id: 'houtig', naam: 'Warm & houtig' },
];

export interface Geur { naam: string; slug: string; pad: string; kleur: string; fam: Familie[]; zin: string; noten: string[] }

const g = (naam: string, slug: string, pad: string, kleur: string, fam: Familie[], zin: string, noten: string[] = []): Geur =>
  ({ naam, slug: `smellies-${slug}`, pad, kleur, fam, zin, noten });

/** De 36 Smellies uit de categorie SMELLIES, in hun eigen (alfabetische) volgorde. Allemaal € 2,75. */
export const smellies: Geur[] = [
  g('Adore', 'adore', 'a-50644283/smellies/adore/', '#e16a02', ['bloemig'], 'Een zeer vrouwelijke geur, vol bloemen extracten.', ['bergamot', 'rozen', 'jasmijn', 'amber']),
  g('Angel', 'angel', 'a-50644375/smellies/angel/', '#95a8b0', ['zoet'], 'Een verrukkelijke samenstelling van diverse ingrediënten.', ['citroen', 'honingmeloen', 'framboos', 'nootmuskaat', 'sandelhout']),
  g('Apple Pie', 'apple-pie', 'a-50644892/smellies/apple-pie/', '#aa7143', ['zoet'], 'De geur van vers gebakken appeltaart.', ['zoete warme appels', 'nootmuskaat', 'kaneel']),
  g('Babypowder', 'babypowder', 'a-50644938/smellies/babypowder/', '#bdaf9b', ['fris'], 'De welbekende geur van babypoeder.', ['babypoeder']),
  g('Baccarat', 'baccarat', 'a-85486221/smellies/baccarat/', '#c8a0a4', ['houtig'], 'Een intense mix van jasmijn, saffraan en amber.', ['jasmijn', 'saffraan', 'amber']),
  g('Bedtime Baby', 'bedtime-baby', 'a-50644959/smellies/bedtime-baby/', '#785b8e', ['bloemig'], 'Heerlijke geur vlak voor het slapen gaan.', ['kamille', 'lavendel', 'neroli', 'lelie van dalen']),
  g('Belle', 'belle', 'a-50644982/smellies/belle/', '#d0bbab', ['zoet', 'bloemig'], 'Iris, peer en oranjebloesem op praline en vanille.', ['iris', 'peer', 'oranjebloesem', 'praline', 'vanille']),
  g('Black Magic', 'black-magic', 'a-50645017/smellies/black-magic/', '#9c938e', ['zoet'], 'Een hedendaagse geur van elegantie en moderniteit.', ['koffie', 'oranjebloesem', 'vanille']),
  g('Black Orchid', 'black-orchid', 'a-53815175/smellies/black-orchid/', '#b2acac', ['houtig'], 'Een luxueuze en sensuele geur.', ['zwarte orchidee', 'specerijen', 'vanille', 'houtsoorten']),
  g('Blue Fresh', 'blue-fresh', 'a-58966296/smellies/blue-fresh/', '#b4bfc2', ['fris'], 'Een krachtige frisse geur die je doet denken aan fris gewassen kleding.'),
  g('Blush', 'blush', 'a-50645028/smellies/blush/', '#b61b0f', ['houtig', 'bloemig'], 'Een oosterse, houtachtige geur. Een exotische bloemenzee.', ['gardenia', 'fresia', 'turkse roos', 'vanille', 'vetiver']),
  g('Cherry Pie', 'cherry-pie', 'a-62274601/smellies/cherry-pie/', '#da2f2a', ['zoet'], 'Zalig zoete geur van kersentaart.', ['kersen', 'bitterkoekjes', 'bruine suiker', 'kaneel']),
  g('Choo Choo', 'choo-choo', 'a-57569009/smellies/choo-choo/', '#bf4479', ['bloemig'], 'Een onweerstaanbare bloemige geur.', ['appel', 'peer', 'fresia', 'pruim', 'orchidee', 'vanille']),
  g('Clean Cotton', 'clean-cotton', 'a-50645094/smellies/clean-cotton/', '#a7a5a3', ['fris'], 'De bekende, heerlijk frisse geur.', ['kaffir lime', 'babypoeder', 'jasmijn', 'witte musk']),
  g('Dame', 'dame', 'a-50645136/smellies/dame/', '#cda194', [], 'Super sensuele geur, een klassieker.'),
  g('Fabulous Lady', 'fabulous-lady', 'a-77798180/smellies/fabulous-lady/', '#c34b87', ['bloemig'], 'Een oriëntaalse bloemengeur vol rijke geuren.', ['mandarijn', 'jasmijn', 'tuberoos', 'tonkaboon', 'ylang ylang']),
  g('Forever & Ever', 'forever-ever', 'a-57569006/smellies/forever-ever/', '#a38ac0', ['bloemig', 'fris'], 'Frisse citrus, weelderige bloemen en zoet sandelhout.', ['citrus', 'freesia', 'salie', 'narcis', 'sandelhout']),
  g('Fresh Linen', 'fresh-linen', 'a-50645380/smellies/fresh-linen/', '#cfb5ad', ['fris'], 'De geur van wasverzachter. In de top 3 van populaire geuren.'),
  g('Gingerbread', 'gingerbread', 'a-85486092/smellies/gingerbread/', '#b08b67', ['zoet'], 'Doet denken aan vers gebakken peperkoekjes.', ['bruine suiker', 'kaneel', 'kruidnagel', 'gember', 'nootmuskaat']),
  g('Juicy Orange', 'juicy-orange', 'a-51551235/smellies/juicy-orange/', '#dc5b02', ['fris'], 'Frisse sinaasappelgeur, aangevuld met frisse bloemen.', ['sinaasappel', 'mandarijn', 'perzik', 'bergamot', 'witte musk']),
  g('Komkommer & aloe vera', 'komkommer-aloe-vera', 'a-50645531/smellies/komkommer-aloe-vera/', '#7b9a4a', ['fris'], 'Een frisse, schone en lichtgroene geur.', ['komkommer', 'aloe vera']),
  g('Libre', 'libre', 'a-62274626/smellies/libre/', '#b04270', ['bloemig'], 'Citrus, limoen en sinaasappel met hints van jasmijn.', ['citrus', 'limoen', 'jasmijn', 'lelietje-van-dalen', 'amber']),
  g('Light Blue', 'light-blue', 'a-50644903/smellies/light-blue/', '#93b0bc', ['fris', 'bloemig'], 'Een frisse geur met vele zachte bloemengeuren.', ['citroen', 'hyacint', 'appel', 'bamboe', 'cederhout']),
  g('Million Lady', 'million-lady', 'a-50645550/smellies/million-lady/', '#92a069', ['bloemig'], 'Een zeer vrouwelijke geur.', ['frambozen', 'sinaasappel', 'pioenrozen', 'honing', 'amber']),
  g('Musk & Sandelwood', 'musk-sandelwood', 'a-50645671/smellies/musk-sandelwood/', '#dad6cd', ['houtig'], 'Warme tonen zoals musk, vetiver en sandelwood.', ['musk', 'lelie', 'ylang ylang', 'sandelwood', 'vetiver']),
  g('Mystic Forest', 'mystic-forest', 'a-50645558/smellies/mystic-forest/', '#b4191c', ['houtig', 'zoet'], 'Zoet, houtachtig en aromatisch, met oud als hoofdbestanddeel.', ['oud']),
  g('Olympia', 'olympia', 'a-58475174/smellies/olympia/', '#b0adb5', ['fris', 'zoet'], 'Een oriëntaals frisse geur met zoete vanille.', ['sinaasappel', 'peer', 'waterjasmijn', 'gember', 'sandelhout']),
  g('Relax & Zen', 'relax-zen', 'a-53815451/smellies/relax-zen/', '#6f8d99', ['houtig'], 'Houtachtig. Werkt kalmerend en ontspannend.', ['amber', 'zwarte orchidee', 'gember', 'waterlelie', 'kyara hout']),
  g('Snuggels', 'snuggels', 'a-80973461/smellies/snuggels/', '#9582d2', ['fris'], 'Zacht, fris en onweerstaanbaar schoon.', ['bergamot', 'perzik', 'kokosnoot', 'viooltje', 'musk']),
  g('So Delicious', 'so-delicious', 'a-50645491/smellies/so-delicious/', '#d2d8af', ['fris'], 'De bekende frisse groene-appelgeur.', ['groene appel', 'exotische bloemen', 'sensueel hout']),
  g('Space', 'space', 'a-50645629/smellies/space/', '#a48edc', ['bloemig'], 'Licht gewaagd, maar zeker niet overheersend.', ['meloen', 'mandarijntjes', 'oranjebloesem', 'jasmijn', 'vanille']),
  g('Sunshine', 'sunshine', 'a-78505154/smellies/sunshine/', '#cc5a04', ['fris'], 'De voorjaarsgeur van Smellies. Fruitig, in de stijl van wasverzachter.', ['groene munt', 'sinaasappel', 'jasmijn', 'dennen', 'witte muskus']),
  g('Sweet Cookies', 'sweet-cookies', 'a-50645479/smellies/sweet-cookies/', '#b97342', ['zoet'], 'Alsof je net verse koekjes hebt gebakken.', ['kaneel', 'speculaas', 'chocolade', 'appel', 'vanille']),
  g('Sweet Jasmine', 'sweet-jasmine', 'a-50645668/smellies/sweet-jasmine/', '#d6c59a', ['bloemig', 'fris'], 'Een combinatie van zoet en fris. Ook bekend als Toscaanse jasmijn.', ['jasmijn', 'citroen', 'lichte musk', 'bergamot', 'bloesem']),
  g('Vanille', 'vanille', 'a-50645534/smellies/vanille/', '#cda4a8', ['zoet'], 'Warm, romig en heerlijk zoet.', ['romige vanille']),
  g('Yes', 'yes', 'a-60635311/smellies/yes/', '#cc9a96', ['bloemig'], 'Een vrouwelijke, elegante geur.', ['nektar', 'sandelhout', 'freesia', 'muskus', 'zwarte bes']),
];

/** Herfstcollectie (limited), eigen categorie op smellies.nl. Smellies € 2,75. */
export const herfst = [
  { naam: 'Happy Autumn', slug: 'herfst-happy-autumn', pad: 'a-65943987/herfst/happy-autumn/', noten: ['bergamot', 'eucalyptus', 'lavendel', 'herfstbladeren', 'ceder'] },
  { naam: 'Love Autumn', slug: 'herfst-love-autumn', pad: 'a-65943992/herfst/love-autumn/', noten: ['zoete sinaasappel', 'gember', 'vanille', 'kaneel'] },
  { naam: 'Sweet Autumn', slug: 'herfst-sweet-autumn', pad: 'a-65943997/herfst/sweet-autumn/', noten: ['citroen', 'suikerspin', 'vanille', 'muskus'] },
  { naam: 'Pumpkin Spice', slug: 'herfst-pumpkin-spice', pad: 'a-102141336/herfst/pumpkin-spice/', noten: ['kaneel', 'kruidnagel', 'pompoen', 'houtachtige noten'] },
];

export const mixen = [
  { naam: 'Flower mix', zin: 'zalige bloemengeuren', pad: 'a-55714915/mixen/flower-mix-10/' },
  { naam: 'Fresh mix', zin: 'frisse, niet overheersende geuren', pad: 'a-55714930/mixen/fresh-mix-10/' },
  { naam: 'Parfum mix', zin: 'bekende parfumgeuren', pad: 'a-55714906/mixen/parfum-mix-10/' },
  { naam: 'Sweet mix', zin: 'zoete en kruidige geuren', pad: 'a-55714937/mixen/sweet-mix-10/' },
];

/** Kleuren voor het smeltbeeld in de hero: gemeten in hun eigen wax-foto's (licht opgehelderd voor zachte overgangen). */
export const smeltPaletten = [
  { namen: ['Yes', 'Space', 'Light Blue', 'Musk & Sandelwood'], kleuren: ['#e9b9b3', '#a68fdc', '#93b3c1', '#ece8df'] },
  { namen: ['Juicy Orange', 'Sweet Jasmine', 'Baccarat', 'Musk & Sandelwood'], kleuren: ['#e0661a', '#e3cf9f', '#cfa3a9', '#ece8df'] },
  { namen: ['Choo Choo', 'Snuggels', 'Baccarat', 'Musk & Sandelwood'], kleuren: ['#c84a80', '#9a86d6', '#cfa3a9', '#ece8df'] },
  { namen: ['Komkommer & aloe vera', 'So Delicious', 'Relax & Zen', 'Clean Cotton'], kleuren: ['#86a557', '#dbe0b6', '#6f8f9c', '#ecebe8'] },
];
