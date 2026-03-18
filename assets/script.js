
document.addEventListener('click', e => {
  const t = e.target;
  if (t.classList.contains('mobile-toggle')) document.querySelector('.menu').classList.toggle('open');
  if (t.classList.contains('dropbtn')) t.parentElement.classList.toggle('open');
});
