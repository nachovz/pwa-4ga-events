module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nprogress__ = __webpack_require__("nprogress");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nprogress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_nprogress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_router__);
var _jsxFileName = "/home/ubuntu/workspace/pwa-events/component/Header.js";






__WEBPACK_IMPORTED_MODULE_4_next_router___default.a.onRouteChangeStart = function (url) {
  console.log("Loading: ".concat(url));
  __WEBPACK_IMPORTED_MODULE_3_nprogress___default.a.start();
};

__WEBPACK_IMPORTED_MODULE_4_next_router___default.a.onRouteChangeComplete = function () {
  return __WEBPACK_IMPORTED_MODULE_3_nprogress___default.a.done();
};

__WEBPACK_IMPORTED_MODULE_4_next_router___default.a.onRouteChangeError = function () {
  return __WEBPACK_IMPORTED_MODULE_3_nprogress___default.a.done();
};

/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/css/nprogress.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/css/bootstrap.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
    className: "navbar navbar-expand-lg navbar-dark bg-dark custom-4ga-navbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "navbar-brand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "https://assets.breatheco.de/apis/img/images.php?blob&random&cat=logo&tags=4geeks,white,small",
    width: "100",
    alt: "4Geeks Logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarSupportedContent",
    "aria-controls": "navbarSupportedContent",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "navbar-toggler-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarSupportedContent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "navbar-nav ml-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "nav-link",
    "data-toggle": "tooltip",
    "data-placement": "top",
    title: "Discover why ours is the best program in the city",
    href: "https://www.4geeksacademy.co/the-program/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, "The Program ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, "(current)"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "nav-link",
    "data-toggle": "tooltip",
    "data-placement": "top",
    title: "We offer the best possible pricing in town",
    href: "https://www.4geeksacademy.co/pricing/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, "Pricing")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "nav-link",
    "data-toggle": "tooltip",
    "data-placement": "top",
    title: "The team & mentors, events, news, reviews and awards",
    href: "https://www.4geeksacademy.co/the-academy/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, "The Academy")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: "nav-item active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "nav-link",
    "data-toggle": "tooltip",
    "data-placement": "top",
    title: "Get information about upcoming starting dates",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, "Upcoming Dates")))))));
});

/***/ }),

/***/ "./node_modules/bootstrap-material-design/dist/css/bootstrap-material-design.min.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_app__ = __webpack_require__("next/app");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_CssBaseline__ = __webpack_require__("@material-ui/core/CssBaseline");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_CssBaseline___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_CssBaseline__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_jss_lib_JssProvider__ = __webpack_require__("react-jss/lib/JssProvider");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_jss_lib_JssProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_jss_lib_JssProvider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stores_getPageContext__ = __webpack_require__("./stores/getPageContext.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__("moment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_Header__ = __webpack_require__("./component/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_bootstrap_material_design_dist_css_bootstrap_material_design_min_css__ = __webpack_require__("./node_modules/bootstrap-material-design/dist/css/bootstrap-material-design.min.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_bootstrap_material_design_dist_css_bootstrap_material_design_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_bootstrap_material_design_dist_css_bootstrap_material_design_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__static_css_index_css__ = __webpack_require__("./static/css/index.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__static_css_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__static_css_index_css__);

var _jsxFileName = "/home/ubuntu/workspace/pwa-events/pages/_app.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }













var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp(props) {
    var _this;

    _classCallCheck(this, MyApp);

    _this = _possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "pageContext", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: null
    });
    _this.pageContext = Object(__WEBPACK_IMPORTED_MODULE_6__stores_getPageContext__["a" /* default */])();
    /*this.state = {
        "events":[
                    {
                    "description": "<p>An event for all the blockchain developers to meet</p>",
                    "title": "Blockchain coders gather up ",
                    "url": "http://hola.com",
                    "capacity": "100",
                    "event_date": "2018-09-15 02:00:00",
                    "type": "other",
                    "address": "66 W Flagler St #900, Miami, FL 33130",
                    "location_slug": "downtown-miami",
                    "lang": "en",
                    "city_slug": "miami",
                    "banner_url": "http://hola.com",
                    "invite_only": "false",
                    "created_at": "2018-07-14 13:03:49",
                    "id": "5",
                    "status": "draft",
                    "logo_url": null
                    },
                    {
                    "description": "<p>1 hora y 40 de duracion</p><p>25 $</p>",
                    "title": "Use case: coding a dApp to certify documents on the Ethereum BLockchain ",
                    "url": "http://hola.com",
                    "capacity": "100",
                    "event_date": "2018-09-01 12:00:00",
                    "type": "workshop",
                    "address": "66 W Flagler St #900, Miami, FL 33130",
                    "location_slug": "downtown-miami",
                    "lang": "en",
                    "city_slug": "miami",
                    "banner_url": "http://hola.com",
                    "invite_only": "false",
                    "created_at": "2018-07-14 12:54:01",
                    "id": "4",
                    "status": "draft",
                    "logo_url": null
                    },
                    {
                    "description": "<p>25$</p><p>1 hora y 40</p>",
                    "title": "Coding your first dApp in the Blockchain using Ethereum ",
                    "url": "http://hola.com",
                    "capacity": "100",
                    "event_date": "2018-08-04 02:00:00",
                    "type": "workshop",
                    "address": "66 W Flagler St #900, Miami, FL 33130",
                    "location_slug": "downtown-miami",
                    "lang": "en",
                    "city_slug": "miami",
                    "banner_url": "http://hola.com",
                    "invite_only": "false",
                    "created_at": "2018-07-14 12:47:06",
                    "id": "3",
                    "status": "draft",
                    "logo_url": null
                    },
                    {
                    "description": "<h2>4Geeks Nights - Learn to Code for Free</h2><p>Coding is no longer a dream. We are closing the gap and bringing coding to your life. A master platform, full of exercises and content, for free.</p><p>To begin, we will give you free access to our Coding Introduction Program, where you will find everything you need to start your training as a software developer. HTML, CSS, Bootstrap, JavaScript and more. This is not only reading, videos, and tutorials, but tons of exercises and projects to work with.</p><p><br></p><p>We have&nbsp;at least five&nbsp;GREAT reasons why you should&nbsp;attend&nbsp;our 4Geeks Nights event on June&nbsp;28th:</p><p><br></p><p>- You will&nbsp;have&nbsp;FREE access to the Coding Intro Program and platform.&nbsp;Learning&nbsp;to Code has never been easy and&nbsp;better.</p><p><br></p><p>- You will&nbsp;receive&nbsp;free mentorship hours every&nbsp;week.</p><p><br></p><p>- Our Career Support program speaks for&nbsp;itself…You&nbsp;will meetsome of&nbsp;our&nbsp;Alumni and hear about their personal projects and overall experience&nbsp;at 4Geeks!</p><p><br></p><p>- You will have fun while meeting our entire team &amp; office: Founders, instructors, partners and classroom spaces. Have a drink with us!</p><p><br></p><p>- You will get the details about our Software Program. Full Stack + Part-time + Premium Education + Best pricing&nbsp;options.</p><p><br></p><p>- Play Kill the Bug and earn a prize!</p><p><br></p><p>We are launching new programs every two months&nbsp;and you canbecome part of our&nbsp;next 4Geeks Alumni as a Full-Stack Software Developer. Get ready to change your&nbsp;life!</p><p><br></p><p>Come. Have fun. Learn to Code. Let's celebrate together our way of making Coding a possibility&nbsp;to your current or new career.</p><p><br></p><p>A little bit about our program:</p><p><br></p><p>Become a software developer in 16 weeks, with a part-time/blended methodology and with pricing options starting at$140/mo.&nbsp;You will get&nbsp;over&nbsp;320 hours of&nbsp;training in&nbsp;a gamified program designed to be 100% hands-on.</p><p><br></p><p>Our Syllabus is based on&nbsp;JavaScript, React JS, Python, Django, Mongo DB, AJAX, API,&nbsp;and&nbsp;other exciting technologies. You will be trained in the most&nbsp;desired&nbsp;technologies in&nbsp;Miami in exactlywhat companies are looking for!</p><p><br></p><p>NOTE: Our programs&nbsp;have a maximum capacity of 14&nbsp;students, so there are only a few spots availableper cohort. Just click here if you want to meet with us.&nbsp;The next program&nbsp;will start&nbsp;on August 13th.&nbsp;This is your chance to understand how Coding will change your professional life!</p>",
                    "title": "4Geeks Nights: INFO+CODING+GAMES+DRINKS",
                    "url": "https://www.eventbrite.com/e/4geeks-nights-infocodinggamesdrinks-tickets-47588520546",
                    "capacity": "100",
                    "event_date": "2018-07-28 06:00:00",
                    "type": "4geeks_night",
                    "address": "66 West Flagler Street  #900",
                    "location_slug": "downtown-miami",
                    "lang": "en",
                    "city_slug": "miami",
                    "banner_url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F46680560%2F154764716258%2F1%2Foriginal.jpg?rect=0%2C60%2C960%2C480&auto=compress&w=2000&s=af8051ba98cddee95edbcd4ec904f334",
                    "invite_only": "false",
                    "created_at": "2018-06-29 10:31:56",
                    "id": "2",
                    "status": "published",
                    "logo_url": null
                    },
                    {
                    "description": "4Geeks Nights - Learn to Code for Free Coding is no longer a dream. We are closing the gap and bringing coding to your life. A master platform, full of exercises and content, for free. To begin, we will give you free access to our Coding Introduction Program, where you will find everything you need to start your training as a software developer. HTML, CSS, Bootstrap, JavaScript and more. This is not only reading, videos, and tutorials, but tons of exercises and projects to work with.We have five -probably more- GREAT reasons why you should be in our 4Geeks Nights event on June 28th.- You will get FREE access to the Coding Intro Program and platform. Learn to Code has never been easy and better;- You will get free mentorship hours every week;- Our Career Support program speaks for itself. You will meet our Alumni; one of them will talk about his projects and experience at 4Geeks!- You will have fun while meeting our entire team & office: Founders, instructors, partners and classroom spaces. Have a drink with us!- You will get the details about our Software Program.  Full Stack + Part-time + Premium Education + Best pricing options'- Play Kill the Bug and earn a prize!Every 2 months we are launching new programs and you can be part of the next 4Geeks Alumni as a Full-Stack Software Developer. Get ready to change your life.Come. Have fun. Learn to Code. Let's celebrate together our way of making Coding a possibility to your career.A little bit about our program:Become a software developer in 16 weeks, with a part-time/blended methodology and with pricing options starting at $140p/mo. You will get more than 320 hours of training, in a gamified program designed to be 100% hands-on.Our Syllabus is based on Javascript, React JS, Python, Django, Mongo DB, AJAX, API, among other exciting technologies. You will be trained in the most wanted technologies in Miami; just what companies are looking for!NOTE: Our programs are up to 14 students. Few spots available per cohort. Just click here if you want to meet with us. The program will start on August, 13th. This is your chance to understand how Coding will change your professional life!",
                    "title": "4Geeks Nights: INFO+CODING+GAMES+DRINKS",
                    "url": "https://www.eventbrite.com/e/4geeks-nights-infocodinggamesdrinks-tickets-46847266435",
                    "capacity": "100",
                    "event_date": "2018-06-28 18:00:00",
                    "type": "intro_to_coding",
                    "address": "66 West Flagler Street #900, Miami, FL 33130",
                    "location_slug": "downtown-miami",
                    "lang": "en",
                    "city_slug": "mia",
                    "banner_url": "http://placehold.it/800x400",
                    "invite_only": "0",
                    "created_at": "2018-06-19 16:18:50",
                    "id": "1",
                    "status": "published",
                    "logo_url": null
                    },
                    {
                    description: "4Geeks Nights - Learn to Code for Free Coding is no longer a dream. We are closing the gap and bringing coding to your life. A master platform, full of exercises and content, for free. To begin, we will give you free access to our Coding Introduction Program, where you will find everything you need to start your training as a software developer. HTML, CSS, Bootstrap, JavaScript and more. This is not only reading, videos, and tutorials, but tons of exercises and projects to work with.We have five -probably more- GREAT reasons why you should be in our 4Geeks Nights event on June 28th.- You will get FREE access to the Coding Intro Program and platform. Learn to Code has never been easy and better;- You will get free mentorship hours every week;- Our Career Support program speaks for itself. You will meet our Alumni; one of them will talk about his projects and experience at 4Geeks!- You will have fun while meeting our entire team & office: Founders, instructors, partners and classroom spaces. Have a drink with us!- You will get the details about our Software Program. Full Stack + Part-time + Premium Education + Best pricing options'- Play Kill the Bug and earn a prize!Every 2 months we are launching new programs and you can be part of the next 4Geeks Alumni as a Full-Stack Software Developer. Get ready to change your life.Come. Have fun. Learn to Code. Let's celebrate together our way of making Coding a possibility to your career.A little bit about our program:Become a software developer in 16 weeks, with a part-time/blended methodology and with pricing options starting at $140p/mo. You will get more than 320 hours of training, in a gamified program designed to be 100% hands-on.Our Syllabus is based on Javascript, React JS, Python, Django, Mongo DB, AJAX, API, among other exciting technologies. You will be trained in the most wanted technologies in Miami; just what companies are looking for!NOTE: Our programs are up to 14 students. Few spots available per cohort. Just click here if you want to meet with us. The program will start on August, 13th. This is your chance to understand how Coding will change your professional life!",
                    title: "4Geeks Nights: INFO+CODING+GAMES+DRINKS",
                    url: "https://www.eventbrite.com/e/4geeks-nights-infocodinggamesdrinks-tickets-46847266435",
                    capacity: "100",
                    logo_url: "https://pbs.twimg.com/profile_images/930433054371434496/v8GNrusZ_400x400.jpg",
                    event_date: "2018-06-28 18:00:00",
                    type: "intro_to_coding",
                    address: "66 West Flagler Street #900, Miami, FL 33130",
                    location_slug: "downtown-miami",
                    lang: "en",
                    city_slug: "mia",
                    banner_url: "http://placehold.it/800x400",
                    invite_only: "0",
                    created_at: "2018-06-30 16:18:50",
                    id: "8",
                    finished: false
                    },
                    {
                    description: "4Geeks Nights - Learn to Code for Free Coding is no longer a dream. We are closing the gap and bringing coding to your life. A master platform, full of exercises and content, for free. To begin, we will give you free access to our Coding Introduction Program, where you will find everything you need to start your training as a software developer. HTML, CSS, Bootstrap, JavaScript and more. This is not only reading, videos, and tutorials, but tons of exercises and projects to work with.We have five -probably more- GREAT reasons why you should be in our 4Geeks Nights event on June 28th.- You will get FREE access to the Coding Intro Program and platform. Learn to Code has never been easy and better;- You will get free mentorship hours every week;- Our Career Support program speaks for itself. You will meet our Alumni; one of them will talk about his projects and experience at 4Geeks!- You will have fun while meeting our entire team & office: Founders, instructors, partners and classroom spaces. Have a drink with us!- You will get the details about our Software Program. Full Stack + Part-time + Premium Education + Best pricing options'- Play Kill the Bug and earn a prize!Every 2 months we are launching new programs and you can be part of the next 4Geeks Alumni as a Full-Stack Software Developer. Get ready to change your life.Come. Have fun. Learn to Code. Let's celebrate together our way of making Coding a possibility to your career.A little bit about our program:Become a software developer in 16 weeks, with a part-time/blended methodology and with pricing options starting at $140p/mo. You will get more than 320 hours of training, in a gamified program designed to be 100% hands-on.Our Syllabus is based on Javascript, React JS, Python, Django, Mongo DB, AJAX, API, among other exciting technologies. You will be trained in the most wanted technologies in Miami; just what companies are looking for!NOTE: Our programs are up to 14 students. Few spots available per cohort. Just click here if you want to meet with us. The program will start on August, 13th. This is your chance to understand how Coding will change your professional life!",
                    title: "4Geeks Nights: INFO + CODING + GAMES + DRINKS",
                    url: "https://www.eventbrite.com/e/4geeks-nights-infocodinggamesdrinks-tickets-46847266435",
                    capacity: "100",
                    logo_url: "https://pbs.twimg.com/profile_images/930433054371434496/v8GNrusZ_400x400.jpg",
                    event_date: "2018-06-28 18:00:00",
                    type: "coding_weekend",
                    address: "66 West Flagler Street #900, Miami, FL 33130",
                    location_slug: "",
                    lang: "es",
                    city_slug: "mia",
                    banner_url: "http://placehold.it/800x400",
                    invite_only: "0",
                    created_at: "2018-07-19 16:18:50",
                    id: "1",
                    finished: false
                    },
                    {
                    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    "title": "Intro To Coding ",
                    "url": "https://www.4geekscademy.co",
                    "capacity": "100",
                    "logo_url": "https://upload.wikimedia.org/wikipedia/en/8/84/MiamiDadeCollegeLogo.png",
                    "invite_only": "0",
                    "created_at": "2018-06-13 11:27:04",
                    "id": "6",
                    "banner_url": null,
                    "event_date": "2018-08-20 20:30:00",
                    "type": "intro_to_coding",
                    "city_slug": "mia",
                    address: "627 SW 27th Ave, Miami, FL 33135",
                    lang: "es",
                    finished: false
                    },
                    {
                    "description": "4Geeks Nights - Learn to Code for Free Coding is no longer a dream. We are closing the gap and bringing coding to your life. A master platform, full of exercises and content, for free. To begin, we will give you free access to our Coding Introduction Program, where you will find everything you need to start your training as a software developer. HTML, CSS, Bootstrap, JavaScript and more. This is not only reading, videos, and tutorials, but tons of exercises and projects to work with.We have five -probably more- GREAT reasons why you should be in our 4Geeks Nights event on June 28th.- You will get FREE access to the Coding Intro Program and platform. Learn to Code has never been easy and better;- You will get free mentorship hours every week;- Our Career Support program speaks for itself. You will meet our Alumni; one of them will talk about his projects and experience at 4Geeks!- You will have fun while meeting our entire team & office: Founders, instructors, partners and classroom spaces. Have a drink with us!- You will get the details about our Software Program.",
                    "title": "4Geeks Nights: INFO+CODING+GAMES+DRINKS",
                    "url": "https://www.eventbrite.com/e/4geeks-nights-infocodinggamesdrinks-tickets-46847266435",
                    "capacity": "100",
                    "logo_url": "https://pbs.twimg.com/profile_images/930433054371434496/v8GNrusZ_400x400.jpg",
                    "invite_only": "0",
                    "created_at": "2018-06-14 16:54:50",
                    "id": "7",
                    "banner_url": null,
                    "event_date": "2018-06-28 18:00:00",
                    "type": "intro_to_coding",
                    "city_slug": "mia",
                    lang: "es",
                    "address": "66 West Flagler Street #900, Miami, FL 33130",
                    finished: false
                    },
                    {
                    "description": "Description for the event",
                    "title": "asd",
                    "url": "http://www.asdads.com",
                    "capacity": "200",
                    "logo_url": "http://www.asdads.com",
                    "invite_only": "1",
                    "created_at": "2018-06-12 14:58:52",
                    "id": "4",
                    "banner_url": null,
                    "event_date": "2017-08-20 20:30:00",
                    "type": "coding_weekend",
                    "city_slug": "ccs",
                    lang: "en",
                    "address": null,
                    finished: true
                    },
                    {
                    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    "title": "This is a very long Title of an Event",
                    "url": "https://www.4geekscademy.co",
                    "capacity": "100",
                    "logo_url": "https://www.4geeksacademy.co/wp-content/themes/the-fastest/assets/img/icon-logo.png",
                    "invite_only": "1",
                    "created_at": "2018-06-13 11:02:19",
                    "id": "5",
                    "banner_url": null,
                    "event_date": "2017-08-20 20:30:00",
                    "type": "coding_weekend",
                    "city_slug": "ccs",
                    lang: "en",
                    "address": "66 W Flagler St #900, Miami, FL 33130",
                    finished: true
                    },
                    {
                    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    "title": "Intro To Coding",
                    "url": "https://www.eventbrite.com/e/learn-to-code-at-miami-dade-college-fall-term-information-session-tickets-46294138013?aff=ebdssbdestsearch",
                    "capacity": "100",
                    "logo_url": "https://en.wikipedia.org/wiki/Miami_Dade_College",
                    "invite_only": "0",
                    "created_at": "2018-06-07 11:10:44",
                    "id": "12",
                    "banner_url": null,
                    "event_date": null,
                    "type": "workshop",
                    "city_slug": "miami",
                    lang: "en",
                    "address": null,
                    finished: true
                    },
                    {
                    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    "title": "Coding Weekends",
                    "url": "https://www.4geekscademy.co",
                    "capacity": "100",
                    "logo_url": "https://www.4geeksacademy.co/wp-content/themes/the-fastest/assets/img/icon-logo.png",
                    "invite_only": "0",
                    "created_at": "2018-06-07 11:15:26",
                    "id": "2",
                    "banner_url": null,
                    "event_date": null,
                    "type": "workshop",
                    "city_slug": "miami",
                    lang: "en",
                    "address": null,
                    finished: true
                    },
                    {
                    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    "title": "Coding Weekends",
                    "url": "https://www.4geekscademy.co",
                    "capacity": "100",
                    "logo_url": "https://www.4geeksacademy.co/wp-content/themes/the-fastest/assets/img/icon-logo.png",
                    "invite_only": "0",
                    "created_at": "2018-06-07 11:47:47",
                    "id": "3",
                    "banner_url": null,
                    "event_date": null,
                    "type": "workshop",
                    "city_slug": "miami",
                    lang: "en",
                    "address": null,
                    finished: true
                    }
                ],
        "courses":[
                      {
                        "day": "28",
                        "month": "Jun",
                        "year": "2018",
                        "date": "June 28, 2018",
                        "bc_location_slug": "downtown-miami",
                        "bc_profile_slug": "coding-introduction",
                        "status": "not-started",
                        "time": 1530144000,
                        "language": "English",
                        "icon": "united-states",
                        "name": "Coding Introduction",
                        "slug": "coding-introduction",
                        "id": 2933,
                        "short_description": "Start learning to code today with our coding-introduction coding bootcamp - 75+ hours of HTML, CSS and JavaScript lessons. Get immersed in programming from day one and it is also the most effective way to get into today’s top coding bootcamps (including ours!).",
                        "hr_duration": "80",
                        "week_duration": "2",
                        "featured_image": "https://www.4geeksacademy.co/wp-content/uploads/2017/09/full-stack.jpg",
                        "location": "Miami Downtown, USA",
                        "location_id": 145
                      },
                      {
                        "day": "13",
                        "month": "Aug",
                        "year": "2018",
                        "date": "August 13, 2018",
                        "bc_location_slug": "downtown-miami",
                        "bc_profile_slug": "full-stack",
                        "status": "not-started",
                        "time": 1534118400,
                        "language": "English",
                        "icon": "united-states",
                        "name": "Full Stack Development",
                        "slug": "full-stack-development",
                        "id": 44,
                        "short_description": "A Premium Program designed to launch your career as a developer.  Learn the fundamentals of coding and build applications using HTML5, CSS3, React.js, and Python.  Integrate your application(s) with other platforms and create your own API. <br />\r\nThis course offers a dedicated career support team as well as: one-on-one coaching with our Senior mentors; networking opportunities; and introductions to potential employers.",
                        "hr_duration": "304",
                        "week_duration": "16",
                        "featured_image": "https://www.4geeksacademy.co/wp-content/uploads/2017/09/full-stack.jpg",
                        "location": "Miami Downtown, USA",
                        "location_id": 145
                      },
                      {
                        "day": "13",
                        "month": "Aug",
                        "year": "2018",
                        "date": "August 13, 2018",
                        "bc_location_slug": "impact-hub",
                        "bc_profile_slug": "full-stack",
                        "status": "not-started",
                        "time": 1534118400,
                        "language": "Español",
                        "icon": "spain",
                        "name": "Desarrollo Full-Stack",
                        "slug": "desarrollo-full-stack",
                        "id": 2635,
                        "short_description": "Un curso premium, diseñado para iniciar tu carrera como desarrollador y conseguir tu primer trabajo. Aprende a programar y construye applicaciones utilizando HTML5, CSS3, React.js y Python. Integrate con otras plataformas y desarrolla tu propia API.<br />\r\nEste curso ofrece un programa de asesoramiento profesional avanzado que te ayudara a conseguir un trabajo: Sesiones de coaching, construccion de tu perfil profesional, networking, intruduccion a posibles empleadores, etc.",
                        "hr_duration": "288",
                        "week_duration": "16",
                        "featured_image": "https://www.4geeksacademy.co/wp-content/uploads/2017/09/full-stack.jpg",
                        "location": "Impact Hub, CCS, Vzla",
                        "location_id": 2464
                      },
                      {
                        "day": "01",
                        "month": "Oct",
                        "year": "2018",
                        "date": "October 1, 2018",
                        "bc_location_slug": "maracaibo",
                        "bc_profile_slug": "full-stack",
                        "status": "not-started",
                        "time": 1538352000,
                        "language": "Español",
                        "icon": "spain",
                        "name": "Desarrollo Full-Stack",
                        "slug": "desarrollo-full-stack",
                        "id": 2635,
                        "short_description": "Un curso premium, diseñado para iniciar tu carrera como desarrollador y conseguir tu primer trabajo. Aprende a programar y construye applicaciones utilizando HTML5, CSS3, React.js y Python. Integrate con otras plataformas y desarrolla tu propia API.<br />\r\nEste curso ofrece un programa de asesoramiento profesional avanzado que te ayudara a conseguir un trabajo: Sesiones de coaching, construccion de tu perfil profesional, networking, intruduccion a posibles empleadores, etc.",
                        "hr_duration": "288",
                        "week_duration": "16",
                        "featured_image": "https://www.4geeksacademy.co/wp-content/uploads/2017/09/full-stack.jpg",
                        "location": "Maracaibo, Vzla",
                        "location_id": 2462
                      },
                      {
                        "day": "08",
                        "month": "Oct",
                        "year": "2018",
                        "date": "October 8, 2018",
                        "bc_location_slug": "el-nacional",
                        "bc_profile_slug": "full-stack",
                        "status": "not-started",
                        "time": 1538956800,
                        "language": "Español",
                        "icon": "spain",
                        "name": "Desarrollo Full-Stack",
                        "slug": "desarrollo-full-stack",
                        "id": 2635,
                        "short_description": "Un curso premium, diseñado para iniciar tu carrera como desarrollador y conseguir tu primer trabajo. Aprende a programar y construye applicaciones utilizando HTML5, CSS3, React.js y Python. Integrate con otras plataformas y desarrolla tu propia API.<br />\r\nEste curso ofrece un programa de asesoramiento profesional avanzado que te ayudara a conseguir un trabajo: Sesiones de coaching, construccion de tu perfil profesional, networking, intruduccion a posibles empleadores, etc.",
                        "hr_duration": "288",
                        "week_duration": "16",
                        "featured_image": "https://www.4geeksacademy.co/wp-content/uploads/2017/09/full-stack.jpg",
                        "location": "El Nacional, CCS, Vzla",
                        "location_id": 2463
                      },
                      {
                        "day": "15",
                        "month": "Oct",
                        "year": "2018",
                        "date": "October 15, 2018",
                        "bc_location_slug": "downtown-miami",
                        "bc_profile_slug": "full-stack",
                        "status": "not-started",
                        "time": 1539561600,
                        "language": "English",
                        "icon": "united-states",
                        "name": "Full Stack Development",
                        "slug": "full-stack-development",
                        "id": 44,
                        "short_description": "A Premium Program designed to launch your career as a developer.  Learn the fundamentals of coding and build applications using HTML5, CSS3, React.js, and Python.  Integrate your application(s) with other platforms and create your own API. <br />\r\nThis course offers a dedicated career support team as well as: one-on-one coaching with our Senior mentors; networking opportunities; and introductions to potential employers.",
                        "hr_duration": "304",
                        "week_duration": "16",
                        "featured_image": "https://www.4geeksacademy.co/wp-content/uploads/2017/09/full-stack.jpg",
                        "location": "Miami Downtown, USA",
                        "location_id": 145
                      },
                      {
                        "day": "04",
                        "month": "Dec",
                        "year": "2018",
                        "date": "December 4, 2018",
                        "bc_location_slug": "downtown-miami",
                        "bc_profile_slug": "full-stack",
                        "status": "not-started",
                        "time": 1543881600,
                        "language": "English",
                        "icon": "united-states",
                        "name": "Full Stack Development",
                        "slug": "full-stack-development",
                        "id": 44,
                        "short_description": "A Premium Program designed to launch your career as a developer.  Learn the fundamentals of coding and build applications using HTML5, CSS3, React.js, and Python.  Integrate your application(s) with other platforms and create your own API. <br />\r\nThis course offers a dedicated career support team as well as: one-on-one coaching with our Senior mentors; networking opportunities; and introductions to potential employers.",
                        "hr_duration": "304",
                        "week_duration": "16",
                        "featured_image": "https://www.4geeksacademy.co/wp-content/uploads/2017/09/full-stack.jpg",
                        "location": "Miami Downtown, USA",
                        "location_id": 145
                      }
                    ],
        "locations": [
                        {
                            id: 1,
                            slug: "impact-hub",
                            name: "Impact Hub",
                            country: "0",
                            address: "0",
                            created_at: "2017-08-09 23:23:31",
                            updated_at: "2017-08-09 23:23:31"
                            },
                            {
                            id: 2,
                            slug: "maracaibo",
                            name: "Maracaibo",
                            country: "0",
                            address: "0",
                            created_at: "2017-08-09 23:23:31",
                            updated_at: "2017-09-26 17:11:28"
                            },
                            {
                            id: 3,
                            slug: "el-nacional",
                            name: "El Nacional",
                            country: "0",
                            address: "0",
                            created_at: "2017-08-09 23:23:32",
                            updated_at: "2017-08-09 23:23:32"
                            },
                            {
                            id: 4,
                            slug: "mdc",
                            name: "MDC",
                            country: "0",
                            address: "0",
                            created_at: "2017-08-09 23:23:33",
                            updated_at: "2017-08-09 23:23:33"
                            },
                            {
                            id: 5,
                            slug: "black-belt-coding",
                            name: "Black Belt Coding",
                            country: "0",
                            address: "0",
                            created_at: "2017-08-09 23:28:52",
                            updated_at: "2017-08-09 23:28:52"
                            },
                            {
                            id: 6,
                            slug: "el-rosal",
                            name: "El Rosal",
                            country: "0",
                            address: "0",
                            created_at: "2017-08-09 23:28:52",
                            updated_at: "2017-09-26 17:11:38"
                            },
                            {
                            id: 8,
                            slug: "downtown-miami",
                            name: "Downtown Miami",
                            country: "0",
                            address: "0",
                            created_at: "2017-09-17 13:03:52",
                            updated_at: "2017-09-17 13:03:52"
                            }
                        ]
    };*/

    /*this.actions = {
        loadApiData: () => {
                fetch('https://assets.breatheco.de/apis/event/all')
                    .then( (response) => {
                        if (response.status !== 200) {
                            throw new Error(response.statusText);
                        }
                        return response.json();
                    }).then( (data) => {
                        if (!Array.isArray(data)) {
                            throw new Error(data);//TO-DO: Documentation on error cases
                        }
                        data = data.filter( event => Moment(event.event_date).diff( Moment(), "d" ) > 0 );
                        this.setState({events: data});
                  }).catch(error => {
                    console.log(error);
                });
                      
                fetch('https://www.4geeksacademy.co/wp-json/4g/v1/courses')
                    .then( (response) => {
                        if (response.status !== 200) {
                            throw new Error(response.statusText);
                        }
                        return response.json();
                    }).then( (data) => {
                        if (!Array.isArray(data)) {
                            throw new Error(data);//TO-DO: Documentation on error cases
                        }
                        let now = Moment();
                        
                        let courses = data.map( (course) =>{
                            course["type"] = "course";
                            course["finished"] = true;
                            course["title"] = course.name;
                            course["description"] = course.short_description;
                            //let event_date 
                            course["event_date"] = Moment(course.date, "MMMM D, YYYY").isValid() ? Moment(course.date,"MMMM D, YYYY").format("YYYY-MM-DD HH:mm:ss") : now;
                            //course["event_date"] = event_date.format("YYYY-MM-DD HH:mm:ss");
                            course["lang"] = course.language.toLowerCase().substring(0,2);
                            course["location_slug"] = course.bc_location_slug;
                            course["banner_url"] = course.featured_image;
                            course["address"] = course.location;
                            course["url"] = "https://www.4geeksacademy.co/course/"+course.slug;
                            
                            return course;
                        });
                        this.setState({courses: courses});
                        
                    }).catch(error => {
                    console.log(error);
                });
    
                fetch('https://api.breatheco.de/locations/')
                    .then( (response) => {
                        if (response.status !== 200) {
                            throw new Error(response.statusText);
                        }
                        return response.json();
                    }).then( (data) => {
                        if (!Array.isArray(data)) {
                            throw new Error(data);//TO-DO: Documentation on error cases
                        }
                        this.setState({locations: data});
                        
                    }).catch(error => {
                    console.log(error);
                });
                
            },
        getAllEvents: () => { 
            return this.state.events.filter( event => Moment(event.event_date).diff( Moment(), "d" ) > 0 ).concat(this.state.courses).sort((a, b) => Moment(a.event_date).unix() - Moment(b.event_date).unix()); 
        },
        getAllLocations: () => {
            return this.state.locations.map(locat => { 
                    locat["count"] = this.actions.getAllEvents().filter(x => x.location_slug===locat.slug).length;
                    return locat;
            }).sort((a, b) => b.count - a.count);
        }
    };*/

    return _this;
  }

  _createClass(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Remove the server-side injected CSS.
      var jssStyles = document.querySelector('#jss-server-side');

      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          Component = _props.Component,
          pageProps = _props.pageProps,
          router = _props.router,
          events = _props.events,
          courses = _props.courses,
          locations = _props.locations;
      var allEvents = events.filter(function (event) {
        return __WEBPACK_IMPORTED_MODULE_7_moment___default()(event.event_date).diff(__WEBPACK_IMPORTED_MODULE_7_moment___default()(), "d") > 0;
      }).concat(courses).sort(function (a, b) {
        return __WEBPACK_IMPORTED_MODULE_7_moment___default()(a.event_date).unix() - __WEBPACK_IMPORTED_MODULE_7_moment___default()(b.event_date).unix();
      });
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_app__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 632
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_jss_lib_JssProvider___default.a, {
        registry: this.pageContext.sheetsRegistry,
        generateClassName: this.pageContext.generateClassName,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 634
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_styles__["MuiThemeProvider"], {
        theme: this.pageContext.theme,
        sheetsManager: this.pageContext.sheetsManager,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 640
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_CssBaseline___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 645
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__component_Header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 648
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Component, _extends({
        pageContext: this.pageContext,
        router: router
      }, pageProps, {
        events: allEvents,
        locations: locations,
        eventOnly: events,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 649
        }
      })))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var events, res, data, courses, resCourses, dataCourses, now, locations, resLocations, dataLocations;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                events = [];
                _context.prev = 1;
                _context.next = 4;
                return __WEBPACK_IMPORTED_MODULE_8_isomorphic_unfetch___default()('https://assets.breatheco.de/apis/event/all');

              case 4:
                res = _context.sent;
                _context.next = 7;
                return res.json();

              case 7:
                data = _context.sent;
                events = data.filter(function (event) {
                  return __WEBPACK_IMPORTED_MODULE_7_moment___default()(event.event_date).diff(__WEBPACK_IMPORTED_MODULE_7_moment___default()(), "d") > 0;
                });
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0);

              case 14:
                courses = [];
                _context.prev = 15;
                _context.next = 18;
                return __WEBPACK_IMPORTED_MODULE_8_isomorphic_unfetch___default()('https://www.4geeksacademy.co/wp-json/4g/v1/courses');

              case 18:
                resCourses = _context.sent;
                _context.next = 21;
                return resCourses.json();

              case 21:
                dataCourses = _context.sent;
                now = __WEBPACK_IMPORTED_MODULE_7_moment___default()();
                courses = dataCourses.map(function (course) {
                  course["type"] = "course";
                  course["finished"] = true;
                  course["title"] = course.name;
                  course["description"] = course.short_description; //let event_date 

                  course["event_date"] = __WEBPACK_IMPORTED_MODULE_7_moment___default()(course.date, "MMMM D, YYYY").isValid() ? __WEBPACK_IMPORTED_MODULE_7_moment___default()(course.date, "MMMM D, YYYY").format("YYYY-MM-DD HH:mm:ss") : now; //course["event_date"] = event_date.format("YYYY-MM-DD HH:mm:ss");

                  course["lang"] = course.language.toLowerCase().substring(0, 2);
                  course["location_slug"] = course.bc_location_slug;
                  course["banner_url"] = course.featured_image;
                  course["address"] = course.location;
                  course["url"] = "https://www.4geeksacademy.co/course/" + course.slug;
                  return course;
                });
                _context.next = 29;
                break;

              case 26:
                _context.prev = 26;
                _context.t1 = _context["catch"](15);
                console.log(_context.t1);

              case 29:
                locations = [];
                _context.prev = 30;
                _context.next = 33;
                return __WEBPACK_IMPORTED_MODULE_8_isomorphic_unfetch___default()('https://api.breatheco.de/locations/');

              case 33:
                resLocations = _context.sent;
                _context.next = 36;
                return resLocations.json();

              case 36:
                dataLocations = _context.sent;
                locations = dataLocations.data;
                _context.next = 43;
                break;

              case 40:
                _context.prev = 40;
                _context.t2 = _context["catch"](30);
                console.log(_context.t2);

              case 43:
                return _context.abrupt("return", {
                  events: events,
                  courses: courses,
                  locations: locations
                });

              case 44:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 11], [15, 26], [30, 40]]);
      }));

      return function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return MyApp;
}(__WEBPACK_IMPORTED_MODULE_2_next_app___default.a);

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./static/css/index.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./stores/getPageContext.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getPageContext;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jss__ = __webpack_require__("jss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__);
/* eslint-disable no-underscore-dangle */

 // A theme with custom primary and secondary color.
// It's optional.

var theme = Object(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__["createMuiTheme"])({
  palette: {
    primary: {
      light: '#6a6a6a',
      main: '#3f3f3f',
      dark: '#191919',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff6b70',
      main: '#dc3545',
      dark: '#a3001e',
      contrastText: '#fff'
    }
  }
});

function createPageContext() {
  return {
    theme: theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new __WEBPACK_IMPORTED_MODULE_0_jss__["SheetsRegistry"](),
    // The standard class name generator.
    generateClassName: Object(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__["createGenerateClassName"])()
  };
}

function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  } // Reuse context on the client-side.


  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/_app.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/styles":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "jss":
/***/ (function(module, exports) {

module.exports = require("jss");

/***/ }),

/***/ "moment":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/app":
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-jss/lib/JssProvider":
/***/ (function(module, exports) {

module.exports = require("react-jss/lib/JssProvider");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map