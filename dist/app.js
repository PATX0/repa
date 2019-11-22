"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _UserRoutes = _interopRequireDefault(require("./routes/UserRoutes"));

_dotenv["default"].config();

var app = (0, _express["default"])();
var port = process.env.PORT || 8080;
app.use((0, _morgan["default"])('dev'));
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use('/users', _UserRoutes["default"]);
app.listen(port, function () {
  return console.log("App is running at port ".concat(port));
});
var _default = app;
exports["default"] = _default;