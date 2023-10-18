'use strict';

const leftBtn = document.querySelector('.left_btn');
const rightBtn = document.querySelector('.right_btn');
const dots = document.querySelector('.dots');
const imgs = document.querySelectorAll('.img');

const slider = function () {
  const init = function () {
    changeSlide(0);
    createDots();
    activateDot(0);
  };

  const changeSlide = function (slide) {
    imgs.forEach((img, i) => {
      img.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };

  const nextSlide = function () {
    currentSlide === imgs.length - 1 && (currentSlide = -1);
    currentSlide++;
    changeSlide(currentSlide);
    activateDot(currentSlide);
  };

  const previousSlide = function () {
    currentSlide === 0 && (currentSlide = imgs.length);
    currentSlide--;
    changeSlide(currentSlide);
    activateDot(currentSlide);
  };

  const activateDot = function (dot_no) {
    document
      .querySelectorAll('.dot')
      .forEach(dot => dot.classList.remove('dot__active'));

    document
      .querySelector(`.dot[data-slide="${dot_no}"]`)
      .classList.add('dot__active');
  };

  const createDots = function () {
    imgs.forEach((img, i) => {
      const html = `<button class="dot" data-slide="${i}"></button>`;
      dots.insertAdjacentHTML('beforeend', html);
    });
  };

  let currentSlide = 0;
  imgs.forEach((img, i) => {
    img.style.transform = `translateX(${100 * i}%)`;
  });

  init();
  rightBtn.addEventListener('click', nextSlide);
  leftBtn.addEventListener('click', previousSlide);

  document.addEventListener('keydown', function (e) {
    e.key === 'ArrowRight' && nextSlide();
    e.key === 'ArrowLeft' && previousSlide();
  });

  dots.addEventListener('click', function (e) {
    if (!e.target.classList.contains('dot')) return;

    const dot = e.target;
    const { slide: img_slide } = dot.dataset;
    changeSlide(img_slide);
    console.log(img_slide);
    activateDot(img_slide);
  });
};

slider();
