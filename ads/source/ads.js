// RebateTools ad set — each ad has a square (sq) and vertical 9:16 (vt) layout.
// Vertical rule: logo, headline, key visual and CTA sit between y=300 and y=1250 (Reels/Stories safe);
// supporting detail sits between 1270 and 1620 (visible in feed 4:5 crop and Stories); nothing important outside 285–1635.
const A={};
// vertical (9:16) headlines: shorter lines, bigger type
const H=(fs,html,extra='')=>`<div class="h" style="font-size:${fs}px;letter-spacing:-.055em;line-height:.98;${extra}">${html}</div>`;
const hv={
3:H(112,'Still tracking<br>rebates in<br><span style="position:relative;display:inline-block"><span class="gt g-brand">spreadsheets?</span><span style="position:absolute;left:-1%;right:7%;top:52%;height:10px;background:#ff6b6b;border-radius:9px;transform:rotate(-1.2deg);opacity:.92"></span></span>','color:var(--ink)'),
4:H(106,'Your top client went<br>quiet <span class="gt g-orange">12 days ago.</span><br>Did you notice?'),
5:H(104,'Which sub-IB<br>is actually<br><span class="gt g-teal">making you money?</span>','text-align:center'),
6:H(124,'Stop guessing.<br><span class="gt g-brand">Start calculating.</span>','color:var(--ink)'),
7:H(116,'Your rebates<br>dropped 31%.<br><span class="gt g-coral">Do you know why?</span>','color:var(--ink)'),
8:H(90,'<span style="color:#3f4a63">A few clients drive<br>most of your rebates.</span><br><span class="gt g-teal">Do you know<br>which ones?</span>'),
9:H(136,"Who's trading<br>less than<br><span class=\"gt g-plum\">last week?</span>"),
10:H(132,"Know who's<br>keeping your<br><span class=\"gt g-gold\">income alive.</span>",'color:var(--ink);text-align:center'),
};


/* ---------- 1. FOREX AFFILIATE ---------- */
const lb1=(big=false)=>{const f=big?1.06:1;const rows=[['#1','Olga Gutmann','c-hot','HOT','$5,385'],['#2','Ernest Schuppe','c-risk','AT RISK','$3,040'],['#3','Terrance McCullough','c-dead','DEAD','$2,429']].concat(big?[['#4','Kris Streich','c-hot','HOT','$1,696'],['#5','Delilah Davis','c-risk','AT RISK','$1,307']]:[]);return `
<div class="card" style="padding:${22*f}px ${22*f}px ${20*f}px">
  <div class="row" style="gap:12px;margin-bottom:${14*f}px">${mark(28*f)}<b style="font-size:${21*f}px;font-weight:600">Client leaderboard</b><span class="sp"></span><span class="lab" style="font-size:${12*f}px">Sample data</span>
  <span style="margin-left:12px;display:inline-flex;align-items:center;gap:8px;height:${30*f}px;padding:0 12px;border-radius:999px;border:1px solid rgba(140,160,220,.22);font-size:${14*f}px;color:var(--fg2)"><span class="dot" style="width:8px;height:8px;box-shadow:none"></span>Live</span></div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:${12*f}px;margin-bottom:${12*f}px">
    <div style="border:1px solid rgba(140,160,220,.14);border-radius:14px;padding:${14*f}px ${16*f}px;background:rgba(255,255,255,.02)"><div class="lab" style="font-size:${12*f}px">Rebates · this month</div><div class="row" style="gap:10px;margin:${6*f}px 0 ${6*f}px"><b style="font-size:${30*f}px;letter-spacing:-.02em">$47,630</b><span class="up" style="font-size:${15*f}px">↑ 62%</span></div>${spark([3,4,3.6,5,4.8,6,7.2,8],180*f,26*f,'#2a95f0')}</div>
    <div style="border:1px solid rgba(140,160,220,.14);border-radius:14px;padding:${14*f}px ${16*f}px;background:rgba(255,255,255,.02)"><div class="lab" style="font-size:${12*f}px">Active (7D)</div><div class="row" style="gap:10px;margin:${6*f}px 0 ${6*f}px"><b style="font-size:${30*f}px;letter-spacing:-.02em">1,248</b><span class="up" style="font-size:${15*f}px">↑ 64%</span></div>${spark([3,3.2,4,3.6,4.4,4.2,5,5.6],180*f,26*f,'#00d190')}</div>
  </div>
  ${rows.map(r=>`
  <div class="row" style="gap:14px;height:${42*f}px;padding:0 14px;border:1px solid rgba(140,160,220,.12);border-radius:11px;margin-top:${7*f}px;background:rgba(255,255,255,.015)"><span class="mono" style="font-size:${13*f}px;color:var(--fg3)">${r[0]}</span><span style="font-size:${17*f}px;font-weight:600">${r[1]}</span><span class="sp"></span><span class="chip ${r[2]}" style="font-size:${12*f}px">${r[3]}</span><b style="font-size:${18*f}px;width:${66*f}px;text-align:right">${r[4]}</b></div>`).join('')}
</div>`};
const feat1=(i,t,d,h=118)=>`<div class="card" style="border-radius:18px;padding:18px 20px;height:${h}px"><div class="row" style="gap:12px;margin-bottom:10px"><span style="width:40px;height:40px;border-radius:11px;border:1px solid rgba(140,160,220,.22);display:flex;align-items:center;justify-content:center;background:rgba(42,149,240,.08)">${ic(i,21,'#4aa8ff')}</span><b style="font-size:17px;font-weight:700;letter-spacing:.02em;white-space:nowrap">${t}</b></div><div style="font-size:15.5px;line-height:1.35;color:var(--fg2)">${d}</div></div>`;
const stats1=`<div class="row" style="gap:0">${[['4','Platforms synced'],['24/7','Live tracking'],['0','Spreadsheets']].map(s=>`<div style="padding:0 22px;white-space:nowrap;border-left:1px solid rgba(140,160,220,.2)"><b style="font-size:30px;display:block;line-height:1.1">${s[0]}</b><span class="lab" style="font-size:12px">${s[1]}</span></div>`).join('')}</div>`;
const deco1=`<div class="mono" style="position:absolute;right:60px;top:%TOP%px;transform:rotate(-7deg);text-align:right;font-size:17px;line-height:1.75;color:var(--fg3)">Track.<br>Optimise.<br><span style="color:#36c3d6">Earn more.</span></div>`;
const hl1=(fs)=>`<div class="h" style="font-size:${fs}px;font-weight:900;letter-spacing:-.045em;line-height:.93;text-transform:uppercase">FOREX<br><span class="gt g-brand">AFFILIATE?</span></div>`;
const kick1=`<div class="row" style="gap:12px;font-size:24px;font-weight:600;color:#4aa8ff">${ic('trend',22,'#4aa8ff')}Partner intelligence for IB networks</div>`;
A[1]={cls:'dark grid',
sq:`${deco1.replace('%TOP%',190)}<div class="c">${topRow(pill('<b>Network sync live</b> · 4 partner platforms'))}
<div style="margin-top:34px">${kick1}</div>
<div style="margin-top:14px">${hl1(132)}</div>
<div style="margin-top:20px;font-size:28px;font-weight:700;letter-spacing:.2em">SAME CLIENTS. HIGHER REBATES.</div>
<div class="mono" style="margin-top:10px;font-size:15.5px;letter-spacing:.14em;color:var(--fg2)">LIVE DATA × CHURN ALERTS × AUTO-SYNC = <span style="color:#36c3d6">MORE REBATES.</span></div>
<div style="display:grid;grid-template-columns:470px 1fr;gap:16px;margin-top:28px">
 <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">${feat1('bars','TRACK','Every client &amp; sub-IB across every partner.')}${feat1('bell','GET ALERTS','Spot quiet clients before they go dark.')}${feat1('db','TRACE REBATES','Every rebate by client, partner &amp; platform.')}${feat1('users','SCALE','Back the partners who grow you.')}</div>
 <div style="zoom:.86">${lb1()}</div>
</div>
<div class="sp"></div>
<div class="row">${cta('Unlock your growth plan')}<span class="sp"></span>${stats1}</div></div>`,
vt:`${deco1.replace('%TOP%',400)}<div class="c">${topRow(pill('<b>Network sync live</b> · 4 partners'))}
<div style="margin-top:40px">${kick1}</div>
<div style="margin-top:10px">${hl1(140)}</div>
<div style="margin-top:20px;font-size:30px;font-weight:700;letter-spacing:.19em">SAME CLIENTS. HIGHER REBATES.</div>
<div style="margin-top:30px">${lb1(true)}</div>
<div style="margin-top:auto;padding-top:44px;display:flex">${cta('Unlock your growth plan')}</div>
<div style="position:absolute;left:64px;right:180px;top:1390px">
 <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">${feat1('bars','TRACK','Every client &amp; sub-IB across every partner.',112)}${feat1('bell','GET ALERTS','Spot quiet clients before they go dark.',112)}</div>
 <div class="lab" style="text-align:center;margin:26px 0 12px">Connects to the partner programmes you already use</div>${partners(70)}
</div></div>`};

/* ---------- 2. MASTER IB ---------- */
const dash2=(f=1,ch=100)=>`
<div class="card" style="display:flex;border-radius:22px;overflow:hidden">
 <div style="width:${178*f}px;border-right:1px solid rgba(140,160,220,.14);padding:${18*f}px ${14*f}px">
  <div class="row" style="gap:8px;margin-bottom:${18*f}px">${mark(24*f)}<b style="font-size:${16*f}px">Rebate<span style="color:#00cdb4">Tools</span></b></div>
  ${['Overview','Clients','Rebates','Sub-IBs','Leaderboards','Alerts'].map((t,i)=>`<div style="font-size:${15*f}px;padding:${8*f}px ${12*f}px;border-radius:9px;margin-bottom:${3*f}px;${i?'color:var(--fg2)':'background:rgba(42,149,240,.14);border:1px solid rgba(42,149,240,.35)'}">${t}</div>`).join('')}
 </div>
 <div style="flex:1;padding:${18*f}px ${18*f}px">
  <div class="row" style="margin-bottom:${14*f}px"><b style="font-size:${18*f}px">Network overview</b><span class="sp"></span><span class="lab" style="font-size:${11*f}px">Sample data</span><span style="margin-left:10px;font-size:${13*f}px;color:var(--fg2);display:inline-flex;align-items:center;gap:6px;border:1px solid rgba(140,160,220,.22);border-radius:8px;padding:${3*f}px 10px"><span class="dot" style="width:7px;height:7px;box-shadow:none"></span>Live</span></div>
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:${10*f}px">
   ${[['Network rebates','$47,630','↑ 62%','up','#00d190',[2,3,2.6,4,3.8,5]],['Active (7D)','1,248','↑ 64%','up','#2a95f0',[2,2.4,3,2.8,3.6,4.2]],['At risk','432','↑ 22%','','#f5a524',[2,3,2.6,3.4,3,3.8]],['Inactive (14D+)','284','↓ 14%','down','#ff6b6b',[4,3.4,3.8,3,2.6,2.2]]].map(s=>`<div style="border:1px solid rgba(140,160,220,.14);border-radius:12px;padding:${10*f}px ${12*f}px;background:rgba(255,255,255,.02)"><div class="lab" style="font-size:${10*f}px;letter-spacing:.1em">${s[0]}</div><b style="font-size:${23*f}px;display:block;margin:${3*f}px 0">${s[1]}</b><div class="row"><span class="${s[3]}" style="font-size:${12*f}px;${s[3]?'':'color:#f5a524;font-weight:700'}">${s[2]}</span><span class="sp"></span>${spark(s[5],60*f,20*f,s[4],{sw:2})}</div></div>`).join('')}
  </div>
  <div style="display:grid;grid-template-columns:1.15fr 1fr;gap:${10*f}px;margin-top:${10*f}px">
   <div style="border:1px solid rgba(140,160,220,.14);border-radius:12px;padding:${12*f}px;background:rgba(255,255,255,.02);position:relative"><div class="row"><b style="font-size:${14*f}px">Rebates growth</b><span class="sp"></span><span style="font-size:${11*f}px;color:var(--fg3)">Jan – Jul</span></div><div style="margin-top:${12*f}px">${spark([2,2.6,3.2,3.4,3.3,4,4.6,5.2,6.4,7],350*f,ch*f,'#2a95f0',{fill:true})}</div>
    <span style="position:absolute;right:${16*f}px;top:${36*f}px;background:#fff;color:#0b1020;border-radius:8px;padding:${3*f}px ${8*f}px;font-size:${13*f}px;font-weight:700;text-align:center;line-height:1.2">$47,630<br><span style="color:#00b07a;font-size:${10*f}px">↑ 62%</span></span></div>
   <div style="border:1px solid rgba(140,160,220,.14);border-radius:12px;padding:${12*f}px;background:rgba(255,255,255,.02)"><div class="row" style="margin-bottom:${6*f}px"><b style="font-size:${14*f}px">Sub-IB performance</b><span class="sp"></span><span style="font-size:${11*f}px;color:var(--fg3)">By rebates</span></div>
    ${[['Sub-IB Alpha','$23,540','↑ 18%','up'],['Sub-IB Beta','$15,230','↑ 9%','up'],['Sub-IB Gamma','$8,880','↓ 6%','down']].map(r=>`<div class="row" style="border:1px solid rgba(140,160,220,.12);border-radius:9px;padding:${6*f}px ${10*f}px;margin-top:${6*f}px"><span class="mono" style="font-size:${10*f}px;color:var(--fg3);margin-right:8px">T1</span><span style="font-size:${13.5*f}px;font-weight:600">${r[0]}</span><span class="sp"></span><span style="text-align:right;line-height:1.1"><b style="font-size:${14*f}px">${r[1]}</b><br><span class="${r[3]}" style="font-size:${10*f}px">${r[2]}</span></span></div>`).join('')}</div>
  </div>
 </div>
</div>`;
const feats2=(f=1)=>`<div style="display:grid;grid-template-columns:repeat(4,1fr)">${[['bars','SEE EVERYTHING','Every client &amp; sub-IB, live.'],['bell','SMART ALERTS','Know who\'s slipping, now.'],['target','TAKE ACTION','Back the partners who grow.'],['db','MAXIMISE REBATES','Stop leaving money on the table.']].map((x,i)=>`<div style="text-align:center;padding:0 10px;${i?'border-left:1px solid rgba(140,160,220,.16)':''}">${ic(x[0],30*f,'#4aa8ff').replace('style="','style="margin:0 auto 10px;display:block;')}<b style="font-size:${16.5*f}px;letter-spacing:.02em;display:block">${x[1]}</b><span style="font-size:${14.5*f}px;color:var(--fg2)">${x[2]}</span></div>`).join('')}</div>`;
const corner2=(y)=>`<div class="mono" style="position:absolute;left:58px;top:${y}px;font-size:14.5px;letter-spacing:.16em;line-height:1.5;color:var(--fg2)">SAME CLIENTS.<br>MORE REBATES.<div style="width:34px;height:2px;background:var(--blue);margin-top:10px"></div></div><div class="mono" style="position:absolute;right:58px;top:${y}px;font-size:14.5px;letter-spacing:.16em;line-height:1.5;color:var(--fg2);text-align:right">TRACK<br>OPTIMISE<br>EARN MORE.<div style="width:34px;height:2px;background:var(--teal);margin:10px 0 0 auto"></div></div>`;
const hl2=(a,b,c)=>`<div class="h" style="text-align:center;font-weight:900;text-transform:uppercase;letter-spacing:-.045em;line-height:.92"><div style="font-size:${a}px">MASTER IB?</div><div style="font-size:${b}px;margin-top:6px">GET MORE FROM</div><div class="gt g-brand" style="font-size:${c}px">EVERY SUB-IB.</div></div>`;
const tag2=`<div class="mono" style="text-align:center;font-size:17px;letter-spacing:.32em;color:var(--fg)">LIVE DATA. <span style="color:var(--fg2)">CHURN ALERTS.</span> FULL NETWORK VIEW.</div>`;
A[2]={cls:'dark grid',
sq:`${corner2(52)}<div class="c" style="align-items:stretch">
<div style="display:flex;justify-content:center;height:56px;align-items:center">${logo()}</div>
<div style="margin-top:26px">${hl2(124,74,104)}</div>
<div style="margin-top:22px">${tag2}</div>
<div style="margin-top:20px;zoom:.86">${dash2()}</div>
<div style="margin-top:22px">${feats2(.92)}</div>
<div class="sp"></div>
<div class="row" style="justify-content:center;position:relative"><span class="foot" style="position:absolute;left:0;bottom:4px">0 spreadsheets</span>${cta('Unlock your custom growth plan')}<span class="foot" style="position:absolute;right:0;bottom:4px">rebatetools.co.uk</span></div></div>`,
vt:`<div class="c">
<div style="display:flex;justify-content:center;height:56px;align-items:center">${logo()}</div>
<div style="margin-top:34px">${hl2(150,88,124)}</div>
<div style="margin-top:24px">${tag2}</div>
<div style="margin-top:30px">${dash2(1,190)}</div>
<div style="margin-top:auto;padding-top:44px;display:flex;justify-content:center">${cta('Unlock your custom growth plan')}</div>
<div style="position:absolute;left:64px;right:180px;top:1390px">${feats2(1.05)}
 <div class="lab" style="text-align:center;margin:40px 0 12px">Connects to your partners · auto-synced · no exports</div>${partners(70)}</div>
</div>`};

/* ---------- 3. SPREADSHEETS ---------- */
const sheet3=(w=430)=>`<div style="width:${w}px;transform:rotate(-3deg);background:#fff;border:1px solid #dde2ec;border-radius:12px;box-shadow:0 30px 50px -25px rgba(20,30,60,.35);overflow:hidden" class="mono">
 <div class="row" style="gap:7px;height:36px;padding:0 14px;background:#f1f3f8;border-bottom:1px solid #e3e7ef"><i style="width:10px;height:10px;border-radius:50%;background:#d5dae4"></i><i style="width:10px;height:10px;border-radius:50%;background:#d5dae4"></i><i style="width:10px;height:10px;border-radius:50%;background:#d5dae4"></i><span style="font-family:Inter;font-size:13px;color:#6b7488;margin-left:10px">rebates_FINAL_v7 (2).xlsx</span></div>
 <table style="width:100%;border-collapse:collapse;font-size:13px;color:#2a3242">${[['Client','Lots','Rate','Rebate',1],['8729 ??','161.0','$4.5','=C2*B2'],['4817','87.3','—','#REF!'],['8483 (check)','105.5','$4.5','#VALUE!'],['1680','???','$3.0','=SUM(D2:'],['6236 dup?','60.5','$4.5','#N/A'],['TOTAL','','','#REF!']].map(r=>`<tr>${r.slice(0,4).map((c,j)=>`<td style="border:1px solid #e6e9f0;padding:7px 9px;${r[4]?'font-family:Inter;color:#6b7488;background:#fafbfd':''}${!r[4]&&j==3&&c.startsWith('#')?'color:#d0452f;':''}">${c}</td>`).join('')}</tr>`).join('')}</table></div>`;
const after3=(w=410)=>`<div style="width:${w}px;background:#0b1224;border-radius:20px;padding:20px 20px 18px;box-shadow:0 0 0 8px rgba(42,149,240,.08),0 40px 70px -30px rgba(20,30,60,.6);color:#fff">
 <div class="row"><span class="lab" style="font-size:11.5px">Rebates calculated · this month</span><span class="sp"></span><span class="mono" style="font-size:11.5px;letter-spacing:.14em;color:var(--green)">● SYNCED</span></div>
 <b style="display:block;font-size:46px;letter-spacing:-.03em;margin:6px 0 12px">$47,630.18</b>
 ${[['Olga Gutmann','Vantage','$5,385.48'],['Ernest Schuppe','PU Prime','$3,040.85'],['Hipolito Prosacco','VT Markets','$1,790.05']].map(r=>`<div class="row" style="border:1px solid rgba(140,160,220,.16);border-radius:10px;padding:9px 12px;margin-bottom:7px"><span style="font-size:15px;font-weight:600">${r[0]}</span><span class="sp"></span><span class="mono" style="font-size:11px;letter-spacing:.12em;color:var(--fg3);margin-right:10px;text-transform:uppercase">${r[1]}</span><b style="font-size:15px">${r[2]}</b></div>`).join('')}
 <div class="row" style="gap:8px;margin-top:10px">${['Today','This month','All time'].map((t,i)=>`<span style="font-size:13px;padding:5px 10px;border-radius:7px;border:1px solid ${i==1?'rgba(42,149,240,.6)':'rgba(140,160,220,.2)'};${i==1?'background:rgba(42,149,240,.16)':'color:var(--fg2)'}">${t}</span>`).join('')}</div></div>`;
const zoomWrap=(h,z)=>`<div style="zoom:${z}">${h}</div>`;
const tagc=(t,c,bg)=>`<span class="mono" style="font-size:14px;letter-spacing:.16em;color:${c};background:${bg};padding:6px 12px;border-radius:999px">${t}</span>`;
const hl3=(a,b)=>`<div class="h" style="color:var(--ink)"><div style="font-size:${a}px">Still tracking rebates in</div><div style="position:relative;display:inline-block;font-size:${b}px"><span class="gt g-brand">spreadsheets?</span><span style="position:absolute;left:-1%;right:6%;top:50%;height:${b*.075}px;background:#ff6b6b;border-radius:9px;transform:rotate(-1.2deg);opacity:.92"></span></div></div>`;
const checks3=`<div style="font-size:21px;font-weight:600;color:var(--ink);line-height:1.75"><div class="row" style="gap:12px">${ic('check',22,'#00b07a',2.4)}Synced from your partner accounts</div><div class="row" style="gap:12px">${ic('check',22,'#00b07a',2.4)}Every rebate, per client &amp; partner</div></div>`;
A[3]={cls:'light grid',
sq:`<div class="c">${topRow(pill('<b>0 spreadsheets</b> · 0 exports'),true)}
<div style="margin-top:44px">${hl3(84,124)}</div>
<div class="sub" style="margin-top:22px;font-size:25px">Exporting reports and reconciling by hand, every partner, every month.<br><b>RebateTools syncs and calculates it for you.</b></div>
<div style="position:relative;height:370px;margin-top:22px">
 <div style="position:absolute;left:24px;top:26px">${tagc('BEFORE','#d0452f','#fde5e1')}</div><div style="position:absolute;left:0;top:72px">${sheet3(420)}</div>
 <svg style="position:absolute;left:432px;top:200px" width="64" height="24" viewBox="0 0 64 24" fill="none" stroke="#2a95f0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12H58" stroke-dasharray="3 7"/><path d="M50 4l9 8-9 8"/></svg>
 <div style="position:absolute;right:0;top:0">${tagc('AFTER','#00936a','#d9f5ea')}<div style="margin-top:14px">${after3(410)}</div></div>
</div>
<div class="sp"></div>
<div class="row" style="align-items:flex-end">${checks3}<span class="sp"></span>${cta('Get your hours back')}</div>
<div class="foot" style="position:absolute;right:64px;bottom:22px;font-size:12.5px">rebatetools.co.uk</div></div>`,
vt:`<div class="c">${topRow(pill('<b>0 spreadsheets</b> · 0 exports'),true)}
<div style="margin-top:46px">${hv[3]}</div>
<div class="sub" style="margin-top:24px;font-size:27px">Exporting reports and reconciling by hand, every partner, every month. <b>RebateTools syncs and calculates it for you.</b></div>
<div style="position:relative;width:952px;height:430px;margin-top:30px">
 <div style="position:absolute;left:4px;top:24px">${tagc('BEFORE','#d0452f','#fde5e1')}</div><div style="position:absolute;left:-6px;top:90px">${sheet3(500)}</div>
 <div style="position:absolute;right:0;top:0">${tagc('AFTER','#00936a','#d9f5ea')}<div style="margin-top:12px">${zoomWrap(after3(480),1.12)}</div></div>
</div>
<div style="margin-top:auto;padding-top:44px;display:flex">${cta('Get your hours back')}</div>
<div style="position:absolute;left:64px;right:180px;top:1390px">${checks3.replace('font-size:21px','font-size:25px')}<div class="foot" style="margin-top:24px">Product preview · sample data · rebatetools.co.uk</div></div>
</div>`};

/* ---------- 4. TOP CLIENT WENT QUIET ---------- */
const client4=(ini,n,chip,ch,ago,bal,state,f=1)=>{const hi=state=='hi',done=state=='done';return `<div class="card" style="border-radius:${18*f}px;padding:${16*f}px ${18*f}px;display:flex;align-items:center;gap:${14*f}px;${hi?'border-color:rgba(245,165,36,.75);box-shadow:0 0 0 1px rgba(245,165,36,.3),0 0 40px -6px rgba(245,165,36,.35)':''}${done?'opacity:.55':''}">
 <span style="width:${46*f}px;height:${46*f}px;border-radius:50%;background:#1d2640;display:flex;align-items:center;justify-content:center;font-size:${15*f}px;font-weight:700;flex:none">${ini}</span>
 <div style="flex:1"><div class="row" style="gap:10px"><b style="font-size:${19*f}px">${n}</b><span class="chip ${chip}" style="font-size:${11.5*f}px;height:${22*f}px">${ch}</span></div><div style="font-size:${14.5*f}px;color:var(--fg3);margin-top:3px">Last active <b style="color:var(--fg2);font-weight:600">${ago}</b> · Balance ${bal}</div></div>
 ${done?`<span style="color:var(--green);font-size:${15*f}px;font-weight:600">✓ Re-engaged</span>`:`<span class="row" style="gap:8px;background:#00c98a;color:#04150f;font-weight:700;font-size:${15*f}px;padding:${9*f}px ${14*f}px;border-radius:9px">${ic('chat',16*f,'#04150f')}Message</span>`}</div>`};
const clients4=(f=1)=>`<div style="position:relative">
 <span style="position:absolute;right:${-14*f}px;top:${-22*f}px;width:${48*f}px;height:${48*f}px;border-radius:50%;background:linear-gradient(135deg,#f5a524,#ff6b6b);display:flex;align-items:center;justify-content:center;box-shadow:0 0 30px rgba(255,140,60,.6);z-index:2">${ic('bell',24*f,'#fff',2)}<b style="position:absolute;top:-6px;right:-6px;background:#fff;color:#d0452f;font-size:${12*f}px;width:${22*f}px;height:${22*f}px;border-radius:50%;display:flex;align-items:center;justify-content:center">3</b></span>
 <div style="display:grid;gap:${12*f}px">${client4('ES','Ernest Schuppe','c-risk','AT RISK','12 days ago','$1.76','hi',f)}${client4('LS','Laurence Smith','c-dead','DEAD','9 days ago','$8.49','',f)}${client4('DD','Delilah Davis','c-risk','AT RISK','6 days ago','$1,307','',f)}${client4('KS','Kris Streich','c-hot','HOT','Yesterday','$4,620','done',f)}</div>
 <div class="lab" style="text-align:right;margin-top:12px;font-size:12px">Product preview · sample data</div></div>`;
const hl4=(fs)=>`<div class="h" style="font-size:${fs}px;letter-spacing:-.055em">Your top client went<br>quiet <span class="gt g-orange">12 days ago.</span><br>Did you notice?</div>`;
const tags4=`<div class="row" style="gap:16px">${tagc('AT RISK','#f5a524','rgba(245,165,36,.12)').replace('border-radius:999px','border-radius:8px;border:1px solid rgba(245,165,36,.4)')}<span style="color:var(--fg3);font-size:26px">→</span>${tagc('RE-ENGAGED','#00d190','rgba(0,209,144,.1)').replace('border-radius:999px','border-radius:8px;border:1px solid rgba(0,209,144,.4)')}</div>`;
const sub4=`<div class="sub" style="font-size:24px">By the time most IBs spot it, the client has already moved on. <b>RebateTools flags who's slowing down automatically</b>, so you reach out while there's still a relationship to save.</div>`;
const cta4=cta('Catch churn before it costs you','background:#fff;color:#0b1020;box-shadow:0 22px 50px -14px rgba(255,107,107,.55)').replace('<i>','<i style="color:#ff6b6b">');
const bg4='background:radial-gradient(700px 600px at 0% 0%,rgba(245,165,36,.12),transparent 60%),radial-gradient(700px 600px at 100% 100%,rgba(255,107,107,.10),transparent 60%),#090a12';
A[4]={cls:'dark grid',style:bg4,
sq:`<div class="c">${topRow(pill('<b>3 clients</b> need attention','#f5a524'))}
<div style="margin-top:48px">${hl4(98)}</div>
<div style="display:grid;grid-template-columns:440px 1fr;gap:40px;margin-top:40px">
 <div>${sub4}<div style="margin-top:52px">${tags4}</div></div>
 <div style="zoom:.88">${clients4()}</div>
</div>
<div class="sp"></div>
<div class="row" style="align-items:flex-end">${cta4}<span class="sp"></span><div class="mono" style="text-align:right;font-size:14.5px;letter-spacing:.16em;line-height:1.7;color:var(--fg2)"><b style="color:var(--fg);font-weight:500">HOT</b> · AT RISK · DEAD<br>TAGGED ON EVERY CLIENT</div></div></div>`,
vt:`<div class="c">${topRow(pill('<b>3 clients</b> need attention','#f5a524'))}
<div style="margin-top:50px">${hv[4]}</div>
<div style="margin-top:46px">${clients4(1.12)}</div>
<div style="margin-top:auto;padding-top:44px;display:flex">${cta4}</div>
<div style="position:absolute;left:64px;right:180px;top:1390px">${sub4.replace('font-size:24px','font-size:27px')}<div style="margin-top:34px" class="row">${tags4}<span class="sp"></span><span class="mono" style="font-size:14px;letter-spacing:.16em;color:var(--fg2)">TAGGED ON EVERY CLIENT</span></div></div>
</div>`};

/* ---------- 5. WHICH SUB-IB ---------- */
const node5=(t,n,v,ch,cls,badge,b2,hi,f=1)=>`<div class="card" style="border-radius:${16*f}px;padding:${14*f}px ${18*f}px;${hi?'border-color:rgba(0,209,144,.7);box-shadow:0 0 0 1px rgba(0,209,144,.25),0 0 50px -8px rgba(0,209,144,.45)':''}">
 <div class="row"><span class="lab" style="font-size:${12*f}px">${t}</span><span class="sp"></span>${badge?`<span class="mono" style="font-size:${11*f}px;letter-spacing:.1em;padding:3px 8px;border-radius:6px;${b2}">${badge}</span>`:''}</div>
 <div style="font-size:${19*f}px;font-weight:600;margin-top:4px">${n}</div>
 <div class="row" style="gap:10px;margin-top:4px"><b style="font-size:${28*f}px;letter-spacing:-.02em">${v}</b><span class="${cls}" style="font-size:${14*f}px">${ch}</span></div></div>`;
const leaf5=(n,v,f=1)=>`<div class="card" style="border-radius:${14*f}px;padding:${10*f}px ${14*f}px"><b style="font-size:${16*f}px;display:block">${n}</b><b style="font-size:${17*f}px">${v}</b></div>`;
const tree5=(f=1,h=430)=>{const W=952;return `<div style="position:relative;width:952px;height:${h}px">
 <svg style="position:absolute;inset:0" width="${W}" height="${h}" viewBox="0 0 ${W} ${h}" fill="none" stroke-width="2.5">
  <path d="M476 ${100*f} V${140*f} H140 V${180*f}" stroke="#00d190"/><path d="M476 ${140*f} H812 V${180*f}" stroke="rgba(140,160,220,.4)"/><path d="M476 ${140*f} V${180*f}" stroke="rgba(140,160,220,.4)"/>
  <path d="M140 ${300*f} V${335*f} H70 V${365*f}" stroke="#00d190"/><path d="M140 ${335*f} H225 V${365*f}" stroke="rgba(140,160,220,.4)"/><path d="M476 ${300*f} V${365*f}" stroke="rgba(140,160,220,.4)"/>
  <circle cx="476" cy="${140*f}" r="5" fill="#2a95f0" stroke="none"/><circle cx="140" cy="${335*f}" r="5" fill="#00d190" stroke="none"/></svg>
 <div style="position:absolute;left:326px;width:300px;top:0;text-align:center" class="card"><div style="padding:${14*f}px"><div class="lab" style="font-size:${12*f}px">Tier 0 · Master IB</div><div class="row" style="justify-content:center;gap:10px;margin-top:4px"><b style="font-size:${32*f}px">$47,630</b><span class="up" style="font-size:${14*f}px">↑ 62%</span></div></div></div>
 <div style="position:absolute;left:0;width:280px;top:${180*f}px">${node5('Tier 1','Sub-IB Alpha','$23,540','↑ 18%','up','TOP PRODUCER','background:#00d190;color:#03150e',1,f)}</div>
 <div style="position:absolute;left:336px;width:280px;top:${180*f}px">${node5('Tier 1','Sub-IB Beta','$15,230','↑ 9%','up','','',0,f)}</div>
 <div style="position:absolute;right:0;width:280px;top:${180*f}px">${node5('Tier 1','Sub-IB Gamma','$8,880','↓ 6%','down','STALLED','background:rgba(255,107,107,.15);color:#ff6b6b',0,f)}</div>
 <div style="position:absolute;left:0;width:150px;top:${365*f}px">${leaf5('Affiliate A1','$9,120',f)}</div>
 <div style="position:absolute;left:162px;width:150px;top:${365*f}px">${leaf5('Affiliate A2','$6,410',f)}</div>
 <div style="position:absolute;left:400px;width:150px;top:${365*f}px">${leaf5('Affiliate B1','$4,980',f)}</div>
</div>`};
const hl5=(fs)=>`<div class="h" style="text-align:center;font-size:${fs}px;letter-spacing:-.05em">Which sub-IB is actually<br><span class="gt g-teal">making you money?</span></div>`;
const cta5=cta('Grow the partners who grow you','background:linear-gradient(92deg,#00d190,#2a95f0);color:#03150e;box-shadow:0 22px 50px -14px rgba(0,209,144,.6)');
const bg5='background:radial-gradient(800px 600px at 50% 55%,rgba(0,209,144,.12),transparent 65%),#070b14';
A[5]={cls:'dark grid',style:bg5,
sq:`<div class="c">${topRow(pill('Sub-IB management'))}
<div style="margin-top:36px">${hl5(86)}</div>
<div class="mono" style="text-align:center;margin-top:24px;font-size:15px;letter-spacing:.2em;color:var(--fg2)">SEE EVERY TIER OF YOUR NETWORK · LIVE</div>
<div style="margin-top:30px">${tree5(.94,410)}</div>
<div class="lab" style="text-align:right;font-size:12px;margin-top:-6px">Product preview · sample data</div>
<div style="text-align:center;font-size:31px;font-weight:700;letter-spacing:-.02em;margin-top:6px">Stop running your network on <span style="color:var(--fg3)">gut feel.</span></div>
<div class="sp"></div>
<div style="display:flex;justify-content:center">${cta5}</div>
<div class="foot" style="text-align:center;margin-top:18px;font-size:12.5px">rebatetools.co.uk</div></div>`,
vt:`<div class="c">${topRow(pill('Sub-IB management'))}
<div style="margin-top:54px">${hv[5]}</div>
<div class="mono" style="text-align:center;margin-top:26px;font-size:16px;letter-spacing:.2em;color:var(--fg2)">SEE EVERY TIER OF YOUR NETWORK · LIVE</div>
<div style="margin-top:50px">${tree5(1.2,560)}</div>
<div style="margin-top:auto;padding-top:44px;display:flex;justify-content:center">${cta5}</div>
<div style="position:absolute;left:64px;right:180px;top:1390px;text-align:center"><div style="font-size:36px;font-weight:700;letter-spacing:-.02em">Stop running your network on <span style="color:var(--fg3)">gut feel.</span></div><div class="foot" style="margin-top:26px">Product preview · sample data · rebatetools.co.uk</div></div>
</div>`};

/* ---------- 6. STOP GUESSING ---------- */
const banner6=(f=1)=>`<div style="background:linear-gradient(100deg,#0b1224,#121a3a);border-radius:${20*f}px;padding:${18*f}px ${26*f}px;display:flex;align-items:center;color:#fff;box-shadow:0 30px 60px -30px rgba(20,30,60,.6)"><div><div class="lab" style="font-size:${12*f}px">Rebates calculated · this month</div><b style="display:block;font-size:${58*f}px;letter-spacing:-.035em;line-height:1.1">$47,630.18</b><div class="mono" style="font-size:${12*f}px;letter-spacing:.16em;color:var(--green)">● SYNCING · SAMPLE DATA</div></div><span class="sp"></span><div class="pl" style="gap:${10*f}px">${['vantage','puprime','vtmarkets'].map(n=>`<span style="width:${76*f}px;height:${54*f}px;flex:none"><img src="${n}.webp" style="height:${48*f}px"></span>`).join('')}<span style="width:${80*f}px;height:${54*f}px;flex:none"><img src="startrader.webp" style="height:${20*f}px"></span></div></div>`;
const step6=(n,i,t,d,f=1)=>`<div class="wcard" style="padding:${20*f}px ${22*f}px;border-radius:${18*f}px"><div class="row"><span class="mono" style="font-size:${14*f}px;color:#2a95f0">${n}</span><span class="sp"></span><span style="width:${40*f}px;height:${40*f}px;border-radius:10px;background:#eaf4fe;display:flex;align-items:center;justify-content:center">${ic(i,20*f,'#2a95f0')}</span></div><b style="display:block;font-size:${22*f}px;letter-spacing:-.015em;margin-top:6px;color:var(--ink)">${t}</b><div style="font-size:${16*f}px;line-height:1.4;color:var(--ink2);margin-top:6px">${d}</div></div>`;
const steps6=(f=1,cols=3)=>`<div style="display:grid;grid-template-columns:repeat(${cols},1fr);gap:${14*f}px">${step6('01','link','Connect your accounts','Message us and we link the partner accounts you already use.',f)}${step6('02','sync','We sync &amp; calculate','Clients, activity and rebates pull in automatically and stay current.',f)}${step6('03','eye','You see everything','Log in and every client, sub-IB and rebate is already there.',f)}</div>`;
const built6=`<div class="row" style="gap:12px;flex-wrap:wrap"><span class="lab" style="margin-right:8px">Built for</span>${['Introducing brokers','Master IBs','Affiliate managers','Partner teams'].map(t=>`<span style="background:#fff;border:1px solid #dfe4ee;border-radius:999px;padding:9px 18px;font-size:17px;font-weight:600;color:var(--ink)">${t}</span>`).join('')}</div>`;
const hl6=(fs)=>`<div class="h" style="font-size:${fs}px;color:var(--ink);letter-spacing:-.055em">Stop guessing.<br><span class="gt g-brand">Start calculating.</span></div>`;
A[6]={cls:'light grid',
sq:`<div class="c">${topRow(pill('<b>24/7</b> real-time tracking'),true)}
<div style="margin-top:42px">${hl6(110)}</div>
<div class="sub" style="margin-top:20px;font-size:25px"><b>Set up once. It runs itself.</b> Every client, sub-IB and rebate dollar in one place.</div>
<div style="margin-top:28px">${banner6(.95)}</div>
<div style="margin-top:22px">${steps6(.86)}</div>
<div style="margin-top:22px;zoom:.92">${built6}</div>
<div class="sp"></div>
<div class="row"><div style="font-size:18px;color:var(--ink2);line-height:1.4"><b style="color:var(--ink)">No exports. No spreadsheets.</b><br>Just the numbers, done.</div><span class="sp"></span>${cta('Unlock your custom growth plan')}</div></div>`,
vt:`<div class="c">${topRow(pill('<b>24/7</b> real-time tracking'),true)}
<div style="margin-top:50px">${hv[6]}</div>
<div class="sub" style="margin-top:24px;font-size:28px"><b>Set up once. It runs itself.</b> Every client, sub-IB and rebate dollar in one place.</div>
<div style="margin-top:34px">${banner6(1)}</div>
<div style="margin-top:22px;display:grid;gap:12px">${['01|link|Connect your accounts','02|sync|We sync &amp; calculate','03|eye|You see everything'].map(s=>{const[a,b,c]=s.split('|');return `<div class="wcard row" style="gap:18px;padding:16px 22px;border-radius:16px"><span class="mono" style="font-size:16px;color:#2a95f0">${a}</span><span style="width:42px;height:42px;border-radius:10px;background:#eaf4fe;display:flex;align-items:center;justify-content:center">${ic(b,22,'#2a95f0')}</span><b style="font-size:24px;color:var(--ink);letter-spacing:-.015em">${c}</b></div>`}).join('')}</div>
<div style="margin-top:auto;padding-top:44px;display:flex">${cta('Unlock your custom growth plan')}</div>
<div style="position:absolute;left:64px;right:180px;top:1390px">${built6}<div style="font-size:22px;color:var(--ink2);line-height:1.45;margin-top:30px"><b style="color:var(--ink)">No exports. No spreadsheets.</b> Just the numbers, done.</div></div>
</div>`};

/* ---------- 7. REBATES DROPPED ---------- */
const chart7=(w=478,h=360)=>`<div class="wcard" style="padding:22px 24px;width:${w}px;height:${h}px;position:relative"><div class="row"><span class="lab">Rebates · this month</span><span class="sp"></span><span class="chip" style="background:#fde5e1;color:#e2433a;font-size:14px">↓ 31%</span></div>
 <div class="row" style="gap:12px;margin-top:8px;align-items:baseline"><b style="font-size:46px;color:var(--ink);letter-spacing:-.03em">$14,920</b><s style="font-size:19px;color:var(--ink3)">$21,630</s></div>
 <svg width="${w-48}" height="${h-170}" viewBox="0 0 430 190" preserveAspectRatio="none" style="margin-top:14px;display:block;overflow:visible"><defs><linearGradient id="b7" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a95f0" stop-opacity=".18"/><stop offset="1" stop-color="#2a95f0" stop-opacity="0"/></linearGradient><linearGradient id="r7" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ff6b6b" stop-opacity=".16"/><stop offset="1" stop-color="#ff6b6b" stop-opacity="0"/></linearGradient></defs>
 <path d="M0 50H430M0 100H430M0 150H430" stroke="#eef0f5"/>
 <path d="M0 130 C40 118 80 100 120 92 S200 60 240 48 S275 30 278 22 V190 H0Z" fill="url(#b7)"/><path d="M278 22 C300 40 315 100 345 120 S400 128 430 130 V190 H278Z" fill="url(#r7)"/>
 <path d="M0 130 C40 118 80 100 120 92 S200 60 240 48 S275 30 278 22" stroke="#2a95f0" stroke-width="3.5" fill="none"/><path d="M278 22 C300 40 315 100 345 120 S400 128 430 130" stroke="#ff6b6b" stroke-width="3.5" fill="none"/>
 <circle cx="278" cy="22" r="6" fill="#fff" stroke="#2a95f0" stroke-width="3"/><circle cx="430" cy="130" r="5" fill="#fff" stroke="#ff6b6b" stroke-width="3"/></svg>
 <span style="position:absolute;right:58px;bottom:${h*.3}px;width:46px;height:46px;border-radius:50%;background:linear-gradient(135deg,#ff6b6b,#ff9a5a);color:#fff;font-weight:800;font-size:24px;display:flex;align-items:center;justify-content:center;box-shadow:0 10px 24px -8px rgba(255,107,107,.7)">?</span></div>`;
const why7=(w=464)=>`<div style="width:${w}px;background:#0e1424;border-radius:22px;padding:22px 22px 20px;color:#fff;box-shadow:0 40px 70px -30px rgba(20,30,60,.55)"><div class="row" style="gap:12px;margin-bottom:14px">${mark(28)}<b style="font-size:21px">Why it dropped</b><span class="sp"></span><span class="lab" style="font-size:12px">Sample data</span></div>
 ${[['Olga Gutmann','Volume down 68% vs last month','−$3,120'],['2 clients went inactive','No trades in 14+ days','−$2,410'],['Laurence Smith','Balance down to $8.49','−$1,180']].map(r=>`<div class="row" style="border:1px solid rgba(140,160,220,.16);border-radius:13px;padding:12px 16px;margin-bottom:9px;align-items:flex-start"><div><b style="font-size:18px">${r[0]}</b><div style="font-size:15px;color:var(--fg2);margin-top:3px">${r[1]}</div></div><span class="sp"></span><b style="color:#ff6b6b;font-size:18px">${r[2]}</b></div>`).join('')}
 <div class="row mono" style="border-top:1px dashed rgba(140,160,220,.25);padding-top:14px;margin-top:6px;font-size:14.5px;letter-spacing:.16em"><span style="color:var(--fg2)">DROP EXPLAINED</span><span class="sp"></span><span style="color:var(--green)">✓ −$6,710 TRACED</span></div></div>`;
const hl7=(a,b)=>`<div class="h" style="color:var(--ink);letter-spacing:-.055em"><div style="font-size:${a}px">Your rebates dropped 31%.</div><div class="gt g-coral" style="font-size:${b}px">Do you know why?</div></div>`;
const cta7=cta('Find out why','background:linear-gradient(92deg,#ff5f6d,#ff9a5a);box-shadow:0 22px 50px -14px rgba(255,107,107,.6)');
const sub7=`<div class="sub" style="font-size:24px">Every rebate broken down by <b>client, partner and platform</b>, so a drop is never a mystery again.</div>`;
const bg7='background:radial-gradient(700px 500px at 0% 100%,rgba(255,120,100,.10),transparent 60%),#fbfbfd';
A[7]={cls:'light grid',style:bg7,
sq:`<div class="c">${topRow(pill('<b>Rebate breakdown</b> · by client','#ff5f6d'),true)}
<div style="margin-top:44px">${hl7(84,116)}</div>
<div class="row" style="gap:24px;margin-top:44px;align-items:flex-start">${chart7(470,370)}${why7(458)}</div>
<div style="margin-top:34px;width:520px">${sub7}</div>
<div class="sp"></div>
<div class="row"><span class="foot" style="font-size:12.5px">rebatetools.co.uk</span><span class="sp"></span>${cta7}</div></div>`,
vt:`<div class="c">${topRow(pill('<b>Rebate breakdown</b> · by client','#ff5f6d'),true)}
<div style="margin-top:50px">${hv[7]}</div>
<div style="position:relative;width:952px;height:475px;margin-top:34px"><div style="position:absolute;left:0;top:0">${chart7(580,340)}</div><div style="position:absolute;right:0;top:120px">${zoomWrap(why7(510),1)}</div></div>
<div style="margin-top:auto;padding-top:44px;display:flex">${cta7}</div>
<div style="position:absolute;left:64px;right:180px;top:1390px">${sub7.replace('font-size:24px','font-size:28px')}<div class="foot" style="margin-top:26px">Product preview · sample data · rebatetools.co.uk</div></div>
</div>`};

/* ---------- 8. A FEW CLIENTS ---------- */
const bars8=(f=1)=>`<div><div class="row" style="gap:12px;margin-bottom:${14*f}px">${mark(26*f)}<b style="font-size:${20*f}px;color:var(--ink)">Share of rebates · this month</b><span class="sp"></span><span class="lab" style="font-size:${12*f}px">Sample data</span></div>
 ${[['Olga Gutmann',22,90],['Kris Streich',18,72],['Laurence Smith',14,56],['Albert Kessler',11,44],['Hipolito Prosacco',9,36],['Other 143 clients',26,100,1]].map(r=>`<div class="row" style="height:${41*f}px;gap:16px"><span style="width:${175*f}px;font-size:${17*f}px;font-weight:600;color:${r[3]?'var(--ink3)':'var(--ink)'}">${r[0]}</span><span style="flex:1;height:${26*f}px;border-radius:8px;background:#eef1f6;overflow:hidden"><i style="display:block;height:100%;width:${r[2]}%;border-radius:8px;background:${r[3]?'#d3d9e4':'linear-gradient(90deg,#00c98a,#2a95f0)'}"></i></span><b style="width:${46*f}px;text-align:right;font-size:${17*f}px;color:${r[3]?'var(--ink3)':'var(--ink)'}">${r[1]}%</b></div>`).join('')}</div>`;
const big8=(f=1)=>`<div><div class="gt g-teal" style="font-size:${104*f}px;font-weight:800;letter-spacing:-.05em;line-height:1">74%</div><div style="font-size:${19*f}px;color:var(--ink2);margin-top:8px;line-height:1.35">of rebates from <b style="color:var(--ink)">just 5 clients.</b></div>
 <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:${18*f}px">${['This month','All time','Active now','Low balance'].map((t,i)=>`<span class="mono" style="font-size:${12*f}px;letter-spacing:.14em;text-transform:uppercase;padding:6px 10px;border-radius:6px;${i?'border:1px solid #d9dfe9;color:var(--ink2)':'background:#0b1020;color:#fff'}">${t}</span>`).join('')}</div></div>`;
const hl8=(a,b)=>`<div class="h" style="letter-spacing:-.05em"><div style="font-size:${a}px;color:#3f4a63">A few clients drive most of your rebates.</div><div class="gt g-teal" style="font-size:${b}px;margin-top:6px">Do you know which ones?</div></div>`;
const cta8=cta('Find your top earners','background:linear-gradient(92deg,#00c98a,#2a95f0);box-shadow:0 22px 50px -14px rgba(0,180,140,.55)');
const sub8=`<div class="sub" style="font-size:24px">Rank every client by rebate, volume and activity, so you <b>know exactly who your income depends on.</b></div>`;
const bg8='background:radial-gradient(800px 600px at 100% 0%,rgba(0,209,144,.16),transparent 60%),#eef8f4';
A[8]={cls:'light grid',style:bg8,
sq:`<div class="c">${topRow(pill('<b>Leaderboards</b> · live'),true)}
<div style="margin-top:42px">${hl8(58,88)}</div>
<div class="wcard" style="margin-top:42px;padding:26px 30px;display:grid;grid-template-columns:1fr 250px;gap:30px">${bars8()}<div style="border-left:1px dashed #dfe4ee;padding-left:30px;display:flex;align-items:center">${big8(.9)}</div></div>
<div style="margin-top:44px;width:620px">${sub8}</div>
<div class="sp"></div>
<div class="row"><span class="foot" style="font-size:12.5px">rebatetools.co.uk</span><span class="sp"></span>${cta8}</div></div>`,
vt:`<div class="c">${topRow(pill('<b>Leaderboards</b> · live'),true)}
<div style="margin-top:48px">${hv[8]}</div>
<div class="wcard" style="margin-top:40px;padding:28px 30px">${bars8(1.08)}<div style="border-top:1px dashed #dfe4ee;margin-top:20px;padding-top:20px" class="row"><span class="gt g-teal" style="font-size:84px;font-weight:800;letter-spacing:-.05em;line-height:1">74%</span><span style="font-size:24px;color:var(--ink2);margin-left:22px;line-height:1.3">of rebates from<br><b style="color:var(--ink)">just 5 clients.</b></span></div></div>
<div style="margin-top:auto;padding-top:44px;display:flex">${cta8}</div>
<div style="position:absolute;left:64px;right:180px;top:1390px">${sub8.replace('font-size:24px','font-size:28px')}<div style="display:flex;gap:10px;margin-top:28px">${['This month','All time','Active now','Low balance'].map((t,i)=>`<span class="mono" style="font-size:14px;letter-spacing:.14em;text-transform:uppercase;padding:8px 12px;border-radius:7px;${i?'border:1px solid #cfd7e3;color:var(--ink2)':'background:#0b1020;color:#fff'}">${t}</span>`).join('')}</div></div>
</div>`};

/* ---------- 9. TRADING LESS ---------- */
const table9=(f=1)=>`<div class="card" style="padding:${20*f}px ${22*f}px;border-radius:${22*f}px;border-color:rgba(167,139,250,.22);background:linear-gradient(180deg,rgba(30,24,52,.9),rgba(18,14,34,.95))">
 <div class="row" style="gap:12px">${mark(26*f)}<b style="font-size:${20*f}px">Volume · this week vs last</b><span class="sp"></span><span class="lab" style="font-size:${11.5*f}px">Sample data</span><span class="mono" style="margin-left:12px;font-size:${12*f}px;letter-spacing:.12em;border:1px solid rgba(167,139,250,.35);border-radius:8px;padding:6px 10px;color:var(--fg2)">SORT: BIGGEST SLOWDOWN ▾</span></div>
 <div class="row lab" style="font-size:${11.5*f}px;padding:${14*f}px ${16*f}px ${8*f}px"><span style="width:${330*f}px">Client</span><span style="width:${230*f}px">Volume (lots)</span><span style="flex:1">7-day trend</span><span>Change</span></div>
 ${[['Olga Gutmann','93.4','161.0','−42%',[9,9,8.6,8.3,7.4,6.8,6.2]],['Delilah Davis','33.6','51.7','−35%',[9,9.1,8.8,8.9,8,7.6,7.2]],['Kris Streich','36.4','50.6','−28%',[9,8.9,9.1,8.5,8.3,7.8,7.6]],['Mr. Lulu Gerlach','48.4','60.5','−20%',[9,9.1,8.8,8.9,8.4,8.2,7.9]],['Albert Kessler','58.7','52.4','+12%',[6,6.2,6.4,6.6,7.2,7.8,8.4],1]].map(r=>`<div class="row" style="height:${58*f}px;padding:0 ${16*f}px;border:1px solid rgba(167,139,250,.14);border-radius:12px;margin-top:${8*f}px;background:rgba(255,255,255,.02);${r[5]?'opacity:.6':''}"><b style="width:${330*f}px;font-size:${18*f}px">${r[0]}</b><span style="width:${230*f}px;font-size:${16*f}px;color:var(--fg2)"><b style="color:var(--fg)">${r[1]}</b> / ${r[2]}</span><span style="flex:1">${spark(r[4],170*f,30*f,r[5]?'#00d190':'#f472b6',{sw:2.2})}</span><b style="font-size:${20*f}px;color:${r[5]?'#00d190':'#f472b6'}">${r[3]}</b></div>`).join('')}</div>`;
const hl9=(fs,br='<br>')=>`<div class="h" style="font-size:${fs}px;letter-spacing:-.055em">Who's trading less${br}<span class="gt g-plum">than last week?</span></div>`;
const cta9=cta('Spot the slowdown','background:linear-gradient(92deg,#a78bfa,#f472b6);box-shadow:0 22px 50px -14px rgba(244,114,182,.6)');
const bg9='background:radial-gradient(800px 600px at 90% 0%,rgba(167,139,250,.18),transparent 60%),radial-gradient(700px 500px at 0% 100%,rgba(244,114,182,.12),transparent 60%),#0d0a18';
A[9]={cls:'dark grid',style:bg9,
sq:`<div class="c">${topRow(pill('<b>4 clients</b> slowing down','#f472b6'))}
<div style="margin-top:44px">${hl9(118)}</div>
<div class="sub" style="margin-top:20px;font-size:25px">You shouldn't have to dig through a back-office to find out.</div>
<div style="margin-top:34px;zoom:.92">${table9()}</div>
<div class="sp"></div>
<div class="row"><div style="font-size:19px;color:var(--fg2);line-height:1.45"><b style="color:var(--fg)">Catch the slowdown this week,</b> not when<br>the rebate statement lands.</div><span class="sp"></span>${cta9}</div></div>`,
vt:`<div class="c">${topRow(pill('<b>4 clients</b> slowing down','#f472b6'))}
<div style="margin-top:50px">${hv[9]}</div>
<div class="sub" style="margin-top:22px;font-size:28px">You shouldn't have to dig through a back-office to find out.</div>
<div style="margin-top:36px;zoom:.98">${table9(1)}</div>
<div style="margin-top:auto;padding-top:44px;display:flex">${cta9}</div>
<div style="position:absolute;left:64px;right:180px;top:1390px"><div style="font-size:28px;color:var(--fg2);line-height:1.45"><b style="color:var(--fg)">Catch the slowdown this week,</b> not when the rebate statement lands.</div><div class="foot" style="margin-top:26px">Product preview · sample data · rebatetools.co.uk</div></div>
</div>`};

/* ---------- 10. INCOME ALIVE ---------- */
const pod10=(ini,n,st,vol,reb,rank,main,f=1)=>`<div style="${main?'background:#0e1424;color:#fff;box-shadow:0 0 0 8px rgba(224,162,27,.12),0 40px 70px -30px rgba(80,60,0,.5);':'background:#fff;border:1px solid #ece6d8;box-shadow:0 30px 60px -30px rgba(80,60,0,.25);'}border-radius:${22*f}px;padding:${22*f}px ${20*f}px ${18*f}px;position:relative">
 <span style="position:absolute;right:${16*f}px;top:${16*f}px;width:${40*f}px;height:${40*f}px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:${18*f}px;${main?'background:linear-gradient(135deg,#c98a00,#f0b43a);color:#fff':'background:#f4ecda;color:#8a6a1c'}">${main?ic('crown',20*f,'#fff'):rank}</span>
 <span style="width:${54*f}px;height:${54*f}px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:${18*f}px;${main?'background:#2a2a2e;color:#f0b43a':'background:#f4ecda;color:#8a6a1c'}">${ini}</span>
 <div class="row" style="gap:10px;margin-top:${12*f}px"><b style="font-size:${22*f}px;letter-spacing:-.02em">${n}</b><span class="chip c-hot" style="font-size:${11*f}px;height:${21*f}px">HOT</span></div>
 <div style="font-size:${14.5*f}px;color:#00b07a;margin-top:4px;font-weight:600">● ${st}</div>
 <div class="row" style="margin-top:${14*f}px"><div style="flex:1"><div class="lab" style="font-size:${11*f}px">Volume</div><b style="font-size:${(main?30:24)*f}px">${vol}</b></div><div style="flex:1"><div class="lab" style="font-size:${11*f}px">Rebate</div><b style="font-size:${(main?30:24)*f}px">${reb}</b></div></div>
 <div class="row" style="justify-content:center;gap:8px;margin-top:${14*f}px;height:${40*f}px;border-radius:10px;font-weight:700;font-size:${15*f}px;${main?'background:#00c98a;color:#04150f':'background:#eaf7f1;color:#047857'}">${ic('chat',16*f,main?'#04150f':'#047857')}Say thanks</div></div>`;
const hl10=(fs,br='<br>')=>`<div class="h" style="text-align:center;font-size:${fs}px;color:var(--ink);letter-spacing:-.055em">Know who's keeping${br}<span class="gt g-gold">your income alive.</span></div>`;
const cta10=cta('Find your top traders','background:#0b1020;box-shadow:0 22px 50px -16px rgba(11,16,32,.55)').replace('<i>','<i style="color:#f0b43a">');
const rank10=(f=1)=>`<div class="row" style="justify-content:center;gap:10px"><span class="lab" style="margin-right:8px;font-size:${13*f}px">Rank by</span>${['Rebate','Volume','Active now','This month','All time'].map((t,i)=>`<span style="font-size:${16*f}px;font-weight:600;padding:${9*f}px ${16*f}px;border-radius:999px;${i?'background:#fff;border:1px solid #e6dfcf;color:var(--ink)':'background:#0b1020;color:#fff'}">${t}</span>`).join('')}</div>`;
const bg10='background:radial-gradient(700px 500px at 50% 75%,rgba(240,180,58,.16),transparent 65%),#fbf8f1';
A[10]={cls:'light grid',style:bg10,
sq:`<div class="c">${topRow(pill('<b>3 hot</b> clients active now'),true)}
<div style="margin-top:40px">${hl10(112)}</div>
<div class="sub" style="text-align:center;margin-top:20px;font-size:25px">Your busiest traders carry your network. <b>Make sure they feel it.</b></div>
<div style="display:grid;grid-template-columns:1fr 1.12fr 1fr;gap:16px;align-items:center;margin-top:38px">${pod10('HP','Hipolito P.','Active today','52.4k','$1,790',2,0,.9)}${pod10('OG','Olga Gutmann','Trading now','161.0k','$5,385',1,1,.9)}${pod10('KS','Kris Streich','Active yesterday','50.6k','$1,696',3,0,.9)}</div>
<div style="margin-top:28px">${rank10(.95)}</div>
<div class="sp"></div>
<div class="row"><div style="font-size:19px;color:var(--ink2);line-height:1.45"><b style="color:var(--ink)">Rank every client by rebate, volume or activity,</b><br>then look after the traders who look after you.</div><span class="sp"></span>${cta10}</div></div>`,
vt:`<div class="c">${topRow(pill('<b>3 hot</b> clients active now'),true)}
<div style="margin-top:46px">${hv[10]}</div>
<div class="sub" style="text-align:center;margin-top:22px;font-size:27px">Your busiest traders carry your network. <b>Make sure they feel it.</b></div>
<div style="display:grid;grid-template-columns:1fr 1.15fr 1fr;gap:14px;align-items:center;margin-top:40px">${pod10('HP','Hipolito P.','Active today','52.4k','$1,790',2,0,1)}${pod10('OG','Olga Gutmann','Trading now','161.0k','$5,385',1,1,1.08)}${pod10('KS','Kris Streich','Active yesterday','50.6k','$1,696',3,0,1)}</div><div style="margin-top:40px">${rank10(.98)}</div>
<div style="margin-top:auto;padding-top:44px;display:flex;justify-content:center">${cta10}</div>
<div style="position:absolute;left:64px;right:180px;top:1390px;text-align:center"><div style="font-size:28px;color:var(--ink2);line-height:1.45"><b style="color:var(--ink)">Rank every client by rebate, volume or activity,</b> then look after the traders who look after you.</div></div>
</div>`};
