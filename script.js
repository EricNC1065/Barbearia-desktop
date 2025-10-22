"use strict";

const form = document.querySelector(".form");
const overlay = document.querySelector(".overlay");
const btncloseForm = document.querySelector(".close-btn");
const btnsOpenModal = document.querySelectorAll(".open-form");

const openForm = function () {
  console.log("Button clicked");
  form.classList.remove("hidden");
  overlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
};

const closeForm = function () {
  form.classList.add("hidden");

  overlay.classList.add("hidden");
  document.body.style.overflow = "visible";
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openForm);
}

btncloseForm.addEventListener("click", closeForm);

overlay.addEventListener("click", closeForm);
