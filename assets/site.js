
document.addEventListener('DOMContentLoaded', function(){
  document.documentElement.classList.add('is-ready');
  const toggles = document.querySelectorAll('[data-nav-toggle]');
  toggles.forEach(btn=>{
    btn.addEventListener('click', function(e){
      const dd = btn.closest('.dropdown');
      if(!dd) return;
      if(window.innerWidth < 1024){
        e.preventDefault();
        dd.classList.toggle('open');
      }
    });
  });
  const phone = document.getElementById("phoneField");
  const email = document.getElementById("emailField");
  const wrap = document.getElementById("extraFields");
  if (phone && email && wrap) {
    function shouldOpen() { return phone.value.trim().length >= 8 && email.value.trim().length > 0 && email.checkValidity(); }
    function sync() { wrap.classList.toggle("is-open", shouldOpen()); }
    ["input","blur","change"].forEach(evt => { phone.addEventListener(evt, sync); email.addEventListener(evt, sync); });
    sync();
  }
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();
});
async function submitQuote(e, form) {
  e.preventDefault();
  const btn = document.getElementById("submitBtn");
  const oldText = btn ? btn.textContent : "";
  if (btn) { btn.disabled = true; btn.textContent = "Sending..."; }
  try {
    const res = await fetch(form.action, { method: "POST", body: new FormData(form), headers: { "Accept": "application/json" } });
    if (!res.ok) throw new Error("Formspree submit failed");
    window.location.href = (document.body.getAttribute('data-root') || '.') + "/thank-you.html";
  } catch (err) {
    alert("Sorry, it didn’t send. Please try again, or call 07802 563213.");
    if (btn) { btn.disabled = false; btn.textContent = oldText || "Get my quote"; }
  }
}
