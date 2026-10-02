// Feiten (bekeken 02-10-2026), huidige site worpadvies.nl (WordPress 4, geen https). Logo "WORP/ADVIES" (grijze kapitalen,
// petrol schuine streep). Over ons: "thuis in de wereld van de ondernemer en weet ook de particuliere cliënt op een adequate wijze
// bij te staan"; "meer dan 20 jaar ervaring in de financiële wereld"; "klein team specialisten op het gebied van fiscale
// aangelegenheden, personeelszaken en administratieve dienstverlening"; motto "ieder zijn vak" (doorverwijzen naar specialisten).
// Administratie: "Maximaal ondernemerschap betekent volgens ons dat u ruimte en tijd heeft om te doen waar u goed in bent."
// Menu: Partnership, Financiële administratie, Salarisadministratie, Bedrijfsovername, Belastingdienst, Beloningsadvies,
// Juridisch advies; Sector-pagina: lijst sectoren + "Wie worden klant bij ons?" (5 punten). Slenkstraat 66, 1441 MS Purmerend,
// 0299 - 471 947, info@worpadvies.nl. Google 3,7 uit 3: niet tonen.
export const site = {
  naam: 'Worp Advies',
  bv: 'Worp Advies B.V.',
  straat: 'Slenkstraat 66',
  postcode: '1441 MS',
  plaats: 'Purmerend',
  tel: '0299 471 947',
  telHref: 'tel:+31299471947',
  mail: 'info@worpadvies.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=Slenkstraat+66+Purmerend',
  voorwaarden: 'http://www.worpadvies.nl/algemene-voorwaarden/',
  themeColor: '#0f2a2e',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const mailMet = (onderwerp: string, tekst: string) =>
  `mailto:${site.mail}?subject=${encodeURIComponent(onderwerp)}&body=${encodeURIComponent(tekst)}`;
export const afspraakMail = mailMet('Vrijblijvende afspraak',
  'Goedendag,\n\nGraag maak ik een vrijblijvende afspraak.\n\nBedrijf en rechtsvorm (bijv. zzp, vof, bv, stichting): \nWaar gaat het om (administratie, salaris, belasting, juridisch): \nTelefoonnummer: \n\nMet vriendelijke groet,\n');

export const vakken = [
  { id: 'administratie', naam: 'Administratie', regels: [
    ['Financiële administratie', 'Inrichten, bijhouden of helemaal uit handen nemen, bij u of op ons kantoor.'],
    ['Salarisadministratie', 'Salarismutaties, loonaangifte, cao-ontwikkelingen en arbeidsovereenkomsten.'],
  ] },
  { id: 'fiscaal', naam: 'Fiscaal', regels: [
    ['Belastingaangiften', 'Van inkomstenbelasting tot vennootschapsbelasting, plus jaarstukken en bezwaarschriften.'],
    ['Beloningsadvies', 'Fiscaal vriendelijk belonen, loonbelasting, sociale verzekeringen en arbeidsrecht.'],
  ] },
  { id: 'juridisch', naam: 'Juridisch', regels: [
    ['Juridisch advies', 'Arbeidsrecht, vennootschapsrecht, erfrecht, contracten en het opzetten van een onderneming.'],
    ['Bedrijfsovername', 'We staan u bij in de onderhandelingen en adviseren juridisch en belastingtechnisch.'],
  ] },
];

export const klanten = [
  'kiezen voor een praktische dienstverlening.',
  'mensen aan de telefoon willen, geen antwoordapparaten.',
  'antwoorden willen op hun vragen, geen theoretische beschouwingen.',
  'willen weten waar ze aan toe zijn.',
  'bewust kiezen voor een klein kantoor met een persoonlijke aanpak.',
];

export const sectoren = ['Detailhandel', "Zzp'ers", 'Vrije beroepen', 'Groothandel', 'Technologie', 'Autobedrijven', 'Productie', 'Stichtingen', 'Horeca', 'Vastgoed'];
