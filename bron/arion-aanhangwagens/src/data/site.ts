// Feiten (bekeken 9 oktober 2026), ruwe bronnen in ../../bron:
// - arion-aanhangwagens.nl: homepage geeft 404; subpagina's werken (bagagewagen-, geremde/ongeremde-, autoambulance-,
//   motortrailer-huren, faq, contact). Tekst per pagina in bron/web/pag/. Modellen, maten, accessoires, tijden en route komen daarvandaan.
// - Google: 4,6 uit 22 reviews, "Dealer van aanhangwagens", Stompwijkseweg 33-I, 2266 GD Leidschendam, 06 41983777.
// - Geen eigenaarsnaam in eigen bron. Geen prijzen overgenomen (tijdgebonden).
export const site = {
  naam: 'Arion Aanhangwagens',
  straat: 'Stompwijkseweg 33-I',
  postcode: '2266 GD',
  plaats: 'Leidschendam',
  tel: '06 41 98 37 77',
  telHref: 'tel:+31641983777',
  wa: 'https://wa.me/31641983777',
  mail: 'info@arion-aanhangwagens.nl',
  route: 'https://www.google.com/maps/dir/?api=1&destination=Arion+Aanhangwagens,+Stompwijkseweg+33-I,+2266+GD+Leidschendam',
  google: { score: '4,6', aantal: 22 },
  themeColor: '#15183a',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Openingstijden letterlijk van hun contactpagina (gewijzigd 9 februari 2026). Zaterdag alleen in juli en augustus.
// dag: 0 = zondag. [open, dicht] in minuten.
export const tijden: { dag: string; tekst: string }[] = [
  { dag: 'Maandag t/m vrijdag', tekst: '09:00 - 17:00' },
  { dag: 'Zaterdag (juli en augustus)', tekst: '10:00 - 12:00' },
  { dag: 'Zondag', tekst: 'Op afspraak' },
];

// Bagagewagens van hun eigen pagina's (geremd en ongeremd, 6 december 2024). Maten in cm (150*100*50 = 750 liter).
export const deluxe = [
  { naam: 'DeLuxe 750', liter: '750', maat: '150 × 100 × 50' },
  { naam: 'DeLuxe 900', liter: '900', maat: '150 × 100 × 60' },
  { naam: 'DeLuxe 1400', liter: '1.400', maat: '175 × 133 × 60' },
  { naam: 'DeLuxe 1600', liter: '1.600', maat: '205 × 133 × 60' },
];
export const comfort = [
  { naam: 'Comfort 400', liter: '400', maat: '125 × 80 × 40' },
  { naam: 'Comfort 750', liter: '750', maat: '150 × 100 × 50' },
  { naam: 'Comfort 900', liter: '900', maat: '150 × 100 × 60' },
];

// Letterlijk van Google, ingekort met "…". Voornaam + initiaal, geen datums.
export const reviews = [
  { naam: 'Sebastian V.', tekst: 'Voor de eerste keer een kar gehuurd en gelijk de grootste. Had ik jaren eerder moeten doen. Complete kampeeruitrusting en spullen voor zes personen paste allemaal. … Volgend jaar weer een kar van Arion!' },
  { naam: 'Renate H.', tekst: 'Aanhangwagen gehuurd voor de vakantie. Prima aanhangwagen. Fijne service. Enige wat we spannend vonden is over het smalle bruggetje rijden met de aanhangwagen.' },
  { naam: 'Tjerk V.', tekst: 'De behulpzame eigenaar legde ons snel uit hoe we de huurapparatuur moesten gebruiken. Goede kwaliteit apparatuur. Hij hielp ons ook met onze lekke band.' },
  { naam: 'J. de D.', tekst: 'Voor het derde jaar voor de vakantie een aanhanger gehuurd. Altijd goed en vriendelijk geholpen en prima kwaliteit aanhanger. Top.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo, ik wil graag een aanhanger huren. Ophalen op: ... Terugbrengen op: ...');
