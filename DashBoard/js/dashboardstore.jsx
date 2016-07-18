import { createStore } from 'redux'

const dashboardreducer = (state, action) => {
    if (typeof state === 'undefined') {
        return [];
    }

    switch (action.type) {
        case "UPDATE_TILE":
            var tile = state[action.index];
            tile = Object.assign({}, tile, action.result);
            return [
                ...state.slice(0, action.index),
                    tile,
                ...state.slice(action.index + 1)
            ];
        case "ADD_TILE":
            return [
                ...state,
                action.tile
            ];
        default:
            return state;
    }
}

export default createStore(dashboardreducer)