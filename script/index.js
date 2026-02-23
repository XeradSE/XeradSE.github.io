"use strict"; // ← meilleurs message d'erreurs

let currentSlideIndex = 0;

function moveSlide(direction) {
    const track = document.getElementById('track');
    const pages = document.querySelectorAll('.carousel-page');
    const totalPages = pages.length;

    // Met à jour l'index de la page
    currentSlideIndex += direction;

    // Boucle : si on recule au début, on va à la fin, et inversement
    if (currentSlideIndex < 0) {
        currentSlideIndex = totalPages - 1;
    } else if (currentSlideIndex >= totalPages) {
        currentSlideIndex = 0;
    }

    // Calcule le déplacement (1 page = 100% de largeur)
    const translationX = -(currentSlideIndex * 100);
    
    // Applique le style pour faire glisser
    track.style.transform = `translateX(${translationX}%)`;
}
