"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ReactDOM = require("react/lib/ReactDOM");

var _ReactDOM2 = _interopRequireDefault(_ReactDOM);

var _Tiles = require("./Tiles");

var _Tiles2 = _interopRequireDefault(_Tiles);

var _dashboardstore = require("./dashboardstore");

var _dashboardstore2 = _interopRequireDefault(_dashboardstore);

var _build = require("./services/build");

var _build2 = _interopRequireDefault(_build);

var _time = require("./services/time");

var _time2 = _interopRequireDefault(_time);

var _boards = require("./boards");

var _boards2 = _interopRequireDefault(_boards);

var _settings = require("./settings");

var _settings2 = _interopRequireDefault(_settings);

var _actions = require("./actions");

var _services = require("./actions/services");

var _service = require("./service");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var dispatch = _dashboardstore2.default.dispatch;

//dispatch(addBoard("Builds"));
//dispatch(addSprintBoard("Sprint"));

//addTimeTile(dispatch);
//addBuildTile(dispatch, 7);
//addBuildTile(dispatch, 6);
//addBuildTile(dispatch, 20);

//services.push(function(i) {
//});

var myTimer = function myTimer() {
    dispatch((0, _services.runServices)());
};

setInterval(myTimer, 2000);

var Main = function (_Component) {
    _inherits(Main, _Component);

    function Main() {
        _classCallCheck(this, Main);

        return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
    }

    _createClass(Main, [{
        key: "render",
        value: function render() {
            var state = _dashboardstore2.default.getState();
            console.log('State : ');
            console.log(state);

            switch (state.mode) {
                case 'SETTINGS':
                    return _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement(
                            "div",
                            { className: "header" },
                            "Settings"
                        ),
                        _react2.default.createElement(_settings2.default, { data: state, dispatch: _dashboardstore2.default.dispatch })
                    );
                case 'DASHBOARD':
                    return _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement(
                            "div",
                            { className: "header" },
                            "DashBoard"
                        ),
                        _react2.default.createElement(_boards2.default, { data: state, dispatch: _dashboardstore2.default.dispatch })
                    );
                default:
                    return _react2.default.createElement(
                        "div",
                        null,
                        "No Mode"
                    );;
            }
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