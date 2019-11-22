"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _UserController = _interopRequireDefault(require("../controllers/UserController"));

var router = (0, _express.Router)();
router.get('/', _UserController["default"].getAll);
var _default = router;
exports["default"] = _default;