
document.getElementById('year')?.append(new Date().getFullYear());
const io = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){ entry.target.classList.add('show'); }
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
