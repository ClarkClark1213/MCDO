
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


