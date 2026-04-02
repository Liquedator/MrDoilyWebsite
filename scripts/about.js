function getSlideWidth() {
  return document.querySelector('.slide').clientWidth;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function goToNextSlide() {
  if (index >= slides.length - 1 || isAnimating) return;

  isAnimating = true;
  index++;

  track.style.transition = 'transform 0.4s ease-in-out';
  track.style.transform = `translateX(-${getSlideWidth() * index}px)`;
}

function goToPrevSlide() {
  if (index <= 0 || isAnimating) return;

  isAnimating = true;
  index--;

  track.style.transition = 'transform 0.4s ease-in-out';
  track.style.transform = `translateX(-${getSlideWidth() * index}px)`;
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    if (!isAnimating) {
      goToNextSlide();
    }
  }, AUTO_DELAY);
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

const track = document.querySelector('.track');
let slidesArray = Array.from(track.children);
slidesArray = shuffle(slidesArray);
track.innerHTML = '';
slidesArray.forEach(slide => track.appendChild(slide));

let slides = document.querySelectorAll('.slide');

let index = 1;
let isAnimating = false;

let autoSlideInterval;
const AUTO_DELAY = 10000;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

track.appendChild(firstClone);
track.insertBefore(lastClone, track.firstChild);

slides = document.querySelectorAll('.slide');

track.style.transform = `translateX(-${getSlideWidth() * index}px)`;

window.addEventListener('resize', () => {
  track.style.transition = 'none';
  track.style.transform = `translateX(-${getSlideWidth() * index}px)`;
});

document.querySelector('.next').addEventListener('click', () => {
  goToNextSlide();
  resetAutoSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
  goToPrevSlide();
  resetAutoSlide();
});

track.addEventListener('transitionend', () => {
  if (index === slides.length - 1) {
    track.style.transition = 'none';
    index = 1;
    track.style.transform = `translateX(-${getSlideWidth() * index}px)`;
  }

  if (index === 0) {
    track.style.transition = 'none';
    index = slides.length - 2;
    track.style.transform = `translateX(-${getSlideWidth() * index}px)`;
  }
    requestAnimationFrame(() => {
        isAnimating = false;
    });
});

startAutoSlide();