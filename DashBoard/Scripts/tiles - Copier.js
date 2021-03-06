"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tiles = _react2.default.createClass({
    displayName: "Tiles",

    render: function render() {
        return _react2.default.createElement(
            "div",
            null,
            "Hello ",
            this.props.name
        );
    }
});

exports.default = Tiles;