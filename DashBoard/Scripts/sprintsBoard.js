"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BackLogItem = function (_Component) {
    _inherits(BackLogItem, _Component);

    function BackLogItem() {
        _classCallCheck(this, BackLogItem);

        return _possibleConstructorReturn(this, (BackLogItem.__proto__ || Object.getPrototypeOf(BackLogItem)).apply(this, arguments));
    }

    _createClass(BackLogItem, [{
        key: "render",
        value: function render() {
            var classNameState = 'backLogItem ' + this.props.data.state;
            return _react2.default.createElement(
                "div",
                { className: classNameState },
                _react2.default.createElement(
                    "span",
                    { className: "id" },
                    this.props.data.id
                ),
                " - ",
                this.props.data.title,
                _react2.default.createElement(
                    "div",
                    { className: "effort" },
                    this.props.data.effort
                )
            );
        }
    }]);

    return BackLogItem;
}(_react.Component);

var BackLogItems = function (_Component2) {
    _inherits(BackLogItems, _Component2);

    function BackLogItems() {
        _classCallCheck(this, BackLogItems);

        return _possibleConstructorReturn(this, (BackLogItems.__proto__ || Object.getPrototypeOf(BackLogItems)).apply(this, arguments));
    }

    _createClass(BackLogItems, [{
        key: "render",
        value: function render() {
            var items = this.props.data.map(function (d) {
                return _react2.default.createElement(BackLogItem, { key: d.id, data: d });
            });
            return _react2.default.createElement(
                "div",
                { className: "items" },
                items
            );
        }
    }]);

    return BackLogItems;
}(_react.Component);

var SprintBoard = function (_Component3) {
    _inherits(SprintBoard, _Component3);

    function SprintBoard() {
        _classCallCheck(this, SprintBoard);

        return _possibleConstructorReturn(this, (SprintBoard.__proto__ || Object.getPrototypeOf(SprintBoard)).apply(this, arguments));
    }

    _createClass(SprintBoard, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "sprint" },
                _react2.default.createElement(
                    "div",
                    { className: "name" },
                    this.props.data.name,
                    " - ",
                    _react2.default.createElement(
                        "small",
                        null,
                        this.props.data.sprintLog.length,
                        " items"
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "totalEffort" },
                    this.props.data.effort
                ),
                _react2.default.createElement(BackLogItems, { data: this.props.data.sprintLog })
            );
        }
    }]);

    return SprintBoard;
}(_react.Component);

var SprintsBoard = function (_Component4) {
    _inherits(SprintsBoard, _Component4);

    function SprintsBoard() {
        _classCallCheck(this, SprintsBoard);

        return _possibleConstructorReturn(this, (SprintsBoard.__proto__ || Object.getPrototypeOf(SprintsBoard)).apply(this, arguments));
    }

    _createClass(SprintsBoard, [{
        key: "render",
        value: function render() {
            var sprints = this.props.data.sprints.map(function (d) {
                return _react2.default.createElement(SprintBoard, { key: d.name, data: d });
            });

            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "div",
                    null,
                    sprints
                ),
                _react2.default.createElement(
                    "div",
                    { className: "backLog" },
                    _react2.default.createElement(
                        "div",
                        { className: "name" },
                        "BackLog"
                    ),
                    _react2.default.createElement(BackLogItems, { data: this.props.data.backLog })
                )
            );
        }
    }]);

    return SprintsBoard;
}(_react.Component);

exports.default = SprintsBoard;