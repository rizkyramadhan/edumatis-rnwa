webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/app/libs/ui/UIList.tsx":
/*!**************************************!*\
  !*** ./pages/app/libs/ui/UIList.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native-web */ "./node_modules/react-native-web/dist/index.js");
var _jsxFileName = "/Volumes/Data/Projects/edumatis-rnwa/web/pages/app/libs/ui/UIList.tsx";



var UIList = function UIList(props) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (props.reload) props.reload();
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_1__["View"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, props.loading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    style: {
      margin: 15
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Loading..."), props.data.length === 0 ? !props.loading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    style: {
      textAlign: "center",
      margin: 15
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "\u2014 Empty \u2014") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_1__["FlatList"], {
    extraData: props.extraData,
    data: props.data,
    keyExtractor: function keyExtractor(item, index) {
      return index.toString();
    },
    refreshing: props.loading,
    onRefresh: props.reload,
    renderItem: function renderItem(data) {
      return props.render(data);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }));
};

UIList.defaultProps = {
  name: "UIList"
};
/* harmony default export */ __webpack_exports__["default"] = (UIList);

/***/ })

})
//# sourceMappingURL=index.js.d1a00bd6a5390a50d6cf.hot-update.js.map