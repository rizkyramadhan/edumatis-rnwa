module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
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

/***/ "2JtO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ln6h");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Jkg");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("O40h");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("i9vu");





var get = __webpack_require__("LBIh");

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(client_id) {
    var username,
        password,
        query,
        response,
        res,
        _args = arguments;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            username = _args.length > 1 && _args[1] !== undefined ? _args[1] : "";
            password = _args.length > 2 && _args[2] !== undefined ? _args[2] : "";
            query = "query ($u: String!, $c: Int!) {\n    ".concat(_config__WEBPACK_IMPORTED_MODULE_3__["default"].table, "(where: {_and: {").concat(_config__WEBPACK_IMPORTED_MODULE_3__["default"].identifier.client_id, ": {_eq: $c}, ").concat(_config__WEBPACK_IMPORTED_MODULE_3__["default"].identifier.username, ": {_eq: $u}}}) {\n      sessions(limit: 1, order_by: {tstamp: desc}) {\n        id\n        ").concat(_config__WEBPACK_IMPORTED_MODULE_3__["default"].table, " {\n          ").concat(_config__WEBPACK_IMPORTED_MODULE_3__["default"].user.columns.join("\n"), "\n        }\n      }\n    }\n  }");
            _context.next = 5;
            return fetch(_config__WEBPACK_IMPORTED_MODULE_3__["default"].url, {
              method: "POST",
              body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
                query: query,
                variables: {
                  u: username,
                  c: client_id
                }
              }),
              headers: {
                "Content-Type": "application/json",
                "X-Hasura-Username": username,
                "X-Hasura-Password": password,
                "X-Hasura-Cid": client_id
              }
            });

          case 5:
            response = _context.sent;
            _context.next = 8;
            return response.json();

          case 8:
            res = _context.sent;
            return _context.abrupt("return", get(res, "data.".concat(_config__WEBPACK_IMPORTED_MODULE_3__["default"].table, "[0].sessions[0]")));

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})());

/***/ }),

/***/ "2ViZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zrwo");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nazx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("F62O");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ui_Style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("cjKJ");
/* harmony import */ var _NavContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("jrre");






var absoluteSideBar = {
  position: "absolute",
  left: 0,
  top: 0,
  bottom: 0,
  width: "30%",
  flexDirection: "row",
  alignItems: "stretch",
  zIndex: 99
};
var flexSideBar = {
  width: "30%",
  maxWidth: 280,
  flexDirection: "row",
  alignItems: "stretch"
};
var overlay = {
  position: "absolute",
  left: 0,
  top: 0,
  bottom: 0,
  right: 0,
  zIndex: 90
};
/* harmony default export */ __webpack_exports__["default"] = (function (data) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var isRoot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var Container = Object(_NavContainer__WEBPACK_IMPORTED_MODULE_5__["default"])(data);

  if (config.contentComponent) {
    var SideBar = config.contentComponent;
    return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["observer"])(function (props) {
      var ref = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])({});
      var obs = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useObservable"])({
        opened: false
      });
      Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(Object(_ui_Style__WEBPACK_IMPORTED_MODULE_4__["ResponsiveHandler"])(obs), []);
      Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
        if (ref.current) {
          ref.current.toggleDrawer = function () {
            obs.opened = !obs.opened;
          };

          ref.current.closeDrawer = function () {
            obs.opened = false;
          };
        }
      });
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_3__["View"], {
        style: {
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          flexDirection: "row",
          alignItems: "stretch"
        }
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_3__["View"], {
        style: Object(_ui_Style__WEBPACK_IMPORTED_MODULE_4__["Responsive"])({
          xs: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, absoluteSideBar, {
            minWidth: "50%"
          }, {
            transform: [{
              scale: obs.opened ? 1 : 0
            }]
          }),
          sm: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, absoluteSideBar, {
            minWidth: "50%"
          }, {
            transform: [{
              scale: obs.opened ? 1 : 0
            }]
          }),
          md: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, flexSideBar, {
            transform: [{
              scale: 1
            }]
          }),
          lg: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, flexSideBar, {
            transform: [{
              scale: 1
            }]
          }),
          xl: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, flexSideBar, {
            transform: [{
              scale: 1
            }]
          }),
          xxl: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, flexSideBar, {
            transform: [{
              scale: 1
            }]
          })
        }, obs.width)
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SideBar, {
        navigation: ref.current
      })), obs.opened && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_3__["TouchableOpacity"], {
        onPress: function onPress() {
          obs.opened = false;
        },
        style: Object(_ui_Style__WEBPACK_IMPORTED_MODULE_4__["Responsive"])({
          xs: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, overlay),
          sm: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, overlay),
          md: {},
          lg: {},
          xl: {},
          xxl: {}
        }, obs.width)
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, {
        ref: ref,
        parentNavigation: props.navigation
      }));
    });
  } else {
    return function () {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, null);
    };
  }
});

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("iUN1");


/***/ }),

/***/ "3T9C":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ln6h");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Jkg");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("6BQ9");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("O40h");
/* harmony import */ var _libs_queries_crud_createRecord__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("S4sK");
/* harmony import */ var _libs_queries_crud_updateRecord__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Wknr");
/* harmony import */ var _libs_queries_user_getsetSession__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("00yu");
/* harmony import */ var _libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("UoE3");
/* harmony import */ var _libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("X6mS");
/* harmony import */ var _libs_ui_UIWebView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("THqS");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("boVf");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("VBo9");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("nazx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("F62O");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_14__);















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
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
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
                  _context.next = 33;
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
                  description: data.form.nama_kewajiban,
                  amount: data.form.nominal
                };
                myHeaders = new Headers();
                myHeaders.append("pragma", "no-cache");
                myHeaders.append("cache-control", "no-cache");
                _context.next = 20;
                return fetch("https://backend.cap.edumatis.id/invoice", {
                  method: "POST",
                  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(params),
                  headers: myHeaders
                });

              case 20:
                response = _context.sent;

                if (!(response.status !== 200)) {
                  _context.next = 27;
                  break;
                }

                _context.next = 24;
                return response.json();

              case 24:
                _json = _context.sent;
                data.error = _json.message;
                return _context.abrupt("return");

              case 27:
                _context.next = 29;
                return response.json();

              case 29:
                json = _context.sent;
                _context.next = 32;
                return Object(_libs_queries_crud_updateRecord__WEBPACK_IMPORTED_MODULE_5__["default"])("transaksi", {
                  id: transaksi.id,
                  nominal: data.form.nominal,
                  detail: json
                });

              case 32:
                data.form.transaksi[0].detail = json;

              case 33:
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
    }
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_8__["default"], {
    navigation: navigation,
    title: "".concat(data.form.nama_kewajiban, " (").concat(data.form.status, ")"),
    onBack: function onBack() {
      navigation.goBack();
    }
  }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_14__["View"], {
    style: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    }
  }, data.error === "" && !transaksi.detail && react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_14__["Text"], null, "Membuat Invoice..."), data.error != "" && react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_14__["Text"], null, data.error), data.error === "" && transaksi.detail && !transaksi.paid && react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_14__["View"], {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_libs_ui_UIWebView__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      flex: 1
    },
    source: {
      html: "\n            <!DOCTYPE html>\n            <html>\n                <head>\n                <meta name=\"viewport\" content=\" initial-scale=1\">\n                </head> \n                <body>\n                <center style=\"margin:100px\">Memuat<br/> Instruksi Pembayaran...</center>\n                <iframe \n                style=\"position:absolute;left:0;right:0;bottom:0;top:0;\"\n                width=\"100%\" height=\"100%\" src=\"".concat(transaksi.detail.invoice_url, "\"  frameborder=\"0\"></iframe></div> \n            </body>\n            </html>")
    }
  }))));
}));

/***/ }),

/***/ "4PMO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ln6h");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("O40h");
/* harmony import */ var _libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("KCKa");
/* harmony import */ var _libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("PKMe");
/* harmony import */ var _libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("UoE3");
/* harmony import */ var _libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("T2vI");
/* harmony import */ var _libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("X6mS");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("nazx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("F62O");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _libs_queries_user_getsetSession__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("00yu");
/* harmony import */ var _libs_queries_crud_updateRecord__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("Wknr");
/* harmony import */ var _libs_queries_user_hashPassword__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("zmKm");













/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__["observer"])(function (_ref) {
  var navigation = _ref.navigation;
  var data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__["useObservable"])({
    new1: "",
    new2: "",
    old: "",
    loading: false
  });
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_6__["default"], {
    navigation: navigation,
    title: "Ubah Password"
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "password",
    label: "Password Lama",
    value: data.old,
    setValue: function setValue(value) {
      return data.old = value;
    }
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "password",
    label: "Password Baru",
    value: data.new1,
    setValue: function setValue(value) {
      return data.new1 = value;
    }
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "password",
    label: "Ulangi Password Baru",
    value: data.new2,
    setValue: function setValue(value) {
      return data.new2 = value;
    }
  }), data.loading ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_9__["Text"], null, "Loading...") : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onPress:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var a, session, response, res;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              a = react_native_web__WEBPACK_IMPORTED_MODULE_9__["Platform"].OS === "web" ? alert : react_native_web__WEBPACK_IMPORTED_MODULE_9__["Alert"].alert;
              _context.next = 3;
              return Object(_libs_queries_user_getsetSession__WEBPACK_IMPORTED_MODULE_10__["getSession"])();

            case 3:
              session = _context.sent;

              if (!(!data.new1 || !data.new2 || !data.old)) {
                _context.next = 7;
                break;
              }

              a("Mohon isi password dengan lengkap");
              return _context.abrupt("return", false);

            case 7:
              if (!(data.new1 !== data.new2)) {
                _context.next = 10;
                break;
              }

              a("Password tidak sama ");
              return _context.abrupt("return", false);

            case 10:
              data.loading = true;
              _context.next = 13;
              return fetch("https://backend.cap.edumatis.id", {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  "X-Hasura-Username": session.murid.nsa,
                  "X-Hasura-Password": data.old,
                  "X-Hasura-Cid": session.murid.sekolah_id + ""
                }
              });

            case 13:
              response = _context.sent;
              _context.next = 16;
              return response.json();

            case 16:
              res = _context.sent;
              console.log(res, {
                "Content-Type": "application/json",
                "X-Hasura-Username": session.murid.nsa,
                "X-Hasura-Password": data.old,
                "X-Hasura-Cid": session.murid.sekolah_id + ""
              });

              if (!(res["X-Hasura-Role"] !== "anonymous")) {
                _context.next = 26;
                break;
              }

              _context.next = 21;
              return Object(_libs_queries_crud_updateRecord__WEBPACK_IMPORTED_MODULE_11__["default"])("murid", {
                id: session.murid.id,
                password: data.new1
              });

            case 21:
              _context.next = 23;
              return Object(_libs_queries_user_hashPassword__WEBPACK_IMPORTED_MODULE_12__["hashPassword"])(session.murid.id);

            case 23:
              a("Password berhasil di-ubah!");
              _context.next = 27;
              break;

            case 26:
              a("Password lama salah");

            case 27:
              data.loading = false;

            case 28:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))
  }, "Ubah Password")));
}));

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

/***/ "596a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ln6h");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Jkg");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zrwo");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("O40h");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("F62O");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("i9vu");






/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(query, wsCallback, options) {
    var opt, headers, sessionRaw, session, ws;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            opt = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, {
              useSession: true,
              debug: false
            }, options);
            headers = {
              "Content-Type": "application/json"
            };

            if (!opt.useSession) {
              _context2.next = 12;
              break;
            }

            _context2.next = 5;
            return react_native_web__WEBPACK_IMPORTED_MODULE_4__["AsyncStorage"].getItem("SESSION");

          case 5:
            sessionRaw = _context2.sent;
            session = JSON.parse(sessionRaw || "false");

            if (session) {
              _context2.next = 11;
              break;
            }

            return _context2.abrupt("return", false);

          case 11:
            headers["X-Hasura-Session-Id"] = session.id;

          case 12:
            ws = new WebSocket(_config__WEBPACK_IMPORTED_MODULE_5__["default"].wsurl);
            ws.onopen =
            /*#__PURE__*/
            Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
            /*#__PURE__*/
            _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      ws.send(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
                        type: "connection_init",
                        payload: {
                          headers: headers
                        }
                      }));
                      ws.send(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
                        id: "1",
                        type: "start",
                        payload: {
                          variables: {},
                          extensions: {},
                          operationName: null,
                          query: query
                        }
                      }));

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            ws.onmessage = function (e) {
              try {
                var data = JSON.parse(e.data);

                if (data.type === "data" || data.type === "error") {
                  wsCallback(data);

                  if (data.type === "error") {
                    console.log(query, data);
                  }
                }
              } catch (err) {}
            };

            ws.onerror = function (e) {// an error occurred
            };

            ws.onclose = function (e) {// connection closed
            };

            return _context2.abrupt("return", ws);

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})());

/***/ }),

/***/ "6BQ9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

/***/ }),

/***/ "8bRm":
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
    var opt, pk, gql, headers, session, response, json;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            opt = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, {
              useSession: true,
              debug: false,
              primaryKey: "id"
            }, options);
            pk = typeof data[opt.primaryKey] === "string" ? "\"".concat(data[opt.primaryKey], "\"") : data[opt.primaryKey];
            gql = "mutation delete {\n    delete_".concat(table, "(\n      where: {").concat(opt.primaryKey, ": {_eq: ").concat(pk, "}},\n    ) {\n      affected_rows\n    }\n  }");
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
                operationName: "delete",
                query: gql
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
            return _context.abrupt("return", json);

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

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "F62O":
/***/ (function(module, exports) {

module.exports = require("react-native-web");

/***/ }),

/***/ "Fyvc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ln6h");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Jkg");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("O40h");
/* harmony import */ var _libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("XG+j");
/* harmony import */ var _libs_queries_user_getsetSession__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("00yu");
/* harmony import */ var _libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("KCKa");
/* harmony import */ var _libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("UoE3");
/* harmony import */ var _libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("X6mS");
/* harmony import */ var _libs_ui_UIList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("zHZ+");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("boVf");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("jYNn");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("nazx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("F62O");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_13__);














dayjs__WEBPACK_IMPORTED_MODULE_9___default.a.extend(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_10___default.a);
/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_11__["observer"])(function (_ref) {
  var navigation = _ref.navigation;
  var data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_11__["useObservable"])({
    loading: true,
    list: []
  });
  return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_7__["default"], {
    navigation: navigation,
    title: "Pengumuman"
  }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_libs_ui_UIList__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: data.list,
    loading: data.loading,
    render: function render(list) {
      var item = list.item;
      var date = dayjs__WEBPACK_IMPORTED_MODULE_9___default()(item.tgl).fromNow();
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_13__["View"], {
        style: {
          padding: 10,
          paddingHorizontal: 15
        }
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_13__["View"], null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_13__["Text"], {
        style: {
          fontSize: 15,
          fontWeight: "bold",
          color: "#555"
        }
      }, item.pengumuman), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_13__["Text"], null, date)));
    },
    reload:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var session, kelasRaw, kelas, result;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_libs_queries_user_getsetSession__WEBPACK_IMPORTED_MODULE_4__["getSession"])();

            case 2:
              session = _context.sent;
              _context.next = 5;
              return Object(_libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_3__["default"])("{\n              kelas_murid(where: {murid_id: {_eq: ".concat(session.murid.id, "}}) {\n                kelas_id\n              }\n            }"));

            case 5:
              kelasRaw = _context.sent;

              if (!(kelasRaw && kelasRaw.kelas_murid && kelasRaw.kelas_murid.length > 0)) {
                _context.next = 12;
                break;
              }

              kelas = kelasRaw.kelas_murid.map(function (k) {
                return k.kelas_id.toString();
              });
              _context.next = 10;
              return Object(_libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_3__["default"])("{\n                  pengumuman(where: {status: {_eq: \"aktif\"}, kelas: {_has_keys_any: ".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(kelas), "}}) {\n                    pengumuman\n                    status\n                    tgl\n                  }\n                }\n                "));

            case 10:
              result = _context.sent;
              data.list = result.pengumuman.map(function (item) {
                return item;
              });

            case 12:
              data.loading = false;

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))
  })));
}));

/***/ }),

/***/ "ILDJ":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAQAAABecRxxAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjBQwTNAkCpKU+AAAZbklEQVR42u3debxVZb3H8e+zmWUQRQaHVDTB65DiPBdyOL5UnHJKbw6vHLpOKXAVtZxSb3YrrV6l1bU0KctudlPIUFBwKNPMKTUBMRUUwSFkkJnf/eMAHs649l5rn99a+/m8/+HAWes5v2ezn+/5rbXXXlsCAAAAAAAAAAAAAAAAAADFFbwLQLFY0A7aU5/WFhqgPpKW6z3N0yy9oJfCx97VAagS28ROs9/Zh9aalfaoXW47edcJIGO2j/3KVlgyT9pZ1t27YgCZsMPtiYRL/xNv24XWzbtyAKlYnf2l7MW/ziyr964fQEUs2FH214oXf4M1dqf18p4JgDJZnT2dcvGv86rt7D0bAAlZsOPsuYwWf4OFNsJ7VgDaZcGOsmcyXfwNltvnvecGoA1WspPs71VY/A1W2GHeMwTQIivZUfZs1RZ/g4W2m/c8ATRhnexUe6XKi7/BW7ap92wBrGclO9H+0SGLv8G93jMGIEmyznaGzejAxd/gNO95A9Gzkp1o0zt88ZuZzbM+3rMHImZd7HSH3/yfuNH7EQAiZV3tHPun4+I3M/vYtvB+HIDoWFc73V5zXvwNvuv9WABRsa52us3yXvfrLaUHyI+SdwGoLutq52qWfq7tvCtZr7vGepcARMC62rk2x/sXfos9wObejw0a0AHUKOtm5+p1/VhbelfSgu4a7V0CGnBX4BpkG+kcXaY8H2kv0XZhvncRoAOoOdbTLtZr+m6ul7/UU2O8S4BEB1BTrKfO1uUa5F1HIks0OLznXQToAGqE9Vr7m78Yy1/qqUu8SwAdQE2wXrpAl6lob7ZdrMHhfe8iYkcHUHDW28bpTd1UuOUv9dJXvEsAHUCBWW+dr3HaxLuOii3UtuFf3kXEjQ6goKyPjdNbuqnAy1/qo4u9S4gdHUABWT9dpIvV17uODHykbcMC7yJiRgdQMNbPrtUsXVMTy1/aWBd5lxA3OoACsc10oS7Rxt51ZGqBBtMD+KEDKAjrv/Y3f20tf6mvzvcuIWZ0AAVg/TVWF2kj7zqq5AMNDou8i4gVHUDO2QC7SW9oXM0uf6mfLvAuIV50ADlmAzRGX1EP7zqqjh7ADR1ATtmn7Ht6Q+MiWP5SP/2Hdwmx6uxdAJqzrXWFvqSu3nV0iI/1mCbrD95lxIpDgJyxrTVW56q7dx0d4HVN0URNDsv8SrCe2kSbahN10TIt1Oz4LkwmAHLEttEYfVndvOuosvl6VFP0h/C2VwHWRftpH+2lvbV9k299pBf1jB7T5LDE+VHqIARATti2Gl3ji3+p/qQpmqJng3mVYEM1UvUarl7tbLhck3WHJoYVXpV2FAIgB2ywLteXavh8jHuzb5tqhEaqXtuUtdu7ulk/qu3XJwgAZzW9+P2b/c7aX/Uaqb3UqcIh3tNVuj2s9ppBtREAjmw7javJxZ+HZn8H1WukDlXvDAb7m04Pr3jNpLoIACe2ky7XqRX/Xsor/2a/79pmf3Cmwy7T2HCr15yqiQBwYDtrXI0t/oZm/4Ewx6sA66TdVac6fVZdqvQjbtcFtXdSkADoYLaLLquhxZ+HZn871alOdR1wb6SpOjos9ppndRAAHch21aX69xq5/Pp1TdEUTfI7R24b61DVa2Sz1/KraZqOCEu9ZlwNBEAHsV11lU6ogcf7PU3LSbN/iMvF0hN1bC29JlD8J2QB2Gf0tcIv/mV6wr3ZH6x61etQ59uhfTtc6vrzM1XsJ2UB2G76asEXv3+z31P7q0512tP7oWgoR8eF+7yLyEqRn5i5Z/vpqzqysI9xHpr9vVSveu2Xs2sl3tdOtfK5hkV9cuae7a8rNcq7iorkodnfRvWq14jcfurBXeEM7xKyQQBUgR2gKwq5+P2b/d4arpGq1xDvh6K9QnVgeNK7iCwQABmzA3V54RZ/Q7P/xzDbqwAraZjqVKeDC/N+yIdDnXcJWSAAMmQHaVyhFv8qPaUJmqLnwhqvEmwb1WukRhTww00PDH/2LiG9fJ1cKTA7SNdqhHcVifk3+xvpgByd2a/EBaqBAKADyIAdpOt0qHcVifg3+520p+o1UvtX7Zr9jrJcW4YPvItIiw4gJTtIX9dw7yralYdmf5AO1lE6soDNfsu66Wjd4V1EWnQAKVidbtC+3lW0w7/Z76XhqtdIDfV+KDI3IRztXUJaBECFrE43ah/vKtrwvqZyZr/KPtamYbl3EekQABWwOv2X9vauohWr9IImakIOmv0j1M/7wai6EeER7xLS4RxAWSxolK7WXt51tKih2X8wLPQqYP2Z/T2i+cUyUgUPgFj+ozJgQaN0TQ5ftmpo9ieFt7wKiKDZb82zIX/Ph7IQAIlY0Chdqz2869hAXpr9Oh2lzb0fDK8HQIPCfO8i0uAQoF1W0pG6TsO862iEZj8vgup0t3cRaRAAbbKSjtTXtbt3HWvR7OfPyGIHQNz53SYr6Xh9XTt61yGa/Tx7W5/ye9t0egRAi6yk43V9Di5dodnPv13Cy94lVI5DgGaspON1g/M70mn2i6NeBQ4AUn0D1kWn6Gvawa2AVXpBUzRRf6bZL4w/hiO8S6gcAbCe8+Kn2S+qQl8QzH+1pLWL/yp92uFHNzT7D4Y33eZOs59WgS8I5hyArKu+oKs79PNlpHw0+wN1CM1+Bgp8QXDkHYB11Zm6Slt16A9taPYfCh+5zZpmP1sFviA44idAhy/+D/QIzX5NKvAFwZEeAlg3naGrtWWH/LCGZn+KpoVVbvNtaPZHaQuvCmpagS8IjjAAbCOdo8s6ZCnQ7MeisBcER/a0sJ46W+OqftLLvdmXbGeNotnvMIW9IDiiALCeOluXa1AVf8RqPU+zH6mCXhAcySGA9dJZVV38NPuxK+gFwRE8WayXztIVGliVwWn20aCgFwTXeABYb52vy6pwJ3qafWyooBcE13AAWG+dr3GZf8A0zT5aVsgLgmv0HID10XkZL/7FmqYJeii84Tgrmv08K+QFwTX4O8T66SJdrL4ZDbeu2X80rHSbEc1+ERTyguAaCwDrp4t0iTbOZDCafZSjkBcE19AhgG2mCzNZ/DT7qEQhLwiukQCwzXShRqtPqkFo9pFOAS8IroHW0vprrC7SRimGaGj2J4cFbnPooQNp9guvgBcEF/zpZgM0JsXiz0Ozv52O0igdpO5+NSAzhbsguMCHADZAY/QV9ahgV5p9VEfhLgguaABYF31RZ6ubXilzx9X6qx7S1LDIsfaBGqmR2lmSNFdz/SpB5jrmDhMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAakXFdwW2XuriXTxQU5aEFR39I8sIANtCw7WrdtUQ9VPfot9QHMihlfpIb2i6Xtbjeqoj7lmdaBnbDjpNR2oYix7oMEv0sMZrYlhWzR/SzpK2oMN1kepV8n40gCgt0I91S5hXreHbDAA7QN/Rft6PABC5pbpN14WF1Ri61QCwfvqBTqbpB3JhrsaEX2c/bCsL3IZrPJ9yAuTKvTorfJTtkC0e29sVmsLyB3LmeD1lQ7IdslkHYJ30fZ3vPVMALfpQo8KT2Q3XJACspF/oFO85AmjVYh0enshqsKaHAN9h+QO51ksTbbesBtugA7Cx+rb37AC0623tmc21AY0CwA7UNHX2nhmABKZqZFidfpj1hwDWV79g+QMFMVzjshhmfQdgP9a53nMCkNgy7RpeSzvI2gCw3fWMOnnPCEAZHgqHpR1i3SHALSx/oGDqbXjaIUqSZAfoc95zAVC2K9MO0NABjPaeB4AK1Nme6QYoSbaljvOeB4CKnJlu95Kk4zn+BwrqZEt1b86SpM97zwFAhfrrkDS7l6yXDvKeA4CKpXoloKRhHAAABZYyAPbxrh9ACsMsxS17S0r5MgIAVz3S3L2rpK296weQSorbhJW0mXf1AFLpV/muJW3qXT2AVHpVvmtJm3hXDyCV3pXvWuImIEDBpXghn8/8AyJGAAARIwCAiBEAQMQIACBiBAAQMQIAiBgBAESMAAAiRgAAESMAgIgRAEDECAAgYgQAEDECAIgYAQBEjAAAIkYAABEjAICIEQBAxAgAIGIEABAxAgCIGAEARIwAACJGAAARIwCAiBEAQMQIACBiBAAQMQIAiBgBAESMAAAiRgAAESMAgIgRAEDECAAgYgQAEDECAIgYAQBEjAAAIkYAABEjAICIEQBAxAgAIGIEABAxAgCIGAEARIwAACJGAAARIwCAiBEAQMQIACBiBAAQMQIAiBgBAESMAAAiRgAAESMAgIgRAEDECAAgYgQAEDECAIgYAQBEjAAAIkYAABEjAICIEQBAxAgAIGIEABAxAgCIGAEARIwAACJGAAARIwCAiBEAQMQIACBinb0LQE2br1f0qt7Qu5qvhVrmXU6NmlP5rgQAsrdCT2uqpun58KF3KWgbAYAsLdLvdY+mho+9C0EyBACyYfqj7tTEsNS7EJSDAEB6K3SPvhle9i4D5SMAkM4K3aqbwjzvMlAZAgBpTNTo8Jp3EagcAYBKzdDZ4XHvIpAOFwKhEqafaA+Wf/HRAaB8s/XF8Jh3EcgCAYByPa6TwrveRSAbHAKgPD/RCJZ/7aADQHKmi8IPvYtAlggAJLVa54afeReBbBEASGaFvhj+17sIZI1zAEjCdA7LvxYRAEhiXLjLuwRUQzDzLgG596NwnncJqA4CAO35g44Oa7yLQHUQAGjb29o9vO9dBKqFVwHQljU6Pe3yt6HaR0M1VAPVU329J1SzluhjzdY/9bKe1vTkHRsBgLbcEB6pdFfrrMN0kuq0hfckorHv2j8/sEm6X/eF5e3vwiEAWveC9gqrKtnRBmm0ztBA7wlE7X39XLeFWW1vRACgNabh4dEKdhugq3WWunuXD0kr9TNdH95ufQOuA0Brxpe//K1k5+lVXcDyz4ku+rJm2jjr1NoGdABo2SINDXPL28W20N36rHfhaMFTOjO82tI36ADQsm+Xvfzr9DzLP6f21VN2ZEvfoANAS5Zom/BBOTvYqbpTXbzLRhtW69JwS9N/pANAS24rc/mfp/Es/5zrpJvtiqb/SAeA5pZr+7bOHDdlp2o8v0oK4rLwrcZ/5b8Nzd1T1vKv0508jwrjm3Zc47/SAaC5uvBw0k1toJ7XIO+CUYbF2j+8tO4vBACaekdbh9XJNrVOepgz/4XzkvYMKxq+pHVDU79Muvwl/QfLv4B20ZXrvqQDQFPDwvPJNrSBepX39xXSCu3WcGEQHQA2NFcvJN72GpZ/QXXVtQ1fEADY0LSQsCe0QTrTu1hU7CTbTSIA0NS0xFuOUQ/vYlGxoLES5wDQ1JAwM8lm1llzeL9/oS3VluFfdABo7L1ky1/S4Sz/guuhL3AIgA29mnjLk71LRWrHEQDY0Ixkm1nQCO9SkdrB1oMAQGMJA0A7cvlvDeiugwkANDY94Xb7eBeKTAwjANDYOwm329G7UGTi3wgANLYw4XZDvQtFJggAbGBxwu04A1Ab+hMAaGxRwu16exeKTPQhAPAJ05KEW/b0LhWZIADQyOrEdwLgBqC1oQsBAESMAAAiRgAAESMAgIgRAEDECAAgYgQAEDECAIgYAQBEjAAAIkYAABEjAICIdfYuACjTPL2p+Vra7N9LGqjNtaW6exdYJAQAiuPvul0PhjbvW2jdNULH6CRt7F1sMfDJQPjEqpDwbb42W1t1cG0v6VI9mPhzC/vpSl2gbh1cYwFxDgD5t1o3aM8wKenyl8IHYax2T3yT84gRAMi7JTo2XBVWlLtbeFX76iHv4vOOAEC+rdAJYWJlu4YFOkZ/8Z5AvhEAyLcxYVLlO4dlOk5zvKeQZwQA8myybk03QHhXF3pPIs8IAOTXGo1JfuKvNeE+PeE9kfwiAJBfk8JLmYxzjfdE8osAQH7dkdE4j2q+91TyigBAXq3K6kW8sFoTvCeTVwQA8mp6SPpRpe2b5j2ZvCIAkFdZXsc303syeUUAIK/+ldOxagoBgLxanuFYy7wnk1cEABAxAgCIGAEARIwAACJGAAARIwCAiBEAQMQIACBiBADyqlOGYwXvyeQVAYC86p/hWL28J5NXBADyavOcjlVTCADk1baWXeO+i/dk8ooAQF4N0rDMxhrlPZm8IgCQX8dkM4z11cHeU8krAgD5dbp1zWScM5TNODWIAEB+bavz0w9ivXWl90TyiwBAnn3VNks9xlUa4D2N/CIAkGeb6f/SHQbYsRrrPYk8IwCQbwfph5W/HGi7azzP8bbw4CDvztZvrGclO9rhmsY1gG0jAJB/J+gJ26O8XWwju14TtbF36XlHAKAIdtcz9ksbkmxj62HnaKa+xrO7fcFSf/oqasaq0CXZhjZbW7lU+Hfdr0f1uj5s8bvdtJU+oyN1mCo6ZIgRAYBP5D8AkDGaJCBiBAAQMQIAiBgBAESMAAAiRgAAESMAgIgRAEDECAAgYgQAEDECAIgYAYBPdLbOCbdc7l0qMrGUAEBjSd9Ft8i7UGRiIQGAxnon3G6hd6HIxCICAI0lvYHWW96FIhNvEQBorE/C7aZ7F4pM/IMAQGNbJtzuH96FIhMEADawY8LtHhd3kqoFTxIAaGxoss3CfL3iXSpSe1/PEwBoLGEASHrQu1SkNjmsIQDQ2NDEn8Jzt3epSO1X3BUYTe0cEjb39qJ29S4WKbyrrcNKOgBsaHjiLW/zLhWp/DSspANAU/eGE5JtaN30urbwLhcVWqztw3zeDISmhlvC50RYrv/2LhYV+26YL9EBoLl9w9PJNrQuela7eJeLCszVTmGBRAeA5k5NumFYqQu4IKiQzm9Y/gQAmjvVEn5CoBQe0y3e5aJs94Tfr/uSQwA0d3SYkHRT66JpOsC7YJRhuvYNH637Cx0Amjst+aZhpU7WbO+CkdgCHfXJ8qcDQEtWakh4I/nmtoOe0ADvopHAEo0K0xr/Ax0Amuui/yxn8zBTR2i+d9Fo1xIdvuHypwNAy5Zp+/BOOTvYDnpQg73LRhvm6tjmL/DSAaAl3TW6vB3CTO3LOwRz7Bnt3dL1HQQAWnaefaq8HcJ7OkJXcsPwHFqlb+ig8HZL3+IQAK35bTix/J1siH6gkd6lo5FndV7r13bSAaA1J9iR5e8UZoR6jdKT3sVDkjRDJ2uvti7tpgNA62Zpl7Cssl3tczpbx2kj7ylEa5Um6H/0YFjT9mYEANryrXBZ5Ttbb43SCB3KqwMdarb+pAc0KbyXZGMCAG0xHRvuTz1Ifw3VjhqgPtqYg84q+UhLNVv/1Cthbjm7EQBo24faI7zpXQSqhTxG2zbVr5O/OxBFQwCgPfvpp4nvFYyCIQDQvtN0vXcJqA7OASCZMYFbf9QgAgDJrNGXws+9i0DWOARAMiXdYSmuCUA+0QGgHN/X6PauLUOREAAoz136cqWXByN/CACU6zmdHGZ6F4FscA4A5Rqmv9kp3kUgGwQAytdbd9vttol3GUiPAEBlztJrdnHSzxFEXnEOAGk8rgvDi95FoHIkONI4WM/ZBNvbuwxUig4A6Zke0I2B24AVEAGArLyiu3RXebejgDcCAFlarYf0G00Jc7wLQTIEAKphhqbqET2jN7hwON8IAFTTcs3QdM3QPC3WIn2kxXxwSBXMCfMq3ZUAAIpubLi50l15GRCIGAEARIwAACJGAAARIwCAiBEAQMQIACBiBAAQMQIAiBgBAESMAAAiRgAAESMAgIgRAEDECAAgYgQAEDECAIgYAQBEjAAAIkYAABEjAICIEQBAxAgAIGIEABAxAgCIGAEARIwAACJGAAARIwCAiBEAQMQIACBiBAAQMQIAiBgBAESMAAAiRgAAESMAgIgRAEDECAAgYgQAEDECAIgYAQBEjAAAIkYAABEjAICIEQBAxAgAIGIEABAxAgCIGAEARIwAACJGAAARIwCAiBEAQMQIACBiBAAQMQIAiBgBAESMAAAiRgAAESMAgIgRAEDECAAgYgQAEDECAIgYAQBEjAAAIkYAABEjAICIEQBAxAgAIGIEABAxAgCIGAEARIwAACJGAAARIwCAiBEAQMQIACBiJa3wLgFAKssq37Wkxd7VA0hlUeW7lrTQu3oAqaQKgLe9qweQypzKdy1punf1AFKZUfmuJb3qXT2AFN4JKQ7jS3rSu34AKfw5zc4lPcXrAECBTU2zcyms1KPeMwBQsclpdi5J+rX3DABU6K9hZprdS5J+l+Z1RACOxqfbvSSFj9MOAsDFYt2dboCGNwN9k3cEAAV0a/gg3QAlSQpv6RfeMwFQpiW6Je0Q694OfKUWeM8GQFluDO+mHWJtAIR5utZ7NgDKMFM3px8krPvCOmmKPuc9JwCJrNQh4S/ph1l/R6CwWl9Q6oYCQIe4Iovlv8EtwcI8naLl3vMC0K57smj/pUaHAA3sGN2rTt6zA9CGqTo8ZPSruslNQcN9OkervecHoFWP6disln+zDkCS7Cjdox7eswTQgvt0Slia3XAt3BY8TNBwvek9TwBNrNE3dHyWy7/FDkCSbFP9VMd6zxfAevN1RpiU9aCtfDBI+DAcp6PpA4BcWKPx2jn75d9qB9DAeuoSXaLNvGcPRMw0QdeFZ6szeGhvA+ups3WWdvV+FIAILdRv9b3wYvV+QLsB0MB204k6VHurs/cjAkRhjh7RA7o/21N+zSUMgAbWW7tpRw1Rf/VSX8cHB6hFy7RYH+oNTdfLYZZ3MQAAAAAAAAAAAAAAAAAAIP/+H3mJoe4c51n6AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTA1LTEyVDE3OjUyOjA5KzAyOjAwQNFonAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wNS0xMlQxNzo1MjowOSswMjowMDGM0CAAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"

/***/ }),

/***/ "Ifud":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-e5a3875dcd16de72402c50b9a6f5bf8b.png";

/***/ }),

/***/ "J3/a":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

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

/***/ "P/gU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootStore", function() { return RootStore; });
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("YeEv");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("eGju");


var Root = mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].model("RootStore", {
  session: _Session__WEBPACK_IMPORTED_MODULE_1__["SessionRecord"]
});
var RootStore = Root.create({
  session: {
    user: {}
  }
});

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
    var opt, gql, headers, session, postData, i, response, json;
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
            postData = {};
            _context.t0 = _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.keys(data);

          case 13:
            if ((_context.t1 = _context.t0()).done) {
              _context.next = 20;
              break;
            }

            i = _context.t1.value;

            if (!i.endsWith("_aggregate")) {
              _context.next = 17;
              break;
            }

            return _context.abrupt("continue", 13);

          case 17:
            postData[i] = data[i];
            _context.next = 13;
            break;

          case 20:
            _context.next = 22;
            return fetch(_config__WEBPACK_IMPORTED_MODULE_4__["default"].url, {
              method: "POST",
              body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
                operationName: "create",
                query: gql,
                variables: {
                  data: postData
                }
              }),
              headers: headers
            });

          case 22:
            response = _context.sent;
            _context.next = 25;
            return response.json();

          case 25:
            json = _context.sent;

            if (!(response.status !== 200)) {
              _context.next = 30;
              break;
            }

            if (!(json && json.errors && json.errors[0] && json.errors[0].message)) {
              _context.next = 29;
              break;
            }

            throw "\n(Create Record Failed) ".concat(json.errors[0].message, " \n\nGraphQL Mutation:\n").concat(gql, "\n\nData: \n").concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(data, null, 2).replace(/"/gi, "'"), "\n        ").trim();

          case 29:
            return _context.abrupt("return", null);

          case 30:
            return _context.abrupt("return", json.data["insert_".concat(table)].returning[0].id);

          case 31:
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

/***/ "TBri":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("p0XB");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vYYK");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ln6h");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("pLtp");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("9Jkg");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("zrwo");
/* harmony import */ var _queries_crud_createRecord__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("S4sK");
/* harmony import */ var _queries_crud_deleteRecord__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("8bRm");
/* harmony import */ var _queries_crud_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("o6H3");
/* harmony import */ var _queries_crud_updateRecord__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("Wknr");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("YeEv");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_10__);












/* harmony default export */ __webpack_exports__["default"] = (function (opt) {
  var primaryKey = !opt.primaryKey ? "id" : opt.primaryKey;
  var columns = {};

  for (var i in opt.columns) {
    var c = opt.columns[i];

    if (typeof c !== typeof mobx_state_tree__WEBPACK_IMPORTED_MODULE_10__["types"].maybeNull) {
      columns[i] = mobx_state_tree__WEBPACK_IMPORTED_MODULE_10__["types"].maybeNull(c);
    } else {
      columns[i] = c;
    }
  }

  var recordResult = mobx_state_tree__WEBPACK_IMPORTED_MODULE_10__["types"].model(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])({}, columns, {
    _meta: mobx_state_tree__WEBPACK_IMPORTED_MODULE_10__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_10__["types"].string, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4___default()({
      primaryKey: primaryKey,
      tableName: opt.tableName
    })),
    loading: mobx_state_tree__WEBPACK_IMPORTED_MODULE_10__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_10__["types"].boolean, false),
    errors: mobx_state_tree__WEBPACK_IMPORTED_MODULE_10__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_10__["types"].array(mobx_state_tree__WEBPACK_IMPORTED_MODULE_10__["types"].string), []),
    isSaved: mobx_state_tree__WEBPACK_IMPORTED_MODULE_10__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_10__["types"].boolean, false)
  })).views(function (self) {
    return {
      get isNewRecord() {
        return !self[primaryKey];
      },

      get rawData() {
        var col = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(opt.columns);

        var result = {};
        col.forEach(function (key) {
          if (self[key] !== null) {
            result[key] = self[key];
          }
        });
        return result;
      }

    };
  }).actions(function (self) {
    var actions = {};

    if (opt.actions) {
      actions = opt.actions(self);
    }

    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])({}, actions, {
      set: function set(key, value) {
        if (typeof key === "string") {
          self[key] = value;

          if (self[key] !== value) {
            self.isSaved = false;
          }
        } else {
          for (var _i in key) {
            self[_i] = key[_i];
          }

          self.isSaved = false;
        }
      },
      save: Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_10__["flow"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
        var id;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                self.validate();

                if (!(self.errors.length === 0)) {
                  _context.next = 13;
                  break;
                }

                if (!self.isNewRecord) {
                  _context.next = 11;
                  break;
                }

                self.set("loading", true);
                _context.next = 6;
                return Object(_queries_crud_createRecord__WEBPACK_IMPORTED_MODULE_6__["default"])(opt.tableName, self.rawData, {
                  primaryKey: primaryKey
                });

              case 6:
                id = _context.sent;

                if (id) {
                  self.set(primaryKey, id);
                  self.set("isSaved", true);
                }

                self.set("loading", false);
                _context.next = 13;
                break;

              case 11:
                _context.next = 13;
                return Object(_queries_crud_updateRecord__WEBPACK_IMPORTED_MODULE_9__["default"])(opt.tableName, self.rawData, {
                  primaryKey: primaryKey
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })),
      validate: function validate() {
        if (opt.validations) {
          var validations = opt.validations;
          var errors = [];

          _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(validations).forEach(function (key) {
            if (validations[key] === "required") {
              if (self[key] === undefined || self[key] === null || self[key] === "") {
                errors.push("".concat(key, " is required."));
              }
            }
          });

          self.errors = errors;
        }
      },
      load: Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_10__["flow"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (self.isNewRecord) {
                  _context2.next = 3;
                  break;
                }

                _context2.next = 3;
                return self.find(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, primaryKey, self[primaryKey]));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      })),
      find: Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_10__["flow"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(where, findopt) {
        var _columns, record, _c, _value;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                self.set("loading", true);
                _context3.prev = 1;
                _columns = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(opt.columns).map(function (c) {
                  if (Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_10__["isLateType"])(opt.columns[c]) || Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_10__["isUnionType"])(opt.columns[c])) {
                    var _query = "";
                    var col = opt.columns[c];
                    if (col._subType) _query = col._subType.properties.query._defaultValue;

                    if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(col._types)) {
                      col._types.forEach(function (e) {
                        if (Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_10__["isLateType"])(e)) {
                          if (e._subType) {
                            _query = "{ ".concat(e._subType.columns.join("\n"), " }");
                          }
                        }
                      });
                    }

                    if (findopt && findopt.query && findopt.query[c]) {
                      _query = findopt.query[c];
                    }

                    if (_query) {
                      return "".concat(c, " ").concat(_query);
                    } else {
                      return "";
                    }
                  }

                  return c;
                });
                _context3.next = 5;
                return Object(_queries_crud_query__WEBPACK_IMPORTED_MODULE_8__["default"])(opt.tableName, _columns, {
                  where: where
                });

              case 5:
                record = _context3.sent;

                for (_c in record) {
                  _value = record[_c];

                  if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(_value) && Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_10__["isLateType"])(opt.columns[_c])) {
                    self.set(_c, {
                      list: _value,
                      loading: false
                    });
                  } else {
                    self.set(_c, _value);
                  }
                }

                self.set("isSaved", true);
                self.set("loading", false);
                _context3.next = 15;
                break;

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](1);
                self.set("loading", false);
                console.warn(_context3.t0);

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 11]]);
      })),
      delete: Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_10__["flow"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4() {
        var row;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return Object(_queries_crud_deleteRecord__WEBPACK_IMPORTED_MODULE_7__["default"])(opt.tableName, self.rawData, {
                  primaryKey: primaryKey
                });

              case 3:
                row = _context4.sent;

                _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(opt.columns).forEach(function (c) {
                  if (self[c] !== null) {
                    self.set(c, null);
                  }
                });

                _context4.next = 9;
                break;

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 7]]);
      }))
    });
  });
  recordResult.columns = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(columns);
  return recordResult;
});

/***/ }),

/***/ "THqS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kOwS");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props, {
    dangerouslySetInnerHTML: {
      __html: props.source.html
    }
  }));
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
    var opt, postData, i, gql, headers, session, response, json;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            opt = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, {
              useSession: true,
              debug: false,
              primaryKey: "id"
            }, options);
            postData = {};
            _context.t0 = _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.keys(data);

          case 3:
            if ((_context.t1 = _context.t0()).done) {
              _context.next = 10;
              break;
            }

            i = _context.t1.value;

            if (!(i === opt.primaryKey || i.endsWith("_aggregate"))) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("continue", 3);

          case 7:
            postData[i] = data[i];
            _context.next = 3;
            break;

          case 10:
            gql = "mutation update($data:".concat(table, "_set_input!) {\n    update_").concat(table, "(\n      where: {").concat(opt.primaryKey, ": {_eq: \"").concat(data[opt.primaryKey], "\"}},\n      _set: $data\n    ) {\n      returning {\n        ").concat(opt.primaryKey, "\n      }\n    }\n  }");

            if (opt && opt.debug) {
              console.log(gql, data);
            }

            headers = {
              "Content-Type": "application/json"
            };

            if (!opt.useSession) {
              _context.next = 20;
              break;
            }

            _context.next = 16;
            return Object(_user_checkSession__WEBPACK_IMPORTED_MODULE_5__["checkSession"])();

          case 16:
            session = _context.sent;
            headers["X-Hasura-Session-Id"] = session.id;

            if (session) {
              _context.next = 20;
              break;
            }

            return _context.abrupt("return", false);

          case 20:
            _context.next = 22;
            return fetch(_config__WEBPACK_IMPORTED_MODULE_4__["default"].url, {
              method: "POST",
              body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
                operationName: "update",
                query: gql,
                variables: {
                  data: postData
                }
              }),
              headers: headers
            });

          case 22:
            response = _context.sent;
            _context.next = 25;
            return response.json();

          case 25:
            json = _context.sent;

            if (!(response.status !== 200)) {
              _context.next = 30;
              break;
            }

            if (!(json && json.errors && json.errors[0] && json.errors[0].message)) {
              _context.next = 29;
              break;
            }

            throw "\n(Update Record Failed) ".concat(json.errors[0].message, " \n\nGraphQL Mutation:\n").concat(gql, "\n\nData: \n").concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(data, null, 2).replace(/"/gi, "'"), "\n        ").trim();

          case 29:
            return _context.abrupt("return", null);

          case 30:
            return _context.abrupt("return", json);

          case 31:
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zrwo");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("F62O");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UIImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("mHYl");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("nazx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cjKJ");






/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__["observer"])(function (_ref) {
  var title = _ref.title,
      children = _ref.children,
      onBack = _ref.onBack,
      navigation = _ref.navigation;
  var obs = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__["useObservable"])({});
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(Object(_Style__WEBPACK_IMPORTED_MODULE_5__["ResponsiveHandler"])(obs), []);
  var sideBtnStyle = {};
  var viewStyle = {
    paddingVertical: 15,
    paddingHorizontal: 25,
    flexBasis: 75,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_2__["View"], {
    style: Object(_Style__WEBPACK_IMPORTED_MODULE_5__["Responsive"])({
      xs: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, viewStyle, {
        paddingRight: 0
      }),
      sm: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, viewStyle, {
        paddingRight: 0
      }),
      md: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, viewStyle),
      lg: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, viewStyle),
      xl: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, viewStyle),
      xxl: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, viewStyle)
    }, obs.width)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_2__["View"], {
    style: {
      flexDirection: "row",
      alignItems: "center"
    }
  }, navigation && !onBack && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_2__["TouchableOpacity"], {
    style: Object(_Style__WEBPACK_IMPORTED_MODULE_5__["Responsive"])({
      xs: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, sideBtnStyle),
      sm: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, sideBtnStyle),
      md: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, sideBtnStyle, {
        display: "none"
      }),
      lg: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, sideBtnStyle, {
        display: "none"
      }),
      xl: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, sideBtnStyle, {
        display: "none"
      }),
      xxl: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, sideBtnStyle, {
        display: "none"
      })
    }, obs.width),
    onPress: function onPress() {
      if (navigation.toggleDrawer) {
        navigation.toggleDrawer();
      } else {
        var parent = navigation.dangerouslyGetParent();

        if (parent.toggleDrawer) {
          parent.toggleDrawer();
        }
      }
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UIImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      width: 20,
      height: 20,
      marginLeft: -5,
      marginRight: 20
    },
    source: __webpack_require__("bedh")
  })), onBack && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_2__["TouchableOpacity"], {
    style: {
      width: 20,
      height: 20,
      marginLeft: -10,
      marginRight: 10,
      marginTop: 3
    },
    onPress: onBack
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UIImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      width: 20,
      height: 20
    },
    source: __webpack_require__("ia3M")
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    style: {
      fontSize: 22,
      color: "#555",
      flex: 1,
      flexWrap: "wrap"
    }
  }, (title || "").trim())), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_2__["View"], null, children));
}));

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



var width = react_native_web__WEBPACK_IMPORTED_MODULE_2__["Dimensions"].get("window").width;
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var style = width >= 568 ? {
    paddingHorizontal: 15
  } : {
    paddingHorizontal: 10
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_2__["View"], {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, style, props.style, {
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

/***/ "YeEv":
/***/ (function(module, exports) {

module.exports = require("mobx-state-tree");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "bedh":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "bff9":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/pengumuman-a2ff39c764984d7902649e2c479ca11a.png";

/***/ }),

/***/ "boVf":
/***/ (function(module, exports) {

module.exports = require("dayjs");

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

/***/ "eGju":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionRecord", function() { return SessionRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionList", function() { return SessionList; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ln6h");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Jkg");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _libs_queries_user_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2JtO");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YeEv");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _libs_utils_AsyncStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("vRpb");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("s6dw");
/* harmony import */ var _libs_utils_List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("mA08");
/* harmony import */ var _libs_utils_Record__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("TBri");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("i9vu");









var SessionRecord = Object(_libs_utils_Record__WEBPACK_IMPORTED_MODULE_7__["default"])({
  tableName: "session",
  columns: {
    id: mobx_state_tree__WEBPACK_IMPORTED_MODULE_3__["types"].maybe(mobx_state_tree__WEBPACK_IMPORTED_MODULE_3__["types"].string),
    client_id: mobx_state_tree__WEBPACK_IMPORTED_MODULE_3__["types"].maybe(mobx_state_tree__WEBPACK_IMPORTED_MODULE_3__["types"].integer),
    user: _User__WEBPACK_IMPORTED_MODULE_5__["UserRecord"]
  },
  actions: function actions(self) {
    return {
      login: Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_3__["flow"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(client_id, username, password) {
        var response;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_libs_queries_user_login__WEBPACK_IMPORTED_MODULE_2__["default"])(client_id, username, password);

              case 3:
                response = _context.sent;
                _context.next = 6;
                return _libs_utils_AsyncStorage__WEBPACK_IMPORTED_MODULE_4__["default"].setItem("SESSION", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(response));

              case 6:
                return _context.abrupt("return", response);

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                console.warn(_context.t0);
                return _context.abrupt("return", false);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      })),
      restore: function restore(session) {
        self.id = session.id;
        self[_config__WEBPACK_IMPORTED_MODULE_8__["default"].table + "_id"] = session[_config__WEBPACK_IMPORTED_MODULE_8__["default"].table + "_id"];
        self[_config__WEBPACK_IMPORTED_MODULE_8__["default"].table] = session[_config__WEBPACK_IMPORTED_MODULE_8__["default"].table];
      },
      logout: Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_3__["flow"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _libs_utils_AsyncStorage__WEBPACK_IMPORTED_MODULE_4__["default"].removeItem("SESSION");

              case 2:
                self.id = null;
                self[_config__WEBPACK_IMPORTED_MODULE_8__["default"].table + "_id"] = null;
                self[_config__WEBPACK_IMPORTED_MODULE_8__["default"].table] = null;

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))
    };
  }
});
var SessionList = Object(_libs_utils_List__WEBPACK_IMPORTED_MODULE_6__["default"])({
  record: SessionRecord,
  query: "{\n    id\n    user_id\n  }"
});

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
    columns: ["id", "nisn", "nsa", "nama_murid", "password", "email", "sekolah_id"]
  },
  color: {
    main: "#613EEA",
    mainText: "#FFFFFF"
  }
});

/***/ }),

/***/ "iUN1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Kewajiban_Kewajiban__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("uHlg");
/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ld26");
/* harmony import */ var _libs_nav_SideNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2ViZ");
/* harmony import */ var _Pengumuman_Pengumuman__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Fyvc");
/* harmony import */ var _UbahPassword__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4PMO");





/* harmony default export */ __webpack_exports__["default"] = (Object(_libs_nav_SideNav__WEBPACK_IMPORTED_MODULE_2__["default"])({
  Kewajiban: {
    screen: _Kewajiban_Kewajiban__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  Pengumuman: {
    screen: _Pengumuman_Pengumuman__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  UbahPassword: {
    screen: _UbahPassword__WEBPACK_IMPORTED_MODULE_4__["default"]
  }
}, {
  contentComponent: _SideBar__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "ia3M":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "jYNn":
/***/ (function(module, exports) {

module.exports = require("dayjs/plugin/relativeTime");

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
      dangerouslyGetParent: function dangerouslyGetParent() {
        return props.parentNavigation;
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
    if (navigation.closeDrawer) navigation.closeDrawer();
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

/***/ "ld26":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ln6h");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("O40h");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zrwo");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("i9vu");
/* harmony import */ var _libs_nav_NavContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("jrre");
/* harmony import */ var _libs_ui_UIImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("mHYl");
/* harmony import */ var _stores_RootStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("P/gU");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("nazx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("F62O");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _libs_queries_user_getsetSession__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("00yu");
/* harmony import */ var _libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("XG+j");












var Button = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__["observer"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_9__["TouchableOpacity"], {
    onPress: props.onPress,
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, props.style, {
      flexDirection: "row",
      alignItems: "center",
      alignContent: "center"
    })
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_libs_ui_UIImage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      width: 20,
      margin: 10,
      height: 20
    },
    source: props.image
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_9__["Text"], {
    style: {
      color: _config__WEBPACK_IMPORTED_MODULE_3__["default"].color.mainText
    }
  }, props.text));
});
/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__["observer"])(function (_ref) {
  var navigation = _ref.navigation;
  var navigateTo = Object(_libs_nav_NavContainer__WEBPACK_IMPORTED_MODULE_4__["createNavigateTo"])(navigation);
  var data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__["useObservable"])({
    session: {
      murid: {}
    },
    kelas: {}
  });
  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {
    var load =
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var kelas;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_libs_queries_user_getsetSession__WEBPACK_IMPORTED_MODULE_10__["getSession"])();

              case 2:
                data.session = _context.sent;
                _context.next = 5;
                return Object(_libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_11__["default"])("{\n        kelas_murid(where: {murid_id: {_eq: ".concat(data.session.murid.id, "}}) {\n          kelas {\n            nama_kelas\n          }\n        }\n      }\n      "));

              case 5:
                kelas = _context.sent;

                if (kelas.kelas_murid.length > 0) {
                  data.kelas = kelas.kelas_murid[0].kelas;
                }

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function load() {
        return _ref2.apply(this, arguments);
      };
    }();

    load();
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_9__["View"], {
    style: s.container
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_9__["View"], {
    style: {
      alignItems: "center",
      justifyContent: "center"
    }
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_libs_ui_UIImage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    source: __webpack_require__("Ifud"),
    mobileStyle: {
      height: 160
    },
    style: {
      width: "70%",
      paddingTop: 20,
      paddingBottom: 25
    }
  })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_9__["View"], {
    style: {
      borderTopColor: "#8F7DD8",
      borderTopWidth: 1,
      marginBottom: 15
    }
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_9__["Text"], {
    style: {
      padding: 10,
      paddingVertical: 2,
      color: "white"
    }
  }, "NSA: ", data.session.murid.nsa), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_9__["Text"], {
    style: {
      padding: 10,
      paddingVertical: 2,
      color: "white"
    }
  }, "Nama: ", data.session.murid.nama_murid), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_9__["Text"], {
    style: {
      padding: 10,
      paddingVertical: 2,
      color: "white"
    }
  }, "Kelas: ", data.kelas.nama_kelas), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_9__["TouchableOpacity"], {
    style: {
      marginTop: 10,
      marginLeft: 3
    },
    onPress: function onPress() {
      navigateTo("UbahPassword");
    }
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_9__["Text"], {
    style: {
      padding: 7,
      paddingVertical: 2,
      color: "white",
      fontSize: 11
    }
  }, "Ubah Password")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_9__["View"], {
    style: {
      borderTopColor: "#8F7DD8",
      borderTopWidth: 1,
      marginVertical: 15
    }
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_9__["View"], {
    style: {
      flex: 1
    }
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Button, {
    text: "Kewajiban",
    onPress: function onPress() {
      navigateTo("Kewajiban");
    },
    image: __webpack_require__("ILDJ")
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Button, {
    text: "Pengumuman",
    onPress: function onPress() {
      navigateTo("Pengumuman");
    },
    image: __webpack_require__("bff9")
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Button, {
    text: "Logout",
    style: {
      marginTop: 20
    },
    image: __webpack_require__("zCTC"),
    onPress: function onPress() {
      _stores_RootStore__WEBPACK_IMPORTED_MODULE_6__["RootStore"].session.logout();
      navigation.popToTop();
      navigation.replace("Login");
    }
  })));
}));
var s = react_native_web__WEBPACK_IMPORTED_MODULE_9__["StyleSheet"].create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    backgroundColor: _config__WEBPACK_IMPORTED_MODULE_3__["default"].color.main
  }
});

/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "mA08":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ln6h");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Jkg");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pLtp");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _queries_crud_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("o6H3");
/* harmony import */ var _queries_crud_streamQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("596a");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("F62O");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("YeEv");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_6__);







/* harmony default export */ __webpack_exports__["default"] = (function (opt) {
  return mobx_state_tree__WEBPACK_IMPORTED_MODULE_6__["types"].model({
    query: mobx_state_tree__WEBPACK_IMPORTED_MODULE_6__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_6__["types"].string, opt.query || ""),
    loading: mobx_state_tree__WEBPACK_IMPORTED_MODULE_6__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_6__["types"].boolean, false),
    list: mobx_state_tree__WEBPACK_IMPORTED_MODULE_6__["types"].array(opt.record)
  }).actions(function (self) {
    var meta = JSON.parse(opt.record.properties._meta._defaultValue);
    return {
      afterCreate: function afterCreate() {
        if (opt.stream) {
          self.startStream();
        } else {
          self.requery();
        }
      },
      startStream: function startStream() {
        var where = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(opt.where || {}).map(function (w) {
          return "".concat(w, ": {_eq: ").concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(opt.where[w]), "}");
        });

        if (where.length > 0) {
          where[0] = ",where:{" + where[0];
          where[where.length - 1] = where[where.length - 1] + "}";
        }

        var tableArgs = "".concat(opt.args || "", " ").concat(where.join(",")).trim();

        if (tableArgs.length > 0) {
          tableArgs = "(".concat(tableArgs, ")");
        }

        var record = JSON.parse(opt.record.properties._meta._defaultValue);
        var query = "subscription {\n            ".concat(record.tableName).concat(tableArgs, " \n              ").concat(opt.query, " \n          }");
        Object(_queries_crud_streamQuery__WEBPACK_IMPORTED_MODULE_4__["default"])(query, function (result) {
          if (result.type !== "error" && result.payload && result.payload.data && result.payload.data[record.tableName]) {
            self.setList(result.payload.data[record.tableName].map(function (item) {
              return opt.record.create(item);
            }));
          }
        });
      },
      requery: Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_6__["flow"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var queryOpt, result;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                queryOpt = {};
                if (opt.where) queryOpt["where"] = opt.where;
                if (opt.args) queryOpt["args"] = opt.args;
                _context.next = 5;
                return Object(_queries_crud_query__WEBPACK_IMPORTED_MODULE_3__["default"])(meta.tableName, opt.query, queryOpt);

              case 5:
                result = _context.sent;
                self.list = result.map(function (item) {
                  return opt.record.create(item);
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })),
      serverModify: function serverModify(list) {
        self.list = list;
      },
      localUpdate: function localUpdate(criteria, data) {
        self.list.forEach(function (item) {
          var shouldUpdate = true;

          for (var i in criteria) {
            if (criteria[i] !== item[i]) {
              shouldUpdate = false;
              break;
            }
          }

          if (shouldUpdate) {
            for (var _i in data) {
              item[_i] = data[_i];
            }
          }
        });
      },
      localDelete: function localDelete(criteria) {
        var newlist = [];
        self.list.forEach(function (item) {
          var shouldDelete = true;

          for (var i in criteria) {
            if (criteria[i] !== item[i]) {
              shouldDelete = false;
              break;
            }
          }

          if (!shouldDelete) {
            newlist.push(item);
          }
        });
        self.list = newlist;
      },
      setList: function setList(newList) {
        self.list = newList;
      },
      localSave: Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_6__["flow"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                self.loading = true;
                _context2.next = 3;
                return react_native_web__WEBPACK_IMPORTED_MODULE_5__["AsyncStorage"].setItem(meta.tableName, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(self.list));

              case 3:
                self.loading = false;

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      })),
      localLoad: Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_6__["flow"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                self.loading = true;
                _context3.t0 = JSON;
                _context3.next = 4;
                return react_native_web__WEBPACK_IMPORTED_MODULE_5__["AsyncStorage"].getItem(meta.tableName);

              case 4:
                _context3.t1 = _context3.sent;
                self.list = _context3.t0.parse.call(_context3.t0, _context3.t1);
                self.loading = false;

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))
    };
  });
});

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

/***/ "s6dw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRecord", function() { return UserRecord; });
/* harmony import */ var _libs_utils_Record__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TBri");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YeEv");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__);


var UserRecord = Object(_libs_utils_Record__WEBPACK_IMPORTED_MODULE_0__["default"])({
  tableName: "user",
  columns: {
    id: mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].integer, 0),
    username: mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].string, ""),
    password: mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].maybeNull(mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].string),
    role: mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].string, "sales"),
    sekolah_id: mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].integer, 0),
    status: mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].string, "active")
  }
});

/***/ }),

/***/ "uHlg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ln6h");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("pLtp");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9Jkg");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("O40h");
/* harmony import */ var _libs_nav_StackNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("dFcb");
/* harmony import */ var _libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("XG+j");
/* harmony import */ var _libs_queries_user_getsetSession__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("00yu");
/* harmony import */ var _libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("KCKa");
/* harmony import */ var _libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("UoE3");
/* harmony import */ var _libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("X6mS");
/* harmony import */ var _libs_ui_UIList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("zHZ+");
/* harmony import */ var _libs_ui_UIListItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("XJ5H");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("boVf");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("nazx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("F62O");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _KewajibanDetail__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("3T9C");

















var Kewajiban = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_13__["observer"])(function (_ref) {
  var navigation = _ref.navigation;
  var data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_13__["useObservable"])({
    list: [],
    loading: true
  });
  return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: "Kewajiban bulan ini",
    navigation: navigation
  }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_libs_ui_UIList__WEBPACK_IMPORTED_MODULE_10__["default"], {
    data: data.list,
    loading: data.loading,
    render: function render(list) {
      var item = list.item;
      return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_libs_ui_UIListItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        onPress: function onPress() {
          navigation.navigate("KewajibanDetail", {
            item: item
          });
        }
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_15__["View"], null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_15__["Text"], {
        style: {
          fontSize: 15,
          fontWeight: "bold",
          color: "#555"
        }
      }, item.nama_kewajiban), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_15__["Text"], {
        style: {
          fontSize: 14
        }
      }, "Rp ", item.nominal.toLocaleString(), " (", item.status, ")")), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_15__["View"], null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_15__["Text"], null, item.tipe_pembayaran)));
    },
    reload:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var session, kelasRaw, kelas, monthStart, monthEnd, result;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_libs_queries_user_getsetSession__WEBPACK_IMPORTED_MODULE_6__["getSession"])();

            case 2:
              session = _context.sent;
              _context.next = 5;
              return Object(_libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_5__["default"])("{\n              kelas_murid(where: {murid_id: {_eq: ".concat(session.murid.id, "}}) {\n                kelas_id\n              }\n            }"));

            case 5:
              kelasRaw = _context.sent;

              if (!(kelasRaw && kelasRaw.kelas_murid && kelasRaw.kelas_murid.length > 0)) {
                _context.next = 14;
                break;
              }

              kelas = kelasRaw.kelas_murid.map(function (k) {
                return k.kelas_id.toString();
              });
              monthStart = dayjs__WEBPACK_IMPORTED_MODULE_12___default()().startOf("month").subtract(1, "day").format("YYYY-MM-DD");
              monthEnd = dayjs__WEBPACK_IMPORTED_MODULE_12___default()().endOf("month").add(1, "day").format("YYYY-MM-DD");
              _context.next = 12;
              return Object(_libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_5__["default"])("{\n                kewajiban(order_by: [{tipe_pembayaran: asc}, {id: asc}], \n                  where: {kelas: {_has_keys_any: ".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(kelas), "}}) {\n                  id\n                  nama_kewajiban\n                  nominal\n                  tipe_pembayaran\n                  kelas\n                  transaksi(\n                    where: {\n                      kewajiban: {\n                        _or:[\n                          {_and:[\n                            {tipe_pembayaran:{_eq:\"Bulanan\"}},\n                            {transaksi: {\n                               _and:[\n                                {tstamp: {_gte: \"").concat(monthStart, "\"}},\n                                {tstamp: {_lte: \"").concat(monthEnd, "\"}},\n                              ] \n                            }}\n                          ]},\n                          {tipe_pembayaran:{_eq:\"Insidentil\"}}\n                        ]\n                      }\n                    }\n                  ) {\n                    id\n                    status\n                    tstamp\n                    detail\n                  }\n                }  \n              }"));

            case 12:
              result = _context.sent;
              data.list = result.kewajiban.map(function (item) {
                _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(item.kelas).forEach(function (i) {
                  var k = item.kelas[i];

                  if (kelas.indexOf(k.id + "") >= 0 && k.nominal !== undefined) {
                    item.nominal = k.nominal * 1;
                  }

                  k.murid.forEach(function (m) {
                    if (m && session.murid && m.id === session.murid.id) {
                      if (m.nominal !== undefined) {
                        item.nominal = m.nominal * 1;
                      }
                    }
                  });
                });

                item.status = "Belum Lunas";
                item.transaksi.forEach(function (t) {
                  if (t.paid === "success") {
                    item.status = "Lunas";
                  }
                });
                return item;
              });

            case 14:
              data.loading = false;

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_libs_nav_StackNav__WEBPACK_IMPORTED_MODULE_4__["default"])({
  Kewajiban: {
    screen: Kewajiban
  },
  KewajibanDetail: {
    screen: _KewajibanDetail__WEBPACK_IMPORTED_MODULE_16__["default"]
  }
}));

/***/ }),

/***/ "vRpb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F62O");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (react_native_web__WEBPACK_IMPORTED_MODULE_0__["AsyncStorage"]);

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

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "yLu3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Kjtv");

/***/ }),

/***/ "zCTC":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "zHZ+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("F62O");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UIButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("PKMe");




var UIList = function UIList(props) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (props.reload) props.reload();
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_1__["ScrollView"], props.style, props.loading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    style: {
      margin: 15
    }
  }, "Loading..."), props.data.length === 0 ? !props.loading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: {
      alignItems: "center"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    style: {
      textAlign: "center",
      margin: 15
    }
  }, "\u2014 Empty \u2014"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UIButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onPress: props.reload,
    size: "small",
    style: {
      width: 100
    }
  }, "Refresh")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_1__["FlatList"], {
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
};

UIList.defaultProps = {
  name: "UIList"
};
/* harmony default export */ __webpack_exports__["default"] = (UIList);

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