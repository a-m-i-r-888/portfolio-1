'use strict';

const section = document.querySelector('.second-section');
const blogCards = document.querySelectorAll('.teammate-card');
const blogCardsCount = Number(blogCards.length);
const allBlogBtn = document.querySelector("#seeAllBog");
const blogsNum = function (num) {
  if (num <= 3) return 1;
  if (num <= 6) return 2;
  if (num <= 8) return 3;
}
allBlogBtn.addEventListener("click", function () {
  allBlogBtn.classList.toggle('all')
  if (allBlogBtn.classList.contains('all')) {
    section.style.height = `${450 * blogsNum(blogCardsCount)}px`;
    allBlogBtn.textContent = "کوتاه کردن"
  }
  else {
    section.style.height = `${450 * 1}px`;
    allBlogBtn.textContent = "مشاهده همه مقالات"
  }
})