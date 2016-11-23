import { createStore, applyMiddleware, combineReducers} from 'redux'
import {persistStore, autoRehydrate} from 'redux-persist'
import {dashboardreducer} from './dashboardreducer'

let storage = localStorage;
if (storage != null) {
    var state = storage.getItem("board");

    if (state == null) {
        state = undefined;
    } else {
        state = JSON.parse(state);
    }
}

const store = createStore(dashboardreducer, state, autoRehydrate());

if (storage != null) {
    store.subscribe(() => storage.setItem("board", JSON.stringify(store.getState())));
}

export default store;
