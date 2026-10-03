// Feiten: Google-bedrijfsprofiel "Baan Woningstoffering" (bekeken 3 oktober 2026; 5,0 uit 4 reviews, geen openingstijden),
// eigen site baanwoningstoffering.nl (2021), Weekblad De Brug (2021), LinkedIn-post DVS'69 (1 oktober 2026: "Al 59 jaar"),
// Facebook-pagina (71 volgers). Bronteksten: bron/*.txt. Openingstijden staan nergens: daarom geen tijdentabel.
export const site = {
  naam: 'Baan Woningstoffering',
  eigenaar: 'Dammes Baan',
  straat: 'Energieweg 1',
  postcode: '3343 LE',
  plaats: 'Hendrik-Ido-Ambacht',
  tel: '06 12 64 60 03',
  telHref: 'tel:+31612646003',
  vast: '078 612 24 54',
  vastHref: 'tel:+31786122454',
  mail: 'info@dammesbaan.nl',
  kvk: '53069838',
  wa: 'https://wa.me/31612646003',
  facebook: 'https://www.facebook.com/people/Baan-Woningstoffering/100072059146620/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Baan+Woningstoffering+Energieweg+1+Hendrik-Ido-Ambacht',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Baan+Woningstoffering+Hendrik-Ido-Ambacht',
  google: { score: '5,0', aantal: 4 },
  jaren: 59,
  themeColor: '#1f1c19',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Assortiment: letterlijk de activiteiten op hun eigen site en in De Brug, plus "trap laten bekleden" uit een Google-review.
export const chips = ['Tapijt', 'Vinyl', 'Laminaat', 'Trap bekleden', 'Gordijnen', 'Vitrage', 'Rolgordijnen', 'Lamellen', 'Horizontale jaloezieën'];

// Letterlijk van Google (stand 3 oktober 2026), ingekort met "…" waar aangegeven. Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Petra H.', tekst: 'Baan, de beste die er is! Betrouwbaar, vriendelijk, vakkundig en komt altijd afspraken na!' },
  { naam: 'Ina v.', kop: 'Geweldige klantvriendelijke zaak', tekst: 'Prima vloer gelegd en er is echt veel mogelijk. Ook onze oude vloerbedekking verwijderd en afgevoerd en meubels verplaatst. …' },
  { naam: 'Marjan H.', tekst: 'Goede communicatie. … vooral vakkundig. Trap laten bekleden en zeer tevreden! Werkt netjes!' },
  { naam: 'Richard S.', tekst: 'Dammes Baan is een echte vakman met vele jaren ervaring. … Dammes bekijkt een opdracht altijd mee vanuit de ogen van de klant. De service is uitstekend en de tarieven voordelig.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waStalen = waMet('Goedendag, ik wil graag vrijblijvend stalen bekijken. Kunnen we een afspraak maken?');
