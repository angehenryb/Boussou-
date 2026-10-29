/* Boussou – réglages et données du site */
/* À MODIFIER : votre numéro WhatsApp (ex. "225XXXXXXXXXX", sans + ni espaces) et la devise */
const CONFIG={whatsapp:"2250749930072",devise:"FCFA"};

/* À MODIFIER : vos bateaux ; pour l'intérieur du yacht, ajoutez photo:"salon.jpg" dans chaque pièce de la liste interieur (les valeurs ci-dessous sont des exemples).
   vue = zone de la photo plage.jpg affichée ; pour une vraie photo, ajoutez photo:"mon-bateau.jpg" */
const BATEAUX=[
  {type:"Jet-ski",nom:"Jet-ski 1",marque:"Yamaha",modele:"VX Cruiser",annee:2022,km:850,vmax:90,places:3,vue:"6% 100%/200%",tarifs:[["30 minutes",25000],["1 heure",45000],["2 heures",85000]]},
  {type:"Jet-ski",nom:"Jet-ski 2",marque:"Sea-Doo",modele:"GTI SE",annee:2021,km:1200,vmax:85,places:3,vue:"25% 100%/220%",tarifs:[["30 minutes",25000],["1 heure",45000],["2 heures",85000]]},
  {type:"Yacht",nom:"Yacht",marque:"Azimut",modele:"Fly 55",annee:2018,km:6400,vmax:55,places:10,vue:"87% 75%/300%",interieur:[{titre:"Salon",photo:"salon.jpg"},{titre:"Cabine",photo:"cabine.jpg"},{titre:"Cuisine",photo:"cuisine.jpg"},{titre:"Pont",photo:"pont.jpg"}],tarifs:[["Demi-journée",400000],["Journée",650000],["2 jours",1200000]]}
];

/* À MODIFIER : horaires affichés sur les fiches */
const HORAIRES={"Jet-ski":"Disponible de 9 h à 17 h","Yacht":"Disponible à tout moment"};

const $=id=>document.getElementById(id);
const wa=m=>"https://wa.me/"+CONFIG.whatsapp+"?text="+encodeURIComponent(m);
const fmt=n=>n.toLocaleString("fr-FR");
const prix=n=>fmt(n)+" "+CONFIG.devise;

let cat="Jet-ski";
const CATS=[["Jet-ski","Jet-skis","Rapides et maniables, pour les sensations fortes. Disponibles de 9 h à 17 h."],["Yacht","Yachts","Confort, espace et élégance pour une sortie à plusieurs. Disponibles à tout moment."]];
function carte(b){
  const [pos,size]=(b.vue||"center/cover").split("/");
  const fond=b.photo?`background-image:url(${b.photo});background-size:cover;background-position:center`:`background-position:${pos};background-size:${size}`;
  const spec=[["Marque",b.marque],["Modèle",b.modele],["Année",b.annee],["Places",b.places],["Kilométrage",fmt(b.km)+" km"],["Vitesse max",b.vmax+" km/h"]];
  const inte=b.interieur?`<h4 class="titre-int">L’intérieur</h4><div class="galerie">${b.interieur.map(p=>`<figure class="tuile"><div class="ph"${p.photo?` style="background-image:url(${p.photo})"`:""}>${p.photo?"":"Photo à ajouter"}</div><figcaption>${p.titre}</figcaption></figure>`).join("")}</div>`:"";
  return `<article class="carte${b.interieur?" large":""}">
    <div class="vignette" style="${fond}" role="img" aria-label="${b.nom}"></div>
    <div class="tete"><span class="etiquette">${b.type}</span><h3>${b.nom}</h3></div>
    <div class="heure">🕘 ${HORAIRES[b.type]||""}</div>
    <dl class="specs">${spec.map(([k,v])=>`<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}</dl>
    ${inte}
    ${b.tarifs.map(([d,p])=>`<div class="ligne"><span class="nom">${d}</span><span class="prix">${prix(p)}</span><a target="_blank" rel="noopener" href="${wa(`Bonjour Boussou, je voudrais réserver : ${b.nom} (${b.marque} ${b.modele}), ${d} (${prix(p)}). Quels jours sont disponibles ? Merci !`)}">Réserver</a></div>`).join("")}
  </article>`;
}
function rendre(){
  $("onglets").innerHTML=CATS.map(([k,n])=>`<button role="tab" aria-selected="${k===cat}" data-k="${k}">${n} (${BATEAUX.filter(b=>b.type===k).length})</button>`).join("");
  document.querySelectorAll("#onglets button").forEach(x=>x.onclick=()=>{cat=x.dataset.k;rendre()});
  $("introcat").textContent=CATS.find(x=>x[0]===cat)[2];
  $("bateaux").innerHTML=BATEAUX.filter(b=>b.type===cat).map(carte).join("");
}
if($("bateaux"))rendre();
if($("form")){
  $("bateau").innerHTML=BATEAUX.map(b=>`<option>${b.nom} (${b.marque} ${b.modele})</option>`).join("")+"<option>Je ne sais pas encore</option>";
  $("form").addEventListener("submit",e=>{
    e.preventDefault();
    const j=$("jour").value,n=$("nom").value.trim(),t=$("msg").value.trim();
    const m=`Bonjour Boussou, je m’appelle ${n}. Je voudrais réserver : ${$("bateau").value}${j?", le "+j.split("-").reverse().join("/"):""}. ${t}`.trim();
    window.open(wa(m),"_blank");
  });
}
document.querySelectorAll("[data-wa]").forEach(a=>{a.href=wa(a.dataset.wa);a.target="_blank";a.rel="noopener"});

/* ===== Météo (Open-Meteo, sans clé) ===== */
/* À MODIFIER si besoin : coordonnées d'Assinie (terre) et du large (mer) */
const METEO={lat:5.17,lon:-3.28,mlat:4.95,mlon:-3.28};

function infoCode(c){
  if(c===0)return["☀️","Ciel dégagé"];
  if(c<=2)return["🌤️","Peu nuageux"];
  if(c===3)return["☁️","Couvert"];
  if(c<=48)return["🌫️","Brume"];
  if(c<=57)return["🌦️","Bruine"];
  if(c<=67)return["🌧️","Pluie"];
  if(c<=82)return["🌦️","Averses"];
  return["⛈️","Orage"];
}
/* Seuils indicatifs : niveau 0 = favorable, 1 = à surveiller, 2 = déconseillé */
function evaluer(d){
  let n=0;const r=[];
  const up=(v,m)=>{if(v>n)n=v;r.push(m)};
  if(d.code>=95)up(2,"orage prévu");
  if(d.vent>=40)up(2,"vent fort ("+Math.round(d.vent)+" km/h)");else if(d.vent>=28)up(1,"vent soutenu ("+Math.round(d.vent)+" km/h)");
  if(d.vague!=null){if(d.vague>=2.5)up(2,"vagues hautes ("+d.vague.toFixed(1)+" m)");else if(d.vague>=1.5)up(1,"mer agitée ("+d.vague.toFixed(1)+" m)")}
  if(d.pluie>=70)up(1,"forte probabilité de pluie ("+d.pluie+" %)");
  return{n,r};
}
function conseils(d){
  const l=["Maillot de bain et serviette","De l’eau et un en-cas","Pochette étanche pour le téléphone"];
  if(d.uv>=8)l.push("Crème solaire haute protection, casquette et lunettes de soleil (UV très élevé)");
  else if(d.uv>=5)l.push("Crème solaire et lunettes de soleil (UV élevé)");
  if(d.pluie>=40)l.push("Vêtements de rechange et coupe-vent léger : risque de pluie");
  if(d.vent>=20)l.push("Une veste légère : le vent est plus frais sur l’eau");
  if(d.vague!=null&&d.vague>=1.2)l.push("Si vous êtes sensible au mal de mer, prévoyez un traitement adapté");
  return l;
}
const VERD=[
  ["Conditions favorables","Bonne journée pour naviguer."],
  ["Conditions à surveiller","Sortie possible, nous confirmerons selon la mer au moment du départ."],
  ["Sortie déconseillée","Nous vous proposerons de reporter à un autre jour."]
];
function dateFr(iso,long){
  const d=new Date(iso+"T12:00:00");
  return d.toLocaleDateString("fr-FR",long?{weekday:"long",day:"numeric",month:"long"}:{weekday:"short",day:"numeric"});
}
function afficherMeteo(jours,i){
  $("meteo-jours").innerHTML=jours.map((d,k)=>{
    const [ic]=infoCode(d.code);
    return `<button class="mj" aria-pressed="${k===i}" data-i="${k}"><span class="j">${k===0?"Auj.":dateFr(d.date)}</span><span class="ic" aria-hidden="true">${ic}</span><span class="t">${Math.round(d.tmax)}°</span><span class="p">${d.pluie} % pluie</span></button>`;
  }).join("");
  document.querySelectorAll("#meteo-jours .mj").forEach(b=>b.onclick=()=>afficherMeteo(jours,+b.dataset.i));
  const d=jours[i],[ic,desc]=infoCode(d.code),ev=evaluer(d),v=VERD[ev.n];
  const chiffres=[["Température max",Math.round(d.tmax)+" °C"],["Pluie",d.pluie+" %"],["Vent max",Math.round(d.vent)+" km/h"],["Indice UV",Math.round(d.uv)],["Hauteur des vagues",d.vague!=null?d.vague.toFixed(1)+" m":"non disponible"]];
  const resa=ev.n<2?`<a class="btn" target="_blank" rel="noopener" href="${wa("Bonjour Boussou, je voudrais réserver une sortie le "+dateFr(d.date,true)+". Quels bateaux sont disponibles ? Merci !")}">Réserver pour ce jour</a>`:"";
  $("meteo-detail").innerHTML=`<div class="verdict v${ev.n}">${ic} ${v[0]}<small>${ev.r.length?"Raison : "+ev.r.join(", ")+". ":""}${v[1]}</small></div>
  <div class="mdet">
    <div class="carte"><h3 style="text-transform:capitalize">${dateFr(d.date,true)}</h3><p>${desc}</p><dl class="chiffres" style="margin-top:14px">${chiffres.map(([k,x])=>`<div><dt>${k}</dt><dd>${x}</dd></div>`).join("")}</dl></div>
    <div class="carte"><h3>À prévoir pour ce jour</h3><ul class="prevoir" style="margin:12px 0 16px">${conseils(d).map(x=>`<li>${x}</li>`).join("")}</ul>${resa}</div>
  </div>`;
}
async function chargerMeteo(){
  try{
    const f=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${METEO.lat}&longitude=${METEO.lon}&daily=weather_code,temperature_2m_max,precipitation_probability_max,wind_speed_10m_max,uv_index_max&timezone=Africa%2FAbidjan&forecast_days=4`);
    if(!f.ok)throw new Error("meteo");
    const a=(await f.json()).daily;
    let m=null;
    try{
      const r=await fetch(`https://marine-api.open-meteo.com/v1/marine?latitude=${METEO.mlat}&longitude=${METEO.mlon}&daily=wave_height_max&timezone=Africa%2FAbidjan&forecast_days=4`);
      if(r.ok)m=(await r.json()).daily;
    }catch(e){}
    const jours=a.time.map((t,k)=>({date:t,code:a.weather_code[k],tmax:a.temperature_2m_max[k],pluie:a.precipitation_probability_max[k]??0,vent:a.wind_speed_10m_max[k],uv:a.uv_index_max[k]??0,vague:m&&m.wave_height_max?m.wave_height_max[k]:null}));
    afficherMeteo(jours,0);
  }catch(e){
    $("meteo-jours").innerHTML="";
    $("meteo-detail").innerHTML=`<div class="verdict v1">Prévisions indisponibles pour le moment<small>Écrivez-nous sur WhatsApp, nous vous renseignons sur les conditions du jour.</small></div>`;
  }
}
if($("meteo-jours"))chargerMeteo();

/* Menu mobile */
(function(){const b=$("menu-btn"),n=$("nav");if(!b||!n)return;
const fermer=()=>{n.classList.remove("ouvert");b.setAttribute("aria-expanded","false")};
b.addEventListener("click",()=>{const o=n.classList.toggle("ouvert");b.setAttribute("aria-expanded",o?"true":"false")});
n.querySelectorAll("a").forEach(a=>a.addEventListener("click",fermer));})();
