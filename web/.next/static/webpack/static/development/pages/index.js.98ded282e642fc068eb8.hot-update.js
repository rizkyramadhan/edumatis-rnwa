webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/app/screens/admin/Kelas/MuridList.tsx":
/*!*****************************************************!*\
  !*** ./pages/app/screens/admin/Kelas/MuridList.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../libs/ui/UIButton */ "./pages/app/libs/ui/UIButton.tsx");
/* harmony import */ var _libs_ui_UIImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../libs/ui/UIImage */ "./pages/app/libs/ui/UIImage.tsx");
/* harmony import */ var _libs_ui_UIList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../libs/ui/UIList */ "./pages/app/libs/ui/UIList.tsx");
/* harmony import */ var _libs_ui_UIListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../libs/ui/UIListItem */ "./pages/app/libs/ui/UIListItem.tsx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/dist/index.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-native-web */ "./node_modules/react-native-web/dist/index.js");
var _jsxFileName = "/media/riz/data/Projects/edumatis/web/pages/app/screens/admin/Kelas/MuridList.tsx";







/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__["observer"])(function (data) {
  if (!data.list) return null;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_6__["View"], {
    style: {
      paddingHorizontal: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_6__["View"], {
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
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    style: {
      color: "#999"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Total Murid: ", data.list.length, " "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_6__["View"], {
    style: {
      flexDirection: "row",
      alignItems: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_0__["default"], {
    size: "small",
    fill: "outline",
    style: {
      margin: 0,
      marginLeft: 20
    },
    labelStyle: {
      flexDirection: "row",
      alignItems: "center",
      paddingTop: 2,
      paddingBottom: 2,
      paddingHorizontal: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_libs_ui_UIImage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    source: __webpack_require__(/*! ../../../imgs/share.png */ "./pages/app/imgs/share.png"),
    style: {
      width: 12,
      height: 12,
      marginLeft: 8
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), "Export CSV"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_0__["default"], {
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
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_libs_ui_UIImage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    source: __webpack_require__(/*! ../../../imgs/plus.png */ "./pages/app/imgs/plus.png"),
    style: {
      width: 12,
      height: 12,
      marginLeft: 8
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), "Tambah Siswa"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_libs_ui_UIList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: data.list,
    loading: data.loading,
    render: function render(list) {
      var item = list.item;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_libs_ui_UIListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onPress: function onPress() {
          data.navigation.navigate("MuridDetail", {
            item: item,
            kelas: data.kelas
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_6__["View"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_6__["Text"], {
        style: {
          fontSize: 16
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, item.nama_murid), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_6__["Text"], {
        style: {
          fontSize: 13
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, item.is_active === "y" ? "Aktif" : "Non-Aktif", item.data && "&bull; Data diri tersedia")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_6__["View"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_6__["Text"], {
        style: {
          fontSize: 12,
          color: "#999",
          textAlign: "right"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "NSA: ", item.nsa), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_6__["Text"], {
        style: {
          fontSize: 12,
          color: "#999",
          textAlign: "right"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "NISN: ", item.nisn)));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }));
}));

/***/ })

})
//# sourceMappingURL=index.js.98ded282e642fc068eb8.hot-update.js.map