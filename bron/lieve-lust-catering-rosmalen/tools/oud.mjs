import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [w,h] of [[1440,900],[390,844]]) {
  const p = await (await b.newContext({ viewport:{width:w,height:h} })).newPage();
  const r = await p.goto('https://www.lieve-lust.nl/', { waitUntil:'load' }).catch(e=>null);
  console.log(w, r && r.status(), (await p.textContent('body')).replace(/\s+/g,' ').slice(0,300));
  await p.screenshot({ path:`bron/web/oud-${w}.png` });
}
await b.close();
