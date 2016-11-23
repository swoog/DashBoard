'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _reduxPersist = require('redux-persist');

var _dashboardreducer = require('./dashboardreducer');

var storage = localStorage;
if (storage != null) {
    var state = storage.getItem("board");

    if (state == null) {
        state = undefined;
    } else {
        state = JSON.parse(state);
    }
}

var store = (0, _redux.createStore)(_dashboardreducer.dashboardreducer, state, (0, _reduxPersist.autoRehydrate)());

if (storage != null) {
    store.subscribe(function () {
        return storage.setItem("board", JSON.stringify(store.getState()));
    });
}

exports.default = store;