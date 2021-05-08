"use strict";

const n_bg = document.querySelector(".navigation__background");
const n_nev = document.querySelector(".navigation__nav");
const sub_menus = document.querySelectorAll(".sub_menu");

const openModal = function () {
  n_bg.classList.remove("hidden");
  n_nev.classList.remove("hidden");
};

const closeModal = function () {
  n_bg.classList.add("hidden");
  n_nev.classList.add("hidden");
};

for (let i = 0; i < sub_menus.length; i++)
sub_menus[i].addEventListener("click", openModal);
n_bg.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !n_bg.classList.contains("hidden")) {
    closeModal();
  }
});