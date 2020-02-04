/////////////////////////Animation appear on Scroll//////////////////////
const faders=document.querySelectorAll("#fade-in");

const appearOptions={
  threshold:1
};
const appearOnScroll=new IntersectionObserver
(function(entries,appearOnScroll){
  entries.forEach(entry=>{
    if(!entry.isIntersecting){
      return;
    }else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  })
},appearOptions);


faders.forEach(fader =>{
  appearOnScroll.observe(fader);
})
//////////////////////////// Animation Smooth Scrolling/////////////////////////////////////////////////
function smoothScroll(target,duration){
  var target= document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance=targetPosition-startPosition;
  var startTime = null;
  var optimizer=150;

  function animation(currentTime){
    if (startTime === null) startTime =currentTime;
    var timeElapsed =currentTime -startTime;
    var run = ease (timeElapsed, startPosition, distance, duration);
    window.scrollTo(0,run);
    if (timeElapsed < duration) requestAnimationFrame(animation);

  }
  function ease(t,b,c,d){
    t /= d/2;
    if (t<1) return c/2 * t *t +b-optimizer;
    t--;
    return -c /2 *(t*(t-2)-1)+b-optimizer;
  }
  requestAnimationFrame(animation);
}


var home =document.querySelector('.home');
var about =document.querySelector('.about');
var contact =document.querySelector('.contact');
var projects =document.querySelector('.projects');
var skills =document.querySelector('.skills');


home.addEventListener('click',function(){
  smoothScroll('.home',1000)
});
about.addEventListener('click',function(){
  smoothScroll('.about1',1000)
});
contact.addEventListener('click',function(){
  smoothScroll('.contact1',1000)
});
projects.addEventListener('click',function(){
  smoothScroll('.projects1',1000)
});
skills.addEventListener('click',function(){
  smoothScroll('.skills1',1000)
});
//////////////////////////////////////////////////////////////////////////
