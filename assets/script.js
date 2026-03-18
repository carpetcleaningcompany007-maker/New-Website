
const menu = document.querySelector('.menu');
const toggle = document.querySelector('.mobile-toggle');

function closeAllDrops(except=null){
  document.querySelectorAll('.drop.open').forEach(drop=>{
    if(drop!==except) drop.classList.remove('open');
  });
}

if(toggle && menu){
  toggle.addEventListener('click', e => {
    e.stopPropagation();
    menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', menu.classList.contains('open') ? 'true' : 'false');
  });
}

document.querySelectorAll('.dropbtn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    const drop = btn.parentElement;
    if(window.innerWidth <= 760){
      const willOpen = !drop.classList.contains('open');
      closeAllDrops(drop);
      drop.classList.toggle('open', willOpen);
    }
  });
});

document.addEventListener('click', e => {
  if(menu && menu.classList.contains('open') && !menu.contains(e.target) && e.target !== toggle){
    menu.classList.remove('open');
    if(toggle) toggle.setAttribute('aria-expanded','false');
  }
  if(!e.target.closest('.drop')) closeAllDrops();
});

window.addEventListener('resize', () => {
  if(window.innerWidth > 760){
    if(menu) menu.classList.remove('open');
    if(toggle) toggle.setAttribute('aria-expanded','false');
    closeAllDrops();
  }
});
