import { chromium } from 'playwright'; import fs from 'node:fs';
const { default: lighthouse } = await import('file:///C:/Users/Micha/AppData/Local/npm-cache/_npx/1fc4933a57a44b8f/node_modules/lighthouse/core/index.js');
const b = await chromium.launch({ args: ['--remote-debugging-port=9333'] });
const r = await lighthouse(process.argv[2] || 'http://localhost:4432/sitefront/machinefabriek-bgw-dordrecht/', { port: 9333, output: 'json', onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'], formFactor: 'mobile', logLevel: 'error' });
fs.writeFileSync('shots/lh.json', r.report);
const j = r.lhr; console.log(Object.values(j.categories).map(c => c.id + ' ' + Math.round(c.score * 100)).join(' | '));
for (const a of Object.values(j.audits)) if (a.score !== null && a.score < 0.9 && !['informative', 'notApplicable', 'manual'].includes(a.scoreDisplayMode)) console.log(' -', a.id, a.displayValue || '', a.score);
console.log('LCP', j.audits['largest-contentful-paint'].displayValue, 'CLS', j.audits['cumulative-layout-shift'].displayValue, 'TBT', j.audits['total-blocking-time'].displayValue);
await b.close();
