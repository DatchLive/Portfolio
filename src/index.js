'use strict';

//ダークモード
import {
  btn,
  body,
  nav,
  matchMedia,
  keyLocalStorage,
  localTheme,
  setThemeFile,
} from './dark';
setThemeFile();

//swiper.js
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);
import 'swiper/swiper-bundle.css';
var swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  speed: 1000,
});

//micromodal
import MicroModal from 'micromodal';
document.addEventListener('DOMContentLoaded', () => {
  MicroModal.init({
    disableScroll: true,
    awaitCloseAnimation: true,
  });
});
