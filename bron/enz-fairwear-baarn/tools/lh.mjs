import { chromium } from 'playwright'; import fs from 'node:fs';
import lighthouse from 'file:///C:/Users/Micha/AppData/Local/npm-cache/_npx/0f94ee7615faf582/node_modules/lighthouse/core/index.js';
const b = await chromium.launch({ args: ['--remote-debugging-port=9341'] });
const r = await lighthouse('http://localhost:4453/sitefront/enz-fairwear-baarn/', { port: 9341, output: 'json', logLevel: 'error' });
fs.writeFileSync('shots/lh-mobiel.json', r.report);
console.log(Object.entries(r.lhr.categories).map(([k,v])=>k+':'+Math.round(v.score*100)).join(' '));
for (const a of Object.values(r.lhr.audits)) if (a.score!==null && a.score<0.9 && !['informative','notApplicable','manual'].includes(a.scoreDisplayMode)) console.log('LOW', a.id, a.score, a.displayValue||'');
await b.close();
