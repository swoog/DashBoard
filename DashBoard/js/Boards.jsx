import React,{ Component, PropTypes } from "react";
import {gotoSettings} from './actions';
import SprintsBoard from './sprintsBoard';

class Boards extends Component{
    gotoSettings() {
        this.props.dispatch(gotoSettings());
    }
    render() {
        if (this.props.data.boards == undefined) {
            return (<div>No board is define. Go to settings to define board
                        <button onClick={this.gotoSettings.bind(this)}>Goto settings</button>
                    </div>);
        }
        var i = 0;
        var dispatch = this.dispatch;
        var boards = this.props.data.boards.map(function(b) {
            if (b.type == 'SPRINT') {
                return <SprintsBoard key={i++} data={b} distpatch={dispatch}/>;
            }
        });
 
        return (<div>
                {boards}
               </div>);
    }
}

export default Boards;
