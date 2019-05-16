webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/app/screens/admin/Kelas/MuridDetail.tsx":
/*!*******************************************************!*\
  !*** ./pages/app/screens/admin/Kelas/MuridDetail.tsx ***!
  \*******************************************************/
/*! exports provided: saveUser, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveUser", function() { return saveUser; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _libs_nav_StackNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../libs/nav/StackNav */ "./pages/app/libs/nav/StackNav.tsx");
/* harmony import */ var _libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../libs/ui/UIBody */ "./pages/app/libs/ui/UIBody.tsx");
/* harmony import */ var _libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../libs/ui/UIButton */ "./pages/app/libs/ui/UIButton.tsx");
/* harmony import */ var _libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../libs/ui/UIContainer */ "./pages/app/libs/ui/UIContainer.tsx");
/* harmony import */ var _libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../libs/ui/UIFieldText */ "./pages/app/libs/ui/UIFieldText.tsx");
/* harmony import */ var _libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../libs/ui/UIHead */ "./pages/app/libs/ui/UIHead.tsx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/dist/index.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-native-web */ "./node_modules/react-native-web/dist/index.js");
/* harmony import */ var _MuridDetailProfil__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./MuridDetailProfil */ "./pages/app/screens/admin/Kelas/MuridDetailProfil.tsx");
/* harmony import */ var _MuridDetailSide__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./MuridDetailSide */ "./pages/app/screens/admin/Kelas/MuridDetailSide.tsx");
/* harmony import */ var _libs_queries_crud_updateRecord__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../libs/queries/crud/updateRecord */ "./pages/app/libs/queries/crud/updateRecord.ts");
/* harmony import */ var _libs_queries_crud_createRecord__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../libs/queries/crud/createRecord */ "./pages/app/libs/queries/crud/createRecord.ts");
/* harmony import */ var _libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../libs/ui/UIRow */ "./pages/app/libs/ui/UIRow.tsx");
/* harmony import */ var _libs_ui_UICol__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../libs/ui/UICol */ "./pages/app/libs/ui/UICol.tsx");
/* harmony import */ var _libs_ui_UIFieldSelectNative__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../libs/ui/UIFieldSelectNative */ "./pages/app/libs/ui/UIFieldSelectNative.tsx");
/* harmony import */ var _libs_queries_user_hashPassword__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../libs/queries/user/hashPassword */ "./pages/app/libs/queries/user/hashPassword.ts");



var _jsxFileName = "/Volumes/Data/Projects/edumatis-rnwa/web/pages/app/screens/admin/Kelas/MuridDetail.tsx";

















function saveUser(_x, _x2) {
  return _saveUser.apply(this, arguments);
}

function _saveUser() {
  _saveUser = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(form, kelas_id) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!form.id) {
              _context2.next = 5;
              break;
            }

            _context2.next = 3;
            return Object(_libs_queries_crud_updateRecord__WEBPACK_IMPORTED_MODULE_14__["default"])("murid", form);

          case 3:
            _context2.next = 11;
            break;

          case 5:
            _context2.next = 7;
            return Object(_libs_queries_crud_createRecord__WEBPACK_IMPORTED_MODULE_15__["default"])("murid", form);

          case 7:
            form.id = _context2.sent;

            if (!(form.id > 0 && kelas_id)) {
              _context2.next = 11;
              break;
            }

            _context2.next = 11;
            return Object(_libs_queries_crud_createRecord__WEBPACK_IMPORTED_MODULE_15__["default"])("kelas_murid", {
              kelas_id: kelas_id,
              murid_id: form.id,
              is_active: "y"
            });

          case 11:
            if (!form.password) {
              _context2.next = 14;
              break;
            }

            _context2.next = 14;
            return Object(_libs_queries_user_hashPassword__WEBPACK_IMPORTED_MODULE_19__["hashPassword"])(form.id);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _saveUser.apply(this, arguments);
}

var MuridSistem = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__["observer"])(function (_ref) {
  var navigation = _ref.navigation,
      parentNavigation = _ref.parentNavigation;
  var data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__["useObservable"])({
    loading: true,
    form: parentNavigation.getParam("item"),
    kelas: parentNavigation.getParam("kelas")
  });
  return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_8__["default"], {
    navigation: navigation,
    title: data.form.id ? "Detail Siswa #".concat(data.form.id) : "Buat Siswa Baru",
    onBack: function onBack() {
      parentNavigation.goBack();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onPress:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var form;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              form = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, data.form);
              _context.next = 3;
              return saveUser(form, data.kelas.id);

            case 3:
              parentNavigation.goBack();

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Simpan")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_11__["View"], {
    style: {
      flexDirection: "row",
      flex: 1,
      borderTopColor: "#ccc",
      borderTopWidth: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_MuridDetailSide__WEBPACK_IMPORTED_MODULE_13__["default"], {
    navigation: navigation,
    form: data.form,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_17__["default"], {
    size: 6,
    sizexs: 12,
    sizesm: 12,
    sizemd: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: "NSA (Username)",
    setValue: function setValue(value) {
      data.form.nsa = value;
    },
    value: data.form.nsa,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_17__["default"], {
    size: 6,
    sizexs: 12,
    sizesm: 12,
    sizemd: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: "NISN",
    setValue: function setValue(value) {
      data.form.nisn = value;
    },
    value: data.form.nisn,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: "Nama Lengkap",
    setValue: function setValue(value) {
      data.form.nama_murid = value;
    },
    value: data.form.nama_murid,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_17__["default"], {
    size: 4,
    sizexs: 12,
    sizesm: 12,
    sizemd: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: "E-Mail",
    setValue: function setValue(value) {
      data.form.email = value;
    },
    value: data.form.email || "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_17__["default"], {
    size: 4,
    sizexs: 12,
    sizesm: 12,
    sizemd: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIFieldSelectNative__WEBPACK_IMPORTED_MODULE_18__["default"], {
    label: "Status",
    items: [{
      value: "y",
      label: "Aktif"
    }, {
      value: "n",
      label: "Non-Aktif"
    }],
    setValue: function setValue(value) {
      data.form.is_active = value;
    },
    value: data.form.is_active,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_17__["default"], {
    size: 4,
    sizexs: 12,
    sizesm: 12,
    sizemd: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: "Ubah Password",
    type: "password",
    setValue: function setValue(value) {
      data.form.password = value;
    },
    value: data.form.password || "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }))))));
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_libs_nav_StackNav__WEBPACK_IMPORTED_MODULE_3__["default"])({
  MuridSistem: {
    screen: MuridSistem
  },
  MuridProfil: {
    screen: _MuridDetailProfil__WEBPACK_IMPORTED_MODULE_12__["default"]
  }
}));

/***/ })

})
//# sourceMappingURL=index.js.fd366fe065789d98e422.hot-update.js.map