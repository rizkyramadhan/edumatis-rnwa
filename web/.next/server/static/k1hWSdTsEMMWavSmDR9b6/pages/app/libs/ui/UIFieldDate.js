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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ({

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("EAfA");


/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "EAfA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("doui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("F62O");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cjKJ");




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var setValue = _ref.setValue,
      value = _ref.value,
      sublabel = _ref.sublabel,
      label = _ref.label,
      style = _ref.style,
      fieldActiveStyle = _ref.fieldActiveStyle,
      _ref$inputStyle = _ref.inputStyle,
      inputStyle = _ref$inputStyle === void 0 ? Object(_Style__WEBPACK_IMPORTED_MODULE_3__["S"])(_Style__WEBPACK_IMPORTED_MODULE_3__["St"].TextInput) : _ref$inputStyle,
      inputProps = _ref.inputProps,
      _onBlur = _ref.onBlur,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "string" : _ref$type;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(value),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      internalValue = _useState2[0],
      setInternalValue = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState3, 2),
      focused = _useState4[0],
      setFocused = _useState4[1];

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var SLabel = !!value || !!internalValue ? _Style__WEBPACK_IMPORTED_MODULE_3__["St"].LabelFocus : _Style__WEBPACK_IMPORTED_MODULE_3__["St"].Label;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_2__["View"], {
    style: focused ? Object(_Style__WEBPACK_IMPORTED_MODULE_3__["S"])(_Style__WEBPACK_IMPORTED_MODULE_3__["St"].Field, _Style__WEBPACK_IMPORTED_MODULE_3__["St"].FieldActive, fieldActiveStyle, style) : Object(_Style__WEBPACK_IMPORTED_MODULE_3__["S"])(_Style__WEBPACK_IMPORTED_MODULE_3__["St"].Field, style)
  }, !!label && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_2__["View"], {
    pointerEvents: "none"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    style: focused ? Object(_Style__WEBPACK_IMPORTED_MODULE_3__["S"])(_Style__WEBPACK_IMPORTED_MODULE_3__["St"].LabelFocus, _Style__WEBPACK_IMPORTED_MODULE_3__["St"].LabelActive) : SLabel
  }, label)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "date",
    onFocus: function onFocus() {
      return setFocused(true);
    },
    ref: ref,
    style: inputStyle,
    onChange: function onChange(text) {
      console.log(text); // if (setValue != undefined) setValue(text);
      // setInternalValue(text);
    },
    value: value.toString(),
    onBlur: function onBlur() {
      setFocused(false);

      if (typeof _onBlur === "function") {
        _onBlur();
      }
    }
  }), !!sublabel && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    style: _Style__WEBPACK_IMPORTED_MODULE_3__["St"].SubLabel
  }, sublabel));
});

/***/ }),

/***/ "F62O":
/***/ (function(module, exports) {

module.exports = require("react-native-web");

/***/ }),

/***/ "J3/a":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "XXOK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("J3/a");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

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

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

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