// Feiten: timmerbedrijfvandermeij.nl (alle pagina's, bekeken 3 oktober 2026), Google-bedrijfsprofiel
// "Timmerbedrijf van der Meij" (5,0 uit 22 reviews, categorie Timmerman) en Facebook timmervandermeij (9 beoordelingen,
// 100% aanbevolen). Tilanussingel 19, 2641 VA Pijnacker is een postadres, geen bezoekadres (contactpagina).
// Geen openingstijden gepubliceerd. Nieuwe aanvragen per bericht/e-mail: overdag wordt de telefoon nauwelijks opgenomen.
export const site = {
  naam: 'Timmerbedrijf van der Meij',
  eigenaar: 'Mike van der Meij',
  straat: 'Tilanussingel 19',
  postcode: '2641 VA',
  plaats: 'Pijnacker',
  tel: '06 20 56 71 73',
  telHref: 'tel:+31620567173',
  wa: 'https://wa.me/31620567173',
  mail: 'mail@timmervandermeij.nl',
  facebook: 'https://www.facebook.com/timmervandermeij/',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Timmerbedrijf+van+der+Meij+Pijnacker',
  google: { score: '5,0', aantal: 22 },
  fb: { aantal: 9 },
  themeColor: '#0f1d24',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Diensten zoals op hun site (menu + /service/).
export const chips = ['Overkappingen', 'Overkapping met berging', 'Veranda’s', 'Serres', 'Opbouw buitenverblijven', 'Bergingen', 'Tuinhuizen', 'Pergola’s met schaduwdoek', 'Vlonders', 'Loopbruggen'];

// Merken waarvan zij bouwpakketten opbouwen (pagina Opbouw buitenverblijven).
export const merken = ['Hillhout', 'Woodvision', 'Westwood', 'NuBuiten', 'Trendhout', 'Biohort', 'Nesling'];

// Plaatsen uit hun portfolio (projectgegevens).
export const plaatsen = ['Pijnacker', 'Den Hoorn', 'Nootdorp', 'Berkel en Rodenrijs', 'Rhoon', 'Dordrecht', 'Brandwijk', 'Oud-Alblas'];

// Letterlijk van Google (stand 3 oktober 2026). "…" = door Google ingekort. Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Paulien', wanneer: '6 maanden geleden', tekst: 'Mike is een vakman. Komt afspraken na, goede communicatie, beleefd en levert top werk. Zou hem zeker aanraden en nogmaals inhuren indien nodig.' },
  { naam: 'Jos v. A.', wanneer: 'een maand geleden', tekst: 'Een tweede project die we door Timmerbedrijf van der Meij hebben laten uitvoeren. Het begon bij de vraag voor het vervangen van een keukendeur door een raam en eindigde bij een bijna totale renovatie van de keuken en woonkamer. …' },
  { naam: 'Frank', wanneer: '2 jaar geleden', tekst: 'Mike is een echte vakman. Daarbij kan hij duidelijk communiceren en hierdoor vrij snel bij de klant de wensen ophalen en vertalen naar een mooi resultaat. Mike denkt goed mee en werkt lekker door. Al met al zeker aan te bevelen.' },
  { naam: 'Greta v. V.', wanneer: '2 jaar geleden', tekst: 'Mike heeft bij ons een raam geplaatst op de zolderverdieping (hout-skeletbouw). De communicatie liep vanaf het begin af aan soepel. Mike dacht goed mee en hij kwam met goede suggesties. …' },
  { naam: 'Sven d. H.', wanneer: '5 jaar geleden', tekst: 'Het was een geweldige ervaring om te mogen werken met Mike van der Meij, een professionele vakman die zeer nauwkeurig werkt en alles conform afspraak oplevert. …' },
  { naam: 'Pieter-Jan K.', wanneer: '8 jaar geleden', tekst: 'Vriendelijk, zorgvuldig, harde werker, werkt netjes. Heeft onze kapschuur mooi geplaatst, een aanrader deze Mike.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waOfferte = waMet('Hallo Mike, ik wil graag een prijsopgave aanvragen.');
export const mailOfferte = `mailto:${site.mail}?subject=${encodeURIComponent('Aanvraag prijsopgave')}`;
