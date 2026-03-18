document.addEventListener('DOMContentLoaded',()=>{
  const t=document.querySelector('.mobile-toggle');
  const m=document.querySelector('.menu');
  if(t&&m){t.addEventListener('click',()=>m.classList.toggle('open'));}
  document.querySelectorAll('.dropbtn').forEach(btn=>btn.addEventListener('click',e=>{
    if(window.innerWidth>760)return; e.preventDefault(); btn.parentElement.classList.toggle('open');
  }));
});
