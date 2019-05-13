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
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _libs_nav_StackNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../libs/nav/StackNav */ "./pages/app/libs/nav/StackNav.tsx");
/* harmony import */ var _libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../libs/queries/crud/rawQuery */ "./pages/app/libs/queries/crud/rawQuery.ts");
/* harmony import */ var _libs_queries_user_getsetSession__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../libs/queries/user/getsetSession */ "./pages/app/libs/queries/user/getsetSession.ts");
/* harmony import */ var _libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../libs/ui/UIBody */ "./pages/app/libs/ui/UIBody.tsx");
/* harmony import */ var _libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../libs/ui/UIContainer */ "./pages/app/libs/ui/UIContainer.tsx");
/* harmony import */ var _libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../libs/ui/UIHead */ "./pages/app/libs/ui/UIHead.tsx");
/* harmony import */ var _libs_ui_UIList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../libs/ui/UIList */ "./pages/app/libs/ui/UIList.tsx");
/* harmony import */ var _libs_ui_UIListItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../libs/ui/UIListItem */ "./pages/app/libs/ui/UIListItem.tsx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/dist/index.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-native-web */ "./node_modules/react-native-web/dist/index.js");
/* harmony import */ var _KewajibanDetail__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./KewajibanDetail */ "./pages/app/screens/siswa/Kewajiban/KewajibanDetail.tsx");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_16__);




var _jsxFileName = "/Volumes/Data/Projects/edumatis-rnwa/web/pages/app/screens/siswa/Kewajiban/Kewajiban.tsx";













var Kewajiban = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_12__["observer"])(function (_ref) {
  var navigation = _ref.navigation;
  var data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_12__["useObservable"])({
    list: [],
    loading: true
  });
  Object(react__WEBPACK_IMPORTED_MODULE_13__["useEffect"])(function () {
    var fetch =
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var session, kelasRaw, kelas, monthStart, monthEnd, result;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_libs_queries_user_getsetSession__WEBPACK_IMPORTED_MODULE_6__["getSession"])();

              case 2:
                session = _context.sent;
                _context.next = 5;
                return Object(_libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_5__["default"])("{\n        kelas_murid(where: {murid_id: {_eq: ".concat(session.murid.id, "}}) {\n          kelas_id\n        }\n      }"));

              case 5:
                kelasRaw = _context.sent;

                if (!(kelasRaw && kelasRaw.kelas_murid && kelasRaw.kelas_murid.length > 0)) {
                  _context.next = 14;
                  break;
                }

                kelas = kelasRaw.kelas_murid.map(function (k) {
                  return k.kelas_id.toString();
                });
                monthStart = dayjs__WEBPACK_IMPORTED_MODULE_16___default()().startOf("month").subtract(1, "day").format("YYYY-MM-DD");
                monthEnd = dayjs__WEBPACK_IMPORTED_MODULE_16___default()().endOf("month").add(1, "day").format("YYYY-MM-DD");
                _context.next = 12;
                return Object(_libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_5__["default"])("{\n          kewajiban(order_by: [{tipe_pembayaran: asc}, {id: asc}], \n            where: {kelas: {_has_keys_any: ".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(kelas), "}}) {\n            id\n            nama_kewajiban\n            nominal\n            tipe_pembayaran\n            kelas\n            transaksi(\n              where: {\n                kewajiban: {\n                  _or:[\n                    {_and:[\n                      {tipe_pembayaran:{_eq:\"Bulanan\"}},\n                      {transaksi: {\n                       \t_and:[\n                          {tstamp: {_gte: \"").concat(monthStart, "\"}},\n                          {tstamp: {_lte: \"").concat(monthEnd, "\"}},\n                        ] \n                      }}\n                    ]},\n                    {tipe_pembayaran:{_eq:\"Insidentil\"}}\n                  ]\n                }\n              }\n            ) {\n              id\n              status\n              tstamp\n              detail\n            }\n          }  \n        }"));

              case 12:
                result = _context.sent;
                data.list = result.kewajiban.map(function (item) {
                  var nominal = item.nominal;

                  _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(item.kelas).forEach(function (i) {
                    var k = item.kelas[i];

                    if (k.nominal !== undefined) {
                      nominal = k.nominal;
                    }

                    k.murid.forEach(function (m) {
                      if (m && session.murid && m.id === session.murid.id) {
                        if (m.nominal !== undefined) {
                          nominal = m.nominal;
                        }
                      }
                    });
                    item.nominal = nominal;
                  });

                  item.status = item.nominal === 0 ? "Lunas" : "Belum Lunas";
                  item.transaksi.forEach(function (t) {
                    if (item.tipe_pembayaran === "Insidentil") {
                      if (t.status === "success") {
                        item.status = "Lunas";
                      }
                    } else {
                      if (t.status === "success") {
                        item.status = "Lunas";
                      }
                    }
                  });
                  return item;
                });

              case 14:
                data.loading = false;

              case 15:
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
  return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: "Kewajiban",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_libs_ui_UIList__WEBPACK_IMPORTED_MODULE_10__["default"], {
    data: data.list,
    loading: data.loading,
    render: function render(list) {
      var item = list.item;
      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_libs_ui_UIListItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        onPress: function onPress() {
          navigation.navigate("KewajibanDetail", {
            item: item
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_14__["View"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_14__["Text"], {
        style: {
          fontSize: 15,
          fontWeight: "bold",
          color: "#555"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, item.nama_kewajiban), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_14__["Text"], {
        style: {
          fontSize: 14
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, "Rp ", item.nominal.toLocaleString(), " (", item.status, ")")), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_14__["View"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_14__["Text"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, item.tipe_pembayaran)));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_libs_nav_StackNav__WEBPACK_IMPORTED_MODULE_4__["default"])({
  Kewajiban: {
    screen: Kewajiban
  },
  KewajibanDetail: {
    screen: _KewajibanDetail__WEBPACK_IMPORTED_MODULE_15__["default"]
  }
}));

/***/ })

})
//# sourceMappingURL=index.js.b3de31384a63c4965902.hot-update.js.map