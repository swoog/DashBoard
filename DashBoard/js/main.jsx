import React, { Component, PropTypes } from "react"
import ReactDOM from "react/lib/ReactDOM"
import Tiles from "./Tiles"
import Service from "./service"
import Dashboardstore from './dashboardstore'
import {updateBuild} from './actions'

var getBuild = function(b, index) {
    return function() {
        Service('/Wanapp/_apis/build/builds?definitions=' + b + '&$top=1&api-version=2.0',
            function(result) {
                Dashboardstore.dispatch(updateBuild(index, result));
            }.bind(this));
    };
};

const myTimer = () => {
    var datas = Dashboardstore.getState();
    for (var i = 0; i < datas.length; i++) {
        getBuild(datas[i].buildId, i)();
    }
}

setInterval(myTimer, 2000);

class Main extends Component{
    render () {
        return <Tiles data={Dashboardstore.getState()} />;
    }
}


const render = () => {
    var mainNode = document.getElementById('main');
    ReactDOM.render(<Main />, mainNode);
};


Dashboardstore.subscribe(render);
render();
