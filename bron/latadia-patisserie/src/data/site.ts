// Feiten (bekeken 12 oktober 2026), bronnen in bron/:
// - Google-profiel (bron/google): Latadia Patisserie, Schiedamsedijk 76A, 3011 CJ Rotterdam, 06 27435300,
//   4,7 uit 445 reviews, "Gerund door een vrouwelijke ondernemer", ter plaatse eten en bezorging.
//   Tijden: ma, di, wo gesloten; do 15:00-20:30; vr, za, zo 15:00-21:00. Menu op Google: zie bron/google/menu-google.txt.
// - Eigen Instagram @latadiarotterdam (bron/insta): bio "From our family table to yours", "Thu 15:00-20:30 - Fri till Sun
//   15:00-21:00", "No reservations", link Thuisbezorgd. Reel 4 feb 2026: "Handmade by our moms. Inspired by our roots in
//   Gaziantep. From our family table to yours. Nothing fancy, just good food." Laatste post 19 aug 2026.
// - Eigen domein latadiapatisserierotterdam.nl: toont nu alleen een Thuisbezorgd-logo (bron/web). Archief feb 2024
//   (bron/web/archief-2024-menu.txt): bezorgkaart met gerechten en omschrijvingen. Prijzen niet overgenomen.
// - Geen eigenaarsnaam in eigen bron, dus geen naam getoond. Geen KvK of e-mail gevonden in eigen bron.
export const site = {
  naam: 'Latadia',
  volledig: 'Latadia Patisserie',
  plaats: 'Rotterdam',
  straat: 'Schiedamsedijk 76A',
  postcode: '3011 CJ',
  tel: '06 27 43 53 00',
  telHref: 'tel:+31627435300',
  wa: 'https://wa.me/31627435300',
  insta: 'https://www.instagram.com/latadiarotterdam/',
  route: 'https://www.google.com/maps/dir/?api=1&destination=Latadia+Patisserie%2C+Schiedamsedijk+76A%2C+3011+CJ+Rotterdam',
  reviews: 'https://www.google.com/maps/place/Latadia+Patisserie/@51.9145427,4.4816718,17z/data=!4m6!3m5!1s0x47c43342815e63c9:0xb32bc8ba04604c7d!8m2!3d51.9145427!4d4.4816718!16s%2Fg%2F11k7tmpk6d',
  google: { score: '4,7', aantal: 445 },
  themeColor: '#1a1611',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Openingstijden per weekdag (0 = zondag), in uren. null = gesloten.
export const tijden: Record<number, [number, number] | null> = {
  0: [15, 21], 1: null, 2: null, 3: null, 4: [15, 20.5], 5: [15, 21], 6: [15, 21],
};
export const dagNamen = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
export const uur = (u: number) => `${Math.floor(u)}.${u % 1 ? '30' : '00'}`;

// Letterlijk van Google (alle 5 sterren). Naam: voornaam + initiaal. "…" = ingekort.
export const reviews = [
  { naam: 'Aysu', wanneer: '4 maanden geleden', tekst: 'Alles was ontzettend vers en met zorg bereid. … de kadayıf was zonder twijfel de beste die ik tot nu toe in Rotterdam heb gegeten. Knapperig, perfect in balans en duidelijk vers bereid.' },
  { naam: 'Gülèn K.', wanneer: '7 maanden geleden', tekst: 'Alles voelt hier huisgemaakt en vers en dat proef je meteen. … Je merkt aan alles dat het met zorg en liefde wordt gemaakt.' },
  { naam: 'Lieve D.', wanneer: '9 maanden geleden', tekst: 'De lahmacun was fantastisch, de dumplings met gehakt verrassend en super smaakvol, en de baklava… echt 10/10. De desserts zijn hier sowieso next level.' },
  { naam: 'Fiko', wanneer: '8 maanden geleden', tekst: 'We hebben baklava en katmer genomen en die waren allebei fantastisch, vers en niet te zoet. Je merkt dat ze weten wat ze doen.' },
  { naam: 'Kale H.', wanneer: '2 jaar geleden', tekst: 'Ik kwam voor het eerst baklava halen en dit was oprecht de beste baklava die ik ooit heb gegeten. Daarna kreeg ik ook katmer aangeboden van de eigenaresse!' },
  { naam: 'Gian W.', wanneer: '9 maanden geleden', tekst: 'Wij zijn een aantal jaar geleden in Gaziantep geweest … Maar hier, zomaar in Rotterdam, kunnen ze het ook. Met een warmte en service zoals je dat daar ook krijgt.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Latadia, ik heb een vraag.');
