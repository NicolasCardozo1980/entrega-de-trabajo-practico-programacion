document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el carrusel por su ID
    var carousel = document.getElementById("myCarousel");
  
    // Crea un nuevo objeto de carrusel usando la clase Carousel de Bootstrap
    var myCarousel = new bootstrap.Carousel(carousel, {
      interval: 3000, // Cambia la imagen cada 3 segundos
      wrap: true // Vuelve al principio después de la última imagen
    });
  
    // Selecciona los botones de control previo y siguiente por sus clases
    var prevButton = document.querySelector(".carousel-control-prev");
    var nextButton = document.querySelector(".carousel-control-next");
  
    // Agrega eventos de clic para los botones de control previo y siguiente
    prevButton.addEventListener("click", function() {
      myCarousel.prev();
    });
  
    nextButton.addEventListener("click", function() {
      myCarousel.next();
    });
  });
  