"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ReactDOM = require("react/lib/ReactDOM");

var _ReactDOM2 = _interopRequireDefault(_ReactDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Main = _react2.default.createClass({
    displayName: "Main",

    render: function render() {
        return _react2.default.createElement(
            "div",
            null,
            "Hello ",
            this.props.name
        );
    }
});

var mainNode = document.getElementById('main');
_ReactDOM2.default.render(_react2.default.createElement(Main, null), mainNode);