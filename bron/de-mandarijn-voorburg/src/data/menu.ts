// Bron: afhaalkaart De Mandarijn, PDF december 2025 (pagina 1), overgetikt 28-09-2026:
// https://demandarijn.com/wp-content/uploads/2025/12/afhaal-2025-12.pdf
// Glutenvrij-info: "Glutenvrij afhaalmenu" (PDF), https://demandarijn.com/wp-content/uploads/2024/07/Glutenvrij-afhaalmenu.pdf
// Prijzen letterlijk overgenomen, niets afgerond of aangevuld.

export interface Gerecht { nr: string; naam: string; omschrijving?: string; prijs: string }

export const specialiteiten: Gerecht[] = [
  { nr: '1', naam: 'Mon Koe Mix', omschrijving: 'een mengeling van kipfilet, varkensvlees en ossenhaas in een gekruide zoete saus', prijs: '22,50' },
  { nr: '2', naam: 'Mon Koe Yuk', omschrijving: 'gebakken plakjes varkensvlees in een gekruide zoete saus', prijs: '19,50' },
  { nr: '3', naam: 'Mon Koe Kai', omschrijving: 'gebakken plakjes kipfilet in een gekruide zoete saus', prijs: '19,50' },
  { nr: '4', naam: 'Mon Koe Ngau Yuk', omschrijving: 'gebakken plakjes ossenhaas in een gekruide zoete saus', prijs: '22,50' },
  { nr: '5', naam: 'Mon Koe Ap', omschrijving: 'gebakken plakjes eendfilet in een gekruide zoete saus', prijs: '21,80' },
  { nr: '6', naam: 'Mon Koe Tai Haa', omschrijving: 'gebakken Chinese garnalen in een gekruide zoete saus', prijs: '22,80' },
  { nr: '7', naam: 'Chau Sam Sin', omschrijving: 'diverse vlees, groenten en garnaaltjes in oestersaus', prijs: '20,50' },
  { nr: '8', naam: 'Saar Char Kai', omschrijving: 'kipfilet met diverse groenten in barbecue saus, pikant', prijs: '19,50' },
  { nr: '9', naam: 'Saar Char Ngau Yuk', omschrijving: 'ossenhaas met diverse groenten in barbecue saus, licht pikant', prijs: '22,50' },
  { nr: '10', naam: 'Ananas Schip', omschrijving: 'traditioneel bereide Koe Loe Kai met frisse ananas', prijs: '21,50' },
  { nr: '11', naam: 'Vogelnestje gevarieerd', omschrijving: 'een vogelnestje van gefrituurde mie gevuld met plakjes varkensvlees, ossenhaas, kipfilet, Chinese garnalen en groenten', prijs: '21,50' },
  { nr: '12', naam: 'Lotus Blad', omschrijving: 'gebakken rijst met diverse vleessoorten, garnaaltjes en groenten in gevouwen blad van lotus (minimaal 20 minuten)', prijs: '21,50' },
  { nr: '13', naam: 'Geroosterde eend à la "De Mandarijn"', omschrijving: 'eendfilet met groenten, jonge bamboes en Chinese champignons', prijs: '22,00' },
];

const uitHuis = (nr: string) => specialiteiten.find((g) => g.nr === nr)!;

export const populair: Gerecht[] = [
  uitHuis('1'),
  uitHuis('10'),
  uitHuis('13'),
  { nr: '39', naam: 'Tsie Jim Kai', omschrijving: 'kippenvlees met zout en peper', prijs: '21,50' },
  { nr: '42', naam: 'Tsie Jim Haa', omschrijving: 'garnalen met zout en peper', prijs: '23,50' },
  { nr: '52b', naam: 'Kong Po Kai Ding', omschrijving: 'kippenvlees met cashewnoten en groenten', prijs: '19,50' },
  { nr: '52c', naam: 'Kong Po Tai Haa', omschrijving: 'Chinese garnalen met cashewnoten en groenten', prijs: '22,80' },
  { nr: '98', naam: 'Mihoen "Singapore"', prijs: '20,80' },
  { nr: '101', naam: 'Babi Pangang spek', prijs: '19,00' },
  { nr: '102', naam: 'Babi Pangang speciaal (mager)', prijs: '19,00' },
  { nr: '108', naam: 'Babi Pangang "De Mandarijn"', omschrijving: 'combinatie met babi pangang spek, babi pangang mager en cha sieuw', prijs: '23,00' },
  { nr: '114', naam: 'Gesneden vlees in kerriesaus', prijs: '17,80' },
  { nr: '115', naam: 'Gesneden vlees in zwarte bonensaus', prijs: '17,80' },
  { nr: '124', naam: 'Foe Yong Hai met kipfilet', prijs: '16,80' },
  { nr: '126', naam: 'Foe Yong Hai met garnalen', prijs: '21,50' },
  { nr: '128', naam: 'Tjap Tjoy met kipfilet', prijs: '16,80' },
  { nr: '134', naam: 'Tjap Tjoy "De Mandarijn"', omschrijving: 'groenten met cha sieuw, kipfilet, ossenhaas, Chinese garnalen en krab', prijs: '22,50' },
  { nr: '136', naam: 'Ossenhaas met broccoli', prijs: '22,50' },
  { nr: '141', naam: 'Ossenhaas in zwarte bonensaus', prijs: '22,50' },
  { nr: '141a', naam: 'Ossenhaas in zwarte pepersaus', prijs: '22,50' },
  { nr: '146', naam: 'Garnalen in zwarte bonensaus', prijs: '22,80' },
  { nr: '149', naam: 'Garnalen in kerriesaus', prijs: '22,80' },
  { nr: '150', naam: 'Garnalen met broccoli', prijs: '22,80' },
  { nr: '153', naam: 'Chinese groenten met knoflook', prijs: '18,00' },
  { nr: '159', naam: 'Tongfilet in zoetzure saus', prijs: '22,80' },
  { nr: '163', naam: 'Indische Rijsttafel (voor 1 persoon)', prijs: '23,00' },
  { nr: '165', naam: 'Chinese Rijsttafel (voor 1 persoon)', prijs: '24,50' },
];

// Glutenvrij afhaalmenu: alleen de nummers die ook hierboven staan. Lege lijst = staat op de lijst zonder reden.
const SO = 'sojasaus en oestersaus';
const OLIE = 'kruisbesmetting gluten door olie';
export const glutenvrij: Record<string, string[]> = {
  '10': [SO], '11': [SO], '12': [SO],
  '39': [OLIE], '42': [OLIE],
  '52b': [SO], '52c': [SO],
  '101': [OLIE, 'babi pangang saus bevat gluten'],
  '102': [OLIE, 'babi pangang saus bevat gluten'],
  '114': [], '115': [],
  '124': ['Foe Yong Hai saus bevat gluten'], '126': ['Foe Yong Hai saus bevat gluten'],
  '128': [SO], '136': [SO], '141': [SO], '146': [SO], '149': [SO], '150': [SO], '153': [SO], '159': [SO],
};

export const glutenTip = 'Als u 100% glutenvrij wilt eten, vraag dan aan de kok om geen sojasaus en oestersaus in de gerechten te gebruiken.';
export const rijstNoot = 'Bovenstaande gerechten zijn inclusief witte rijst.';
export const toeslagen = [
  { wat: 'Nasi of bami goreng', prijs: '1,50', per: ' per persoon extra' },
  { wat: 'Mihoen of Chinese bami', prijs: '3,80', per: ' extra' },
];
