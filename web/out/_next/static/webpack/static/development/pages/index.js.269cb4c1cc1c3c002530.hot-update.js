webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-state-tree */ "./node_modules/mobx-state-tree/dist/mobx-state-tree.module.js");
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
                return Object(_libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_9__["default"])("{\n          kelas_murid(where: {murid_id: {_eq: ".concat(response.murid.id, "}}) {\n            kelas {\n              sekolah {\n                id\n                nama_sekolah\n              }\n              nama_kelas\n              id\n            }\n          }\n        }"));

              case 8:
                result = _context.sent;

                if (result) {
                  response.kelas = {
                    id: result.kelas_murid[0].kelas.id,
                    nama: result.kelas_murid[0].kelas.nama_kelas
                  };
                  response.sekolah = {
                    id: result.kelas_murid[0].kelas.sekolah.id,
                    nama: result.kelas_murid[0].kelas.sekolah.nama_sekolah
                  };
                }

                console.log(response);
                return _context.abrupt("return", response);

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](0);
                console.warn(_context.t0);
                return _context.abrupt("return", false);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 14]]);
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

/***/ })

})
//# sourceMappingURL=index.js.269cb4c1cc1c3c002530.hot-update.js.map