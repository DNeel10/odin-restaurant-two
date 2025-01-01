import home from "./home.js";
import { displayMenu, menu } from "./menu.js";

const contentDiv = document.querySelector("#content");

contentDiv.append(displayMenu(menu));

console.log("testing JS");
