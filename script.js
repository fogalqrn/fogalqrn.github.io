// reveal animation
const items=document.querySelectorAll('.reveal');
const obs=new IntersectionObserver(e=>{
  e.forEach(x=>x.isIntersecting&&x.target.classList.add('active'))
},{threshold:.2});
items.forEach(i=>obs.observe(i));

// language toggle
let ar=false;
const btn=document.getElementById('langBtn');
const heroLogo=document.getElementById('heroLogo');

btn.onclick=()=>{
  ar=!ar;
  btn.innerText=ar?'EN':'AR';

  heroLogo.src=ar
    ? 'FogAlqrn-color1-proto3ARB-TP.png'
    : 'FogAlqrn-color1-proto4ENG-TP.png';

  document.querySelectorAll('[data-en]').forEach(el=>{
    el.innerText=ar?el.dataset.ar:el.dataset.en;
  });

  document.documentElement.dir=ar?'rtl':'ltr';
};
