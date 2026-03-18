
document.querySelector('.menu-toggle')?.addEventListener('click', function(){
  const nav = document.getElementById('site-nav');
  const open = nav.classList.toggle('open');
  this.setAttribute('aria-expanded', open ? 'true' : 'false');
});
document.querySelectorAll('.dropbtn').forEach(btn => {
  btn.addEventListener('click', function(e){
    e.preventDefault();
    const parent = this.parentElement;
    document.querySelectorAll('.dropdown').forEach(dd => { if(dd!==parent) dd.classList.remove('open'); });
    parent.classList.toggle('open');
  });
});
document.addEventListener('click', function(e){
  if(!e.target.closest('.dropdown')) document.querySelectorAll('.dropdown').forEach(dd => dd.classList.remove('open'));
});
document.querySelectorAll('[data-quote-form]').forEach(form => {
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const data = new FormData(form);
    const body = [
      'Name: ' + (data.get('name') || ''),
      'Phone: ' + (data.get('phone') || ''),
      'Email: ' + (data.get('email') || ''),
      'Area/Postcode: ' + (data.get('postcode') || ''),
      'Service needed: ' + (data.get('service') || ''),
      '',
      'Details:',
      (data.get('message') || '')
    ].join('\n');
    const url = 'mailto:infojwcarpetcare@gmail.com?subject=' + encodeURIComponent('Quote request - JW Carpet Care') + '&body=' + encodeURIComponent(body);
    window.location.href = url;
  });
});
