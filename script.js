// reveal animation
const items=document.querySelectorAll('.reveal');
const obs=new IntersectionObserver(e=>{
  e.forEach(x=>x.isIntersecting&&x.target.classList.add('active'))
},{threshold:.2});
items.forEach(i=>obs.observe(i));

// language toggle
let ar=false;
document.getElementById('langBtn').onclick=()=>{
  ar=!ar;
  document.getElementById('langBtn').innerText=ar?'EN':'AR';
  document.querySelectorAll('[data-en]').forEach(el=>{
    el.innerText=ar?el.dataset.ar:el.dataset.en;
  });
  document.documentElement.dir=ar?'rtl':'ltr';
};
