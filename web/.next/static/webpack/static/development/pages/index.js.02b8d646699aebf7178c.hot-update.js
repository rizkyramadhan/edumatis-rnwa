webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/app/libs/nav/SideNav.tsx":
/*!****************************************!*\
  !*** ./pages/app/libs/nav/SideNav.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/dist/index.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-native-web */ "./node_modules/react-native-web/dist/index.js");
/* harmony import */ var _ui_Style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/Style */ "./pages/app/libs/ui/Style.tsx");
/* harmony import */ var _NavContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavContainer */ "./pages/app/libs/nav/NavContainer.tsx");

var _jsxFileName = "/Volumes/Data/Projects/edumatis-rnwa/web/pages/app/libs/nav/SideNav.tsx";





var absoluteSideBar = {
  position: "absolute",
  left: 0,
  top: 0,
  bottom: 0,
  width: "30%",
  flexDirection: "row",
  alignItems: "stretch",
  zIndex: 99
};
var flexSideBar = {
  width: "30%",
  maxWidth: 280,
  flexDirection: "row",
  alignItems: "stretch"
};
/* harmony default export */ __webpack_exports__["default"] = (function (data) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var isRoot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var Container = Object(_NavContainer__WEBPACK_IMPORTED_MODULE_5__["default"])(data);

  if (config.contentComponent) {
    var SideBar = config.contentComponent;
    return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["observer"])(function (props) {
      var ref = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])({});

      if (ref.current) {
        ref.current.toggleDrawer = function () {
          obs.opened = !obs.opened;
        };
      }

      var obs = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useObservable"])({
        opened: false
      });
      Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(Object(_ui_Style__WEBPACK_IMPORTED_MODULE_4__["ResponsiveHandler"])(obs), []);
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_3__["View"], {
        style: {
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          flexDirection: "row",
          alignItems: "stretch"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_3__["View"], {
        style: Object(_ui_Style__WEBPACK_IMPORTED_MODULE_4__["Responsive"])({
          xs: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, absoluteSideBar, {
            transform: [{
              scale: obs.opened ? 1 : 0
            }]
          }),
          sm: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, absoluteSideBar, {
            transform: [{
              scale: obs.opened ? 1 : 0
            }]
          }),
          md: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, flexSideBar, {
            transform: [{
              scale: 1
            }]
          }),
          lg: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, flexSideBar, {
            transform: [{
              scale: 1
            }]
          }),
          xl: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, flexSideBar, {
            transform: [{
              scale: 1
            }]
          }),
          xxl: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, flexSideBar, {
            transform: [{
              scale: 1
            }]
          })
        }, obs.width),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SideBar, {
        navigation: ref.current,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, {
        ref: ref,
        parentNavigation: props.navigation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }));
    });
  } else {
    return function () {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      });
    };
  }
});

/***/ })

})
//# sourceMappingURL=index.js.02b8d646699aebf7178c.hot-update.js.map