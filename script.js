"use strict";
// const linkWrap = document.querySelector
const dropDown = document.querySelector(".resp-link-wrapper");
const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");

openBtn.addEventListener("click", function () {
  openBtn.style.display = "none";
  closeBtn.style.display = "inline-block";
  dropDown.style.marginLeft = "0";
});
closeBtn.addEventListener("click", function () {
  openBtn.style.display = "inline-block";
  closeBtn.style.display = "none";
  dropDown.style.marginLeft = "-100%";
});
