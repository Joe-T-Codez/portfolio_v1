
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
    console.log('timeElapsed:' + timeElapsed + 'duration' + duration);

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
  smoothScroll('.about-section',1000)
});
contact.addEventListener('click',function(){
  smoothScroll('.contact-text',1000)
});
projects.addEventListener('click',function(){
  smoothScroll('.project-section',1000)
});
skills.addEventListener('click',function(){
  smoothScroll('.skills-section',1000)
});



//////////////////////////////typewriter effect////////////////////////////////////////////
const TypeWriter=function(txtElement,words,wait=3000){
  this.txtElement=txtElement;
  this.words=words;
  this.txt='';
  this.wordIndex=0;
  this.wait=parseInt(wait,10);
  this.type();
  this.isDeleting=false;
}
TypeWriter.prototype.type=function(){
const current = this.wordIndex % this.words.length;
const fullTxt=this.words[current];
if(this.isDeleting){
  this.txt=fullTxt.substring(0,this.txt.length - 1);

}else{
  this.txt=fullTxt.substring(0,this.txt.length + 1);

}
this.txtElement.innerHTML=`<span class="txt">${this.txt}</span>`

let typeSpeed =300;
if(this.isDeleting){
  typeSpeed /=2;
}
if(!this.isDeleting && this.txt===fullTxt){
  typeSpeed=this.wait;
  this.isDeleting=true;
}else if(this.isDeleting && this.txt===''){
  this.isDeleting=false;
  this.wordIndex++;
  typeSpeed=500;
}

  setTimeout(()=>this.type(),typeSpeed)
}
document.addEventListener('DOMContentLoaded',init);

function init(){
  const txtElement=document.querySelector('.txt-type');
  const words=JSON.parse(txtElement.getAttribute('data-words'));
  const wait=txtElement.getAttribute('data-wait');
  new TypeWriter(txtElement,words,wait);
}
//////////////////////////HAMBURGER MENU////////////////////////////////////////
const menuBtn=document.querySelector('.menu-btn');

let menuOpen=false;
menuBtn.addEventListener('click',function(){
  if(!menuOpen){
menuBtn.classList.add('open');
    menuOpen=true;
     }
  else
  {
  menuBtn.classList.remove('open');
    menuOpen=false;
          }

}
)
