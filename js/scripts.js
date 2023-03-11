/*!
* Start Bootstrap - Business Frontpage v5.0.8 (https://startbootstrap.com/template/business-frontpage)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-frontpage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
/* Slider Script */
/*
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
let index = 0;

function slide() {
  index = (index + 1) % slides.length;
  slider.style.transform = `translateX(-${index * 33.333333}%)`;
}

setInterval(slide, 2000);
*/
const slider = document.querySelector('.slider');
const images = slider.querySelectorAll('img');
let currentImage = 0;

function showImage(n) {
  images[currentImage].classList.remove('active');
  images[n].classList.add('active');
  images[n].classList.remove('prev');
  images[n].classList.remove('next');
  if (n > currentImage) {
    images[n].classList.add('next');
  } else if (n < currentImage) {
    images[n].classList.add('prev');
  }
  currentImage = n;
}

function nextImage() {
  let next = currentImage + 1;
  if (next >= images.length) {
    next = 0;
  }
  showImage(next);
}

setInterval(nextImage, 2000);

