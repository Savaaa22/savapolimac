const project1 = document.querySelector(".project1");
const project2 = document.querySelector(".project2");
const project3 = document.querySelector(".project3");
const project4 = document.querySelector(".project4");
const project5 = document.querySelector(".project5");
const project6 = document.querySelector(".project6");
const project7 = document.querySelector(".project7");
const project8 = document.querySelector(".project8");
const project1Overlay = document.querySelector(".project1-overlay");
const project2Overlay = document.querySelector(".project2-overlay");
const project3Overlay = document.querySelector(".project3-overlay");
const project4Overlay = document.querySelector(".project4-overlay");
const project5Overlay = document.querySelector(".project5-overlay");
const project6Overlay = document.querySelector(".project6-overlay");
const project7Overlay = document.querySelector(".project7-overlay");
const project8Overlay = document.querySelector(".project8-overlay");

project1.addEventListener("mouseover", function () {
  project1.classList.add("overlay");
  project1Overlay.classList.remove("none");
});
project1.addEventListener("mouseout", function () {
  project1.classList.remove("overlay");
  project1Overlay.classList.add("none");
});

project2.addEventListener("mouseover", function () {
  project2.classList.add("overlay");
  project2Overlay.classList.remove("none");
});
project2.addEventListener("mouseout", function () {
  project2.classList.remove("overlay");
  project2Overlay.classList.add("none");
});

project3.addEventListener("mouseover", function () {
  project3.classList.add("overlay");
  project3Overlay.classList.remove("none");
});
project3.addEventListener("mouseout", function () {
  project3.classList.remove("overlay");
  project3Overlay.classList.add("none");
});

project4.addEventListener("mouseover", function () {
  project4.classList.add("overlay");
  project4Overlay.classList.remove("none");
});
project4.addEventListener("mouseout", function () {
  project4.classList.remove("overlay");
  project4Overlay.classList.add("none");
});

project5.addEventListener("mouseover", function () {
  project5.classList.add("overlay");
  project5Overlay.classList.remove("none");
});
project5.addEventListener("mouseout", function () {
  project5.classList.remove("overlay");
  project5Overlay.classList.add("none");
});

project6.addEventListener("mouseover", function () {
  project6.classList.add("overlay");
  project6Overlay.classList.remove("none");
});
project6.addEventListener("mouseout", function () {
  project6.classList.remove("overlay");
  project6Overlay.classList.add("none");
});

project7.addEventListener("mouseover", function () {
  project7.classList.add("overlay");
  project7Overlay.classList.remove("none");
});
project7.addEventListener("mouseout", function () {
  project7.classList.remove("overlay");
  project7Overlay.classList.add("none");
});

project8.addEventListener("mouseover", function () {
  project8.classList.add("overlay");
  project8Overlay.classList.remove("none");
});
project8.addEventListener("mouseout", function () {
  project8.classList.remove("overlay");
  project8Overlay.classList.add("none");
});
