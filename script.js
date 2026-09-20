const nav=document.querySelector('.nav');const menuToggle=document.querySelector('.menu-toggle');
menuToggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',open?'true':'false')});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuToggle?.setAttribute('aria-expanded','false')}));

document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;document.querySelectorAll('.work-card').forEach(card=>{card.classList.toggle('hidden',f!=='all'&&card.dataset.category!==f)})}));

const modal=document.getElementById('projectModal'),frame=document.getElementById('modalFrame'),modalUrl=document.getElementById('modalUrl');
function openModal(src){frame.src=src;modalUrl.textContent=src.startsWith('http')?new URL(src).hostname:src;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');frame.src='about:blank';document.body.style.overflow=''}
document.querySelectorAll('[data-open]').forEach(btn=>btn.addEventListener('click',e=>{e.preventDefault();openModal(btn.dataset.open)}));
document.querySelectorAll('.browser-frame').forEach(card=>card.addEventListener('click',()=>openModal(card.dataset.url||card.dataset.local)));
document.querySelectorAll('[data-close-modal]').forEach(el=>el.addEventListener('click',closeModal));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))closeModal()});

const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');io.unobserve(entry.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

document.getElementById('year').textContent=new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target);const subject=`VIXLL project enquiry — ${f.get('business')}`;const body=[`Name: ${f.get('name')}`,`Business / project: ${f.get('business')}`,`Need: ${f.get('need')}`,``,`Context:`,f.get('message')||'(not provided)'].join('\n');window.location.href=`mailto:vixllsupport@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`});
