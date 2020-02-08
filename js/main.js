var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.arrow',
  },
  breakpoints: {
    650 : {
      slidesPerView: 2,
    },

    700 : {
      slidesPerView: 3,
    }
  }
});

var menuButton = document.querySelector('.menu-button');
var menu = document.querySelector('.header');
menuButton.addEventListener('click', function (){
  menuButton.classList.toggle('menu-button-active');
  menu.classList.toggle('header-active');
})


var PlayButton = document.querySelector('.play');
var PlayImg = document.querySelector('.play-img');
var PauseImg = document.querySelector('.pause-img');
var audio = document.querySelector('.audio-src');

var radio = new Audio();
radio.src = audio.src;

PlayButton.addEventListener('click', function(){
  PlayImg.classList.toggle('img-display');
  PlayImg.classList.toggle('img-nodisplay');

  PauseImg.classList.toggle('img-display');
  PauseImg.classList.toggle('img-nodisplay');
  
  if (radio.paused)
  {
    radio.play();
  }
  else{
    radio.pause();
  }
})

var Button = document.querySelector('.button');
var Link = document.querySelector('.menu-list');
var Slider = document.querySelector('.swiper-wrapper');

Button.addEventListener('click', PauseAudio)
Link.addEventListener('click', PauseAudio)
Slider.addEventListener('click', PauseAudio)

function PauseAudio(){
  if (!radio.paused){
   PlayImg.classList.toggle('img-display');
   PlayImg.classList.toggle('img-nodisplay');
  
   PauseImg.classList.toggle('img-display');
   PauseImg.classList.toggle('img-nodisplay');
   
   radio.pause();
  }
}
