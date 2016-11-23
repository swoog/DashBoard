"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactLinkState = require("react-link-state");

var _reactLinkState2 = _interopRequireDefault(_reactLinkState);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _actions = require("./actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SprintBoardSetting = function (_Component) {
    _inherits(SprintBoardSetting, _Component);

    function SprintBoardSetting() {
        _classCallCheck(this, SprintBoardSetting);

        return _possibleConstructorReturn(this, (SprintBoardSetting.__proto__ || Object.getPrototypeOf(SprintBoardSetting)).apply(this, arguments));
    }

    _createClass(SprintBoardSetting, [{
        key: "removeBoard",
        value: function removeBoard() {
            this.props.dispatch((0, _actions.removeBoard)(this.props.index));
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                this.props.data.name,
                _react2.default.createElement(
                    "button",
                    { onClick: this.removeBoard.bind(this) },
                    "Remove"
                )
            );
        }
    }]);

    return SprintBoardSetting;
}(_react.Component);

var BoardSetting = function (_Component2) {
    _inherits(BoardSetting, _Component2);

    function BoardSetting() {
        _classCallCheck(this, BoardSetting);

        return _possibleConstructorReturn(this, (BoardSetting.__proto__ || Object.getPrototypeOf(BoardSetting)).apply(this, arguments));
    }

    _createClass(BoardSetting, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(SprintBoardSetting, { dispatch: this.props.dispatch, index: this.props.index, data: this.props.data });
        }
    }]);

    return BoardSetting;
}(_react.Component);

var Settings = function (_Component3) {
    _inherits(Settings, _Component3);

    function Settings() {
        _classCallCheck(this, Settings);

        return _possibleConstructorReturn(this, (Settings.__proto__ || Object.getPrototypeOf(Settings)).apply(this, arguments));
    }

    _createClass(Settings, [{
        key: "createSprintBoard",
        value: function createSprintBoard() {
            this.props.dispatch((0, _actions.addSprintBoard)(this.refs.name.value, this.refs.url.value, this.refs.project.value));
        }
    }, {
        key: "closeSettings",
        value: function closeSettings() {
            this.props.dispatch((0, _actions.closeSettings)());
        }
    }, {
        key: "render",
        value: function render() {
            var _this4 = this;

            var boardsSettings = [];
            if (this.props.data.boards != null) {
                var i = 0;
                boardsSettings = this.props.data.boards.map(function (b) {
                    return _react2.default.createElement(BoardSetting, { key: i, data: b, dispatch: _this4.props.dispatch, index: i++ });
                });
            }
            return _react2.default.createElement(
                "div",
                null,
                "VSTS Project :",
                _react2.default.createElement("input", { ref: "name", type: "text" }),
                _react2.default.createElement("input", { ref: "url", type: "text" }),
                _react2.default.createElement("input", { ref: "project", type: "text" }),
                _react2.default.createElement(
                    "button",
                    { onClick: this.createSprintBoard.bind(this) },
                    "Add Sprint Board"
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    boardsSettings,
                    _react2.default.createElement(
                        "button",
                        { onClick: this.closeSettings.bind(this) },
                        "Close"
                    )
                )
            );
        }
    }]);

    return Settings;
}(_react.Component);

exports.default = Settings;