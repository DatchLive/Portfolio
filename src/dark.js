'use strict';

const btn = document.querySelector('#toggle');
const body = document.body.classList;
const nav = document.getElementById('navigation').classList;
const matchMedia = window.matchMedia('(max-width:1025px)');
//ローカルストレージ
const keyLocalStorage = 'theme';
const localTheme = localStorage.getItem(keyLocalStorage);

btn.addEventListener('change', () => {
  if (btn.checked == true) {
    // ダークモード
    body.remove('light-maintheme');
    body.add('dark-maintheme');
    localStorage.setItem(keyLocalStorage, '1');
    if (matchMedia.matches) {
      nav.add('dark-proftheme');
      nav.remove('light-proftheme');
    }
    if (document.getElementById('aboutInfo')) {
      document.getElementById('aboutInfo').classList.add('dark-proftheme');
      document.getElementById('aboutInfo').classList.remove('light-proftheme');
    }
  } else {
    // ライトモード
    body.remove('dark-maintheme');
    body.add('light-maintheme');
    localStorage.setItem(keyLocalStorage, '2');
    if (matchMedia.matches) {
      nav.add('light-proftheme');
      nav.remove('dark-proftheme');
    }
    if (document.getElementById('aboutInfo')) {
      document.getElementById('aboutInfo').classList.add('light-proftheme');
      document.getElementById('aboutInfo').classList.remove('dark-proftheme');
    }
  }
});

const setThemeFile = function () {
  if (localTheme === '1') {
    body.remove('light-maintheme');
    body.add('dark-maintheme');
    btn.checked = true;
    if (matchMedia.matches) {
      nav.add('dark-proftheme');
      nav.remove('light-proftheme');
    }
    if (document.getElementById('aboutInfo')) {
      document.getElementById('aboutInfo').classList.add('dark-proftheme');
      document.getElementById('aboutInfo').classList.remove('light-proftheme');
    }
  } else {
    body.remove('dark-maintheme');
    body.add('light-maintheme');
    if (matchMedia.matches) {
      nav.add('light-proftheme');
      nav.remove('dark-proftheme');
    }
    if (document.getElementById('aboutInfo')) {
      document.getElementById('aboutInfo').classList.add('light-proftheme');
      document.getElementById('aboutInfo').classList.remove('dark-proftheme');
    }
  }
};

setThemeFile();
