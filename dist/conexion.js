"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connect = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _config = require("./config");

var mongoose = require('mongoose');

var connect = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            mongoose.connection.close();
            console.log('CONEXIÓN CERRADA (STATUS) = ' + mongoose.connection.readyState);
            return _context.abrupt("return", mongoose.connect((0, _config.getDbUri)(), {
              useNewUrlParser: true,
              useUnifiedTopology: true,
              useCreateIndex: true
            }, function (err) {
              if (err) {
                console.log('ERROR DE CONEXIÓN (STATUS) = ' + mongoose.connection.readyState);
              } else {
                console.log('CONEXIÓN ABIERTA (STATUS) = ' + mongoose.connection.readyState);
              }
            }));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function connect() {
    return _ref.apply(this, arguments);
  };
}();

exports.connect = connect;