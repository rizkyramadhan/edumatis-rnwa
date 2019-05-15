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
/******/ 	return __webpack_require__(__webpack_require__.s = 60);
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

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("MfxB");


/***/ }),

/***/ "6BQ9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "F62O":
/***/ (function(module, exports) {

module.exports = require("react-native-web");

/***/ }),

/***/ "FbAO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cjKJ");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("F62O");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var label = _ref.label,
      style = _ref.style,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_2__["View"], {
    style: Object(_Style__WEBPACK_IMPORTED_MODULE_0__["S"])(_Style__WEBPACK_IMPORTED_MODULE_0__["St"].Field, style)
  }, !!label && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_2__["View"], {
    pointerEvents: "none"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    style: Object(_Style__WEBPACK_IMPORTED_MODULE_0__["S"])(_Style__WEBPACK_IMPORTED_MODULE_0__["St"].LabelFocus)
  }, label)), children);
});

/***/ }),

/***/ "Gzh1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6BQ9");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ln6h");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("dfwq");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("O40h");
/* harmony import */ var _libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("XG+j");
/* harmony import */ var _libs_ui_UICol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("1T/V");
/* harmony import */ var _libs_ui_UIField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("FbAO");
/* harmony import */ var _libs_ui_UIFieldSelectNative__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Lqbt");
/* harmony import */ var _libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("JhQp");
/* harmony import */ var _libs_utils_GraphQL__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("dRWf");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("nazx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("F62O");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_12__);













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
  return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: 6
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_libs_ui_UIField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "Berlaku untuk kelas:"
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
      }
    }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_12__["TouchableOpacity"], {
      onPress:
      /*#__PURE__*/
      Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
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
                  }].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(kelasMurid));
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
      }))
    }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_12__["Text"], {
      style: {
        fontSize: 17,
        height: 25
      }
    }, kelas ? "☑" : "☐", "\xA0", k.nama_kelas)), kelas && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_12__["View"], {
      style: {
        flexDirection: "row",
        marginLeft: 30,
        alignItems: "center",
        position: "absolute",
        right: 10
      }
    }, renderKelasTitle && renderKelasTitle(kelas, k), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_12__["TouchableOpacity"], {
      onPress: function onPress() {
        allkelas[k.id] = undefined;
      }
    }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_12__["Text"], {
      style: {
        color: "red"
      }
    }, " Hapus"))), kelas && data.expandKelas.indexOf(k.id) >= 0 && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_12__["View"], null, renderKelas && renderKelas(kelas, k), kelas.murid.map(function (murid, midx) {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_8__["default"], {
        key: midx,
        style: {
          flexDirection: "row"
        }
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_5__["default"], {
        size: 6
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
        }
      })), renderMurid && renderMurid(murid, kelas, k));
    })));
  }))));
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

/***/ "MfxB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ln6h");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("O40h");
/* harmony import */ var _libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("XG+j");
/* harmony import */ var _libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("KCKa");
/* harmony import */ var _libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("PKMe");
/* harmony import */ var _libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("UoE3");
/* harmony import */ var _libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("X6mS");
/* harmony import */ var _libs_ui_UIList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("zHZ+");
/* harmony import */ var _libs_ui_UIListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("XJ5H");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("nazx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("F62O");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _libs_nav_StackNav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("dFcb");
/* harmony import */ var _PengumumanDetail__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("w65R");














var Pengumuman = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__["observer"])(function (_ref) {
  var navigation = _ref.navigation;
  var data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__["useObservable"])({
    list: [],
    loading: true
  });
  Object(react__WEBPACK_IMPORTED_MODULE_10__["useEffect"])(function () {
    var fetch =
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var result;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_2__["default"])("{\n        pengumuman(order_by: {status: asc, id: asc}) {\n          id\n          pengumuman\n          tgl\n          status\n          kelas\n        }\n      }");

              case 2:
                result = _context.sent;

                if (result && result.pengumuman) {
                  data.list = result.pengumuman;
                }

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
  return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_6__["default"], {
    navigation: navigation,
    title: "Pengumuman"
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: "small",
    onPress: function onPress() {
      navigation.navigate("PengumumanDetail", {
        item: {
          kelas: {}
        }
      });
    }
  }, "+ Pengumuman Baru")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: data.list,
    loading: data.loading,
    render: function render(list) {
      var item = list.item;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIListItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onPress: function onPress() {
          navigation.navigate("PengumumanDetail", {
            item: item
          });
        }
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_11__["View"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_11__["Text"], {
        style: {
          fontSize: 15,
          fontWeight: "bold",
          color: "#555"
        }
      }, item.pengumuman)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_11__["View"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_11__["Text"], null, item.status)));
    }
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_libs_nav_StackNav__WEBPACK_IMPORTED_MODULE_12__["default"])({
  Pengumuman: {
    screen: Pengumuman
  },
  PengumumanDetail: {
    screen: _PengumumanDetail__WEBPACK_IMPORTED_MODULE_13__["default"]
  }
}));

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

/***/ "XG+j":
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
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("F62O");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_5__);






/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(query, options) {
    var opt, headers, sessionRaw, session, response, json;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            opt = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, {
              useSession: true,
              debug: false,
              where: {},
              args: "limit:1"
            }, options);
            headers = {
              "Content-Type": "application/json"
            };

            if (!opt.useSession) {
              _context.next = 12;
              break;
            }

            _context.next = 5;
            return react_native_web__WEBPACK_IMPORTED_MODULE_5__["AsyncStorage"].getItem("SESSION");

          case 5:
            sessionRaw = _context.sent;
            session = JSON.parse(sessionRaw || "false");

            if (session) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", false);

          case 11:
            headers["X-Hasura-Session-Id"] = session.id;

          case 12:
            _context.next = 14;
            return fetch(_config__WEBPACK_IMPORTED_MODULE_4__["default"].url, {
              method: "POST",
              body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
                query: query
              }),
              headers: headers
            });

          case 14:
            response = _context.sent;
            _context.next = 17;
            return response.json();

          case 17:
            json = _context.sent;
            return _context.abrupt("return", json.data);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})());

/***/ }),

/***/ "XJ5H":
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
      borderBottomColor: "#ccc",
      borderBottomWidth: 1
    })
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_2__["TouchableOpacity"], {
    style: {
      padding: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    },
    onPress: props.onPress
  }, props.children));
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

/***/ "dRWf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnique", function() { return getUnique; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("i9vu");

function format(column, value) {
  if (_config__WEBPACK_IMPORTED_MODULE_0__["default"].identifierType[column] === "int") return value;else return "\"".concat(value, "\"");
}
function getUnique(arr, comp) {
  var unique = arr.map(function (e) {
    return e[comp];
  }) // store the keys of the unique objects
  .map(function (e, i, final) {
    return final.indexOf(e) === i && i;
  }) // eliminate the dead keys & store unique objects
  .filter(function (e) {
    return arr[e];
  }).map(function (e) {
    return arr[e];
  });
  return unique;
}

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

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABVlBMVEUAAABmZmZ2cnJ2dHR0dHR1c3N1dHR1dHR1dHR0dHR1dXVycnJtbW10dHR1dHRzc3N3c3N1dHR1dHRwcHB0dHR1dHR0dHR2dnZ0dHR1dHR1dXV2dHR1dHRzc3N1c3N0dHR5eXl1dHQAAAB1dXV1dHRzc3N1dHR1dHR2dnZ1dHSAgIB0dHR1dXV1dHR2cnJ1dXV1dHSAgIBxcXFzc3N1dXV0dHR1dHR4eHh1dHR1c3N6b291dHR2c3N1dHR1dHRtbW12dnZzc3N1dHSAgIB1dHSAamp1dHR1c3N1c3N3d3dwcHB1dHR2c3N0dHR1c3N1dHRxcXF1dXV4cXF0dHR1dHR1dXV2dHR1dHR1dHR1dXV0dHR2dHR0dHR2dHR0dHR1dXV0dHR2dHR1dHR1dXV1dHR2cnJ2dHSAgIB1dHR2dHR1dXV1dXV1dHR1dHR1dXV2c3N1dHQAAAAtfTbbAAAAcHRSTlMABUORxd/37tW4dCYHcOo+POCuEGP52yl97TJ37zV+LBW9AVXaSZb+HPoC0IPAOJC7BBIUbUT7EeyJF/VotfIOJyi/CsIM9r5vHhn0UpWUmAmkIp78abTj/ejDeS7BOZegzuIj4U6aCPG2MErG07FqA8xFVQAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjBQwLABTIvcjYAAADjElEQVR42u2d11YUURQFGwVRVAyIOSAqWQUT5oyAOQsmFANmz/8/ueZBXQgz3X3W7dnLe2t/QVXdMzDqg1n2f61lxcrWtlXtq9d0rFWjKLZufaf9WesGNU7Tt3GTLdrmLjVRc7el2/7Z1m1qpmZuuy3djp1qquZtly233XvUXFr/dArU80+lQH3/NAo08k+hQGP/+Avk+cdeYG+uv1n7PjVldct//9raetScVa3I+9e2v1dNWs2KvX9tB9SoYn872KKG1fqbHVLTiv2tT40bfEV//v3+RaDmDb1y72/WH9kPgbL+ZgNq5KAref+1RfVtsPz7m/WoocX+g0Nq6nBz3L/ZsJo63Dzvbzaixg421/ubRfN3Ar73t8NqbrF//xE1eKA579+OqsEDzfn+NjqmJg8z7/sPH1OTh5n3/YePq8nxxx9//PHHH3/88ccff/zxxx9//PHHH3/88ccff/zxxx9//PHHH3/88ccff/zxxx9//PHHH3/88ccff/zxxx9//PHHH3/88ccff/zxxx9//NXk+OOPP/74448//vjjjz/++OOPP/74449/3k4k7n/yVNr+46fT9s/OJO5/9lza/tn5xP2zC4n7ZxcT97+UuH92OXH/7Er5AFevqaFDrsvxEbg+oaYOuRuOApMx3cCoI0BUNzDlCRBTgelBV4GIPgV9rgAR3cDNW74C8dzA7f7Ub2DEFyCeAr13KEABClCAAhSgAAUoQAEKUIACFKAABShAAQpQgAIUoAAFKEABCiRf4C4FKEABClCAAhSgAAUoQAEKUIACFKAABShAAQpQgAIUoAAFKEABClCAAhSgAAUoQAEKUIACFKAABShAAQpQgAIUoAAFKEABClCAAhSgQPIF7jkLTN5Xo4cq4L2BB2ryYAW8N9ChJg9WwHkD3Q/V5OoCj9Tg4Qr4PgWPB9Tg4Qr4buCJmjtgAdcNPFVjhyzguYFnamp1gcEhNXXQAo5PwbgaOmyB0jcwM6ZmFheYVRMHL1DyU/BcDRy+QLkbeKHmraBAqRt4qcatokCJG3ilhlUXeK1mrajAXEH/N2rSygoUu4G30fwfXksLFLmB+Xj+LLxMgfwbmH+nhtQWiNw/t0D0/jkFEvBvWCAJ/wYFEvGvWyAZ/zrfB95H888hRTY1s+T737Saqbn7MLtIf+bjgpqo2ZvY++mv/+cvahzFFr7OfZvv7vz+42eg6/8FSC/KGlrMDTEAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDUtMTJUMDk6MDA6MjArMDI6MDCFJ7uLAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTA1LTEyVDA5OjAwOjIwKzAyOjAw9HoDNwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="

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

/***/ "w65R":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pLtp");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ln6h");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("6BQ9");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("O40h");
/* harmony import */ var _libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("KCKa");
/* harmony import */ var _libs_ui_UICol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("1T/V");
/* harmony import */ var _libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("UoE3");
/* harmony import */ var _libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("T2vI");
/* harmony import */ var _libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("X6mS");
/* harmony import */ var _libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("JhQp");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("nazx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _libs_ui_UIFieldSelectNative__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("Lqbt");
/* harmony import */ var _Kelas_KelasPicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("Gzh1");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("F62O");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("PKMe");
/* harmony import */ var _libs_queries_crud_updateRecord__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("Wknr");
/* harmony import */ var _libs_queries_crud_createRecord__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("S4sK");


















/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_10__["observer"])(function (_ref) {
  var navigation = _ref.navigation;
  var data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_10__["useObservable"])({
    loading: true,
    form: navigation.getParam("item")
  });
  return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_8__["default"], {
    navigation: navigation,
    title: " Pengumuman " + (data.form.id ? "#".concat(data.form.id) : "Baru"),
    onBack: function onBack() {
      navigation.goBack();
    }
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_15__["default"], {
    onPress:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!data.form.id) {
                _context.next = 6;
                break;
              }

              data.form.id = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(data.form.id);
              _context.next = 4;
              return Object(_libs_queries_crud_updateRecord__WEBPACK_IMPORTED_MODULE_16__["default"])("pengumuman", data.form);

            case 4:
              _context.next = 8;
              break;

            case 6:
              _context.next = 8;
              return Object(_libs_queries_crud_createRecord__WEBPACK_IMPORTED_MODULE_17__["default"])("pengumuman", data.form);

            case 8:
              navigation.goBack();

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))
  }, "Simpan")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: "Text Pengumuman",
    setValue: function setValue(value) {
      data.form.pengumuman = value;
    },
    value: data.form.pengumuman
  }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_9__["default"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: 4
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_libs_ui_UIFieldSelectNative__WEBPACK_IMPORTED_MODULE_12__["default"], {
    label: "Status",
    items: [{
      value: "aktif",
      label: "Aktif"
    }, {
      value: "non-aktif",
      label: "Non-Aktif"
    }],
    value: data.form.status,
    setValue: function setValue(v) {
      data.form.status = v;
    }
  }))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Kelas_KelasPicker__WEBPACK_IMPORTED_MODULE_13__["default"], {
    form: data.form,
    renderKelas: function renderKelas(kelas, detail) {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_14__["Text"], {
        style: {
          paddingLeft: 15,
          paddingVertical: 10,
          color: "#333"
        }
      }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(kelas.murid).length === 1 ? "Untuk semua murid di kelas ".concat(detail.nama_kelas) : "Khusus untuk murid dibawah ini");
    }
  })));
}));

/***/ }),

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "yLu3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Kjtv");

/***/ }),

/***/ "zHZ+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("F62O");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (props.reload) props.reload();
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_1__["View"], null, props.loading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    style: {
      margin: 15
    }
  }, "Loading..."), props.data.length === 0 ? !props.loading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    style: {
      textAlign: "center",
      margin: 15
    }
  }, "\u2014 Empty \u2014") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_1__["FlatList"], {
    extraData: props.extraData,
    data: props.data,
    keyExtractor: function keyExtractor(item, index) {
      return index.toString();
    },
    refreshing: props.loading,
    onRefresh: props.reload,
    renderItem: function renderItem(data) {
      return props.render(data);
    }
  }));
});

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