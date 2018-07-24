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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/CustomChip.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Avatar__ = __webpack_require__("@material-ui/core/Avatar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Avatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Avatar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Chip__ = __webpack_require__("@material-ui/core/Chip");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Chip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Chip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Tooltip__ = __webpack_require__("@material-ui/core/Tooltip");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Tooltip__);
var _jsxFileName = "/home/ubuntu/workspace/pwa-events/component/CustomChip.jsx";







function CustomChip(props) {
  var chip = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Chip___default.a, {
    avatar: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Avatar___default.a, {
      className: props.classes.chipAvatar,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }, props.icon),
    label: props.label.replace(/_/g, " "),
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(props.classes.margin, props.classes.chip, props.clickable ? props.classes.clickable : ''),
    onClick: props.onClick //clickable={props.clickable}
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  });
  if (props.tooltipTitle) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Tooltip___default.a, {
    id: "tooltip-icon",
    title: props.tooltipTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, chip);
  return chip;
}

CustomChip.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  label: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  clickable: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  tooltipTitle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  icon: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element
};
/* harmony default export */ __webpack_exports__["a"] = (CustomChip);

/***/ }),

/***/ "./node_modules/react-placeholder/lib/reactPlaceholder.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/event.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("moment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Card__ = __webpack_require__("@material-ui/core/Card");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_CardHeader__ = __webpack_require__("@material-ui/core/CardHeader");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_CardHeader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_CardHeader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_CardContent__ = __webpack_require__("@material-ui/core/CardContent");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_CardContent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_CardContent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_CardActions__ = __webpack_require__("@material-ui/core/CardActions");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_CardActions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_CardActions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_core_Avatar__ = __webpack_require__("@material-ui/core/Avatar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_core_Avatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_Avatar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_core_IconButton__ = __webpack_require__("@material-ui/core/IconButton");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_core_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__material_ui_core_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_icons_Group__ = __webpack_require__("@material-ui/icons/Group");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_icons_Group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__material_ui_icons_Group__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_ui_core_CardMedia__ = __webpack_require__("@material-ui/core/CardMedia");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_ui_core_CardMedia___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__material_ui_core_CardMedia__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__material_ui_icons_LocationCity__ = __webpack_require__("@material-ui/icons/LocationCity");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__material_ui_icons_LocationCity___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__material_ui_icons_LocationCity__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__material_ui_icons_Directions__ = __webpack_require__("@material-ui/icons/Directions");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__material_ui_icons_Directions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__material_ui_icons_Directions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__material_ui_icons_Label__ = __webpack_require__("@material-ui/icons/Label");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__material_ui_icons_Label___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__material_ui_icons_Label__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__material_ui_icons_Check__ = __webpack_require__("@material-ui/icons/Check");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__material_ui_icons_Check___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__material_ui_icons_Check__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__material_ui_icons_Announcement__ = __webpack_require__("@material-ui/icons/Announcement");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__material_ui_icons_Announcement___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__material_ui_icons_Announcement__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__material_ui_core_Button__ = __webpack_require__("@material-ui/core/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__material_ui_core_Tooltip__ = __webpack_require__("@material-ui/core/Tooltip");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__material_ui_core_Tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__material_ui_core_Tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__material_ui_core_CircularProgress__ = __webpack_require__("@material-ui/core/CircularProgress");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__material_ui_core_CircularProgress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__material_ui_core_CircularProgress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__component_CustomChip_jsx__ = __webpack_require__("./component/CustomChip.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_react_html_parser__ = __webpack_require__("react-html-parser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_react_html_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_react_html_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_react_share__ = __webpack_require__("react-share");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_react_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_react_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_react_placeholder__ = __webpack_require__("react-placeholder");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_react_placeholder___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_react_placeholder__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_react_placeholder_lib_reactPlaceholder_css__ = __webpack_require__("./node_modules/react-placeholder/lib/reactPlaceholder.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_react_placeholder_lib_reactPlaceholder_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_react_placeholder_lib_reactPlaceholder_css__);
var _jsxFileName = "/home/ubuntu/workspace/pwa-events/pages/event.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




 //import ReactGA from 'react-ga';
























 //import {Consumer} from '../stores/AppContext.jsx';

var styles = function styles(theme) {
  return {
    card: {
      maxWidth: 1000,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 44
    },
    cardHeader: {
      paddingBottom: 0
    },
    media: {
      height: 0,
      paddingTop: '56.25%' // 16:9

    },
    actions: {
      display: 'flex',
      flexWrap: 'wrap',
      padding: '8px 12px'
    },
    expand: {
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      }),
      marginLeft: 'auto'
    },
    expandOpen: {
      transform: 'rotate(180deg)'
    },
    avatar: {
      margin: 10
    },
    bigAvatar: {
      width: 60,
      height: 60
    },
    margin: {
      marginRight: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit
    },
    progress: {
      margin: theme.spacing.unit * 2
    },
    badgesContainer: {
      padding: theme.spacing.unit + "px 0",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      flexWrap: "wrap"
    },
    chip: {
      marginLeft: 0,
      color: theme.palette.primary.light,
      backgroundColor: theme.palette.primary.contrastText,
      border: "1px solid " + theme.palette.primary.light
    },
    chipAvatar: {
      backgroundColor: theme.palette.primary.contrastText,
      height: 30,
      width: 30
    },
    clickable: {
      boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)"
    },
    fab: {
      position: 'fixed',
      bottom: theme.spacing.unit * 2,
      right: theme.spacing.unit * 2
    },
    eventContent: {
      padding: theme.spacing.unit
    }
  };
};

var Event =
/*#__PURE__*/
function (_Component) {
  _inherits(Event, _Component);

  function Event(props) {
    var _this;

    _classCallCheck(this, Event);

    _this = _possibleConstructorReturn(this, (Event.__proto__ || Object.getPrototypeOf(Event)).call(this, props));
    _this.state = {
      event: {},
      ready: false
    };
    _this.actions = {
      loadApiData: function loadApiData() {
        //console.log(this.props);
        fetch('https://assets.breatheco.de/apis/event/' + _this.props.router.query.id).then(function (response) {
          if (response.status !== 200) {
            throw new Error(response.statusText);
          }

          return response.json();
        }).then(function (data) {
          //data = data.filter( event => Moment(event.event_date).diff( Moment(), "d" ) > 0 );
          _this.setState({
            event: data,
            ready: true
          });
        }).catch(function (error) {
          console.log(error);

          _this.setState({
            event: {
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
            ready: true
          });
        });
      }
    };
    return _this;
  }

  _createClass(Event, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.actions.loadApiData();
    }
  }, {
    key: "render",
    value: function render() {
      var classes = this.props.classes; //const theid = this.props.id;

      var url = typeof window !== 'undefined' ? window.location.href : this.props.router.asPath; //console.log(eventOnly);
      //ReactGA.pageview(window.location.pathname + window.location.search);
      //const event = eventOnly.find( event => parseInt(event.id, 10) === parseInt(theid, 10) );
      //if(typeof event === 'undefined') return( 
      //);

      var event = this.state.event;
      var eventDay,
          eventTime = eventDay = "TBA";
      var description,
          cleanedDescription = description = "";

      if (event.event_date !== null && typeof event.event_date !== 'undefined') {
        eventDay = event.event_date.replace(/\s/g, 'T').replace(/-/g, '').replace(/:/g, '');
        eventDay = __WEBPACK_IMPORTED_MODULE_1_moment___default()(eventDay);
        eventTime = eventDay.format("h:mm a").toString();
        eventDay = eventDay.format("MMMM D").toString();
        description = __WEBPACK_IMPORTED_MODULE_23_react_html_parser___default()(event.description.replace(/<br>/g, ''));
        var doc = new DOMParser().parseFromString(event.description, 'text/html');
        cleanedDescription = doc.body.textContent || "";
        cleanedDescription = cleanedDescription.substring(0, cleanedDescription.indexOf('.', 200) + 1);
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_26_react_placeholder___default.a, {
        style: {
          marginTop: 16
        },
        showLoadingAnimation: true,
        type: "media",
        ready: this.state.ready,
        rows: 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "canonical",
        href: url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "manifest",
        href: "/static/manifest.json",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "theme-color",
        content: "#ff6600",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "shortcut icon",
        href: "/static/icon.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "apple-touch-icon",
        href: "/static/icon.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "apple-mobile-web-app-title",
        content: event.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "apple-mobile-web-app-status-bar-style",
        content: "default",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "apple-mobile-web-app-capable",
        content: "yes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "mobile-web-app-capable",
        content: "yes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "description",
        content: cleanedDescription,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        property: "og:type",
        content: "article",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        property: "og:url",
        content: url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        property: "og:image",
        content: event.banner_url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        property: "og:title",
        content: event.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        property: "og:description",
        content: cleanedDescription,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "twitter:card",
        content: "summary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "twitter:image",
        content: event.banner_url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "twitter:title",
        content: event.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "twitter:description",
        content: cleanedDescription,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Card___default.a, {
        className: classes.card,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_CardHeader___default.a, {
        avatar: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_Avatar___default.a, {
          "aria-label": "Recipe",
          src: event.logo_url || "https://pbs.twimg.com/profile_images/930433054371434496/v8GNrusZ_400x400.jpg",
          className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()(classes.avatar, classes.bigAvatar),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 238
          }
        }),
        title: event.title,
        subheader: eventDay + " " + eventTime,
        className: classes.cardHeader,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        }
      }), event.banner_url && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__material_ui_core_CardMedia___default.a, {
        className: classes.media,
        image: event.banner_url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_CardContent___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.badgesContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        }
      }, event.address && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_22__component_CustomChip_jsx__["a" /* default */], {
        classes: classes,
        label: event.address,
        clickable: true,
        onClick: function onClick() {
          return window.open("https://maps.google.com/maps?q=" + event.address, "_blank");
        },
        icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__material_ui_icons_Directions___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 264
          }
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        }
      }), event.capacity && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_22__component_CustomChip_jsx__["a" /* default */], {
        classes: classes,
        label: event.capacity,
        tooltipTitle: "Capacity",
        icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__material_ui_icons_Group___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 273
          }
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        }
      }), event.type && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_22__component_CustomChip_jsx__["a" /* default */], {
        classes: classes,
        label: event.type,
        tooltipTitle: "Type",
        icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__material_ui_icons_Label___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 282
          }
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        }
      }), event.city_slug && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_22__component_CustomChip_jsx__["a" /* default */], {
        classes: classes,
        label: event.city_slug.toUpperCase(),
        icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__material_ui_icons_LocationCity___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 290
          }
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        }
      }), event.invite_only === "1" && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_22__component_CustomChip_jsx__["a" /* default */], {
        classes: classes,
        label: "Invitation required",
        tooltipTitle: "Invitation Only",
        icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18__material_ui_icons_Announcement___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 299
          }
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "rsvpContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: event.url,
        style: {
          textDecoration: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_19__material_ui_core_Button___default.a, {
        size: "large",
        variant: "raised",
        color: "secondary",
        className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()(classes.button),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        }
      }, "RSVP")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.eventContent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        }
      }, description)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_CardActions___default.a, {
        className: classes.actions,
        disableActionSpacing: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__material_ui_core_IconButton___default.a, {
        "aria-label": "Facebook Share",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_24_react_share__["FacebookShareButton"], {
        url: url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_24_react_share__["FacebookIcon"], {
        size: 32,
        round: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__material_ui_core_IconButton___default.a, {
        "aria-label": "Facebook Share",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_24_react_share__["GooglePlusShareButton"], {
        url: url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_24_react_share__["GooglePlusIcon"], {
        size: 32,
        round: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__material_ui_core_IconButton___default.a, {
        "aria-label": "Facebook Share",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_24_react_share__["TwitterShareButton"], {
        url: url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_24_react_share__["TwitterIcon"], {
        size: 32,
        round: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__material_ui_core_IconButton___default.a, {
        "aria-label": "Facebook Share",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_24_react_share__["LinkedinShareButton"], {
        url: url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_24_react_share__["LinkedinIcon"], {
        size: 32,
        round: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__material_ui_core_IconButton___default.a, {
        "aria-label": "Facebook Share",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_24_react_share__["TelegramShareButton"], {
        url: url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_24_react_share__["TelegramIcon"], {
        size: 32,
        round: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__material_ui_core_IconButton___default.a, {
        "aria-label": "Facebook Share",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_24_react_share__["WhatsappShareButton"], {
        url: url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_24_react_share__["WhatsappIcon"], {
        size: 32,
        round: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        }
      }))), event.banner_url && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__material_ui_core_IconButton___default.a, {
        "aria-label": "Facebook Share",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_24_react_share__["PinterestShareButton"], {
        url: url,
        media: event.banner_url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_24_react_share__["PinterestIcon"], {
        size: 32,
        round: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__material_ui_core_IconButton___default.a, {
        "aria-label": "Facebook Share",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_24_react_share__["RedditShareButton"], {
        url: url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_24_react_share__["RedditIcon"], {
        size: 32,
        round: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__material_ui_core_IconButton___default.a, {
        "aria-label": "Facebook Share",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_24_react_share__["EmailShareButton"], {
        url: url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_24_react_share__["EmailIcon"], {
        size: 32,
        round: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        }
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_19__material_ui_core_Button___default.a, {
        id: "fabButton",
        variant: "fab",
        color: "secondary",
        className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()(classes.button, classes.fab),
        onClick: function onClick() {
          return window.open(event.url, "_blank");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__material_ui_core_Tooltip___default.a, {
        open: true,
        title: "RSVP \u27A4 ",
        placement: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__material_ui_icons_Check___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        }
      })))));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(props) {
      //console.log(props);
      return {
        id: props.query.id
      };
    }
  }]);

  return Event;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_styles__["withStyles"])(styles)(Event));
Event.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired
};

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/event.js");


/***/ }),

/***/ "@material-ui/core/Avatar":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),

/***/ "@material-ui/core/Button":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Card":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/CardActions":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

/***/ }),

/***/ "@material-ui/core/CardContent":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "@material-ui/core/CardHeader":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardHeader");

/***/ }),

/***/ "@material-ui/core/CardMedia":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

/***/ }),

/***/ "@material-ui/core/Chip":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Chip");

/***/ }),

/***/ "@material-ui/core/CircularProgress":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),

/***/ "@material-ui/core/IconButton":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Tooltip":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tooltip");

/***/ }),

/***/ "@material-ui/core/styles":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Announcement":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Announcement");

/***/ }),

/***/ "@material-ui/icons/Check":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Check");

/***/ }),

/***/ "@material-ui/icons/Directions":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Directions");

/***/ }),

/***/ "@material-ui/icons/Group":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Group");

/***/ }),

/***/ "@material-ui/icons/Label":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Label");

/***/ }),

/***/ "@material-ui/icons/LocationCity":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocationCity");

/***/ }),

/***/ "classnames":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "moment":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-html-parser":
/***/ (function(module, exports) {

module.exports = require("react-html-parser");

/***/ }),

/***/ "react-placeholder":
/***/ (function(module, exports) {

module.exports = require("react-placeholder");

/***/ }),

/***/ "react-share":
/***/ (function(module, exports) {

module.exports = require("react-share");

/***/ })

/******/ });
//# sourceMappingURL=event.js.map