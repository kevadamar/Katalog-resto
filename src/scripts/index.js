import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css"; /* CSS import */
import { restaurants } from "../DATA.json"; /* import data from json file */

// Nav Hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
let listData = "";

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  navMenu.classList.toggle("bg-aliceblue");
}

// set Data to UI
restaurants.forEach((data) => {
  listData += `
  <div class="item">
  <img class="item-image" src="${data.pictureId}" alt="${data.name}" title="${
    data.name
  }">
  
  <div class="container p-all-16">
    <div class="d-flex-end-w"> 
      <span class="item-city">Kota : ${data.city}</span>
      <span class="item-rating">★ ${data.rating}/5.0</span>
    </div>
    <a href="#" style="color:black">
      <h1 class="item-title">${data.name}</h1>
    </a>
      <div class="item-description">${data.description.slice(0, 100)}...</div>
  </div>
</div>
  `;
});
document.getElementById("contentList").innerHTML = listData;

let yOffset = window.pageYOffset;
window.onscroll = () => {
  let currYOffset = window.pageYOffset;
  // console.log(currYOffset);
  if (currYOffset > 10) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    navMenu.classList.remove("bg-aliceblue");
  }
  yOffset = currYOffset;
};

console.log("Hello Coders! :)", restaurants);
