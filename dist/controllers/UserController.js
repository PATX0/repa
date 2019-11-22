"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _UserService = _interopRequireDefault(require("../services/UserService"));

var _Response = _interopRequireDefault(require("../utils/Response"));

var response = new _Response["default"]();

var UserController =
/*#__PURE__*/
function () {
  function UserController() {
    (0, _classCallCheck2["default"])(this, UserController);
  }

  (0, _createClass2["default"])(UserController, null, [{
    key: "getAll",
    value: function getAll(req, res) {
      var users;
      return _regenerator["default"].async(function getAll$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _regenerator["default"].awrap(_UserService["default"].getAll());

            case 3:
              users = _context.sent;
              response.setSuccess(200, users);
              return _context.abrupt("return", response.send(res));

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              response.setError(400, _context.t0.message);
              return _context.abrupt("return", response.send(res));

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 8]]);
    }
  }, {
    key: "add",
    value: function add(req, res) {
      var user, createdUser;
      return _regenerator["default"].async(function add$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(!req.body.username || !req.body.password)) {
                _context2.next = 3;
                break;
              }

              response.setError(400, 'Please add all details');
              return _context2.abrupt("return", response.send(res));

            case 3:
              user = req.body;
              _context2.prev = 4;
              _context2.next = 7;
              return _regenerator["default"].awrap(_UserService["default"].add(user));

            case 7:
              createdUser = _context2.sent;
              response.setSuccess(200, createdUser);
              return _context2.abrupt("return", response.send(res));

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](4);
              response.setError(400, _context2.t0.message);
              return _context2.abrupt("return", response.send(res));

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[4, 12]]);
    }
  }]);
  return UserController;
}();

var _default = UserController;
exports["default"] = _default;