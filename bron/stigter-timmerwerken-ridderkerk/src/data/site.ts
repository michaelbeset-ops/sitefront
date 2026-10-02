// Feiten van timmerwerken-mstigter.nl (Home, Projecten, Verbouwingen, Contact; live en via web.archive.org, 2 okt 2026),
// de Facebook-pagina "Stigter Timmer- en Montagebedrijf" (adres, post 1 nov 2024 over een overkapping) en het
// Google-bedrijfsprofiel (Timmerman, Klooslaan 3, 2985 CK Ridderkerk, 06 21931500, 4,2 uit 5 reviews, geen openingstijden).
// Eigenaar Marco Stigter: kop van de site en contactpagina. Openingstijden staan nergens, dus die tonen we niet.
export const site = {
  naam: 'Stigter Timmer- en Montagebedrijf',
  kort: 'Stigter',
  eigenaar: 'Marco Stigter',
  straat: 'Klooslaan 3',
  postcode: '2985 CK',
  plaats: 'Ridderkerk',
  tel: '06 21 93 15 00',
  telHref: 'tel:+31621931500',
  wa: 'https://wa.me/31621931500',
  mail: 'info@timmerwerken-mstigter.nl',
  google: { score: '4,2', aantal: 5 },
  reviews: 'https://www.google.com/maps/search/?api=1&query=Stigter+Timmer+en+Montagebedrijf+Klooslaan+3+Ridderkerk',
  facebook: 'https://www.facebook.com/people/Stigter-Timmer-en-Montagebedrijf/100057325665316/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Stigter+Timmer+en+Montagebedrijf+Klooslaan+3+Ridderkerk',
  themeColor: '#0e131a',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// De negen diensten van hun eigen homepage, in hun volgorde.
export const diensten = ['Dakkapellen', 'Kozijnen, ramen en deuren', 'Timmerwerk', 'Stuc- en sauswerk', 'Schuifwand- en inloopkasten', 'Laminaat', 'Badkamers en toiletten', 'Raambekleding en hordeuren', 'Verbouwingen'];

// Letterlijk van Google (stand 2 oktober 2026), ingekort met "…" waar aangegeven. Naam: voornaam + initiaal.
// Van de 5 reviews hebben er 2 positieve een tekst; Iris V. en Erik G. gaven 5 sterren zonder tekst; 1 review is 1 ster (niet getoond, wel meegeteld in de 4,2).
export const reviews = [
  { naam: 'Isadora D.', wanneer: '7 maanden geleden', tekst: 'Ze hebben onze badkamer prachtig gemaakt. Ze zijn heel flexibel geweest en hebben enorm met ons meegedacht. Wij zijn ontzettend tevreden!' },
  { naam: 'Chantal V.', wanneer: '4 jaar geleden', tekst: 'Goede, mooie en nette afgeleverde badkamer en wc, heel blij mee. … Wat kan Stigter niet? Tot nu toe blij met alles! Duidelijke communicatie, goed overzicht van de werkzaamheden. Echt top!' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waOfferte = waMet('Hallo Marco, ik heb een klus in of rond het huis en wil graag een vrijblijvende offerte.');
