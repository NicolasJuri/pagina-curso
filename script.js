const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;
let slideInterval;

function startCarousel() {
  slideInterval = setInterval(nextSlide, 5000); // Cambia cada 5 segundos
}

function nextSlide() {
  slides[currentSlide].style.display = 'none';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = 'block';
}

function pauseCarousel() {
  clearInterval(slideInterval); // Detiene el intervalo cuando el mouse está sobre el carrusel
}

function resumeCarousel() {
  startCarousel(); // Reanuda el intervalo cuando el mouse se retira del carrusel
}

// Inicia el carrusel automáticamente
startCarousel();

// Detiene el carrusel cuando el mouse está sobre él
document.querySelector('.carousel-menu').addEventListener('mouseenter', pauseCarousel);

// Reanuda el carrusel cuando el mouse se retira del carrusel
document.querySelector('.carousel-menu').addEventListener('mouseleave', resumeCarousel);