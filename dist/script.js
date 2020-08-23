/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/componenst/arrow.js":
/*!************************************!*\
  !*** ./src/js/componenst/arrow.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const HEIGHT = '800';

const showArrow = arrow => {
  console.log('showArrow');
  arrow.style.visibility = 'visible';
  arrow.style.opacity = '1';
  arrow.dataset.show = 'true';
};

const hideArrow = arrow => {
  console.log('hideArrow');
  arrow.style.visibility = 'hidden';
  arrow.style.opacity = '0';
  arrow.dataset.show = 'false';
};

const scrolling = arrow => {
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop >= HEIGHT) {
      if (arrow.dataset.show === 'false') {
        showArrow(arrow);
      }
    } else if (arrow.dataset.show === 'true') {
      hideArrow(arrow);
    }
  });
};

const createArrow = () => {
  const arrow = `
    <div class="btn__arrow" data-show="false">
        <span class="material-icons btn__arrow-top" >expand_less</span>
    </div>
    `;
  document.body.insertAdjacentHTML("beforeend", arrow);
};

const scrollToTop = () => {
  console.log('click');
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

const arrow = () => {
  createArrow();
  const arrow = document.querySelector('.btn__arrow');
  scrolling(arrow);
  arrow.addEventListener('click', scrollToTop);
};

/* harmony default export */ __webpack_exports__["default"] = (arrow);

/***/ }),

/***/ "./src/js/componenst/burger-menu.js":
/*!******************************************!*\
  !*** ./src/js/componenst/burger-menu.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const burgerMenu = (selectorBurger, selectorMenu, activeClass) => {
  const btnBurger = document.querySelector(selectorBurger),
        menu = document.querySelector(selectorMenu);
  btnBurger.classList.remove(activeClass);
  menu.classList.remove(activeClass);
  btnBurger.addEventListener('click', () => {
    if (menu.classList.contains(activeClass)) {
      remove(btnBurger, menu, activeClass);
    } else {
      add(btnBurger, menu, activeClass);
    }
  });
};

function remove(btn, menu, cls) {
  btn.classList.remove(cls);
  menu.classList.remove(cls);
}

function add(btn, menu, cls) {
  btn.classList.add(cls);
  menu.classList.add(cls);
}

/* harmony default export */ __webpack_exports__["default"] = (burgerMenu);

/***/ }),

/***/ "./src/js/componenst/catalog/catalog.js":
/*!**********************************************!*\
  !*** ./src/js/componenst/catalog/catalog.js ***!
  \**********************************************/
/*! exports provided: createCards, getJSON, createCatalogItems, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCards", function() { return createCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJSON", function() { return getJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCatalogItems", function() { return createCatalogItems; });
/* harmony import */ var _catalog_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catalog.template */ "./src/js/componenst/catalog/catalog.template.js");
/* harmony import */ var _utilits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilits */ "./src/js/componenst/utilits.js");
/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sort */ "./src/js/componenst/catalog/sort.js");



const url = './assets/catalogList.json';
const createCards = data => {
  console.log(data);
  let cards = '';
  data.forEach(item => {
    cards += Object(_catalog_template__WEBPACK_IMPORTED_MODULE_0__["getTemplate"])(item);
  });
  return cards;
};
async function getJSON() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}
function createCatalogItems(json, wrap) {
  const cards = createCards(json);
  Object(_utilits__WEBPACK_IMPORTED_MODULE_1__["toHTML"])(cards, wrap);
}

async function getCatalogItems(wrap) {
  try {
    const json = await getJSON();
    const defaultSort = {
      direction: 'top',
      type: 'square'
    };
    Object(_sort__WEBPACK_IMPORTED_MODULE_2__["typeSortFilter"])(defaultSort.direction, defaultSort.type, json);
    createCatalogItems(json, wrap);
  } catch (error) {
    console.log(error);
  }
}

const catalog = () => {
  const wrap = Object(_utilits__WEBPACK_IMPORTED_MODULE_1__["catalogWrap"])();

  if (wrap === null || wrap === undefined) {
    return;
  }

  getCatalogItems(wrap);
};

/* harmony default export */ __webpack_exports__["default"] = (catalog);

/***/ }),

/***/ "./src/js/componenst/catalog/catalog.template.js":
/*!*******************************************************!*\
  !*** ./src/js/componenst/catalog/catalog.template.js ***!
  \*******************************************************/
/*! exports provided: getButtonPopup, getTemplate, getOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getButtonPopup", function() { return getButtonPopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTemplate", function() { return getTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOptions", function() { return getOptions; });
function getButtonPopup() {
  return `
    <button class="btn__booking btn__booking-dark toggle-popup" data-purpose="booking">Забронировать
        <span class="btn__booking-icon">
            <svg class="btn__booking-img svg" width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.8031 6.52459C13.8387 8.22475 14.3435 13.1874 17.5591 13.1874C18.9459 13.1874 20.1462 12.1449 20.6806 10.812C21.9148 7.73361 19.3483 5.06439 16.8031 6.52459Z" fill="#FFFEFD"/>
                <path d="M13.7585 7.13911C17.3153 7.13911 18.3803 1.0992 15.0011 0.106215C13.4616 -0.346048 11.7109 0.739136 11.1486 2.72287C10.5177 4.94631 11.7589 7.13911 13.7585 7.13911Z" fill="#FFFEFD"/>
                <path d="M12.8437 17.8903C12.3498 17.7537 11.4731 17.6658 10.5555 17.6531C9.58551 17.6389 8.56997 17.7084 7.9129 17.8903C6.13824 18.3847 3.72348 17.1886 4.25331 14.7045C4.74338 12.408 6.50422 12.5389 6.92062 10.3625C7.34017 8.16298 8.97061 7.10147 10.5555 7.18444C12.0223 7.26144 13.4499 8.31922 13.8389 10.363C14.2529 12.5409 16.0101 12.4088 16.4994 14.7045C17.0312 17.1906 14.6114 18.3802 12.8437 17.8903Z" fill="#FFFEFD"/>
                <path d="M7.49859 7.13932C8.50467 7.13932 9.36873 6.55499 9.84887 5.66068C11.2762 3.00141 8.93197 -0.680001 6.25571 0.10841C2.87074 1.10414 3.94372 7.13932 7.49859 7.13932Z" fill="#FFFEFD"/>
                <path d="M5.89091 11.2099C7.03297 8.41561 4.32591 5.00232 1.74052 6.07629C-1.37374 7.36979 -0.000207816 12.9487 3.42404 12.9487C4.52296 12.9487 5.45682 12.2722 5.89091 11.2099Z" fill="#FFFEFD"/>
                <path d="M12.8437 17.8902C12.3497 17.7537 11.473 17.6657 10.5554 17.653V7.1844C12.0223 7.2614 13.4498 8.31917 13.8388 10.363C14.2528 12.5408 16.01 12.4087 16.4994 14.7045C17.0311 17.1905 14.6113 18.3801 12.8437 17.8902Z" fill="#FFFEFD"/>
            </svg>
        </span>
    </button>
    `;
}
function getTemplate(item) {
  return `
    <div class="card">
        <div class="card__img">
            <img src="${item.img}" alt="">
        </div>
        <div class="card__content">
            <p class="card-title">${item.type}</p>
            <div class="card__desc">
                <p class="card-text">Размеры (ШхГхВ) - ${item.size}</p>
                <p class="card-text">Площадь - ${item.square}</p>

                <div class="card__group">
                    <p class="card-text">Оснащение номера</p>
                    <div class="card__group-icons">

                        ${getOptions(item.options)}
                    </div>
                </div>
                <p class="card-text">Цена за сутки: <span class="card-price">${item.price}₽</span></p>
            </div>
            ${getButtonPopup()}
        </div>
    </div>
    `;
}

function formatName(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function getOptions(options) {
  let res = '';
  options.forEach(el => {
    res += `
        <div data-icon="${el.data}" class="prompt-icon">
            <img src="${el.icon}" alt="">
            <span class="prompt-text" aria-label="${formatName(el.name)}">
                ${formatName(el.name)}
            </span>
        </div>
        `;
  });
  return res;
}

/***/ }),

/***/ "./src/js/componenst/catalog/filter.js":
/*!*********************************************!*\
  !*** ./src/js/componenst/catalog/filter.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catalog */ "./src/js/componenst/catalog/catalog.js");
/* harmony import */ var _filter_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.template */ "./src/js/componenst/catalog/filter.template.js");
/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sort */ "./src/js/componenst/catalog/sort.js");




function popupFilter(nodes) {
  Object(_filter_template__WEBPACK_IMPORTED_MODULE_1__["bindBtns"])(nodes);
}

function filterTypes() {//???
  //сделать  функцию,которая будет фильтроватьт массив data по атрибутам
  //если это не массив, то преобразоват
  //возвращаем отфильтрованный массив и  отрисовываем
  //возможность на будущее: прелооадер,  пока происходит фильтрация    
}

function filtersControl(data, nodes) {
  nodes.filterItems.forEach(item => {
    const dataAttr = item.dataset.filter;
    filterTypes(dataAttr);
  });
}

function filterSortInit(nodes) {
  const btnSort = nodes.btnControlSort;
  const items = nodes.btnControlSort.querySelectorAll('li');
  Object(_sort__WEBPACK_IMPORTED_MODULE_2__["defaultBtnSort"])(items);
  Object(_sort__WEBPACK_IMPORTED_MODULE_2__["bindBtnSort"])(btnSort, items);
}

const filter = async () => {
  const nodes = Object(_filter_template__WEBPACK_IMPORTED_MODULE_1__["initialFilter"])();
  if (nodes === false) return;
  popupFilter(nodes);
  const data = await Object(_catalog__WEBPACK_IMPORTED_MODULE_0__["getJSON"])();
  filtersControl(data, nodes);
  filterSortInit(nodes);
};

/* harmony default export */ __webpack_exports__["default"] = (filter);

/***/ }),

/***/ "./src/js/componenst/catalog/filter.template.js":
/*!******************************************************!*\
  !*** ./src/js/componenst/catalog/filter.template.js ***!
  \******************************************************/
/*! exports provided: initialFilter, bindBtns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialFilter", function() { return initialFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindBtns", function() { return bindBtns; });
const initialFilter = () => {
  const wrapFiltertns = document.querySelector('.catalog__header-buttons');

  if (wrapFiltertns === undefined || wrapFiltertns === null) {
    return false;
  }

  const btnFilters = wrapFiltertns.querySelector('.btn__filters');
  const btnClose = document.querySelector('.filter-close');
  const btnSort = wrapFiltertns.querySelector('.btn__sort');
  const filterAside = document.querySelector('.catalog__filters');
  const filterItems = document.querySelectorAll('.filter-item');
  const substrate = document.querySelector('.filter-substrate');
  return {
    wrapControlBtns: wrapFiltertns,
    btnMobileFilters: btnFilters,
    btnMobilePopupClose: btnClose,
    btnControlSort: btnSort,
    wrapFilter: filterAside,
    filterItems: filterItems,
    popupSubstrate: substrate
  };
};

function chengeClass(className, change, node) {
  if (change === 'add') {
    node.popupSubstrate.classList.add(className);
    node.wrapFilter.classList.add(className);
  } else {
    node.popupSubstrate.classList.remove(className);
    node.wrapFilter.classList.remove(className);
  }
}

const bindBtns = nodes => {
  const activeClass = 'active';
  nodes.btnMobileFilters.addEventListener('click', () => {
    chengeClass(activeClass, 'add', nodes);
  });
  nodes.btnMobilePopupClose.addEventListener('click', () => {
    chengeClass(activeClass, 'remove', nodes);
  });
};

/***/ }),

/***/ "./src/js/componenst/catalog/sort.js":
/*!*******************************************!*\
  !*** ./src/js/componenst/catalog/sort.js ***!
  \*******************************************/
/*! exports provided: defaultBtnSort, bindBtnSort, typeSortFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultBtnSort", function() { return defaultBtnSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindBtnSort", function() { return bindBtnSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeSortFilter", function() { return typeSortFilter; });
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catalog */ "./src/js/componenst/catalog/catalog.js");
/* harmony import */ var _utilits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilits */ "./src/js/componenst/utilits.js");



function controlArrowSort(arrow) {
  if (arrow.dataset.sort === "true") {
    arrow.style.transform = "translateY(-50%) rotate(180deg)";
  } else {
    arrow.style.transform = '';
  }
}

function stylesForActiveFilter(items, value) {
  items.forEach(item => {
    if (item.dataset.active === 'activeFilter') {
      if (value === 'true') {
        item.classList.add('open');
      } else {
        item.classList.remove('open');
      }
    }
  });
}

function defaultBtnSort(items) {
  items.forEach((item, i) => {
    i !== 0 ? item.classList.remove('active') : item.classList.add('active');
  });
}
function bindBtnSort(btnSort, items) {
  btnSort.addEventListener('click', e => {
    const target = e.target;
    controlVisibleSortItems(target, items);
    controlEventsSortItems(target, btnSort, items);
  });
}

function controlVisibleSortItems(target, items) {
  if (target.classList.contains('btn__sort-arrow') && target.dataset.sort === "false") {
    addActiveClassForList(items);
    target.dataset.sort = "true";
    controlArrowSort(target);
    stylesForActiveFilter(items, target.dataset.sort);
  } else if (target.classList.contains('btn__sort-arrow') && target.dataset.sort === "true") {
    target.dataset.sort = 'false';
    controlArrowSort(target);
    defaultBtnSort(items);
    stylesForActiveFilter(items, target.dataset.sort);
  }
}

function addActiveClassForList(items) {
  items.forEach(item => {
    if (!item.classList.contains('active')) {
      item.classList.add('active');
    }
  });
}

function controlEventsSortItems(target, btnSort, items) {
  if (target.tagName === "LI" && target.dataset.item === "true") {
    changeActiveFilter(target, btnSort, items);
    sort(target.dataset.list);
  }
}

function changeActiveFilter(active, btnSort, items) {
  const btnArrow = btnSort.querySelector('.btn__sort-arrow');
  const activeFilter = btnSort.querySelector('[data-active="activeFilter"]');
  const textContent = activeFilter.querySelector('[data-content="text"]');
  activeFilter.dataset.list = active.dataset.list;
  textContent.textContent = active.textContent;
  controlVisibleSortItems(btnArrow, items);
}

async function sort(value) {
  const json = await Object(_catalog__WEBPACK_IMPORTED_MODULE_0__["getJSON"])();
  const direction = value.split('-')[0];
  const type = value.split('-')[1];
  typeSortFilter(direction, type, json);
  let wrap = Object(_utilits__WEBPACK_IMPORTED_MODULE_1__["catalogWrap"])();
  Object(_utilits__WEBPACK_IMPORTED_MODULE_1__["getEmptyHTMLForWrap"])(wrap);
  Object(_catalog__WEBPACK_IMPORTED_MODULE_0__["createCatalogItems"])(json, wrap);
}

function typeSortFilter(direction, type, json) {
  if (direction === 'top') {
    topFilter(type, json);
  }

  if (direction === 'bottom') {
    bottomFilter(type, json);
  }
}

function topFilter(type, json) {
  json.sort((a, b) => {
    if (a[type] > b[type]) {
      return 1;
    }

    if (a[type] < b[type]) {
      return -1;
    }

    return 0;
  });
}

function bottomFilter(type, json) {
  json.sort((a, b) => {
    if (a[type] < b[type]) {
      return 1;
    }

    if (a[type] > b[type]) {
      return -1;
    }

    return 0;
  });
}

/***/ }),

/***/ "./src/js/componenst/form.js":
/*!***********************************!*\
  !*** ./src/js/componenst/form.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const forms = state => {
  console.log('form'); //     const form = document.querySelectorAll('form'),
  //             inputs = document.querySelectorAll('input');
  //     checkNumInputs('input[name="user_phone"]');
  //     const message = {
  //         loading: 'Загрузка...',
  //         success: 'Спасибо! Скоро мы с Вами свяжемся',
  //         failure: 'Что-то пошло не так'
  //     };
  //     const postData = async (url, data) => {
  //         document.querySelector('.status').textContent = message.loading;
  //         let res = await fetch(url, {
  //             method:"POST", 
  //             body: data
  //         });
  //         return await res.text();
  //     }   
  //     const clearInpurs = () => {
  //         inputs.forEach(input => {
  //             input.value = '';
  //         });
  //     }
  //     form.forEach(item => {
  //         item.addEventListener('submit', (e) => {
  //             e.preventDefault();
  //             let statusMessage = document.createElement('div');
  //             statusMessage.classList.add('status');
  //             item.appendChild(statusMessage);
  //             const formDate = new FormData(item);
  //             if(item.getAttribute('data-calc') === 'end'){
  //                 for (let key in state){
  //                     formDate.append(key, state[key]);
  //                 }
  //             }
  //             postData('assets/server.php', formDate)
  //                 .then(res => {
  //                     console.log(res);
  //                     statusMessage.textContent = message.success;
  //                 })
  //                 .catch(() => {
  //                     statusMessage.textContent = message.failure;
  //                 })
  //                 .finally(() => {
  //                     clearInpurs();
  //                     setTimeout(() => {
  //                         statusMessage.remove();
  //                     }, 5000 );
  //                 })
  //         });
  //     });
};

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/componenst/gallery.js":
/*!**************************************!*\
  !*** ./src/js/componenst/gallery.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Slider {
  constructor(classes) {}

}

const gallery = () => {
  const classes = {
    slider: '.slider',
    contentWrap: '.slider__rooms-medias',
    img: '.slider__rooms-img',
    description: '.slider__rooms-desc',
    dots: '.slider-dots',
    arrow: '.slider-arrows'
  };
};

/* harmony default export */ __webpack_exports__["default"] = (gallery); //eq-clew.svg клубок(игровой комплекс)
//eq-bed.svg лежак 
//eq-home.svg домик
//eq-sharpener.svg когтеточка
//

/***/ }),

/***/ "./src/js/componenst/modals.js":
/*!*************************************!*\
  !*** ./src/js/componenst/modals.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function bindForm(selectors) {
  const popup = document.querySelector(selectors.popup),
        substrate = document.querySelector(selectors.substrate),
        form = popup.querySelector(selectors.form),
        btnClose = popup.querySelector(selectors.close),
        btnOpen = document.querySelectorAll(selectors.open),
        btnSubmit = popup.querySelector(selectors.submit),
        activeClass = selectors.activeClass;

  const openPopup = () => {
    form.classList.add(activeClass);
    substrate.style.display = 'block';
    popup.classList.add(activeClass);
  };

  const closePopup = (showOk = false) => {
    form.classList.remove(activeClass);

    if (showOk) {
      showOkMessage(selectors, substrate, popup);
    } else {
      substrate.style.display = 'none';
      popup.classList.remove(activeClass);
    }
  };

  btnOpen.forEach(btn => {
    closePopup();
    btn.addEventListener('click', () => {
      openPopup();
    });
  });
  btnClose.addEventListener('click', e => {
    e.preventDefault();
    closePopup();
  });
  substrate.addEventListener('click', () => {
    closePopup();
  });
  btnSubmit.addEventListener('click', e => {
    e.preventDefault();
    submitForm();
    closePopup(true);
  });

  const init = () => {
    closePopup();
  };

  init();
}

function showOkMessage(selectors, substrate, popup) {
  console.log(selectors);
  const messageForm = document.querySelector(selectors.message),
        btnClose = messageForm.querySelector(selectors.close),
        btnOk = messageForm.querySelector(selectors.ok),
        activeClass = selectors.activeClass;

  const showModal = () => {
    messageForm.classList.add(activeClass);
    setTimeout(() => {
      closeModal();
    }, 2000);
  };

  const closeModal = () => {
    substrate.style.display = 'none';
    messageForm.classList.remove(activeClass);
    popup.classList.remove(activeClass);
  };

  const addEventClose = () => {
    btnClose.addEventListener('click', () => {
      closeModal();
    });
    btnOk.addEventListener('click', () => {
      closeModal();
    });
    substrate.addEventListener('click', () => {
      closeModal();
    });
  };

  const init = () => {
    addEventClose();
    showModal();
  };

  init();
}

const modals = () => {
  const selectors = {
    popup: '.popup',
    substrate: '.popup-substrate',
    form: '.popup__booking',
    close: '.popup__close',
    submit: '.popups-submit',
    ok: '.btn_ok',
    message: '.popup__message',
    activeClass: 'active',
    open: '.toggle-popup'
  };
  bindForm(selectors);
};

/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./src/js/componenst/utilits.js":
/*!**************************************!*\
  !*** ./src/js/componenst/utilits.js ***!
  \**************************************/
/*! exports provided: catalogWrap, toHTML, getEmptyHTMLForWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "catalogWrap", function() { return catalogWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toHTML", function() { return toHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmptyHTMLForWrap", function() { return getEmptyHTMLForWrap; });
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modals */ "./src/js/componenst/modals.js");

function catalogWrap() {
  return document.querySelector('.catalog__products');
}
const toHTML = (cards, wrap) => {
  wrap.insertAdjacentHTML("afterbegin", cards);
  Object(_modals__WEBPACK_IMPORTED_MODULE_0__["default"])();
};
function getEmptyHTMLForWrap(wrap) {
  wrap.innerHTML = '';
}

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _componenst_burger_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./componenst/burger-menu */ "./src/js/componenst/burger-menu.js");
/* harmony import */ var _componenst_modals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./componenst/modals */ "./src/js/componenst/modals.js");
/* harmony import */ var _componenst_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componenst/form */ "./src/js/componenst/form.js");
/* harmony import */ var _componenst_arrow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componenst/arrow */ "./src/js/componenst/arrow.js");
/* harmony import */ var _componenst_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componenst/gallery */ "./src/js/componenst/gallery.js");
/* harmony import */ var _componenst_catalog_catalog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componenst/catalog/catalog */ "./src/js/componenst/catalog/catalog.js");
/* harmony import */ var _componenst_catalog_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componenst/catalog/filter */ "./src/js/componenst/catalog/filter.js");








try {
  Object(_componenst_burger_menu__WEBPACK_IMPORTED_MODULE_0__["default"])('.burger__menu', '.main__menu', 'active');
  Object(_componenst_catalog_catalog__WEBPACK_IMPORTED_MODULE_5__["default"])();
  Object(_componenst_modals__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_componenst_form__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_componenst_arrow__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_componenst_gallery__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_componenst_catalog_filter__WEBPACK_IMPORTED_MODULE_6__["default"])();
} catch (error) {
  console.log(error);
}

/***/ })

/******/ });
//# sourceMappingURL=script.js.map