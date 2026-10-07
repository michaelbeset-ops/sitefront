import { chromium } from 'playwright'; import fs from 'node:fs';
import lighthouse from 'file:///C:/Users/Micha/AppData/Local/npm-cache/_npx/1722e863ebfd623b/node_modules/lighthouse/core/index.js';
const b = await chromium.launch({ args: ['--remote-debugging-port=9426'] });
const r = await lighthouse('http://localhost:4425/sitefront/kooiman-marine-group/', { port: 9426, output: 'json', logLevel: 'error' });
fs.writeFileSync('shots/lh.json', r.report);
console.log(Object.entries(r.lhr.categories).map(([k,v])=>k+':'+Math.round(v.score*100)).join(' '));
for (const a of Object.values(r.lhr.audits)) if (a.score!==null && a.score<0.9 && !['informative','notApplicable','manual'].includes(a.scoreDisplayMode)) console.log('LOW', a.id, a.score, a.displayValue||'');
await b.close();
