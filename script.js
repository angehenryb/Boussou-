/* Boussou – réglages et données du site */
/* À MODIFIER : votre numéro WhatsApp (ex. "225XXXXXXXXXX", sans + ni espaces) et la devise */
const CONFIG={whatsapp:"2250749930072",devise:"FCFA"};

/* Comptes clients (Supabase). À MODIFIER : colle ici la clé PUBLIQUE (anon / publishable) du projet.
   Ne mets JAMAIS la clé service_role dans ce fichier. */
const SUPA={url:"https://wkspympggvqdpvakakkg.supabase.co",cle:"COLLE_ICI_LA_CLE_PUBLIQUE"};

/* À MODIFIER : vos bateaux ; pour l'intérieur du yacht, ajoutez photo:"salon.jpg" dans chaque pièce de la liste interieur (les valeurs ci-dessous sont des exemples).
   vue = zone de la photo plage.jpg affichée ; pour une vraie photo, ajoutez photo:"mon-bateau.jpg" */
/* ===== OFFRES YACHTS (les mêmes pour tous les yachts) — à adapter : modifie, ajoute ou supprime une ligne. =====
   Le prix de chaque offre se règle par yacht, plus bas, dans prix:{ "Nom de l'offre": montant en FCFA }.
   Sans prix, l'offre affiche « Sur demande ». evenement:true ajoute « Nombre d'invités » au message WhatsApp. */
const OFFRES_YACHT=[
  {nom:"Sortie à la journée",duree:"Demi-journée ou journée",texte:"Une escapade en mer entre amis ou en famille : navigation, baignade et détente à bord."},
  {nom:"Coucher de soleil",duree:"2 à 4 heures",texte:"Un moment calme en mer pour profiter du coucher du soleil."},
  {nom:"Anniversaire",duree:"Après-midi ou soirée",texte:"Fêtez un anniversaire en mer, au mouillage, avec vos invités. Gâteau, décoration et musique possibles en option.",evenement:true},
  {nom:"Soirée privée",duree:"En soirée, jusqu’à l’heure de retour convenue",texte:"Une soirée entre amis ou une réception en mer, au mouillage. Musique et DJ possibles en option.",evenement:true},
  {nom:"Séjour avec nuit à bord",duree:"2 jours ou plus",texte:"Une ou plusieurs nuits en mer, pour un séjour complet. La capacité est réduite la nuit : voir la fiche du yacht."},
  {nom:"Événement sur mesure",duree:"Selon votre projet",texte:"Demande en mariage, séance photo ou clip, sortie d’entreprise : décrivez votre projet et nous vous faisons une proposition.",evenement:true}
];
/* Options proposées en supplément, sur devis (supprime celles que tu ne proposes pas). */
const OPTIONS_YACHT=["Carburant (selon la distance parcourue)","Traiteur ou chef à bord","Boissons","DJ et sono","Décoration et gâteau","Photographe ou vidéaste","Animations : jet-skis, bouée tractée","Heures supplémentaires"];
const BATEAUX=[
  {type:"Jet-ski",nom:"Jet-ski 1",marque:"Sea-Doo",modele:"RXT-X 300",places:3,photo:"jetski1.jpg",tarifs:[["30 minutes",25000],["1 heure",45000],["2 heures",85000]]},
  {type:"Jet-ski",nom:"Jet-ski 2",marque:"Sea-Doo",modele:"Spark",places:3,photo:"jetski2.jpg",tarifs:[["30 minutes",25000],["1 heure",45000],["2 heures",85000]]},
  /* ===== YACHTS ===== (valeurs du Yacht 1 = exemples ; les yachts 2 à 5 sont à compléter)
     Fiche d'un yacht : marque, modele, annee, longueur (ex. "17 m"), places, cabines, sdb, equipage, vmax, km,
     description:"...", equipements:["Climatisation","..."], tarifs:[["Journée",650000]].
     photos:["photo1.jpg","photo2.jpg", ...] → jusqu'à 10 photos, sans légende (les cases vides affichent « Photo à ajouter »).
     sections:[["Titre",["ligne 1","ligne 2"]], ["Titre","paragraphe"]] → remplace le tableau des caractéristiques (voir le Yacht 1).
     couverture:"fichier.jpg" = photo affichée sur la carte. prix:{"Coucher de soleil":150000, ...} = prix des offres de ce yacht (sans prix : « Sur demande »). */
  {type:"Yacht",nom:"Yacht 1",marque:"Accelera",modele:"98",annee:2010,places:12,vmax:"28 nœuds",vue:"87% 75%/300%",couverture:"yacht1-01.jpg",
   photos:["yacht1-01.jpg","yacht1-02.jpg","yacht1-03.jpg","yacht1-04.jpg","yacht1-05.jpg","yacht1-06.jpg","yacht1-07.jpg","yacht1-08.jpg","yacht1-09.jpg"],
   sections:[
    ["Identification du navire","Modèle Accelera 98 de 2010. Yacht à moteur Flybridge de 29,90 m. Chantier Accelera Yachts basé à Hong Kong. Yacht de prestige haut de gamme conçu pour la navigation de luxe."],
    ["Caractéristiques techniques",["Dimensions : 29,90 m x 7,10 m","Tirant d’eau : 1,50 m","Motorisation : 2 x 1 800 CV Diesel","Vitesse de croisière : 22 nœuds","Vitesse max : 28 nœuds","Coque GRP avec pont en teck","Capacité : 7 500 L de carburant et 1 500 L d’eau douce"]],
    ["Capacité et confort",["Accueille 12 invités en journée et 8 la nuit","4 cabines luxueuses dont 1 Master Suite et 1 VIP","Toutes avec salle de bain privative et climatisation","Équipage de 3 personnes inclus obligatoirement : capitaine, matelot et hôtesse"]],
    ["Équipements inclus",["Flybridge panoramique avec bain de soleil","Salon arrière avec plateforme de bain","Salon intérieur climatisé avec sono Bluetooth","Cuisine équipée et bar","BBQ","Loisirs : jet-ski, wakeboard et bouée tractable","Sécurité complète","Groupe électrogène avec WiFi à bord"]]],
   prix:{"Sortie à la journée":2900000,"Coucher de soleil":1600000,"Anniversaire":2200000,"Soirée privée":2500000,"Séjour avec nuit à bord":5750000}},
  {type:"Yacht",nom:"Yacht 2",marque:"Lagoon",modele:"50",annee:2020,places:"10 à 12",vue:"87% 75%/300%",couverture:"yacht2-01.jpg",
   photos:["yacht2-01.jpg","yacht2-02.jpg","yacht2-03.jpg","yacht2-04.jpg","yacht2-05.jpg","yacht2-06.jpg","yacht2-07.jpg","yacht2-08.jpg","yacht2-09.jpg"],
   sections:[
    ["Identification du navire","Modèle Lagoon 50 de 2020. Catamaran à voile de 14,80 mètres. Chantier Lagoon - Groupe Bénéteau, référence mondiale du multicoque de luxe. Catamaran de grande croisière conçu pour le confort et la stabilité en mer."],
    ["Caractéristiques techniques",["Longueur : 14,80 m","Type : multicoque, catamaran habitable","Motorisation : 2 x Yanmar 4JH80","Puissance totale : 160 ch","Heures moteur : 110 heures seulement (très faible)","Gréement sloop avec grand-voile à corne et génois sur enrouleur","Idéal pour la navigation côtière et le lagon"]],
    ["Capacité et confort",["Accueille 10 à 12 invités en journée et 8 la nuit","4 à 6 cabines doubles selon la version propriétaire","Carré panoramique lumineux avec vue mer à 360°","Cuisine équipée","Cockpit XXL protégé","Tirant d’eau faible, parfait pour le mouillage près des plages d’Assinie et de la lagune d’Abidjan"]],
    ["Équipements inclus",["Flybridge avec poste de barre surélevé et bain de soleil","Trampolines avant pour bronzer","Plateforme arrière avec jupe pour une baignade facile","Panneaux solaires pour l’autonomie","Dessalinisateur","Climatisation","Sono Bluetooth","Annexe avec moteur","Sécurité complète","Électronique de navigation haut de gamme"]]],
   prix:{"Sortie à la journée":800000,"Coucher de soleil":450000,"Anniversaire":650000,"Soirée privée":750000,"Séjour avec nuit à bord":1600000}},
  {type:"Yacht",nom:"Yacht 3",marque:"Silverstar",modele:"Free Bird",annee:2020,places:"20 à 30",vue:"87% 75%/300%",couverture:"yacht3-01.jpg",
   photos:["yacht3-01.jpg","yacht3-02.jpg","yacht3-03.jpg","yacht3-04.jpg","yacht3-05.jpg","yacht3-06.jpg","yacht3-07.jpg","yacht3-08.jpg","yacht3-09.jpg","yacht3-10.jpg","yacht3-11.jpg","yacht3-12.jpg","yacht3-13.jpg"],
   sections:[
    ["Identification du navire","Modèle Custom Silverstar Free Bird Tri-Deck de 2020. Méga Yacht à moteur de 35,10 mètres (115 pieds). Chantier Custom / Silverstar Yachts. Modèle Tri-Deck unique, construit sur mesure pour la grande croisière de luxe en configuration 3 ponts complets."],
    ["Caractéristiques techniques",["Longueur : 35,10 m","Type : méga yacht à moteur Tri-Deck","Superstructure aluminium et coque acier pour la navigation hauturière","Vitesse de croisière : 12 à 14 nœuds, avec une autonomie transocéanique","Tirant d’eau réduit permettant l’accès aux mouillages d’Assinie","Stabilisateurs pour un confort maximal au mouillage"]],
    ["Capacité et confort",["Accueille 20 à 30 invités en journée et 10 à 12 invités la nuit","5 cabines luxueuses : 1 Master Suite panoramique sur le pont principal et 4 cabines VIP invités","Carré principal XXL","Salle à manger formelle pour 12 personnes","Salon sky-lounge sur le pont supérieur","Équipage professionnel de 6 à 8 personnes inclus"]],
    ["Équipements inclus",["3 ponts complets avec jacuzzi sur le sundeck","Immense flybridge avec bar et BBQ","Plateforme de bain hydraulique transformable en beach club","Annexe de 6 m avec moteur puissant","Jets-skis et seabobs","Matériel de pêche hauturière","Système audio-vidéo haut de gamme","Climatisation centrale","WiFi Starlink","Stabilisation à l’ancre"]]],
   prix:{"Sortie à la journée":4000000,"Coucher de soleil":2300000,"Anniversaire":3200000,"Soirée privée":3700000,"Séjour avec nuit à bord":8000000}},
  {type:"Yacht",nom:"Yacht 4",marque:"Picchiotti",modele:"55,7 m",annee:2011,places:50,vue:"87% 75%/300%",couverture:"yacht4-01.jpg",
   photos:["yacht4-01.jpg","yacht4-02.jpg","yacht4-03.jpg","yacht4-04.jpg","yacht4-05.jpg","yacht4-06.jpg","yacht4-07.jpg","yacht4-08.jpg","yacht4-09.jpg","yacht4-10.jpg","yacht4-11.jpg"],
   sections:[
    ["Identification du navire","Modèle Picchiotti Motor Yacht de 2011. Super Yacht à moteur de 55,70 mètres (182 pieds). Chantier Picchiotti - Groupe Perini Navi, référence italienne des super yachts d’exception. Ligne intemporelle dessinée pour la grande plaisance de luxe."],
    ["Caractéristiques techniques",["Dimensions : 55,70 m de longueur x 10 m de largeur","Type : super yacht à moteur en acier et aluminium","Propulsion hauturière avec grande autonomie transocéanique","Vitesse de croisière : 13 nœuds","Stabilisateurs zéro speed pour un confort absolu en navigation et au mouillage","Coque conçue pour affronter toutes les mers"]],
    ["Capacité et confort",["Accueille 50 invités en journée (événementiel) et 12 invités la nuit","6 cabines de grand luxe : 1 Master Suite full-beam, 1 VIP et 4 Guest","Aménagements intérieurs par designer renommé : bois précieux, marbre et cuir","Équipage complet de 12 à 14 professionnels inclus : capitaine, chef cuisinier, hôtesses, matelots"]],
    ["Équipements inclus",["Ponts immenses avec hélipad transformable en dancefloor","Jacuzzi","Cinéma extérieur","Beach club avec plateforme de bain hydraulique","Salle de sport","Salon principal panoramique","Salle à manger formelle","Sky-lounge","Bar extérieur","Annexes de luxe","Jets-skis, seabobs, kayaks et paddle","Matériel de plongée","Système son L-Acoustics","WiFi Starlink","Stabilisation totale"]]],
   prix:{"Sortie à la journée":9200000,"Coucher de soleil":5200000,"Anniversaire":7500000,"Soirée privée":8600000,"Séjour avec nuit à bord":18400000}},
  {type:"Yacht",nom:"Yacht 5",marque:"Princess",modele:"V39",annee:2015,places:10,vmax:"38 nœuds",vue:"87% 75%/300%",couverture:"yacht5-01.jpg",
   photos:["yacht5-01.jpg","yacht5-02.jpg","yacht5-03.jpg","yacht5-04.jpg","yacht5-05.jpg","yacht5-06.jpg","yacht5-07.jpg","yacht5-08.jpg"],
   sections:[
    ["Identification du navire","Modèle Princess V39 de 2015. Yacht sport à moteur de 13 mètres (42 pieds). Chantier Princess Yachts UK, marque anglaise iconique de luxe sportif. Modèle V Class, la gamme la plus dynamique et élégante de Princess."],
    ["Caractéristiques techniques",["Longueur : 13,00 m","Type : yacht sport Open","Motorisation : Yanmar 8LV","Puissance totale : 710 ch","Vitesse de croisière : 30 nœuds, pointe à 38 nœuds (l’un des plus rapides de la flotte)","Coque en V profond pour une navigation sportive et stable","Consommation optimisée pour la lagune et le côtier"]],
    ["Capacité et confort",["Accueille 10 invités en journée et 4 invités la nuit","2 cabines : 1 cabine propriétaire avant avec lit double en îlot et 1 cabine invités avec lits jumeaux transformables","Carré convertible","Cuisine équipée","Salle de bain avec douche séparée","Cockpit ouvert, idéal pour l’apéro au coucher du soleil et les fêtes"]],
    ["Équipements inclus",["Grand bain de soleil avant et arrière","Toit ouvrant électrique panoramique","Plateforme de bain avec échelle","Sono Fusion haut de gamme avec Bluetooth","Éclairage d’ambiance LED","Réfrigérateur et plancha électrique","Bimini pour l’ombrage et taud de soleil","Guindeau électrique","Parfait pour une sortie rapide, un shooting, un anniversaire intime ou un transfert VIP vers Assinie"]]],
   prix:{"Sortie à la journée":500000,"Coucher de soleil":300000,"Anniversaire":400000,"Soirée privée":450000,"Séjour avec nuit à bord":1050000}}
];

/* À MODIFIER : horaires affichés sur les fiches */
const HORAIRES={"Jet-ski":"Disponible de 9 h à 17 h","Yacht":"Disponible à tout moment"};

const $=id=>document.getElementById(id);
const wa=m=>"https://wa.me/"+CONFIG.whatsapp+"?text="+encodeURIComponent(m);
const fmt=n=>n.toLocaleString("fr-FR");
const prix=n=>fmt(n)+" "+CONFIG.devise;

let cat="Jet-ski";
const CATS=[["Jet-ski","Jet-skis","Rapides et maniables, pour les sensations fortes. Disponibles de 9 h à 17 h."],["Yacht","Yachts","Confort, espace et élégance pour une sortie à plusieurs. Disponibles à tout moment."]];
const ok=v=>v!==undefined&&v!==null&&v!=="";
const lib=b=>[b.marque,b.modele].filter(Boolean).join(" ");
const nomComplet=b=>b.nom+(lib(b)?" ("+lib(b)+")":"");
const ligneTarif=(b,d,p)=>`<div class="ligne"><span class="nom">${d}</span><span class="prix">${p==null?"Sur demande":prix(p)}</span><a target="_blank" rel="noopener" href="${wa(`Bonjour Boussou, je voudrais réserver : ${nomComplet(b)}, ${d}${p==null?"":" ("+prix(p)+")"}. Quels jours sont disponibles ? Merci !`)}">Réserver</a></div>`;
const tarifs=b=>b.tarifs&&b.tarifs.length?b.tarifs.map(([d,p])=>ligneTarif(b,d,p)).join(""):`<div class="ligne"><span class="nom">Tarif sur demande</span><a target="_blank" rel="noopener" href="${wa(`Bonjour Boussou, quel est le tarif pour ${nomComplet(b)} ? Merci !`)}">Demander</a></div>`;
const fondVignette=(b,photo)=>{const [pos,size]=(b.vue||"center/cover").split("/");
  return photo?`background-image:url(${photo});background-size:cover;background-position:center`:`background-position:${pos};background-size:${size}`};

/* Cartes « affiche » : photo pleine largeur, marque en bas à gauche, infos dessous */
const entete=(b,visuel)=>`<div class="photo">${visuel}<div class="legende"><h3>${lib(b)||b.nom}</h3>${lib(b)?`<span>${b.nom}</span>`:""}</div></div>`;

/* Jet-skis */
function carte(b){
  const spec=[["Année",b.annee],["Places",b.places],["Kilométrage",b.km==null?null:fmt(b.km)+" km"],["Vitesse max",b.vmax==null?null:b.vmax+" km/h"]].filter(x=>x[1]!=null);
  return `<article class="carte affiche">
    ${entete(b,`<div class="vignette" style="${fondVignette(b,b.photo)}" role="img" aria-label="${b.nom}"></div>`)}
    <div class="infos">
      <p class="dispo">${HORAIRES[b.type]||""}</p>
      <dl class="specs">${spec.map(([k,v])=>`<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}</dl>
      ${tarifs(b)}
    </div>
  </article>`;
}

/* Légende « affiche » : marque du bateau en bas à gauche de la photo */
const legende=b=>`<span class="legende"><small>${b.marque?b.nom:b.type}</small><b>${b.marque?`${b.marque}${b.modele?` <span>${b.modele}</span>`:""}`:b.nom}</b></span>`;

/* Yachts : carte légère (photo pleine largeur + bouton). Toutes les infos sont dans la fiche. */
function carteYacht(b){
  const cover=b.couverture||(b.photos||[]).find(Boolean);
  const img=cover?`<img src="${cover}" alt="">`:`<span class="sans"></span>`;
  return `<article class="carte yc">
    <button type="button" class="poster" data-fiche="${b.nom}" aria-label="Voir la fiche : ${nomComplet(b)}">${img}${legende(b)}</button>
    <div class="pied"><button class="btn" type="button" data-fiche="${b.nom}">Voir la fiche</button></div>
  </article>`;
}

/* Fiche de location d'un yacht : caractéristiques, équipements, 10 photos, tarifs */
const CHAMPS=[["Marque","marque"],["Modèle","modele"],["Année","annee"],["Longueur","longueur"],["Passagers max","places"],["Cabines","cabines"],["Salles de bain","sdb"],["Équipage","equipage"],["Vitesse max","vmax","km/h"],["Kilométrage","km","km"]];
function fiche(b){
  const photos=(b.photos||[]).filter(Boolean);
  const tuiles=photos.length
    ?photos.map((f,i)=>`<figure class="tuile2"><button type="button" class="ph" data-zoom="${i}" aria-label="Agrandir la photo ${i+1} de ${b.nom}"><img src="${f}" alt="Photo ${i+1} de ${b.nom}" loading="lazy">${i===0?legende(b):""}</button></figure>`).join("")
    :`<figure class="tuile2"><div class="ph affiche-vide"><span class="sans"></span>${legende(b)}</div></figure>`;
  return `<div class="fiche"><div class="gal">
    <button class="btn ghost" type="button" id="retour">← Tous les yachts</button>
    <div class="galerie2">${tuiles}</div>
  </div></div>`;
}

/* Une offre de location d'un yacht : nom, durée, description, prix et bouton Réserver */
function offre(b,o){
  const p=b.prix&&b.prix[o.nom]!=null?b.prix[o.nom]:null;
  const msg=`Bonjour Boussou, je voudrais réserver : ${nomComplet(b)}, offre « ${o.nom} » (${o.duree})${p==null?"":", "+prix(p)}. ${o.evenement?"Nombre d’invités : … ":""}Quels jours sont disponibles ? Merci !`;
  return `<div class="offre"><div class="oh"><b>${o.nom}</b><span>${o.duree}</span></div><p>${o.texte}</p><div class="ligne"><span class="nom prix">${p==null?"Sur demande":prix(p)}</span><a target="_blank" rel="noopener" href="${wa(msg)}">Réserver</a></div></div>`;
}

/* Panneau du bas : nom + tarif + bouton Réserver ; on le tire vers le haut pour lire toutes les informations */
function feuille(b){
  const specs=CHAMPS.map(([k,c,u])=>{const v=b[c];return `<div><dt>${k}</dt><dd${ok(v)?"":' class="vide"'}>${ok(v)?(c==="km"?fmt(v):v)+(typeof v==="number"&&u?" "+u:""):"À compléter"}</dd></div>`}).join("");
  const equip=b.equipements&&b.equipements.length?`<ul class="prevoir">${b.equipements.map(x=>`<li>${x}</li>`).join("")}</ul>`:`<p class="mini">Liste des équipements à compléter.</p>`;
  const corps=b.sections&&b.sections.length
    ?b.sections.map(([t,c])=>`<h4 class="titre-int">${t}</h4>`+(Array.isArray(c)?`<ul class="prevoir">${c.map(x=>`<li>${x}</li>`).join("")}</ul>`:`<p>${c}</p>`)).join("")
    :`${b.description?`<p>${b.description}</p>`:`<p class="mini">Description à compléter.</p>`}<h4 class="titre-int">Caractéristiques</h4><dl class="specs fiche-specs">${specs}</dl><h4 class="titre-int">Équipements</h4>${equip}`;
  const pr=Object.values(b.prix||{}).filter(v=>v!=null),min=pr.length?Math.min(...pr):null;
  return `<button type="button" class="poignee bascule" aria-expanded="false" aria-controls="fc" aria-label="Afficher ou masquer les informations"><span class="lib">Voir les détails et les offres</span><i class="fl-ch" aria-hidden="true">▲</i></button>
  <div class="fl">
    <button type="button" class="ft bascule" aria-expanded="false" aria-controls="fc"><small>${b.nom}</small><b>${b.marque?lib(b):b.nom}</b><span>${min?`À partir de ${prix(min)}`:"Offres sur demande"}</span></button>
    <a class="btn" target="_blank" rel="noopener" href="${wa(`Bonjour Boussou, je voudrais réserver : ${nomComplet(b)}. Quels jours sont disponibles ? Merci !`)}">Réserver</a>
  </div>
  <div class="fc" id="fc" hidden>
    ${corps}
    <h4 class="titre-int">Disponibilité</h4><p>${HORAIRES[b.type]||""}</p>
    <h4 class="titre-int">Nos offres</h4>
    <p class="mini">Le nombre d’invités dépend du yacht : voir « Capacité et confort » plus haut. Carburant en supplément selon la distance.</p>
    ${OFFRES_YACHT.map(o=>offre(b,o)).join("")}
    <h4 class="titre-int">Options en supplément (sur devis)</h4>
    <ul class="prevoir">${OPTIONS_YACHT.map(x=>`<li>${x}</li>`).join("")}</ul>
  </div>`;
}

/* Visionneuse : les photos défilent verticalement, une par écran */
function zoom(liste,i){
  let o=$("lb");
  if(!o){
    o=document.createElement("div");o.id="lb";o.hidden=true;
    o.innerHTML='<button type="button" class="x" aria-label="Fermer">×</button><span class="cpt"></span><div class="pile"></div>';
    o.onclick=e=>{if(e.target===o||e.target.classList.contains("x"))o.hidden=true};
    document.addEventListener("keydown",e=>{if(!o.hidden&&e.key==="Escape")o.hidden=true});
    document.body.append(o);
  }
  const p=o.querySelector(".pile"),c=o.querySelector(".cpt");
  p.innerHTML=liste.map((f,k)=>`<figure><img src="${f}" alt="Photo ${k+1}"></figure>`).join("");
  o.hidden=false;
  const maj=()=>{const h=p.clientHeight||1;c.textContent=(Math.min(liste.length-1,Math.round(p.scrollTop/h))+1)+" / "+liste.length};
  p.onscroll=maj;
  p.scrollTop=i*(p.clientHeight||0);
  maj();
}

let ouvert=null;
function fermerFiche(){if(ouvert){ouvert=null;rendre()}}
function rendre(){
  const anc=$("feuille");if(anc)anc.remove();
  const b=ouvert&&BATEAUX.find(x=>x.nom===ouvert);
  const hf=$("hero-flotte");if(hf)hf.hidden=!!b;
  document.body.classList.toggle("fiche-ouverte",!!b);
  $("onglets").hidden=!!b;$("introcat").hidden=!!b;
  if(b){
    $("bateaux").innerHTML=fiche(b);
    $("retour").onclick=()=>{ouvert=null;rendre();scrollTo(0,0)};{const hd=document.querySelector("header");if(hd)document.documentElement.style.setProperty("--hh",hd.offsetHeight+"px")}
    document.querySelectorAll("[data-zoom]").forEach(x=>x.onclick=()=>zoom((b.photos||[]).filter(Boolean),+x.dataset.zoom));
    const f=document.createElement("div");f.id="feuille";f.className="feuille";f.innerHTML=feuille(b);document.body.append(f);
    const bs=[...f.querySelectorAll(".bascule")],fc=f.querySelector(".fc");
    const bascule=o=>{if(o===undefined)o=!f.classList.contains("ouverte");f.classList.toggle("ouverte",o);fc.hidden=!o;bs.forEach(x=>x.setAttribute("aria-expanded",o?"true":"false"));const lb=f.querySelector(".poignee .lib"),ch=f.querySelector(".fl-ch");if(lb)lb.textContent=o?"Masquer les détails":"Voir les détails et les offres";if(ch)ch.textContent=o?"▼":"▲"};
    bs.forEach(x=>x.onclick=()=>bascule());
    let y0=null;
    f.addEventListener("touchstart",e=>{y0=e.touches[0].clientY},{passive:true});
    f.addEventListener("touchend",e=>{if(y0===null)return;const dy=e.changedTouches[0].clientY-y0;y0=null;if(dy<-40)bascule(true);else if(dy>40&&fc.scrollTop<=0)bascule(false)});
    return;
  }
  $("onglets").innerHTML=CATS.map(([k,n])=>`<button role="tab" aria-selected="${k===cat}" data-k="${k}">${n} (${BATEAUX.filter(b=>b.type===k).length})</button>`).join("");
  document.querySelectorAll("#onglets button").forEach(x=>x.onclick=()=>{cat=x.dataset.k;rendre()});
  $("introcat").textContent=CATS.find(x=>x[0]===cat)[2];
  $("bateaux").innerHTML=BATEAUX.filter(b=>b.type===cat).map(b=>b.type==="Yacht"?carteYacht(b):carte(b)).join("");
  document.querySelectorAll("[data-fiche]").forEach(x=>x.onclick=()=>{ouvert=x.dataset.fiche;rendre();scrollTo(0,0)});
}
if($("bateaux"))rendre();
if($("form")){
  $("bateau").innerHTML=BATEAUX.map(b=>`<option>${nomComplet(b)}</option>`).join("")+"<option>Je ne sais pas encore</option>";
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

/* Lien « Connexion » → « Mon compte » quand le client est connecté */
(function(){const l=$("lien-compte");if(!l)return;let ok=false;
try{ok=Object.keys(localStorage).some(k=>/^sb-.*-auth-token$/.test(k))}catch(e){}
if(ok){l.textContent="Mon compte";l.href="compte.html"}})();
