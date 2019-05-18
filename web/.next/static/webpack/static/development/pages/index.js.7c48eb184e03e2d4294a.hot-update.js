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



var _jsxFileName = "/var/www/edumatis/edumatis-rnwa/web/pages/app/screens/admin/Kewajiban/KewajibanDetail.tsx";
















/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_15__["observer"])(function (_ref) {
  var navigation = _ref.navigation;
  var data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_15__["useObservable"])({
    form: navigation.getParam("item")
  });
  Object(react__WEBPACK_IMPORTED_MODULE_16__["useEffect"])(function () {
    if (data.form.id) {
      Object(_libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_5__["default"])("\n      {\n        kewajiban(where: {id: {_eq: ".concat(data.form.id, "}}) {\n          kelas\n          batas_pembayaran\n          id\n          nominal\n          nama_kewajiban\n          status\n          tgl_batas_pembayaran_bulan\n          tipe_pembayaran\n        }\n      }\n    ")).then(function (res) {
        data.form = res.kewajiban[0];
      });
    }
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
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
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
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
      lineNumber: 58
    },
    __self: this
  }, "Simpan"), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
              if (Platform.OS === "WEB") {
                confirm("Apakah anda yakin ingin menghapus kewajiban ini ?");
              } else {
                react_native_web__WEBPACK_IMPORTED_MODULE_17__["Alert"].alert('Menghapus Kewajiban', 'Apakah Anda yakin ingin menghapus kewajiban ini ?', [{
                  text: 'NO',
                  style: 'cancel',
                  onPress: function onPress() {}
                }, {
                  text: 'YES',
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
              }

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Hapus"))), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_12__["default"], {
    label: "Nama Kewajiban",
    setValue: function setValue(value) {
      data.form.nama_kewajiban = value;
    },
    value: data.form.nama_kewajiban,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_9__["default"], {
    size: 4,
    sizesm: 6,
    sizexs: 6,
    sizemd: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
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
      lineNumber: 112
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_9__["default"], {
    size: 4,
    sizesm: 6,
    sizexs: 6,
    sizemd: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
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
      lineNumber: 121
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_Kelas_KelasPicker__WEBPACK_IMPORTED_MODULE_18__["default"], {
    form: data.form,
    renderKelasTitle: function renderKelasTitle(kelas) {
      return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_17__["Text"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "Rp ", _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(kelas.nominal).toLocaleString(), " ");
    },
    renderKelas: function renderKelas(kelas) {
      return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_17__["View"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_12__["default"], {
        label: "Nominal untuk semua murid kelas ini",
        value: kelas.nominal,
        setValue: function setValue(value) {
          kelas.nominal = value;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
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
          lineNumber: 146
        },
        __self: this
      }, "Khusus untuk murid ini, di set sesuai nominal tertera:"));
    },
    renderMurid: function renderMurid(murid, kelas) {
      return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_9__["default"], {
        size: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
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
          lineNumber: 155
        },
        __self: this
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  })));
}));

/***/ })

})
//# sourceMappingURL=index.js.7c48eb184e03e2d4294a.hot-update.js.map