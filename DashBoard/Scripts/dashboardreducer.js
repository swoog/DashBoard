'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dashboardreducer = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _redux = require('redux');

var _reduxPersist = require('redux-persist');

var _lodash = require('lodash');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function add(array, object) {
    return [].concat(_toConsumableArray(array), [object]);
}

var dashboardreducer = exports.dashboardreducer = function dashboardreducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { mode: 'SETTINGS' };
    var action = arguments[1];

    if (action == undefined) {
        return state;
    }

    var boards = state.boards;
    if (boards == null) {
        boards = [];
    }
    var i;
    var board;
    var board;
    var tile;
    var index;
    var board;
    var tiles;
    var index;
    var board;
    var backLogs;
    var sprintsProperties;
    var sprints;
    var key;
    var sprint;
    var backLogsItems;

    var _ret = function () {
        switch (action.type) {
            case "SELECT_BOARD":
                return {
                    v: (0, _lodash.merge)(state, { selectedBoard: action.index })
                };
            case "RUN_SERVICES":
                if (state.boards) {
                    i = 0;
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = state.boards[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            board = _step.value;

                            action.updateSprint(board, i++, action.dispatch);
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                }

                return {
                    v: state
                };
            case "GOTO_SETTINGS":
                return {
                    v: (0, _lodash.merge)(state, { mode: 'SETTINGS' })
                };
            case "CLOSE_SETTINGS":
                return {
                    v: (0, _lodash.merge)(state, { mode: 'DASHBOARD' })
                };
            case "ADD_TILES_BOARD":
                return {
                    v: (0, _lodash.merge)(state, { boards: add(boards, { name: action.name, tiles: [] }) })
                };
            case "REMOVE_BOARD":
                boards.splice(action.index, 1);
                return {
                    v: (0, _lodash.merge)(state, {
                        boards: boards
                    })
                };
            case "ADD_SPRINT_BOARD":
                return {
                    v: (0, _lodash.merge)(state, {
                        boards: add(boards, {
                            name: action.name,
                            type: 'SPRINT',
                            url: action.url,
                            project: action.project,
                            patToken: action.patToken,
                            sprints: [],
                            backLog: []
                        })
                    })
                };
            case "UPDATE_TILE":
                board = boards[action.boardIndex];
                tile = board.tiles[action.index];

                tile = (0, _lodash.merge)(tile, action.result);
                board = (0, _lodash.merge)(board, {
                    tiles: (0, _lodash.fill)(board.tiles, tile, action.index)
                });
                return {
                    v: (0, _lodash.merge)(state, { boards: (0, _lodash.fill)(boards, board, action.boardIndex) })
                };
            case "ADD_TILE":
                index = 0;
                board = state[index];
                tiles = board.tiles;

                board = (0, _lodash.merge)(board, { tiles: [].concat(_toConsumableArray(tiles), [action.tile]) });
                return {
                    v: (0, _lodash.fill)(state, board, index)
                };
            case "UPDATE_SPRINT_BOARD":
                var group = function group(list, prop) {
                    return list.reduce(function (grouped, item) {
                        var key = prop.apply(this, [item]);
                        grouped[key] = grouped[key] || [];
                        grouped[key].push(item);
                        return grouped;
                    }, {});
                };

                index = action.index;
                board = state.boards[index];
                backLogs = action.data.value.sort(function (a, b) {
                    return a.fields['Microsoft.VSTS.Common.BacklogPriority'] - b.fields['Microsoft.VSTS.Common.BacklogPriority'];
                });
                sprintsProperties = group(backLogs.filter(function (v) {
                    return v.fields['System.IterationPath'].indexOf('\\') !== -1;
                }), function (p) {
                    return p.fields['System.IterationPath'];
                });
                sprints = [];

                for (key in sprintsProperties) {
                    if (sprintsProperties.hasOwnProperty(key)) {
                        sprint = { name: key.substr(key.indexOf('\\') + 1) };


                        sprint.sprintLog = sprintsProperties[key].map(convertToBackLogItem);

                        sprint.effort = sprint.sprintLog.reduce(function (v, l) {
                            return v + l.effort;
                        }, 0);

                        sprints.push(sprint);
                    }
                }

                sprints = sprints.sort(function (s1, s2) {
                    var num1 = /[0-9]+/.exec(s1.name)[0];
                    var num2 = /[0-9]+/.exec(s2.name)[0];

                    return parseInt(num1, 10) - parseInt(num2, 10);
                });

                (0, _lodash.remove)(sprints, function (s) {
                    return s.sprintLog.findIndex(function (l) {
                        return l.state != 'Done';
                    }) === -1;
                });

                backLogsItems = backLogs.filter(function (v) {
                    return v.fields["System.IterationPath"].indexOf('\\') === -1;
                }).map(convertToBackLogItem);


                board = (0, _lodash.merge)(board, { sprints: null, backLog: null });
                board = (0, _lodash.merge)(board, { sprints: sprints, backLog: backLogsItems });
                return {
                    v: (0, _lodash.merge)(state, { boards: (0, _lodash.fill)(state.boards, board, index, 1) })
                };
            default:
                return {
                    v: state
                };
        }
    }();

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
};

function convertToBackLogItem(b) {
    return {
        id: b.id,
        title: b.fields['System.Title'],
        effort: b.fields['Microsoft.VSTS.Scheduling.Effort'],
        state: b.fields['System.State']
    };
}