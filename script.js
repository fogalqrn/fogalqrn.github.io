/* ===============================
   REVEAL ON SCROLL
================================ */
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach(el => revealObserver.observe(el));


/* ===============================
   LANGUAGE TOGGLE + TRANSITIONS
================================ */
let isArabic = false;

const langBtn  = document.getElementById('langBtn');
const navLogo  = document.getElementById('navLogo');
const favicon  = document.getElementById('favicon');
const heroLogo = document.querySelector('.hero-logo');

function switchLanguage() {
  // fade out
  document.body.style.transition = 'opacity .25s ease';
  document.body.style.opacity = '0';

  setTimeout(() => {
    isArabic = !isArabic;

    // button label
    langBtn.innerText = isArabic ? 'EN' : 'ع';

    // text swap
    document.querySelectorAll('[data-en]').forEach(el => {
      el.innerText = isArabic ? el.dataset.ar : el.dataset.en;
    });

    // direction
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';

    // logo + favicon
    const logoSrc = isArabic
      ? 'FogAlqrn-color1-proto3ARB-TP.png'
      : 'FogAlqrn-color1-proto4ENG-TP.png';

    navLogo.src = logoSrc;
    favicon.href = logoSrc;

    // optional hero fade refresh
    if (heroLogo) {
      heroLogo.style.opacity = '0';
      setTimeout(() => heroLogo.style.opacity = '1', 50);
    }

    // fade in
    document.body.style.opacity = '1';
  }, 250);
}

langBtn.addEventListener('click', switchLanguage);


/* ===============================
   NAV LOGO → SCROLL TO TOP
================================ */
navLogo.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


/* ===============================
   OPTIONAL: SMOOTH NAV SCROLL
================================ */
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
