(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var CONFIG = {
  KEY: 'testing',
  BASE_URL: 'https://restaurant-api.dicoding.dev/',
  BASE_IMAGE_URL: 'https://restaurant-api.dicoding.dev/images/',
  CACHE_NAME: 'foodHorizon-cache-v2',
  DATABASE_NAME: 'foodHorizon-idb-v2',
  DATABASE_VERSION: 2,
  OBJECT_STORE_NAME: 'restaurant'
};
/* harmony default export */ __webpack_exports__["a"] = (CONFIG);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _view_templates_template_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* eslint-disable no-console */

var NotificationHelper = {
  parentNoficationElement: document.querySelector('.parent-notification'),
  handle: function handle(msg) {
    if (msg === 'networkError') {
      this.showNetworkErrorMessage();
    }
  },
  showElement: function showElement() {
    this.parentNoficationElement.classList.add('display');
  },
  hideElement: function hideElement() {
    this.parentNoficationElement.classList.remove('display');
  },
  LoadingIndicator: function LoadingIndicator(status) {
    this.parentNoficationElement.innerHTML = Object(_view_templates_template_creator__WEBPACK_IMPORTED_MODULE_0__[/* createLoadingIndicator */ "b"])();

    if (status === 0) {
      this.hideElement();
    } else {
      this.showElement();
    }
  },
  showNetworkErrorMessage: function showNetworkErrorMessage() {
    var _this = this;

    this.parentNoficationElement.innerHTML = Object(_view_templates_template_creator__WEBPACK_IMPORTED_MODULE_0__[/* createMessage */ "c"])();
    document.querySelector('.notification-text').innerText = 'failed to Getting Data from server, try to check your internet connection';
    setTimeout(function () {
      return _this.hideElement();
    }, 3000);
  },
  showSuccessMessage: function showSuccessMessage(message) {
    var _this2 = this;

    this.showElement();
    this.parentNoficationElement.innerHTML = Object(_view_templates_template_creator__WEBPACK_IMPORTED_MODULE_0__[/* createMessage */ "c"])();
    document.querySelector('.notification-text').innerText = message;
    setTimeout(function () {
      return _this2.hideElement();
    }, 2000);
  }
};
/* harmony default export */ __webpack_exports__["a"] = (NotificationHelper);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var titleChanger = {
  changeHeader: function changeHeader(content) {
    document.title = "FoodHorizon - ".concat(content);
  }
};
/* harmony default export */ __webpack_exports__["a"] = (titleChanger);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/scripts/globals/config.js
var config = __webpack_require__(1);

// CONCATENATED MODULE: ./src/scripts/globals/api-endpoint.js

var API_ENDPOINT = {
  ALL_RESTAURANTS: "".concat(config["a" /* default */].BASE_URL, "list"),
  DETAIL_RESTAURANTS: function DETAIL_RESTAURANTS(id) {
    return "".concat(config["a" /* default */].BASE_URL, "detail/").concat(id);
  },
  ADD_REVIEW: "".concat(config["a" /* default */].BASE_URL, "review")
};
/* harmony default export */ var api_endpoint = (API_ENDPOINT);
// CONCATENATED MODULE: ./src/scripts/data/dicodingdb-source.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var dicodingdb_source_DicodingDbSource = /*#__PURE__*/function () {
  function DicodingDbSource() {
    _classCallCheck(this, DicodingDbSource);
  }

  _createClass(DicodingDbSource, null, [{
    key: "allRestaurants",
    value: function () {
      var _allRestaurants = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var response, responseJson;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch(api_endpoint.ALL_RESTAURANTS);

              case 2:
                response = _context.sent;
                _context.next = 5;
                return response.json();

              case 5:
                responseJson = _context.sent;
                return _context.abrupt("return", responseJson.restaurants);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function allRestaurants() {
        return _allRestaurants.apply(this, arguments);
      }

      return allRestaurants;
    }()
  }, {
    key: "detailRestaurant",
    value: function () {
      var _detailRestaurant = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
        var response;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetch(api_endpoint.DETAIL_RESTAURANTS(id));

              case 2:
                response = _context2.sent;
                return _context2.abrupt("return", response.json());

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function detailRestaurant(_x) {
        return _detailRestaurant.apply(this, arguments);
      }

      return detailRestaurant;
    }()
  }, {
    key: "addReviewOfRestaurant",
    value: function () {
      var _addReviewOfRestaurant = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(restaurantId, personName, personReview) {
        var dataReview, requestSetting, response;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                dataReview = {
                  id: restaurantId,
                  name: personName,
                  review: personReview
                };
                requestSetting = {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(dataReview)
                };
                _context3.next = 4;
                return fetch(api_endpoint.ADD_REVIEW, requestSetting);

              case 4:
                response = _context3.sent;
                return _context3.abrupt("return", response.json());

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function addReviewOfRestaurant(_x2, _x3, _x4) {
        return _addReviewOfRestaurant.apply(this, arguments);
      }

      return addReviewOfRestaurant;
    }()
  }]);

  return DicodingDbSource;
}();

/* harmony default export */ var dicodingdb_source = __webpack_exports__["a"] = (dicodingdb_source_DicodingDbSource);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* eslint-disable no-underscore-dangle */
var UrlParser = {
  parseActiveUrlWithCombiner: function parseActiveUrlWithCombiner() {
    var url = window.location.hash.slice(1).toLowerCase();

    var splitedUrl = this._urlSplitter(url);

    return this._urlCombiner(splitedUrl);
  },
  parseActiveUrlWithoutCombiner: function parseActiveUrlWithoutCombiner() {
    var url = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(url);
  },
  _urlSplitter: function _urlSplitter(url) {
    var urlsSplits = url.split('/');
    return {
      resource: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
      verb: urlsSplits[3] || null
    };
  },
  _urlCombiner: function _urlCombiner(splitedUrl) {
    return (splitedUrl.resource ? "/".concat(splitedUrl.resource) : '/') + (splitedUrl.id ? '/:id' : '') + (splitedUrl.verb ? "".concat(splitedUrl.verb) : '');
  }
};
/* harmony default export */ __webpack_exports__["a"] = (UrlParser);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _globals_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var DATABASE_NAME = _globals_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].DATABASE_NAME,
    DATABASE_VERSION = _globals_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].DATABASE_VERSION,
    OBJECT_STORE_NAME = _globals_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].OBJECT_STORE_NAME;
var dbPromise = Object(idb__WEBPACK_IMPORTED_MODULE_0__[/* openDB */ "a"])(DATABASE_NAME, DATABASE_VERSION, {
  upgrade: function upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, {
      keyPath: 'id'
    });
  }
});

var makeLowerCaseAndTrimText = function makeLowerCaseAndTrimText(text) {
  var lowerText = text.toLowerCase();
  var trimText = lowerText.replace(/\s/g, '');
  return trimText;
};

var FavoriteRestaurantIdb = {
  getRestaurant: function getRestaurant(id) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (id) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", false);

            case 2:
              _context.next = 4;
              return dbPromise;

            case 4:
              return _context.abrupt("return", _context.sent.get(OBJECT_STORE_NAME, id));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  getAllRestaurant: function getAllRestaurant() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return dbPromise;

            case 2:
              return _context2.abrupt("return", _context2.sent.getAll(OBJECT_STORE_NAME));

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  putRestaurant: function putRestaurant(restaurant) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (Object.prototype.hasOwnProperty.call(restaurant, 'id')) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return", false);

            case 2:
              _context3.next = 4;
              return dbPromise;

            case 4:
              return _context3.abrupt("return", _context3.sent.put(OBJECT_STORE_NAME, restaurant));

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  deleteRestaurant: function deleteRestaurant(id) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return dbPromise;

            case 2:
              return _context4.abrupt("return", _context4.sent["delete"](OBJECT_STORE_NAME, id));

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  },
  searchRestaurant: function searchRestaurant(query) {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      var userQuery;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              userQuery = makeLowerCaseAndTrimText(query);
              _context5.next = 3;
              return _this.getAllRestaurant();

            case 3:
              return _context5.abrupt("return", _context5.sent.filter(function (restaurant) {
                var restaurantTitle = makeLowerCaseAndTrimText(restaurant.title || '');
                return restaurantTitle.indexOf(userQuery) !== -1;
              }));

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  }
};
/* harmony default export */ __webpack_exports__["a"] = (FavoriteRestaurantIdb);

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* eslint-disable no-underscore-dangle */
var DrawerInitiator = {
  init: function init(_ref) {
    var _this = this;

    var button = _ref.button,
        content = _ref.content,
        drawer = _ref.drawer,
        hero = _ref.hero;
    button.addEventListener('click', function (event) {
      _this._toggleDrawer(event, drawer);
    });
    content.addEventListener('click', function (event) {
      _this._closeDrawer(event, drawer);
    });
    hero.addEventListener('click', function (event) {
      _this._closeDrawer(event, drawer);
    });
  },
  _toggleDrawer: function _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('display');
  },
  _closeDrawer: function _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('display');
  }
};
/* harmony default export */ __webpack_exports__["a"] = (DrawerInitiator);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* eslint-disable no-underscore-dangle */
var CustomElementInitiator = {
  register: function register(arrayOfCustomElement) {
    var allCustomElement = arrayOfCustomElement;
    allCustomElement.forEach(function (item) {
      customElements.define(item.tagName, item.classElement);
    });
  }
};
/* harmony default export */ __webpack_exports__["a"] = (CustomElementInitiator);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _view_pages_all_restaurants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _view_pages_detail_restaurant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _view_pages_likes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);



var routes = {
  '/': _view_pages_all_restaurants__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
  // default page
  '/home': _view_pages_all_restaurants__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
  '/restaurant/:id': _view_pages_detail_restaurant__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  '/likes': _view_pages_likes__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
};
/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Data = __webpack_require__(29);

var ViralDbSource = /*#__PURE__*/function () {
  function ViralDbSource() {
    _classCallCheck(this, ViralDbSource);
  }

  _createClass(ViralDbSource, null, [{
    key: "getAll",
    value: function () {
      var _getAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", Data.viralFood);

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getAll() {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }()
  }]);

  return ViralDbSource;
}();

/* harmony default export */ __webpack_exports__["a"] = (ViralDbSource);

/***/ }),
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _view_templates_template_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* eslint-disable no-underscore-dangle */

var LikeButtonPresenter = {
  init: function init(_ref) {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var likeButtonContainer, favoriteRestaurantModel, restaurant;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              likeButtonContainer = _ref.likeButtonContainer, favoriteRestaurantModel = _ref.favoriteRestaurantModel, restaurant = _ref.restaurant;
              _this._likeButtonContainer = likeButtonContainer;
              _this._favoriteRestaurantModel = favoriteRestaurantModel;
              _this._restaurant = restaurant;
              _context.next = 6;
              return _this._renderButton();

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  _renderButton: function _renderButton() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var id;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              id = _this2._restaurant.id;
              _context2.next = 3;
              return _this2._isRestaurantExist(id);

            case 3:
              if (!_context2.sent) {
                _context2.next = 7;
                break;
              }

              _this2._renderUnlikeRestaurantButton();

              _context2.next = 8;
              break;

            case 7:
              _this2._renderLikeRestaurantButton();

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  _isRestaurantExist: function _isRestaurantExist(id) {
    var _this3 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var restaurant;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this3._favoriteRestaurantModel.getRestaurant(id);

            case 2:
              restaurant = _context3.sent;
              return _context3.abrupt("return", !!restaurant);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  _renderLikeRestaurantButton: function _renderLikeRestaurantButton() {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      var likeButton;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _this4._likeButtonContainer.innerHTML = Object(_view_templates_template_creator__WEBPACK_IMPORTED_MODULE_0__[/* createLikeRestaurantButtonTemplate */ "a"])();
              likeButton = document.querySelector('#likeButton');
              likeButton.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.next = 2;
                        return _this4._favoriteRestaurantModel.putRestaurant(_this4._restaurant);

                      case 2:
                        _this4._renderButton();

                      case 3:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              })));

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  },
  _renderUnlikeRestaurantButton: function _renderUnlikeRestaurantButton() {
    var _this5 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
      var likeButton;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _this5._likeButtonContainer.innerHTML = Object(_view_templates_template_creator__WEBPACK_IMPORTED_MODULE_0__[/* createUnlikeRestaurantButtonTemplate */ "f"])();
              likeButton = document.querySelector('#likeButton');
              likeButton.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        _context6.next = 2;
                        return _this5._favoriteRestaurantModel.deleteRestaurant(_this5._restaurant.id);

                      case 2:
                        _this5._renderButton();

                      case 3:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6);
              })));

            case 3:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }))();
  }
};
/* harmony default export */ __webpack_exports__["a"] = (LikeButtonPresenter);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _data_dicodingdb_source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _notification_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* eslint-disable no-underscore-dangle */


var reviewHandler = {
  init: function init(objectOfInputElement, restaurantId) {
    this._personNameElement = objectOfInputElement.personNameElement;
    this._personReviewElement = objectOfInputElement.personReviewElement;
    this._submitButtonElement = objectOfInputElement.submitButtonElement;
    this._restaurantId = restaurantId;
    this.attachSubmitEvent();
  },
  afterSubmit: function afterSubmit() {
    this._personNameElement.value = '';
    this._personReviewElement.value = '';
    window.scrollTo(0, document.body.scrollHeight - 200);
  },
  attachSubmitEvent: function attachSubmitEvent() {
    var _this = this;

    this._submitButtonElement.addEventListener('click', function () {
      _this.addReview();
    });
  },
  addReview: function addReview() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var performReview;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _data_dicodingdb_source__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].addReviewOfRestaurant(_this2._restaurantId, _this2._personNameElement.value, _this2._personReviewElement.value);

            case 2:
              performReview = _context.sent;

              if (!performReview.error) {
                _notification_helper__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].showSuccessMessage('your Review has been added');
                performReview.customerReviews.forEach(function (review) {
                  var container = document.querySelector('.review-listreview__all');
                  var reviewElement = document.createElement('review-item');
                  reviewElement.setReviewData = review;
                  container.appendChild(reviewElement);
                });

                _this2.afterSubmit();
              } else {
                // eslint-disable-next-line no-console
                console.error('Ada error bagian review handler');
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
};
/* harmony default export */ __webpack_exports__["a"] = (reviewHandler);

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(module) {

module.exports = JSON.parse("{\"viralFood\":[{\"id\":\"1635514375580\",\"name\":\"Risoles Roti tawar\",\"image\":\"https://d12man5gwydfvl.cloudfront.net/wp-content/uploads/2020/07/shutterstock_1251826876.jpg\",\"description\":\"Risoles yang unik, dan jauh dari kata ribet. Banyak pengguna TikTok yang membagikan resep makanan ini.\"},{\"id\":\"1635514377661\",\"name\":\"Banoffe\",\"image\":\"https://d12man5gwydfvl.cloudfront.net/wp-content/uploads/2020/07/shutterstock_1035537679.jpg\",\"description\":\"Kamu suka dengan olahan pisang? Kalau begitu kamu wajib mencoba banoffee. Teksturnya lembut dengan rasa manis dan lumer di mulut serta aromanya yang menggoda, pasti bikin kamu ketagihan!\"},{\"id\":\"1635514376693\",\"name\":\"Simple Churros\",\"image\":\"https://d12man5gwydfvl.cloudfront.net/wp-content/uploads/2020/07/shutterstock_1037089564.jpg\",\"description\":\"Churros juga jadi makanan kekinian yang ikut viral di TikTok. Hmmm, terlihat sungguh enak!\"}]}");

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(26);

// EXTERNAL MODULE: ./src/styles/main.scss
var main = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/lazysizes/lazysizes.js
var lazysizes = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/lazysizes/plugins/parent-fit/ls.parent-fit.js
var ls_parent_fit = __webpack_require__(28);

// EXTERNAL MODULE: ./src/scripts/view/app.js
var app = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/serviceworker-webpack-plugin/lib/runtime.js
var lib_runtime = __webpack_require__(19);
var lib_runtime_default = /*#__PURE__*/__webpack_require__.n(lib_runtime);

// CONCATENATED MODULE: ./src/scripts/utils/service-worker-register.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var ServiceWorkerRegister = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!('serviceWorker' in navigator)) {
              _context.next = 4;
              break;
            }

            _context.next = 3;
            return lib_runtime_default.a.register();

          case 3:
            return _context.abrupt("return");

          case 4:
            // eslint-disable-next-line no-console
            console.log('Service worker tidak didukung oleh browser yang anda pakai.');

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function ServiceWorkerRegister() {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ var service_worker_register = (ServiceWorkerRegister);
// EXTERNAL MODULE: ./src/scripts/view/templates/custom-element/restaurant-item-element.js
var restaurant_item_element = __webpack_require__(20);

// EXTERNAL MODULE: ./src/scripts/view/templates/custom-element/viral-food-item-element.js
var viral_food_item_element = __webpack_require__(21);

// EXTERNAL MODULE: ./src/scripts/view/templates/custom-element/restaurant-detail-element.js
var restaurant_detail_element = __webpack_require__(22);

// EXTERNAL MODULE: ./src/scripts/view/templates/custom-element/list-menu.js
var list_menu = __webpack_require__(23);

// EXTERNAL MODULE: ./src/scripts/view/templates/custom-element/review-item.js
var review_item = __webpack_require__(24);

// EXTERNAL MODULE: ./src/scripts/utils/notification-helper.js
var notification_helper = __webpack_require__(2);

// CONCATENATED MODULE: ./src/scripts/index.js

/* for async await transpile */











 // eslint-disable-next-line no-unused-vars

var appInstance = new app["a" /* default */]({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#maincontent'),
  hero: document.querySelector('.hero')
}, [{
  tagName: 'restaurant-item-element',
  classElement: restaurant_item_element["a" /* default */]
}, {
  tagName: 'viral-food-item-element',
  classElement: viral_food_item_element["a" /* default */]
}, {
  tagName: 'restaurant-detail-element',
  classElement: restaurant_detail_element["a" /* default */]
}, {
  tagName: 'list-menu',
  classElement: list_menu["a" /* default */]
}, {
  tagName: 'review-item',
  classElement: review_item["a" /* default */]
}]);
window.addEventListener('hashchange', function () {
  appInstance.renderPage();
});
window.addEventListener('load', function () {
  appInstance.renderPage();
  service_worker_register();
});
navigator.serviceWorker.addEventListener('message', function (event) {
  notification_helper["a" /* default */].handle(event.data);
});

/***/ })
]]);