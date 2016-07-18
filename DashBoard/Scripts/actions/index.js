"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var updateTile = exports.updateTile = function updateTile(index, result) {
    return {
        type: 'UPDATE_TILE',
        index: index,
        result: result
    };
};

var addTile = exports.addTile = function addTile(tile) {
    return {
        type: "ADD_TILE",
        tile: tile
    };
};