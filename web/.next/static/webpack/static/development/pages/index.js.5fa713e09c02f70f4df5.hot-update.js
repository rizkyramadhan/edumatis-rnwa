webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/dist/index.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");


var _jsxFileName = "/Volumes/Data/Projects/edumatis-rnwa/web/pages/app/libs/nav/NavContainer.tsx";




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
  };
};

/***/ })

})
//# sourceMappingURL=index.js.5fa713e09c02f70f4df5.hot-update.js.map