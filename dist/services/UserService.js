"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _models = _interopRequireDefault(require("../models"));

var UserService =
/*#__PURE__*/
function () {
  function UserService() {
    (0, _classCallCheck2["default"])(this, UserService);
  }

  (0, _createClass2["default"])(UserService, null, [{
    key: "getAll",
    value: function getAll() {
      return _regenerator["default"].async(function getAll$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _regenerator["default"].awrap(_models["default"].user.findAll());

            case 3:
              return _context.abrupt("return", _context.sent);

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);
              throw _context.t0;

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 6]]);
    }
  }, {
    key: "add",
    value: function add(user) {
      return _regenerator["default"].async(function add$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _regenerator["default"].awrap(_models["default"].user.create(user));

            case 3:
              return _context2.abrupt("return", _context2.sent);

            case 6:
              _context2.prev = 6;
              _context2.t0 = _context2["catch"](0);
              throw _context2.t0;

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[0, 6]]);
    }
  }, {
    key: "update",
    value: function update(id, user) {
      var foundUser;
      return _regenerator["default"].async(function update$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _regenerator["default"].awrap(_models["default"].user.findOne({
                where: {
                  id: Number(id)
                }
              }));

            case 3:
              foundUser = _context3.sent;

              if (!foundUser) {
                _context3.next = 8;
                break;
              }

              _context3.next = 7;
              return _regenerator["default"].awrap(_models["default"].User.update(user, {
                where: {
                  id: Number(id)
                }
              }));

            case 7:
              return _context3.abrupt("return", user);

            case 8:
              return _context3.abrupt("return", null);

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](0);
              throw _context3.t0;

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[0, 11]]);
    }
  }, {
    key: "getOne",
    value: function getOne(id) {
      var user;
      return _regenerator["default"].async(function getOne$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _regenerator["default"].awrap(_models["default"].user.findOne({
                where: {
                  id: Number(id)
                }
              }));

            case 3:
              user = _context4.sent;
              return _context4.abrupt("return", user);

            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4["catch"](0);
              throw _context4.t0;

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, [[0, 7]]);
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      var user, deletedUser;
      return _regenerator["default"].async(function _delete$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return _regenerator["default"].awrap(_models["default"].user.findOne({
                where: {
                  id: Number(id)
                }
              }));

            case 3:
              user = _context5.sent;

              if (!user) {
                _context5.next = 9;
                break;
              }

              _context5.next = 7;
              return _regenerator["default"].awrap(_models["default"].user.destroy({
                where: {
                  id: Number(id)
                }
              }));

            case 7:
              deletedUser = _context5.sent;
              return _context5.abrupt("return", deletedUser);

            case 9:
              return _context5.abrupt("return", null);

            case 12:
              _context5.prev = 12;
              _context5.t0 = _context5["catch"](0);
              throw _context5.t0;

            case 15:
            case "end":
              return _context5.stop();
          }
        }
      }, null, null, [[0, 12]]);
    }
  }]);
  return UserService;
}();

var _default = UserService;
exports["default"] = _default;