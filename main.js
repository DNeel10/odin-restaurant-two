/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ about)\n/* harmony export */ });\nfunction about() {\n  const aboutDiv = document.createElement(\"div\");\n\n  const histHeader = document.createElement(\"h2\");\n  const history = document.createElement(\"p\");\n\n  histHeader.innerText = \"About Us\";\n  history.innerText =\n    \"We were formed on a whim by a crazy man trying to come up with the worst restaurant ever.\";\n  aboutDiv.appendChild(histHeader);\n  aboutDiv.appendChild(history);\n\n  return aboutDiv;\n}\n\n\n//# sourceURL=webpack://odin-restaurant-two/./src/about.js?");

/***/ }),

/***/ "./src/dish.js":
/*!*********************!*\
  !*** ./src/dish.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Dish: () => (/* binding */ Dish),\n/* harmony export */   dishes: () => (/* binding */ dishes)\n/* harmony export */ });\nclass Dish {\n  constructor(name, desc, price) {\n    this.name = name;\n    this.desc = desc;\n    this.price = price;\n  }\n}\n\nconst brusselSprouts = new Dish(\n  \"Roasted Brussel Sprouts\",\n  \"Roasted brussel sprouts with a balsamic vinegarette drizzle\",\n  \"12.99\"\n);\n\nconst crabPuffs = new Dish(\n  \"Crab Puffs\",\n  \"5 mini jumbo lump crab cakes\",\n  \"17.99\"\n);\n\nconst dishes = [brusselSprouts, crabPuffs];\n\n\n//# sourceURL=webpack://odin-restaurant-two/./src/dish.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _odin_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./odin.png */ \"./src/odin.png\");\n\n\nfunction home() {\n  const heroSection = document.createElement(\"div\");\n  const heroTitle = document.createElement(\"p\");\n  const heroImg = document.createElement(\"img\");\n\n  heroImg.src = _odin_png__WEBPACK_IMPORTED_MODULE_0__;\n\n  heroTitle.innerText = \"Restaurant Odin\";\n\n  heroSection.appendChild(heroTitle);\n  heroSection.appendChild(heroImg);\n\n  return heroSection;\n}\n\n\n//# sourceURL=webpack://odin-restaurant-two/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\n\n\n\nconst contentDiv = document.querySelector(\"#content\");\nconst homeBtn = document.querySelector(\"#home\");\nconst menuBtn = document.querySelector(\"#menu\");\nconst aboutBtn = document.querySelector(\"#about\");\n\nhomeBtn.addEventListener(\"click\", () => {\n  contentDiv.innerHTML = \"\";\n  contentDiv.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n});\n\nmenuBtn.addEventListener(\"click\", () => {\n  contentDiv.innerHTML = \"\";\n  contentDiv.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.displayMenu)(_menu_js__WEBPACK_IMPORTED_MODULE_1__.menu));\n});\n\naboutBtn.addEventListener(\"click\", () => {\n  contentDiv.innerHTML = \"\";\n  contentDiv.appendChild((0,_about_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n});\n\ncontentDiv.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n\nconsole.log(\"testing JS\");\n\n\n//# sourceURL=webpack://odin-restaurant-two/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayMenu: () => (/* binding */ displayMenu),\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _dish_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dish.js */ \"./src/dish.js\");\n\n\nclass Menu {\n  constructor() {\n    this.dishes = [];\n  }\n  addDish(dish) {\n    this.dishes.push(dish);\n  }\n}\n\nconst menu = new Menu();\n\n_dish_js__WEBPACK_IMPORTED_MODULE_0__.dishes.forEach((dish) => {\n  menu.addDish(dish);\n});\n\nfunction displayMenu(menu) {\n  const menuDiv = document.createElement(\"div\");\n\n  menu.dishes.map((dish) => {\n    const itemCard = document.createElement(\"div\");\n    const itemName = document.createElement(\"h3\");\n    const itemDesc = document.createElement(\"p\");\n    const itemPrice = document.createElement(\"p\");\n\n    itemName.innerText = `${dish.name}`;\n    itemDesc.innerText = `${dish.desc}`;\n    itemPrice.innerText = `${dish.price}`;\n\n    itemCard.appendChild(itemName);\n    itemCard.appendChild(itemDesc);\n    itemCard.appendChild(itemPrice);\n\n    menuDiv.appendChild(itemCard);\n  });\n\n  return menuDiv;\n}\n\n\n\n\n//# sourceURL=webpack://odin-restaurant-two/./src/menu.js?");

/***/ }),

/***/ "./src/odin.png":
/*!**********************!*\
  !*** ./src/odin.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"05dbbbf6b379cd21e325.png\";\n\n//# sourceURL=webpack://odin-restaurant-two/./src/odin.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;