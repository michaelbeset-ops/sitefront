import { chromium } from 'playwright';
import { execSync } from 'node:child_process';
const b = await chromium.launch({ args: ['--remote-debugging-port=9334'] });
try {
  for (const [pad, out] of [['', 'shots/lh.json'], ['privacy/', 'shots/lh-privacy.json']])
    execSync(`npx -y lighthouse http://localhost:4663/sitefront/maximum-detailing-ridderkerk/${pad} --port=9334 --quiet --output=json --output-path=${out} --only-categories=performance,accessibility,best-practices,seo`, { stdio: 'inherit' });
} finally { await b.close(); }
