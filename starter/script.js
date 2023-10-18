'use strict';

///////////////////////////////////////
// Modal window

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++) {
//   btnsOpenModal[i].addEventListener('click', openModal);
//   console.log(btnsOpenModal[i]);
// }

for (const ele of btnsOpenModal) {
  ele.addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////
//// Selecting elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// console.log(document.querySelector('.header'));
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// // const section1 = document.getElementById('section--1');
// // console.log(section1);
const header = document.querySelector('.header');

// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);
// console.log(document.querySelectorAll('.btn'));
// console.log(document.getElementsByClassName('btn'));

// //// Creating elements
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = `We used this cookie for improved functionality and analytics. <button class="btn btn--close--cookie">Got it</button>`;

// // Inserting elements
// // header.prepend(message);
// // header.append(message.cloneNode(true));

header.append(message);

// // Insert elements as sibling element
// // header.before(message);
// // header.after(message);

// // Delete elements
document
  .querySelector('.btn--close--cookie')
  .addEventListener('click', function () {
    // message.remove();
    // old way of deleting element
    message.parentElement.removeChild(message);
  });

// // Styles,attributes and classes
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// // this way of using style property we can set a new property as inline style property or get value for inline style only
// console.log(message.style.backgroundColor);
// // console.log(message.style.color);

// // to get styles values mentioned within the selector as a css rule
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// // message.style.height =
// //   Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';
// // // console.log(message.style.height);

// // console.log(document.documentElement);

// // To set values to custom CSS styles(CSS Variables)
// // document.documentElement.style.setProperty('--color-primary', 'orangered');

// message.style.setProperty('color', 'red');
// message.style.color = 'red';

const logo = document.getElementById('logo');
// console.log(logo);
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// // console.log(logo.designer);
// console.log(logo.getAttribute('designer'));
// console.log(logo.getAttribute('class'));

console.log(logo.alt);
// logo.alt = 'Company Bankist Logo';
logo.setAttribute('alt', 'Company Bankist Logo');
console.log(logo.getAttribute('alt'));

// console.log(logo.src);
// console.log(logo.getAttribute('src'));
// logo.designer = 'Saaib';
// logo.setAttribute('designer', 'Saaib');
// console.log(logo.getAttribute('designer'));

// logo.setAttribute('Company', 'Bankist Company');
// console.log(logo);

// // absolute url
// console.log(logo.src);
// // relativr url
// console.log(logo.getAttribute('src'));

// const navLink = document.querySelector('.nav__link--btn');
// console.log(navLink);
// console.log(navLink.href);
// console.log(navLink.getAttribute('href'));

// // Data attributes
// console.log(logo.dataset.versionControl);

//////////////////////////////////////////////////////////////////////////////////
/////////////
//Smooth Scrolling

btnScrollTo.addEventListener('click', function () {
  // const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);
  // console.log(window.scrollY);

  // scrolling (old way)
  // window.scrollTo({ behavior: 'smooth', top: s1coords.top + window.scrollY });
  // console.log(
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // new way for scrolling
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Events and Types Events
const h1 = document.querySelector('h1');
console.log(h1);

// both the event handler function executes

// const alertH1 = function () {
//   console.log('1 : You are reading heading h1 right now');

//   setTimeout(() => {
//     this.removeEventListener('mouseenter', alertH1);
//   }, 8000);
// };

// h1.addEventListener('mouseenter', alertH1);

// h1.addEventListener('mouseenter', function () {
//   console.log('1a : This is a second function handler');
// });

// we can also remove event handler fucntion, by this way

// ovewrite the event handler function
// h1.onmouseenter = function () {
//   console.log('2 : You are reading heading h1 right now');
// };

// h1.onmouseenter = function () {
//   console.log('2a : This is a second function handler');
// };

//////////////////////////////////////////////////////////////////////////////////////////
// Event Propagation in Practice
////////////////////////////////
// const nav = document.querySelector('.nav');
// const containerLinks = document.querySelector('.nav__links');
// const nav__link = document.querySelector('.nav__link');

// const rand = (min, max) => Math.floor(Math.random() * max - min + 1 + min);

// const generate_bg_color = () =>
//   `rgb(${rand(0, 255)},${rand(0, 255)},${rand(0, 255)})`;

// nav__link.addEventListener('click', function (e) {
//   nav__link.style.backgroundColor = `${generate_bg_color()}`;
//   console.log('LINK');
//   console.log(e.target);
//   console.log(e.currentTarget === this);
//   // e.stopPropagation();
// });

// containerLinks.addEventListener(
//   'click',
//   function (e) {
//     containerLinks.style.backgroundColor = `${generate_bg_color()}`;
//     console.log('CONTAINER');
//     console.log(e.target);
//     console.log(e.currentTarget === this);
//     console.log(e.currentTarget);
//   },
//   true
// );

// nav.addEventListener('click', function (e) {
//   nav.style.backgroundColor = `${generate_bg_color()}`;
//   console.log('NAV');
//   console.log(e.target);
//   console.log(e.currentTarget === this);
//   console.log(e.currentTarget);
// });
//////////////////////////////////////////////////////////////////////////////////////////
// Event Delegation to implement smooth scrolling
////////////////////////////////
const navLink = document.querySelector('.nav__links');

// event delegation
navLink.addEventListener('click', function (e) {
  e.preventDefault();
  const navLink = e.target;
  if (!navLink.classList.contains('nav__link')) return;
  const sectionToScroll = navLink.getAttribute('href');
  const sectionEl = document.querySelector(`${sectionToScroll}`);
  // const sectionCoords = sectionEl.getBoundingClientRect();
  // console.log(sectionCoords.top, window.scrollY);
  // window.scrollTo({
  //   behavior: 'smooth',
  //   top: sectionCoords.top + window.scrollY,
  // });
  sectionEl.scrollIntoView({ behavior: 'smooth' });
});

//////////////////////////////////////////////////////////////////////////////////////////
// DOM Traversing
////////////////////////////////
const h1El = document.querySelector('h1');

// Going downwards: child
// console.log(h1El.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);

// console.log(h1.firstChild);
// h1.firstElementChild.style.color = 'white';
// console.log(h1.childNodes);
// console.log(h1.lastChild);
// h1.lastElementChild.style.color = 'orangered';

// Going upwards
// console.log(h1El.parentElement);
// console.log(h1El.parentNode);

// console.log(h1El.closest('.header'));
// h1El.closest('.header').style.backgroundColor = `var(--color-secondary)`;
// console.log(h1.closest('h1'));

// Going sideways:Siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.previousSibling);

// console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach(ele => {
//   if (ele !== h1) ele.style.transform = `scale(0.5)`;
// });

///////////////////////////////////////////////////////////////////////////
/////////////////
/// Building a tabbed component
const operationsTabContainer = document.querySelector(
  '.operations__tab-container'
);

const operations_content = document.querySelectorAll('.operations__content');
const operations_tabs = document.querySelectorAll('.operations__tab');

// operationsTabContainer.addEventListener('click', function (e) {
//   if (!e.target.classList.contains('operations__tab')) return;
//   operations_tabs.forEach(tab => {
//     tab.classList.remove('operations__tab--active');
//   });

//   operations_content.forEach(content => {
//     content.classList.remove('operations__content--active');
//   });

//   // const tabClicked = e.target.getAttribute('data-tab');
//   const tabClicked = e.target.dataset.tab;

//   const operation_content = document.querySelector(
//     `.operations__content--${tabClicked}`
//   );

//   operation_content.classList.add('operations__content--active');
//   e.target.classList.add('operations__tab--active');
// });

operationsTabContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return;

  operations_tabs.forEach(tab =>
    tab.classList.remove('operations__tab--active')
  );

  operations_content.forEach(content =>
    content.classList.remove('operations__content--active')
  );

  const tabClicked = clicked.dataset.tab;

  const operation_content = document.querySelector(
    `.operations__content--${tabClicked}`
  );
  operation_content.classList.add('operations__content--active');
  clicked.classList.add('operations__tab--active');
});

// Menu fade animation
const nav = document.querySelector('.nav');

const blurEffect = function (e) {
  const link = e.target.closest('.nav__link');
  if (!link) return;

  const logo = e.target.closest('.nav').querySelector('#logo');
  // console.log(logo);

  const siblings = link.closest('.nav__links').querySelectorAll('.nav__link');
  // console.log('Blurred out links:', siblings);
  // console.log('Link not blurred out', link);

  siblings.forEach(ele => {
    if (ele === link) return;
    ele.style.opacity = `${this}`;
  });
};

// Passing arguments to event handler function : can't actually pass
nav.addEventListener('mouseover', blurEffect.bind(0.5));
nav.addEventListener('mouseout', blurEffect.bind(1));

// implementing sticky navigation
// window.addEventListener('scroll', function (e) {
//   const sect1Coords = section1.getBoundingClientRect();
//   if (sect1Coords.top < this.scrollY) {
//     nav.classList.add('sticky');
//   } else nav.classList.remove('sticky');
// });

// Intersection Observer API

//
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

const options = {
  root: null,
  rootMargin: `-${navHeight}px`,
};

const callback = function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }
  });
};

const observer = new IntersectionObserver(callback, options);

observer.observe(header);

// revealing elements on scroll
const sectionAll = document.querySelectorAll('.section');
console.log(sectionAll);

sectionAll.forEach(section => {
  section.classList.add('section--hidden');
});

const options2 = {
  root: null,
  // threshold: 0.25,
  rootMargin: '-250px',
};

const callback2 = function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('section--hidden');
      observer.unobserve(entry.target);
      // console.log(entry);
    }
  });
};

const sectionObserver = new IntersectionObserver(callback2, options2);

sectionAll.forEach(section => sectionObserver.observe(section));

// Lazing Loading Images

const feature_imgs = document.querySelectorAll('.features__img');
console.log(feature_imgs);

const options3 = {
  root: null,
  threshold: 0,
  rootMargin: '200px',
};

const callback3 = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  const img = entry.target;
  console.log(img);
  img.src = img.dataset.src;

  img.addEventListener('load', function () {
    img.classList.remove('lazy-img');
  });

  observer.unobserve(img);
};

const lazyImgObs = new IntersectionObserver(callback3, options3);

feature_imgs.forEach(img => lazyImgObs.observe(img));

// Slider component

const slider_func = function () {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const dotsCont = document.querySelector('.dots');
  const left_btn = document.querySelector('.slider__btn--left');
  const right_btn = document.querySelector('.slider__btn--right');

  let currentSlide = 0;
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${i * 100}%)`;
  });

  const init = function () {
    changeSlide(0);
    createDots();
    activateDots(0);
  };
  const changeSlide = function (currentSlide) {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${(i - currentSlide) * 100}%)`;
    });
  };

  const nextSlide = function () {
    currentSlide++;
    currentSlide === slides.length && (currentSlide = 0);
    changeSlide(currentSlide);
    activateDots(currentSlide);
  };

  const previousSlide = function () {
    currentSlide === 0 && (currentSlide = slides.length);
    currentSlide--;
    changeSlide(currentSlide);
    activateDots(currentSlide);
  };

  const createDots = function () {
    slides.forEach((_, i) => {
      const html = `<button class='dots__dot' data-slide='${i}'></button>`;
      dotsCont.insertAdjacentHTML('beforeend', html);
    });
  };

  const activateDots = function (dot_no) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));
    document
      .querySelector(`.dots__dot[data-slide='${dot_no}']`)
      .classList.add('dots__dot--active');
  };

  init();

  right_btn.addEventListener('click', nextSlide);

  left_btn.addEventListener('click', previousSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') nextSlide();
    else if (e.key === 'ArrowLeft') previousSlide();
  });

  // Event delegation
  dotsCont.addEventListener('click', function (e) {
    if (!e.target.classList.contains('dots__dot')) return;
    const dot_clicked = e.target;
    const { slide: slide_no } = dot_clicked.dataset;
    changeSlide(slide_no);
    activateDots(slide_no);
  });
};

slider_func();

// document.addEventListener('DOMContentLoaded', function () {
//   console.log(
//     'This statements executes only when, browser does parse the HTML file and generate the DOM Tree'
//   );
// });

// window.addEventListener('load', function () {
//   console.log(
//     'All the resources like images,and css, when loaded after generating DOM tree'
//   );
// });

// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   return (e.returnValue = '');
// });
