var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.arrow',
  },
  breakpoints: {
    540 : {
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

var radio = new Audio();
radio.src = "/audio/Lutik.mp3";

document.querySelector('.play').onclick = function()
{
  if (radio.paused == true)
  {
    radio.play();
  }
  else{
    radio.pause();
  }
}