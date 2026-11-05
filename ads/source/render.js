const {chromium}=require('playwright');const path=require('path');
(async()=>{const b=await chromium.launch({args:['--allow-file-access-from-files']});
const ads=(process.argv[2]||'1,2,3,4,5,6,7,8,9,10').split(',');const fmts=(process.argv[3]||'sq,vt').split(',');const scale=+(process.argv[4]||1);const guide=process.argv[5]==='g';
for(const f of fmts){const p=await b.newPage({viewport:{width:1080,height:{sq:1080,vt:1920,f45:1350}[f]},deviceScaleFactor:scale});
 for(const n of ads){await p.goto('file://'+path.resolve(__dirname,'build/index.html')+`?ad=${n}&fmt=${f}${guide?'&guide=1':''}`);await p.waitForFunction('window.READY===1');await p.waitForTimeout(150);
  const out=path.resolve(__dirname,(guide?'check/':'out/')+`rebatetools-${String(n).padStart(2,'0')}-${{sq:'1x1',vt:'9x16',f45:'4x5'}[f]}.png`);
  await p.locator('section.ad').screenshot({path:out});console.log(out)}
 await p.close()}
await b.close()})();
