import { createStore, applyMiddleware, combineReducers} from 'redux'
import {persistStore, autoRehydrate} from 'redux-persist'

import { merge, fill, remove } from 'lodash'

function add(array, object) {
    return[
        ...array,
        object
    ];
}

export const dashboardreducer = (state = { mode: 'SETTINGS'}, action) => {
    if (action == undefined) {
        return state;
    }

    var boards = state.boards;
    if (boards == null) {
        boards = [];
    }
    switch (action.type) {
        case "SELECT_BOARD":
            return merge(state, { selectedBoard: action.index });
        case "RUN_SERVICES":
            if (state.boards) {
                var i = 0;
                for (var board of state.boards) {
                    action.updateSprint(board, i++, action.dispatch);
                }
            }

            return state;
        case "GOTO_SETTINGS":
            return merge(state, { mode: 'SETTINGS' });
        case "CLOSE_SETTINGS":
            return merge(state, { mode: 'DASHBOARD' });
        case "ADD_TILES_BOARD":
            return merge(state,
                { boards: add(boards, { name: action.name, tiles: [] }) });
        case "REMOVE_BOARD":
            boards.splice(action.index, 1);
            return merge(state,
            {
                boards: boards
            });
        case "ADD_SPRINT_BOARD":
            return merge(state,
            {
                boards: add(boards,
                    {
                        name: action.name,
                        type: 'SPRINT',
                        url: action.url,
                        project: action.project,
                        patToken: action.patToken,
                        sprints: [],
                        backLog: []
                    }
                )
            });
        case "UPDATE_TILE":
            var board = boards[action.boardIndex];
            var tile = board.tiles[action.index];
            tile = merge(tile, action.result);
            board = merge(board,
            {
                tiles: fill(board.tiles, tile, action.index)
            });
            return merge(state, { boards: fill(boards, board, action.boardIndex) });
        case "ADD_TILE":
            var index = 0;
            var board = state[index];
            var tiles = board.tiles;
            board = merge(board, {tiles:[...tiles, action.tile]});
            return fill(state, board, index);
        case "UPDATE_SPRINT_BOARD":
            function group(list, prop) {
                return list.reduce(function(grouped, item) {
                    var key = prop.apply(this, [item]);
                    grouped[key] = grouped[key] || [];
                    grouped[key].push(item);
                    return grouped;
                }, {});
            }
            var index = action.index;
            var board = state.boards[index];
            var backLogs = action.data.value.sort(function(a, b) {
                return a.fields['Microsoft.VSTS.Common.BacklogPriority'] - b.fields['Microsoft.VSTS.Common.BacklogPriority'];
            });

            var sprintsProperties = group(backLogs.filter(v => v.fields['System.IterationPath'].indexOf('\\') !== -1),
                    p => p.fields['System.IterationPath']);
            var sprints = [];
            for (var key in sprintsProperties) {
                if (sprintsProperties.hasOwnProperty(key)) {
                    var sprint = { name: key.substr(key.indexOf('\\') + 1) };

                    sprint.sprintLog = sprintsProperties[key].map(convertToBackLogItem);

                    sprint.effort = sprint.sprintLog.reduce(function(v, l) { return v + l.effort }, 0);

                    sprints.push(sprint);
                }
            }

            sprints = sprints.sort(function(s1, s2) {
                var num1 = /[0-9]+/.exec(s1.name)[0];
                var num2 = /[0-9]+/.exec(s2.name)[0];

                return parseInt(num1, 10) - parseInt(num2, 10);
            });

            remove(sprints,
                function(s) {
                    return s.sprintLog.findIndex(function(l) {
                        return l.state != 'Done';
                    }) ===
                        -1;
                });

            var backLogsItems = backLogs.filter(v => v.fields["System.IterationPath"].indexOf('\\') === -1).map(convertToBackLogItem);

            board = merge(board, { sprints: null, backLog: null });
            board = merge(board, { sprints: sprints, backLog: backLogsItems });
            return merge(state, { boards: fill(state.boards, board, index, 1) });
        default:
            return state;
    }
}

function convertToBackLogItem(b) {
    return {
        id: b.id,
        title: b.fields['System.Title'],
        effort: b.fields['Microsoft.VSTS.Scheduling.Effort'],
        state: b.fields['System.State']
    }
}

