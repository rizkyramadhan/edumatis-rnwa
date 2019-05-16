webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/app/libs/ui/UIHead.tsx":
/*!**************************************!*\
  !*** ./pages/app/libs/ui/UIHead.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native-web */ "./node_modules/react-native-web/dist/index.js");
/* harmony import */ var _UIImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UIImage */ "./pages/app/libs/ui/UIImage.tsx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/dist/index.module.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Style */ "./pages/app/libs/ui/Style.tsx");

var _jsxFileName = "/Volumes/Data/Projects/edumatis-rnwa/web/pages/app/libs/ui/UIHead.tsx";





/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__["observer"])(function (_ref) {
  var title = _ref.title,
      children = _ref.children,
      onBack = _ref.onBack,
      navigation = _ref.navigation;
  var obs = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__["useObservable"])({});
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(Object(_Style__WEBPACK_IMPORTED_MODULE_5__["ResponsiveHandler"])(obs), []);
  var sideBtnStyle = {};
  var viewStyle = {
    paddingVertical: 15,
    paddingHorizontal: 25,
    flexBasis: 75,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_2__["View"], {
    style: Object(_Style__WEBPACK_IMPORTED_MODULE_5__["Responsive"])({
      xs: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, viewStyle, {
        paddingRight: 0
      }),
      sm: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, viewStyle, {
        paddingRight: 0
      }),
      md: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, viewStyle, {
        display: "none"
      }),
      lg: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, viewStyle, {
        display: "none"
      }),
      xl: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, viewStyle, {
        display: "none"
      }),
      xxl: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, viewStyle, {
        display: "none"
      })
    }, obs.width),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_2__["View"], {
    style: {
      flexDirection: "row",
      alignItems: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, navigation && !onBack && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_2__["TouchableOpacity"], {
    style: Object(_Style__WEBPACK_IMPORTED_MODULE_5__["Responsive"])({
      xs: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sideBtnStyle),
      sm: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sideBtnStyle),
      md: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sideBtnStyle, {
        display: "none"
      }),
      lg: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sideBtnStyle, {
        display: "none"
      }),
      xl: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sideBtnStyle, {
        display: "none"
      }),
      xxl: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sideBtnStyle, {
        display: "none"
      })
    }, obs.width),
    onPress: function onPress() {
      if (navigation.toggleDrawer) {
        navigation.toggleDrawer();
      } else {
        var parent = navigation.dangerouslyGetParent();

        if (parent.toggleDrawer) {
          parent.toggleDrawer();
        }
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UIImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      width: 20,
      height: 20,
      marginLeft: -5,
      marginRight: 20
    },
    source: __webpack_require__(/*! ./imgs/line-menu.png */ "./pages/app/libs/ui/imgs/line-menu.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })), onBack && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_2__["TouchableOpacity"], {
    style: {
      width: 20,
      height: 20,
      marginLeft: -10,
      marginRight: 10,
      marginTop: 3
    },
    onPress: onBack,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UIImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      width: 20,
      height: 20
    },
    source: __webpack_require__(/*! ./imgs/back.png */ "./pages/app/libs/ui/imgs/back.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    style: {
      fontSize: 22,
      color: "#555",
      flex: 1,
      flexWrap: "wrap"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, (title || "").trim())), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_2__["View"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, children));
}));

/***/ }),

/***/ "./pages/app/libs/ui/imgs/line-menu.png":
/*!**********************************************!*\
  !*** ./pages/app/libs/ui/imgs/line-menu.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ })

})
//# sourceMappingURL=index.js.3169f63abefce203d839.hot-update.js.map