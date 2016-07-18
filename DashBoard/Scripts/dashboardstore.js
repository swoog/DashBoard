'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var dashboardreducer = function dashboardreducer(state, action) {
    if (typeof state === 'undefined') {
        return [];
    }

    switch (action.type) {
        case "UPDATE_TILE":
            var tile = state[action.index];
            tile = Object.assign({}, tile, action.result);
            return [].concat(_toConsumableArray(state.slice(0, action.index)), [tile], _toConsumableArray(state.slice(action.index + 1)));
        case "ADD_TILE":
            return [].concat(_toConsumableArray(state), [action.tile]);
        default:
            return state;
    }
};

exports.default = (0, _redux.createStore)(dashboardreducer);