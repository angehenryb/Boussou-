/* Boussou – comptes clients et réservations (Supabase) */
(function(){
const actif=window.supabase&&SUPA.cle&&!SUPA.cle.startsWith("COLLE");
const sb=actif?window.supabase.createClient(SUPA.url,SUPA.cle):null;
const ERR={"Invalid login credentials":"E-mail ou mot de passe incorrect.","User already registered":"Un compte existe déjà avec cet e-mail.","Email not confirmed":"Confirmez d’abord votre adresse e-mail (lien reçu par e-mail)."};
const traduire=m=>ERR[m]||(/at least 6/.test(m)?"Le mot de passe doit contenir au moins 6 caractères.":(/rate limit/i.test(m)?"Trop de tentatives, réessayez dans quelques minutes.":"Une erreur est survenue. Réessayez."));
const dateFr=d=>d?d.split("-").reverse().join("/"):"";
const ETAT={en_attente:["En attente de confirmation","v1"],confirmee:["Confirmée","v0"],annulee:["Annulée","v2"]};
const msg=(el,t,n)=>{el.hidden=false;el.className="verdict v"+n;el.textContent=t};
const pas="Les comptes clients ne sont pas encore activés sur ce site.";

/* --- Page connexion --- */
const f=$("f-auth");
if(f){
  let mode="in";const m=$("a-msg");
  if(!sb){msg(m,pas,1);$("a-ok").disabled=true}
  const set=x=>{mode=x;$("t-in").setAttribute("aria-selected",x==="in");$("t-up").setAttribute("aria-selected",x==="up");
    $("c-nom").hidden=x==="in";$("c-tel").hidden=x==="in";
    $("a-ok").textContent=x==="in"?"Se connecter":"Créer mon compte";
    $("a-mdp").autocomplete=x==="in"?"current-password":"new-password";if(sb)m.hidden=true};
  $("t-in").onclick=()=>set("in");$("t-up").onclick=()=>set("up");
  f.addEventListener("submit",async e=>{
    e.preventDefault();if(!sb)return;
    const email=$("a-mail").value.trim(),pw=$("a-mdp").value;
    $("a-ok").disabled=true;m.hidden=true;
    const r=mode==="in"
      ?await sb.auth.signInWithPassword({email,password:pw})
      :await sb.auth.signUp({email,password:pw,options:{data:{nom:$("a-nom").value.trim(),telephone:$("a-tel").value.trim()}}});
    $("a-ok").disabled=false;
    if(r.error){msg(m,traduire(r.error.message),2);return}
    if(r.data&&r.data.session)location.href="compte.html";
    else msg(m,"Compte créé. Vérifiez votre e-mail pour le confirmer, puis connectez-vous.",0);
  });
}

/* --- Page Mon compte --- */
const corps=$("c-corps");
if(corps){
  const txt=(cl,t)=>{const p=document.createElement("p");p.className=cl;p.textContent=t;return p};
  if(!sb){corps.replaceChildren(txt("mini",pas))}
  else (async()=>{
    const {data:{session}}=await sb.auth.getSession();
    if(!session){location.replace("connexion.html");return}
    const nom=(session.user.user_metadata&&session.user.user_metadata.nom)||"";
    $("c-sub").textContent=(nom?"Bonjour "+nom+". ":"")+"Retrouvez ici vos demandes de réservation.";
    async function charger(){
      const {data,error}=await sb.from("reservations").select("id,date_sortie,statut,message,bateaux(nom)").order("date_sortie",{ascending:false});
      const barre=document.createElement("div");barre.style.cssText="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:20px";
      const a=document.createElement("a");a.className="btn";a.href="contact.html";a.textContent="Nouvelle réservation";
      const b=document.createElement("button");b.className="btn ghost";b.type="button";b.textContent="Se déconnecter";
      b.onclick=async()=>{await sb.auth.signOut();location.href="connexion.html"};
      barre.append(a,b);corps.replaceChildren(barre);
      if(error){corps.append(txt("verdict v2","Impossible de charger vos réservations."));return}
      if(!data.length){corps.append(txt("mini","Aucune réservation pour le moment."));return}
      data.forEach(r=>{
        const c=document.createElement("div");c.className="carte";c.style.marginBottom="12px";
        const h=document.createElement("h3");h.textContent=(r.bateaux&&r.bateaux.nom)||"Bateau";
        const [lib,cl]=ETAT[r.statut]||[r.statut,"v1"];
        const e=document.createElement("span");e.className="etat "+cl;e.textContent=lib;
        c.append(h,e,txt("",  "Date : "+dateFr(r.date_sortie)));
        if(r.message)c.append(txt("mini",r.message));
        if(r.statut==="en_attente"){
          const x=document.createElement("button");x.className="btn ghost";x.type="button";x.textContent="Annuler";x.style.marginTop="10px";
          x.onclick=async()=>{x.disabled=true;await sb.from("reservations").update({statut:"annulee"}).eq("id",r.id);charger()};
          c.append(x);
        }
        corps.append(c);
      });
    }
    charger();
  })();
}

/* --- Formulaire de contact : enregistre aussi la demande si le client est connecté --- */
const form=$("form"),note=$("note-compte");
if(form&&note&&sb){
  sb.auth.getSession().then(({data:{session}})=>{
    if(!session)note.innerHTML='<a href="connexion.html">Connectez-vous</a> pour retrouver vos demandes dans Mon compte.';
  });
  form.addEventListener("submit",async()=>{
    const {data:{session}}=await sb.auth.getSession();
    if(!session)return;
    const j=$("jour").value,nomBateau=$("bateau").value.split(" (")[0];
    const {data:liste}=await sb.from("bateaux").select("id,nom");
    const b=(liste||[]).find(x=>x.nom===nomBateau);
    if(!b||!j){note.textContent="Pour l’enregistrer dans Mon compte, choisissez un bateau et une date.";return}
    const {error}=await sb.from("reservations").insert({bateau_id:b.id,date_sortie:j,message:$("msg").value.trim()||null});
    note.textContent=error?"Votre message est parti sur WhatsApp, mais il n’a pas pu être enregistré dans Mon compte.":"Votre demande est aussi enregistrée dans Mon compte.";
  });
}
})();
