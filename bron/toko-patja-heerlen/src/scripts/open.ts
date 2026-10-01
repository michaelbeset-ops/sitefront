// Markeert vandaag in de tijdentabel en zet een korte regel ("Vandaag open tot 20.00") neer, in Heerlense tijd.
import { TIJDEN, DAGEN } from '../data/site';

function nuInHeerlen() {
  const p = Object.fromEntries(new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Amsterdam', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).formatToParts(new Date()).map((x) => [x.type, x.value]));
  const wd = new Date(Date.UTC(+p.year, +p.month - 1, +p.day)).getUTCDay();
  return { wd, min: Number(p.hour) * 60 + Number(p.minute) };
}

function regel(): string {
  const { wd, min } = nuInHeerlen();
  const t = TIJDEN[wd];
  if (t && min < t[1] * 60) return min < t[0] * 60 ? `Vandaag open vanaf ${t[0]}.00 uur.` : `Nu open, tot ${t[1]}.00 uur.`;
  let n = 1;
  while (!TIJDEN[(wd + n) % 7]) n++;
  const v = TIJDEN[(wd + n) % 7]!;
  return `Nu gesloten. ${n === 1 ? 'Morgen' : 'Op ' + DAGEN[(wd + n) % 7]} weer open vanaf ${v[0]}.00 uur.`;
}

const { wd } = nuInHeerlen();
document.querySelectorAll<HTMLElement>(`[data-dag~="${wd}"]`).forEach((el) => el.setAttribute('data-vandaag', ''));
document.querySelectorAll<HTMLElement>('[data-nu]').forEach((el) => { el.textContent = regel(); });
