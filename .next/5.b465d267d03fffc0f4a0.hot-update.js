webpackHotUpdate(5,{

/***/ "./component/EventPaperSheet.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_styles__ = __webpack_require__("./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_dom_parser__ = __webpack_require__("./node_modules/dom-parser/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_dom_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_dom_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_Paper__ = __webpack_require__("./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_Paper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Paper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_Typography__ = __webpack_require__("./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_Avatar__ = __webpack_require__("./node_modules/@material-ui/core/Avatar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_Avatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_Avatar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_core_Button__ = __webpack_require__("./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__CustomChip_jsx__ = __webpack_require__("./component/CustomChip.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_flags__ = __webpack_require__("./node_modules/react-flags/lib/react-flags.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_flags___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react_flags__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_ui_icons_LocationOn__ = __webpack_require__("./node_modules/@material-ui/icons/LocationOn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_ui_icons_LocationOn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__material_ui_icons_LocationOn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__FancyButton_jsx__ = __webpack_require__("./component/FancyButton.jsx");
var _jsxFileName = "/home/ubuntu/workspace/pwa-events/component/EventPaperSheet.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

















var styles = function styles(theme) {
  return {
    root: theme.mixins.gutters({
      paddingLeft: theme.spacing.unit * 4,
      paddingRight: theme.spacing.unit * 4,
      paddingTop: theme.spacing.unit * 4,
      paddingBottom: theme.spacing.unit * 4,
      marginTop: theme.spacing.unit * 3
    }),
    root2: {
      display: "flex",
      flexWrap: "wrap"
    },
    fixItem: {
      flex: '2 1 auto',
      minWidth: "67%",
      flexWrap: "wrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    },
    inlineInfo: {
      flex: '1 1 auto',
      margin: "10px 10px"
    },
    avatar: {
      margin: 10
    },
    bigAvatar: {
      width: 20,
      height: 20
    },
    buttoners: {
      justifyContent: 'space-evenly',
      alignSelf: 'center',
      padding: theme.spacing.unit * 3 + "px 0 0"
    },
    chip: {
      marginLeft: 0,
      color: theme.palette.primary.dark,
      backgroundColor: theme.palette.primary.contrastText
    },
    chipAvatar: {
      backgroundColor: theme.palette.primary.contrastText
    },
    clickable: {
      margin: 5,
      boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)"
    },
    soon: {
      color: theme.palette.secondary.main,
      fontWeight: "bold"
    }
  };
};

var EventPaperSheet =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EventPaperSheet, _React$Component);

  function EventPaperSheet() {
    _classCallCheck(this, EventPaperSheet);

    return _possibleConstructorReturn(this, (EventPaperSheet.__proto__ || Object.getPrototypeOf(EventPaperSheet)).apply(this, arguments));
  }

  _createClass(EventPaperSheet, [{
    key: "stripHTML",
    value: function stripHTML(html) {
      var doc = new __WEBPACK_IMPORTED_MODULE_6_dom_parser___default.a().parseFromString(html); //console.log(doc);

      return doc.body || "";
    }
  }, {
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var event = this.props.event;
      var types = ["intro_to_coding", "coding_weekend", "workshop", "hackathon", "4geeks_night", "other"];
      var eventDay,
          eventTime = eventDay = "TBA";
      var aDate = event.event_date || event.kickoff_date || null;
      var soon = "";

      if (__WEBPACK_IMPORTED_MODULE_5_moment___default()(aDate).isValid()) {
        eventDay = aDate.replace(/\s/g, 'T');
        eventDay = eventDay.replace(/-/g, '').replace(/:/g, '');
        eventDay = __WEBPACK_IMPORTED_MODULE_5_moment___default()(eventDay);
        soon = eventDay.diff(__WEBPACK_IMPORTED_MODULE_5_moment___default()(), 'days') < 20 && "soon";
        eventTime = eventDay.get("h") !== 0 ? eventDay.format("h:mm a").toString() : null;
        eventDay = eventDay.format("MMMM D YYYY").toString();
      }

      var lang = event.lang || event.language || null;
      var title = event.title || "New Cohort";
      var description = this.stripHTML(event.description);
      var cta = types.indexOf(event.type) > -1 ? "RSVP" : "APPLY";
      var titleComp = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_Typography___default.a, {
        variant: "title",
        component: "h2",
        style: {
          display: "inline-block",
          textDecoration: "underline",
          fontSize: "1.6rem",
          lineHeight: "1.4em"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, title);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Paper___default.a, {
        elevation: 1,
        className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(classes.root, classes.root2),
        style: {
          justifyContent: "space-between"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.fixItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, event.type !== 'course' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_link___default.a, {
        href: '/event/' + event.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, titleComp)) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://www.4geeksacademy.co/course/" + event.slug,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, " ", titleComp, " "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          display: "flex",
          flexWrap: "wrap"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          flex: "1 1 500px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_Typography___default.a, {
        variant: "body1",
        style: {
          padding: "10px 0",
          lineHeight: "1.6rem"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, description && description.substring(0, description.indexOf('.', 200) + 1)), event.banner_url ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__FancyButton_jsx__["a" /* default */], {
        image: event.banner_url,
        text: event.address,
        onClick: function onClick() {
          return window.open(event.type === 'course' ? "https://www.4geeksacademy.co/course/" + event.slug : "https://maps.google.com/maps?q=" + event.address, "_blank");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }) : event.address && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.inlineInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_Typography___default.a, {
        variant: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, "Where:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__CustomChip_jsx__["a" /* default */], {
        classes: classes,
        clickable: true,
        onClick: function onClick() {
          return window.open("https://maps.google.com/maps?q=" + event.address, "_blank");
        },
        icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_Avatar___default.a, {
          src: event.logo_url,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          }
        }),
        label: event.address.substring(0, event.address.indexOf(',', event.address.indexOf(',') + 1)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          flex: "1 1 80px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.inlineInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_Typography___default.a, {
        variant: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, "Date:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_Typography___default.a, {
        style: {
          display: "inline"
        },
        className: classes[soon],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, eventDay)), eventTime ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.inlineInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_Typography___default.a, {
        variant: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, "Time:"), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_Typography___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, eventTime)) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.inlineInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_Typography___default.a, {
        variant: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, "Duration:"), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_Typography___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, event.hr_duration, " hours (", event.week_duration, " weeks)")), event.location_slug && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.inlineInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_Typography___default.a, {
        variant: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }, "Location:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__CustomChip_jsx__["a" /* default */], {
        classes: classes,
        clickable: true,
        onClick: function onClick() {
          return window.open("https://www.4geeksacademy.co/location/" + event.location_slug, "_blank");
        },
        icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__material_ui_icons_LocationOn___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172
          }
        }),
        label: event.location_slug.replace(/-/g, ' '),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      })), lang && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.inlineInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_Typography___default.a, {
        variant: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }, "Language:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_react_flags___default.a, {
        name: lang === 'en' ? "US" : lang.toUpperCase(),
        format: "png",
        pngSize: 24,
        alt: "USA Flag",
        basePath: "static/img/flags",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(classes.root2, classes.buttoners),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: event.url,
        target: "_blank",
        style: {
          textDecoration: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_Button___default.a, {
        size: "large",
        variant: "raised",
        color: "secondary",
        className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(classes.button, classes[cta]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }, cta)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_link___default.a, {
        href: "/event/" + event.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_Button___default.a, {
        size: "large",
        variant: "flat",
        color: "secondary",
        className: classes.button,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      }, "Read More"))))));
    }
  }]);

  return EventPaperSheet;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

EventPaperSheet.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
  event: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_styles__["withStyles"])(styles)(EventPaperSheet));

/***/ }),

/***/ "./component/FancyButton.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_ButtonBase__ = __webpack_require__("./node_modules/@material-ui/core/ButtonBase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_ButtonBase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_ButtonBase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Typography__ = __webpack_require__("./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Typography__);
var _jsxFileName = "/home/ubuntu/workspace/pwa-events/component/FancyButton.jsx";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var styles = function styles(theme) {
  var _image;

  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      minWidth: 300,
      width: '100%'
    },
    image: (_image = {
      position: 'relative',
      height: 200
    }, _defineProperty(_image, theme.breakpoints.down('xs'), {
      width: '100% !important',
      // Overrides inline-style
      height: 100
    }), _defineProperty(_image, '&:hover, &$focusVisible', {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15
      },
      '& $imageMarked': {
        opacity: 0
      },
      '& $imageTitle': {
        border: '4px solid currentColor'
      }
    }), _image),
    focusVisible: {},
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%'
    },
    imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.8,
      transition: theme.transitions.create('opacity')
    },
    imageTitle: {
      position: 'relative',
      padding: "".concat(theme.spacing.unit * 2, "px ").concat(theme.spacing.unit * 4, "px ").concat(theme.spacing.unit + 6, "px")
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity')
    }
  };
};

function FancyButton(props) {
  var classes = props.classes;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_ButtonBase___default.a, {
    focusRipple: true,
    className: classes.image,
    focusVisibleClassName: classes.focusVisible,
    style: {
      width: "100%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: classes.imageSrc,
    style: {
      backgroundImage: "url(".concat(props.image, ")")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: classes.imageBackdrop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: classes.imageButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Typography___default.a, {
    component: "span",
    variant: "subheading",
    color: "inherit",
    className: classes.imageTitle,
    onClick: props.onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    }
  }, props.text, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: classes.imageMarked,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    }
  })))));
}

FancyButton.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
  image: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  text: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles)(FancyButton));

/***/ }),

/***/ "./component/PaperSheet.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Paper__ = __webpack_require__("./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Paper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Paper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Typography__ = __webpack_require__("./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Typography__);
var _jsxFileName = "/home/ubuntu/workspace/pwa-events/component/PaperSheet.jsx";






var styles = function styles(theme) {
  return {
    root: theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3
    })
  };
};

function PaperSheet(props) {
  var classes = props.classes;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Paper___default.a, {
    className: classes.root,
    elevation: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Typography___default.a, {
    variant: "headline",
    component: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, props.text)));
}

PaperSheet.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
  text: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles)(PaperSheet));

/***/ }),

/***/ "./node_modules/@material-ui/core/Button/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Button.default;
  }
});

var _Button = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Button/Button.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/Typography/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Typography.default;
  }
});

var _Typography = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Typography/Typography.js"));

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Typography__ = __webpack_require__("./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid__ = __webpack_require__("./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_AppBar__ = __webpack_require__("./node_modules/@material-ui/core/AppBar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_AppBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_AppBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_PaperSheet_jsx__ = __webpack_require__("./component/PaperSheet.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_EventPaperSheet_jsx__ = __webpack_require__("./component/EventPaperSheet.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_InputLabel__ = __webpack_require__("./node_modules/@material-ui/core/InputLabel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_InputLabel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_InputLabel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_MenuItem__ = __webpack_require__("./node_modules/@material-ui/core/MenuItem/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_MenuItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_MenuItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_core_FormControl__ = __webpack_require__("./node_modules/@material-ui/core/FormControl/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_core_FormControl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_FormControl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_core_Select__ = __webpack_require__("./node_modules/@material-ui/core/Select/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_core_Select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__material_ui_core_Select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_helmet__ = __webpack_require__("./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_next_head__);
var _jsxFileName = "/home/ubuntu/workspace/pwa-events/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






 //import ReactGA from 'react-ga';







 //import Moment from 'moment';

 //import {Consumer} from '../stores/AppContext.jsx';

var styles = function styles(theme) {
  return {
    root: theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3
    }),
    root2: {
      display: "flex",
      flexWrap: "wrap"
    },
    fixItem: {
      flex: '2 1 auto',
      minWidth: "67%",
      flexWrap: "wrap",
      maxWidth: 495,
      overflow: "hidden",
      textOverflow: "ellipsis"
    },
    avatar: {
      margin: 10
    },
    bigAvatar: {
      width: 20,
      height: 20
    },
    button: {
      margin: theme.spacing.unit
    },
    buttoners: {
      justifyContent: 'center',
      alignSelf: 'center'
    },
    heroUnit: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      alignItems: "baseline",
      padding: "50px",
      flexWrap: "wrap",
      textAlign: "center"
    },
    stickyBar: {
      padding: "16px 0 0 0",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      zIndex: 10,
      justifyContent: "center"
    },
    inlineForm: {
      margin: "0 10px",
      minWidth: 120,
      color: theme.palette.primary.contrastText
    },
    primaryTextColor: {
      color: theme.palette.primary.contrastText
    }
  };
};

var Dashboard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dashboard, _React$Component);

  function Dashboard(props) {
    var _this;

    _classCallCheck(this, Dashboard);

    _this = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this, props));
    _this.state = {
      filter: 'All',
      locationFilter: 'All',
      languageFilter: 'All'
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Dashboard, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState(_defineProperty({}, event.target.name, event.target.value));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          classes = _props.classes,
          events = _props.events,
          locations = _props.locations; //const events = this.props.events;
      //const locations = this.props.locations;
      //GA Pageview
      //ReactGA.pageview(window.location.pathname + window.location.search);

      var url = typeof window !== 'undefined' ? window.location.href + "" : "/";
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          flexGrow: 1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "canonical",
        href: url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "manifest",
        href: "/static/manifest.json",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "theme-color",
        content: "#ff6600",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "shortcut icon",
        href: "/static/icon.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "apple-touch-icon",
        href: "/static/icon.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "apple-mobile-web-app-title",
        content: "Hacker News",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "apple-mobile-web-app-status-bar-style",
        content: "default",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "apple-mobile-web-app-capable",
        content: "yes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "mobile-web-app-capable",
        content: "yes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "description",
        content: "4Geeks Academy: one app for all Events.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        property: "og:type",
        content: "article",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        property: "og:url",
        content: url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        property: "og:image",
        content: url + "static/android-chrome-512x512.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        property: "og:title",
        content: "4Geeks Academy's Events",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        property: "og:description",
        content: "4Geeks Academy: one app for all Events.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "twitter:card",
        content: "summary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "twitter:image",
        content: url + "static/android-chrome-512x512.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "twitter:title",
        content: "4Geeks Academy's Events",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "twitter:description",
        content: "4Geeks Academy: one app for all Events.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.heroUnit,
        id: "heroUnit-main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Typography___default.a, {
        component: "h1",
        variant: "display1",
        color: "inherit",
        className: classes.heroText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, "Select a location:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
        autoComplete: "off",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_FormControl___default.a, {
        className: classes.inlineForm,
        id: "heroSelect",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__material_ui_core_Select___default.a, {
        value: this.state.locationFilter,
        onChange: this.handleChange,
        inputProps: {
          name: 'locationFilter',
          id: 'location-simple'
        },
        className: classes.primaryTextColor,
        style: {
          border: "1px solid white",
          padding: "0 5px",
          fontSize: "2em"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_MenuItem___default.a, {
        value: "All",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, "All (",
      /*this.actions.getAllEvents().length*/
      events.length, ")")),
      /*this.actions.getAllLocations().map( (locat, index) => {
          return <MenuItem value={locat.slug} key={index}>{locat.name} ({locat.count})</MenuItem>;
      })*/
      locations.map(function (locat, index) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_MenuItem___default.a, {
          value: locat.slug,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          }
        }, locat.name, " (", locat.count, ")");
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Typography___default.a, {
        component: "h1",
        variant: "display1",
        color: "inherit",
        className: classes.heroText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, "to discover our available courses, workshops and events.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid___default.a, {
        container: true,
        spacing: 0,
        style: {
          justifyContent: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_AppBar___default.a, {
        className: classes.stickyBar,
        position: "sticky",
        color: "default",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          display: "flex",
          flexWrap: "no-wrap",
          alignItems: "baseline"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
        autoComplete: "off",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_FormControl___default.a, {
        className: classes.inlineForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_InputLabel___default.a, {
        htmlFor: "filter-simple",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }, "Type of event"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__material_ui_core_Select___default.a, {
        value: this.state.filter,
        onChange: this.handleChange,
        inputProps: {
          name: 'filter',
          id: 'filter-simple'
        },
        style: {
          fontSize: '1.2rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_MenuItem___default.a, {
        value: "All",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }, "All")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_MenuItem___default.a, {
        value: 'course',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }, "Course"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_MenuItem___default.a, {
        value: 'workshop',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }, "Workshop"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_MenuItem___default.a, {
        value: 'hackathon',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      }, "Hackathon"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_MenuItem___default.a, {
        value: 'intro_to_coding',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }, "Intro to Coding"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_MenuItem___default.a, {
        value: 'coding_weekend',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, "Coding Weekend"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_MenuItem___default.a, {
        value: '4geeks_night',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }, "4Geeks Night"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_MenuItem___default.a, {
        value: 'other',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }, "Other"))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          display: "flex",
          flexWrap: "no-wrap",
          alignItems: "baseline"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
        autoComplete: "off",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_FormControl___default.a, {
        className: classes.inlineForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_InputLabel___default.a, {
        htmlFor: "language-simple",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }, "Language"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__material_ui_core_Select___default.a, {
        value: this.state.languageFilter,
        onChange: this.handleChange,
        inputProps: {
          name: 'languageFilter',
          id: 'language-simple'
        },
        style: {
          fontSize: '1.2rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_MenuItem___default.a, {
        value: "All",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }, "All")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_MenuItem___default.a, {
        value: 'en',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }, "English"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_MenuItem___default.a, {
        value: 'es',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        }
      }, "Espa\xF1ol")))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid___default.a, {
        item: true,
        xs: true,
        md: 7,
        xl: 5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        }
      }, events.length < 1 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__component_PaperSheet_jsx__["a" /* default */], {
        text: "No Events",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        }
      }) : events.map(function (event, index) {
        if ((_this2.state.filter === event.type || _this2.state.filter === '' || _this2.state.filter === 'All') && (_this2.state.locationFilter === event.location_slug || _this2.state.locationFilter === '' || _this2.state.locationFilter === 'All') && (_this2.state.languageFilter === event.lang || _this2.state.languageFilter === event.language || _this2.state.languageFilter === '' || _this2.state.languageFilter === 'All')) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__component_EventPaperSheet_jsx__["a" /* default */], {
          key: index,
          event: event,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 226
          }
        });
        return undefined;
      }))));
    }
  }]);

  return Dashboard;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles)(Dashboard));
Dashboard.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.b465d267d03fffc0f4a0.hot-update.js.map