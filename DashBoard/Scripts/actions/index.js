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

var addTilesBoard = exports.addTilesBoard = function addTilesBoard(boardName) {
    return {
        type: "ADD_TILES_BOARD",
        name: boardName
    };
};

var addSprintBoard = exports.addSprintBoard = function addSprintBoard(boardName, vstsUrl, vstsProject, vstsPatToken) {
    return {
        type: "ADD_SPRINT_BOARD",
        name: boardName,
        url: vstsUrl,
        project: vstsProject,
        patToken: vstsPatToken
    };
};

var removeBoard = exports.removeBoard = function removeBoard(index) {
    return {
        type: "REMOVE_BOARD",
        index: index
    };
};

var updateSprintBoard = exports.updateSprintBoard = function updateSprintBoard(data, index) {
    return {
        type: "UPDATE_SPRINT_BOARD",
        data: data,
        index: index
    };
};

var closeSettings = exports.closeSettings = function closeSettings() {
    return {
        type: "CLOSE_SETTINGS"
    };
};

var gotoSettings = exports.gotoSettings = function gotoSettings() {
    return {
        type: "GOTO_SETTINGS"
    };
};

var selectBoard = exports.selectBoard = function selectBoard(index) {
    return {
        type: "SELECT_BOARD",
        index: index
    };
};