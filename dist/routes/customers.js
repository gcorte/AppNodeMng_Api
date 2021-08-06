"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _customersController = require("../controllers/customersController");

var router = (0, _express.Router)();
router.get('/customers', _customersController.getConstumers); //router.get('/customers/count', getConstumersCount)
//router.post('/customers', createConstumer)
//router.put('/customers/:id', updateConstumer)
//router.delete('/customers/:id', deleteConstumers)

var _default = router;
exports["default"] = _default;