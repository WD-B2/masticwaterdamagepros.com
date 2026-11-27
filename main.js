(function(){
var root=document.documentElement;
function closeNav(){root.classList.remove('nav-open');var t=document.querySelector('.nav-toggle');if(t){t.setAttribute('aria-expanded','false');}}
var t=document.querySelector('.nav-toggle');
if(t){t.addEventListener('click',function(){root.classList.add('nav-open');t.setAttribute('aria-expanded','true');});}
var o=document.querySelector('.mob-overlay');if(o){o.addEventListener('click',closeNav);}
var c=document.querySelector('.mob-close');if(c){c.addEventListener('click',closeNav);}
document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeNav();}});
window.addEventListener('resize',function(){if(window.innerWidth>768){closeNav();}});
var qs=document.querySelectorAll('.faq-q');
for(var i=0;i<qs.length;i++){qs[i].addEventListener('click',function(){
var item=this.parentNode;var a=item.querySelector('.faq-a');var open=item.classList.contains('open');
if(open){item.classList.remove('open');a.style.maxHeight='0px';this.setAttribute('aria-expanded','false');}
else{item.classList.add('open');a.style.maxHeight=a.scrollHeight+'px';this.setAttribute('aria-expanded','true');}
});}
})();
