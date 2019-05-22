webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/app/screens/admin/Transaksi/Transaksi.tsx":
/*!*********************************************************!*\
  !*** ./pages/app/screens/admin/Transaksi/Transaksi.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../libs/queries/crud/rawQuery */ "./pages/app/libs/queries/crud/rawQuery.ts");
/* harmony import */ var _libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../libs/ui/UIBody */ "./pages/app/libs/ui/UIBody.tsx");
/* harmony import */ var _libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../libs/ui/UIButton */ "./pages/app/libs/ui/UIButton.tsx");
/* harmony import */ var _libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../libs/ui/UIContainer */ "./pages/app/libs/ui/UIContainer.tsx");
/* harmony import */ var _libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../libs/ui/UIHead */ "./pages/app/libs/ui/UIHead.tsx");
/* harmony import */ var _libs_ui_UIList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../libs/ui/UIList */ "./pages/app/libs/ui/UIList.tsx");
/* harmony import */ var _libs_ui_UIListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../libs/ui/UIListItem */ "./pages/app/libs/ui/UIListItem.tsx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/dist/index.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-native-web */ "./node_modules/react-native-web/dist/index.js");
/* harmony import */ var _libs_nav_StackNav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../libs/nav/StackNav */ "./pages/app/libs/nav/StackNav.tsx");
/* harmony import */ var _TransaksiDetail__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./TransaksiDetail */ "./pages/app/screens/admin/Transaksi/TransaksiDetail.tsx");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ "./node_modules/dayjs/plugin/relativeTime.js");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lodash.get */ "./node_modules/lodash.get/index.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_16__);



var _jsxFileName = "/Volumes/Data/Projects/edumatis-rnwa/web/pages/app/screens/admin/Transaksi/Transaksi.tsx";













var dayjs = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");



dayjs.extend(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_15___default.a);
var Transaksi = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_10__["observer"])(function (_ref) {
  var navigation = _ref.navigation;
  var data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_10__["useObservable"])({
    list: [],
    loading: true
  });
  Object(react__WEBPACK_IMPORTED_MODULE_11__["useEffect"])(function () {
    var fetch =
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var result;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_3__["default"])("{\n        transaksi(order_by: {tstamp: asc}) {\n          id\n          status\n          tstamp\n          amount: detail(path:\"amount\")\n          detail(path:\"status\")\n          paid(path:\"status\")\n          murid {\n            id\n            nama_murid\n            nsa\n            kelas_murids {\n              kelas {\n                nama_kelas\n              }\n            }\n          }\n          kewajiban {\n            nama_kewajiban\n          }\n        }\n      }\n      ");

              case 2:
                result = _context.sent;
                data.list = result.transaksi;
                data.loading = false;

              case 5:
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
  return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_7__["default"], {
    navigation: navigation,
    title: "Transaksi",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: "small",
    onPress: function onPress() {
      navigation.navigate("TransaksiDetail", {
        item: {
          nominal: 100000,
          kelas: {}
        }
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "+ Transaksi Baru")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_libs_ui_UIList__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: data.list,
    loading: data.loading,
    render: function render(list) {
      var item = list.item;
      var tgl = dayjs(item.tstamp);
      var fromday = tgl.fromNow();
      var kelas = lodash_get__WEBPACK_IMPORTED_MODULE_16___default()(item, "murid.kelas_murids[0].kelas.nama_kelas") || "Semua Kelas";

      var nominal = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(item.amount || item.nominal);

      var status = (item.paid || item.detail || item.status).toLowerCase();
      if (status === "paid") status = "success";
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_libs_ui_UIListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onPress: function onPress() {
          navigation.navigate("TransaksiDetail", {
            item: item
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_12__["View"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_12__["Text"], {
        style: {
          fontSize: 15,
          fontWeight: "bold",
          color: "#555"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "#", item.id, " ", item.kewajiban.nama_kewajiban, " - Rp", " ", (nominal || 0).toLocaleString(), " ", "(", status, ")"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_12__["Text"], {
        style: {
          fontSize: 14
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, item.murid.nama_murid, " - ", kelas)), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_12__["View"], {
        style: {
          alignItems: "flex-end"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_12__["Text"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, fromday), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_12__["Text"], {
        style: {
          fontSize: 12
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, tgl.format("DD MMM YYYY - hh.mm"))));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_libs_nav_StackNav__WEBPACK_IMPORTED_MODULE_13__["default"])({
  Transaksi: {
    screen: Transaksi
  },
  TransaksiDetail: {
    screen: _TransaksiDetail__WEBPACK_IMPORTED_MODULE_14__["default"]
  }
}));

/***/ })

})
//# sourceMappingURL=index.js.463900479eb8c9f870b1.hot-update.js.map