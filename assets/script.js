
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  document.querySelectorAll('[data-quote-form]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get('name') || '';
      const phone = data.get('phone') || '';
      const email = data.get('email') || '';
      const postcode = data.get('postcode') || '';
      const service = data.get('service') || '';
      const message = data.get('message') || '';
      const subject = encodeURIComponent(`Quote Request - ${service || 'JW Carpet Care'}`);
      const body = encodeURIComponent(
`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nPostcode / Area: ${postcode}\nService Needed: ${service}\n\nDetails:\n${message}`
      );
      window.location.href = `mailto:infojwcarpetcare@gmail.com?subject=${subject}&body=${body}`;
    });
  });
});
