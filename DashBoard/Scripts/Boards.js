'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actions = require('./actions');

var _sprintsBoard = require('./sprintsBoard');

var _sprintsBoard2 = _interopRequireDefault(_sprintsBoard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Boards = function (_Component) {
    _inherits(Boards, _Component);

    function Boards() {
        _classCallCheck(this, Boards);

        return _possibleConstructorReturn(this, (Boards.__proto__ || Object.getPrototypeOf(Boards)).apply(this, arguments));
    }

    _createClass(Boards, [{
        key: 'gotoSettings',
        value: function gotoSettings() {
            this.props.dispatch((0, _actions.gotoSettings)());
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.props.data.boards == undefined) {
                return _react2.default.createElement(
                    'div',
                    null,
                    'No board is define. Go to settings to define board',
                    _react2.default.createElement(
                        'button',
                        { onClick: this.gotoSettings.bind(this) },
                        'Goto settings'
                    )
                );
            }
            var i = 0;
            var dispatch = this.dispatch;
            var selectedBoard = 0;
            if (this.props.data.selectedBoard) {
                selectedBoard = this.props.data.selectedBoard;
            }

            var b = this.props.data.boards[selectedBoard];

            if (b.type === 'SPRINT') {
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_sprintsBoard2.default, { key: i++, data: b, distpatch: dispatch })
                );
            }

            return _react2.default.createElement('div', null);
        }
    }]);

    return Boards;
}(_react.Component);

exports.default = Boards;