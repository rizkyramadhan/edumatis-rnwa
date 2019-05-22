webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/app/screens/admin/Transaksi/TransaksiDetail.tsx":
/*!***************************************************************!*\
  !*** ./pages/app/screens/admin/Transaksi/TransaksiDetail.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../libs/ui/UIBody */ "./pages/app/libs/ui/UIBody.tsx");
/* harmony import */ var _libs_ui_UICol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../libs/ui/UICol */ "./pages/app/libs/ui/UICol.tsx");
/* harmony import */ var _libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../libs/ui/UIContainer */ "./pages/app/libs/ui/UIContainer.tsx");
/* harmony import */ var _libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../libs/ui/UIHead */ "./pages/app/libs/ui/UIHead.tsx");
/* harmony import */ var _libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../libs/ui/UIRow */ "./pages/app/libs/ui/UIRow.tsx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/dist/index.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-native-web */ "./node_modules/react-native-web/dist/index.js");

var _jsxFileName = "/Volumes/Data/Projects/edumatis-rnwa/web/pages/app/screens/admin/Transaksi/TransaksiDetail.tsx";








/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__["observer"])(function (_ref) {
  var navigation = _ref.navigation;
  var data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__["useObservable"])({
    form: navigation.getParam("item")
  });
  var item = data.form;

  var nominal = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(item.amount || item.nominal || 0);

  var status = (item.paid || item.detail || item.status).toLowerCase();
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_4__["default"], {
    navigation: navigation,
    title: "#".concat(item.id, " ").concat(item.kewajiban.nama_kewajiban, " - Rp ").concat(nominal.toLocaleString()),
    onBack: function onBack() {
      navigation.goBack();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 1,
    sizexs: 4,
    sizemd: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Siswa:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 11,
    sizexs: 8,
    sizemd: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, item.murid.nama_murid)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 1,
    sizexs: 4,
    sizemd: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Kelas:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 11,
    sizexs: 8,
    sizemd: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, item.murid.kelas_murids[0].kelas.nama_kelas || "Semua Kelas")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 1,
    sizexs: 4,
    sizemd: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Nominal:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 11,
    sizexs: 8,
    sizemd: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Rp ", nominal.toLocaleString()))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 1,
    sizexs: 4,
    sizemd: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Status:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 11,
    sizexs: 8,
    sizemd: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, status))));
}));

/***/ })

})
//# sourceMappingURL=index.js.2f527f797079f3b44859.hot-update.js.map