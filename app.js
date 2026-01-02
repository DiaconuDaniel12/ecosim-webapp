const navItems = document.querySelectorAll(".navitem");
navItems.forEach(el=>{
  el.addEventListener("click", (e)=>{
    e.preventDefault();
    const target = document.getElementById(el.dataset.target);
    if (target) target.scrollIntoView({behavior:"smooth", block:"start"});
  });
});
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    const id = entry.target.id;
    const nav = document.querySelector('.navitem[data-target="'+id+'"]');
    if (nav) nav.classList.toggle("active", entry.isIntersecting && entry.intersectionRatio>0.35);
  });
}, {threshold:[0.35]});
document.querySelectorAll("main section").forEach(sec=>observer.observe(sec));
