"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Build = _react2.default.createClass({
    displayName: "Build",

    render: function render() {
        if (!this.props.data.builds) {
            return _react2.default.createElement(
                "div",
                { className: "tile" },
                "Loading..."
            );
        }

        var lastBuild = this.props.data.builds.value[0];
        if (!lastBuild) {
            return _react2.default.createElement(
                "div",
                { className: "tile" },
                "Last build not found"
            );
        }

        if (lastBuild.result === "failed") {
            return _react2.default.createElement(
                "div",
                { className: "tile red" },
                lastBuild.definition.name,
                _react2.default.createElement("br", null),
                lastBuild.requestedFor.displayName,
                _react2.default.createElement("img", { src: lastBuild.requestedFor.imageUrl })
            );
        }

        return _react2.default.createElement(
            "div",
            { className: "tile green" },
            lastBuild.definition.name
        );
    }
});

exports.default = Build;