webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/app/screens/Login.tsx":
/*!*************************************!*\
  !*** ./pages/app/screens/Login.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _libs_queries_crud_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../libs/queries/crud/query */ "./pages/app/libs/queries/crud/query.ts");
/* harmony import */ var _libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../libs/ui/UIButton */ "./pages/app/libs/ui/UIButton.tsx");
/* harmony import */ var _libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../libs/ui/UIFieldText */ "./pages/app/libs/ui/UIFieldText.tsx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/dist/index.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-native-web */ "./node_modules/react-native-web/dist/index.js");
/* harmony import */ var _stores_RootStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../stores/RootStore */ "./pages/app/stores/RootStore.ts");
/* harmony import */ var _libs_queries_user_checkSession__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../libs/queries/user/checkSession */ "./pages/app/libs/queries/user/checkSession.ts");


var _jsxFileName = "/media/riz/data/Projects/edumatis/web/pages/app/screens/Login.tsx";








/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__["observer"])(function (_ref) {
  var navigation = _ref.navigation;
  var data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__["useObservable"])({
    sekolah_id: "1",
    nsa: "1",
    password: "123"
  });
  var meta = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__["useObservable"])({
    sekolah: "",
    murid: "",
    loading: true
  });
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var session;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_libs_queries_user_checkSession__WEBPACK_IMPORTED_MODULE_9__["checkSession"])();

            case 2:
              session = _context.sent;

              if (!(session && session.murid && session.murid.nsa)) {
                _context.next = 6;
                break;
              }

              if (session.murid.nsa === "admin") {
                navigation.replace("Admin");
              } else {
                navigation.replace("Siswa");
              }

              return _context.abrupt("return");

            case 6:
              meta.loading = false;

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, []);

  if (meta.loading) {
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_7__["View"], {
      style: styles.container,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_7__["Text"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "Loading..."));
  }

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_7__["View"], {
    style: styles.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "ID Sekolah",
    sublabel: meta.sekolah,
    value: data.sekolah_id,
    style: {
      width: "70%"
    },
    setValue: function setValue(value) {
      return data.sekolah_id = value;
    },
    onBlur:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var res;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Object(_libs_queries_crud_query__WEBPACK_IMPORTED_MODULE_2__["default"])("sekolah", ["nama_sekolah"], {
                where: {
                  id: data.sekolah_id
                },
                useSession: false
              });

            case 2:
              res = _context2.sent;

              if (res && res.nama_sekolah) {
                meta.sekolah = res.nama_sekolah;
              } else {
                meta.sekolah = "Sekolah tidak ditemukan";
              }

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "Nomor Induk / NSA",
    sublabel: meta.murid,
    value: data.nsa,
    style: {
      width: "70%"
    },
    setValue: function setValue(value) {
      return data.nsa = value;
    },
    onBlur:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var res;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return Object(_libs_queries_crud_query__WEBPACK_IMPORTED_MODULE_2__["default"])("murid", ["nama_murid"], {
                where: {
                  sekolah_id: data.sekolah_id,
                  nsa: data.nsa
                },
                useSession: false
              });

            case 2:
              res = _context3.sent;

              if (res && res.nama_murid) {
                meta.murid = "Nama: " + res.nama_murid;
              } else {
                meta.murid = "Nomor Induk tidak ditemukan";
              }

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "password",
    label: "Password",
    value: data.password,
    setValue: function setValue(value) {
      return data.password = value;
    },
    style: {
      width: "70%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      width: "50%"
    },
    onPress:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
      var session;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              meta.loading = true;
              _context4.next = 3;
              return _stores_RootStore__WEBPACK_IMPORTED_MODULE_8__["RootStore"].session.login(data.sekolah_id, data.nsa, data.password);

            case 3:
              session = _context4.sent;

              if (!(session && session.murid && session.murid.nsa)) {
                _context4.next = 7;
                break;
              }

              if (session.murid.nsa === "admin") {
                navigation.replace("Admin");
              } else {
                navigation.replace("Siswa");
              }

              return _context4.abrupt("return");

            case 7:
              meta.loading = false;

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Login"));
}));
var styles = react_native_web__WEBPACK_IMPORTED_MODULE_7__["StyleSheet"].create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  }
});

/***/ })

})
//# sourceMappingURL=index.js.076dd6a3bbeb66e26bd9.hot-update.js.map