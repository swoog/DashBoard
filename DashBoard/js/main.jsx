import React, { Component, PropTypes } from "react"
import ReactDOM from "react/lib/ReactDOM"
import Dashboardstore from './dashboardstore'
import Boards  from './boards'
import Settings  from './settings'
import {addBoard, addSprintBoard, updateSprintBoard, gotoSettings, selectBoard} from './actions'
import {runServices} from './actions/services'
import {Service, ServicePost} from "./service"

var dispatch = Dashboardstore.dispatch;

const myTimer = () => {
    dispatch(runServices(dispatch));
}

setInterval(myTimer, 2000);

class Main extends Component{
    selectBoard() {
        Dashboardstore.dispatch(selectBoard(this));        
    }
    editSettings() {
        Dashboardstore.dispatch(gotoSettings());
    }
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
                var i = 0;
                var boardsButton = state.boards.map(b => {
                    return (<button key={i} onClick={this.selectBoard.bind(i++)}>{b.name}</button>);
                });
                return (
                    <div>
                        <div className="header">
                            DashBoard
                    <div>
                            <button onClick={this.editSettings.bind(this)}>Edit Settings</button>
                    </div>
                    {boardsButton}
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
