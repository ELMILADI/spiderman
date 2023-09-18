const toggleButton = document.getElementsByClassName('burger-menu')[0]
const navbarLinks = document.getElementsByClassName('nav-links')[0]
toggleButton.addEventListener('click' , () => {
  navbarLinks.classList.toggle('active')
})

/*Slider from chatgpt*/

const slides = document.querySelector('.slides');
let index = 0;

function nextSlide() {
  index = (index + 1) % slides.children.length;
  updateSlider();
}

function prevSlide() {
  index = (index - 1 + slides.children.length) % slides.children.length;
  updateSlider();
}

function updateSlider() {
  const offset = -index * 100;
  slides.style.transform = `translateX(${offset}%)`;
}

// Optional: Auto slide change
setInterval(nextSlide, 4000);

