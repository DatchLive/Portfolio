"use strict";

const btn = document.querySelector("#toggle");
const body = document.body.classList;
const nav = document.getElementById("navigation").classList;
const matchMedia = window.matchMedia("(max-width:1025px)");
const modalBack = document.getElementsByClassName("modal-innercontainer");

//ローカルストレージ
const keyLocalStorage = "theme";
const localTheme = localStorage.getItem(keyLocalStorage);

btn.addEventListener("change", () => {
  if (btn.checked == true) {
    // ダークモード
    body.remove("light-maintheme");
    body.add("dark-maintheme");

    //モーダル
    for (let i = 0; i < modalBack.length; i++) {
      modalBack[i].style.backgroundColor = "#333333";
    }

    localStorage.setItem(keyLocalStorage, "1");
    //レスポンシブ
    if (matchMedia.matches) {
      nav.add("dark-navtheme");
      nav.remove("light-navtheme");
    }
    //プロフィール
    if (document.getElementById("aboutInfo")) {
      document.getElementById("aboutInfo").classList.add("dark-proftheme");
      document.getElementById("aboutInfo").classList.remove("light-proftheme");
    }
  } else {
    // ライトモード
    body.remove("dark-maintheme");
    body.add("light-maintheme");

    for (let i = 0; i < modalBack.length; i++) {
      modalBack[i].style.backgroundColor = "#ffffff";
    }

    localStorage.setItem(keyLocalStorage, "2");
    if (matchMedia.matches) {
      nav.add("light-navtheme");
      nav.remove("dark-navtheme");
    }
    if (document.getElementById("aboutInfo")) {
      document.getElementById("aboutInfo").classList.add("light-proftheme");
      document.getElementById("aboutInfo").classList.remove("dark-proftheme");
    }
  }
});

const setThemeFile = function () {
  if (localTheme === "1") {
    body.remove("light-maintheme");
    body.add("dark-maintheme");

    for (let i = 0; i < modalBack.length; i++) {
      modalBack[i].style.backgroundColor = "#333333";
    }

    btn.checked = true;
    if (matchMedia.matches) {
      nav.add("dark-navtheme");
      nav.remove("light-navtheme");
    }
    if (document.getElementById("aboutInfo")) {
      document.getElementById("aboutInfo").classList.add("dark-proftheme");
      document.getElementById("aboutInfo").classList.remove("light-proftheme");
    }
  } else {
    body.remove("dark-maintheme");
    body.add("light-maintheme");
    if (matchMedia.matches) {
      nav.add("light-navtheme");
      nav.remove("dark-navtheme");
    }
    if (document.getElementById("aboutInfo")) {
      document.getElementById("aboutInfo").classList.add("light-proftheme");
      document.getElementById("aboutInfo").classList.remove("dark-proftheme");
    }
  }
};

setThemeFile();

export {
  btn,
  body,
  nav,
  matchMedia,
  modalBack,
  keyLocalStorage,
  localTheme,
  setThemeFile,
};
