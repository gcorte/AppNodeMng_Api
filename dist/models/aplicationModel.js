"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Aplication = void 0;

var mongoose = require('mongoose');

var AplicationSchema = new mongoose.Schema({
  hostName: {
    type: String,
    require: true
  },
  userName: {
    type: String,
    unique: true
  },
  ipAddress: {
    type: String // default: '123-456'

  },
  os: {
    type: String,
    unique: true
  }
}, {
  timestamps: true,
  versionKey: false
});
var Aplication = new mongoose.model('Aplication', AplicationSchema);
exports.Aplication = Aplication;