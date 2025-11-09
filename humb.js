
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.onclick = () => {
  burger.classList.toggle('open');
  menu.classList.toggle('hidden');
};

tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        pantograph: ['PantographPro', 'sans-serif'],
      }
    }
  }
}


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
