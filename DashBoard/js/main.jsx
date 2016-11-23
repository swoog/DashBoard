import React, { Component, PropTypes } from "react"
import ReactDOM from "react/lib/ReactDOM"
import Tiles from "./Tiles"
import Dashboardstore from './dashboardstore'
import addBuildTile from './services/build'
import addTimeTile from './services/time'
import Boards  from './boards'
import Settings  from './settings'
import {addBoard, addSprintBoard, updateSprintBoard} from './actions'
import {runServices} from './actions/services'
import {Service, ServicePost} from "./service"

var dispatch = Dashboardstore.dispatch;

//dispatch(addBoard("Builds"));
//dispatch(addSprintBoard("Sprint"));

//addTimeTile(dispatch);
//addBuildTile(dispatch, 7);
//addBuildTile(dispatch, 6);
//addBuildTile(dispatch, 20);

//services.push(function(i) {
//});

const myTimer = () => {
    dispatch(runServices());
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
