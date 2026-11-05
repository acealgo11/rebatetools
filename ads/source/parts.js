// Shared building blocks for the RebateTools ads
const I = { // simple line icons (24 viewBox)
  bars:'<path d="M4 20h16M7 16v-5M12 16V6M17 16v-8"/>',
  bell:'<path d="M6 16V11a6 6 0 1 1 12 0v5l2 2H4z"/><path d="M10 20a2 2 0 0 0 4 0"/>',
  db:'<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3"/>',
  users:'<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M16 4.5a3.2 3.2 0 0 1 0 6.3M21 20c0-2.6-1.6-4.8-4-5.6"/>',
  target:'<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1"/>',
  link:'<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
  sync:'<path d="M20 11a8 8 0 0 0-14.3-4.3L4 8.5M4 4v4.5h4.5M4 13a8 8 0 0 0 14.3 4.3l1.7-1.8M20 20v-4.5h-4.5"/>',
  eye:'<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  chat:'<path d="M4 19l1.4-4A8 8 0 1 1 9 19.3z" fill="currentColor" stroke="none"/>',
  check:'<path d="M4 12.5l5 5L20 6.5"/>',
  crown:'<path d="M3 8l4.5 4L12 5l4.5 7L21 8l-2 11H5z" fill="currentColor" stroke="none"/>',
  trend:'<path d="M3 17l6-6 4 4 8-8M15 7h6v6"/>',
};
const ic=(n,s=26,c='currentColor',w=1.8)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" style="color:${c};flex:none">${I[n]}</svg>`;

const logo=(dark=false)=>`<img class="logo" src="${dark?'rt-logo-dark.webp':'rt-logo.webp'}" alt="RebateTools">`;
const mark=(s=26)=>`<img src="rt-mark.webp" style="width:${s}px;height:${s}px;flex:none" alt="">`;
const pill=(html,dot='var(--green)')=>`<span class="pill"><span class="dot" style="background:${dot};box-shadow:0 0 0 4px color-mix(in srgb,${dot} 22%,transparent)"></span>${html}</span>`;
const topRow=(p,dark=false)=>`<div class="top">${logo(dark)}${p}</div>`;
const cta=(t,style='')=>`<span class="cta" style="${style}">${t}<i>→</i></span>`;

// sparkline from values
function spark(vals,w,h,color,{fill=false,sw=3}={}){
  const mx=Math.max(...vals),mn=Math.min(...vals),r=mx-mn||1;
  const pts=vals.map((v,i)=>[i*(w/(vals.length-1)),h-4-((v-mn)/r)*(h-8)]);
  const d=pts.map((p,i)=>(i?'L':'M')+p[0].toFixed(1)+' '+p[1].toFixed(1)).join(' ');
  const id='g'+Math.random().toString(36).slice(2,7);
  return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" style="display:block;overflow:visible">${fill?`<defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${color}" stop-opacity=".35"/><stop offset="1" stop-color="${color}" stop-opacity="0"/></linearGradient></defs><path d="${d} L${w} ${h} L0 ${h} Z" fill="url(#${id})"/>`:''}<path d="${d}" fill="none" stroke="${color}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}

const partners=(h=76)=>`<div class="pl"><span style="height:${h}px"><img src="vantage.webp" style="height:${h-8}px"></span><span style="height:${h}px"><img src="puprime.webp" style="height:${h-8}px"></span><span style="height:${h}px"><img src="vtmarkets.webp" style="height:${h-8}px"></span><span style="height:${h}px"><img class="w" src="startrader.webp" style="height:${Math.round(h*.42)}px"></span></div>`;
