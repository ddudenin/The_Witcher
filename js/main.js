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

PlayButton.addEventListener('click', function(){
  if (audio.paused){
    audio.play();

    if(!audio.classList.contains('img-display'))
    {
      audio.classList.toggle('img-display');
      audio.classList.toggle('img-nodisplay');
    }
  }
  else{
    audio.classList.toggle('img-display');
    audio.classList.toggle('img-nodisplay');

    audio.pause();
  }
})

audio.addEventListener('pause', PlayPause)
audio.addEventListener('play', PlayPause)

function PlayPause(){
   PlayImg.classList.toggle('img-display');
   PlayImg.classList.toggle('img-nodisplay');
  
   PauseImg.classList.toggle('img-display');
   PauseImg.classList.toggle('img-nodisplay');
}

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
