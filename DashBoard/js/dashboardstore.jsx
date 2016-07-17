import { createStore } from 'redux'

const dashboardreducer = (state, action) => {
    if (typeof state === 'undefined') {
        return [
            {
                name: 'Tile1',
                type: 'time',
                buildId:0,
            },
            {
                name: 'Tile1',
                type: 'build',
                buildId:6
            },
            {
                name: 'Tile2',
                type: 'build',
                buildId:7
            },
            {
                name: 'Tile2',
                type: 'build',
                buildId:20
            }
        ];
    }

    switch (action.type) {
        case "UPDATE_BUILD":
            var tile = state[action.index];
            tile = Object.assign({}, tile, { builds: action.result });
            return [
                ...state.slice(0, action.index),
                    tile,
                ...state.slice(action.index + 1)
                ];
        default:
            return state;
    }
}


export default createStore(dashboardreducer)