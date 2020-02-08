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
var audio = document.querySelector('.audio-src');

var radio = new Audio();
radio.src = audio.src;

PlayButton.addEventListener('click', function(){
  if (radio.paused == true)
  {
    PlayImg.src = "../img/pause.png"
    radio.play();
  }
  else{
    PlayImg.src = "../img/play.svg"
    radio.pause();
  }
})