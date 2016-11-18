"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _tile = require("./tile");

var _tile2 = _interopRequireDefault(_tile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SprintsBoard = _react2.default.createClass({
    displayName: "SprintsBoard",

    render: function render() {
        var tiles = this.props.data.map(function (d) {
            return _react2.default.createElement(_tile2.default, { data: d });
        });

        return _react2.default.createElement(
            "div",
            { className: "tiles" },
            tiles
        );
    }
});

exports.default = Tiles;