'use strict';
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const calm=matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---- Header state ---- */
const header=$('.site-header');
if(header){const f=()=>{header.classList.toggle('is-scrolled',scrollY>8);document.body.classList.toggle('dock-on',scrollY>520)};f();addEventListener('scroll',f,{passive:true})}

/* ---- Mobile menu ---- */
const menu=$('.menu-toggle'),nav=$('#main-nav'),label=$('.menu-label');
function setMenu(open){menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);document.body.classList.toggle('menu-open',open);document.body.classList.toggle('is-locked',open);label.textContent=open?'Sluiten':'Menu'}
menu.addEventListener('click',()=>setMenu(menu.getAttribute('aria-expanded')!=='true'));
nav.addEventListener('click',e=>{if(e.target.closest('a')&&nav.classList.contains('is-open'))setMenu(false)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('is-open')){setMenu(false);menu.focus()}});
matchMedia('(min-width:901px)').addEventListener('change',e=>{if(e.matches)setMenu(false)});

/* ---- Dialog + image viewer ---- */
const dialog=$('#viewer'),content=$('#dialog-content');
function show(node){content.replaceChildren(node);if(!dialog.open)dialog.showModal();document.body.classList.add('is-locked')}
dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('close',()=>{if(!nav.classList.contains('is-open'))document.body.classList.remove('is-locked');content.replaceChildren()});
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
const chevron=d=>{const s=document.createElementNS('http://www.w3.org/2000/svg','svg');s.setAttribute('viewBox','0 0 16 16');s.setAttribute('aria-hidden','true');const p=document.createElementNS('http://www.w3.org/2000/svg','path');p.setAttribute('d',d);p.setAttribute('fill','none');p.setAttribute('stroke','currentColor');p.setAttribute('stroke-width','1.6');s.append(p);return s};
let viewing=[],at=0;
function showImage(i){
  at=(i+viewing.length)%viewing.length;
  const b=viewing[at],box=document.createElement('div'),img=document.createElement('img'),cap=document.createElement('p'),text=document.createElement('span'),count=document.createElement('span');
  box.className='viewer-fig';img.src=b.dataset.image;img.alt=b.dataset.caption;text.textContent=b.dataset.caption;count.textContent=viewing.length>1?(at+1)+' / '+viewing.length:'';
  cap.append(text,count);box.append(img,cap);
  if(viewing.length>1)[['prev','Vorig beeld','M10 2L4 8l6 6',-1],['next','Volgend beeld','M6 2l6 6-6 6',1]].forEach(([k,aria,d,step])=>{const n=document.createElement('button');n.type='button';n.className='viewer-nav viewer-nav--'+k;n.setAttribute('aria-label',aria);n.append(chevron(d));n.addEventListener('click',()=>showImage(at+step));box.append(n)});
  show(box);
}
$$('[data-image]').forEach(b=>b.addEventListener('click',()=>{viewing=$$('[data-image]').filter(x=>!x.closest('[hidden]'));showImage(viewing.indexOf(b))}));
dialog.addEventListener('keydown',e=>{if(viewing.length>1&&content.querySelector('.viewer-fig')){if(e.key==='ArrowRight')showImage(at+1);if(e.key==='ArrowLeft')showImage(at-1)}});

/* ---- Gallery filter ---- */
$$('[data-filter]').forEach(b=>b.addEventListener('click',()=>{$$('[data-filter]').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b))});$$('[data-group]').forEach(x=>{x.hidden=b.dataset.filter!=='all'&&x.dataset.group!==b.dataset.filter})}));

/* ---- Contact channels (demo) ---- */
$$('[data-channel]').forEach(b=>b.addEventListener('click',()=>{const box=document.createElement('div');box.className='dialog-text';const title=document.createElement('h2'),p=document.createElement('p'),a=document.createElement('a');title.textContent=b.dataset.channel+' via Hydrocare';p.textContent='Dit contactkanaal wordt aangesloten zodra Daan het juiste '+(b.dataset.channel==='WhatsApp'?'WhatsApp-nummer':'Facebook-account')+' heeft bevestigd. In deze preview wordt geen bericht verstuurd.';a.className='button';a.href='/contact/#quote-form';a.textContent='Bekijk het demoformulier';box.append(title,p,a);show(box)}));

/* ---- Quote form (demo only: nothing is sent or stored) ---- */
const form=$('#quote-form');
if(form){const input=$('#photos'),list=$('#file-list'),error=$('#file-error');let files=[];
  function render(){list.replaceChildren();files.forEach((f,i)=>{const row=document.createElement('div'),name=document.createElement('span'),remove=document.createElement('button');row.className='file-item';name.textContent=f.name+' · '+(f.size/1048576).toFixed(1)+' MB';remove.type='button';remove.textContent='Verwijderen';remove.setAttribute('aria-label',f.name+' verwijderen');remove.onclick=()=>{files.splice(i,1);render()};row.append(name,remove);list.append(row)})}
  input.addEventListener('change',()=>{error.textContent='';for(const f of input.files){if(files.length>=5){error.textContent='U kunt maximaal 5 foto’s toevoegen.';break}if(f.size>10*1048576){error.textContent='Een foto is groter dan 10 MB en werd niet toegevoegd.';continue}if(!/\.(jpe?g|png|webp|heic|heif)$/i.test(f.name)){error.textContent='Kies een JPG-, PNG-, WebP- of HEIC-foto.';continue}if(!files.some(x=>x.name===f.name&&x.size===f.size))files.push(f)}input.value='';render()});
  form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const box=document.createElement('div');box.className='dialog-text';const title=document.createElement('h2'),p=document.createElement('p'),dl=document.createElement('dl');title.textContent='Zo ziet uw demoaanvraag eruit.';p.textContent='Dit is een demonstratie. Uw aanvraag is niet verstuurd en wordt niet opgeslagen.';
    for(const [label,name] of [['Naam','naam'],['E-mailadres','email'],['Telefoonnummer','telefoon'],['Postcode en gemeente','gemeente'],['Onderwerp','dienst'],['Beschrijving','beschrijving']]){const dt=document.createElement('dt'),dd=document.createElement('dd');dt.textContent=label;dd.textContent=form.elements[name].value||'Niet ingevuld';dl.append(dt,dd)}
    const dt=document.createElement('dt'),dd=document.createElement('dd');dt.textContent='Foto’s';dd.textContent=files.length?files.map(f=>f.name).join(', '):'Geen foto’s geselecteerd';dl.append(dt,dd);box.append(title,p,dl);show(box)})}

/* ---- Scroll reveals ---- */
const reveals=$$('.reveal');
if(reveals.length){
  if(calm||!('IntersectionObserver' in window)){document.documentElement.classList.add('js');reveals.forEach(r=>r.classList.add('in'))}
  else{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -6% 0px',threshold:.06});reveals.forEach(r=>io.observe(r));document.documentElement.classList.add('js')}
}
