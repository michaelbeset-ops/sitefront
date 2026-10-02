// Feiten uit het Google-bedrijfsprofiel "Maso Hair Salon/Barbershop Ridderkerk" (bekeken 2 oktober 2026): categorie Barbier,
// Dillenburgplein 4, 2983 CC Ridderkerk, 06 47317747, 4,7 uit 29 reviews, openingstijden ma-za 9:30-19:00, vr 9:30-20:00,
// zo gesloten. Website op Google: alleen een bedrijvengids (nlcompanies.org). Instagram @maso_hair_salon_ridderkerk noemt
// dezelfde tijden en hetzelfde nummer. Geen prijslijst, e-mail of KvK gepubliceerd. Reviews: zie bron/google.txt.
export const site = {
  naam: 'Maso Hair Salon & Barbershop',
  kort: 'Maso',
  straat: 'Dillenburgplein 4',
  postcode: '2983 CC',
  plaats: 'Ridderkerk',
  tel: '06 47 31 77 47',
  telHref: 'tel:+31647317747',
  wa: 'https://wa.me/31647317747',
  instagram: 'https://www.instagram.com/maso_hair_salon_ridderkerk/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Maso+Hair+Salon+Barbershop+Dillenburgplein+4+Ridderkerk',
  google: { score: '4,7', aantal: 29 },
  // [naam, dagnummer (0 = zondag), open, dicht]; null = gesloten
  tijden: [
    ['Maandag', 1, '09:30', '19:00'],
    ['Dinsdag', 2, '09:30', '19:00'],
    ['Woensdag', 3, '09:30', '19:00'],
    ['Donderdag', 4, '09:30', '19:00'],
    ['Vrijdag', 5, '09:30', '20:00'],
    ['Zaterdag', 6, '09:30', '19:00'],
    ['Zondag', 0, null, null],
  ] as [string, number, string | null, string | null][],
  themeColor: '#0e121b',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waDruk = waMet('Hoi Maso, is het nu druk? Ik wil vandaag graag langskomen om te knippen.');
export const waVraag = waMet('Hoi Maso, ik heb een vraag over een knipbeurt.');
