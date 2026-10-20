const menuToggle=document.querySelector('.menu-toggle'),navLinks=document.querySelector('.nav-links');
menuToggle?.addEventListener('click',()=>navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const modal=document.getElementById('modal'), content=document.getElementById('modal-content');
const data={
 school:{label:'PROJET SCOLAIRE · BTS SIO SISR',title:"Gestion du parc informatique d'un lycée",text:"Mise en situation professionnelle dans laquelle je joue le rôle d'un informaticien chargé de participer à la gestion du parc informatique d'un lycée.",items:["Installation des ordinateurs","Configuration des postes informatiques","Gestion et suivi des PC","Installation et gestion des logiciels","Configuration et gestion des adresses IP","Identification des équipements grâce aux numéros de série"]},
 games:{label:'PROJET PERSONNEL',title:'Création de jeux vidéo',text:"Développement de projets de jeux vidéo pour pratiquer la conception, la logique et l'utilisation de moteurs de création.",items:["GDevelop","Unity","Conception de projets personnels"]},
 web:{label:'PROJET PERSONNEL',title:'Création de sites web',text:"Création de sites web personnels pour pratiquer le développement côté client et construire des interfaces.",items:["HTML5","CSS","JavaScript","Structuration et mise en forme de pages web"]},
 csharp:{label:'PROJET EN COURS · BTS SIO SISR',title:'Application de calcul en C#',text:"Développement en cours d'une application graphique en C# permettant d'effectuer des opérations sur deux nombres.",items:["Addition de deux nombres","Multiplication de deux nombres","Création d'une interface graphique","Programmation en C#"]}
};
document.querySelectorAll('.details-btn').forEach(btn=>btn.addEventListener('click',()=>{const d=data[btn.dataset.modal];content.innerHTML=`<p class="eyebrow">${d.label}</p><h3>${d.title}</h3><p>${d.text}</p><ul>${d.items.map(x=>`<li>${x}</li>`).join('')}</ul>`;modal.classList.add('open')}));
document.querySelector('.modal-close').addEventListener('click',()=>modal.classList.remove('open'));
modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('open')});
document.addEventListener('keydown',e=>{if(e.key==='Escape')modal.classList.remove('open')});

document.getElementById('contact-form').addEventListener('submit',e=>{
 e.preventDefault(); const f=new FormData(e.currentTarget);
 const subject=encodeURIComponent('Contact depuis mon portfolio');
 const body=encodeURIComponent(`Bonjour Pierre-Olivier,\n\nNom : ${f.get('name')}\nEmail : ${f.get('email')}\n\n${f.get('message')}`);
 window.location.href=`mailto:Pierreoliviernicot@gmail.com?subject=${subject}&body=${body}`;
});
