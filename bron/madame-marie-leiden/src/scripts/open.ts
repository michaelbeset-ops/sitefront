// Openingstijden van het Google-profiel: donderdag t/m zondag 11.00-17.00 uur, maandag t/m woensdag gesloten.
// Gedeeld door de live status en "Is er plek voor ons?".
export const OPEN_DAGEN = [4, 5, 6, 0];
export const VAN = 11;
export const TOT = 17;
const DAGEN = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
const MAANDEN = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];

export type Dag = { ymd: string; wd: number; d: number; m: number };

export function vanYmd(ymd: string): Dag {
  const [y, m, d] = ymd.split('-').map(Number);
  return { ymd, wd: new Date(Date.UTC(y, m - 1, d)).getUTCDay(), d, m };
}
export function plusDag(ymd: string, n = 1): string {
  const [y, m, d] = ymd.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d + n)).toISOString().slice(0, 10);
}
export const isOpenDag = (dag: Dag) => OPEN_DAGEN.includes(dag.wd);
export const dagNaam = (dag: Dag) => `${DAGEN[dag.wd]} ${dag.d} ${MAANDEN[dag.m - 1]}`;
export const dagKort = (dag: Dag) => DAGEN[dag.wd].slice(0, 2);
export const maandKort = (dag: Dag) => MAANDEN[dag.m - 1].slice(0, 3);

export function nuInLeiden() {
  const p = Object.fromEntries(new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Amsterdam', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).formatToParts(new Date()).map((x) => [x.type, x.value]));
  return { dag: vanYmd(`${p.year}-${p.month}-${p.day}`), min: Number(p.hour) * 60 + Number(p.minute) };
}

/** De eerstvolgende open dagen; vandaag telt mee zolang het nog voor 16.30 uur is. */
export function komendeDagen(aantal: number): Dag[] {
  const nu = nuInLeiden();
  const uit: Dag[] = [];
  let t = nu.dag.ymd;
  for (let i = 0; i < 40 && uit.length < aantal; i++) {
    const d = vanYmd(t);
    if (isOpenDag(d) && !(i === 0 && nu.min >= TOT * 60 - 30)) uit.push(d);
    t = plusDag(t);
  }
  return uit;
}
