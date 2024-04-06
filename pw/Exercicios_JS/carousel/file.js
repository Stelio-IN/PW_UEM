var carousel = document.querySelector('.carousel');
var images = document.querySelectorAll('.carousel img');
var currentIndex = 0;

setInterval(function() {
    currentIndex = (currentIndex + 1) % images.length;
    carousel.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
}, 5000); 