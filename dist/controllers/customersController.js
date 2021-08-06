"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConstumers = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _conexion = require("../conexion");

var _customersModel = require("../models/customersModel");

var getConstumers = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = res;
            _context.next = 3;
            return (0, _customersModel.getAll)();

          case 3:
            _context.t1 = _context.sent;

            _context.t0.json.call(_context.t0, _context.t1);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getConstumers(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
/*
export const getConstumersCount = (req,res) =>{
    res.send('Hello Wolrld')
}
export const createConstumer = (req,res) =>{
    res.send('Hello Wolrld')
}
export const updateConstumer = (req,res) =>{
    res.send('Hello Wolrld')
}
export const deleteConstumers= (req,res) =>{
    res.send('Hello Wolrld')
}
*/


exports.getConstumers = getConstumers;
(0, _conexion.connect)();