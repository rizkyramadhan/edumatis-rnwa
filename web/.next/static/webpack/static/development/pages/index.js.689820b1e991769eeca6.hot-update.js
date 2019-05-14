webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/app/screens/siswa/Kewajiban/KewajibanDetail.tsx":
/*!***************************************************************!*\
  !*** ./pages/app/screens/siswa/Kewajiban/KewajibanDetail.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _libs_queries_crud_createRecord__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../libs/queries/crud/createRecord */ "./pages/app/libs/queries/crud/createRecord.ts");
/* harmony import */ var _libs_queries_user_getsetSession__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../libs/queries/user/getsetSession */ "./pages/app/libs/queries/user/getsetSession.ts");
/* harmony import */ var _libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../libs/ui/UIContainer */ "./pages/app/libs/ui/UIContainer.tsx");
/* harmony import */ var _libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../libs/ui/UIHead */ "./pages/app/libs/ui/UIHead.tsx");
/* harmony import */ var _libs_ui_UIWebView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../libs/ui/UIWebView */ "./pages/app/libs/ui/UIWebView.tsx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/dist/index.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-native-web */ "./node_modules/react-native-web/dist/index.js");
/* harmony import */ var _libs_queries_crud_updateRecord__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../libs/queries/crud/updateRecord */ "./pages/app/libs/queries/crud/updateRecord.ts");



var _jsxFileName = "/Volumes/Data/Projects/edumatis-rnwa/web/pages/app/screens/siswa/Kewajiban/KewajibanDetail.tsx";










/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__["observer"])(function (_ref) {
  var navigation = _ref.navigation;
  var data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__["useObservable"])({
    loading: true,
    form: navigation.getParam("item")
  });
  var transaksi = {};

  if (data.form.transaksi.length > 0) {
    transaksi = data.form.transaksi[0];
  }

  console.log(Object(mobx__WEBPACK_IMPORTED_MODULE_8__["toJS"])(transaksi.detail));
  Object(react__WEBPACK_IMPORTED_MODULE_10__["useEffect"])(function () {
    var req =
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var session, nominalBeda, res, params, myHeaders, response, json;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_libs_queries_user_getsetSession__WEBPACK_IMPORTED_MODULE_4__["getSession"])();

              case 2:
                session = _context.sent;
                nominalBeda = data.form.status === "Belum Lunas" && transaksi && transaksi.detail.amount !== data.form.nominal;

                if (!(!transaksi || nominalBeda)) {
                  _context.next = 25;
                  break;
                }

                if (transaksi) {
                  _context.next = 11;
                  break;
                }

                _context.next = 8;
                return Object(_libs_queries_crud_createRecord__WEBPACK_IMPORTED_MODULE_3__["default"])("transaksi", {
                  kewajiban_id: Object(mobx__WEBPACK_IMPORTED_MODULE_8__["toJS"])(data.form.id)
                });

              case 8:
                res = _context.sent;
                data.form.transaksi.push({
                  id: res
                });
                transaksi = data.form.transaksi[0];

              case 11:
                if (nominalBeda) {
                  data.form.transaksi[0].detail = null;
                }

                params = {
                  external_id: transaksi.id,
                  payer_email: session.murid.email || "j@edumatis.id",
                  description: data.form.nama_kewajiban,
                  amount: data.form.nominal
                };
                myHeaders = new Headers();
                myHeaders.append("pragma", "no-cache");
                myHeaders.append("cache-control", "no-cache");
                _context.next = 18;
                return fetch("https://backend.cap.edumatis.id/invoice", {
                  method: "POST",
                  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(params),
                  headers: myHeaders
                });

              case 18:
                response = _context.sent;
                _context.next = 21;
                return response.json();

              case 21:
                json = _context.sent;
                _context.next = 24;
                return Object(_libs_queries_crud_updateRecord__WEBPACK_IMPORTED_MODULE_12__["default"])("transaksi", {
                  id: transaksi.id,
                  detail: json
                });

              case 24:
                data.form.transaksi[0].detail = json;

              case 25:
                data.loading = false;

              case 26:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function req() {
        return _ref2.apply(this, arguments);
      };
    }();

    req();
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      backgroundColor: "#F5FAFD"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: data.form.id ? "#".concat(data.form.id, ": ").concat(data.form.nama_kewajiban, " (").concat(data.form.status, ")") : "KewajibanBaru",
    onBack: function onBack() {
      navigation.goBack();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_11__["View"], {
    style: {
      flex: 1,
      padding: 10,
      alignItems: "center",
      justifyContent: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_11__["ActivityIndicator"], {
    size: "large",
    style: {
      position: "absolute"
    },
    color: "#999",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_11__["Text"], {
    style: {
      marginTop: 70
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, !!transaksi.detail ? "Menampilkan Pembayaran..." : "Membuat Invoice..."), transaksi.detail && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIWebView__WEBPACK_IMPORTED_MODULE_7__["default"], {
    style: {
      flex: 1,
      position: "absolute",
      width: "100%",
      height: "100%",
      zIndex: 99
    },
    source: {
      html: "<iframe width=\"100%\" height=\"100%\" src=\"".concat(transaksi.detail.invoice_url, "\"  frameborder=\"0\"></iframe>")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  })));
}));

/***/ })

})
//# sourceMappingURL=index.js.689820b1e991769eeca6.hot-update.js.map