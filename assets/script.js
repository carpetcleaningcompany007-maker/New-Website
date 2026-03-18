
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (btn && nav) btn.addEventListener('click', () => {const open=nav.classList.toggle('open');btn.setAttribute('aria-expanded', open?'true':'false');});
  const form = document.querySelector('#quote-form');
  if (form) form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const lines = [`Name: ${data.get('name')||''}`,`Phone: ${data.get('phone')||''}`,`Email: ${data.get('email')||''}`,`Town: ${data.get('town')||''}`,`Service: ${data.get('service')||''}`,`Property Type: ${data.get('property')||''}`,`Message: ${data.get('message')||''}`];
    const subject = encodeURIComponent(`Quote Request - ${data.get('town') || 'JW Carpet Care website'}`);
    const body = encodeURIComponent(lines.join('\n'));
    window.location.href = `mailto:infojwcarpetcare@gmail.com?subject=${subject}&body=${body}`;
  });
});
