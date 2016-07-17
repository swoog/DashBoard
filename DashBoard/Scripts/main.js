"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ReactDOM = require("react/lib/ReactDOM");

var _ReactDOM2 = _interopRequireDefault(_ReactDOM);

var _Tiles = require("./Tiles");

var _Tiles2 = _interopRequireDefault(_Tiles);

var _service = require("./service");

var _service2 = _interopRequireDefault(_service);

var _dashboardstore = require("./dashboardstore");

var _dashboardstore2 = _interopRequireDefault(_dashboardstore);

var _actions = require("./actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getBuild = function getBuild(b, index) {
    return function () {
        (0, _service2.default)('/Wanapp/_apis/build/builds?definitions=' + b + '&$top=1&api-version=2.0', function (result) {
            _dashboardstore2.default.dispatch((0, _actions.updateBuild)(index, result));
        }.bind(this));
    };
};

var myTimer = function myTimer() {
    var datas = _dashboardstore2.default.getState();
    for (var i = 0; i < datas.length; i++) {
        getBuild(datas[i].buildId, i)();
    }
};

setInterval(myTimer, 2000);

var Main = function (_Component) {
    _inherits(Main, _Component);

    function Main() {
        _classCallCheck(this, Main);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Main).apply(this, arguments));
    }

    _createClass(Main, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(_Tiles2.default, { data: _dashboardstore2.default.getState() });
        }
    }]);

    return Main;
}(_react.Component);

var render = function render() {
    var mainNode = document.getElementById('main');
    _ReactDOM2.default.render(_react2.default.createElement(Main, null), mainNode);
};

_dashboardstore2.default.subscribe(render);
render();