module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 55);
/******/ })
/************************************************************************/
/******/ ({

/***/ "00yu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSession", function() { return setSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSession", function() { return getSession; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dfwq");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ln6h");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9Jkg");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("O40h");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("F62O");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _crud_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("o6H3");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("i9vu");







function setSession(_x) {
  return _setSession.apply(this, arguments);
}

function _setSession() {
  _setSession = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(value) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return react_native_web__WEBPACK_IMPORTED_MODULE_4__["AsyncStorage"].setItem("SESSION", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(value));

          case 3:
            _context.next = 8;
            break;

          case 5:
            _context.prev = 5;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return");

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 5]]);
  }));
  return _setSession.apply(this, arguments);
}

function getSession() {
  return _getSession.apply(this, arguments);
}

function _getSession() {
  _getSession = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
    var loadFromCache,
        sessionRaw,
        session,
        _args2 = arguments;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            loadFromCache = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : true;
            _context2.prev = 1;
            _context2.next = 4;
            return react_native_web__WEBPACK_IMPORTED_MODULE_4__["AsyncStorage"].getItem("SESSION");

          case 4:
            sessionRaw = _context2.sent;

            if (!(sessionRaw !== null)) {
              _context2.next = 13;
              break;
            }

            session = JSON.parse(sessionRaw);

            if (!(loadFromCache === false)) {
              _context2.next = 12;
              break;
            }

            _context2.next = 10;
            return Object(_crud_query__WEBPACK_IMPORTED_MODULE_5__["default"])("user", Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_config__WEBPACK_IMPORTED_MODULE_6__["default"].user.columns), {
              where: {
                username: session.user.username
              }
            });

          case 10:
            session.user = _context2.sent;
            setSession(session);

          case 12:
            return _context2.abrupt("return", session);

          case 13:
            return _context2.abrupt("return", null);

          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](1);
            return _context2.abrupt("return", null);

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 16]]);
  }));
  return _getSession.apply(this, arguments);
}

/***/ }),

/***/ "1T/V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("F62O");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 12 : _ref$size,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: {
      flexBasis: size / 12 * 100 + "%"
    }
  }, children);
});

/***/ }),

/***/ "2I64":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "4ao3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkSession", function() { return checkSession; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ln6h");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Jkg");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("O40h");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("i9vu");
/* harmony import */ var _getsetSession__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("00yu");






var get = __webpack_require__("LBIh");

var checkSession =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var session, response, res;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_getsetSession__WEBPACK_IMPORTED_MODULE_4__["getSession"])();

          case 2:
            session = _context.sent;

            if (session) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", null);

          case 5:
            _context.prev = 5;
            _context.next = 8;
            return fetch(_config__WEBPACK_IMPORTED_MODULE_3__["default"].url, {
              method: "POST",
              body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
                query: "{\n          session(where:{id:{_eq:\"".concat(session.id, "\"}}) {\n            id\n            ").concat(_config__WEBPACK_IMPORTED_MODULE_3__["default"].table, " {\n              ").concat(_config__WEBPACK_IMPORTED_MODULE_3__["default"].user.columns.join("\n"), "\n            }\n          }\n        }")
              }),
              headers: {
                "Content-Type": "application/json",
                "X-Hasura-Session-Id": session.id
              }
            });

          case 8:
            response = _context.sent;
            _context.next = 11;
            return response.json();

          case 11:
            res = _context.sent;
            return _context.abrupt("return", get(res, "data.session[0]"));

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](5);
            return _context.abrupt("return", session);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[5, 15]]);
  }));

  return function checkSession() {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("yvio");


/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "F62O":
/***/ (function(module, exports) {

module.exports = require("react-native-web");

/***/ }),

/***/ "Fmpz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveUser", function() { return saveUser; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ln6h");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zrwo");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("O40h");
/* harmony import */ var _libs_nav_StackNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("dFcb");
/* harmony import */ var _libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("KCKa");
/* harmony import */ var _libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("PKMe");
/* harmony import */ var _libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("UoE3");
/* harmony import */ var _libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("T2vI");
/* harmony import */ var _libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("X6mS");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("nazx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("F62O");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _MuridDetailProfil__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("yvio");
/* harmony import */ var _MuridDetailSide__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("WgMK");
/* harmony import */ var _libs_queries_crud_updateRecord__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("Wknr");
/* harmony import */ var _libs_queries_crud_createRecord__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("S4sK");
/* harmony import */ var _libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("JhQp");
/* harmony import */ var _libs_ui_UICol__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("1T/V");
/* harmony import */ var _libs_ui_UIFieldSelectNative__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("Lqbt");
/* harmony import */ var _libs_queries_user_hashPassword__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("zmKm");




















function saveUser(_x, _x2) {
  return _saveUser.apply(this, arguments);
}

function _saveUser() {
  _saveUser = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
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
  return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_8__["default"], {
    navigation: navigation,
    title: data.form.id ? "Detail Siswa #".concat(data.form.id) : "Buat Siswa Baru",
    onBack: function onBack() {
      parentNavigation.goBack();
    }
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onPress:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var form;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              form = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, data.form);
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
    }))
  }, "Simpan")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_11__["View"], {
    style: {
      flexDirection: "row",
      flex: 1,
      borderTopColor: "#ccc",
      borderTopWidth: 1
    }
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_MuridDetailSide__WEBPACK_IMPORTED_MODULE_13__["default"], {
    navigation: navigation,
    form: data.form
  }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_16__["default"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_17__["default"], {
    size: 6
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: "NSA (Username)",
    setValue: function setValue(value) {
      data.form.nsa = value;
    },
    value: data.form.nsa
  })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_17__["default"], {
    size: 6
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: "NISN",
    setValue: function setValue(value) {
      data.form.nisn = value;
    },
    value: data.form.nisn
  }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: "Nama Lengkap",
    setValue: function setValue(value) {
      data.form.nama_murid = value;
    },
    value: data.form.nama_murid
  }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_16__["default"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_17__["default"], {
    size: 4
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: "E-Mail",
    setValue: function setValue(value) {
      data.form.email = value;
    },
    value: data.form.email || ""
  }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_16__["default"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_17__["default"], {
    size: 4
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
    value: data.form.is_active
  }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_16__["default"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_17__["default"], {
    size: 4
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: "Ubah Password",
    type: "password",
    setValue: function setValue(value) {
      data.form.password = value;
    },
    value: data.form.password || ""
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

/***/ }),

/***/ "J3/a":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "JhQp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zrwo");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("F62O");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_2__["View"], {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props.style, {
      flexDirection: "row",
      flexWrap: "wrap"
    })
  }, props.children);
});

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KCKa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zrwo");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("F62O");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children,
      style = _ref.style;
  var CustomTag = react_native_web__WEBPACK_IMPORTED_MODULE_2__["ScrollView"];
  var CustomStyle = {
    paddingVertical: 10,
    paddingHorizontal: 25
  };
  react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.forEach(children, function (child, index) {
    if (index === 0 && child.type.name === "UIList") {
      CustomTag = react_native_web__WEBPACK_IMPORTED_MODULE_2__["View"];
      CustomStyle = {};
    }
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CustomTag, {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      flex: 1
    }, CustomStyle, style)
  }, children);
});

/***/ }),

/***/ "Kjtv":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

/***/ }),

/***/ "LBIh":
/***/ (function(module, exports) {

module.exports = require("lodash.get");

/***/ }),

/***/ "Lqbt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("doui");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cjKJ");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("F62O");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var setValue = _ref.setValue,
      value = _ref.value,
      items = _ref.items,
      label = _ref.label,
      style = _ref.style,
      fieldActiveStyle = _ref.fieldActiveStyle,
      _ref$inputStyle = _ref.inputStyle,
      inputStyle = _ref$inputStyle === void 0 ? Object(_Style__WEBPACK_IMPORTED_MODULE_1__["S"])(_Style__WEBPACK_IMPORTED_MODULE_1__["St"].TextInput) : _ref$inputStyle,
      inputProps = _ref.inputProps;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      temp = _useState2[0],
      setTemp = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState3, 2),
      focused = _useState4[0],
      setFocused = _useState4[1];

  var SLabel = !!value || !!temp ? _Style__WEBPACK_IMPORTED_MODULE_1__["St"].LabelFocus : _Style__WEBPACK_IMPORTED_MODULE_1__["St"].SelectLabel;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_3__["View"], {
    style: focused ? Object(_Style__WEBPACK_IMPORTED_MODULE_1__["S"])(Object(_Style__WEBPACK_IMPORTED_MODULE_1__["S"])(_Style__WEBPACK_IMPORTED_MODULE_1__["St"].Field, style), Object(_Style__WEBPACK_IMPORTED_MODULE_1__["S"])(_Style__WEBPACK_IMPORTED_MODULE_1__["St"].FieldActive, fieldActiveStyle)) : Object(_Style__WEBPACK_IMPORTED_MODULE_1__["S"])(_Style__WEBPACK_IMPORTED_MODULE_1__["St"].Field, style)
  }, !!label && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    style: Object(_Style__WEBPACK_IMPORTED_MODULE_1__["S"])(_Style__WEBPACK_IMPORTED_MODULE_1__["St"].LabelFocus, {
      marginLeft: 10
    })
  }, label), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_3__["Picker"], {
    mode: "dialog",
    style: {
      marginVertical: 5
    },
    selectedValue: value || temp,
    onValueChange: function onValueChange(itemValue, itemIndex) {
      return setValue != undefined ? setValue(itemValue) : setTemp(itemValue);
    }
  }, items.map(function (item, index) {
    if (typeof item === "string") return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_3__["Picker"].Item, {
      key: index,
      label: item,
      value: item
    });
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_3__["Picker"].Item, {
      key: index,
      label: item.label,
      value: item.value
    });
  })));
});

/***/ }),

/***/ "O40h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eVuF");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "PKMe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kOwS");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cjKJ");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("F62O");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children,
      icon = _ref.icon,
      _ref$iconMode = _ref.iconMode,
      iconMode = _ref$iconMode === void 0 ? "start" : _ref$iconMode,
      _ref$expand = _ref.expand,
      expand = _ref$expand === void 0 ? "block" : _ref$expand,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? "solid" : _ref$fill,
      size = _ref.size,
      style = _ref.style,
      labelStyle = _ref.labelStyle,
      _ref$buttonProps = _ref.buttonProps,
      buttonProps = _ref$buttonProps === void 0 ? {} : _ref$buttonProps,
      onPress = _ref.onPress;
  var btnExpand = "Button" + expand.charAt(0).toUpperCase() + expand.slice(1).toLowerCase();
  var btnFIll = "Button" + fill.charAt(0).toUpperCase() + fill.slice(1).toLowerCase();
  var labelClear = fill == "outline" || fill == "clear" ? "ButtonLabelClear" : "ButtonLabelSolid";
  style = Object(_Style__WEBPACK_IMPORTED_MODULE_1__["S"])(_Style__WEBPACK_IMPORTED_MODULE_1__["St"].Button, _Style__WEBPACK_IMPORTED_MODULE_1__["St"][btnExpand], _Style__WEBPACK_IMPORTED_MODULE_1__["St"][btnFIll], style);
  var defaultLabelStyle = Object(_Style__WEBPACK_IMPORTED_MODULE_1__["S"])(_Style__WEBPACK_IMPORTED_MODULE_1__["St"].ButtonLabel, _Style__WEBPACK_IMPORTED_MODULE_1__["St"][labelClear], size == "small" && _Style__WEBPACK_IMPORTED_MODULE_1__["St"].ButtonLabelSmall, size == "large" && _Style__WEBPACK_IMPORTED_MODULE_1__["St"].ButtonLabelLarge);

  if (children.length === 1 || typeof children === "string") {
    labelStyle = Object(_Style__WEBPACK_IMPORTED_MODULE_1__["S"])(defaultLabelStyle, labelStyle);
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_3__["TouchableOpacity"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    onPress: onPress
  }, buttonProps, {
    style: style
  }), icon && iconMode == "start" && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_3__["Text"], null, icon), children.map && children.length > 1 ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_3__["View"], {
    style: Object(_Style__WEBPACK_IMPORTED_MODULE_1__["S"])(labelStyle, {
      paddingVertical: 10
    })
  }, children.map(function (C, i) {
    if (typeof C !== "object") {
      if (typeof C === "string" && C.trim() === "") return null;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_3__["Text"], {
        key: i,
        style: Object(_Style__WEBPACK_IMPORTED_MODULE_1__["S"])(defaultLabelStyle, {
          paddingVertical: 1,
          marginVertical: 1,
          lineHeight: "auto"
        })
      }, C);
    } else {
      return C;
    }
  })) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    style: labelStyle
  }, children), icon && iconMode == "end" && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_3__["Text"], null, icon));
});

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "S4sK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ln6h");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Jkg");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zrwo");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("O40h");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("i9vu");
/* harmony import */ var _user_checkSession__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("4ao3");






/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(table, data, options) {
    var opt, gql, headers, session, response, json;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            opt = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, {
              useSession: true,
              debug: false,
              primaryKey: "id"
            }, options);
            gql = "mutation create($data:".concat(table, "_insert_input!) {\n    insert_").concat(table, "(\n      objects: [$data]\n    ) {\n      returning {\n        ").concat(opt.primaryKey, "\n      }\n    }\n  }");

            if (opt && opt.debug) {
              console.log(gql, data);
            }

            headers = {
              "Content-Type": "application/json"
            };

            if (!opt.useSession) {
              _context.next = 11;
              break;
            }

            _context.next = 7;
            return Object(_user_checkSession__WEBPACK_IMPORTED_MODULE_5__["checkSession"])();

          case 7:
            session = _context.sent;
            headers["X-Hasura-Session-Id"] = session.id;

            if (session) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", false);

          case 11:
            _context.next = 13;
            return fetch(_config__WEBPACK_IMPORTED_MODULE_4__["default"].url, {
              method: "POST",
              body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
                operationName: "create",
                query: gql,
                variables: {
                  data: data
                }
              }),
              headers: headers
            });

          case 13:
            response = _context.sent;
            _context.next = 16;
            return response.json();

          case 16:
            json = _context.sent;

            if (!(response.status !== 200)) {
              _context.next = 21;
              break;
            }

            if (!(json && json.errors && json.errors[0] && json.errors[0].message)) {
              _context.next = 20;
              break;
            }

            throw "\n(Create Record Failed) ".concat(json.errors[0].message, " \n\nGraphQL Mutation:\n").concat(gql, "\n\nData: \n").concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(data, null, 2).replace(/"/gi, "'"), "\n        ").trim();

          case 20:
            return _context.abrupt("return", null);

          case 21:
            return _context.abrupt("return", json.data["insert_".concat(table)].returning[0].id);

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})());

/***/ }),

/***/ "T2vI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kOwS");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("doui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("F62O");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("cjKJ");





/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var setValue = _ref.setValue,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? "" : _ref$value,
      sublabel = _ref.sublabel,
      label = _ref.label,
      style = _ref.style,
      fieldActiveStyle = _ref.fieldActiveStyle,
      _ref$inputStyle = _ref.inputStyle,
      inputStyle = _ref$inputStyle === void 0 ? Object(_Style__WEBPACK_IMPORTED_MODULE_4__["S"])(_Style__WEBPACK_IMPORTED_MODULE_4__["St"].TextInput) : _ref$inputStyle,
      inputProps = _ref.inputProps,
      _onBlur = _ref.onBlur,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "string" : _ref$type;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(value),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState, 2),
      internalValue = _useState2[0],
      setInternalValue = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState3, 2),
      focused = _useState4[0],
      setFocused = _useState4[1];

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var SLabel = !!value || !!internalValue ? _Style__WEBPACK_IMPORTED_MODULE_4__["St"].LabelFocus : _Style__WEBPACK_IMPORTED_MODULE_4__["St"].Label;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_3__["View"], {
    style: focused ? Object(_Style__WEBPACK_IMPORTED_MODULE_4__["S"])(_Style__WEBPACK_IMPORTED_MODULE_4__["St"].Field, _Style__WEBPACK_IMPORTED_MODULE_4__["St"].FieldActive, fieldActiveStyle, style) : Object(_Style__WEBPACK_IMPORTED_MODULE_4__["S"])(_Style__WEBPACK_IMPORTED_MODULE_4__["St"].Field, style)
  }, !!label && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_3__["View"], {
    pointerEvents: "none"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    style: focused ? Object(_Style__WEBPACK_IMPORTED_MODULE_4__["S"])(_Style__WEBPACK_IMPORTED_MODULE_4__["St"].LabelFocus, _Style__WEBPACK_IMPORTED_MODULE_4__["St"].LabelActive) : SLabel
  }, label)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_3__["TextInput"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    ref: ref,
    secureTextEntry: type === "password",
    onFocus: function onFocus() {
      return setFocused(true);
    },
    onBlur: function onBlur() {
      setFocused(false);

      if (typeof _onBlur === "function") {
        _onBlur();
      }
    },
    style: inputStyle,
    onChangeText: function onChangeText(text) {
      if (setValue != undefined) setValue(text);
      setInternalValue(text);
    },
    value: value.toString()
  }, inputProps)), !!sublabel && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    style: _Style__WEBPACK_IMPORTED_MODULE_4__["St"].SubLabel
  }, sublabel));
});

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "UoE3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("F62O");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: {
      flex: 1,
      flexDirection: "column"
    }
  }, children);
});

/***/ }),

/***/ "VBo9":
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),

/***/ "WgMK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("i9vu");
/* harmony import */ var _libs_ui_UIImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("mHYl");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nazx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("F62O");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_4__);





var Button = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["observer"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_4__["TouchableOpacity"], {
    onPress: props.onPress,
    style: {
      flexDirection: "row",
      alignItems: "center",
      alignContent: "center"
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_libs_ui_UIImage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: {
      width: 20,
      padding: 10,
      height: 20
    },
    source: props.image
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    style: {
      color: _config__WEBPACK_IMPORTED_MODULE_0__["default"].color.main
    }
  }, props.text));
});
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var navigation = _ref.navigation,
      form = _ref.form;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_4__["View"], {
    style: {
      flexBasis: 200,
      borderRightWidth: 1,
      backgroundColor: "#ececeb",
      borderRightColor: "#ccc"
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Button, {
    text: "Data Sistem",
    onPress: function onPress() {
      navigation.replace("MuridSistem");
    },
    image: __webpack_require__("2I64")
  }), form && form.id && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Button, {
    text: "Data Diri",
    onPress: function onPress() {
      navigation.replace("MuridProfil");
    },
    image: __webpack_require__("vnJM")
  }));
});

/***/ }),

/***/ "Wknr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ln6h");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Jkg");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zrwo");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("O40h");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("i9vu");
/* harmony import */ var _user_checkSession__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("4ao3");






/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(table, data, options) {
    var opt, _data, pk, gql, headers, session, response, json;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            opt = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, {
              useSession: true,
              debug: false,
              primaryKey: "id"
            }, options);
            _data = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, data);
            delete _data[opt.primaryKey];
            pk = typeof data[opt.primaryKey] === "string" ? "\"".concat(data[opt.primaryKey], "\"") : data[opt.primaryKey];
            gql = "mutation update($data:".concat(table, "_set_input!) {\n    update_").concat(table, "(\n      where: {").concat(opt.primaryKey, ": {_eq: ").concat(pk, "}},\n      _set: $data\n    ) {\n      returning {\n        ").concat(opt.primaryKey, "\n      }\n    }\n  }");

            if (opt && opt.debug) {
              console.log(gql, data);
            }

            headers = {
              "Content-Type": "application/json"
            };

            if (!opt.useSession) {
              _context.next = 14;
              break;
            }

            _context.next = 10;
            return Object(_user_checkSession__WEBPACK_IMPORTED_MODULE_5__["checkSession"])();

          case 10:
            session = _context.sent;
            headers["X-Hasura-Session-Id"] = session.id;

            if (session) {
              _context.next = 14;
              break;
            }

            return _context.abrupt("return", false);

          case 14:
            _context.next = 16;
            return fetch(_config__WEBPACK_IMPORTED_MODULE_4__["default"].url, {
              method: "POST",
              body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
                operationName: "update",
                query: gql,
                variables: {
                  data: _data
                }
              }),
              headers: headers
            });

          case 16:
            response = _context.sent;
            _context.next = 19;
            return response.json();

          case 19:
            json = _context.sent;

            if (!(response.status !== 200)) {
              _context.next = 24;
              break;
            }

            if (!(json && json.errors && json.errors[0] && json.errors[0].message)) {
              _context.next = 23;
              break;
            }

            throw "\n(Create Record Failed) ".concat(json.errors[0].message, " \n\nGraphQL Mutation:\n").concat(gql, "\n\nData: \n").concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(data, null, 2).replace(/"/gi, "'"), "\n        ").trim();

          case 23:
            return _context.abrupt("return", null);

          case 24:
            return _context.abrupt("return", json);

          case 25:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})());

/***/ }),

/***/ "X6mS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("F62O");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UIImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("mHYl");



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var title = _ref.title,
      children = _ref.children,
      onBack = _ref.onBack;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: {
      paddingVertical: 15,
      paddingHorizontal: 25,
      flexBasis: 75,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: {
      flexDirection: "row",
      alignItems: "center"
    }
  }, onBack && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_1__["TouchableOpacity"], {
    style: {
      width: 20,
      height: 20,
      marginLeft: -10,
      marginRight: 10,
      marginTop: 3
    },
    onPress: onBack
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UIImage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      width: 20,
      height: 20
    },
    source: __webpack_require__("ia3M")
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    style: {
      fontSize: 22,
      color: "#555"
    }
  }, (title || "").trim())), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_1__["View"], null, children));
});

/***/ }),

/***/ "XXOK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("J3/a");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cjKJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveHandler", function() { return ResponsiveHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Responsive", function() { return Responsive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "St", function() { return St; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zrwo");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("pLtp");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("F62O");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_2__);



var inputSpacing = 12;
var fontSize = 14;
var ResponsiveHandler = function ResponsiveHandler(obs) {
  var handler = function handler() {
    obs.width = react_native_web__WEBPACK_IMPORTED_MODULE_2__["Dimensions"].get("window").width;
  };

  return function () {
    react_native_web__WEBPACK_IMPORTED_MODULE_2__["Dimensions"].addEventListener("change", handler);
    handler();
    return function () {
      react_native_web__WEBPACK_IMPORTED_MODULE_2__["Dimensions"].removeEventListener("change", handler);
    };
  };
};
var Responsive = function Responsive(style, width) {
  var styleKeys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(style);

  var firstKey = styleKeys[0];
  var first = style[firstKey];

  if (width <= 410) {
    return style.xs || first;
  } else if (width >= 411 && width <= 567) {
    return style.sm || style.xs || first;
  } else if (width >= 568 && width <= 767) {
    return style.md || style.sm || style.xs || first;
  } else if (width >= 768 && width <= 1023) {
    return style.lg || style.md || style.sm || style.xs || first;
  } else if (width >= 1024 && width <= 1279) {
    return style.xl || style.lg || style.md || style.sm || style.xs || first;
  } else if (width >= 1280) {
    return style.xxl || style.xl || style.lg || style.md || style.sm || style.xs || first;
  }

  return first;
};
var S = function S() {
  for (var _len = arguments.length, style = new Array(_len), _key = 0; _key < _len; _key++) {
    style[_key] = arguments[_key];
  }

  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, react_native_web__WEBPACK_IMPORTED_MODULE_2__["StyleSheet"].flatten(style));
};
var St = react_native_web__WEBPACK_IMPORTED_MODULE_2__["StyleSheet"].create({
  Field: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#C4C4C4",
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "#fff"
  },
  FieldActive: {
    borderColor: "#613EEA"
  },
  Label: {
    position: "absolute",
    top: 6,
    fontSize: 13,
    color: "#666"
  },
  SubLabel: {
    fontSize: 12,
    color: "#999"
  },
  LabelFocus: {
    position: "absolute",
    fontSize: 13,
    left: -4,
    transform: [{
      translateY: -17
    }, {
      scaleY: 1
    }],
    backgroundColor: "#fff",
    color: "#666",
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 5
  },
  LabelActive: {
    color: "#613EEA"
  },
  TextInput: {
    fontSize: 14,
    lineHeight: 30,
    outline: "none"
  },
  Button: {
    shadowColor: "#613EEA",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },
  ButtonLabel: {
    textAlign: "center",
    fontSize: fontSize,
    padding: 8,
    paddingLeft: 8,
    paddingRight: 8
  },
  ButtonLabelSmall: {
    fontSize: 12,
    padding: 5,
    paddingLeft: 8,
    paddingRight: 8
  },
  ButtonLabelLarge: {
    fontSize: 18,
    padding: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  ButtonLabelSolid: {
    color: "#fff"
  },
  ButtonLabelClear: {
    color: "#613EEA"
  },
  ButtonBlock: {
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 5
  },
  ButtonFull: {
    width: "100%"
  },
  ButtonSolid: {
    backgroundColor: "#613EEA"
  },
  ButtonClear: {
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0
  },
  ButtonOutline: {
    borderColor: "#613EEA",
    borderWidth: 1
  },
  Select2: {
    paddingTop: 15,
    paddingBottom: 15,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center"
  },
  SelectHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 2,
    borderColor: "#ccc"
  },
  SelectList: {},
  SelectItem: {
    margin: 0,
    borderRadius: 0,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: "#ccc",
    elevation: 0
  },
  SelectItemLabel: {
    color: "#613EEA",
    textAlign: "left",
    fontSize: 18
  },
  LabelHidden: {
    display: "none"
  },
  SelectLabel: {
    width: "100%",
    marginRight: -15,
    alignItems: "center",
    justifyContent: "flex-start",
    fontSize: 16,
    paddingLeft: 5,
    paddingRight: 5
  },
  SelectLabelActive: {
    color: "#000"
  },
  SelectIcon: {
    alignItems: "center",
    justifyContent: "flex-end",
    textAlign: "center"
  },
  Modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000090",
    height: "100%"
  },
  ModalView: {
    display: "flex",
    height: "50%",
    width: "95%",
    backgroundColor: "#fff",
    flexDirection: "column",
    borderRadius: 10
  },
  ModalHeader: {
    paddingLeft: 15,
    paddingRight: 15,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  ModalContent: {
    paddingBottom: 10,
    height: "80%"
  },
  ModalFooter: {
    paddingLeft: 10,
    paddingRight: 10,
    height: "20%",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row"
  },
  Card: {
    margin: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    minHeight: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },
  Row: {
    flexDirection: "row"
  },
  Col1: {
    paddingRight: inputSpacing,
    flexGrow: 0,
    flexBasis: Math.round(100 / inputSpacing) + "%"
  },
  Col2: {
    paddingRight: inputSpacing,
    flexGrow: 0,
    flexBasis: Math.round(100 / inputSpacing * 2) + "%"
  },
  Col3: {
    paddingRight: inputSpacing,
    flexGrow: 0,
    flexBasis: Math.round(100 / inputSpacing * 3) + "%"
  },
  Col4: {
    paddingRight: inputSpacing,
    flexGrow: 0,
    flexBasis: Math.round(100 / inputSpacing * 4) + "%"
  },
  Col5: {
    paddingRight: inputSpacing,
    flexGrow: 0,
    flexBasis: Math.round(100 / inputSpacing * 5) + "%"
  },
  Col6: {
    paddingRight: inputSpacing,
    flexGrow: 0,
    flexBasis: Math.round(100 / inputSpacing * 6) + "%"
  },
  Col7: {
    paddingRight: inputSpacing,
    flexGrow: 0,
    flexBasis: Math.round(100 / inputSpacing * 7) + "%"
  },
  Col8: {
    paddingRight: inputSpacing,
    flexGrow: 0,
    flexBasis: Math.round(100 / inputSpacing * 8) + "%"
  },
  Col9: {
    paddingRight: inputSpacing,
    flexGrow: 0,
    flexBasis: Math.round(100 / inputSpacing * 9) + "%"
  },
  Col10: {
    paddingRight: inputSpacing,
    flexGrow: 0,
    flexBasis: Math.round(100 / inputSpacing * 10) + "%"
  },
  Col11: {
    paddingRight: inputSpacing,
    flexGrow: 0,
    flexBasis: Math.round(100 / inputSpacing * 11) + "%"
  },
  ColinputSpacing: {
    paddingRight: inputSpacing,
    flexGrow: 0,
    flexBasis: Math.round(100 / inputSpacing * inputSpacing) + "%"
  }
});

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "d04V":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("r7XW");

/***/ }),

/***/ "dFcb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kOwS");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("jrre");



/* harmony default export */ __webpack_exports__["default"] = (function (data) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var isRoot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var Container = Object(_NavContainer__WEBPACK_IMPORTED_MODULE_2__["default"])(data);
  return function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props, {
      parentNavigation: props.navigation
    }));
  };
});

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dfwq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("p0XB");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (is_array_default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/from.js
var from = __webpack_require__("d04V");
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js
var is_iterable = __webpack_require__("yLu3");
var is_iterable_default = /*#__PURE__*/__webpack_require__.n(is_iterable);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js


function _iterableToArray(iter) {
  if (is_iterable_default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return from_default()(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _toConsumableArray; });



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

/***/ }),

/***/ "doui":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("p0XB");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js

function _arrayWithHoles(arr) {
  if (is_array_default()(arr)) return arr;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js
var get_iterator = __webpack_require__("XXOK");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = get_iterator_default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _slicedToArray; });



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "fqhS":
/***/ (function(module, exports) {

module.exports = require("react-json-to-html");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "i9vu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  url: "https://hasura.cap.edumatis.id/v1alpha1/graphql",
  wsurl: "wss://hasura.cap.edumatis.id/v1alpha1/graphql",
  table: "murid",
  use_client_id: true,
  identifierType: {
    id: "int",
    client_id: "int",
    password: "string",
    username: "string"
  },
  identifier: {
    id: "id",
    username: "nsa",
    fullname: "nama_murid",
    role: "'admin'",
    password: "password",
    client_id: "sekolah_id"
  },
  user: {
    login_columns: ["nsa", "nama_murid"],
    columns: ["id", "nisn", "nsa", "nama_murid", "password", "email"]
  },
  color: {
    main: "#613EEA",
    mainText: "#FFFFFF"
  }
});

/***/ }),

/***/ "ia3M":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "jrre":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNavigateTo", function() { return createNavigateTo; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kOwS");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("pLtp");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nazx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("VBo9");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_4__);






var container = function container(routes) {
  var routeStack = [];
  var navParam = {};
  return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["observer"])(function (props, ref) {
    var screenRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
    var current = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["useObservable"])({
      name: ""
    });

    if (current.name === "") {
      _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(routes).map(function (r, index) {
        if (index === 0) {
          current.name = r;
          screenRef.current = routes[r].screen;
        }
      });
    }

    var navigation = {
      _routes: routes,
      getParam: function getParam(key) {
        return navParam[key];
      },
      goBack: function goBack() {
        if (routeStack.length > 0) {
          var screen = routeStack.pop();

          if (routes[screen.name]) {
            navParam = screen.data;
            screenRef.current = routes[screen.name].screen;
            current.name = screen.name;
          }
        }
      },
      navigate: function navigate(screen, data) {
        routeStack.push({
          name: current.name,
          data: Object(mobx__WEBPACK_IMPORTED_MODULE_4__["toJS"])(navParam)
        });

        if (routes[screen]) {
          navParam = data;
          screenRef.current = routes[screen].screen;
          current.name = screen;
        }
      },
      replace: function replace(screen) {
        if (routes[screen]) {
          screenRef.current = routes[screen].screen;
          current.name = screen;
        }
      },
      popToTop: function popToTop() {
        if (props.parentNavigation) {
          props.parentNavigation.popToTop();
        } else {
          var first = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(routes)[0];

          current.name = first;
          screenRef.current = routes[first].screen;
        }
      }
    };
    var Component = screenRef.current;

    if (ref && ref.current) {
      ref.current = navigation;
    }

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props, {
      navigation: navigation
    }));
  }, {
    forwardRef: true
  });
};

/* harmony default export */ __webpack_exports__["default"] = (function (data) {
  return container(data);
});
var createNavigateTo = function createNavigateTo(navigation) {
  return function (screen) {
    navigation.replace(screen);
  };
};

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "kOwS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UXZV");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "mHYl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var myprops = {
    src: props.source,
    style: props.style
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", myprops);
});

/***/ }),

/***/ "nazx":
/***/ (function(module, exports) {

module.exports = require("mobx-react-lite");

/***/ }),

/***/ "o6H3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ln6h");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Jkg");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pLtp");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("zrwo");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("O40h");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("i9vu");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("F62O");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_6__);







/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(table, columns, options) {
    var opt, where, tableArgs, gql, headers, sessionRaw, session, response, json;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            opt = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({}, {
              useSession: true,
              debug: false,
              where: {},
              args: "limit:1"
            }, options);
            where = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(opt.where).map(function (w) {
              return "".concat(w, ": {_eq: ").concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(opt.where[w]), "}");
            });

            if (where.length > 0) {
              where[0] = ",where:{" + where[0];
              where[where.length - 1] = where[where.length - 1] + "}";
            }

            tableArgs = "".concat(opt.args || '', " ").concat(where.join(",")).trim();

            if (tableArgs.length > 0) {
              tableArgs = "(".concat(tableArgs, ")");
            }

            gql = "\n    {\n        ".concat(table).concat(tableArgs, " \n        ").concat(typeof columns === "string" ? columns : "{" + columns.join("\n") + "}", "\n        \n    }");

            if (opt.debug) {
              console.log(gql);
            }

            headers = {
              "Content-Type": "application/json"
            };

            if (!opt.useSession) {
              _context.next = 18;
              break;
            }

            _context.next = 11;
            return react_native_web__WEBPACK_IMPORTED_MODULE_6__["AsyncStorage"].getItem("SESSION");

          case 11:
            sessionRaw = _context.sent;
            session = JSON.parse(sessionRaw || "false");

            if (session) {
              _context.next = 17;
              break;
            }

            return _context.abrupt("return", false);

          case 17:
            headers["X-Hasura-Session-Id"] = session.id;

          case 18:
            _context.next = 20;
            return fetch(_config__WEBPACK_IMPORTED_MODULE_5__["default"].url, {
              method: "POST",
              body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
                query: gql
              }),
              headers: headers
            });

          case 20:
            response = _context.sent;
            _context.next = 23;
            return response.json();

          case 23:
            json = _context.sent;

            if (!(response.status !== 200)) {
              _context.next = 28;
              break;
            }

            if (!(json && json.errors && json.errors[0] && json.errors[0].message)) {
              _context.next = 27;
              break;
            }

            throw "\n  (Query Record Failed) ".concat(json.errors[0].message, " \n  \n  GraphQL Query: ").concat(gql, "\n  \n  ");

          case 27:
            return _context.abrupt("return", null);

          case 28:
            if (!(typeof columns !== "string")) {
              _context.next = 32;
              break;
            }

            return _context.abrupt("return", json.data[table][0]);

          case 32:
            return _context.abrupt("return", json.data[table]);

          case 33:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})());

/***/ }),

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "r7XW":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "vnJM":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "yLu3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Kjtv");

/***/ }),

/***/ "yvio":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ln6h");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zrwo");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("O40h");
/* harmony import */ var _libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("KCKa");
/* harmony import */ var _libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("UoE3");
/* harmony import */ var _libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("X6mS");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("nazx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("F62O");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _MuridDetailSide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("WgMK");
/* harmony import */ var _libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("PKMe");
/* harmony import */ var _MuridDetail__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("Fmpz");
/* harmony import */ var react_json_to_html__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("fqhS");
/* harmony import */ var react_json_to_html__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_json_to_html__WEBPACK_IMPORTED_MODULE_12__);













/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__["observer"])(function (_ref) {
  var navigation = _ref.navigation,
      parentNavigation = _ref.parentNavigation;
  var data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__["useObservable"])({
    loading: true,
    form: parentNavigation.getParam("item"),
    kelas: parentNavigation.getParam("kelas")
  });
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_5__["default"], {
    navigation: navigation,
    title: data.form.id ? "Detail Siswa #".concat(data.form.id) : "Buat Siswa Baru",
    onBack: function onBack() {
      parentNavigation.goBack();
    }
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onPress:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var form;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              form = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, data.form);
              _context.next = 3;
              return Object(_MuridDetail__WEBPACK_IMPORTED_MODULE_11__["saveUser"])(form, data.kelas.id);

            case 3:
              parentNavigation.goBack();

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))
  }, "Simpan")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_8__["View"], {
    style: {
      flexDirection: "row",
      flex: 1,
      borderTopColor: "#ccc",
      borderTopWidth: 1
    }
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_MuridDetailSide__WEBPACK_IMPORTED_MODULE_9__["default"], {
    navigation: navigation,
    form: data.form
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_3__["default"], null, data.form.data ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_json_to_html__WEBPACK_IMPORTED_MODULE_12__["JsonTable"], {
    json: data.form.data
  }) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_8__["Text"], null, "\u2014 Data Diri Kosong \u2014 "))));
}));

/***/ }),

/***/ "zmKm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hashPassword", function() { return hashPassword; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ln6h");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Jkg");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("O40h");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("i9vu");




var hashPassword =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(user_id) {
    var res;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(_config__WEBPACK_IMPORTED_MODULE_3__["default"].url, {
              method: "POST",
              body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
                query: "{\n          session(limit:1) {\n            id\n          }\n        }"
              }),
              headers: {
                "Content-Type": "application/json",
                "X-Hasura-ChangePass-Uid": user_id
              }
            });

          case 2:
            res = _context.sent;

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function hashPassword(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "zrwo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Jo+v");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4mXO");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pLtp");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vYYK");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ })

/******/ });