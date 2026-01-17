// reveal animation
const items=document.querySelectorAll('.reveal');
const obs=new IntersectionObserver(e=>{
  e.forEach(x=>x.isIntersecting&&x.target.classList.add('active'))
},{threshold:.2});
items.forEach(i=>obs.observe(i));

// language toggle + smooth fade
let ar=false;
const navLogo=document.getElementById('navLogo');
const fav=document.getElementById('favicon');
const btn=document.getElementById('langBtn');

btn.onclick=()=>{
  document.body.style.opacity='0';
  setTimeout(()=>{
    ar=!ar;
    btn.innerText=ar?'EN':'ع';
    document.querySelectorAll('[data-en]').forEach(el=>{
      el.innerText=ar?el.dataset.ar:el.dataset.en;
    });
    document.documentElement.dir=ar?'rtl':'ltr';

    navLogo.src=ar
      ?'FogAlqrn-color1-proto3ARB-TP.png'
      :'FogAlqrn-color1-proto4ENG-TP.png';

    fav.href=ar
      ?'FogAlqrn-color1-proto3ARB-TP.png'
      :'FogAlqrn-color1-proto4ENG-TP.png';

    document.body.style.opacity='1';
  }, 200);
};
