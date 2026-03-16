
document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());
const io=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show');});},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

document.querySelectorAll('[data-ba]').forEach((wrap)=>{
  const range = wrap.querySelector('input[type="range"]');
  const after = wrap.querySelector('.ba-after');
  const line = wrap.querySelector('.ba-handle');
  const knob = wrap.querySelector('.ba-knob');
  const sync = () => {
    const v = range.value + '%';
    after.style.clipPath = `inset(0 0 0 ${v})`;
    line.style.left = v;
    knob.style.left = v;
  };
  range.addEventListener('input', sync);
  sync();
});
