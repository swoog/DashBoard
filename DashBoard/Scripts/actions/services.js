'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.runServices = undefined;

var _index = require('./index');

var _service = require('../service');

//import Dashboardstore from '../dashboardstore'

var updateSprintService = function updateSprintService(board, dispatch) {
    function updateItems(items) {
        (0, _service.Service)(board.url, '/_apis/wit/WorkItems?ids=' + items + '&fields=System.Id,System.WorkItemType,System.Title,System.AssignedTo,System.State,System.IterationPath,Microsoft.VSTS.Scheduling.Effort,Microsoft.VSTS.Common.BacklogPriority&api-version=1.0', function (result) {
            dispatch((0, _index.updateSprintBoard)(result));
        }.bind(this));
    };

    (0, _service.ServicePost)(board.url, '/' + board.project + '/_apis/wit/wiql?api-version=1.0', "{\"query\": \"Select [System.Id] FROM WorkItems WHERE [System.IterationPath] under '" + board.project + "' AND [System.WorkItemType] IN GROUP 'Microsoft.RequirementCategory' AND [System.WorkItemType] IN GROUP 'Microsoft.RequirementCategory' AND [System.State] IN ('New','Approved','Committed', 'Done')\"}", function (result) {
        var workItems = result.workItems;
        updateItems(workItems.reduce(function (p, i) {
            return p + ',' + i.id;
        }, '').substr(1));
    }.bind(undefined));
};

var runServices = exports.runServices = function runServices(dispatch, updateSprint) {
    return {
        type: "RUN_SERVICES",
        updateSprint: updateSprint ? updateSprint : updateSprintService,
        dispatch: dispatch
    };
};