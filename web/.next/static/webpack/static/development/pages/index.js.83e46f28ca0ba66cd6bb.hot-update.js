webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/app/screens/admin/Kelas/MuridList.tsx":
/*!*****************************************************!*\
  !*** ./pages/app/screens/admin/Kelas/MuridList.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../libs/ui/UIButton */ "./pages/app/libs/ui/UIButton.tsx");
/* harmony import */ var _libs_ui_UIImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../libs/ui/UIImage */ "./pages/app/libs/ui/UIImage.tsx");
/* harmony import */ var _libs_ui_UIList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../libs/ui/UIList */ "./pages/app/libs/ui/UIList.tsx");
/* harmony import */ var _libs_ui_UIListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../libs/ui/UIListItem */ "./pages/app/libs/ui/UIListItem.tsx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/dist/index.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-native-web */ "./node_modules/react-native-web/dist/index.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");

var _jsxFileName = "/Volumes/Data/Projects/edumatis-rnwa/web/pages/app/screens/admin/Kelas/MuridList.tsx";








/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__["observer"])(function (data) {
  var meta = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__["useObservable"])({
    checked: []
  });
  if (!data.list) return null;
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_7__["View"], {
    style: {
      paddingHorizontal: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_7__["View"], {
    style: {
      borderBottomColor: "#ddd",
      borderBottomWidth: 2,
      flexDirection: "row",
      alignItems: "center",
      padding: 10,
      justifyContent: "space-between"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    style: {
      color: "#999"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Total Murid: ", data.list.length, meta.checked.length > 0 && " \u2022 Murid Terpilih: ".concat(meta.checked.length)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_7__["View"], {
    style: {
      flexDirection: "row",
      alignItems: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  },  false && false, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: "small",
    fill: "outline",
    style: {
      margin: 0,
      marginLeft: 8
    },
    labelStyle: {
      flexDirection: "row",
      alignItems: "center",
      paddingTop: 2,
      paddingBottom: 2,
      paddingHorizontal: 0
    },
    onPress: function onPress() {
      var hasDetail = true;
      var list = Object(mobx__WEBPACK_IMPORTED_MODULE_8__["toJS"])(data.list);
      list.forEach(function (item) {
        if (!item.detail || !item.detail.nik) {
          hasDetail = false;
        }
      });
      var header = [];
      var finalList = [];

      if (hasDetail) {
        list.forEach(function (item) {
          if (item.detail && item.detail.nik) {
            if (header.length === 0) {
              for (var _i in item.detail) {
                header.push(_i);
              }

              finalList.push(header);
            }

            var newitem = [];

            for (var _i2 in item.detail) {
              newitem.push(item[_i2]);
            }

            finalList.push(newitem);
          }
        });
      } else {
        list.forEach(function (item) {
          if (header.length === 0) {
            header.push("nisn");
            header.push("nsa");
            header.push("nama_lengkap");
            header.push("tgl_lahir");
            finalList.push(header);
          }

          var newitem = [];
          newitem.push(item.nisn);
          newitem.push(item.nsa);
          newitem.push(item.nama_murid);
          newitem.push(item.tgl_lahir);
          finalList.push(newitem);
        });
      }

      var finalVal = "";

      for (var i = 0; i < finalList.length; i++) {
        var value = finalList[i];

        for (var j = 0; j < value.length; j++) {
          var innerValue = value[j] === null ? "" : value[j].toString();
          var result = innerValue.replace(/"/g, '""');
          if (result.search(/("|,|\n)/g) >= 0) result = '"' + result + '"';
          if (j > 0) finalVal += ",";
          finalVal += result;
        }

        finalVal += "\n";
      }

      var pom = document.createElement("a");
      var csvContent = finalVal; //here we load our csv data

      var blob = new Blob([csvContent], {
        type: "text/csv;charset=utf-8;"
      });
      var url = URL.createObjectURL(blob);
      pom.href = url;
      pom.setAttribute("download", "foo.csv");
      pom.click();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_libs_ui_UIImage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    source: __webpack_require__(/*! ../../../imgs/share.png */ "./pages/app/imgs/share.png"),
    style: {
      width: 12,
      height: 12,
      marginLeft: 8
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }), "Export CSV"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: "small",
    style: {
      margin: 0,
      marginLeft: 8
    },
    labelStyle: {
      flexDirection: "row",
      alignItems: "center",
      paddingTop: 2,
      paddingBottom: 2,
      paddingHorizontal: 0
    },
    onPress: function onPress() {
      data.navigation.navigate("MuridDetail", {
        item: {},
        kelas: data.kelas
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_libs_ui_UIImage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    source: __webpack_require__(/*! ../../../imgs/plus.png */ "./pages/app/imgs/plus.png"),
    style: {
      width: 12,
      height: 12,
      marginLeft: 8
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }), "Tambah Siswa"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_libs_ui_UIList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: data.list,
    extraData: meta.checked.length,
    loading: data.loading,
    render: function render(list) {
      var item = list.item;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_7__["View"], {
        style: {
          flexDirection: "row",
          alignItems: "center",
          flex: 1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_7__["TouchableOpacity"], {
        style: {
          height: 60,
          paddingLeft: 10,
          paddingRight: 3,
          borderBottomColor: "#ccc",
          borderBottomWidth: 1,
          alignItems: "center",
          justifyContent: "center"
        },
        onPress: function onPress() {
          var idx = meta.checked.indexOf(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(item.id));

          if (idx >= 0) {
            meta.checked.splice(idx, 1);
          } else {
            meta.checked.push(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(item.id));
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_7__["Text"], {
        style: {
          fontSize: 20
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, meta.checked.indexOf(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(item.id)) >= 0 ? "☑" : "☐")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_libs_ui_UIListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
        style: {
          height: 60,
          flex: 1
        },
        onPress: function onPress() {
          data.navigation.navigate("MuridDetail", {
            item: item,
            kelas: data.kelas
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_7__["View"], {
        style: {
          flexDirection: "row",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_7__["Text"], {
        style: {
          paddingRight: 10,
          fontSize: 17,
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, list.index + 1), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_7__["View"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_7__["Text"], {
        style: {
          fontSize: 16
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, item.nama_murid), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_7__["View"], {
        style: {
          flexDirection: "row",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_7__["Text"], {
        style: {
          fontSize: 13
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, item.is_active === "y" ? "Aktif" : "Non-Aktif", "\xA0 \u2022 \xA0"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_7__["Text"], {
        style: {
          fontSize: 13,
          color: !item.data ? "#ccc" : "green"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, item.data ? "Data diri tersedia" : "Tanpa data diri")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_7__["View"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_7__["Text"], {
        style: {
          fontSize: 12,
          color: "#999",
          textAlign: "right"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, "NSA: ", item.nsa), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_7__["Text"], {
        style: {
          fontSize: 12,
          color: "#999",
          textAlign: "right"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }, "NISN: ", item.nisn))));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }));
}));

/***/ })

})
//# sourceMappingURL=index.js.83e46f28ca0ba66cd6bb.hot-update.js.map