'use strict';

// infinity slider
const slider = document.querySelector('.slider');
const slide = document.querySelectorAll('.slide');
let number = 0;
const totalSlide = slide.length;
const goToSlide = function (num) {
  slide.forEach((s, i) => {
    s.style.transform = `translateX(${(i - num) * 100}%)`
  })
}
goToSlide(0)

