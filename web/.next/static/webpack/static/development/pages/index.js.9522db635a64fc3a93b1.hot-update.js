webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/app/screens/siswa/Home.tsx":
/*!******************************************!*\
  !*** ./pages/app/screens/siswa/Home.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Kewajiban_Kewajiban__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Kewajiban/Kewajiban */ "./pages/app/screens/siswa/Kewajiban/Kewajiban.tsx");
/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideBar */ "./pages/app/screens/siswa/SideBar.tsx");
/* harmony import */ var _libs_nav_SideNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libs/nav/SideNav */ "./pages/app/libs/nav/SideNav.tsx");



/* harmony default export */ __webpack_exports__["default"] = (Object(_libs_nav_SideNav__WEBPACK_IMPORTED_MODULE_2__["default"])({
  Kewajiban: {
    screen: _Kewajiban_Kewajiban__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
}, {
  contentComponent: _SideBar__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

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
        var result;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_2__["default"])("{\n        kewajiban(order_by: [{tipe_pembayaran: asc},{id: asc}, ]) {\n          id\n          nama_kewajiban\n          nominal\n          tipe_pembayaran\n        }\n      }\n      \n      ");

              case 2:
                result = _context.sent;
                data.list = result.kewajiban;
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
  return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Kewajiban",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
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
      lineNumber: 39
    },
    __self: this
  }, "+ Kewajiban Baru")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
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
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_11__["View"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
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
          lineNumber: 68
        },
        __self: this
      }, item.nama_kewajiban), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_11__["Text"], {
        style: {
          fontSize: 14
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Rp ", item.nominal.toLocaleString())), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_11__["View"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_11__["Text"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, item.tipe_pembayaran)));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
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

/***/ }),

/***/ "./pages/app/screens/siswa/Kewajiban/KewajibanDetail.tsx":
/*!***************************************************************!*\
  !*** ./pages/app/screens/siswa/Kewajiban/KewajibanDetail.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../libs/ui/UIBody */ "./pages/app/libs/ui/UIBody.tsx");
/* harmony import */ var _libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../libs/ui/UIContainer */ "./pages/app/libs/ui/UIContainer.tsx");
/* harmony import */ var _libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../libs/ui/UIHead */ "./pages/app/libs/ui/UIHead.tsx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/dist/index.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-native-web */ "./node_modules/react-native-web/dist/index.js");
var _jsxFileName = "/media/riz/data/Projects/edumatis/web/pages/app/screens/siswa/Kewajiban/KewajibanDetail.tsx";






/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__["observer"])(function (_ref) {
  var navigation = _ref.navigation;
  var data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__["useObservable"])({
    loading: true
  });
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Blank",
    onBack: function onBack() {},
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_0__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Halo ", data.loading)));
}));

/***/ }),

/***/ "./pages/app/screens/siswa/SideBar.tsx":
/*!*********************************************!*\
  !*** ./pages/app/screens/siswa/SideBar.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _libs_ui_UIImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/ui/UIImage */ "./pages/app/libs/ui/UIImage.tsx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/dist/index.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-native-web */ "./node_modules/react-native-web/dist/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config */ "./pages/app/config.ts");
/* harmony import */ var _stores_RootStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../stores/RootStore */ "./pages/app/stores/RootStore.ts");

var _jsxFileName = "/media/riz/data/Projects/edumatis/web/pages/app/screens/siswa/SideBar.tsx";






var Button = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["observer"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_4__["TouchableOpacity"], {
    onPress: props.onPress,
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.style, {
      flexDirection: "row",
      alignItems: "center",
      alignContent: "center"
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_libs_ui_UIImage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: {
      width: 20,
      padding: 10,
      height: 20
    },
    source: props.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    style: {
      color: _config__WEBPACK_IMPORTED_MODULE_5__["default"].color.mainText
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, props.text));
});
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var navigation = _ref.navigation;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_4__["View"], {
    style: s.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_4__["View"], {
    style: {
      alignItems: "center",
      justifyContent: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_libs_ui_UIImage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    source: __webpack_require__(/*! ../../imgs/logo.png */ "./pages/app/imgs/logo.png"),
    style: {
      width: "70%",
      paddingTop: 20,
      paddingBottom: 25
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Button, {
    text: "Kewajiban",
    onPress: function onPress() {
      navigation.replace("Kewajiban");
    },
    image: __webpack_require__(/*! ../../imgs/kewajiban.png */ "./pages/app/imgs/kewajiban.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Button, {
    text: "Pengumuman",
    onPress: function onPress() {
      navigation.replace("Pengumuman");
    },
    image: __webpack_require__(/*! ../../imgs/pengumuman.png */ "./pages/app/imgs/pengumuman.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Button, {
    text: "Kelas & Murid",
    onPress: function onPress() {
      navigation.replace("Kelas");
    },
    image: __webpack_require__(/*! ../../imgs/kelas.png */ "./pages/app/imgs/kelas.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Button, {
    text: "Logout",
    style: {
      marginTop: 20
    },
    image: __webpack_require__(/*! ../../imgs/logout.png */ "./pages/app/imgs/logout.png"),
    onPress: function onPress() {
      _stores_RootStore__WEBPACK_IMPORTED_MODULE_6__["RootStore"].session.logout();
      navigation.popToTop();
      navigation.replace("Login");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }));
});
var s = react_native_web__WEBPACK_IMPORTED_MODULE_4__["StyleSheet"].create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    backgroundColor: _config__WEBPACK_IMPORTED_MODULE_5__["default"].color.main
  }
});

/***/ })

})
//# sourceMappingURL=index.js.9522db635a64fc3a93b1.hot-update.js.map