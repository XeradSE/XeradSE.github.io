"use strict";
let currentSlideIndex = 0;

function updateDots() {
  document.querySelectorAll('.dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlideIndex);
  });
}

function goToSlide(index) {
  const track = document.getElementById('track');
  const pages = document.querySelectorAll('.carousel-page');
  currentSlideIndex = Math.max(0, Math.min(index, pages.length - 1));
  track.style.transform = `translateX(${-(currentSlideIndex * 100)}%)`;
  updateDots();
}

function moveSlide(direction) {
  const pages = document.querySelectorAll('.carousel-page');
  let next = currentSlideIndex + direction;
  if (next < 0) next = pages.length - 1;
  if (next >= pages.length) next = 0;
  goToSlide(next);
}
