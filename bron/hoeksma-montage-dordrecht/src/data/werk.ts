// Alle foto's: eigen projectfoto's van hoeksmamontage.nl (pagina's Keukens, Badkamers, Timmerwerken, Thuis).
import type { ImageMetadata } from 'astro';
const f = import.meta.glob<{ default: ImageMetadata }>('../assets/*.jpg', { eager: true });
export const foto = (n: string) => f[`../assets/${n}.jpg`].default;

export type Soort = 'keukens' | 'badkamers' | 'timmerwerk';
export const soortNaam: Record<Soort, string> = { keukens: 'Keuken', badkamers: 'Badkamer', timmerwerk: 'Timmerwerk' };

export const werk: { n: string; soort: Soort; alt: string }[] = [
  { n: 'keuken-03', soort: 'keukens', alt: 'Witte keuken met kookeiland onder een verlaagd plafond met spots en indirect licht' },
  { n: 'badkamer-19', soort: 'badkamers', alt: 'Vrijstaand bad voor een wand van natuursteenstrips, met een nis in de tegelwand' },
  { n: 'timmerwerken-05', soort: 'timmerwerk', alt: 'Vrijstaande witte tv-wand op maat, midden in een lichte woonkamer' },
  { n: 'badkamer-28', soort: 'badkamers', alt: 'Verlichte spiegel boven twee waskommen op een zwart zwevend meubel' },
  { n: 'badkamer-23', soort: 'badkamers', alt: 'Twee waskommen op een houten blad, met de inloopdouche achter een witte wand' },
  { n: 'keuken-11', soort: 'keukens', alt: 'Donkere hoogglans keuken met wit werkblad op het eiland en een verlaagd plafond' },
  { n: 'badkamer-29', soort: 'badkamers', alt: 'Inloopdouche met glazen schuifdeur en een verlichte nis in de tegelwand' },
  { n: 'keuken-16', soort: 'keukens', alt: 'Verlichte nissenwand bij de keuken, met het kookeiland op de achtergrond' },
  { n: 'badkamer-27', soort: 'badkamers', alt: 'Hangtoilet onder een verlichte nis met een strook reliëftegels' },
  { n: 'home-01', soort: 'keukens', alt: 'Keukeneiland met donker werkblad onder een verlaagd plafond met indirect licht' },
  { n: 'badkamer-21', soort: 'badkamers', alt: 'Lange badkamer met hoge radiator, waskommen op een eiken blad en het bad achterin' },
  { n: 'timmerwerken-01', soort: 'timmerwerk', alt: 'Aanbouw met zwarte houten gevelbekleding en een houten lamellenschot' },
  { n: 'badkamer-20', soort: 'badkamers', alt: 'Twee verlichte nissen in een witte wand naast het bad' },
  { n: 'home-03', soort: 'keukens', alt: 'Witte hoogglans keuken met eiland en een verlaagd plafond boven het kookgedeelte' },
  { n: 'badkamer-07', soort: 'badkamers', alt: 'Ingebouwd bad voor een donkere tegelwand met twee wandlampjes' },
  { n: 'hero', soort: 'badkamers', alt: 'Dubbele waskom op een eiken badmeubel, spiegel en twee verlichte nissen in de wand' },
  { n: 'keuken-05', soort: 'keukens', alt: 'Witte keuken met eiland en verlaagd plafond, met de eettafel op de achtergrond' },
  { n: 'keuken-18', soort: 'keukens', alt: 'Verlichte nissenwand naast een witte hoge kastenwand met inbouwapparatuur' },
  { n: 'badkamer-08', soort: 'badkamers', alt: 'Toiletruimte met hangtoilet, fonteintje en een donkere tegelwand' },
  { n: 'timmerwerken-14', soort: 'timmerwerk', alt: 'Kastenwand met open vakken rond een brede doorgang' },
];

// Tijdens de bouw en bij oplevering: telkens hetzelfde project.
export const paren = [
  { wat: 'Nissenwand', tijdens: 'keuken-14', klaar: 'keuken-18', altT: 'De nissenwand in aanbouw: plaatmateriaal, de spots al geplaatst', altK: 'De nissenwand opgeleverd, met verlichting en de keuken ernaast' },
  { wat: 'Verlaagd plafond', tijdens: 'keuken-15', klaar: 'keuken-19', altT: 'Het frame van het verlaagde plafond boven de keuken, nog in de ruwbouw', altK: 'Het verlaagde plafond afgewerkt, met spots boven het keukeneiland' },
  { wat: 'Toiletwand', tijdens: 'badkamer-25', klaar: 'badkamer-27', altT: 'De toiletwand in opbouw, met de verlichte nis al zichtbaar', altK: 'De toiletwand opgeleverd: hangtoilet, tegels en de verlichte nis' },
];
