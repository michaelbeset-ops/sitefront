// Feiten: Google-bedrijfsprofiel (bekeken 2 oktober 2026: 5,0 uit 3 reviews, tijden, Kwikstaart 2A, Bedrijventerrein
// Dierenstein), Instagram @mrvie_detailing (bio "Een schone auto vertelt je veel") en mrvie.nl zoals gearchiveerd op
// 8 mei 2026 (pakketten met vanaf-prijzen, "Over MrVie", WhatsApp 06 223 26 223). Bronteksten in bron/. Geen KvK gevonden.
// mrvie.nl toont nu "Domeinnaam gereserveerd"; het oude e-mailadres laten we daarom weg.
export const site = {
  naam: 'MrVie Detailing',
  straat: 'Kwikstaart 2A',
  postcode: '2991 MJ',
  plaats: 'Barendrecht',
  terrein: 'Bedrijventerrein Dierenstein',
  tel: '06 22 32 62 23',
  telHref: 'tel:+31622326223',
  wa: 'https://wa.me/31622326223',
  instagram: 'https://www.instagram.com/mrvie_detailing/',
  youtube: 'https://www.youtube.com/@MrVieDetailing',
  maps: 'https://www.google.com/maps/search/?api=1&query=MrVie+Detailing+Kwikstaart+2A+Barendrecht',
  google: { score: '5,0', aantal: 3 },
  themeColor: '#0d0e0c',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Google: ma-vr 18:00-22:00, za-zo 07:00-17:00. dag: 0 = zondag (zoals Date.getDay). van/tot in minuten.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '18.00', dicht: '22.00', van: 1080, tot: 1320 },
  { dag: 2, naam: 'Dinsdag', open: '18.00', dicht: '22.00', van: 1080, tot: 1320 },
  { dag: 3, naam: 'Woensdag', open: '18.00', dicht: '22.00', van: 1080, tot: 1320 },
  { dag: 4, naam: 'Donderdag', open: '18.00', dicht: '22.00', van: 1080, tot: 1320 },
  { dag: 5, naam: 'Vrijdag', open: '18.00', dicht: '22.00', van: 1080, tot: 1320 },
  { dag: 6, naam: 'Zaterdag', open: '07.00', dicht: '17.00', van: 420, tot: 1020 },
  { dag: 0, naam: 'Zondag', open: '07.00', dicht: '17.00', van: 420, tot: 1020 },
];

// Pakketten en vanaf-prijzen letterlijk van mrvie.nl (Wayback-archief 8 mei 2026), inclusief hun label "Voordelig".
export const pakketten: { id: string; naam: string; prijs: string; label: string; zin: string; basis: string; extra?: string[]; exterieur: string[]; interieur: string[] }[] = [
  {
    id: 'wash', naam: 'Wash & Wax', prijs: '49', label: '',
    zin: 'De auto van buiten weer helemaal schoon, met een beschermende waxlaag.', basis: '',
    exterieur: ['Reinigen wielkasten', 'Velgen reinigen en banden zwart', 'Pre-wash met snow foam', 'Exterieur grondig handwassen', 'Reinigen deursponningen', 'Ramen reinigen', 'Waxlaag aanbrengen'],
    interieur: [],
  },
  {
    id: 'combi', naam: 'Exterieur + interieur combi', prijs: '79', label: 'Voordelig',
    zin: 'Alles van Wash & Wax, en binnen gestofzuigd en afgenomen.', basis: 'Alles van Wash & Wax',
    exterieur: ['Reinigen wielkasten', 'Velgen reinigen en banden zwart', 'Pre-wash met snow foam', 'Exterieur grondig handwassen', 'Reinigen deursponningen', 'Ramen reinigen', 'Waxlaag aanbrengen'],
    interieur: ['Stofzuigen, inclusief kofferbak', 'Reinigen dashboard, console en deurpanelen', 'Diepreiniging stuurwiel (matterend resultaat)', 'Ramen binnenkant'],
  },
  {
    id: 'full', naam: 'Full Detail', prijs: '250', label: '',
    zin: 'De complete behandeling: kleien, polijsten en een quartz coating.', basis: 'Alles van de combi', extra: ['Volledig kleien', 'Volledig polijsten', 'Quartz coating aanbrengen', 'Diepreiniging stoelen (indien nodig)'],
    exterieur: ['Reinigen wielkasten', 'Velgen reinigen en banden zwart', 'Pre-wash met snow foam', 'Exterieur grondig handwassen', 'Volledig kleien', 'Reinigen deursponningen', 'Ramen reinigen', 'Volledig polijsten', 'Waxlaag aanbrengen', 'Quartz coating aanbrengen'],
    interieur: ['Stofzuigen, inclusief kofferbak', 'Reinigen dashboard, console en deurpanelen', 'Diepreiniging stuurwiel (matterend resultaat)', 'Diepreiniging stoelen (indien nodig)', 'Ramen binnenkant'],
  },
];

export const chips = ['Handwas', 'Snow foam', 'Velgen en banden', 'Kleien', 'Polijsten', 'Waxlaag', 'Quartz coating', 'Interieur', 'Stoelen dieptereinigen'];

// Letterlijk van Google (stand 2 oktober 2026). De eerste is ingekort met "…". Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Stefan v. N.', wanneer: '3 jaar geleden', tekst: 'Geweldige kwaliteit … Kundig, professioneel en zeer vriendelijk …' },
  { naam: 'Leo', wanneer: '3 jaar geleden', tekst: 'Vakkundig werk geleverd. Kleine krasjes zijn allemaal weg !' },
  { naam: 'Wessel L.', wanneer: '3 jaar geleden', tekst: 'Echt een top service door Vie' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waAfspraak = waMet('Hoi Vie, ik wil graag een afspraak maken voor mijn auto.');
