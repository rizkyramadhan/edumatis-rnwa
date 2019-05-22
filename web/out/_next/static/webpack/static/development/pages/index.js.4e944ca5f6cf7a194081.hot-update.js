webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/app/screens/admin/Kelas/KelasPicker.tsx":
/*!*******************************************************!*\
  !*** ./pages/app/screens/admin/Kelas/KelasPicker.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../libs/queries/crud/rawQuery */ "./pages/app/libs/queries/crud/rawQuery.ts");
/* harmony import */ var _libs_ui_UICol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../libs/ui/UICol */ "./pages/app/libs/ui/UICol.tsx");
/* harmony import */ var _libs_ui_UIField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../libs/ui/UIField */ "./pages/app/libs/ui/UIField.tsx");
/* harmony import */ var _libs_ui_UIFieldSelectNative__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../libs/ui/UIFieldSelectNative */ "./pages/app/libs/ui/UIFieldSelectNative.tsx");
/* harmony import */ var _libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../libs/ui/UIRow */ "./pages/app/libs/ui/UIRow.tsx");
/* harmony import */ var _libs_utils_GraphQL__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../libs/utils/GraphQL */ "./pages/app/libs/utils/GraphQL.ts");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/dist/index.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-native-web */ "./node_modules/react-native-web/dist/index.js");




var _jsxFileName = "/media/riz/data/Projects/edumatis/web/pages/app/screens/admin/Kelas/KelasPicker.tsx";









/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_10__["observer"])(function (_ref) {
  var form = _ref.form,
      renderMurid = _ref.renderMurid,
      renderKelas = _ref.renderKelas,
      renderKelasTitle = _ref.renderKelasTitle;
  var data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_10__["useObservable"])({
    expandKelas: [],
    kelas: [],
    kelasMurid: {}
  });
  Object(react__WEBPACK_IMPORTED_MODULE_11__["useEffect"])(function () {
    data.kelas = [];
    Object(_libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_4__["default"])("{\n        kelas {\n          id \n          nama_kelas\n        }\n      }").then(function (res) {
      data.kelas = res.kelas;
    });
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: 6,
    sizexs: 12,
    sizesm: 12,
    sizemd: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_libs_ui_UIField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "Berlaku untuk kelas:",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, data.kelas && data.kelas.map(function (k, index) {
    var allkelas = form.kelas || {};
    var kelas = allkelas[k.id];
    return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_12__["View"], {
      key: k.id,
      style: {
        borderBottomWidth: index + 1 === data.kelas.length ? 0 : 1,
        marginHorizontal: -12,
        padding: 5,
        paddingHorizontal: 12,
        borderBottomColor: "#ddd"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_12__["TouchableOpacity"], {
      onPress:
      /*#__PURE__*/
      Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var res, kelasMurid;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (data.kelasMurid[k.id]) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return Object(_libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_4__["default"])("{\n                                murid(where: {kelas_murids: {kelas_id: {_eq: ".concat(k.id, "}}}) {\n                                  id\n                                  nama_murid\n                                }\n                              }\n                              "));

              case 3:
                res = _context.sent;

                if (res && res.murid) {
                  kelasMurid = res.murid.map(function (m) {
                    return {
                      value: m.id,
                      label: m.nama_murid
                    };
                  });
                  data.kelasMurid[k.id] = [{
                    value: 0,
                    label: ""
                  }].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(kelasMurid));
                }

              case 5:
                if (kelas) {
                  data.expandKelas = [k.id];
                } else {
                  allkelas[k.id] = {
                    nominal: form.nominal,
                    murid: [{}]
                  };
                  data.expandKelas = [k.id];
                }

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_12__["Text"], {
      style: {
        fontSize: 17,
        height: 25
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, kelas ? "☑" : "☐", "\xA0", k.nama_kelas)), kelas && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_12__["View"], {
      style: {
        flexDirection: "row",
        marginLeft: 30,
        alignItems: "center",
        position: "absolute",
        right: 10
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, renderKelasTitle && renderKelasTitle(kelas, k), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_12__["TouchableOpacity"], {
      onPress: function onPress() {
        allkelas[k.id] = undefined;
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_12__["Text"], {
      style: {
        color: "red"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, " Hapus"))), kelas && data.expandKelas.indexOf(k.id) >= 0 && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_12__["View"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, renderKelas && renderKelas(kelas, k), kelas.murid.map(function (murid, midx) {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_8__["default"], {
        key: midx,
        style: {
          flexDirection: "row"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_5__["default"], {
        size: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_libs_ui_UIFieldSelectNative__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: "Murid",
        items: data.kelasMurid[k.id] || [],
        value: murid.id || 0,
        setValue: function setValue(value) {
          value = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(value);
          murid.id = value;
          var unique = Object(_libs_utils_GraphQL__WEBPACK_IMPORTED_MODULE_9__["getUnique"])(kelas.murid, "id").filter(function (m) {
            return m.id !== 0;
          });
          kelas.murid.splice(0, kelas.murid.length);
          unique.forEach(function (m) {
            kelas.murid.push(m);
          });
          kelas.murid.push({
            id: 0
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      })), renderMurid && renderMurid(murid, kelas, k));
    })));
  }))));
}));

/***/ })

})
//# sourceMappingURL=index.js.4e944ca5f6cf7a194081.hot-update.js.map