'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = require('../actions');

exports.default = function (dispatch) {
    var service = function service(index) {
        var d = new Date();
        dispatch((0, _actions.updateTile)(index, { name: d.toLocaleTimeString() }));
    };
    dispatch((0, _actions.addTile)({ type: 'time', service: service }));
};