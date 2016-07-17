'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var updateBuild = exports.updateBuild = function updateBuild(index, result) {
    return {
        type: 'UPDATE_BUILD',
        index: index,
        result: result
    };
};