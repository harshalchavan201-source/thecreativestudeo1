const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.textContent=open?'×':'☰';});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.textContent='☰';}));
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));button.classList.add('active');const filter=button.dataset.filter;document.querySelectorAll('.project-card').forEach(card=>{card.classList.toggle('hidden',filter!=='all'&&card.dataset.kind!==filter);});}));
document.querySelectorAll('video').forEach(video=>video.addEventListener('play',()=>{document.querySelectorAll('video').forEach(other=>{if(other!==video)other.pause();});}));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('contactForm').addEventListener('submit',event=>{event.preventDefault();const data=new FormData(event.currentTarget);const recipient='harshalchavan1001@gmail.com';const subject=encodeURIComponent('Project enquiry — '+data.get('project'));const body=encodeURIComponent('Name: '+data.get('name')+'\nEmail: '+data.get('email')+'\nProject: '+data.get('project')+'\n\nMessage:\n'+data.get('message'));window.location.href=`mailto:${recipient}?subject=${subject}&body=${body}`;});
