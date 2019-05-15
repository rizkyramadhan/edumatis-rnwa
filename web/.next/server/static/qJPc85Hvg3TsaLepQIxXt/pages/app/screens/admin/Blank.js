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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("2/g0");


/***/ }),

/***/ "2/g0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("KCKa");
/* harmony import */ var _libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("UoE3");
/* harmony import */ var _libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("X6mS");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("nazx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("F62O");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_5__);






/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__["observer"])(function (_ref) {
  var navigation = _ref.navigation;
  var data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__["useObservable"])({
    loading: true
  });
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_2__["default"], {
    navigation: navigation,
    title: "Blank",
    onBack: function onBack() {}
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_0__["default"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_5__["Text"], null, "Halo ", data.loading)));
}));

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "F62O":
/***/ (function(module, exports) {

module.exports = require("react-native-web");

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

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

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

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "ia3M":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

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

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

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