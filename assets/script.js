
document.addEventListener('DOMContentLoaded', () => {
  const mobileToggle = document.querySelector('.mobile-toggle');
  const menu = document.querySelector('.menu');
  const drops = document.querySelectorAll('.drop');
  if (mobileToggle && menu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }
  drops.forEach(drop => {
    const btn = drop.querySelector('.dropbtn');
    if (!btn) return;
    btn.addEventListener('click', (e) => {
      if (window.innerWidth <= 820) {
        e.preventDefault();
        drop.classList.toggle('open');
      }
    });
  });
});
