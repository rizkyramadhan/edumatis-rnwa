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
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _libs_queries_crud_createRecord__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../libs/queries/crud/createRecord */ "./pages/app/libs/queries/crud/createRecord.ts");
/* harmony import */ var _libs_queries_crud_updateRecord__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../libs/queries/crud/updateRecord */ "./pages/app/libs/queries/crud/updateRecord.ts");
/* harmony import */ var _libs_queries_user_getsetSession__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../libs/queries/user/getsetSession */ "./pages/app/libs/queries/user/getsetSession.ts");
/* harmony import */ var _libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../libs/ui/UIContainer */ "./pages/app/libs/ui/UIContainer.tsx");
/* harmony import */ var _libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../libs/ui/UIHead */ "./pages/app/libs/ui/UIHead.tsx");
/* harmony import */ var _libs_ui_UIWebView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../libs/ui/UIWebView */ "./pages/app/libs/ui/UIWebView.tsx");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/dist/index.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-native-web */ "./node_modules/react-native-web/dist/index.js");




var _jsxFileName = "/home/hendikmdi/Documents/edumatis-rnwa/web/pages/app/screens/siswa/Kewajiban/KewajibanDetail.tsx";











/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_12__["observer"])(function (_ref) {
  var navigation = _ref.navigation;
  var data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_12__["useObservable"])({
    error: "",
    form: navigation.getParam("item")
  });
  var transaksi = {};

  if (data.form.transaksi.length > 0) {
    transaksi = data.form.transaksi[0];
  }

  Object(react__WEBPACK_IMPORTED_MODULE_13__["useEffect"])(function () {
    var req =
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var session, nominalBeda, expired, res, params, myHeaders, response, _json, json;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_libs_queries_user_getsetSession__WEBPACK_IMPORTED_MODULE_6__["getSession"])();

              case 2:
                session = _context.sent;
                nominalBeda = data.form.status === "Belum Lunas" && transaksi && transaksi.detail && _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(transaksi.detail.amount) !== _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(data.form.nominal);
                expired = data.form.status === "Belum Lunas" && transaksi && transaksi.detail && dayjs__WEBPACK_IMPORTED_MODULE_10___default()(transaksi.detail.expiry_date).isBefore(dayjs__WEBPACK_IMPORTED_MODULE_10___default()());

                if (!(!transaksi || !transaksi.detail || nominalBeda || expired)) {
                  _context.next = 34;
                  break;
                }

                if (!(!transaksi || !transaksi.detail)) {
                  _context.next = 13;
                  break;
                }

                _context.next = 9;
                return Object(_libs_queries_crud_createRecord__WEBPACK_IMPORTED_MODULE_4__["default"])("transaksi", {
                  kewajiban_id: Object(mobx__WEBPACK_IMPORTED_MODULE_11__["toJS"])(data.form.id)
                });

              case 9:
                res = _context.sent;
                data.form.transaksi.push({
                  id: res
                });
                transaksi = data.form.transaksi[0];
                transaksi.id = res;

              case 13:
                if (nominalBeda) {
                  data.form.transaksi[0].detail = null;
                }

                params = {
                  external_id: transaksi.id,
                  payer_email: session.murid.email || "j@edumatis.id",
                  description: "".concat(session.sekolah.nama, " - ").concat(session.kelas.nama, " - ").concat(session.murid.nama_murid, " - ").concat(data.form.nama_kewajiban),
                  amount: data.form.nominal
                };
                console.log(params.description);
                myHeaders = new Headers();
                myHeaders.append("pragma", "no-cache");
                myHeaders.append("cache-control", "no-cache");
                _context.next = 21;
                return fetch("https://backend.cap.edumatis.id/invoice", {
                  method: "POST",
                  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(params),
                  headers: myHeaders
                });

              case 21:
                response = _context.sent;

                if (!(response.status !== 200)) {
                  _context.next = 28;
                  break;
                }

                _context.next = 25;
                return response.json();

              case 25:
                _json = _context.sent;
                data.error = _json.message;
                return _context.abrupt("return");

              case 28:
                _context.next = 30;
                return response.json();

              case 30:
                json = _context.sent;
                _context.next = 33;
                return Object(_libs_queries_crud_updateRecord__WEBPACK_IMPORTED_MODULE_5__["default"])("transaksi", {
                  id: transaksi.id,
                  nominal: data.form.nominal,
                  detail: json
                });

              case 33:
                data.form.transaksi[0].detail = json;

              case 34:
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
  return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    style: {
      backgroundColor: "#F5FAFD"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_8__["default"], {
    navigation: navigation,
    title: "".concat(data.form.nama_kewajiban, " (").concat(data.form.status, ")"),
    onBack: function onBack() {
      navigation.goBack();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_14__["View"], {
    style: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, data.error === "" && !transaksi.detail && react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_14__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "Membuat Invoice..."), data.error != "" && react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_14__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, data.error), data.error === "" && transaksi.detail && !transaksi.paid && react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_14__["View"], {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_libs_ui_UIWebView__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      flex: 1
    },
    source: {
      html: "\n            <!DOCTYPE html>\n            <html>\n                <head>\n                <meta name=\"viewport\" content=\" initial-scale=1\">\n                </head> \n                <body>\n                <center style=\"margin:100px\">Memuat<br/> Instruksi Pembayaran...</center>\n                <iframe \n                style=\"position:absolute;left:0;right:0;bottom:0;top:0;\"\n                width=\"100%\" height=\"100%\" src=\"".concat(transaksi.detail.invoice_url, "\"  frameborder=\"0\"></iframe></div> \n            </body>\n            </html>")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }))));
}));

/***/ })

})
//# sourceMappingURL=index.js.2030a345883f28a15c51.hot-update.js.map