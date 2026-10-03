import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({viewport:{width:1440,height:900}});
await p.goto('https://hansler.nl/',{waitUntil:'networkidle'});
for (let y=0;y<5000;y+=300){await p.evaluate(y=>scrollTo(0,y),y);await p.waitForTimeout(250);}
await p.waitForTimeout(2000);
const r = await p.evaluate(()=>{const e=[...document.querySelectorAll('h2,h3,h4,p')].find(e=>/Onze klanten/.test(e.textContent));const bb=e.getBoundingClientRect();return {top:bb.top+scrollY, op:getComputedStyle(e.closest('.elementor-element')).opacity}});
console.log(r);
await p.evaluate(y=>scrollTo(0,y), r.top-100); await p.waitForTimeout(1500);
await p.screenshot({path:'bron/oud-klanten-1440.png'});
await b.close();
