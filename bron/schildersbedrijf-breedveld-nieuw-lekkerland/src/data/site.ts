// Alle feiten komen uit het dagbestand van 24-11-2026 (lead schildersbedrijf-breedveld-nieuw-lekkerland), met als
// bronnen schildersbedrijfbreedveld.nl, schilder-informatie.nl en compadex.com. Openingstijden, prijzen, reviews en
// een bevestigde naam van de eigenaar zijn niet gevonden, die staan daarom niet op de site.
export const site = {
  naam: 'Schildersbedrijf Breedveld',
  kort: 'Breedveld',
  // Adres van de eigen site. Telefoonboek.nl noemt een ander adres, de eigen site gaat voor.
  straat: 'Roerdomp 70',
  postcode: '2957 NE',
  plaats: 'Nieuw-Lekkerland',
  mobiel: '06-22 24 68 04',
  mobielHref: 'tel:+31622246804',
  whatsapp: 'https://wa.me/31622246804',
  mail: 'info@schildersbedrijfbreedveld.nl',
  kvk: '62753169',
  route: 'https://www.google.com/maps/search/?api=1&query=Roerdomp+70+2957+NE+Nieuw-Lekkerland',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// De vijf vakken van de eigen site. De korte regel eronder beschrijft het vak zelf, geen belofte over het bedrijf.
export const diensten = [
  { naam: 'Schilderwerk', regel: 'Met kwast en roller, op hout, muren en plafonds.', kleur: 'nacht' },
  { naam: 'Latex spuiten', regel: 'Muren en plafonds in de latex, gespoten in plaats van gerold.', kleur: 'eendenei' },
  { naam: 'Behangwerk', regel: 'Nieuw behang op de wand, baan voor baan.', kleur: 'zand' },
  { naam: 'Glaszetten', regel: 'Nieuw glas in uw kozijnen en deuren.', kleur: 'mist' },
  { naam: 'Glasweefsel plakken', regel: 'Een stevige, egale ondergrond op wand of plafond, klaar voor de verf.', kleur: 'antraciet' },
];

// Letterlijk de punten van de huidige site, in dezelfde volgorde.
export const punten = ['Veel ervaring', 'Hoge kwaliteit', 'Oog voor detail', 'Persoonlijke aanpak', 'Denkt met u mee'];

// Sfeerbeelden van Unsplash. Nooit als eigen werk van Breedveld presenteren.
const u = (id: string, w: number) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;
export const foto = {
  hero: (w: number) => u('photo-1745665777586-09381ba528d6', w),
  rollers: (w: number) => u('photo-1525909002-1b05e0c869d8', w),
  raam: (w: number) => u('photo-1734475318787-b2b737296469', w),
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
