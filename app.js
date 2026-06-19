/* ════════════════════════════════════════════════════
   ONE PUNCH TCG — Pack Opening
   Set 1: Monster Association Arc
   ════════════════════════════════════════════════════ */

const CARDS=[
  {id:"001",name:"Mumen Rider",type:"Hero",faction:"hero",pr:1,rarity:"common",threat:"Nuisance · C-Rank",keyword:"Resilient",effect:"Remove 1 timeline card. Survives first combat loss.",flavor:'"He always shows up."'},
  {id:"030",name:"Grocery Store Sale",type:"Timeline",faction:"neutral",pr:null,rarity:"common",threat:"1 Turn",keyword:null,effect:"Standard timeline card, worth 1 turn.",flavor:'"20% off crab."'},
  {id:"031",name:"Mosquito",type:"Timeline",faction:"neutral",pr:null,rarity:"common",threat:"1 Turn",keyword:null,effect:"Standard timeline card, worth 1 turn.",flavor:'"It got away."'},
  {id:"032",name:"Nap Time",type:"Timeline",faction:"neutral",pr:null,rarity:"common",threat:"1 Turn",keyword:null,effect:"Standard timeline card, worth 1 turn.",flavor:'"He was almost there."'},
  {id:"011",name:"Tongue Stretcher",type:"Monster",faction:"monster",pr:1,rarity:"common",threat:"Wolf Tier",keyword:null,effect:"Add 1 timeline card. When destroyed, opponent discards 1 card.",flavor:'"Not every monster needs to be strong."'},
  {id:"013",name:"Frog Man",type:"Monster",faction:"monster",pr:1,rarity:"common",threat:"Wolf Tier",keyword:"Rush",effect:"Add 1 timeline card. Rush.",flavor:'"Leaps before it thinks."'},
  {id:"018",name:"Armored Gorilla",type:"Monster",faction:"monster",pr:1,rarity:"common",threat:"Wolf Tier",keyword:"Resilient",effect:"Add 1 timeline card. Resilient.",flavor:'"It wears its battles like a second skin."'},
  {id:"002",name:"Tank-Top Tiger",type:"Hero",faction:"hero",pr:1,rarity:"common",threat:"Nuisance · C-Rank",keyword:null,effect:"Remove 1 timeline card. Two Tank-Tops → PR 2.",flavor:'"There are more of us."'},
  {id:"021",name:"HA Dispatch",type:"Instant Event",faction:"hero",pr:null,rarity:"common",threat:"—",keyword:"Instant",effect:"Play any time. Recruit one additional unit this turn.",flavor:'"Response time: immediate."'},
  {id:"025",name:"Civilians Flee",type:"Field Event",faction:"monster",pr:null,rarity:"common",threat:"—",keyword:null,effect:"Add 1 timeline card. Wolf monsters gain PR 2.",flavor:'"Panic feeds them."'},
  {id:"055",name:"Amai Mask",type:"Hero",faction:"hero",pr:2,rarity:"uncommon",threat:"Threat · A-Rank",keyword:null,effect:"Remove 2 timeline cards. PR 1 heroes destroyed return to hand.",flavor:'"Beauty is just another form of control."'},
  {id:"066",name:"Beast King",type:"Monster",faction:"monster",pr:2,rarity:"uncommon",threat:"Dragon Tier",keyword:null,effect:"Add 2 timeline cards. All Wolf monsters gain PR 2.",flavor:'"Every wolf answers to its king."'},
  {id:"077",name:"S-City Under Siege",type:"Timeline",faction:"neutral",pr:null,rarity:"uncommon",threat:"2 Turns",keyword:"Summoned",effect:"Worth 2 turns. Requires PR 2+ hero to remove.",flavor:'"The city held longer than anyone expected."'},
  {id:"072",name:"King's Engine Roar",type:"Instant Event",faction:"hero",pr:null,rarity:"uncommon",threat:"—",keyword:"Instant",effect:"One monster must redirect its attack toward King.",flavor:'"The sound alone makes them reconsider."'},
  {id:"083",name:"Genos",type:"Hero",faction:"hero",pr:3,rarity:"rare",threat:"Serious Threat · S-Rank #14",keyword:"Overwhelm",effect:"Remove 3 timeline cards. Overwhelm. When destroyed, recruit one hero for free.",flavor:'"My purpose is to grow stronger."'},
  {id:"087",name:"Flashy Flash",type:"Hero",faction:"hero",pr:3,rarity:"rare",threat:"Serious Threat · S-Rank #13",keyword:"Rush · Lone Wolf",effect:"Remove 3 timeline cards. Rush. Lone Wolf: PR 4 when alone.",flavor:'"Speed that cannot be perceived cannot be defended."'},
  {id:"091",name:"Bang (Silver Fang)",type:"Hero",faction:"hero",pr:3,rarity:"rare",threat:"Serious Threat · S-Rank #3",keyword:"Resilient",effect:"Remove 3 timeline cards. Resilient. Targets cannot Guard against Bang's attacks.",flavor:'"The Water Stream Rock Smashing Fist."'},
  {id:"097",name:"Deep Sea King",type:"Monster",faction:"monster",pr:3,rarity:"rare",threat:"Dragon Tier (Named)",keyword:null,effect:"Add 3 timeline cards. While Rain is in play, PR becomes 5.",flavor:'"In the rain, even gods should kneel."'},
  {id:"094",name:"Carnage Kabuto",type:"Monster",faction:"monster",pr:3,rarity:"rare",threat:"Dragon Tier (Named)",keyword:"Overwhelm",effect:"Add 3 timeline cards. Overwhelm. PR +1 each turn it survives.",flavor:'"Genus called him a failure. Genus was wrong."'},
  {id:"120",name:"Tatsumaki",type:"Hero",faction:"hero",pr:4,rarity:"serious-rare",threat:"Calamity · S-Rank #2",keyword:"Overwhelm · Serious",effect:"Remove 4 timeline cards. Overwhelm. Counts toward win condition.",flavor:'"Don\'t get in my way."'},
  {id:"122",name:"King",type:"Hero",faction:"hero",pr:4,rarity:"serious-rare",threat:"Calamity · S-Rank #7",keyword:"Serious · Lone Wolf",effect:"All monsters must attack King while he stands. PR 5 alone.",flavor:'"The King Engine roars. They always hesitate."'},
  {id:"124",name:"Orochi, Monster King",type:"Monster",faction:"monster",pr:4,rarity:"serious-rare",threat:"Dragon+ Tier",keyword:"Serious",effect:"Add 4 timeline cards. All Dragon monsters gain Resilient.",flavor:'"The monster king does not beg. He commands."'},
  {id:"129",name:"Garou (Hero Hunter)",type:"Hero",faction:"both",pr:3,rarity:"serious-rare",threat:"Calamity · Monster",keyword:"Serious · Lone Wolf",effect:"Dual-faction. Remove or add 3 timeline cards. Lone Wolf: PR 4.",flavor:'"I don\'t fight for justice. I fight against it."'},
  {id:"132",name:"Elder Centipede",type:"Monster",faction:"monster",pr:5,rarity:"ssr",threat:"God-Tier / Dragon+",keyword:"Overwhelm · Serious",effect:"Add 5 timeline cards. Overwhelm. Once per game: survives destruction with PR 3.",flavor:'"It filled the entire horizon."'},
  {id:"133",name:"Garou (Monster Form)",type:"Monster",faction:"monster",pr:5,rarity:"ssr",threat:"God-Tier",keyword:"Rush · Lone Wolf · Serious",effect:"Add 5 timeline cards. Rush. Lone Wolf: PR 7. Once per game: negate Saitama reveal.",flavor:'"This is what a monster truly looks like."'},
  {id:"134",name:"Normal Punch",type:"Saitama",faction:"hero",pr:"∞",rarity:"saitama",threat:"Catastrophe",keyword:null,effect:"Win when counter reaches 0. It was enough.",flavor:'"It was enough."'},
  {id:"136",name:"Serious Punch",type:"Saitama",faction:"hero",pr:"∞",rarity:"saitama",threat:"Catastrophe",keyword:null,effect:"Win if 3+ Dragon-tier monsters were destroyed this game.",flavor:'"I\'ll show you what a serious hit looks like."'},
  {id:"142",name:"Serious Series: Serious Punch",type:"Saitama",faction:"hero",pr:"∞",rarity:"super-saitama",threat:"Beyond Catastrophe",keyword:null,effect:"Auto-win regardless of counter state — if chosen before the game.",flavor:'"It split the sky in two."'},
  {id:"143",name:"God",type:"Monster",faction:"monster",pr:"∞",rarity:"ssst",threat:"Beyond Classification",keyword:null,effect:"Both timelines reset to 7. All Relics destroyed. Draw 3 cards.",flavor:'"It offered power to those with nothing left."'},
];

const RC={
  "common":       {label:"Common",                 color:"#888780",bg:"#0e0e0c",dim:"#888780",pips:1,foil:false,flash:null},
  "uncommon":     {label:"Uncommon",               color:"#1D9E75",bg:"#080e0a",dim:"#5dcaa5",pips:2,foil:false,flash:null},
  "rare":         {label:"Rare",                   color:"#185FA5",bg:"#070b14",dim:"#85b7eb",pips:3,foil:true, flash:null},
  "serious-rare": {label:"Serious Rare",           color:"#BA7517",bg:"#0e0b04",dim:"#fac775",pips:4,foil:true, flash:"#EF9F27"},
  "ssr":          {label:"Super Serious Rare",     color:"#D85A30",bg:"#110604",dim:"#f0997b",pips:5,foil:true, flash:"#D85A30"},
  "saitama":      {label:"Saitama Card",           color:"#EF9F27",bg:"#0e0b04",dim:"#fac775",pips:6,foil:true, flash:"#EF9F27"},
  "super-saitama":{label:"★ Super Serious Saitama",color:"#D4537E",bg:"#0f0510",dim:"#f4c0d1",pips:6,foil:true, flash:"#D4537E"},
  "ssst":         {label:"✦ Seriously Super Serious",color:"#7F77DD",bg:"#090718",dim:"#afa9ec",pips:7,foil:true, flash:"#7F77DD"},
};
const FA={
  hero:   {label:"HERO",    col:"#85b7eb",bg:"#070b14"},
  monster:{label:"MONSTER", col:"#f09595",bg:"#110604"},
  neutral:{label:"NEUTRAL", col:"#97c459",bg:"#070d07"},
  both:   {label:"DUAL",    col:"#afa9ec",bg:"#090718"},
};
const RO=["common","uncommon","rare","serious-rare","ssr","saitama","super-saitama","ssst"];

const RIP_STATES=[
  {id:"catastrophic", weight:8,  label:"CATASTROPHIC RIP", desc:"How did you even manage that.",   icon:"💀", color:"#E24B4A", angle:"8deg",  jaggedAmp:14, jagged:true,  confetti:false},
  {id:"scuffed",      weight:22, label:"SCUFFED",          desc:"A little rough around the edges.", icon:"😬", color:"#D85A30", angle:"5deg",  jaggedAmp:10, jagged:true,  confetti:false},
  {id:"average",      weight:35, label:"CLEAN ENOUGH",     desc:"Gets the job done.",              icon:"👍", color:"#888780", angle:"2deg",  jaggedAmp:6,  jagged:false, confetti:false},
  {id:"clean",        weight:25, label:"CLEAN RIP",        desc:"Smooth and satisfying.",          icon:"✨", color:"#1D9E75", angle:"0deg",  jaggedAmp:3,  jagged:false, confetti:false},
  {id:"perfect",      weight:10, label:"PERFECT OPEN",     desc:"Collector quality. Nice.",         icon:"🏆", color:"#EF9F27", angle:"-1deg", jaggedAmp:1,  jagged:false, confetti:true},
];

function pickRip(){
  const total=RIP_STATES.reduce((s,r)=>s+r.weight,0);
  let rnd=Math.random()*total;
  for(const r of RIP_STATES){rnd-=r.weight;if(rnd<=0)return r;}
  return RIP_STATES[2];
}
function pickFrom(r){
  const pool=CARDS.filter(c=>c.rarity===r);
  return{...(pool.length?pool[Math.floor(Math.random()*pool.length)]:CARDS[0]),uid:Math.random()};
}
function pullPack(){
  const cw=[{r:"rare",w:76},{r:"serious-rare",w:14},{r:"ssr",w:5},{r:"saitama",w:3},{r:"super-saitama",w:1.5},{r:"ssst",w:0.5}];
  let rnd=Math.random()*100,acc=0,chase="rare";
  for(const{r,w}of cw){acc+=w;if(rnd<acc){chase=r;break;}}
  return[...Array.from({length:6},()=>pickFrom("common")),...Array.from({length:2},()=>pickFrom("uncommon")),pickFrom("rare"),pickFrom(chase)];
}

function buildTearEdge(ripState){
  const amp=ripState.jaggedAmp,w=214,pts=28,step=w/(pts-1);
  const ys=[];
  for(let i=0;i<pts;i++){
    ys.push(ripState.jagged?(i%2===0?amp*0.3:amp)*(0.5+Math.random()*0.5)*-1:Math.sin(i*0.8)*amp*0.4);
  }
  let d=`M0,0 `;
  for(let i=0;i<pts;i++)d+=`L${(i*step).toFixed(1)},${ys[i].toFixed(1)} `;
  d+=`L${w},0 L${w},18 L0,18 Z`;
  const line=`M0,0 ${ys.map((y,i)=>`L${(i*step).toFixed(1)},${y.toFixed(1)}`).join(" ")} L${w},0`;
  document.getElementById("tearEdgeSVG").innerHTML=
    `<path d="${d}" fill="#080a10"/><path d="${line}" fill="none" stroke="rgba(239,159,39,0.25)" stroke-width="1"/>`;
}

/* ── DRAG MECHANIC ── */
let dragStartY=0,dragCurrentY=0,isDragging=false,packOpened=false,currentRip=null;
const DRAG_THRESHOLD=80,TOP_HEIGHT=72,BODY_HEIGHT=228;

const packContainer=document.getElementById("packContainer");
const packTop=document.getElementById("packTop");
const packBody=document.getElementById("packBody");
const ripBadge=document.getElementById("ripBadge");
const pullInstruction=document.getElementById("pullInstruction");

function initPackDimensions(){
  packTop.style.height=TOP_HEIGHT+"px";
  packBody.style.height=BODY_HEIGHT+"px";
  packTop.style.top="0px";
  packBody.style.bottom="0px";
}
function onDragStart(e){
  if(packOpened)return;
  isDragging=true;
  dragStartY=e.touches?e.touches[0].clientY:e.clientY;
  packContainer.classList.add("dragging");
  if(!currentRip){currentRip=pickRip();buildTearEdge(currentRip);}
}
function onDragMove(e){
  if(!isDragging||packOpened)return;
  if(e.cancelable)e.preventDefault();
  dragCurrentY=(e.touches?e.touches[0].clientY:e.clientY)-dragStartY;
  const progress=Math.max(0,Math.min(1,dragCurrentY/DRAG_THRESHOLD));
  packTop.style.transform=`translateY(${-progress*TOP_HEIGHT*1.4}px)`;
  packTop.style.opacity=String(1-progress*0.6);
  packBody.style.boxShadow=`0 0 ${progress*24}px rgba(239,159,39,${progress*0.3})`;
  if(progress>0.15){
    ripBadge.style.color=currentRip.color;
    ripBadge.style.background=currentRip.color+"22";
    ripBadge.style.border=`1px solid ${currentRip.color}44`;
    ripBadge.textContent=currentRip.label;
    ripBadge.classList.add("show");
  }
  if(progress<0.3)pullInstruction.textContent="SLIDE DOWN TO OPEN";
  else if(progress<0.7)pullInstruction.textContent="KEEP PULLING…";
  else pullInstruction.textContent="RELEASE TO OPEN";
  if(progress>=1)finishRip();
}
function onDragEnd(){
  if(!isDragging||packOpened)return;
  isDragging=false;
  packContainer.classList.remove("dragging");
  if(dragCurrentY/DRAG_THRESHOLD<1){
    packTop.style.transition="transform 0.35s ease, opacity 0.35s ease";
    packTop.style.transform="translateY(0)";
    packTop.style.opacity="1";
    packBody.style.boxShadow="none";
    ripBadge.classList.remove("show");
    setTimeout(()=>{packTop.style.transition="";},380);
    pullInstruction.textContent="SLIDE DOWN TO OPEN";
    dragCurrentY=0;
  }
}
function finishRip(){
  if(packOpened)return;
  packOpened=true;
  if(navigator.vibrate)navigator.vibrate(currentRip.confetti?[40,30,40]:30);
  packTop.style.setProperty("--rip-angle",currentRip.angle);
  packTop.classList.add("ripped");
  if(currentRip.confetti)spawnConfetti();else spawnParticles(currentRip.color,14);
  setTimeout(()=>startReveal(),520);
}
packContainer.addEventListener("touchstart",onDragStart,{passive:true});
packContainer.addEventListener("touchmove",onDragMove,{passive:false});
packContainer.addEventListener("touchend",onDragEnd);
packContainer.addEventListener("mousedown",onDragStart);
window.addEventListener("mousemove",e=>{if(isDragging)onDragMove(e);});
window.addEventListener("mouseup",onDragEnd);

/* ── REVEAL ── */
let pack=[],curIdx=0,revealedSet=new Set();
function startReveal(){
  pack=pullPack();curIdx=0;revealedSet.clear();
  document.getElementById("progStrip").innerHTML=pack.map((_,i)=>`<div class="pd" id="pd${i}"></div>`).join("");
  showScreen("revealScreen");
  renderCard(0);
}
function cardArtPath(card){
  if(card.art)return card.art;
  const slug=card.name.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"");
  const id=String(card.id||"").padStart(3,"0");
  return id?`art/${id}_${slug}.jpg`:null;
}
function artSVG(card){
  const fac=FA[card.faction]||FA.hero,rc=RC[card.rarity]||RC.common;
  const path=cardArtPath(card);
  if(path){
    return`<img src="${path}" alt="${card.name}" style="width:100%;height:100%;object-fit:cover;display:block;" onerror="this.style.display='none';this.nextSibling.style.display='block'"/>
    <svg viewBox="0 0 196 142" style="width:100%;height:100%;display:none;">
      <rect width="196" height="142" fill="${fac.bg}"/>
      <circle cx="98" cy="85" r="50" fill="${rc.color}" opacity="0.06"/>
      <text x="98" y="82" text-anchor="middle" dominant-baseline="middle" font-size="42">🃏</text>
    </svg>`;
  }
  const icons={Hero:"🦸",Monster:"👹",Saitama:"👊",Timeline:"⏳","Instant Event":"⚡","Field Event":"🌐",Relic:"🏺"};
  const ico=icons[card.type]||"🃏";
  return`<svg viewBox="0 0 196 142" style="width:100%;height:100%;display:block;">
    <rect width="196" height="142" fill="${fac.bg}"/>
    <circle cx="98" cy="85" r="75" fill="${rc.color}" opacity="0.06"/>
    <circle cx="98" cy="85" r="50" fill="${rc.color}" opacity="0.05"/>
    <circle cx="98" cy="85" r="28" fill="${rc.color}" opacity="0.04"/>
    <text x="98" y="82" text-anchor="middle" dominant-baseline="middle" font-size="42">${ico}</text>
    <rect x="0" y="105" width="196" height="37" fill="url(#vg${card.rarity})"/>
    <defs><linearGradient id="vg${card.rarity}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${fac.bg}" stop-opacity="0"/><stop offset="100%" stop-color="${fac.bg}" stop-opacity="1"/></linearGradient></defs>
    <text x="7" y="122" font-size="7.5" font-family="Cinzel,serif" font-weight="700" fill="${fac.col}" opacity="0.85" letter-spacing="1.5">${fac.label}</text>
    <text x="189" y="122" font-size="6.5" font-family="Cinzel,serif" text-anchor="end" fill="${rc.dim}" opacity="0.65">${rc.label}</text>
  </svg>`;
}
function buildCard(card){
  const fac=FA[card.faction]||FA.hero,rc=RC[card.rarity]||RC.common;
  const pips=Array.from({length:Math.min(rc.pips,7)},()=>`<div class="cpip" style="background:${rc.color};opacity:0.45;"></div>`).join("");
  const prStr=card.pr!==null?String(card.pr):"EVT";
  const el=document.createElement("div");
  el.className="big-card face-down";
  el.innerHTML=`
    <div class="card-back"><div class="back-grid"></div><div class="back-inner"><div class="bi-icon">👊</div><div class="bi-name">ONE PUNCH TCG</div><div class="bi-sub">MONSTER ARC</div></div></div>
    <div class="card-face" style="background:${fac.bg};border:2px solid ${rc.foil?rc.color:rc.color+'55'};box-shadow:${rc.foil?`0 0 22px ${rc.color}33`:'none'};">
      ${rc.foil?'<div class="foil-sheen"></div>':""}
      <div class="card-art">${artSVG(card)}</div>
      <div class="card-nameplate"><div class="cnb"><div class="cname" style="color:${fac.col};">${card.name}</div><div class="csub" style="color:${fac.col};">${card.threat}</div></div>
      <div class="pr-circ" style="background:${rc.color}18;border:1px solid ${rc.color}55;color:${rc.dim};font-size:${prStr==="∞"?"13px":"11px"};">${prStr}</div></div>
      <div class="card-trow"><span class="tbadge" style="background:${rc.color}15;color:${rc.dim};">${card.type}</span><span class="rbadge" style="color:${rc.color};">${rc.label}</span></div>
      <div class="card-body">${card.keyword?`<div class="kw" style="background:${rc.color}15;color:${rc.dim};border:0.5px solid ${rc.color}33;">${card.keyword}</div>`:""}<div class="efx" style="color:${fac.col};">${card.effect}</div></div>
      <div class="card-flav" style="color:${fac.col};">${card.flavor}</div>
      <div class="card-foot"><span class="cset" style="color:${fac.col};">SET 1 · MONSTER ARC</span><div class="cpips">${pips}</div></div>
    </div>`;
  return el;
}
function renderCard(idx){
  curIdx=idx;
  const card=pack[idx],rc=RC[card.rarity];
  document.getElementById("revCounter").textContent=`${idx+1} / ${pack.length}`;
  pack.forEach((_,i)=>{const d=document.getElementById(`pd${i}`);if(d)d.className="pd"+(i<idx?" done":i===idx?" cur":"");});
  document.getElementById("prevBtn").disabled=idx===0;
  document.getElementById("nextBtn").textContent=idx===pack.length-1?"RESULTS →":"NEXT →";
  const wrap=document.getElementById("bigCardWrap");
  wrap.innerHTML="";
  const el=buildCard(card);
  wrap.appendChild(el);
  const hint=document.getElementById("tapHint");
  if(revealedSet.has(idx)){setTimeout(()=>el.classList.remove("face-down"),50);hint.textContent="";}
  else{
    hint.textContent="TAP CARD TO REVEAL";
    el.addEventListener("click",()=>{
      if(el.classList.contains("face-down")){
        el.classList.remove("face-down");revealedSet.add(idx);hint.textContent="";
        if(rc.flash){if(navigator.vibrate)navigator.vibrate(20);spawnParticles(rc.flash,18);showFlash(card);}
      }
    },{once:true});
  }
}
function showFlash(card){
  const rc=RC[card.rarity],fl=document.getElementById("rarFlash");
  document.getElementById("rfTitle").textContent=rc.label.toUpperCase();
  document.getElementById("rfTitle").style.color=rc.color;
  document.getElementById("rfName").textContent=card.name.toUpperCase();
  document.getElementById("rfName").style.color=rc.dim;
  document.getElementById("rfLine").style.background=rc.color;
  fl.classList.add("show");
  setTimeout(()=>fl.classList.remove("show"),1900);
}
document.getElementById("nextBtn").addEventListener("click",()=>{if(curIdx<pack.length-1)renderCard(curIdx+1);else showSummary();});
document.getElementById("prevBtn").addEventListener("click",()=>{if(curIdx>0)renderCard(curIdx-1);});
document.getElementById("skipAll").addEventListener("click",()=>{pack.forEach((_,i)=>revealedSet.add(i));showSummary();});

/* ── SUMMARY ── */
function showSummary(){
  const rip=currentRip||RIP_STATES[2];
  document.getElementById("rrIcon").textContent=rip.icon;
  document.getElementById("rrQuality").textContent=rip.label;
  document.getElementById("rrQuality").style.color=rip.color;
  document.getElementById("rrDesc").textContent=rip.desc;
  const best=pack.reduce((b,c)=>RO.indexOf(c.rarity)>RO.indexOf(b.rarity)?c:b);
  const brc=RC[best.rarity];
  const banner=document.getElementById("bestBanner");
  banner.style.background=brc.color+"12";
  banner.style.border=`1px solid ${brc.color}33`;
  document.getElementById("bestName").textContent=best.name;
  document.getElementById("bestName").style.color=brc.dim;
  document.getElementById("bestRarLabel").textContent=brc.label;
  document.getElementById("bestRarLabel").style.color=brc.color;
  document.getElementById("bestIcon").textContent=["ssr","super-saitama","ssst"].includes(best.rarity)?"🔥":best.rarity==="saitama"?"👊":"⭐";
  document.getElementById("sumSub").textContent=`Monster Association Arc · ${pack.length} cards`;
  document.getElementById("cardList").innerHTML=pack.map(card=>{
    const rc=RC[card.rarity],fac=FA[card.faction]||FA.hero;
    const prStr=card.pr!==null?String(card.pr):"";
    return`<div class="cli"><div class="cli-dot" style="background:${fac.col};"></div><div class="cli-info"><div class="cli-name">${card.name}</div><div class="cli-type">${card.type} · ${card.threat}</div></div><div class="cli-rar" style="background:${rc.color}15;color:${rc.dim};border:0.5px solid ${rc.color}33;">${rc.label}</div>${prStr?`<div class="cli-pr" style="background:${rc.color};">${prStr}</div>`:""}</div>`;
  }).join("");
  showScreen("summaryScreen");
  if(rip.confetti)spawnConfetti();else spawnParticles(brc.color,12);
}
document.getElementById("againBtn").addEventListener("click",()=>{
  packOpened=false;currentRip=null;dragCurrentY=0;isDragging=false;
  packTop.classList.remove("ripped");
  packTop.style.transition="none";
  packTop.style.transform="translateY(0)";
  packTop.style.opacity="1";
  packBody.style.boxShadow="none";
  ripBadge.classList.remove("show");
  pullInstruction.textContent="SLIDE DOWN TO OPEN";
  document.getElementById("tearEdgeSVG").innerHTML="";
  setTimeout(()=>{packTop.style.transition="";},50);
  showScreen("packScreen");
});

/* ── PARTICLES ── */
function spawnParticles(color,count){
  const c=document.getElementById("particles");
  for(let i=0;i<count;i++){
    const p=document.createElement("div");
    p.className="particle";
    const sz=Math.random()*4+2;
    p.style.cssText=`width:${sz}px;height:${sz}px;background:${color};left:${Math.random()*100}%;bottom:0;animation-duration:${Math.random()*1.8+1.2}s;animation-delay:${Math.random()*0.4}s;`;
    c.appendChild(p);
    setTimeout(()=>p.remove(),3000);
  }
}
function spawnConfetti(){
  const c=document.getElementById("particles");
  const colors=["#ef9f27","#85b7eb","#f09595","#97c459","#afa9ec","#fac775"];
  for(let i=0;i<40;i++){
    const p=document.createElement("div");
    p.className="confetti";
    const sz=Math.random()*8+4;
    const dur=Math.random()*1.5+1;
    p.style.cssText=`width:${sz}px;height:${sz*0.5}px;background:${colors[Math.floor(Math.random()*colors.length)]};border-radius:1px;left:${Math.random()*100}%;top:0;animation-duration:${dur}s;animation-delay:${Math.random()*0.6}s;`;
    c.appendChild(p);
    setTimeout(()=>p.remove(),(dur+1)*1000);
  }
}

/* ── SCREENS ── */
function showScreen(id){
  ["packScreen","revealScreen","summaryScreen"].forEach(s=>{document.getElementById(s).classList.toggle("hidden",s!==id);});
  if(id==="summaryScreen")document.getElementById("summaryScreen").scrollTop=0;
}

/* ── INIT ── */
initPackDimensions();
buildTearEdge(RIP_STATES[2]);
setInterval(()=>spawnParticles(["#ef9f2218","#185fa218","#7f77dd18"][Math.floor(Math.random()*3)],1),3000);
