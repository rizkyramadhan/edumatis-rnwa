webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/app/screens/siswa/Kewajiban/Kewajiban.tsx":
/*!*********************************************************!*\
  !*** ./pages/app/screens/siswa/Kewajiban/Kewajiban.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../libs/queries/crud/rawQuery */ "./pages/app/libs/queries/crud/rawQuery.ts");
/* harmony import */ var _libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../libs/ui/UIBody */ "./pages/app/libs/ui/UIBody.tsx");
/* harmony import */ var _libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../libs/ui/UIButton */ "./pages/app/libs/ui/UIButton.tsx");
/* harmony import */ var _libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../libs/ui/UIContainer */ "./pages/app/libs/ui/UIContainer.tsx");
/* harmony import */ var _libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../libs/ui/UIHead */ "./pages/app/libs/ui/UIHead.tsx");
/* harmony import */ var _libs_ui_UIList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../libs/ui/UIList */ "./pages/app/libs/ui/UIList.tsx");
/* harmony import */ var _libs_ui_UIListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../libs/ui/UIListItem */ "./pages/app/libs/ui/UIListItem.tsx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/dist/index.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-native-web */ "./node_modules/react-native-web/dist/index.js");
/* harmony import */ var _libs_nav_StackNav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../libs/nav/StackNav */ "./pages/app/libs/nav/StackNav.tsx");
/* harmony import */ var _KewajibanDetail__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./KewajibanDetail */ "./pages/app/screens/siswa/Kewajiban/KewajibanDetail.tsx");
/* harmony import */ var _stores_RootStore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../stores/RootStore */ "./pages/app/stores/RootStore.ts");
/* harmony import */ var _libs_queries_user_getsetSession__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../libs/queries/user/getsetSession */ "./pages/app/libs/queries/user/getsetSession.ts");


var _jsxFileName = "/media/riz/data/Projects/edumatis/web/pages/app/screens/siswa/Kewajiban/Kewajiban.tsx";














var Kewajiban = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__["observer"])(function (_ref) {
  var navigation = _ref.navigation;
  var data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__["useObservable"])({
    list: [],
    loading: true
  });
  Object(react__WEBPACK_IMPORTED_MODULE_10__["useEffect"])(function () {
    var fetch =
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var session, kelas, result;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_libs_queries_user_getsetSession__WEBPACK_IMPORTED_MODULE_15__["getSession"])();

              case 2:
                session = _context.sent;
                _context.next = 5;
                return Object(_libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_2__["default"])("{\n        kelas_murids(where: {murid_id: {_eq: ".concat(_stores_RootStore__WEBPACK_IMPORTED_MODULE_14__["RootStore"].session.user.id, "}}) {\n          kelas_id\n        }\n      }\n      "));

              case 5:
                kelas = _context.sent;
                console.log(kelas);
                _context.next = 9;
                return Object(_libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_2__["default"])("{\n        kewajiban(order_by: [{tipe_pembayaran: asc}, {id: asc}], where: {kelas: {_has_keys_any: [\"5\", \"6\"]}}) {\n          id\n          nama_kewajiban\n          nominal\n          tipe_pembayaran\n          kelas\n        }\n      }");

              case 9:
                result = _context.sent;
                data.list = result.kewajiban;
                data.loading = false;

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetch() {
        return _ref2.apply(this, arguments);
      };
    }();

    fetch();
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Kewajiban",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: "small",
    onPress: function onPress() {
      navigation.navigate("KewajibanDetail", {
        item: {
          nominal: 100000,
          kelas: {}
        }
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "+ Kewajiban Baru")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: data.list,
    loading: data.loading,
    render: function render(list) {
      var item = list.item;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIListItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onPress: function onPress() {
          navigation.navigate("KewajibanDetail", {
            item: item
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_11__["View"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_11__["Text"], {
        style: {
          fontSize: 15,
          fontWeight: "bold",
          color: "#555"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, item.nama_kewajiban), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_11__["Text"], {
        style: {
          fontSize: 14
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Rp ", item.nominal.toLocaleString())), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_11__["View"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_11__["Text"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, item.tipe_pembayaran)));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_libs_nav_StackNav__WEBPACK_IMPORTED_MODULE_12__["default"])({
  Kewajiban: {
    screen: Kewajiban
  },
  KewajibanDetail: {
    screen: _KewajibanDetail__WEBPACK_IMPORTED_MODULE_13__["default"]
  }
}));

/***/ })

})
//# sourceMappingURL=index.js.5c2c40a253cdbfa5d2c7.hot-update.js.map