'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _service = require('../service');

var _service2 = _interopRequireDefault(_service);

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (dispatch, buildId) {
    var getBuild = function getBuild(b) {
        return function (index) {
            (0, _service2.default)('/Wanapp/_apis/build/builds?definitions=' + b + '&$top=1&api-version=2.0', function (result) {
                dispatch((0, _actions.updateTile)(index, { builds: result }));
            }.bind(this));
        };
    };

    var service = getBuild(buildId);
    dispatch((0, _actions.addTile)({ type: 'build', buildId: buildId, service: service }));
};