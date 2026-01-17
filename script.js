// smooth fade
const fades=document.querySelectorAll('.fade');
const io=new IntersectionObserver(e=>{
e.forEach(x=>x.isIntersecting&&x.target.classList.add('show'))
},{threshold:.15});
fades.forEach(i=>io.observe(i));

// language + favicon
let ar=false;
const fav=document.getElementById('favicon');
const btn=document.getElementById('langBtn');

btn.onclick=()=>{
ar=!ar;
btn.innerText=ar?'EN':'ع';
document.querySelectorAll('[data-en]').forEach(el=>{
el.innerText=ar?el.dataset.ar:el.dataset.en;
});
document.documentElement.dir=ar?'rtl':'ltr';
fav.href=ar
?'FogAlqrn-color1-proto3ARB-TP.png'
:'FogAlqrn-color1-proto4ENG-TP.png';
};
