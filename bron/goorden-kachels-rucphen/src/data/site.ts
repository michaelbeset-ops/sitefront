// Feiten (bekeken 8 oktober 2026), bronnen in bron/:
// - goordenkachels.nl (WordPress/WooCommerce, wp-json in bron/web/json): home, "Over ons" (geschiedenis 1993-2013, 790 m²),
//   contact (bijgewerkt 28-02-2026): Kraaihei 32 Rucphen, 0165-343739 / 0653376582, info@goordenkachels.nl, KvK 20079723,
//   vr 11:00-17:00, za 11:00-16:00, andere dagen (ook avonden en zondag) vrijblijvend op afspraak. Tips en advies (2015).
//   Categorieën: gebruikte kachels, gas (aardgas/propaan; open/gesloten; vrijstaand/inbouw), hout (vrijstaand, inbouw/inzet).
// - Google-profiel: 4,7 uit 15, "Winkel voor open haarden/kachels", foto's "Van eigenaar" (showroom). Laatste reviews 10 mnd.
// GEEN prijzen of voorraad als actueel. Geen eigenaarsnaam (staat niet in eigen bron).
export const site = {
  naam: 'Goorden Kachels en Zonnehemels',
  kort: 'Goorden',
  plaats: 'Rucphen',
  straat: 'Kraaihei 32',
  postcode: '4715 RV Rucphen',
  tel: '0165 34 37 39',
  telHref: 'tel:+31165343739',
  mob: '06 53 37 65 82',
  mobHref: 'tel:+31653376582',
  wa: 'https://wa.me/31653376582',
  mail: 'info@goordenkachels.nl',
  kvk: '20079723',
  route: 'https://www.google.com/maps/dir/?api=1&destination=Goorden+Kachels+en+Zonnehemels%2C+Kraaihei+32%2C+4715+RV+Rucphen',
  reviews: 'https://www.google.com/maps/place/Goorden+Kachels+en+Zonnehemels/@51.5365508,4.5781925,17z/data=!4m6!3m5!1s0x47c4191c1d13aeb3:0x6183d751648fc523!8m2!3d51.5365508!4d4.5781925!16s%2Fg%2F11bz0c39gf',
  google: { score: '4,7', aantal: 15 },
  themeColor: '#1d1f21',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Openingstijden van hun contactpagina (dag: 0 = zondag).
export const tijden = [
  { dag: 'Vrijdag', d: 5, tijd: '11:00 tot 17:00' },
  { dag: 'Zaterdag', d: 6, tijd: '11:00 tot 16:00' },
];

// Letterlijk van Google (5 sterren, stand 8 oktober 2026). Naam: voornaam + initiaal.
export const reviews = {
  jack: { naam: 'Jack V.', tekst: 'Onze gashaard (Dru Wildenborg) van 35 jaar oud had wat problemen. Deze is vakkundig gerepareerd en brand weer als nieuw. Echt een zaak om terug te komen toppie !' },
  melanie: { naam: 'Melanie v.', tekst: 'Hier een kachel gekocht die precies paste en alles is volgens afspraak afgerond. Prettige sfeer en gedegen advies. …' },
  harold: { naam: 'Harold v.', tekst: 'Werkelijk de enige zaak momenteel die online adverteerd met kachels op voorraad en ze ook daadwerkelijk heeft! En ook nog eens heel vriendelijk en goed advies.' },
  sjourke: { naam: 'Sjourke', tekst: 'Super service gewoon op 2e paasdag ruitje op maat gesneden.' },
  gerard: { naam: 'Gerard', tekst: 'Prettig familie bedrijf ,goede service en communicatie' },
  regina: { naam: 'Regina M.', tekst: 'Top zaak, goede service, zeer klantvriendelijk. Altijd bereikbaar' },
  rody: { naam: 'Rody W.', tekst: 'Mooie showroom.' },
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo, ik heb een vraag over een kachel of haard.');
