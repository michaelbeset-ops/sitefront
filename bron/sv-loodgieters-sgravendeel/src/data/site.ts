// Feiten (bekeken 3 oktober 2026), zie bron/feiten.txt:
// - Google-bedrijfsprofiel "S&V Loodgieters V.O.F": 's-Gravendeel, 06 53801650, geen openingstijden, geen Google-reviews.
//   Het adres (Zweedsestraat 25) is volgens de BAG een woning: daarom alleen plaats + werkgebied.
// - KvK 64482642, Vennootschap Onder Firma, handelsnamen S&V Loodgieters en S&V Aannemers.
// - Oude eigen site senv-loodgieters.nl (opgericht 2015, diensten, Remeha/Nefit, vrijblijvende opname).
// - Solvari-profiel: 4.6/5 uit 89 reviews, 2 jaar garantie, gerund door 2 monteurs.
export const site = {
  naam: 'S&V Loodgieters',
  rechtsnaam: 'S&V Loodgieters V.O.F.',
  plaats: "'s-Gravendeel",
  kvk: '64482642',
  tel: '06 53 80 16 50',
  telHref: 'tel:+31653801650',
  wa: 'https://wa.me/31653801650',
  solvari: 'https://www.solvari.nl/bedrijven-overzicht/sv-loodgieters-vof',
  score: { cijfer: '4,6', aantal: 89, bron: 'Solvari' },
  themeColor: '#10161d',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Diensten zoals op hun oude site en Solvari-profiel genoemd.
export const chips = ['CV-ketels', 'Onderhoud', 'Storingen en lekkages', 'Vloerverwarming', 'Badkamers', 'Toiletten', 'Riolering', 'Gas en drinkwater', 'Elektra', 'Ventilatie', 'Zonnepanelen', 'Warmtepompen'];

// Plaatsen waar reviewers vandaan kwamen (Solvari en de beoordelingen op hun oude site).
export const plaatsen = ["'s-Gravendeel", 'Heerjansdam', 'Barendrecht', 'Rotterdam', 'Capelle aan den IJssel', 'Schiedam', 'Spijkenisse', 'Delft'];

// Letterlijk van Solvari (stand 3 oktober 2026), ingekort met "…" waar aangegeven. Klus = titel van de review.
export const reviews = [
  { naam: 'Eilis', plaats: 'Rotterdam', wanneer: 'juni 2026', klus: 'CV-ketel', tekst: 'Onwijs fijne mensen! Ik had best een uitdaging, wilde van een gas moederhaard naar cv. Ze hebben het creatief en netjes opgelost. Ik was er heel blij mee. Prettig contact, ze waren vriendelijk en namen de tijd.' },
  { naam: 'Solvari-gebruiker', plaats: 'Heerjansdam', wanneer: 'oktober 2025', klus: 'Badkamer renovatie', tekst: 'Wij hebben onze badkamer laten renoveren door S&V Loodgieters V.O.F. Dat is ons goed bevallen. Werken netjes, denken met je mee en super vriendelijk.' },
  { naam: 'Marjon', plaats: '', wanneer: 'maart 2018', klus: 'Moederhaard en geiser door een CV-ketel vervangen', tekst: 'Deze jongens dachten constructief mee met mijn wensen in alle fasen van de opdracht. Snelle oplevering van de offerte. Contact verliep vlot en prettig via mail en Whatsapp. …' },
  { naam: 'Faustina', plaats: '', wanneer: 'oktober 2017', klus: 'Nieuwe CV-ketel plaatsen', tekst: 'Ik ben zeer tevreden, de heren hebben netjes gewerkt, het beetje troep opgezogen en het noodzakelijke gat in de muur voor de afvoer weer keurig dichtgemaakt. …' },
  { naam: 'Jan', plaats: '', wanneer: 'mei 2017', klus: 'Riolering in de kruipruimte deels vervangen', tekst: 'Zeer prettige en correcte behandeling. Werkzaamheden zijn goed verricht. Alles netjes weer opgeruimd. Helder gecommuniceerd over wat er moest gebeuren en waarom. Goed advies. …' },
  { naam: 'Chantal', plaats: '', wanneer: 'mei 2017', klus: 'Divers installatiewerk', tekst: 'Afspraak supersnel gemaakt. Correcte prijsopgave vooraf. Nette vaklui die communicatief vaardig zijn en hun vak verstaan. …' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waOfferte = waMet('Goedendag S&V Loodgieters, ik wil graag een offerte aanvragen.');
