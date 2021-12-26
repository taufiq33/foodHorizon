/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([30,0,2]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return createRestaurantDetailTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return createRestaurantItemTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return createViralFoodItemTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createLikeRestaurantButtonTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return createUnlikeRestaurantButtonTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createLoadingIndicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createMessage; });
var createRestaurantDetailTemplate = function createRestaurantDetailTemplate(restaurant) {
  var restaurantDetailElement = document.createElement('restaurant-detail-element');
  restaurantDetailElement.setRestaurantData = restaurant.restaurant;
  return restaurantDetailElement;
};

var createViralFoodItemTemplate = function createViralFoodItemTemplate(food) {
  var viralFoodElement = document.createElement('viral-food-item-element');
  viralFoodElement.setFood = food;
  return viralFoodElement;
};

var createRestaurantItemTemplate = function createRestaurantItemTemplate(restaurant) {
  var restaurantElement = document.createElement('restaurant-item-element');
  restaurantElement.setRestaurantData = restaurant;
  return restaurantElement;
};

var createLikeRestaurantButtonTemplate = function createLikeRestaurantButtonTemplate() {
  return "\n  <button aria-label=\"like this restaurant\" id=\"likeButton\" class=\"like\">\u2661</button>\n";
};

var createUnlikeRestaurantButtonTemplate = function createUnlikeRestaurantButtonTemplate() {
  return "\n  <button aria-label=\"unlike this restaurant\" id=\"likeButton\" class=\"like\">&hearts;</button>\n";
};

var createLoadingIndicator = function createLoadingIndicator() {
  return "\n  <div class=\"loading-indicator\"></div>\n";
};

var createMessage = function createMessage() {
  return "\n  <p class=\"notification-text\"></p>\n";
};



/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _data_dicodingdb_source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _data_viraldb_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _utils_title_changer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _templates_template_creator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var AllRestaurants = {
  render: function render() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", "\n      <section class=\"viral-food\">\n          <div class=\"viral-food__title\">\n              <h2>The most viral and trending food, want to try it?</h2>\n          </div>\n\n          <div class=\"viral-food__content\"></div>\n\n      </section>\n\n      <section class=\"explore-restaurant\">\n          <div class=\"explore-restaurant__title\">\n              <h2>Explore Best Restaurant here..</h2>\n          </div>\n\n          <div class=\"restaurants-container\"></div>\n\n      </section>\n    ");

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  afterRender: function afterRender() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var viralFoods, viralFoodsContainer, restaurants, restaurantsContainer;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _utils_title_changer__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].changeHeader('All Restaurant');
              _context2.next = 3;
              return _data_viraldb_source__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].getAll();

            case 3:
              viralFoods = _context2.sent;
              viralFoodsContainer = document.querySelector('.viral-food__content');
              viralFoods.forEach(function (food) {
                viralFoodsContainer.appendChild(Object(_templates_template_creator__WEBPACK_IMPORTED_MODULE_3__[/* createViralFoodItemTemplate */ "g"])(food));
              });
              _context2.next = 8;
              return _data_dicodingdb_source__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].allRestaurants();

            case 8:
              restaurants = _context2.sent;
              restaurantsContainer = document.querySelector('.restaurants-container');
              restaurants.forEach(function (restaurant) {
                restaurantsContainer.appendChild(Object(_templates_template_creator__WEBPACK_IMPORTED_MODULE_3__[/* createRestaurantItemTemplate */ "e"])(restaurant));
              });

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
};
/* harmony default export */ __webpack_exports__["a"] = (AllRestaurants);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_drawer_initiator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _utils_custom_element_initiator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _utils_notification_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _routes_url_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable no-underscore-dangle */






var App = /*#__PURE__*/function () {
  function App(_ref) {
    var button = _ref.button,
        drawer = _ref.drawer,
        content = _ref.content,
        hero = _ref.hero;
    var arrayOfCustomElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    _classCallCheck(this, App);

    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._hero = hero;
    this._arrayOfCustomElement = arrayOfCustomElement;

    this._initialAppShell();
  }

  _createClass(App, [{
    key: "_initialAppShell",
    value: function _initialAppShell() {
      _utils_drawer_initiator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].init({
        button: this._button,
        drawer: this._drawer,
        content: this._content,
        hero: this._hero
      });

      if (!this._isEmptyArrayOfCustomElement()) {
        _utils_custom_element_initiator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].register(this._arrayOfCustomElement);
      }
    }
  }, {
    key: "_isEmptyArrayOfCustomElement",
    value: function _isEmptyArrayOfCustomElement() {
      return this._arrayOfCustomElement.length < 1;
    }
  }, {
    key: "_activateSkipToContentEvent",
    value: function _activateSkipToContentEvent() {
      var _this = this;

      var btnSkip = document.querySelector('.skip-link');
      btnSkip.addEventListener('click', function (event) {
        event.preventDefault();

        _this._content.focus();
      });
    }
  }, {
    key: "renderPage",
    value: function () {
      var _renderPage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var url, page;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _utils_notification_helper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].LoadingIndicator(1);
                url = _routes_url_parser__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].parseActiveUrlWithCombiner();
                page = _routes_routes__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"][url];
                _context.next = 5;
                return page.render();

              case 5:
                this._content.innerHTML = _context.sent;
                _context.next = 8;
                return page.afterRender();

              case 8:
                this._activateSkipToContentEvent();

                _utils_notification_helper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].LoadingIndicator(0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function renderPage() {
        return _renderPage.apply(this, arguments);
      }

      return renderPage;
    }()
  }]);

  return App;
}();

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _data_dicodingdb_source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _utils_title_changer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _utils_like_button_presenter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _utils_review_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var _data_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _templates_template_creator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var _routes_url_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








var DetailRestaurant = {
  render: function render() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", "\n      <div class='container'></div>\n      <did id=\"likeButtonContainer\"></div>\n    ");

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  afterRender: function afterRender() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var url, restaurant, container, likeButtonContainerElement, personNameInputElement, personReviewInputElement, submitButton;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              url = _routes_url_parser__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].parseActiveUrlWithoutCombiner();
              _context2.next = 3;
              return _data_dicodingdb_source__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].detailRestaurant(url.id);

            case 3:
              restaurant = _context2.sent;
              container = document.querySelector('.container');
              container.appendChild(Object(_templates_template_creator__WEBPACK_IMPORTED_MODULE_5__[/* createRestaurantDetailTemplate */ "d"])(restaurant));
              _utils_title_changer__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].changeHeader(restaurant.restaurant.name);
              likeButtonContainerElement = document.querySelector('#likeButtonContainer');
              likeButtonContainerElement.innerHTML = Object(_templates_template_creator__WEBPACK_IMPORTED_MODULE_5__[/* createLikeRestaurantButtonTemplate */ "a"])();
              _utils_like_button_presenter__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].init({
                likeButtonContainer: likeButtonContainerElement,
                favoriteRestaurantModel: _data_database__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],
                restaurant: {
                  id: restaurant.restaurant.id,
                  name: restaurant.restaurant.name,
                  rating: restaurant.restaurant.rating,
                  description: restaurant.restaurant.description,
                  city: restaurant.restaurant.city,
                  pictureId: restaurant.restaurant.pictureId
                }
              });
              personNameInputElement = document.querySelector('#form-review-name');
              personReviewInputElement = document.querySelector('#form-review-text');
              submitButton = document.querySelector('#form-review-submit-button');
              _utils_review_handler__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].init({
                personNameElement: personNameInputElement,
                personReviewElement: personReviewInputElement,
                submitButtonElement: submitButton
              }, restaurant.restaurant.id);

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
};
/* harmony default export */ __webpack_exports__["a"] = (DetailRestaurant);

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_title_changer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _data_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _templates_template_creator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var Likes = {
  render: function render() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", "\n      <section class=\"explore-restaurant\">\n          <div class=\"explore-restaurant__title\">\n              <h2>List of your favorite restaurants</h2>\n          </div>\n\n          <div class=\"restaurants-container\"></div>\n\n      </section>\n    ");

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  afterRender: function afterRender() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var restaurantsContainer, restaurants;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _utils_title_changer__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].changeHeader('My Favourite Restaurant');
              restaurantsContainer = document.querySelector('.restaurants-container');
              _context2.next = 4;
              return _data_database__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].getAllRestaurant();

            case 4:
              restaurants = _context2.sent;

              if (restaurants.length > 0) {
                restaurants.forEach(function (restaurant) {
                  restaurantsContainer.appendChild(Object(_templates_template_creator__WEBPACK_IMPORTED_MODULE_2__[/* createRestaurantItemTemplate */ "e"])(restaurant));
                });
              } else {
                restaurantsContainer.innerHTML = 'You dont have a list of favorite restaurants yet,';
              }

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
};
/* harmony default export */ __webpack_exports__["a"] = (Likes);

/***/ }),
/* 19 */,
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _globals_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/* eslint-disable no-underscore-dangle */

var RestaurantItemElement = /*#__PURE__*/function (_HTMLElement) {
  _inherits(RestaurantItemElement, _HTMLElement);

  var _super = _createSuper(RestaurantItemElement);

  function RestaurantItemElement() {
    _classCallCheck(this, RestaurantItemElement);

    return _super.apply(this, arguments);
  }

  _createClass(RestaurantItemElement, [{
    key: "setRestaurantData",
    set: function set(restaurant) {
      this._restaurant = restaurant;
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.classList.add('explore-restaurant__item');
      this.innerHTML = "\n      <div class=\"explore-restaurant__item__image__container\">\n          <img src=\"/images/placeholder/resto-load.jpg\" data-src=\"".concat(_globals_config__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].BASE_IMAGE_URL, "medium/").concat(this._restaurant.pictureId, "\" alt=\"").concat(this._restaurant.name, "\" class=\"explore-restaurant__item__image lazyload\">\n          <span class=\"explore-restaurant__item__rating\">\n              &#9733; ").concat(this._restaurant.rating, "\n          </span>\n      </div>\n      \n      <div class=\"explore-restaurant__item__content\">\n          <h3><a href=\"/#/restaurant/").concat(this._restaurant.id, "\">").concat(this._restaurant.name, "</a></h3>\n          <p>").concat(this._restaurant.description, "</p>\n          <span> &#128204; ").concat(this._restaurant.city, " </span>\n      </div>\n    ");
    }
  }]);

  return RestaurantItemElement;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

/* harmony default export */ __webpack_exports__["a"] = (RestaurantItemElement);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint-disable no-underscore-dangle */
var ViralFoodItemElement = /*#__PURE__*/function (_HTMLElement) {
  _inherits(ViralFoodItemElement, _HTMLElement);

  var _super = _createSuper(ViralFoodItemElement);

  function ViralFoodItemElement() {
    _classCallCheck(this, ViralFoodItemElement);

    return _super.apply(this, arguments);
  }

  _createClass(ViralFoodItemElement, [{
    key: "setFood",
    set: function set(food) {
      this._food = food;
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.classList.add('viral-food__item');
      this.innerHTML = "\n      <img src=\"/images/placeholder/resto-load.jpg\" data-src=\"".concat(this._food.image, "\"\n      alt=\"").concat(this._food.name, "\" class=\"viral-food__item__image lazyload\">\n      <div class=\"viral-food__item__content\">\n          <h3><a href=\"#\">").concat(this._food.name, "</a></h3>\n          <p>").concat(this._food.description, "</p>\n      </div>\n    ");
    }
  }]);

  return ViralFoodItemElement;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

/* harmony default export */ __webpack_exports__["a"] = (ViralFoodItemElement);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _globals_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint-disable no-underscore-dangle */


var RestaurantDetailElement = /*#__PURE__*/function (_HTMLElement) {
  _inherits(RestaurantDetailElement, _HTMLElement);

  var _super = _createSuper(RestaurantDetailElement);

  function RestaurantDetailElement() {
    _classCallCheck(this, RestaurantDetailElement);

    return _super.apply(this, arguments);
  }

  _createClass(RestaurantDetailElement, [{
    key: "setRestaurantData",
    set: function set(restaurant) {
      this._restaurant = restaurant;
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "_putCategories",
    value: function _putCategories() {
      var _this = this;

      this._restaurant.categories.forEach(function (category) {
        var container = _this.querySelector('.resto_information__category');

        var categoryElement = document.createElement('span');
        categoryElement.innerHTML = "".concat(category.name, " ");
        container.appendChild(categoryElement);
      });
    }
  }, {
    key: "_putCustomerReviews",
    value: function _putCustomerReviews() {
      var _this2 = this;

      this._restaurant.customerReviews.forEach(function (review) {
        var container = _this2.querySelector('.review-listreview__all');

        var reviewElement = document.createElement('review-item');
        reviewElement.setReviewData = review;
        container.appendChild(reviewElement);
      });
    }
  }, {
    key: "_putRestaurantMenu",
    value: function _putRestaurantMenu() {
      var menuContainer = this.querySelector('.restomenu__menu');
      var menuElement = document.createElement('list-menu');
      menuElement.setMenuData = this._restaurant.menus;
      menuContainer.appendChild(menuElement);
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "\n      <div class='restomenu'>\n        <div class='restomenu__resto'> \n    \n          <div class=\"resto_information\"> \n            <div class=\"resto_information__image\">\n              <img src=\"/images/placeholder/resto-load.jpg\" data-src=\"".concat(_globals_config__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].BASE_IMAGE_URL, "large/").concat(this._restaurant.pictureId, "\" class=\"lazyload\" alt=\"").concat(this._restaurant.name, "\">\n            </div>\n\n            <div class=\"resto_information__category\">\n              \n            </div>\n    \n            <div class=\"resto_information__title\">\n              <h2>").concat(this._restaurant.name, "</h2>\n              <p>").concat(this._restaurant.address, "</p>\n            </div>\n    \n          </div>\n    \n          <div class=\"resto-extras\">\n            <div id=\"resto-extras__rating\" class=\"resto-extras__item\">\n              &#9733; ").concat(this._restaurant.rating, "\n            </div>\n    \n            <div id=\"resto-extras__city\" class=\"resto-extras__item\">\n              <h3>\uD83D\uDCCC ").concat(this._restaurant.city, "</h3>\n            </div>\n    \n            <div id=\"resto-extras__reviews\" class=\"resto-extras__item\">\n              <p>").concat(this._restaurant.customerReviews.length, " reviews</p>\n            </div>\n          </div>\n    \n          <div class=\"resto-description\">\n            <p>").concat(this._restaurant.description, "</p>\n          </div>\n    \n        </div>\n    \n        <div class='restomenu__menu'>\n          \n        </div>\n\n      </div>\n    \n      <div class=\"review\">\n        <div class=\"review-reviewform\">\n          <h2>ADD REVIEW</h2>\n    \n          <div class='review-reviewform__mainform'>\n              <div class=\"formgroup\">\n                <label for='form-review-name'>Name</label>\n                <input type='text' name='name' id='form-review-name' placeholder='your name' />\n              </div>\n              <div class=\"formgroup\">\n                <label for=\"form-review-text\">Review</label>\n                <textarea name='review' placeholder=\"your review\" id=\"form-review-text\"></textarea>\n              </div>\n              <div class=\"formgroup\">\n                <button id=\"form-review-submit-button\" type=\"submit\">Submit</button>\n              </div>\n          </div>\n        </div>\n    \n        <div class=\"review-listreview\">\n          <h2>REVIEWS</h2>\n\n          <div class='review-listreview__all'></div>\n        </div>\n      </div>\n    ");

      this._putCategories();

      this._putCustomerReviews();

      this._putRestaurantMenu();
    }
  }]);

  return RestaurantDetailElement;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

/* harmony default export */ __webpack_exports__["a"] = (RestaurantDetailElement);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint-disable no-underscore-dangle */
var ListMenu = /*#__PURE__*/function (_HTMLElement) {
  _inherits(ListMenu, _HTMLElement);

  var _super = _createSuper(ListMenu);

  function ListMenu() {
    _classCallCheck(this, ListMenu);

    return _super.apply(this, arguments);
  }

  _createClass(ListMenu, [{
    key: "setMenuData",
    set: function set(menus) {
      this._foodMenu = menus.foods;
      this._drinkMenu = menus.drinks;
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "_putFoodMenu",
    value: function _putFoodMenu() {
      var foodMenuContainer = this.querySelector('#food_menu');

      this._foodMenu.forEach(function (food) {
        var foodMenuElement = document.createElement('li');
        foodMenuElement.innerHTML = "\u2714\uFE0F ".concat(food.name);
        foodMenuContainer.appendChild(foodMenuElement);
      });
    }
  }, {
    key: "_putDrinkMenu",
    value: function _putDrinkMenu() {
      var drinkMenuContainer = this.querySelector('#drink_menu');

      this._drinkMenu.forEach(function (drink) {
        var drinkMenuElement = document.createElement('li');
        drinkMenuElement.innerHTML = "\u2714\uFE0F ".concat(drink.name);
        drinkMenuContainer.appendChild(drinkMenuElement);
      });
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "\n    <h2>MENU</h2>\n        <div class=\"menu-item\">\n          <div class=\"menu-item__title\">\n            <h3>FOODS (".concat(this._foodMenu.length, ")</h3>\n          </div>\n  \n          <div class=\"menu-item__list\">\n            <ul id=\"food_menu\">\n              \n            </ul>\n          </div>\n        </div>\n  \n        <div class=\"menu-item\">\n          <div class=\"menu-item__title\">\n            <h3>DRINKS (").concat(this._drinkMenu.length, ")</h3>\n          </div>\n  \n          <div class=\"menu-item__list\">\n            <ul id=\"drink_menu\">\n              \n            </ul>\n          </div>\n        </div>\n    ");

      this._putFoodMenu();

      this._putDrinkMenu();
    }
  }]);

  return ListMenu;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

/* harmony default export */ __webpack_exports__["a"] = (ListMenu);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint-disable no-underscore-dangle */
var ReviewItem = /*#__PURE__*/function (_HTMLElement) {
  _inherits(ReviewItem, _HTMLElement);

  var _super = _createSuper(ReviewItem);

  function ReviewItem() {
    _classCallCheck(this, ReviewItem);

    return _super.apply(this, arguments);
  }

  _createClass(ReviewItem, [{
    key: "setReviewData",
    set: function set(review) {
      this._review = review;
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "\n    <h3 class='cust-review-name'>".concat(this._review.name, "</h3> says..\n    \"<p class='cust-review-text'>").concat(this._review.review, "</p>\"\n    <span>on ").concat(this._review.date, "</span>\n    ");
    }
  }]);

  return ReviewItem;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

/* harmony default export */ __webpack_exports__["a"] = (ReviewItem);

/***/ }),
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin


/***/ })
/******/ ]);