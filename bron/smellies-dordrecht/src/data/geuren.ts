// Alle namen, prijzen, omschrijvingen en samenstellingen letterlijk (of ingekort) van smellies.nl, stand 1 oktober 2026.
// Kleur = gemeten in hun eigen productfoto van de wax.
import type { ImageMetadata } from 'astro';
const fotos = import.meta.glob<{ default: ImageMetadata }>('../assets/wax/*.jpg', { eager: true });
export const foto = (bestand: string) => fotos[`../assets/wax/${bestand}.jpg`].default;

export interface Geur { naam: string; slug: string; pad: string; kleur: string; }

/** De 36 Smellies uit de categorie SMELLIES, in hun eigen (alfabetische) volgorde. */
export const smellies: Geur[] = [
  ['Adore', 'adore', 'a-50644283/smellies/adore/', '#e16a02'],
  ['Angel', 'angel', 'a-50644375/smellies/angel/', '#95a8b0'],
  ['Apple Pie', 'apple-pie', 'a-50644892/smellies/apple-pie/', '#aa7143'],
  ['Babypowder', 'babypowder', 'a-50644938/smellies/babypowder/', '#bdaf9b'],
  ['Baccarat', 'baccarat', 'a-85486221/smellies/baccarat/', '#c8a0a4'],
  ['Bedtime Baby', 'bedtime-baby', 'a-50644959/smellies/bedtime-baby/', '#785b8e'],
  ['Belle', 'belle', 'a-50644982/smellies/belle/', '#d0bbab'],
  ['Black Magic', 'black-magic', 'a-50645017/smellies/black-magic/', '#9c938e'],
  ['Black Orchid', 'black-orchid', 'a-53815175/smellies/black-orchid/', '#b2acac'],
  ['Blue Fresh', 'blue-fresh', 'a-58966296/smellies/blue-fresh/', '#b4bfc2'],
  ['Blush', 'blush', 'a-50645028/smellies/blush/', '#b61b0f'],
  ['Cherry Pie', 'cherry-pie', 'a-62274601/smellies/cherry-pie/', '#da2f2a'],
  ['Choo Choo', 'choo-choo', 'a-57569009/smellies/choo-choo/', '#bf4479'],
  ['Clean Cotton', 'clean-cotton', 'a-50645094/smellies/clean-cotton/', '#a7a5a3'],
  ['Dame', 'dame', 'a-50645136/smellies/dame/', '#cda194'],
  ['Fabulous Lady', 'fabulous-lady', 'a-77798180/smellies/fabulous-lady/', '#c34b87'],
  ['Forever & Ever', 'forever-ever', 'a-57569006/smellies/forever-ever/', '#a38ac0'],
  ['Fresh Linen', 'fresh-linen', 'a-50645380/smellies/fresh-linen/', '#cfb5ad'],
  ['Gingerbread', 'gingerbread', 'a-85486092/smellies/gingerbread/', '#b08b67'],
  ['Juicy Orange', 'juicy-orange', 'a-51551235/smellies/juicy-orange/', '#dc5b02'],
  ['Komkommer & aloe vera', 'komkommer-aloe-vera', 'a-50645531/smellies/komkommer-aloe-vera/', '#7b9a4a'],
  ['Libre', 'libre', 'a-62274626/smellies/libre/', '#b04270'],
  ['Light Blue', 'light-blue', 'a-50644903/smellies/light-blue/', '#93b0bc'],
  ['Million Lady', 'million-lady', 'a-50645550/smellies/million-lady/', '#92a069'],
  ['Musk & Sandelwood', 'musk-sandelwood', 'a-50645671/smellies/musk-sandelwood/', '#dad6cd'],
  ['Mystic Forest', 'mystic-forest', 'a-50645558/smellies/mystic-forest/', '#b4191c'],
  ['Olympia', 'olympia', 'a-58475174/smellies/olympia/', '#b0adb5'],
  ['Relax & Zen', 'relax-zen', 'a-53815451/smellies/relax-zen/', '#6f8d99'],
  ['Snuggels', 'snuggels', 'a-80973461/smellies/snuggels/', '#9582d2'],
  ['So Delicious', 'so-delicious', 'a-50645491/smellies/so-delicious/', '#d2d8af'],
  ['Space', 'space', 'a-50645629/smellies/space/', '#a48edc'],
  ['Sunshine', 'sunshine', 'a-78505154/smellies/sunshine/', '#cc5a04'],
  ['Sweet Cookies', 'sweet-cookies', 'a-50645479/smellies/sweet-cookies/', '#b97342'],
  ['Sweet Jasmine', 'sweet-jasmine', 'a-50645668/smellies/sweet-jasmine/', '#d6c59a'],
  ['Vanille', 'vanille', 'a-50645534/smellies/vanille/', '#cda4a8'],
  ['Yes', 'yes', 'a-60635311/smellies/yes/', '#cc9a96'],
].map(([naam, slug, pad, kleur]) => ({ naam, slug: `smellies-${slug}`, pad, kleur }));

/** Voor de brander: geuren met hun eigen omschrijving en samenstelling van smellies.nl. */
export const brander = [
  { naam: 'Pumpkin Spice', slug: 'herfst-pumpkin-spice', pad: 'a-102141336/herfst/pumpkin-spice/', kleur: '#f08425',
    zin: 'De ultieme belichaming van de herfst.', noten: ['pompoentaart', 'kaneel', 'kruidnagel'] },
  { naam: 'Apple Pie', slug: 'smellies-apple-pie', pad: 'a-50644892/smellies/apple-pie/', kleur: '#aa7143',
    zin: 'Een heerlijke geur van vers gebakken appeltaart!', noten: ['zoete warme appels', 'nootmuskaat', 'kaneel'] },
  { naam: 'Cherry Pie', slug: 'smellies-cherry-pie', pad: 'a-62274601/smellies/cherry-pie/', kleur: '#da2f2a',
    zin: 'Zalig zoete geur van kersentaart.', noten: ['kersen', 'deeg', 'bitterkoekjes', 'bruine suiker', 'vanille', 'kaneel'] },
  { naam: 'Juicy Orange', slug: 'smellies-juicy-orange', pad: 'a-51551235/smellies/juicy-orange/', kleur: '#dc5b02',
    zin: 'Heerlijk frisse sinaasappelgeur, aangevuld met frisse bloemen.', noten: ['sinaasappel', 'mandarijn', 'perzik', 'bergamot', 'aardbei', 'framboos', 'witte musk'] },
  { naam: 'Choo Choo', slug: 'smellies-choo-choo', pad: 'a-57569009/smellies/choo-choo/', kleur: '#bf4479',
    zin: 'Een onweerstaanbare bloemige geur.', noten: ['appel', 'fresia', 'peer', 'pruim', 'jasmijn', 'orchidee', 'musk', 'vanille'] },
  { naam: 'Bedtime Baby', slug: 'smellies-bedtime-baby', pad: 'a-50644959/smellies/bedtime-baby/', kleur: '#785b8e',
    zin: 'Heerlijke geur vlak voor het slapen gaan!', noten: ['kamille', 'lavendel', 'mandarijn', 'neroli', 'lelie van dalen', 'lichte muskus'] },
  { naam: 'Light Blue', slug: 'smellies-light-blue', pad: 'a-50644903/smellies/light-blue/', kleur: '#93b0bc',
    zin: 'Een heerlijk frisse geur met vele zachte bloemengeuren.', noten: ['citroen', 'hyacint', 'appel', 'bamboe', 'cederhout', 'muskus', 'witte rozen'] },
  { naam: 'Million Lady', slug: 'smellies-million-lady', pad: 'a-50645550/smellies/million-lady/', kleur: '#92a069',
    zin: 'Een zeer vrouwelijke geur.', noten: ['rijpe frambozen', 'zoete sinaasappels', 'mint', 'pioenrozen', 'jasmijn', 'honing', 'amber'] },
  { naam: 'Sweet Jasmine', slug: 'smellies-sweet-jasmine', pad: 'a-50645668/smellies/sweet-jasmine/', kleur: '#d6c59a',
    zin: 'Een combinatie van zoet & fris.', noten: ['jasmijn', 'citroen', 'lichte musk', 'bergamot', 'bloesem'] },
  { naam: 'Relax & Zen', slug: 'smellies-relax-zen', pad: 'a-53815451/smellies/relax-zen/', kleur: '#6f8d99',
    zin: 'Houtachtig. Werkt kalmerend & ontspannend.', noten: ['amber', 'zwarte orchidee', 'gember', 'waterlelie', 'kyara hout', 'jasmijn'] },
  { naam: 'Space', slug: 'smellies-space', pad: 'a-50645629/smellies/space/', kleur: '#a48edc',
    zin: 'Licht gewaagd, maar zeker niet overheersend.', noten: ['meloen', 'mandarijntjes', 'oranjebloesem', 'jasmijn', 'rozen', 'vanille', 'musk'] },
  { naam: 'Musk & Sandelwood', slug: 'smellies-musk-sandelwood', pad: 'a-50645671/smellies/musk-sandelwood/', kleur: '#dad6cd',
    zin: 'Warme tonen zoals musk, vetiver & sandelwood.', noten: ['musk', 'lelie', 'ylang ylang', 'sandelwood', 'amber', 'vetiver'] },
  { naam: 'Sweet Cookies', slug: 'smellies-sweet-cookies', pad: 'a-50645479/smellies/sweet-cookies/', kleur: '#b97342',
    zin: 'Alsof je net verse koekjes hebt gebakken!', noten: ['kaneel', 'zoetige sinaasappel', 'speculaas', 'chocolade', 'appel', 'vanille'] },
];

export const mixen = [
  { naam: 'Flower mix', zin: 'Zalige bloemengeuren.', pad: 'a-55714915/mixen/flower-mix-10/' },
  { naam: 'Fresh mix', zin: 'Fris en niet overheersend.', pad: 'a-55714930/mixen/fresh-mix-10/' },
  { naam: 'Parfum mix', zin: 'Bekende parfumgeuren.', pad: 'a-55714906/mixen/parfum-mix-10/' },
  { naam: 'Sweet mix', zin: 'Zoet en kruidig.', pad: 'a-55714937/mixen/sweet-mix-10/' },
];
