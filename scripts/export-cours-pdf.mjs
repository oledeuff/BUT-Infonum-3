#!/usr/bin/env node
/**
 * Export des diaporamas HTML 1A en PDF via Chromium/Playwright.
 * Un document par séance, au format écran 16:9.
 * Les transformations JS des diapositives s'exécutent avant l'impression.
 * Usage: node scripts/export-cours-pdf.mjs
 */
import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root=process.cwd();
const site=path.join(root,'docs','but-infonum');
const outputRoot=path.join(site,'pdf');
const courses=['histoire-medias','theories-information'];
const printCSS=`
@page {size: 13.333333in 7.5in; margin:0}
html,body{margin:0!important;padding:0!important;width:auto!important;height:auto!important;overflow:visible!important;background:#fff!important}
body:before,.topbar,.footer,.home-link,.deckbar,.progress,.slide-nav{display:none!important}
.slides{display:block!important;position:relative!important;width:1280px!important;height:auto!important;min-height:0!important;overflow:visible!important}
.slide,.slide.active{
  box-sizing:border-box!important;position:relative!important;inset:auto!important;
  display:flex!important;visibility:visible!important;opacity:1!important;
  flex-direction:column!important;float:none!important;transform:none!important;
  width:1280px!important;height:720px!important;min-height:720px!important;
  max-height:720px!important;overflow:hidden!important;
  padding:50px 65px 58px!important;margin:0!important;
  page-break-after:always!important;break-after:page!important;
  page-break-inside:avoid!important;break-inside:avoid!important;
}
.slide:last-of-type{page-break-after:auto!important;break-after:auto!important}
.slide .content{overflow:visible!important;max-height:none!important}
.slide h2{max-width:100%!important}
.slide .portrait-card img{max-height:390px!important;object-fit:contain!important}
.slide .diagram-img{max-height:460px!important;object-fit:contain!important}
.slide .chapter-cover{min-height:0!important}
.slide *{print-color-adjust:exact!important;-webkit-print-color-adjust:exact!important}
`;

await fs.mkdir(outputRoot,{recursive:true});
const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
let count=0;
try{
  for(const course of courses){
    const dir=path.join(site,course);
    const entries=(await fs.readdir(dir)).filter(x=>/^\d\d-.*\.html$/.test(x)).sort();
    const outDir=path.join(outputRoot,course);
    await fs.mkdir(outDir,{recursive:true});
    for(const file of entries){
      const page=await browser.newPage({viewport:{width:1280,height:720},deviceScaleFactor:1});
      const source=pathToFileURL(path.join(dir,file)).href;
      try{
        await page.goto(source,{waitUntil:'load',timeout:45000});
        // Attendre les ajouts dynamiques de deck.js et readability.js.
        await page.waitForFunction(()=>document.querySelectorAll('.slide').length>0,{timeout:15000});
        await page.waitForTimeout(1200);
        await page.evaluate(async()=>{await document.fonts.ready});
        await page.emulateMedia({media:'print'});
        await page.addStyleTag({content:printCSS});
        const slides=await page.locator('section.slide').count();
        if(slides<1)throw new Error('Aucune diapositive dans '+file);
        const pdfName=file.replace(/\.html$/,'.pdf');
        const out=path.join(outDir,pdfName);
        await page.pdf({path:out,printBackground:true,preferCSSPageSize:true,displayHeaderFooter:false,timeout:90000});
        const stats=await fs.stat(out);
        if(stats.size<2000)throw new Error('PDF anormalement petit: '+out);
        console.log(course+'/'+pdfName+' : '+slides+' diapositives, '+Math.round(stats.size/1024)+' Ko');
        count++;
      } finally{await page.close()}
    }
  }
} finally{await browser.close()}
if(count!==12)throw new Error('12 PDF attendus, '+count+' produits.');
console.log('Export terminé : '+count+' PDF');
