import React, { Component, PropTypes } from "react"
import ReactDOM from "react/lib/ReactDOM"
import Tiles from "./Tiles"
import Dashboardstore from './dashboardstore'
import addBuildTile from './services/build'
import addTimeTile from './services/time'

var dispatch = Dashboardstore.dispatch;

addTimeTile(dispatch);
addBuildTile(dispatch, 7);
addBuildTile(dispatch, 6);
addBuildTile(dispatch, 20);

const myTimer = () => {
    var datas = Dashboardstore.getState();
    for (var i = 0; i < datas.length; i++) {
        datas[i].service(i);
    }
}

setInterval(myTimer, 2000);

class Main extends Component{
    render () {
        return (
            <div>
                <div className="header">
                    DashBoard
                </div>
                <Tiles data={Dashboardstore.getState()} />
            </div>
        );
    }
}

const render = () => {
    var mainNode = document.getElementById('main');
    ReactDOM.render(<Main />, mainNode);
};

Dashboardstore.subscribe(render);
render();
