'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.runServices = undefined;

var _index = require('./index');

var _service = require('../service');

var _dashboardstore = require('../dashboardstore');

var _dashboardstore2 = _interopRequireDefault(_dashboardstore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var updateSprintService = function updateSprintService() {
    function updateItems(items) {
        (0, _service.Service)('', '/_apis/wit/WorkItems?ids=' + items + '&fields=System.Id,System.WorkItemType,System.Title,System.AssignedTo,System.State,System.IterationPath,Microsoft.VSTS.Scheduling.Effort,Microsoft.VSTS.Common.BacklogPriority&api-version=1.0', function (result) {
            _dashboardstore2.default.dispatch((0, _index.updateSprintBoard)(result));
        }.bind(this));
    };

    (0, _service.ServicePost)('/EDRMobile/_apis/wit/wiql?api-version=1.0', "{\"query\": \"Select [System.Id] FROM WorkItems WHERE [System.IterationPath] under 'EDRMobile' AND [System.WorkItemType] IN GROUP 'Microsoft.RequirementCategory' AND [System.WorkItemType] IN GROUP 'Microsoft.RequirementCategory' AND [System.State] IN ('New','Approved','Committed', 'Done')\"}", function (result) {
        var workItems = result.workItems;
        updateItems(workItems.reduce(function (p, i) {
            return p + ',' + i.id;
        }, '').substr(1));
    }.bind(undefined));
};

var runServices = exports.runServices = function runServices(updateSprint) {
    return {
        type: "RUN_SERVICES",
        updateSprint: updateSprint ? updateSprint : updateSprintService
    };
};