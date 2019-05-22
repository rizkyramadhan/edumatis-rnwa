webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/app/screens/admin/Kewajiban/KewajibanDetail.tsx":
/*!***************************************************************!*\
  !*** ./pages/app/screens/admin/Kewajiban/KewajibanDetail.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _libs_queries_crud_createRecord__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../libs/queries/crud/createRecord */ "./pages/app/libs/queries/crud/createRecord.ts");
/* harmony import */ var _libs_queries_crud_deleteRecord__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../libs/queries/crud/deleteRecord */ "./pages/app/libs/queries/crud/deleteRecord.ts");
/* harmony import */ var _libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../libs/queries/crud/rawQuery */ "./pages/app/libs/queries/crud/rawQuery.ts");
/* harmony import */ var _libs_queries_crud_updateRecord__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../libs/queries/crud/updateRecord */ "./pages/app/libs/queries/crud/updateRecord.ts");
/* harmony import */ var _libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../libs/ui/UIBody */ "./pages/app/libs/ui/UIBody.tsx");
/* harmony import */ var _libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../libs/ui/UIButton */ "./pages/app/libs/ui/UIButton.tsx");
/* harmony import */ var _libs_ui_UICol__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../libs/ui/UICol */ "./pages/app/libs/ui/UICol.tsx");
/* harmony import */ var _libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../libs/ui/UIContainer */ "./pages/app/libs/ui/UIContainer.tsx");
/* harmony import */ var _libs_ui_UIFieldSelectNative__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../libs/ui/UIFieldSelectNative */ "./pages/app/libs/ui/UIFieldSelectNative.tsx");
/* harmony import */ var _libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../libs/ui/UIFieldText */ "./pages/app/libs/ui/UIFieldText.tsx");
/* harmony import */ var _libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../libs/ui/UIHead */ "./pages/app/libs/ui/UIHead.tsx");
/* harmony import */ var _libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../libs/ui/UIRow */ "./pages/app/libs/ui/UIRow.tsx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/dist/index.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-native-web */ "./node_modules/react-native-web/dist/index.js");
/* harmony import */ var _Kelas_KelasPicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../Kelas/KelasPicker */ "./pages/app/screens/admin/Kelas/KelasPicker.tsx");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! lodash.get */ "./node_modules/lodash.get/index.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_19__);



var _jsxFileName = "/media/riz/data/Projects/edumatis/web/pages/app/screens/admin/Kewajiban/KewajibanDetail.tsx";

















/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_15__["observer"])(function (_ref) {
  var navigation = _ref.navigation;
  var data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_15__["useObservable"])({
    form: navigation.getParam("item")
  });
  var count = lodash_get__WEBPACK_IMPORTED_MODULE_19___default()(data, "form.transaksi_aggregate.aggregate.count");
  Object(react__WEBPACK_IMPORTED_MODULE_16__["useEffect"])(function () {
    if (data.form.id) {
      Object(_libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_5__["default"])("\n      {\n        kewajiban(where: {id: {_eq: ".concat(data.form.id, "}}) {\n          kelas\n          batas_pembayaran\n          id\n          nominal\n          nama_kewajiban\n          status\n          tgl_batas_pembayaran_bulan\n          tipe_pembayaran\n          transaksi_aggregate {\n            aggregate {\n              count\n            }\n          }\n        }\n      }\n    ")).then(function (res) {
        data.form = res.kewajiban[0];
      });
    }
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_13__["default"], {
    navigation: navigation,
    title: " Kewajiban " + (data.form.id ? "#".concat(data.form.id, ": ").concat(data.form.nama_kewajiban) : "Baru"),
    onBack: function onBack() {
      navigation.goBack();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onPress:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!data.form.id) {
                _context.next = 5;
                break;
              }

              _context.next = 3;
              return Object(_libs_queries_crud_updateRecord__WEBPACK_IMPORTED_MODULE_6__["default"])("kewajiban", data.form);

            case 3:
              _context.next = 7;
              break;

            case 5:
              _context.next = 7;
              return Object(_libs_queries_crud_createRecord__WEBPACK_IMPORTED_MODULE_3__["default"])("kewajiban", data.form);

            case 7:
              navigation.goBack();

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Simpan"), count === 0 && react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      backgroundColor: "red",
      marginLeft: -5
    },
    onPress:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(react_native_web__WEBPACK_IMPORTED_MODULE_17__["Platform"].OS === "web")) {
                _context3.next = 8;
                break;
              }

              if (!confirm("Apakah anda yakin ingin menghapus kewajiban ini ?")) {
                _context3.next = 6;
                break;
              }

              if (!data.form.id) {
                _context3.next = 5;
                break;
              }

              _context3.next = 5;
              return Object(_libs_queries_crud_deleteRecord__WEBPACK_IMPORTED_MODULE_4__["default"])("kewajiban", {
                id: data.form.id
              });

            case 5:
              navigation.goBack();

            case 6:
              _context3.next = 9;
              break;

            case 8:
              react_native_web__WEBPACK_IMPORTED_MODULE_17__["Alert"].alert("Menghapus Kewajiban", "Apakah Anda yakin ingin menghapus kewajiban ini ?", [{
                text: "NO",
                style: "cancel",
                onPress: function onPress() {}
              }, {
                text: "YES",
                onPress: function () {
                  var _onPress = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
                  /*#__PURE__*/
                  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
                    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            if (!data.form.id) {
                              _context2.next = 3;
                              break;
                            }

                            _context2.next = 3;
                            return Object(_libs_queries_crud_deleteRecord__WEBPACK_IMPORTED_MODULE_4__["default"])("kewajiban", {
                              id: data.form.id
                            });

                          case 3:
                            navigation.goBack();

                          case 4:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  function onPress() {
                    return _onPress.apply(this, arguments);
                  }

                  return onPress;
                }()
              }]);

            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Hapus"))), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_14__["default"], {
    style: {
      paddingBottom: 25
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, count === 0 ? react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_17__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "Transaksi untuk kewajiban ini masih kosong.") : react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_17__["TouchableOpacity"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_17__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "Terdapat"), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_17__["Text"], {
    style: {
      marginHorizontal: 5,
      textDecorationLine: "underline"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, count, " transaksi"), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_17__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, " untuk kewajiban ini.")))), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_12__["default"], {
    label: "Nama Kewajiban",
    setValue: function setValue(value) {
      data.form.nama_kewajiban = value;
    },
    value: data.form.nama_kewajiban,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_9__["default"], {
    size: 4,
    sizesm: 6,
    sizexs: 6,
    sizemd: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_12__["default"], {
    label: "Nominal",
    setValue: function setValue(value) {
      data.form.nominal = value;
    },
    value: data.form.nominal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_9__["default"], {
    size: 4,
    sizesm: 6,
    sizexs: 6,
    sizemd: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UIFieldSelectNative__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: "Status Kewajiban",
    items: ["aktif", "non-aktif"],
    setValue: function setValue(value) {
      data.form.status = value;
    },
    value: data.form.status,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_9__["default"], {
    size: 4,
    sizesm: 6,
    sizexs: 6,
    sizemd: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UIFieldSelectNative__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: "Tipe Pembayaran",
    items: ["Bulanan", "Insidentil"],
    setValue: function setValue(value) {
      data.form.tipe_pembayaran = value;
    },
    value: data.form.tipe_pembayaran,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_Kelas_KelasPicker__WEBPACK_IMPORTED_MODULE_18__["default"], {
    form: data.form,
    renderKelasTitle: function renderKelasTitle(kelas) {
      return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_17__["Text"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, "Rp ", _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(kelas.nominal).toLocaleString(), " ");
    },
    renderKelas: function renderKelas(kelas) {
      console.log(kelas);
      return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_17__["View"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_12__["default"], {
        label: "Nominal untuk murid kelas ".concat(kelas.nama_kelas),
        value: kelas.nominal,
        setValue: function setValue(value) {
          kelas.nominal = value;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_17__["Text"], {
        style: {
          padding: 10,
          paddingLeft: 15,
          color: "#333"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, "Khusus untuk murid ini, di set sesuai nominal tertera:"));
    },
    renderMurid: function renderMurid(murid, kelas) {
      return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_9__["default"], {
        size: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_12__["default"], {
        label: "Nominal",
        value: murid.nominal || kelas.nominal,
        setValue: function setValue(value) {
          murid.nominal = value;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  })));
}));

/***/ })

})
//# sourceMappingURL=index.js.2a6982c558a38200b9f0.hot-update.js.map