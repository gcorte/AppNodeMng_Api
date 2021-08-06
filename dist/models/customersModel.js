"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAll = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var mongoose = require('mongoose');

var CustomersSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    unique: true
  },
  numberPhone: {
    type: Number,
    require: true,
    unique: true,
    "default": '1234567'
  },
  tag: {
    type: Array,
    "default": []
  },
  appId: {
    type: mongoose.Types.ObjectId
  }
}, {
  timestamps: true,
  versionKey: false
});
var Customers = new mongoose.model('Customers', CustomersSchema);

var getAll = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Customers.aggregate([{
              $lookup: {
                from: "aplications",
                // 2
                localField: "appId",
                // 1 (customers)
                foreignField: "_id",
                // 2 (aplications)
                as: "customersApps"
              }
            }, {
              $unwind: "$customersApps"
            } //{ $match: { title: "Mi post!" } }
            ]);

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getAll() {
    return _ref.apply(this, arguments);
  };
}();

exports.getAll = getAll;