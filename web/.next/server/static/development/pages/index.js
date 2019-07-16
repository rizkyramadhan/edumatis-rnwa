module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "core-js/library/fn/array/from");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/is-iterable */ "core-js/library/fn/is-iterable");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithoutHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArray(iter) {
  if (_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
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

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




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
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./pages/app/App.tsx":
/*!***************************!*\
  !*** ./pages/app/App.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_nav_StackNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/nav/StackNav */ "./pages/app/libs/nav/StackNav.tsx");
/* harmony import */ var _screens_Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/Login */ "./pages/app/screens/Login.tsx");
/* harmony import */ var _screens_admin_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screens/admin/Home */ "./pages/app/screens/admin/Home.tsx");
/* harmony import */ var _screens_siswa_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screens/siswa/Home */ "./pages/app/screens/siswa/Home.tsx");




/* harmony default export */ __webpack_exports__["default"] = (Object(_libs_nav_StackNav__WEBPACK_IMPORTED_MODULE_0__["default"])({
  Login: {
    screen: _screens_Login__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  Admin: {
    screen: _screens_admin_Home__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  Siswa: {
    screen: _screens_siswa_Home__WEBPACK_IMPORTED_MODULE_3__["default"]
  }
}, {}, true));

/***/ }),

/***/ "./pages/app/config.ts":
/*!*****************************!*\
  !*** ./pages/app/config.ts ***!
  \*****************************/
/*! exports provided: default */
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

/***/ "./pages/app/imgs/kelas.png":
/*!**********************************!*\
  !*** ./pages/app/imgs/kelas.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/kelas-16d60aae64a6e22d1b2df293dac9b2f2.png";

/***/ }),

/***/ "./pages/app/imgs/kewajiban.png":
/*!**************************************!*\
  !*** ./pages/app/imgs/kewajiban.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./pages/app/imgs/logo.png":
/*!*********************************!*\
  !*** ./pages/app/imgs/logo.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-e5a3875dcd16de72402c50b9a6f5bf8b.png";

/***/ }),

/***/ "./pages/app/imgs/logob.png":
/*!**********************************!*\
  !*** ./pages/app/imgs/logob.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logob-7ddefd121bad8dbc7988822fd95ab88a.png";

/***/ }),

/***/ "./pages/app/imgs/logout.png":
/*!***********************************!*\
  !*** ./pages/app/imgs/logout.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./pages/app/imgs/pengumuman.png":
/*!***************************************!*\
  !*** ./pages/app/imgs/pengumuman.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/pengumuman-a2ff39c764984d7902649e2c479ca11a.png";

/***/ }),

/***/ "./pages/app/imgs/plus.png":
/*!*********************************!*\
  !*** ./pages/app/imgs/plus.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./pages/app/imgs/share.png":
/*!**********************************!*\
  !*** ./pages/app/imgs/share.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAAQMAAABmvDolAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAZQTFRFAAAAVFLk4TgmFAAAAAJ0Uk5TAP9bkSK1AAADNUlEQVR4nO3ZTY4bIRCGYaJI6WWO4KP4aOZoHKWOwJIFomP3z5j6Cuqz1BplM+ysfmYG3u7YMYTwM/7f+HMZLBREBhIDwkBmoDBQGWgMrBTEyyAxIAyQUstKSi0rKbWspNSyklJPEBlIDMhl4Jd6Ar/UE/ilnsAv9QR+qReIDCQGhAE3xAu4IV7ADfERcEu9gFtqA5GBxIAw4JXagFdqA16IDXghNuCF+BBEBhIDwoBTagdOqR04pXbglNqBE+IAkYF0GQgD81IHmJc6wLzUAealDjAvdYLIQGJAGJiGOME0hAvWboxKPXowKPV3VcNc/6Wv21LwC2wpuG5KLQiw1B0BhsDrGML8BQxxY+BhgC6FlV5DlbJTgFJ2ClBqMAVVajQFVer3CPSl8E5uow9xH4E+xGiOfYjhHHswnGNfajjHvtRtDN6lxovoSo2vv0tNFvEuNVnEu9ToYdjGGWKyyneI+wycIR4zcIaYXT/BbJVfpaarPEtNV3mWmq7yLHWbg+hnOEs95kD8DEeIeYYjhAeq3+kA805HKafTXurGwP0KaCTkvgrvLxTSaUvtAiEht9vthdweGBew0o2VpqCy0oWVzgwIuxWJgchuBXvo20cPvQcK+1dBQWY3UxhI7GZGBtgbVGOgsnewwkC+/B6YPgLe4xAZCAQ08mlzdHJAYWDv5DxQwkBiYMvAP/EuAPqhenws38yPwfeLm/kp+AqjQb9wGQDpwd5JPfVNpYsW6LbBgGPh8GWwA6JAtSAMwePretGgGJA0yAYEDQRBAZAQCICIIAAIACqAr/+tnr8gA6gIEoCCIADIACoCAZAZSAgSgIAgalANCBpkBA2AIKgAIgL8ZhEQZA2qAaJBNiBpIAZEDRIDwYCgQDOgaVAMqBpkA4oGYkDWIBogGgQDkgLNgqhAsSAokA1oGggDyYCqQTSgaBAMyArgng+cHdjdFDiesPsxcMAx3NEJCiQDmgbRgKpBMEBN2+5swVGR3RtDYHbX4DTKbuDBeZbdAoQTMbs1BoduA6DXZXff4ODP7t/B0aHdAYTDR7uHuIh6aXch4QDUbnQCEAuiepks0C+jAfSc92d8z/gHbCf7NUBeIQYAAAAASUVORK5CYII="

/***/ }),

/***/ "./pages/app/imgs/shield.png":
/*!***********************************!*\
  !*** ./pages/app/imgs/shield.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./pages/app/imgs/transaksi.png":
/*!**************************************!*\
  !*** ./pages/app/imgs/transaksi.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAC0FBMVEUAAAD//////////////////////////////////////////////v7//v7//v7//v7//////////////v7//v7//v7//v7//////////v7//v7//////////f3//v7//v7//////////////v7//v7//////////v7//v7//////v7//////////v7//v7//f3//f3//////v7//////////v7//////f3//////v7//v7//////////v7//v7//////////f3//f3//v7//v7//v7//v7//v7//v7//v7//f3//////////////////////////////v7//v7//v7//v7//////f3//v7//////v7//////////////f3//////v7//v7//////////////////////v7//v7//f3//////f3//////////////v7//////////////v7//v7//////v7//v7//////////f3//f3//////f3//////////f3//////v7//v7//f3//////f3//v7//v7//f3//f3//////f3//f3//////f3//v7//v7//v7//////v7//////////f3//////f3//////////////////v7//f3//////////////v7//////////////v7//////f3//////f3//f3//////////v7//////v7//////v7//////////////f3//v7//////v7//v7//f3//f3//v7//v7//v7//////v7//v7//////f3//////v7//////////v7//////f3//////v7//v7//////////////v7//////////////f3//////v7//////v7//////////////////////v7//////////v7//v7//f3//v7//////v7//f3//v7//v7//////v4AAAAQ4MAdAAAA7nRSTlMABy5UandoUioFHnm/+PW5cRhDuv38sDgtwrQjA4L793IBFMCxDRrTzBbaEQzRwaKMWf5EDuUIhW/v425YtfphSZmD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"

/***/ }),

/***/ "./pages/app/imgs/user.png":
/*!*********************************!*\
  !*** ./pages/app/imgs/user.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./pages/app/libs/nav/NavContainer.tsx":
/*!*********************************************!*\
  !*** ./pages/app/libs/nav/NavContainer.tsx ***!
  \*********************************************/
/*! exports provided: default, createNavigateTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNavigateTo", function() { return createNavigateTo; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/home/hendikmdi/Documents/edumatis-rnwa/web/pages/app/libs/nav/NavContainer.tsx";




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

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      navigation: navigation,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
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

/***/ "./pages/app/libs/nav/SideNav.tsx":
/*!****************************************!*\
  !*** ./pages/app/libs/nav/SideNav.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ui_Style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/Style */ "./pages/app/libs/ui/Style.tsx");
/* harmony import */ var _NavContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavContainer */ "./pages/app/libs/nav/NavContainer.tsx");

var _jsxFileName = "/home/hendikmdi/Documents/edumatis-rnwa/web/pages/app/libs/nav/SideNav.tsx";





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
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_3__["View"], {
        style: Object(_ui_Style__WEBPACK_IMPORTED_MODULE_4__["Responsive"])({
          xs: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, absoluteSideBar, {
            minWidth: "50%"
          }, {
            transform: [{
              scale: obs.opened ? 1 : 0
            }]
          }),
          sm: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, absoluteSideBar, {
            minWidth: "50%"
          }, {
            transform: [{
              scale: obs.opened ? 1 : 0
            }]
          }),
          md: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, flexSideBar, {
            transform: [{
              scale: 1
            }]
          }),
          lg: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, flexSideBar, {
            transform: [{
              scale: 1
            }]
          }),
          xl: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, flexSideBar, {
            transform: [{
              scale: 1
            }]
          }),
          xxl: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, flexSideBar, {
            transform: [{
              scale: 1
            }]
          })
        }, obs.width),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SideBar, {
        navigation: ref.current,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      })), obs.opened && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_3__["TouchableOpacity"], {
        onPress: function onPress() {
          obs.opened = false;
        },
        style: Object(_ui_Style__WEBPACK_IMPORTED_MODULE_4__["Responsive"])({
          xs: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, overlay),
          sm: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, overlay),
          md: {},
          lg: {},
          xl: {},
          xxl: {}
        }, obs.width),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, {
        ref: ref,
        parentNavigation: props.navigation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }));
    });
  } else {
    return function () {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      });
    };
  }
});

/***/ }),

/***/ "./pages/app/libs/nav/StackNav.tsx":
/*!*****************************************!*\
  !*** ./pages/app/libs/nav/StackNav.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavContainer */ "./pages/app/libs/nav/NavContainer.tsx");

var _jsxFileName = "/home/hendikmdi/Documents/edumatis-rnwa/web/pages/app/libs/nav/StackNav.tsx";


/* harmony default export */ __webpack_exports__["default"] = (function (data) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var isRoot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var Container = Object(_NavContainer__WEBPACK_IMPORTED_MODULE_2__["default"])(data);
  return function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      parentNavigation: props.navigation,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }));
  };
});

/***/ }),

/***/ "./pages/app/libs/queries/crud/createRecord.ts":
/*!*****************************************************!*\
  !*** ./pages/app/libs/queries/crud/createRecord.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./pages/app/config.ts");
/* harmony import */ var _user_checkSession__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user/checkSession */ "./pages/app/libs/queries/user/checkSession.ts");






/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(table, data, options) {
    var opt, gql, headers, session, postData, i, response, json;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            opt = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, {
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

/***/ "./pages/app/libs/queries/crud/deleteRecord.ts":
/*!*****************************************************!*\
  !*** ./pages/app/libs/queries/crud/deleteRecord.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./pages/app/config.ts");
/* harmony import */ var _user_checkSession__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user/checkSession */ "./pages/app/libs/queries/user/checkSession.ts");






/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(table, data, options) {
    var opt, pk, gql, headers, session, response, json;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            opt = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, {
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

/***/ "./pages/app/libs/queries/crud/query.ts":
/*!**********************************************!*\
  !*** ./pages/app/libs/queries/crud/query.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../config */ "./pages/app/config.ts");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_6__);







/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(table, columns, options) {
    var opt, where, tableArgs, gql, headers, sessionRaw, session, response, json;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            opt = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, {
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

/***/ "./pages/app/libs/queries/crud/rawQuery.ts":
/*!*************************************************!*\
  !*** ./pages/app/libs/queries/crud/rawQuery.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./pages/app/config.ts");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_5__);






/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(query, options) {
    var opt, headers, sessionRaw, session, response, json;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            opt = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, {
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

/***/ "./pages/app/libs/queries/crud/streamQuery.ts":
/*!****************************************************!*\
  !*** ./pages/app/libs/queries/crud/streamQuery.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../config */ "./pages/app/config.ts");






/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(query, wsCallback, options) {
    var opt, headers, sessionRaw, session, ws;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            opt = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, {
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
            Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "./pages/app/libs/queries/crud/updateRecord.ts":
/*!*****************************************************!*\
  !*** ./pages/app/libs/queries/crud/updateRecord.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./pages/app/config.ts");
/* harmony import */ var _user_checkSession__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user/checkSession */ "./pages/app/libs/queries/user/checkSession.ts");






/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(table, data, options) {
    var opt, postData, i, gql, headers, session, response, json;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            opt = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, {
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

/***/ "./pages/app/libs/queries/user/checkSession.ts":
/*!*****************************************************!*\
  !*** ./pages/app/libs/queries/user/checkSession.ts ***!
  \*****************************************************/
/*! exports provided: checkSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkSession", function() { return checkSession; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config */ "./pages/app/config.ts");
/* harmony import */ var _getsetSession__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getsetSession */ "./pages/app/libs/queries/user/getsetSession.ts");






var get = __webpack_require__(/*! lodash.get */ "lodash.get");

var checkSession =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
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

/***/ "./pages/app/libs/queries/user/getsetSession.ts":
/*!******************************************************!*\
  !*** ./pages/app/libs/queries/user/getsetSession.ts ***!
  \******************************************************/
/*! exports provided: setSession, getSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSession", function() { return setSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSession", function() { return getSession; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _crud_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../crud/query */ "./pages/app/libs/queries/crud/query.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../config */ "./pages/app/config.ts");







function setSession(_x) {
  return _setSession.apply(this, arguments);
}

function _setSession() {
  _setSession = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
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
  _getSession = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
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
            return Object(_crud_query__WEBPACK_IMPORTED_MODULE_5__["default"])("user", Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_config__WEBPACK_IMPORTED_MODULE_6__["default"].user.columns), {
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

/***/ "./pages/app/libs/queries/user/hashPassword.ts":
/*!*****************************************************!*\
  !*** ./pages/app/libs/queries/user/hashPassword.ts ***!
  \*****************************************************/
/*! exports provided: hashPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hashPassword", function() { return hashPassword; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config */ "./pages/app/config.ts");




var hashPassword =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
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

/***/ "./pages/app/libs/queries/user/login.ts":
/*!**********************************************!*\
  !*** ./pages/app/libs/queries/user/login.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config */ "./pages/app/config.ts");





var get = __webpack_require__(/*! lodash.get */ "lodash.get");

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
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

/***/ "./pages/app/libs/ui/Style.tsx":
/*!*************************************!*\
  !*** ./pages/app/libs/ui/Style.tsx ***!
  \*************************************/
/*! exports provided: ResponsiveHandler, Responsive, S, St */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveHandler", function() { return ResponsiveHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Responsive", function() { return Responsive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "St", function() { return St; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native-web */ "react-native-web");
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

  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, react_native_web__WEBPACK_IMPORTED_MODULE_2__["StyleSheet"].flatten(style));
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

/***/ "./pages/app/libs/ui/UIBody.tsx":
/*!**************************************!*\
  !*** ./pages/app/libs/ui/UIBody.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/hendikmdi/Documents/edumatis-rnwa/web/pages/app/libs/ui/UIBody.tsx";


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
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
      flex: 1
    }, CustomStyle, style),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, children);
});

/***/ }),

/***/ "./pages/app/libs/ui/UIButton.tsx":
/*!****************************************!*\
  !*** ./pages/app/libs/ui/UIButton.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Style */ "./pages/app/libs/ui/Style.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/home/hendikmdi/Documents/edumatis-rnwa/web/pages/app/libs/ui/UIButton.tsx";



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

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_3__["TouchableOpacity"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    onPress: onPress
  }, buttonProps, {
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), icon && iconMode == "start" && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, icon), children.map && children.length > 1 ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_3__["View"], {
    style: Object(_Style__WEBPACK_IMPORTED_MODULE_1__["S"])(labelStyle, {
      paddingVertical: 10
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, children.map(function (C, i) {
    if (typeof C !== "object") {
      if (typeof C === "string" && C.trim() === "") return null;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_3__["Text"], {
        key: i,
        style: Object(_Style__WEBPACK_IMPORTED_MODULE_1__["S"])(defaultLabelStyle, {
          paddingVertical: 1,
          marginVertical: 1,
          lineHeight: "auto"
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, C);
    } else {
      return C;
    }
  })) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    style: labelStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, children), icon && iconMode == "end" && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, icon));
});

/***/ }),

/***/ "./pages/app/libs/ui/UICol.tsx":
/*!*************************************!*\
  !*** ./pages/app/libs/ui/UICol.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Style */ "./pages/app/libs/ui/Style.tsx");
var _jsxFileName = "/home/hendikmdi/Documents/edumatis-rnwa/web/pages/app/libs/ui/UICol.tsx";



var width = react_native_web__WEBPACK_IMPORTED_MODULE_1__["Dimensions"].get("window").width;
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 12 : _ref$size,
      children = _ref.children,
      sizexs = _ref.sizexs,
      sizesm = _ref.sizesm,
      sizemd = _ref.sizemd,
      sizelg = _ref.sizelg,
      sizexl = _ref.sizexl,
      sizexxl = _ref.sizexxl;
  var current = size;

  if (width <= 410) {
    current = sizesm || size;
  } else if (width >= 411 && width <= 567) {
    current = sizesm || size;
  } else if (width >= 568 && width <= 767) {
    current = sizemd || size;
  } else if (width >= 768 && width <= 1023) {
    current = sizelg || size;
  } else if (width >= 1024 && width <= 1279) {
    current = sizexl || size;
  } else if (width >= 1280) {
    current = sizexxl || size;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: {
      flexBasis: current / 12 * 100 + "%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, children && children.map && children.length > 1 ? children.map(function (C, i) {
    if (typeof C !== "object") {
      if (typeof C === "string" && C.trim() === "") return null;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        key: i,
        style: Object(_Style__WEBPACK_IMPORTED_MODULE_2__["S"])({
          paddingVertical: 1,
          marginVertical: 1
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, C);
    } else {
      return C;
    }
  }) : typeof children === "object" ? children : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, children));
});

/***/ }),

/***/ "./pages/app/libs/ui/UIContainer.tsx":
/*!*******************************************!*\
  !*** ./pages/app/libs/ui/UIContainer.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/hendikmdi/Documents/edumatis-rnwa/web/pages/app/libs/ui/UIContainer.tsx";


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: {
      flex: 1,
      flexDirection: "column"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, children);
});

/***/ }),

/***/ "./pages/app/libs/ui/UIField.tsx":
/*!***************************************!*\
  !*** ./pages/app/libs/ui/UIField.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Style */ "./pages/app/libs/ui/Style.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/hendikmdi/Documents/edumatis-rnwa/web/pages/app/libs/ui/UIField.tsx";



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var label = _ref.label,
      style = _ref.style,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_2__["View"], {
    style: Object(_Style__WEBPACK_IMPORTED_MODULE_0__["S"])(_Style__WEBPACK_IMPORTED_MODULE_0__["St"].Field, style),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, !!label && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_2__["View"], {
    pointerEvents: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    style: Object(_Style__WEBPACK_IMPORTED_MODULE_0__["S"])(_Style__WEBPACK_IMPORTED_MODULE_0__["St"].LabelFocus),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, label)), children);
});

/***/ }),

/***/ "./pages/app/libs/ui/UIFieldSelectNative.tsx":
/*!***************************************************!*\
  !*** ./pages/app/libs/ui/UIFieldSelectNative.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Style */ "./pages/app/libs/ui/Style.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/home/hendikmdi/Documents/edumatis-rnwa/web/pages/app/libs/ui/UIFieldSelectNative.tsx";



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
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      temp = _useState2[0],
      setTemp = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      focused = _useState4[0],
      setFocused = _useState4[1];

  var SLabel = !!value || !!temp ? _Style__WEBPACK_IMPORTED_MODULE_1__["St"].LabelFocus : _Style__WEBPACK_IMPORTED_MODULE_1__["St"].SelectLabel;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_3__["View"], {
    style: focused ? Object(_Style__WEBPACK_IMPORTED_MODULE_1__["S"])(Object(_Style__WEBPACK_IMPORTED_MODULE_1__["S"])(_Style__WEBPACK_IMPORTED_MODULE_1__["St"].Field, style), Object(_Style__WEBPACK_IMPORTED_MODULE_1__["S"])(_Style__WEBPACK_IMPORTED_MODULE_1__["St"].FieldActive, fieldActiveStyle)) : Object(_Style__WEBPACK_IMPORTED_MODULE_1__["S"])(_Style__WEBPACK_IMPORTED_MODULE_1__["St"].Field, style),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, !!label && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    style: Object(_Style__WEBPACK_IMPORTED_MODULE_1__["S"])(_Style__WEBPACK_IMPORTED_MODULE_1__["St"].LabelFocus, {
      marginLeft: 10
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, label), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_3__["Picker"], {
    mode: "dialog",
    style: {
      marginVertical: 5
    },
    selectedValue: value || temp,
    onValueChange: function onValueChange(itemValue, itemIndex) {
      return setValue != undefined ? setValue(itemValue) : setTemp(itemValue);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, items.map(function (item, index) {
    if (typeof item === "string") return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_3__["Picker"].Item, {
      key: index,
      label: item,
      value: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    });
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_3__["Picker"].Item, {
      key: index,
      label: item.label,
      value: item.value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    });
  })));
});

/***/ }),

/***/ "./pages/app/libs/ui/UIFieldText.tsx":
/*!*******************************************!*\
  !*** ./pages/app/libs/ui/UIFieldText.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Style */ "./pages/app/libs/ui/Style.tsx");


var _jsxFileName = "/home/hendikmdi/Documents/edumatis-rnwa/web/pages/app/libs/ui/UIFieldText.tsx";



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
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      internalValue = _useState2[0],
      setInternalValue = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      focused = _useState4[0],
      setFocused = _useState4[1];

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var SLabel = !!value || !!internalValue ? _Style__WEBPACK_IMPORTED_MODULE_4__["St"].LabelFocus : _Style__WEBPACK_IMPORTED_MODULE_4__["St"].Label;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_3__["View"], {
    style: focused ? Object(_Style__WEBPACK_IMPORTED_MODULE_4__["S"])(_Style__WEBPACK_IMPORTED_MODULE_4__["St"].Field, _Style__WEBPACK_IMPORTED_MODULE_4__["St"].FieldActive, fieldActiveStyle, style) : Object(_Style__WEBPACK_IMPORTED_MODULE_4__["S"])(_Style__WEBPACK_IMPORTED_MODULE_4__["St"].Field, style),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, !!label && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_3__["View"], {
    pointerEvents: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    style: focused ? Object(_Style__WEBPACK_IMPORTED_MODULE_4__["S"])(_Style__WEBPACK_IMPORTED_MODULE_4__["St"].LabelFocus, _Style__WEBPACK_IMPORTED_MODULE_4__["St"].LabelActive) : SLabel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, label)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_3__["TextInput"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
  }, inputProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })), !!sublabel && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    style: _Style__WEBPACK_IMPORTED_MODULE_4__["St"].SubLabel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, sublabel));
});

/***/ }),

/***/ "./pages/app/libs/ui/UIHead.tsx":
/*!**************************************!*\
  !*** ./pages/app/libs/ui/UIHead.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UIImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UIImage */ "./pages/app/libs/ui/UIImage.tsx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Style */ "./pages/app/libs/ui/Style.tsx");

var _jsxFileName = "/home/hendikmdi/Documents/edumatis-rnwa/web/pages/app/libs/ui/UIHead.tsx";





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
      xs: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, viewStyle, {
        paddingRight: 0
      }),
      sm: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, viewStyle, {
        paddingRight: 0
      }),
      md: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, viewStyle),
      lg: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, viewStyle),
      xl: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, viewStyle),
      xxl: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, viewStyle)
    }, obs.width),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_2__["View"], {
    style: {
      flexDirection: "row",
      alignItems: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, navigation && !onBack && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_2__["TouchableOpacity"], {
    style: Object(_Style__WEBPACK_IMPORTED_MODULE_5__["Responsive"])({
      xs: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sideBtnStyle),
      sm: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sideBtnStyle),
      md: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sideBtnStyle, {
        display: "none"
      }),
      lg: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sideBtnStyle, {
        display: "none"
      }),
      xl: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sideBtnStyle, {
        display: "none"
      }),
      xxl: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sideBtnStyle, {
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
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UIImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      width: 20,
      height: 20,
      marginLeft: -5,
      marginRight: 20
    },
    source: __webpack_require__(/*! ./imgs/line-menu.png */ "./pages/app/libs/ui/imgs/line-menu.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })), onBack && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_2__["TouchableOpacity"], {
    style: {
      width: 20,
      height: 20,
      marginLeft: -10,
      marginRight: 10,
      marginTop: 3
    },
    onPress: onBack,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UIImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      width: 20,
      height: 20
    },
    source: __webpack_require__(/*! ./imgs/back.png */ "./pages/app/libs/ui/imgs/back.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    style: {
      fontSize: 22,
      color: "#555",
      flex: 1,
      flexWrap: "wrap"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, (title || "").trim())), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_2__["View"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, children));
}));

/***/ }),

/***/ "./pages/app/libs/ui/UIImage.tsx":
/*!***************************************!*\
  !*** ./pages/app/libs/ui/UIImage.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/hendikmdi/Documents/edumatis-rnwa/web/pages/app/libs/ui/UIImage.tsx";

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var myprops = {
    src: props.source,
    style: props.style
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, myprops, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }));
});

/***/ }),

/***/ "./pages/app/libs/ui/UIJson.tsx":
/*!**************************************!*\
  !*** ./pages/app/libs/ui/UIJson.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/hendikmdi/Documents/edumatis-rnwa/web/pages/app/libs/ui/UIJson.tsx";


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var data = _ref.data;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_2__["View"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data, null, 4).replace(/\{\}/gi, "")));
});

/***/ }),

/***/ "./pages/app/libs/ui/UIList.tsx":
/*!**************************************!*\
  !*** ./pages/app/libs/ui/UIList.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UIButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UIButton */ "./pages/app/libs/ui/UIButton.tsx");

var _jsxFileName = "/home/hendikmdi/Documents/edumatis-rnwa/web/pages/app/libs/ui/UIList.tsx";




var UIList = function UIList(props) {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (props.reload) props.reload();
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_2__["ScrollView"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.style, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), props.loading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    style: {
      margin: 15
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Loading..."), props.data.length === 0 ? !props.loading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_2__["View"], {
    style: {
      alignItems: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    style: {
      textAlign: "center",
      margin: 15
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "\u2014 Empty \u2014"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UIButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onPress: props.reload,
    size: "small",
    style: {
      width: 100
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Refresh")) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_2__["FlatList"], {
    extraData: props.extraData,
    data: props.data,
    keyExtractor: function keyExtractor(item, index) {
      return index.toString();
    },
    refreshing: props.loading,
    onRefresh: props.reload,
    renderItem: function renderItem(data) {
      return props.render(data);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }));
};

UIList.defaultProps = {
  name: "UIList"
};
/* harmony default export */ __webpack_exports__["default"] = (UIList);

/***/ }),

/***/ "./pages/app/libs/ui/UIListItem.tsx":
/*!******************************************!*\
  !*** ./pages/app/libs/ui/UIListItem.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/hendikmdi/Documents/edumatis-rnwa/web/pages/app/libs/ui/UIListItem.tsx";


var width = react_native_web__WEBPACK_IMPORTED_MODULE_2__["Dimensions"].get("window").width;
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var style = width >= 568 ? {
    paddingHorizontal: 15
  } : {
    paddingHorizontal: 10
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_2__["View"], {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style, props.style, {
      borderBottomColor: "#ccc",
      borderBottomWidth: 1
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_2__["TouchableOpacity"], {
    style: {
      padding: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    },
    onPress: props.onPress,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, props.children));
});

/***/ }),

/***/ "./pages/app/libs/ui/UIRow.tsx":
/*!*************************************!*\
  !*** ./pages/app/libs/ui/UIRow.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/hendikmdi/Documents/edumatis-rnwa/web/pages/app/libs/ui/UIRow.tsx";


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_2__["View"], {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.style, {
      flexDirection: "row",
      flexWrap: "wrap"
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, props.children);
});

/***/ }),

/***/ "./pages/app/libs/ui/UIWebView.tsx":
/*!*****************************************!*\
  !*** ./pages/app/libs/ui/UIWebView.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/hendikmdi/Documents/edumatis-rnwa/web/pages/app/libs/ui/UIWebView.tsx";

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    dangerouslySetInnerHTML: {
      __html: props.source.html
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }));
});

/***/ }),

/***/ "./pages/app/libs/ui/imgs/back.png":
/*!*****************************************!*\
  !*** ./pages/app/libs/ui/imgs/back.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./pages/app/libs/ui/imgs/line-menu.png":
/*!**********************************************!*\
  !*** ./pages/app/libs/ui/imgs/line-menu.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./pages/app/libs/utils/AsyncStorage.ts":
/*!**********************************************!*\
  !*** ./pages/app/libs/utils/AsyncStorage.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (react_native_web__WEBPACK_IMPORTED_MODULE_0__["AsyncStorage"]);

/***/ }),

/***/ "./pages/app/libs/utils/GraphQL.ts":
/*!*****************************************!*\
  !*** ./pages/app/libs/utils/GraphQL.ts ***!
  \*****************************************/
/*! exports provided: format, getUnique */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnique", function() { return getUnique; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./pages/app/config.ts");

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

/***/ "./pages/app/libs/utils/List.ts":
/*!**************************************!*\
  !*** ./pages/app/libs/utils/List.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _queries_crud_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../queries/crud/query */ "./pages/app/libs/queries/crud/query.ts");
/* harmony import */ var _queries_crud_streamQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../queries/crud/streamQuery */ "./pages/app/libs/queries/crud/streamQuery.ts");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-state-tree */ "mobx-state-tree");
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

/***/ "./pages/app/libs/utils/Record.ts":
/*!****************************************!*\
  !*** ./pages/app/libs/utils/Record.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _queries_crud_createRecord__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../queries/crud/createRecord */ "./pages/app/libs/queries/crud/createRecord.ts");
/* harmony import */ var _queries_crud_deleteRecord__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../queries/crud/deleteRecord */ "./pages/app/libs/queries/crud/deleteRecord.ts");
/* harmony import */ var _queries_crud_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../queries/crud/query */ "./pages/app/libs/queries/crud/query.ts");
/* harmony import */ var _queries_crud_updateRecord__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../queries/crud/updateRecord */ "./pages/app/libs/queries/crud/updateRecord.ts");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mobx-state-tree */ "mobx-state-tree");
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

  var recordResult = mobx_state_tree__WEBPACK_IMPORTED_MODULE_10__["types"].model(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__["default"])({}, columns, {
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

    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__["default"])({}, actions, {
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
                return self.find(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, primaryKey, self[primaryKey]));

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

/***/ "./pages/app/screens/Login.tsx":
/*!*************************************!*\
  !*** ./pages/app/screens/Login.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _libs_queries_crud_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../libs/queries/crud/query */ "./pages/app/libs/queries/crud/query.ts");
/* harmony import */ var _libs_queries_user_checkSession__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../libs/queries/user/checkSession */ "./pages/app/libs/queries/user/checkSession.ts");
/* harmony import */ var _libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../libs/ui/UIButton */ "./pages/app/libs/ui/UIButton.tsx");
/* harmony import */ var _libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../libs/ui/UIFieldText */ "./pages/app/libs/ui/UIFieldText.tsx");
/* harmony import */ var _libs_ui_UIImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../libs/ui/UIImage */ "./pages/app/libs/ui/UIImage.tsx");
/* harmony import */ var _stores_RootStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../stores/RootStore */ "./pages/app/stores/RootStore.ts");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_11__);



var _jsxFileName = "/home/hendikmdi/Documents/edumatis-rnwa/web/pages/app/screens/Login.tsx";









/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__["observer"])(function (_ref) {
  var navigation = _ref.navigation;
  var data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__["useObservable"])({
    sekolah_id: "",
    nsa: "",
    password: ""
  });
  var meta = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__["useObservable"])({
    sekolah: "",
    murid: "",
    loading: true
  });
  Object(react__WEBPACK_IMPORTED_MODULE_10__["useEffect"])(function () {
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var session;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_libs_queries_user_checkSession__WEBPACK_IMPORTED_MODULE_4__["checkSession"])();

            case 2:
              session = _context.sent;

              if (!(session && session.murid && session.murid.nsa)) {
                _context.next = 6;
                break;
              }

              if (session.murid.nsa === "admin") {
                navigation.replace("Admin");
              } else {
                navigation.replace("Siswa");
              }

              return _context.abrupt("return");

            case 6:
              meta.loading = false;

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, []);

  if (meta.loading) {
    return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_11__["View"], {
      style: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_11__["Text"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "Loading..."));
  }

  return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_11__["ScrollView"], {
    style: {
      backgroundColor: "#fff"
    },
    contentContainerStyle: {
      alignItems: "center",
      paddingTop: 100,
      maxWidth: 800,
      justifyContent: "center",
      alignSelf: "center",
      minWidth: 430
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIImage__WEBPACK_IMPORTED_MODULE_7__["default"], {
    source: __webpack_require__(/*! ../imgs/logob.png */ "./pages/app/imgs/logob.png"),
    mobileStyle: {
      height: 120,
      marginBottom: 20
    },
    style: {
      width: 200
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "ID Sekolah",
    sublabel: meta.sekolah,
    value: data.sekolah_id,
    style: {
      width: "70%"
    },
    setValue: function setValue(value) {
      return data.sekolah_id = value;
    },
    onBlur:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var res;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return Object(_libs_queries_crud_query__WEBPACK_IMPORTED_MODULE_3__["default"])("sekolah", ["nama_sekolah"], {
                where: {
                  id: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(data.sekolah_id)
                },
                useSession: false
              });

            case 3:
              res = _context2.sent;

              if (res && res.nama_sekolah) {
                meta.sekolah = res.nama_sekolah;
              } else {
                meta.sekolah = "Sekolah tidak ditemukan";
              }

              _context2.next = 9;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "Nomor Induk / NSA",
    sublabel: meta.murid,
    value: data.nsa,
    style: {
      width: "70%"
    },
    setValue: function setValue(value) {
      return data.nsa = value;
    },
    onBlur:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
      var res;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return Object(_libs_queries_crud_query__WEBPACK_IMPORTED_MODULE_3__["default"])("murid", ["nama_murid"], {
                where: {
                  sekolah_id: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(data.sekolah_id),
                  nsa: data.nsa
                },
                useSession: false
              });

            case 2:
              res = _context3.sent;

              if (res && res.nama_murid) {
                meta.murid = "Nama: " + res.nama_murid;
              } else {
                meta.murid = "Nomor Induk tidak ditemukan";
              }

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "password",
    label: "Password",
    value: data.password,
    setValue: function setValue(value) {
      return data.password = value;
    },
    style: {
      width: "70%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      width: "50%"
    },
    onPress:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
      var session;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              meta.loading = true;
              _context4.next = 3;
              return _stores_RootStore__WEBPACK_IMPORTED_MODULE_8__["RootStore"].session.login(data.sekolah_id, data.nsa, data.password);

            case 3:
              session = _context4.sent;

              if (!(session && session.murid && session.murid.nsa)) {
                _context4.next = 7;
                break;
              }

              if (session.murid.nsa === "admin") {
                navigation.replace("Admin");
              } else {
                navigation.replace("Siswa");
              }

              return _context4.abrupt("return");

            case 7:
              meta.loading = false;

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "Login"));
}));

/***/ }),

/***/ "./pages/app/screens/admin/Home.tsx":
/*!******************************************!*\
  !*** ./pages/app/screens/admin/Home.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_nav_SideNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../libs/nav/SideNav */ "./pages/app/libs/nav/SideNav.tsx");
/* harmony import */ var _Kewajiban_Kewajiban__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Kewajiban/Kewajiban */ "./pages/app/screens/admin/Kewajiban/Kewajiban.tsx");
/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideBar */ "./pages/app/screens/admin/SideBar.tsx");
/* harmony import */ var _Pengumuman_Pengumuman__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pengumuman/Pengumuman */ "./pages/app/screens/admin/Pengumuman/Pengumuman.tsx");
/* harmony import */ var _Kelas_Kelas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Kelas/Kelas */ "./pages/app/screens/admin/Kelas/Kelas.tsx");
/* harmony import */ var _Transaksi_Transaksi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Transaksi/Transaksi */ "./pages/app/screens/admin/Transaksi/Transaksi.tsx");






/* harmony default export */ __webpack_exports__["default"] = (Object(_libs_nav_SideNav__WEBPACK_IMPORTED_MODULE_0__["default"])({
  Transaksi: {
    screen: _Transaksi_Transaksi__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  Kewajiban: {
    screen: _Kewajiban_Kewajiban__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  Pengumuman: {
    screen: _Pengumuman_Pengumuman__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  Kelas: {
    screen: _Kelas_Kelas__WEBPACK_IMPORTED_MODULE_4__["default"]
  }
}, {
  contentComponent: _SideBar__WEBPACK_IMPORTED_MODULE_2__["default"]
}));

/***/ }),

/***/ "./pages/app/screens/admin/Kelas/Kelas.tsx":
/*!*************************************************!*\
  !*** ./pages/app/screens/admin/Kelas/Kelas.tsx ***!
  \*************************************************/
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
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _libs_nav_StackNav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../libs/nav/StackNav */ "./pages/app/libs/nav/StackNav.tsx");
/* harmony import */ var _KelasDetail__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./KelasDetail */ "./pages/app/screens/admin/Kelas/KelasDetail.tsx");
/* harmony import */ var _MuridDetail__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./MuridDetail */ "./pages/app/screens/admin/Kelas/MuridDetail.tsx");


var _jsxFileName = "/home/hendikmdi/Documents/edumatis-rnwa/web/pages/app/screens/admin/Kelas/Kelas.tsx";













var Kelas = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__["observer"])(function (_ref) {
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
                return Object(_libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_2__["default"])("{\n        kelas(order_by: {id: asc}) {\n          id\n          kelas_murids_aggregate {\n            aggregate {\n              count\n            }\n          }\n          nama_kelas\n        }\n      }\n      ");

              case 2:
                result = _context.sent;

                if (result && result.kelas) {
                  data.list = result.kelas;
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
  return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_6__["default"], {
    navigation: navigation,
    title: "Kelas",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: "small",
    onPress: function onPress() {
      navigation.navigate("KelasDetail", {
        item: {}
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "+ Kelas Baru")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: data.list,
    loading: data.loading,
    render: function render(list) {
      var item = list.item;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIListItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onPress: function onPress() {
          navigation.navigate("KelasDetail", {
            item: item
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_11__["View"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
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
          lineNumber: 70
        },
        __self: this
      }, item.nama_kelas), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_11__["Text"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "".concat(item.kelas_murids_aggregate.aggregate.count, " murid"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_11__["View"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_11__["Text"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      })));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_libs_nav_StackNav__WEBPACK_IMPORTED_MODULE_12__["default"])({
  Kelas: {
    screen: Kelas
  },
  MuridDetail: {
    screen: _MuridDetail__WEBPACK_IMPORTED_MODULE_14__["default"]
  },
  KelasDetail: {
    screen: _KelasDetail__WEBPACK_IMPORTED_MODULE_13__["default"]
  }
}));

/***/ }),

/***/ "./pages/app/screens/admin/Kelas/KelasDetail.tsx":
/*!*******************************************************!*\
  !*** ./pages/app/screens/admin/Kelas/KelasDetail.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _libs_queries_crud_createRecord__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../libs/queries/crud/createRecord */ "./pages/app/libs/queries/crud/createRecord.ts");
/* harmony import */ var _libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../libs/queries/crud/rawQuery */ "./pages/app/libs/queries/crud/rawQuery.ts");
/* harmony import */ var _libs_queries_crud_updateRecord__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../libs/queries/crud/updateRecord */ "./pages/app/libs/queries/crud/updateRecord.ts");
/* harmony import */ var _libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../libs/ui/UIBody */ "./pages/app/libs/ui/UIBody.tsx");
/* harmony import */ var _libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../libs/ui/UIButton */ "./pages/app/libs/ui/UIButton.tsx");
/* harmony import */ var _libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../libs/ui/UIContainer */ "./pages/app/libs/ui/UIContainer.tsx");
/* harmony import */ var _libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../libs/ui/UIFieldText */ "./pages/app/libs/ui/UIFieldText.tsx");
/* harmony import */ var _libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../libs/ui/UIHead */ "./pages/app/libs/ui/UIHead.tsx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _MuridList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./MuridList */ "./pages/app/screens/admin/Kelas/MuridList.tsx");



var _jsxFileName = "/home/hendikmdi/Documents/edumatis-rnwa/web/pages/app/screens/admin/Kelas/KelasDetail.tsx";











/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_11__["observer"])(function (_ref) {
  var navigation = _ref.navigation;
  var data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_11__["useObservable"])({
    loading: true,
    murids: [],
    form: navigation.getParam("item")
  });
  Object(react__WEBPACK_IMPORTED_MODULE_12__["useEffect"])(function () {
    var fetch =
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var res;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_4__["default"])("{\n        murid(where: {kelas_murids: {kelas_id: {_eq: ".concat(data.form.id, "}}}) {\n          id\n          email\n          data\n          is_active\n          nisn\n          no_akta_kelahiran\n          nsa\n          tgl_lahir\n          updated_at\n          nama_murid\n        }\n      }\n      "));

              case 2:
                res = _context.sent;
                data.murids = res.murid;
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
  return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_10__["default"], {
    navigation: navigation,
    title: " Kelas " + (data.form.id ? "#".concat(data.form.id) : "Baru"),
    onBack: function onBack() {
      navigation.goBack();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onPress:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var form;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              form = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, data.form);
              delete form.kelas_murids_aggregate;

              if (!form.id) {
                _context2.next = 7;
                break;
              }

              _context2.next = 5;
              return Object(_libs_queries_crud_updateRecord__WEBPACK_IMPORTED_MODULE_5__["default"])("kelas", form);

            case 5:
              _context2.next = 9;
              break;

            case 7:
              _context2.next = 9;
              return Object(_libs_queries_crud_createRecord__WEBPACK_IMPORTED_MODULE_3__["default"])("kelas", form);

            case 9:
              navigation.goBack();

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Simpan")), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: "Nama Kelas",
    setValue: function setValue(value) {
      data.form.nama_kelas = value;
    },
    value: data.form.nama_kelas || "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_MuridList__WEBPACK_IMPORTED_MODULE_13__["default"], {
    kelas: data.form,
    list: data.murids,
    loading: data.loading,
    navigation: navigation,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  })));
}));

/***/ }),

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
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_12__);




var _jsxFileName = "/home/hendikmdi/Documents/edumatis-rnwa/web/pages/app/screens/admin/Kelas/KelasPicker.tsx";









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

/***/ }),

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
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _MuridDetailProfil__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./MuridDetailProfil */ "./pages/app/screens/admin/Kelas/MuridDetailProfil.tsx");
/* harmony import */ var _MuridDetailSide__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./MuridDetailSide */ "./pages/app/screens/admin/Kelas/MuridDetailSide.tsx");
/* harmony import */ var _libs_queries_crud_updateRecord__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../libs/queries/crud/updateRecord */ "./pages/app/libs/queries/crud/updateRecord.ts");
/* harmony import */ var _libs_queries_crud_createRecord__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../libs/queries/crud/createRecord */ "./pages/app/libs/queries/crud/createRecord.ts");
/* harmony import */ var _libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../libs/ui/UIRow */ "./pages/app/libs/ui/UIRow.tsx");
/* harmony import */ var _libs_ui_UICol__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../libs/ui/UICol */ "./pages/app/libs/ui/UICol.tsx");
/* harmony import */ var _libs_ui_UIFieldSelectNative__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../libs/ui/UIFieldSelectNative */ "./pages/app/libs/ui/UIFieldSelectNative.tsx");
/* harmony import */ var _libs_queries_user_hashPassword__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../libs/queries/user/hashPassword */ "./pages/app/libs/queries/user/hashPassword.ts");



var _jsxFileName = "/home/hendikmdi/Documents/edumatis-rnwa/web/pages/app/screens/admin/Kelas/MuridDetail.tsx";

















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

/***/ }),

/***/ "./pages/app/screens/admin/Kelas/MuridDetailProfil.tsx":
/*!*************************************************************!*\
  !*** ./pages/app/screens/admin/Kelas/MuridDetailProfil.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../libs/ui/UIBody */ "./pages/app/libs/ui/UIBody.tsx");
/* harmony import */ var _libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../libs/ui/UIContainer */ "./pages/app/libs/ui/UIContainer.tsx");
/* harmony import */ var _libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../libs/ui/UIHead */ "./pages/app/libs/ui/UIHead.tsx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _MuridDetailSide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MuridDetailSide */ "./pages/app/screens/admin/Kelas/MuridDetailSide.tsx");
/* harmony import */ var _libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../libs/ui/UIButton */ "./pages/app/libs/ui/UIButton.tsx");
/* harmony import */ var _MuridDetail__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MuridDetail */ "./pages/app/screens/admin/Kelas/MuridDetail.tsx");
/* harmony import */ var _libs_ui_UIJson__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../libs/ui/UIJson */ "./pages/app/libs/ui/UIJson.tsx");



var _jsxFileName = "/home/hendikmdi/Documents/edumatis-rnwa/web/pages/app/screens/admin/Kelas/MuridDetailProfil.tsx";










/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__["observer"])(function (_ref) {
  var navigation = _ref.navigation,
      parentNavigation = _ref.parentNavigation;
  var data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__["useObservable"])({
    loading: true,
    form: parentNavigation.getParam("item"),
    kelas: parentNavigation.getParam("kelas")
  });
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_5__["default"], {
    navigation: navigation,
    title: data.form.id ? "Detail Siswa #".concat(data.form.id) : "Buat Siswa Baru",
    onBack: function onBack() {
      parentNavigation.goBack();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
              return Object(_MuridDetail__WEBPACK_IMPORTED_MODULE_11__["saveUser"])(form, data.kelas.id);

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
      lineNumber: 30
    },
    __self: this
  }, "Simpan")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_8__["View"], {
    style: {
      flexDirection: "row",
      flex: 1,
      borderTopColor: "#ccc",
      borderTopWidth: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_MuridDetailSide__WEBPACK_IMPORTED_MODULE_9__["default"], {
    navigation: navigation,
    form: data.form,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, data.form.data ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_libs_ui_UIJson__WEBPACK_IMPORTED_MODULE_12__["default"], {
    data: data.form.data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "\u2014 Data Diri Kosong \u2014 "))));
}));

/***/ }),

/***/ "./pages/app/screens/admin/Kelas/MuridDetailSide.tsx":
/*!***********************************************************!*\
  !*** ./pages/app/screens/admin/Kelas/MuridDetailSide.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config */ "./pages/app/config.ts");
/* harmony import */ var _libs_ui_UIImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../libs/ui/UIImage */ "./pages/app/libs/ui/UIImage.tsx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/hendikmdi/Documents/edumatis-rnwa/web/pages/app/screens/admin/Kelas/MuridDetailSide.tsx";





var Button = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["observer"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_4__["TouchableOpacity"], {
    onPress: props.onPress,
    style: {
      flexDirection: "row",
      alignItems: "center",
      alignContent: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
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
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    style: {
      color: _config__WEBPACK_IMPORTED_MODULE_0__["default"].color.main
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
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
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Button, {
    text: "Data Sistem",
    onPress: function onPress() {
      navigation.replace("MuridSistem");
    },
    image: __webpack_require__(/*! ../../../imgs/shield.png */ "./pages/app/imgs/shield.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), form && form.id && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Button, {
    text: "Data Diri",
    onPress: function onPress() {
      navigation.replace("MuridProfil");
    },
    image: __webpack_require__(/*! ../../../imgs/user.png */ "./pages/app/imgs/user.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }));
});

/***/ }),

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
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "/home/hendikmdi/Documents/edumatis-rnwa/web/pages/app/screens/admin/Kelas/MuridList.tsx";








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
      var hasDetail = false;
      var list = Object(mobx__WEBPACK_IMPORTED_MODULE_8__["toJS"])(data.list);
      list.forEach(function (item) {
        if (item.data && item.data.nik) {
          hasDetail = true;
        }
      });
      var header = [];
      var finalList = [];
      header.push("nisn");
      header.push("nsa");
      header.push("nama_lengkap");
      header.push("tgl_lahir");

      if (hasDetail) {
        list.forEach(function (item) {
          if (item.data && item.data.nik) {
            for (var _i in item.data) {
              header.push(_i);
            }
          }
        });
      }

      finalList.push(header);
      list.forEach(function (item) {
        var row = [];
        row.push(item["nisn"]);
        row.push(item["nsa"]);
        row.push(item["nama_murid"]);
        row.push(item["tgl_lahir"]);

        if (item.data && item.data.nik) {
          for (var _i2 in item.data) {
            row.push(item.data[_i2]);
          }
        }

        finalList.push(row);
      });
      console.log(finalList);
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
      pom.setAttribute("download", "Kelas_".concat(data.kelas.nama_kelas.replace(/[\W_]+/g, "_"), ".csv"));
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

/***/ }),

/***/ "./pages/app/screens/admin/Kewajiban/Kewajiban.tsx":
/*!*********************************************************!*\
  !*** ./pages/app/screens/admin/Kewajiban/Kewajiban.tsx ***!
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
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _libs_nav_StackNav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../libs/nav/StackNav */ "./pages/app/libs/nav/StackNav.tsx");
/* harmony import */ var _KewajibanDetail__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./KewajibanDetail */ "./pages/app/screens/admin/Kewajiban/KewajibanDetail.tsx");


var _jsxFileName = "/home/hendikmdi/Documents/edumatis-rnwa/web/pages/app/screens/admin/Kewajiban/Kewajiban.tsx";












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
    navigation: navigation,
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
      lineNumber: 40
    },
    __self: this
  }, "+ Kewajiban Baru")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
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
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_11__["View"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
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
          lineNumber: 69
        },
        __self: this
      }, item.nama_kewajiban), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_11__["Text"], {
        style: {
          fontSize: 14
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Rp ", item.nominal.toLocaleString())), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_11__["View"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_11__["Text"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, item.tipe_pembayaran)));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
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

/***/ "./pages/app/screens/admin/Kewajiban/KewajibanDetail.tsx":
/*!***************************************************************!*\
  !*** ./pages/app/screens/admin/Kewajiban/KewajibanDetail.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _libs_queries_crud_createRecord__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../libs/queries/crud/createRecord */ "./pages/app/libs/queries/crud/createRecord.ts");
/* harmony import */ var _libs_queries_crud_deleteRecord__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../libs/queries/crud/deleteRecord */ "./pages/app/libs/queries/crud/deleteRecord.ts");
/* harmony import */ var _libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../libs/queries/crud/rawQuery */ "./pages/app/libs/queries/crud/rawQuery.ts");
/* harmony import */ var _libs_queries_crud_updateRecord__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../libs/queries/crud/updateRecord */ "./pages/app/libs/queries/crud/updateRecord.ts");
/* harmony import */ var _libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../libs/ui/UIBody */ "./pages/app/libs/ui/UIBody.tsx");
/* harmony import */ var _libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../libs/ui/UIButton */ "./pages/app/libs/ui/UIButton.tsx");
/* harmony import */ var _libs_ui_UICol__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../libs/ui/UICol */ "./pages/app/libs/ui/UICol.tsx");
/* harmony import */ var _libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../libs/ui/UIContainer */ "./pages/app/libs/ui/UIContainer.tsx");
/* harmony import */ var _libs_ui_UIFieldSelectNative__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../libs/ui/UIFieldSelectNative */ "./pages/app/libs/ui/UIFieldSelectNative.tsx");
/* harmony import */ var _libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../libs/ui/UIFieldText */ "./pages/app/libs/ui/UIFieldText.tsx");
/* harmony import */ var _libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../libs/ui/UIHead */ "./pages/app/libs/ui/UIHead.tsx");
/* harmony import */ var _libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../libs/ui/UIRow */ "./pages/app/libs/ui/UIRow.tsx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _Kelas_KelasPicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../Kelas/KelasPicker */ "./pages/app/screens/admin/Kelas/KelasPicker.tsx");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! lodash.get */ "lodash.get");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_19__);



var _jsxFileName = "/home/hendikmdi/Documents/edumatis-rnwa/web/pages/app/screens/admin/Kewajiban/KewajibanDetail.tsx";

















/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_15__["observer"])(function (_ref) {
  var navigation = _ref.navigation;
  var data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_15__["useObservable"])({
    form: navigation.getParam("item")
  });
  var count = lodash_get__WEBPACK_IMPORTED_MODULE_19___default()(data, "form.transaksi_aggregate.aggregate.count");
  Object(react__WEBPACK_IMPORTED_MODULE_16__["useEffect"])(function () {
    if (data.form.id) {
      Object(_libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_5__["default"])("\n      {\n        kewajiban(where: {id: {_eq: ".concat(data.form.id, "}}) {\n          kelas\n          batas_pembayaran\n          id\n          nominal\n          nama_kewajiban\n          status\n          tgl_batas_pembayaran_bulan\n          tipe_pembayaran\n          transaksi_aggregate {\n            aggregate {\n              count\n            }\n          }\n        }\n      }\n    ")).then(function (res) {
        data.form = res.kewajiban[0];
      });
    }
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_13__["default"], {
    navigation: navigation,
    title: " Kewajiban " + (data.form.id ? "#".concat(data.form.id, ": ").concat(data.form.nama_kewajiban) : "Baru"),
    onBack: function onBack() {
      navigation.goBack();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onPress:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!data.form.id) {
                _context.next = 5;
                break;
              }

              _context.next = 3;
              return Object(_libs_queries_crud_updateRecord__WEBPACK_IMPORTED_MODULE_6__["default"])("kewajiban", data.form);

            case 3:
              _context.next = 7;
              break;

            case 5:
              _context.next = 7;
              return Object(_libs_queries_crud_createRecord__WEBPACK_IMPORTED_MODULE_3__["default"])("kewajiban", data.form);

            case 7:
              navigation.goBack();

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Simpan"), count === 0 && react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      backgroundColor: "red",
      marginLeft: -5
    },
    onPress:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(react_native_web__WEBPACK_IMPORTED_MODULE_17__["Platform"].OS === "web")) {
                _context3.next = 8;
                break;
              }

              if (!confirm("Apakah anda yakin ingin menghapus kewajiban ini ?")) {
                _context3.next = 6;
                break;
              }

              if (!data.form.id) {
                _context3.next = 5;
                break;
              }

              _context3.next = 5;
              return Object(_libs_queries_crud_deleteRecord__WEBPACK_IMPORTED_MODULE_4__["default"])("kewajiban", {
                id: data.form.id
              });

            case 5:
              navigation.goBack();

            case 6:
              _context3.next = 9;
              break;

            case 8:
              react_native_web__WEBPACK_IMPORTED_MODULE_17__["Alert"].alert("Menghapus Kewajiban", "Apakah Anda yakin ingin menghapus kewajiban ini ?", [{
                text: "NO",
                style: "cancel",
                onPress: function onPress() {}
              }, {
                text: "YES",
                onPress: function () {
                  var _onPress = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
                  /*#__PURE__*/
                  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
                    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            if (!data.form.id) {
                              _context2.next = 3;
                              break;
                            }

                            _context2.next = 3;
                            return Object(_libs_queries_crud_deleteRecord__WEBPACK_IMPORTED_MODULE_4__["default"])("kewajiban", {
                              id: data.form.id
                            });

                          case 3:
                            navigation.goBack();

                          case 4:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  function onPress() {
                    return _onPress.apply(this, arguments);
                  }

                  return onPress;
                }()
              }]);

            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Hapus"))), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_14__["default"], {
    style: {
      paddingBottom: 25
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, count === 0 ? react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_17__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "Transaksi untuk kewajiban ini masih kosong.") : react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_17__["TouchableOpacity"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_17__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "Terdapat"), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_17__["Text"], {
    style: {
      marginHorizontal: 5,
      textDecorationLine: "underline"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, count, " transaksi"), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_17__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, " untuk kewajiban ini.")))), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_12__["default"], {
    label: "Nama Kewajiban",
    setValue: function setValue(value) {
      data.form.nama_kewajiban = value;
    },
    value: data.form.nama_kewajiban,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_9__["default"], {
    size: 4,
    sizesm: 6,
    sizexs: 6,
    sizemd: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_12__["default"], {
    label: "Nominal",
    setValue: function setValue(value) {
      data.form.nominal = value;
    },
    value: data.form.nominal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_9__["default"], {
    size: 4,
    sizesm: 6,
    sizexs: 6,
    sizemd: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UIFieldSelectNative__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: "Status Kewajiban",
    items: ["aktif", "non-aktif"],
    setValue: function setValue(value) {
      data.form.status = value;
    },
    value: data.form.status,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_9__["default"], {
    size: 4,
    sizesm: 6,
    sizexs: 6,
    sizemd: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UIFieldSelectNative__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: "Tipe Pembayaran",
    items: ["Bulanan", "Insidentil"],
    setValue: function setValue(value) {
      data.form.tipe_pembayaran = value;
    },
    value: data.form.tipe_pembayaran,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_Kelas_KelasPicker__WEBPACK_IMPORTED_MODULE_18__["default"], {
    form: data.form,
    renderKelasTitle: function renderKelasTitle(kelas) {
      return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_17__["Text"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, "Rp ", _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(kelas.nominal).toLocaleString(), " ");
    },
    renderKelas: function renderKelas(kelas, k) {
      return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_17__["View"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_12__["default"], {
        label: "Nominal untuk murid kelas ".concat(k.nama_kelas),
        value: kelas.nominal,
        setValue: function setValue(value) {
          kelas.nominal = value;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_17__["Text"], {
        style: {
          padding: 10,
          paddingLeft: 15,
          color: "#333"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, "Khusus untuk murid ini, di set sesuai nominal tertera:"));
    },
    renderMurid: function renderMurid(murid, kelas) {
      return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_9__["default"], {
        size: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_12__["default"], {
        label: "Nominal",
        value: murid.nominal || kelas.nominal,
        setValue: function setValue(value) {
          murid.nominal = value;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  })));
}));

/***/ }),

/***/ "./pages/app/screens/admin/Pengumuman/Pengumuman.tsx":
/*!***********************************************************!*\
  !*** ./pages/app/screens/admin/Pengumuman/Pengumuman.tsx ***!
  \***********************************************************/
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
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _libs_nav_StackNav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../libs/nav/StackNav */ "./pages/app/libs/nav/StackNav.tsx");
/* harmony import */ var _PengumumanDetail__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./PengumumanDetail */ "./pages/app/screens/admin/Pengumuman/PengumumanDetail.tsx");


var _jsxFileName = "/home/hendikmdi/Documents/edumatis-rnwa/web/pages/app/screens/admin/Pengumuman/Pengumuman.tsx";












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
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
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
  return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_6__["default"], {
    navigation: navigation,
    title: "Pengumuman",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: "small",
    onPress: function onPress() {
      navigation.navigate("PengumumanDetail", {
        item: {
          kelas: {}
        }
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "+ Pengumuman Baru")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: data.list,
    loading: data.loading,
    render: function render(list) {
      var item = list.item;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_libs_ui_UIListItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onPress: function onPress() {
          navigation.navigate("PengumumanDetail", {
            item: item
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_11__["View"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
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
          lineNumber: 69
        },
        __self: this
      }, item.pengumuman)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_11__["View"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_11__["Text"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, item.status)));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
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

/***/ "./pages/app/screens/admin/Pengumuman/PengumumanDetail.tsx":
/*!*****************************************************************!*\
  !*** ./pages/app/screens/admin/Pengumuman/PengumumanDetail.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../libs/ui/UIBody */ "./pages/app/libs/ui/UIBody.tsx");
/* harmony import */ var _libs_ui_UICol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../libs/ui/UICol */ "./pages/app/libs/ui/UICol.tsx");
/* harmony import */ var _libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../libs/ui/UIContainer */ "./pages/app/libs/ui/UIContainer.tsx");
/* harmony import */ var _libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../libs/ui/UIFieldText */ "./pages/app/libs/ui/UIFieldText.tsx");
/* harmony import */ var _libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../libs/ui/UIHead */ "./pages/app/libs/ui/UIHead.tsx");
/* harmony import */ var _libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../libs/ui/UIRow */ "./pages/app/libs/ui/UIRow.tsx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _libs_ui_UIFieldSelectNative__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../libs/ui/UIFieldSelectNative */ "./pages/app/libs/ui/UIFieldSelectNative.tsx");
/* harmony import */ var _Kelas_KelasPicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Kelas/KelasPicker */ "./pages/app/screens/admin/Kelas/KelasPicker.tsx");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../libs/ui/UIButton */ "./pages/app/libs/ui/UIButton.tsx");
/* harmony import */ var _libs_queries_crud_updateRecord__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../libs/queries/crud/updateRecord */ "./pages/app/libs/queries/crud/updateRecord.ts");
/* harmony import */ var _libs_queries_crud_createRecord__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../libs/queries/crud/createRecord */ "./pages/app/libs/queries/crud/createRecord.ts");
/* harmony import */ var _libs_queries_crud_deleteRecord__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../libs/queries/crud/deleteRecord */ "./pages/app/libs/queries/crud/deleteRecord.ts");




var _jsxFileName = "/home/hendikmdi/Documents/edumatis-rnwa/web/pages/app/screens/admin/Pengumuman/PengumumanDetail.tsx";















/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_10__["observer"])(function (_ref) {
  var navigation = _ref.navigation;
  var data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_10__["useObservable"])({
    loading: true,
    form: navigation.getParam("item")
  });
  return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_8__["default"], {
    navigation: navigation,
    title: " Pengumuman " + (data.form.id ? "#".concat(data.form.id) : "Baru"),
    onBack: function onBack() {
      navigation.goBack();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_15__["default"], {
    onPress:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
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
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Simpan"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_15__["default"], {
    style: {
      backgroundColor: "red",
      marginLeft: -5
    },
    onPress:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(react_native_web__WEBPACK_IMPORTED_MODULE_14__["Platform"].OS === "web")) {
                _context3.next = 8;
                break;
              }

              if (!confirm("Apakah anda yakin ingin menghapus pengumuman ini ?")) {
                _context3.next = 6;
                break;
              }

              if (!data.form.id) {
                _context3.next = 5;
                break;
              }

              _context3.next = 5;
              return Object(_libs_queries_crud_deleteRecord__WEBPACK_IMPORTED_MODULE_18__["default"])("pengumuman", {
                id: data.form.id
              });

            case 5:
              navigation.goBack();

            case 6:
              _context3.next = 9;
              break;

            case 8:
              react_native_web__WEBPACK_IMPORTED_MODULE_14__["Alert"].alert("Menghapus Kewajiban", "Apakah Anda yakin ingin menghapus pengumuman ini ?", [{
                text: "NO",
                style: "cancel",
                onPress: function onPress() {}
              }, {
                text: "YES",
                onPress: function () {
                  var _onPress = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
                  /*#__PURE__*/
                  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
                    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            if (!data.form.id) {
                              _context2.next = 3;
                              break;
                            }

                            _context2.next = 3;
                            return Object(_libs_queries_crud_deleteRecord__WEBPACK_IMPORTED_MODULE_18__["default"])("pengumuman", {
                              id: data.form.id
                            });

                          case 3:
                            navigation.goBack();

                          case 4:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  function onPress() {
                    return _onPress.apply(this, arguments);
                  }

                  return onPress;
                }()
              }]);

            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Hapus"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: "Text Pengumuman",
    setValue: function setValue(value) {
      data.form.pengumuman = value;
    },
    value: data.form.pengumuman,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
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
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Kelas_KelasPicker__WEBPACK_IMPORTED_MODULE_13__["default"], {
    form: data.form,
    renderKelas: function renderKelas(kelas, detail) {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_14__["Text"], {
        style: {
          paddingLeft: 15,
          paddingVertical: 10,
          color: "#333"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(kelas.murid).length === 1 ? "Untuk semua murid di kelas ".concat(detail.nama_kelas) : "Khusus untuk murid dibawah ini");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  })));
}));

/***/ }),

/***/ "./pages/app/screens/admin/SideBar.tsx":
/*!*********************************************!*\
  !*** ./pages/app/screens/admin/SideBar.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./pages/app/config.ts");
/* harmony import */ var _libs_nav_NavContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libs/nav/NavContainer */ "./pages/app/libs/nav/NavContainer.tsx");
/* harmony import */ var _libs_ui_UIImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../libs/ui/UIImage */ "./pages/app/libs/ui/UIImage.tsx");
/* harmony import */ var _stores_RootStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../stores/RootStore */ "./pages/app/stores/RootStore.ts");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "/home/hendikmdi/Documents/edumatis-rnwa/web/pages/app/screens/admin/SideBar.tsx";







var Button = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__["observer"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_7__["TouchableOpacity"], {
    onPress: props.onPress,
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.style, {
      flexDirection: "row",
      alignItems: "center",
      alignContent: "center"
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_libs_ui_UIImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      width: 20,
      margin: 10,
      height: 20
    },
    source: props.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    style: {
      color: _config__WEBPACK_IMPORTED_MODULE_1__["default"].color.mainText
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, props.text));
});
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var navigation = _ref.navigation;
  var navigateTo = Object(_libs_nav_NavContainer__WEBPACK_IMPORTED_MODULE_2__["createNavigateTo"])(navigation);
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_7__["View"], {
    style: s.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_7__["View"], {
    style: {
      alignItems: "center",
      justifyContent: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_libs_ui_UIImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    source: __webpack_require__(/*! ../../imgs/logo.png */ "./pages/app/imgs/logo.png"),
    mobileStyle: {
      height: 160
    },
    style: {
      width: "70%",
      paddingTop: 20,
      paddingBottom: 25
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Button, {
    text: "Transaksi",
    onPress: function onPress() {
      navigateTo("Transaksi");
    },
    image: __webpack_require__(/*! ../../imgs/transaksi.png */ "./pages/app/imgs/transaksi.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Button, {
    text: "Kewajiban",
    onPress: function onPress() {
      navigateTo("Kewajiban");
    },
    image: __webpack_require__(/*! ../../imgs/kewajiban.png */ "./pages/app/imgs/kewajiban.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Button, {
    text: "Pengumuman",
    onPress: function onPress() {
      navigateTo("Pengumuman");
    },
    image: __webpack_require__(/*! ../../imgs/pengumuman.png */ "./pages/app/imgs/pengumuman.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Button, {
    text: "Kelas & Murid",
    onPress: function onPress() {
      navigateTo("Kelas");
    },
    image: __webpack_require__(/*! ../../imgs/kelas.png */ "./pages/app/imgs/kelas.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Button, {
    text: "Logout",
    style: {
      marginTop: 20
    },
    image: __webpack_require__(/*! ../../imgs/logout.png */ "./pages/app/imgs/logout.png"),
    onPress: function onPress() {
      _stores_RootStore__WEBPACK_IMPORTED_MODULE_4__["RootStore"].session.logout();
      navigation.popToTop();
      navigation.replace("Login");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }));
});
var s = react_native_web__WEBPACK_IMPORTED_MODULE_7__["StyleSheet"].create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    backgroundColor: _config__WEBPACK_IMPORTED_MODULE_1__["default"].color.main
  }
});

/***/ }),

/***/ "./pages/app/screens/admin/Transaksi/Transaksi.tsx":
/*!*********************************************************!*\
  !*** ./pages/app/screens/admin/Transaksi/Transaksi.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../libs/queries/crud/rawQuery */ "./pages/app/libs/queries/crud/rawQuery.ts");
/* harmony import */ var _libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../libs/ui/UIBody */ "./pages/app/libs/ui/UIBody.tsx");
/* harmony import */ var _libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../libs/ui/UIButton */ "./pages/app/libs/ui/UIButton.tsx");
/* harmony import */ var _libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../libs/ui/UIContainer */ "./pages/app/libs/ui/UIContainer.tsx");
/* harmony import */ var _libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../libs/ui/UIHead */ "./pages/app/libs/ui/UIHead.tsx");
/* harmony import */ var _libs_ui_UIList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../libs/ui/UIList */ "./pages/app/libs/ui/UIList.tsx");
/* harmony import */ var _libs_ui_UIListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../libs/ui/UIListItem */ "./pages/app/libs/ui/UIListItem.tsx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _libs_nav_StackNav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../libs/nav/StackNav */ "./pages/app/libs/nav/StackNav.tsx");
/* harmony import */ var _TransaksiDetail__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./TransaksiDetail */ "./pages/app/screens/admin/Transaksi/TransaksiDetail.tsx");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ "dayjs/plugin/relativeTime");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lodash.get */ "lodash.get");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_16__);



var _jsxFileName = "/home/hendikmdi/Documents/edumatis-rnwa/web/pages/app/screens/admin/Transaksi/Transaksi.tsx";













var dayjs = __webpack_require__(/*! dayjs */ "dayjs");



dayjs.extend(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_15___default.a);
var Transaksi = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_10__["observer"])(function (_ref) {
  var navigation = _ref.navigation;
  var data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_10__["useObservable"])({
    list: [],
    loading: true
  });
  Object(react__WEBPACK_IMPORTED_MODULE_11__["useEffect"])(function () {
    var fetch =
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var result;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_3__["default"])("{\n        transaksi(order_by: {tstamp: asc}) {\n          id\n          status\n          tstamp\n          amount: detail(path:\"amount\")\n          detail(path:\"status\")\n          paid(path:\"status\")\n          murid {\n            id\n            nama_murid\n            nsa\n            kelas_murids {\n              kelas {\n                nama_kelas\n              }\n            }\n          }\n          kewajiban {\n            nama_kewajiban\n          }\n        }\n      }\n      ");

              case 2:
                result = _context.sent;
                data.list = result.transaksi;
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
  return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_7__["default"], {
    navigation: navigation,
    title: "Transaksi",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: "small",
    onPress: function onPress() {
      navigation.navigate("TransaksiDetail", {
        item: {
          nominal: 100000,
          kelas: {}
        }
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "+ Transaksi Baru")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_libs_ui_UIList__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: data.list,
    loading: data.loading,
    render: function render(list) {
      var item = list.item;
      var tgl = dayjs(item.tstamp);
      var fromday = tgl.fromNow();
      var kelas = lodash_get__WEBPACK_IMPORTED_MODULE_16___default()(item, "murid.kelas_murids[0].kelas.nama_kelas") || "Semua Kelas";

      var nominal = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(item.amount || item.nominal);

      var status = (item.paid || item.detail || item.status).toLowerCase();
      if (status === "paid") status = "success";
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_libs_ui_UIListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onPress: function onPress() {
          navigation.navigate("TransaksiDetail", {
            item: item
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_12__["View"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_12__["Text"], {
        style: {
          fontSize: 15,
          fontWeight: "bold",
          color: "#555"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "#", item.id, " ", item.kewajiban.nama_kewajiban, " - Rp", " ", (nominal || 0).toLocaleString(), " ", "(", status, ")"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_12__["Text"], {
        style: {
          fontSize: 14
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, item.murid.nama_murid, " - ", kelas)), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_12__["View"], {
        style: {
          alignItems: "flex-end"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_12__["Text"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, fromday), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_12__["Text"], {
        style: {
          fontSize: 12
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, tgl.format("DD MMM YYYY - hh.mm"))));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_libs_nav_StackNav__WEBPACK_IMPORTED_MODULE_13__["default"])({
  Transaksi: {
    screen: Transaksi
  },
  TransaksiDetail: {
    screen: _TransaksiDetail__WEBPACK_IMPORTED_MODULE_14__["default"]
  }
}));

/***/ }),

/***/ "./pages/app/screens/admin/Transaksi/TransaksiDetail.tsx":
/*!***************************************************************!*\
  !*** ./pages/app/screens/admin/Transaksi/TransaksiDetail.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../libs/ui/UIBody */ "./pages/app/libs/ui/UIBody.tsx");
/* harmony import */ var _libs_ui_UICol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../libs/ui/UICol */ "./pages/app/libs/ui/UICol.tsx");
/* harmony import */ var _libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../libs/ui/UIContainer */ "./pages/app/libs/ui/UIContainer.tsx");
/* harmony import */ var _libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../libs/ui/UIHead */ "./pages/app/libs/ui/UIHead.tsx");
/* harmony import */ var _libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../libs/ui/UIRow */ "./pages/app/libs/ui/UIRow.tsx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "/home/hendikmdi/Documents/edumatis-rnwa/web/pages/app/screens/admin/Transaksi/TransaksiDetail.tsx";








/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__["observer"])(function (_ref) {
  var navigation = _ref.navigation;
  var data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__["useObservable"])({
    form: navigation.getParam("item")
  });
  var item = data.form;

  var nominal = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(item.amount || item.nominal || 0);

  var status = (item.paid || item.detail || item.status).toLowerCase();
  if (status === "paid") status = "success";
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_4__["default"], {
    navigation: navigation,
    title: "#".concat(item.id, " ").concat(item.kewajiban.nama_kewajiban, " - Rp ").concat(nominal.toLocaleString()),
    onBack: function onBack() {
      navigation.goBack();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 1,
    sizexs: 4,
    sizemd: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Siswa:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 11,
    sizexs: 8,
    sizemd: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, item.murid.nama_murid)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 1,
    sizexs: 4,
    sizemd: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Kelas:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 11,
    sizexs: 8,
    sizemd: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, item.murid.kelas_murids[0].kelas.nama_kelas || "Semua Kelas")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 1,
    sizexs: 4,
    sizemd: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Nominal:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 11,
    sizexs: 8,
    sizemd: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Rp ", nominal.toLocaleString()))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 1,
    sizexs: 4,
    sizemd: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Status:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 11,
    sizexs: 8,
    sizemd: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, status))));
}));

/***/ }),

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
/* harmony import */ var _Pengumuman_Pengumuman__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pengumuman/Pengumuman */ "./pages/app/screens/siswa/Pengumuman/Pengumuman.tsx");




/* harmony default export */ __webpack_exports__["default"] = (Object(_libs_nav_SideNav__WEBPACK_IMPORTED_MODULE_2__["default"])({
  Kewajiban: {
    screen: _Kewajiban_Kewajiban__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  Pengumuman: {
    screen: _Pengumuman_Pengumuman__WEBPACK_IMPORTED_MODULE_3__["default"]
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
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _libs_nav_StackNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../libs/nav/StackNav */ "./pages/app/libs/nav/StackNav.tsx");
/* harmony import */ var _libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../libs/queries/crud/rawQuery */ "./pages/app/libs/queries/crud/rawQuery.ts");
/* harmony import */ var _libs_queries_user_getsetSession__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../libs/queries/user/getsetSession */ "./pages/app/libs/queries/user/getsetSession.ts");
/* harmony import */ var _libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../libs/ui/UIBody */ "./pages/app/libs/ui/UIBody.tsx");
/* harmony import */ var _libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../libs/ui/UIContainer */ "./pages/app/libs/ui/UIContainer.tsx");
/* harmony import */ var _libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../libs/ui/UIHead */ "./pages/app/libs/ui/UIHead.tsx");
/* harmony import */ var _libs_ui_UIList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../libs/ui/UIList */ "./pages/app/libs/ui/UIList.tsx");
/* harmony import */ var _libs_ui_UIListItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../libs/ui/UIListItem */ "./pages/app/libs/ui/UIListItem.tsx");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! dayjs */ "dayjs");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _KewajibanDetail__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./KewajibanDetail */ "./pages/app/screens/siswa/Kewajiban/KewajibanDetail.tsx");




var _jsxFileName = "/home/hendikmdi/Documents/edumatis-rnwa/web/pages/app/screens/siswa/Kewajiban/Kewajiban.tsx";













var Kewajiban = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_13__["observer"])(function (_ref) {
  var navigation = _ref.navigation;
  var data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_13__["useObservable"])({
    list: [],
    loading: true
  });
  return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: "Kewajiban bulan ini",
    navigation: navigation,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_libs_ui_UIList__WEBPACK_IMPORTED_MODULE_10__["default"], {
    data: data.list,
    loading: data.loading,
    render: function render(list) {
      var item = list.item;
      return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_libs_ui_UIListItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        onPress: function onPress() {
          navigation.navigate("KewajibanDetail", {
            item: item
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_15__["View"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_15__["Text"], {
        style: {
          fontSize: 15,
          fontWeight: "bold",
          color: "#555"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, item.nama_kewajiban), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_15__["Text"], {
        style: {
          fontSize: 14
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Rp ", item.nominal.toLocaleString(), " (", item.status, ")")), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_15__["View"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_15__["Text"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, item.tipe_pembayaran)));
    },
    reload:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
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
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
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

/***/ "./pages/app/screens/siswa/Kewajiban/KewajibanDetail.tsx":
/*!***************************************************************!*\
  !*** ./pages/app/screens/siswa/Kewajiban/KewajibanDetail.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _libs_queries_crud_createRecord__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../libs/queries/crud/createRecord */ "./pages/app/libs/queries/crud/createRecord.ts");
/* harmony import */ var _libs_queries_crud_updateRecord__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../libs/queries/crud/updateRecord */ "./pages/app/libs/queries/crud/updateRecord.ts");
/* harmony import */ var _libs_queries_user_getsetSession__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../libs/queries/user/getsetSession */ "./pages/app/libs/queries/user/getsetSession.ts");
/* harmony import */ var _libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../libs/ui/UIContainer */ "./pages/app/libs/ui/UIContainer.tsx");
/* harmony import */ var _libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../libs/ui/UIHead */ "./pages/app/libs/ui/UIHead.tsx");
/* harmony import */ var _libs_ui_UIWebView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../libs/ui/UIWebView */ "./pages/app/libs/ui/UIWebView.tsx");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! dayjs */ "dayjs");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_14__);




var _jsxFileName = "/home/hendikmdi/Documents/edumatis-rnwa/web/pages/app/screens/siswa/Kewajiban/KewajibanDetail.tsx";











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
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
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
                  description: "".concat(session.sekolah.nama, " - ").concat(session.kelas.nama, " - ").concat(session.murid.nama_murid, " - ").concat(data.form.nama_kewajiban),
                  amount: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(data.form.nominal) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(session.sekolah.margin)
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
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_8__["default"], {
    navigation: navigation,
    title: "".concat(data.form.nama_kewajiban, " (").concat(data.form.status, ")"),
    onBack: function onBack() {
      navigation.goBack();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_14__["View"], {
    style: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, data.error === "" && !transaksi.detail && react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_14__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Membuat Invoice..."), data.error != "" && react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_14__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, data.error), data.error === "" && transaksi.detail && !transaksi.paid && react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_14__["View"], {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_libs_ui_UIWebView__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      flex: 1
    },
    source: {
      html: "\n            <!DOCTYPE html>\n            <html>\n                <head>\n                <meta name=\"viewport\" content=\" initial-scale=1\">\n                </head> \n                <body>\n                <center style=\"margin:100px\">Memuat<br/> Instruksi Pembayaran...</center>\n                <iframe \n                style=\"position:absolute;left:0;right:0;bottom:0;top:0;\"\n                width=\"100%\" height=\"100%\" src=\"".concat(transaksi.detail.invoice_url, "\"  frameborder=\"0\"></iframe></div> \n            </body>\n            </html>")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }))));
}));

/***/ }),

/***/ "./pages/app/screens/siswa/Pengumuman/Pengumuman.tsx":
/*!***********************************************************!*\
  !*** ./pages/app/screens/siswa/Pengumuman/Pengumuman.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../libs/queries/crud/rawQuery */ "./pages/app/libs/queries/crud/rawQuery.ts");
/* harmony import */ var _libs_queries_user_getsetSession__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../libs/queries/user/getsetSession */ "./pages/app/libs/queries/user/getsetSession.ts");
/* harmony import */ var _libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../libs/ui/UIBody */ "./pages/app/libs/ui/UIBody.tsx");
/* harmony import */ var _libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../libs/ui/UIContainer */ "./pages/app/libs/ui/UIContainer.tsx");
/* harmony import */ var _libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../libs/ui/UIHead */ "./pages/app/libs/ui/UIHead.tsx");
/* harmony import */ var _libs_ui_UIList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../libs/ui/UIList */ "./pages/app/libs/ui/UIList.tsx");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dayjs */ "dayjs");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ "dayjs/plugin/relativeTime");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_13__);



var _jsxFileName = "/home/hendikmdi/Documents/edumatis-rnwa/web/pages/app/screens/siswa/Pengumuman/Pengumuman.tsx";











dayjs__WEBPACK_IMPORTED_MODULE_9___default.a.extend(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_10___default.a);
/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_11__["observer"])(function (_ref) {
  var navigation = _ref.navigation;
  var data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_11__["useObservable"])({
    loading: true,
    list: []
  });
  return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_7__["default"], {
    navigation: navigation,
    title: "Pengumuman",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_libs_ui_UIList__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: data.list,
    loading: data.loading,
    render: function render(list) {
      var item = list.item;
      var date = dayjs__WEBPACK_IMPORTED_MODULE_9___default()(item.tgl).fromNow();
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_13__["View"], {
        style: {
          padding: 10,
          paddingHorizontal: 15
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_13__["View"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_13__["Text"], {
        style: {
          fontSize: 15,
          fontWeight: "bold",
          color: "#555"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, item.pengumuman), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_13__["Text"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, date)));
    },
    reload:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
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
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })));
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
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./pages/app/config.ts");
/* harmony import */ var _libs_nav_NavContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../libs/nav/NavContainer */ "./pages/app/libs/nav/NavContainer.tsx");
/* harmony import */ var _libs_ui_UIImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../libs/ui/UIImage */ "./pages/app/libs/ui/UIImage.tsx");
/* harmony import */ var _stores_RootStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../stores/RootStore */ "./pages/app/stores/RootStore.ts");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _libs_queries_user_getsetSession__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../libs/queries/user/getsetSession */ "./pages/app/libs/queries/user/getsetSession.ts");
/* harmony import */ var _libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../libs/queries/crud/rawQuery */ "./pages/app/libs/queries/crud/rawQuery.ts");



var _jsxFileName = "/home/hendikmdi/Documents/edumatis-rnwa/web/pages/app/screens/siswa/SideBar.tsx";









var Button = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__["observer"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_9__["TouchableOpacity"], {
    onPress: props.onPress,
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props.style, {
      flexDirection: "row",
      alignItems: "center",
      alignContent: "center"
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_libs_ui_UIImage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      width: 20,
      margin: 10,
      height: 20
    },
    source: props.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_9__["Text"], {
    style: {
      color: _config__WEBPACK_IMPORTED_MODULE_3__["default"].color.mainText
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
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
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
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
    style: s.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_9__["View"], {
    style: {
      alignItems: "center",
      justifyContent: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_libs_ui_UIImage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    source: __webpack_require__(/*! ../../imgs/logo.png */ "./pages/app/imgs/logo.png"),
    mobileStyle: {
      height: 160
    },
    style: {
      width: "70%",
      paddingTop: 20,
      paddingBottom: 25
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_9__["View"], {
    style: {
      borderTopColor: "#8F7DD8",
      borderTopWidth: 1,
      marginBottom: 15
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_9__["Text"], {
    style: {
      padding: 10,
      paddingVertical: 2,
      color: "white"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "NSA: ", data.session.murid.nsa), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_9__["Text"], {
    style: {
      padding: 10,
      paddingVertical: 2,
      color: "white"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Nama: ", data.session.murid.nama_murid), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_9__["Text"], {
    style: {
      padding: 10,
      paddingVertical: 2,
      color: "white"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Kelas: ", data.kelas.nama_kelas), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_9__["View"], {
    style: {
      borderTopColor: "#8F7DD8",
      borderTopWidth: 1,
      marginVertical: 15
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_native_web__WEBPACK_IMPORTED_MODULE_9__["View"], {
    style: {
      flex: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Button, {
    text: "Kewajiban",
    onPress: function onPress() {
      navigateTo("Kewajiban");
    },
    image: __webpack_require__(/*! ../../imgs/kewajiban.png */ "./pages/app/imgs/kewajiban.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Button, {
    text: "Pengumuman",
    onPress: function onPress() {
      navigateTo("Pengumuman");
    },
    image: __webpack_require__(/*! ../../imgs/pengumuman.png */ "./pages/app/imgs/pengumuman.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Button, {
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
      lineNumber: 110
    },
    __self: this
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

/***/ "./pages/app/stores/RootStore.ts":
/*!***************************************!*\
  !*** ./pages/app/stores/RootStore.ts ***!
  \***************************************/
/*! exports provided: RootStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootStore", function() { return RootStore; });
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-state-tree */ "mobx-state-tree");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Session */ "./pages/app/stores/Session.ts");


var Root = mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].model("RootStore", {
  session: _Session__WEBPACK_IMPORTED_MODULE_1__["SessionRecord"]
});
var RootStore = Root.create({
  session: {
    user: {}
  }
});

/***/ }),

/***/ "./pages/app/stores/Session.ts":
/*!*************************************!*\
  !*** ./pages/app/stores/Session.ts ***!
  \*************************************/
/*! exports provided: SessionRecord, SessionList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionRecord", function() { return SessionRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionList", function() { return SessionList; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _libs_queries_user_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../libs/queries/user/login */ "./pages/app/libs/queries/user/login.ts");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-state-tree */ "mobx-state-tree");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _libs_utils_AsyncStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../libs/utils/AsyncStorage */ "./pages/app/libs/utils/AsyncStorage.ts");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./User */ "./pages/app/stores/User.ts");
/* harmony import */ var _libs_utils_List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../libs/utils/List */ "./pages/app/libs/utils/List.ts");
/* harmony import */ var _libs_utils_Record__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../libs/utils/Record */ "./pages/app/libs/utils/Record.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config */ "./pages/app/config.ts");
/* harmony import */ var _libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../libs/queries/crud/rawQuery */ "./pages/app/libs/queries/crud/rawQuery.ts");










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
        var response, result;
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
                _context.next = 8;
                return Object(_libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_9__["default"])("{\n          kelas_murid(where: {murid_id: {_eq: ".concat(response.murid.id, "}}) {\n            kelas {\n              sekolah {\n                id\n                margin\n                nama_sekolah\n              }\n              nama_kelas\n              id\n            }\n          }\n        }"));

              case 8:
                result = _context.sent;

                if (result) {
                  response.kelas = {
                    id: result.kelas_murid[0].kelas.id,
                    nama: result.kelas_murid[0].kelas.nama_kelas
                  };
                  response.sekolah = {
                    id: result.kelas_murid[0].kelas.sekolah.id,
                    margin: result.kelas_murid[0].kelas.sekolah.margin,
                    nama: result.kelas_murid[0].kelas.sekolah.nama_sekolah
                  };
                }

                _context.next = 12;
                return _libs_utils_AsyncStorage__WEBPACK_IMPORTED_MODULE_4__["default"].setItem("SESSION", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(response));

              case 12:
                return _context.abrupt("return", response);

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](0);
                console.warn(_context.t0);
                return _context.abrupt("return", false);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 15]]);
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

/***/ "./pages/app/stores/User.ts":
/*!**********************************!*\
  !*** ./pages/app/stores/User.ts ***!
  \**********************************/
/*! exports provided: UserRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRecord", function() { return UserRecord; });
/* harmony import */ var _libs_utils_Record__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libs/utils/Record */ "./pages/app/libs/utils/Record.ts");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-state-tree */ "mobx-state-tree");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__);


var UserRecord = Object(_libs_utils_Record__WEBPACK_IMPORTED_MODULE_0__["default"])({
  tableName: "user",
  columns: {
    id: mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].integer, 0),
    username: mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].string, ""),
    password: mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].maybeNull(mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].string),
    role: mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].string, "sales"),
    client_id: mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].integer, 0),
    status: mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].string, "active")
  }
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/App */ "./pages/app/App.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_app_App__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/hendikmdi/Documents/edumatis-rnwa/web/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/is-iterable":
/*!*************************************************!*\
  !*** external "core-js/library/fn/is-iterable" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "dayjs":
/*!************************!*\
  !*** external "dayjs" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dayjs");

/***/ }),

/***/ "dayjs/plugin/relativeTime":
/*!********************************************!*\
  !*** external "dayjs/plugin/relativeTime" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dayjs/plugin/relativeTime");

/***/ }),

/***/ "lodash.get":
/*!*****************************!*\
  !*** external "lodash.get" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.get");

/***/ }),

/***/ "mobx":
/*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),

/***/ "mobx-react-lite":
/*!**********************************!*\
  !*** external "mobx-react-lite" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-react-lite");

/***/ }),

/***/ "mobx-state-tree":
/*!**********************************!*\
  !*** external "mobx-state-tree" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-state-tree");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-native-web":
/*!***********************************!*\
  !*** external "react-native-web" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-native-web");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map