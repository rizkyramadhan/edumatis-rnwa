webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/app/screens/admin/Kewajiban.tsx":
/*!***********************************************!*\
  !*** ./pages/app/screens/admin/Kewajiban.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native-web */ "./node_modules/react-native-web/dist/index.js");
/* harmony import */ var _libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libs/ui/UIButton */ "./pages/app/libs/ui/UIButton.tsx");
/* harmony import */ var _stores_RootStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../stores/RootStore */ "./pages/app/stores/RootStore.ts");
var _jsxFileName = "/media/riz/data/Projects/edumatis/web/pages/app/screens/admin/Kewajiban.tsx";




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var navigation = _ref.navigation;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_1__["View"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onPress: function onPress() {
      _stores_RootStore__WEBPACK_IMPORTED_MODULE_3__["RootStore"].session.logout();
      navigation.popToTop();
      navigation.replace("Login");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Logout"));
});

/***/ })

})
//# sourceMappingURL=index.js.3feb05339c59a8d7c63d.hot-update.js.map