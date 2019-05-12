webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/app/screens/admin/SideBar.tsx":
/*!*********************************************!*\
  !*** ./pages/app/screens/admin/SideBar.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _libs_ui_UIImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/ui/UIImage */ "./pages/app/libs/ui/UIImage.tsx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/dist/index.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-native-web */ "./node_modules/react-native-web/dist/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config */ "./pages/app/config.ts");
/* harmony import */ var _stores_RootStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../stores/RootStore */ "./pages/app/stores/RootStore.ts");

var _jsxFileName = "/media/riz/data/Projects/edumatis/web/pages/app/screens/admin/SideBar.tsx";






var Button = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["observer"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_4__["TouchableOpacity"], {
    onPress: props.onPress,
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.style, {
      flexDirection: "row",
      alignItems: "center",
      alignContent: "center"
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_libs_ui_UIImage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: {
      width: 20,
      padding: 10,
      height: 20
    },
    source: props.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    style: {
      color: _config__WEBPACK_IMPORTED_MODULE_5__["default"].color.mainText
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, props.text));
});
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var navigation = _ref.navigation;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_4__["View"], {
    style: s.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_4__["View"], {
    style: {
      alignItems: "center",
      justifyContent: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_libs_ui_UIImage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    source: __webpack_require__(/*! ../../imgs/logo.png */ "./pages/app/imgs/logo.png"),
    style: {
      width: "70%",
      paddingTop: 20,
      paddingBottom: 25
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Button, {
    text: "Kewajiban",
    onPress: function onPress() {
      navigation.replace("Kewajiban");
    },
    image: __webpack_require__(/*! ../../imgs/kewajiban.png */ "./pages/app/imgs/kewajiban.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Button, {
    text: "Pengumuman",
    onPress: function onPress() {
      navigation.replace("Pengumuman");
    },
    image: __webpack_require__(/*! ../../imgs/pengumuman.png */ "./pages/app/imgs/pengumuman.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Button, {
    text: "Kelas & Murid",
    onPress: function onPress() {
      navigation.replace("Kelas");
    },
    image: __webpack_require__(/*! ../../imgs/kelas.png */ "./pages/app/imgs/kelas.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Button, {
    text: "Logout",
    style: {
      marginTop: 20
    },
    onPress: function onPress() {
      _stores_RootStore__WEBPACK_IMPORTED_MODULE_6__["RootStore"].session.logout();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }));
});
var s = react_native_web__WEBPACK_IMPORTED_MODULE_4__["StyleSheet"].create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    backgroundColor: _config__WEBPACK_IMPORTED_MODULE_5__["default"].color.main
  }
});

/***/ })

})
//# sourceMappingURL=index.js.1976193c10313c4e413f.hot-update.js.map