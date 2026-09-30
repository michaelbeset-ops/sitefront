// Openingstijden van Bloem (Google-profiel): woensdag t/m zondag 10.00-16.00, maandag en dinsdag gesloten.
// Gedeeld door de "open vandaag?"-status, de openingstijdentabel en het langskomen-blok.
export const OPEN_DAGEN = [3, 4, 5, 6, 0];
export const OPEN_VAN = 10 * 60;
export const OPEN_TOT = 16 * 60;
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
export const isOpen = (dag: Dag) => OPEN_DAGEN.includes(dag.wd);
export const dagNaam = (dag: Dag) => `${DAGEN[dag.wd]} ${dag.d} ${MAANDEN[dag.m - 1]}`;
export const kortNaam = (dag: Dag) => ({ wd: DAGEN[dag.wd].slice(0, 2), datum: `${dag.d} ${MAANDEN[dag.m - 1].slice(0, 3)}` });

export function nuInDenBosch() {
  const p = Object.fromEntries(new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Amsterdam', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).formatToParts(new Date()).map((x) => [x.type, x.value]));
  return { dag: vanYmd(`${p.year}-${p.month}-${p.day}`), min: Number(p.hour) * 60 + Number(p.minute) };
}

// De eerstvolgende open dagen, vanaf vandaag (vandaag alleen als het nog voor 15.30 uur is).
export function komendeDagen(aantal: number): Dag[] {
  const nu = nuInDenBosch();
  const uit: Dag[] = [];
  let t = nu.dag.ymd;
  if (!(isOpen(nu.dag) && nu.min < OPEN_TOT - 30)) t = plusDag(t);
  for (let i = 0; uit.length < aantal && i < 40; i++, t = plusDag(t)) {
    const d = vanYmd(t);
    if (isOpen(d)) uit.push(d);
  }
  return uit;
}
