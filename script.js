// SELEZIONA IL CONTENITORE DEL CAROUSEL
const carouselContainer = document.querySelector('.carousel-container');
// SELEZIONA TUTTE LE SLIDE DEL CAROUSEL
const carouselItems = document.querySelectorAll('.carousel-item');
// INDICE SLIDE
let currentIndex = 0;
// AGGIORNA L'INDICE CORRENTE IN BASE ALLA DIREZIONE DI SCORRIMENTO
function changeSlide(direction) {
  currentIndex += direction;
// SE L'INDICE E' NEGATIVO TORNA ALL'ULTIMA SLIDE
  if (currentIndex < 0) {
    currentIndex = carouselItems.length - 1;
// SE L'INDICE SUPERA IL NUMERO DI SLIDE, TORNA ALLA PRIMA SLIDE    
  } else if (currentIndex >= carouselItems.length) {
    currentIndex = 0;
  }
// SPOSTA IL CONTENITORE DEL CAROUSEL PER VISUALIZZARE LE SLIDE VERTICALMENTE
  carouselContainer.style.transform = `translateY(-${currentIndex * 20}%)`; 
}
