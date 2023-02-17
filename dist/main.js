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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ aboutPage)\n/* harmony export */ });\nfunction aboutPage() {\n  const main = document.createElement('main');\n  const title = document.createElement('h2');\n  const text = document.createElement('p');\n  main.classList.add('about-page');\n  title.textContent = 'About Us';\n  text.textContent = '\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"';\n\n  main.appendChild(title);\n  main.appendChild(text);\n\n  return main;\n}\n\n\n//# sourceURL=webpack://restaurant/./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contactPage)\n/* harmony export */ });\nconst socials = ['instagram', 'twitter', 'tiktok', 'facebook', 'youtube', 'linkedin'];\n\nfunction creationSocialIcons(parentNode) {\n  for (let i = 0; i < socials.length; i += 1) {\n    const social = document.createElement('i');\n    social.classList.add('fa-brands');\n    social.classList.add(`fa-${socials[i]}`);\n    parentNode.appendChild(social);\n  }\n}\n\nfunction contactPage() {\n  const main = document.createElement('main');\n  const title = document.createElement('h2');\n  const contacts = document.createElement('div');\n  const contactPhone = document.createElement('div');\n  const phoneTitle = document.createElement('h3');\n  const phoneText = document.createElement('p');\n  const contactEmail = document.createElement('div');\n  const emailTitle = document.createElement('h3');\n  const emailText = document.createElement('p');\n  const contactSocials = document.createElement('div');\n  const socialsTitle = document.createElement('h3');\n  const socialsList = document.createElement('div');\n\n  main.classList.add('contact-page');\n  contacts.classList.add('contacts');\n  contactPhone.classList.add('contactPhone');\n  contactEmail.classList.add('contactEmail');\n  contactSocials.classList.add('contactSocials');\n  contactPhone.classList.add('contactCell');\n  contactEmail.classList.add('contactCell');\n  contactSocials.classList.add('contactCell');\n\n  title.textContent = 'Contact Us';\n  phoneTitle.textContent = 'Phone';\n  phoneText.textContent = '+99 123456789';\n  contactPhone.appendChild(phoneTitle);\n  contactPhone.appendChild(phoneText);\n\n  emailTitle.textContent = 'Email';\n  emailText.textContent = 'Restaurant@restaurant.com';\n  contactEmail.appendChild(emailTitle);\n  contactEmail.appendChild(emailText);\n\n  socialsTitle.textContent = 'Social Media';\n  creationSocialIcons(socialsList);\n  socialsList.classList.add('socials');\n  contactSocials.appendChild(socialsTitle);\n  contactSocials.appendChild(socialsList);\n\n  contacts.appendChild(contactPhone);\n  contacts.appendChild(contactEmail);\n  contacts.appendChild(contactSocials);\n\n  main.appendChild(title);\n  main.appendChild(contacts);\n\n  return main;\n}\n\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homePage)\n/* harmony export */ });\n// Function to create the main elements of the menu page\nfunction homePage() {\n  const main = document.createElement('main');\n  const titleMessage = document.createElement('div');\n  const title = document.createElement('h3');\n  const message = document.createElement('p');\n  const card = document.createElement('div');\n  const scheduleCard = document.createElement('div');\n  const scheduleTitle = document.createElement('h3');\n  const scheduleContent = document.createElement('div');\n  const scheduleContentP1 = document.createElement('p');\n  const scheduleContentP2 = document.createElement('p');\n  const locationCard = document.createElement('div');\n  const locationTitle = document.createElement('h3');\n  const locationContent = document.createElement('div');\n  const locationContentP1 = document.createElement('p');\n  const locationContentP2 = document.createElement('p');\n\n  main.classList.add('home-page');\n  titleMessage.classList.add('title-message');\n  card.classList.add('card');\n  // Title\n  titleMessage.appendChild(title);\n  titleMessage.appendChild(message);\n\n  // Schedule\n  scheduleCard.classList.add('schedule-card');\n  scheduleContent.classList.add('schedule-content');\n  scheduleContent.appendChild(scheduleContentP1);\n  scheduleContent.appendChild(scheduleContentP2);\n  scheduleCard.appendChild(scheduleTitle);\n  scheduleCard.appendChild(scheduleContent);\n\n  // Location\n  locationCard.classList.add('location-card');\n  locationContent.classList.add('location-content');\n  locationContent.appendChild(locationContentP1);\n  locationContent.appendChild(locationContentP2);\n  locationCard.appendChild(locationTitle);\n  locationCard.appendChild(locationContent);\n\n  card.appendChild(scheduleCard);\n  card.appendChild(locationCard);\n  main.appendChild(titleMessage);\n  main.appendChild(card);\n\n  title.textContent = 'Welcome';\n  message.textContent = 'Sit and Enjoy';\n  scheduleTitle.textContent = 'Schedules';\n  scheduleContentP1.textContent = 'Mon - Fri: 9am - 9pm';\n  scheduleContentP2.textContent = 'Sat - Sun: 10am - 12pm';\n  locationTitle.textContent = 'Location';\n  locationContentP1.textContent = '9999 Long Ave';\n  locationContentP2.textContent = 'Silver City, Codfish CA';\n\n  return main;\n}\n\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menuBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuBar */ \"./src/menuBar.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\n\nconst content = document.querySelector('.content');\n\ncontent.appendChild((0,_menuBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\ncontent.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n\ncontent.addEventListener('click', (e) => {\n  switch (e.target.className) {\n    case 'homeBtn':\n      content.removeChild(content.lastElementChild);\n      content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n      break;\n    case 'menuBtn':\n      content.removeChild(content.lastElementChild);\n      content.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n      break;\n    case 'aboutBtn':\n      content.removeChild(content.lastElementChild);\n      content.appendChild((0,_about__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n      break;\n    case 'contactBtn':\n      content.removeChild(content.lastElementChild);\n      content.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n      break;\n    default:\n      break;\n  }\n});\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuPage)\n/* harmony export */ });\n// Function Factory to create each product with images\nconst product = (name, price, imgsrc) => {\n  const productImage = new Image(500, 333);\n  productImage.src = imgsrc;\n\n  return { name, price, productImage };\n};\n\n// List of products\nconst items = [\n  product('Product 1', '$5.00', '../src/img/products/Product1.jpg'),\n  product('Product 2', '$5.00', '../src/img/products/Product2.jpg'),\n  product('Product 3', '$5.00', '../src/img/products/Product3.jpg'),\n  product('Product 4', '$5.00', '../src/img/products/Product4.jpg'),\n  product('Product 5', '$5.00', '../src/img/products/Product5.jpg'),\n  product('Product 6', '$5.00', '../src/img/products/Product6.jpg'),\n  product('Product 7', '$5.00', '../src/img/products/Product7.jpg'),\n  product('Product 8', '$5.00', '../src/img/products/Product8.jpg'),\n  product('Product 9', '$5.00', '../src/img/products/Product9.jpg'),\n  product('Product 10', '$5.00', '../src/img/products/Product10.jpg'),\n];\n\n// Function to create the main part of the menu page\nfunction menuPage() {\n  const main = document.createElement('main');\n  const carte = document.createElement('div');\n  const title = document.createElement('h2');\n  const products = document.createElement('div');\n\n  main.classList.add('menu-page');\n  carte.classList.add('carte');\n  products.classList.add('products');\n\n  carte.appendChild(title);\n  carte.appendChild(products);\n  main.appendChild(carte);\n\n  // Create each card for each product with its respective images, name and price\n  for (let i = 0; i < items.length; i += 1) {\n    const card = document.createElement('div');\n    card.classList.add('card');\n    card.appendChild(items[i].productImage);\n\n    const textCard = document.createElement('div');\n    textCard.classList.add('textCard');\n    card.appendChild(textCard);\n\n    const nameProduct = document.createElement('p');\n    const priceProduct = document.createElement('p');\n    textCard.appendChild(nameProduct);\n    textCard.appendChild(priceProduct);\n    nameProduct.textContent = items[i].name;\n    priceProduct.textContent = items[i].price;\n\n    products.appendChild(card);\n  }\n\n  title.textContent = 'Menu';\n\n  return main;\n}\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/menuBar.js":
/*!************************!*\
  !*** ./src/menuBar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuBar)\n/* harmony export */ });\nfunction menuBar() {\n  const header = document.createElement('header');\n  const homeBtn = document.createElement('button');\n  const menuBtn = document.createElement('button');\n  const aboutBtn = document.createElement('button');\n  const contactBtn = document.createElement('button');\n  const reserveBtn = document.createElement('button');\n  const title = document.createElement('h1');\n  const menuList = document.createElement('div');\n\n  title.textContent = 'Restaurant';\n  homeBtn.textContent = 'Home';\n  menuBtn.textContent = 'Menu';\n  aboutBtn.textContent = 'About';\n  contactBtn.textContent = 'Contact';\n  reserveBtn.textContent = 'Reserve';\n\n  homeBtn.classList.add('homeBtn');\n  menuBtn.classList.add('menuBtn');\n  aboutBtn.classList.add('aboutBtn');\n  contactBtn.classList.add('contactBtn');\n  reserveBtn.classList.add('reserveBtn');\n  menuList.classList.add('menuList');\n\n  menuList.appendChild(homeBtn);\n  menuList.appendChild(menuBtn);\n  menuList.appendChild(aboutBtn);\n  menuList.appendChild(contactBtn);\n  header.appendChild(menuList);\n  header.appendChild(title);\n  header.appendChild(reserveBtn);\n\n  return header;\n}\n\n\n//# sourceURL=webpack://restaurant/./src/menuBar.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;