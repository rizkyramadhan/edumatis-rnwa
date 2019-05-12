webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/app/screens/admin/Kelas/MuridDetailProfil.tsx":
/*!*************************************************************!*\
  !*** ./pages/app/screens/admin/Kelas/MuridDetailProfil.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../libs/ui/UIBody */ "./pages/app/libs/ui/UIBody.tsx");
/* harmony import */ var _libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../libs/ui/UIContainer */ "./pages/app/libs/ui/UIContainer.tsx");
/* harmony import */ var _libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../libs/ui/UIHead */ "./pages/app/libs/ui/UIHead.tsx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/dist/index.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-native-web */ "./node_modules/react-native-web/dist/index.js");
/* harmony import */ var _MuridDetailSide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MuridDetailSide */ "./pages/app/screens/admin/Kelas/MuridDetailSide.tsx");
/* harmony import */ var _libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../libs/ui/UIButton */ "./pages/app/libs/ui/UIButton.tsx");
/* harmony import */ var _MuridDetail__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MuridDetail */ "./pages/app/screens/admin/Kelas/MuridDetail.tsx");
/* harmony import */ var react_json_to_html__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-json-to-html */ "./node_modules/react-json-to-html/dist/App.js");
/* harmony import */ var react_json_to_html__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_json_to_html__WEBPACK_IMPORTED_MODULE_12__);



var _jsxFileName = "/media/riz/data/Projects/edumatis/web/pages/app/screens/admin/Kelas/MuridDetailProfil.tsx";










/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__["observer"])(function (_ref) {
  var navigation = _ref.navigation,
      parentNavigation = _ref.parentNavigation;
  var data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__["useObservable"])({
    loading: true,
    form: parentNavigation.getParam("item"),
    kelas: parentNavigation.getParam("kelas")
  });
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: data.form.id ? "Detail Siswa #".concat(data.form.id) : "Buat Siswa Baru",
    onBack: function onBack() {
      parentNavigation.goBack();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onPress:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var form;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              form = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, data.form);
              _context.next = 3;
              return Object(_MuridDetail__WEBPACK_IMPORTED_MODULE_11__["saveUser"])(form, data.kelas.id);

            case 3:
              parentNavigation.goBack();

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Simpan")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_8__["View"], {
    style: {
      flexDirection: "row",
      flex: 1,
      borderTopColor: "#ccc",
      borderTopWidth: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_MuridDetailSide__WEBPACK_IMPORTED_MODULE_9__["default"], {
    navigation: navigation,
    form: data.form,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, data.form.data ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_json_to_html__WEBPACK_IMPORTED_MODULE_12__["JsonTable"], {
    json: data.form.data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "\u2014 Data Diri Kosong \u2014 "))));
}));

/***/ })

})
//# sourceMappingURL=index.js.c27f5391c3f3dc50bb7a.hot-update.js.map