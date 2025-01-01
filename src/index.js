import home from "./home.js";
import { displayMenu, menu } from "./menu.js";
import about from "./about.js";

const contentDiv = document.querySelector("#content");
const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");

homeBtn.addEventListener("click", () => {
  contentDiv.innerHTML = "";
  contentDiv.appendChild(home());
});

menuBtn.addEventListener("click", () => {
  contentDiv.innerHTML = "";
  contentDiv.appendChild(displayMenu(menu));
});

aboutBtn.addEventListener("click", () => {
  contentDiv.innerHTML = "";
  contentDiv.appendChild(about());
});

contentDiv.appendChild(home());

console.log("testing JS");
