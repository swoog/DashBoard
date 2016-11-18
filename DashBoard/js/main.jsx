import React, { Component, PropTypes } from "react"
import ReactDOM from "react/lib/ReactDOM"
import Tiles from "./Tiles"
import Dashboardstore from './dashboardstore'
import addBuildTile from './services/build'
import addTimeTile from './services/time'
import Boards  from './boards'
import Settings  from './settings'
import {addBoard, addSprintBoard, updateSprintBoard} from './actions'
import {Service, ServicePost} from "./service"

var dispatch = Dashboardstore.dispatch;

//dispatch(addBoard("Builds"));
//dispatch(addSprintBoard("Sprint"));

//addTimeTile(dispatch);
//addBuildTile(dispatch, 7);
//addBuildTile(dispatch, 6);
//addBuildTile(dispatch, 20);

var services = [];
//services.push(function(i) {
//    function updateItems(items) {
//        Service('/_apis/wit/WorkItems?ids=' +
//            items + '&fields=System.Id,System.WorkItemType,System.Title,System.AssignedTo,System.State,System.IterationPath,Microsoft.VSTS.Scheduling.Effort,Microsoft.VSTS.Common.BacklogPriority&api-version=1.0',
//            function(result) {
//                dispatch(updateSprintBoard(result));
//            }.bind(this));
//    };

//    ServicePost('/Neobd-Git/_apis/wit/wiql?api-version=1.0', "{\"query\": \"Select [System.Id] FROM WorkItems WHERE [System.IterationPath] under 'Neobd-Git' AND [System.WorkItemType] IN GROUP 'Microsoft.RequirementCategory' AND [System.WorkItemType] IN GROUP 'Microsoft.RequirementCategory' AND [System.State] IN ('New','Approved','Committed', 'Done')\"}", function(result) {
//        var workItems = result.workItems;
//        updateItems(workItems.reduce(function(p, i) { return p + ',' + i.id; }, '').substr(1));
//    }.bind(this));
//});

const myTimer = () => {
    var datas = services;
    for (var i = 0; i < datas.length; i++) {
        services[i](i);
    }
}

setInterval(myTimer, 2000);

class Main extends Component{
    render () {
        var state = Dashboardstore.getState();
        console.log('State : ');
        console.log(state);

        switch (state.mode) {
            case 'SETTINGS':
                return (
                    <div>
                        <div className="header">
                            Settings
                        </div>
                        <Settings data={state} dispatch={Dashboardstore.dispatch} />
                    </div>
                );            
            case 'DASHBOARD':
                return (
                    <div>
                        <div className="header">
                            DashBoard
                        </div>
                        <Boards data={state} dispatch={Dashboardstore.dispatch} />
                    </div>
                );
            default:
                return (<div>No Mode</div>);;
        }
    }
}

const render = () => {
    var mainNode = document.getElementById('main');
    ReactDOM.render(<Main />, mainNode);
};

Dashboardstore.subscribe(render);
render();
