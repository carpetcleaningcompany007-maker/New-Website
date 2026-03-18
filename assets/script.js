
const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
if(menuToggle && siteNav){
  menuToggle.addEventListener('click', ()=>{
    const open = siteNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
document.querySelectorAll('.dropbtn').forEach(btn=>{
  btn.addEventListener('click', e=>{
    if(window.innerWidth <= 760){
      e.preventDefault();
      btn.parentElement.classList.toggle('open');
    }
  });
});

const form = document.querySelector('[data-quote-form]');
if(form){
  form.addEventListener('submit', e=>{
    e.preventDefault();
    const fd = new FormData(form);
    const body = [
      `Name: ${fd.get('name') || ''}`,
      `Phone: ${fd.get('phone') || ''}`,
      `Email: ${fd.get('email') || ''}`,
      `Postcode / area: ${fd.get('postcode') || ''}`,
      `Service needed: ${fd.get('service') || ''}`,
      '',
      'What needs cleaning:',
      `${fd.get('message') || ''}`
    ].join('\n');
    const subject = encodeURIComponent('Quote Request - JW Carpet Care');
    const mailto = `mailto:infojwcarpetcare@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  });
}
