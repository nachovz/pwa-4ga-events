webpackHotUpdate(6,{

/***/ "./pages/event.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_styles__ = __webpack_require__("./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Card__ = __webpack_require__("./node_modules/@material-ui/core/Card/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_CardHeader__ = __webpack_require__("./node_modules/@material-ui/core/CardHeader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_CardHeader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_CardHeader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_CardContent__ = __webpack_require__("./node_modules/@material-ui/core/CardContent/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_CardContent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_CardContent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_CardActions__ = __webpack_require__("./node_modules/@material-ui/core/CardActions/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_CardActions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_CardActions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_Avatar__ = __webpack_require__("./node_modules/@material-ui/core/Avatar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_Avatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_Avatar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_core_IconButton__ = __webpack_require__("./node_modules/@material-ui/core/IconButton/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_core_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_icons_Group__ = __webpack_require__("./node_modules/@material-ui/icons/Group.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_icons_Group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__material_ui_icons_Group__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_core_CardMedia__ = __webpack_require__("./node_modules/@material-ui/core/CardMedia/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_core_CardMedia___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__material_ui_core_CardMedia__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_ui_icons_LocationCity__ = __webpack_require__("./node_modules/@material-ui/icons/LocationCity.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_ui_icons_LocationCity___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__material_ui_icons_LocationCity__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__material_ui_icons_Directions__ = __webpack_require__("./node_modules/@material-ui/icons/Directions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__material_ui_icons_Directions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__material_ui_icons_Directions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__material_ui_icons_Label__ = __webpack_require__("./node_modules/@material-ui/icons/Label.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__material_ui_icons_Label___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__material_ui_icons_Label__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__material_ui_icons_Check__ = __webpack_require__("./node_modules/@material-ui/icons/Check.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__material_ui_icons_Check___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__material_ui_icons_Check__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__material_ui_icons_Announcement__ = __webpack_require__("./node_modules/@material-ui/icons/Announcement.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__material_ui_icons_Announcement___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__material_ui_icons_Announcement__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__material_ui_core_Button__ = __webpack_require__("./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__material_ui_core_Tooltip__ = __webpack_require__("./node_modules/@material-ui/core/Tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__material_ui_core_Tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__material_ui_core_Tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__material_ui_core_CircularProgress__ = __webpack_require__("./node_modules/@material-ui/core/CircularProgress/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__material_ui_core_CircularProgress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__material_ui_core_CircularProgress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__component_CustomChip_jsx__ = __webpack_require__("./component/CustomChip.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_react_html_parser__ = __webpack_require__("./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_react_html_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_react_html_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_react_share__ = __webpack_require__("./node_modules/react-share/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_react_placeholder__ = __webpack_require__("./node_modules/react-placeholder/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_react_placeholder___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_react_placeholder__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_react_placeholder_lib_reactPlaceholder_css__ = __webpack_require__("./node_modules/react-placeholder/lib/reactPlaceholder.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_react_placeholder_lib_reactPlaceholder_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_react_placeholder_lib_reactPlaceholder_css__);
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
        console.log(_this.props);
        fetch('https://assets.breatheco.de/apis/event/' + _this.props.query.id).then(function (response) {
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
        });
      }
    };
    return _this;
  }

  _createClass(Event, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //console.log(this.props);
      //console.log(window);
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
      var description = "";

      if (event.event_date !== null && typeof event.event_date !== 'undefined') {
        eventDay = event.event_date.replace(/\s/g, 'T').replace(/-/g, '').replace(/:/g, '');
        eventDay = __WEBPACK_IMPORTED_MODULE_1_moment___default()(eventDay);
        eventTime = eventDay.format("h:mm a").toString();
        eventDay = eventDay.format("MMMM D").toString();
        description = event.description;
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_25_react_placeholder___default.a, {
        showLoadingAnimation: true,
        type: "media",
        ready: this.state.ready,
        rows: 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Card___default.a, {
        className: classes.card,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_CardHeader___default.a, {
        avatar: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_Avatar___default.a, {
          "aria-label": "Recipe",
          src: event.logo_url || "https://pbs.twimg.com/profile_images/930433054371434496/v8GNrusZ_400x400.jpg",
          className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(classes.avatar, classes.bigAvatar),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197
          }
        }),
        title: event.title,
        subheader: eventDay + " " + eventTime,
        className: classes.cardHeader,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }), event.banner_url && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__material_ui_core_CardMedia___default.a, {
        className: classes.media,
        image: event.banner_url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_CardContent___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.badgesContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        }
      }, event.address && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_21__component_CustomChip_jsx__["a" /* default */], {
        classes: classes,
        label: event.address,
        clickable: true,
        onClick: function onClick() {
          return window.open("https://maps.google.com/maps?q=" + event.address, "_blank");
        },
        icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__material_ui_icons_Directions___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 223
          }
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        }
      }), event.capacity && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_21__component_CustomChip_jsx__["a" /* default */], {
        classes: classes,
        label: event.capacity,
        tooltipTitle: "Capacity",
        icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__material_ui_icons_Group___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 232
          }
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        }
      }), event.type && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_21__component_CustomChip_jsx__["a" /* default */], {
        classes: classes,
        label: event.type,
        tooltipTitle: "Type",
        icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__material_ui_icons_Label___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 241
          }
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        }
      }), event.city_slug && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_21__component_CustomChip_jsx__["a" /* default */], {
        classes: classes,
        label: event.city_slug.toUpperCase(),
        icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__material_ui_icons_LocationCity___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 249
          }
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        }
      }), event.invite_only === "1" && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_21__component_CustomChip_jsx__["a" /* default */], {
        classes: classes,
        label: "Invitation required",
        tooltipTitle: "Invitation Only",
        icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__material_ui_icons_Announcement___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 258
          }
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "rsvpContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: event.url,
        style: {
          textDecoration: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18__material_ui_core_Button___default.a, {
        size: "large",
        variant: "raised",
        color: "secondary",
        className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(classes.button),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        }
      }, "RSVP")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.eventContent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        }
      }, __WEBPACK_IMPORTED_MODULE_22_react_html_parser___default()(description.replace(/<br>/g, '')))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_CardActions___default.a, {
        className: classes.actions,
        disableActionSpacing: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_IconButton___default.a, {
        "aria-label": "Facebook Share",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_23_react_share__["d" /* FacebookShareButton */], {
        url: url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_23_react_share__["c" /* FacebookIcon */], {
        size: 32,
        round: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_IconButton___default.a, {
        "aria-label": "Facebook Share",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_23_react_share__["f" /* GooglePlusShareButton */], {
        url: url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_23_react_share__["e" /* GooglePlusIcon */], {
        size: 32,
        round: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_IconButton___default.a, {
        "aria-label": "Facebook Share",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_23_react_share__["p" /* TwitterShareButton */], {
        url: url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_23_react_share__["o" /* TwitterIcon */], {
        size: 32,
        round: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_IconButton___default.a, {
        "aria-label": "Facebook Share",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_23_react_share__["h" /* LinkedinShareButton */], {
        url: url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_23_react_share__["g" /* LinkedinIcon */], {
        size: 32,
        round: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_IconButton___default.a, {
        "aria-label": "Facebook Share",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_23_react_share__["n" /* TelegramShareButton */], {
        url: url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_23_react_share__["m" /* TelegramIcon */], {
        size: 32,
        round: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_IconButton___default.a, {
        "aria-label": "Facebook Share",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_23_react_share__["r" /* WhatsappShareButton */], {
        url: url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_23_react_share__["q" /* WhatsappIcon */], {
        size: 32,
        round: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        }
      }))), event.banner_url && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_IconButton___default.a, {
        "aria-label": "Facebook Share",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_23_react_share__["j" /* PinterestShareButton */], {
        url: url,
        media: event.banner_url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_23_react_share__["i" /* PinterestIcon */], {
        size: 32,
        round: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_IconButton___default.a, {
        "aria-label": "Facebook Share",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_23_react_share__["l" /* RedditShareButton */], {
        url: url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_23_react_share__["k" /* RedditIcon */], {
        size: 32,
        round: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_IconButton___default.a, {
        "aria-label": "Facebook Share",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_23_react_share__["b" /* EmailShareButton */], {
        url: url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_23_react_share__["a" /* EmailIcon */], {
        size: 32,
        round: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        }
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18__material_ui_core_Button___default.a, {
        id: "fabButton",
        variant: "fab",
        color: "secondary",
        className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(classes.button, classes.fab),
        onClick: function onClick() {
          return window.open(event.url, "_blank");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_19__material_ui_core_Tooltip___default.a, {
        open: true,
        title: "RSVP \u27A4 ",
        placement: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__material_ui_icons_Check___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
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

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_styles__["withStyles"])(styles)(Event));
Event.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired
};
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/event")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.a4e2d5c0bd1d84e4bfb4.hot-update.js.map