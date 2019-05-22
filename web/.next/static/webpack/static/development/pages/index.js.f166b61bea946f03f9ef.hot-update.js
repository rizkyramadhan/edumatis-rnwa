webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/app/screens/siswa/SideBar.tsx":
/*!*********************************************!*\
  !*** ./pages/app/screens/siswa/SideBar.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./pages/app/config.ts");
/* harmony import */ var _libs_nav_NavContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../libs/nav/NavContainer */ "./pages/app/libs/nav/NavContainer.tsx");
/* harmony import */ var _libs_ui_UIImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../libs/ui/UIImage */ "./pages/app/libs/ui/UIImage.tsx");
/* harmony import */ var _stores_RootStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../stores/RootStore */ "./pages/app/stores/RootStore.ts");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/dist/index.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-native-web */ "./node_modules/react-native-web/dist/index.js");
/* harmony import */ var _libs_queries_user_getsetSession__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../libs/queries/user/getsetSession */ "./pages/app/libs/queries/user/getsetSession.ts");



var _jsxFileName = "/media/riz/data/Projects/edumatis/web/pages/app/screens/siswa/SideBar.tsx";








var Button = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__["observer"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_9__["TouchableOpacity"], {
    onPress: props.onPress,
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props.style, {
      flexDirection: "row",
      alignItems: "center",
      alignContent: "center"
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_libs_ui_UIImage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      width: 20,
      margin: 10,
      height: 20
    },
    source: props.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_9__["Text"], {
    style: {
      color: _config__WEBPACK_IMPORTED_MODULE_3__["default"].color.mainText
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, props.text));
});
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var navigation, navigateTo, session;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            navigation = _ref.navigation;
            navigateTo = Object(_libs_nav_NavContainer__WEBPACK_IMPORTED_MODULE_4__["createNavigateTo"])(navigation);
            _context.next = 4;
            return Object(_libs_queries_user_getsetSession__WEBPACK_IMPORTED_MODULE_10__["getSession"])();

          case 4:
            session = _context.sent;
            return _context.abrupt("return", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_9__["View"], {
              style: s.container,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 38
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_9__["View"], {
              style: {
                alignItems: "center",
                justifyContent: "center"
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 39
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_libs_ui_UIImage__WEBPACK_IMPORTED_MODULE_5__["default"], {
              source: __webpack_require__(/*! ../../imgs/logo.png */ "./pages/app/imgs/logo.png"),
              mobileStyle: {
                height: 160
              },
              style: {
                width: "70%",
                paddingTop: 20,
                paddingBottom: 25
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              },
              __self: this
            })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_9__["View"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 57
              },
              __self: this
            }, session), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_9__["View"], {
              style: {
                flex: 1
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 60
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Button, {
              text: "Kewajiban",
              onPress: function onPress() {
                navigateTo("Kewajiban");
              },
              image: __webpack_require__(/*! ../../imgs/kewajiban.png */ "./pages/app/imgs/kewajiban.png"),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 61
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Button, {
              text: "Pengumuman",
              onPress: function onPress() {
                navigateTo("Pengumuman");
              },
              image: __webpack_require__(/*! ../../imgs/pengumuman.png */ "./pages/app/imgs/pengumuman.png"),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 68
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Button, {
              text: "Logout",
              style: {
                marginTop: 20
              },
              image: __webpack_require__(/*! ../../imgs/logout.png */ "./pages/app/imgs/logout.png"),
              onPress: function onPress() {
                _stores_RootStore__WEBPACK_IMPORTED_MODULE_6__["RootStore"].session.logout();
                navigation.popToTop();
                navigation.replace("Login");
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 76
              },
              __self: this
            }))));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
})());
var s = react_native_web__WEBPACK_IMPORTED_MODULE_9__["StyleSheet"].create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    backgroundColor: _config__WEBPACK_IMPORTED_MODULE_3__["default"].color.main
  }
});

/***/ })

})
//# sourceMappingURL=index.js.f166b61bea946f03f9ef.hot-update.js.map