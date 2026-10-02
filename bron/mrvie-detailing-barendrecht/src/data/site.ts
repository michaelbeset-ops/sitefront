// Feiten: Google-bedrijfsprofiel (5,0 uit 3 reviews, tijden, adres Bedrijventerrein Dierenstein), Instagram @mrvie_detailing
// (bio "Een schone auto vertelt je veel") en mrvie.nl zoals gearchiveerd op 8 mei 2026 (pakketten met vanaf-prijzen,
// "Over MrVie", info@mrvie.nl, WhatsApp 06 223 26 223). Bronteksten in bron/. KvK niet gevonden.
export const site = {
  naam: 'MrVie Detailing',
  straat: 'Kwikstaart 2A',
  postcode: '2991 MJ',
  plaats: 'Barendrecht',
  terrein: 'Bedrijventerrein Dierenstein',
  tel: '06 22 32 62 23',
  telHref: 'tel:+31622326223',
  wa: 'https://wa.me/31622326223',
  mail: 'info@mrvie.nl',
  instagram: 'https://www.instagram.com/mrvie_detailing/',
  youtube: 'https://www.youtube.com/@MrVieDetailing',
  maps: 'https://www.google.com/maps/search/?api=1&query=MrVie+Detailing+Kwikstaart+2A+Barendrecht',
  google: { score: '5,0', aantal: 3 },
  // Google: ma-vr 18:00-22:00, za-zo 07:00-17:00 (index 0 = zondag, zoals Date.getDay()).
  tijden: [
    ['Maandag', '18:00', '22:00'], ['Dinsdag', '18:00', '22:00'], ['Woensdag', '18:00', '22:00'],
    ['Donderdag', '18:00', '22:00'], ['Vrijdag', '18:00', '22:00'], ['Zaterdag', '07:00', '17:00'], ['Zondag', '07:00', '17:00'],
  ],
  themeColor: '#0b0c0d',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waAfspraak = waMet('Hoi Vie, ik wil graag een afspraak maken voor mijn auto.');
