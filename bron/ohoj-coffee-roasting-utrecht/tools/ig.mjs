import { chromium } from 'playwright'; import fs from 'node:fs';
const ids=['DNiNKRUoqtg','DKR7_syI24H','DJ_i5khI64p','DI3zgNRIlmr','DGpZNwcINRw','DEjgO0woS4T','C1ELViUoR52','Cx2ml5FImyR','CxhvuZBId9d','CvMIAg8oDU_','CtDtGSLoOTp','CsQtEQ1Icaj'];
const b = await chromium.launch(); const ctx = await b.newContext({ locale:'nl-NL', userAgent:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' });
const p = await ctx.newPage(); const log=[];
for (const id of ids) {
  const r = await ctx.request.get(`https://www.instagram.com/p/${id}/`); const h = await r.text();
  const img = (h.match(/property="og:image" content="([^"]+)"/)||[])[1]?.replace(/&amp;/g,'&');
  const d = (h.match(/property="og:description" content="([^"]+)"/)||[])[1]?.replace(/&quot;/g,'"').replace(/&#x[0-9a-f]+;/gi,' ');
  if (img) { const x = await ctx.request.get(img); fs.writeFileSync(`bron/ig/${id}.jpg`, await x.body()); }
  log.push(`${id} | ${d}`); console.log(id, !!img);
}
fs.writeFileSync('bron/ig/ig.txt', log.join('\n\n')); await b.close();
