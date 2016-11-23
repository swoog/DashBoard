import {updateItems, updateSprintBoard} from './index'
import {Service, ServicePost} from "../service"
import Dashboardstore from '../dashboardstore'

const updateSprintService = (board) => {
    function updateItems(items) {
        Service(board.url, '/_apis/wit/WorkItems?ids=' +
            items + '&fields=System.Id,System.WorkItemType,System.Title,System.AssignedTo,System.State,System.IterationPath,Microsoft.VSTS.Scheduling.Effort,Microsoft.VSTS.Common.BacklogPriority&api-version=1.0',
            function(result) {
                Dashboardstore.dispatch(updateSprintBoard(result));
            }.bind(this));
    };

    ServicePost(board.url, '/'+url.project+'/_apis/wit/wiql?api-version=1.0', "{\"query\": \"Select [System.Id] FROM WorkItems WHERE [System.IterationPath] under '"+url.project+"' AND [System.WorkItemType] IN GROUP 'Microsoft.RequirementCategory' AND [System.WorkItemType] IN GROUP 'Microsoft.RequirementCategory' AND [System.State] IN ('New','Approved','Committed', 'Done')\"}", function(result) {
        var workItems = result.workItems;
        updateItems(workItems.reduce(function(p, i) { return p + ',' + i.id; }, '').substr(1));
    }.bind(this));
}

export const runServices=(updateSprint) => {
    return{
        type: "RUN_SERVICES",
        updateSprint: updateSprint ? updateSprint : updateSprintService
    }
}