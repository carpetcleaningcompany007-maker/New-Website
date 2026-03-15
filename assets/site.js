
document.getElementById('year')?.append(new Date().getFullYear());
document.querySelectorAll('[data-fade]').forEach((el,i)=>{
  el.style.opacity='0';
  el.style.transform='translateY(18px)';
  setTimeout(()=>{
    el.style.transition='opacity .7s ease, transform .7s ease';
    el.style.opacity='1';
    el.style.transform='translateY(0)';
  }, 120 + (i*60));
});
