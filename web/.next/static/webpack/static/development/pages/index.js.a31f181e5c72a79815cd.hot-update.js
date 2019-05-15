webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/app/libs/ui/UICol.tsx":
/*!*************************************!*\
  !*** ./pages/app/libs/ui/UICol.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native-web */ "./node_modules/react-native-web/dist/index.js");
var _jsxFileName = "/Volumes/Data/Projects/edumatis-rnwa/web/pages/app/libs/ui/UICol.tsx";


var width = react_native_web__WEBPACK_IMPORTED_MODULE_1__["Dimensions"].get("window").width;
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 12 : _ref$size,
      children = _ref.children,
      sizexs = _ref.sizexs,
      sizesm = _ref.sizesm,
      sizemd = _ref.sizemd,
      sizelg = _ref.sizelg,
      sizexl = _ref.sizexl,
      sizexxl = _ref.sizexxl;
  var current = size;

  if (width <= 410) {
    current = sizesm || size;
  } else if (width >= 411 && width <= 567) {
    current = sizesm || size;
  } else if (width >= 568 && width <= 767) {
    current = sizemd || size;
  } else if (width >= 768 && width <= 1023) {
    current = sizelg || size;
  } else if (width >= 1024 && width <= 1279) {
    current = sizexl || size;
  } else if (width >= 1280) {
    current = sizexxl || size;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: {
      flexBasis: current / 12 * 100 + "%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, children);
});

/***/ })

})
//# sourceMappingURL=index.js.a31f181e5c72a79815cd.hot-update.js.map