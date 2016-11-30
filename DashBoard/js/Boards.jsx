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
        var selectedBoard = 0;
        if (this.props.data.selectedBoard) {
            selectedBoard = this.props.data.selectedBoard;
        }

        var b = this.props.data.boards[selectedBoard];

        if (b.type === 'SPRINT') {
            return (<div><SprintsBoard key={i++} data={b} distpatch={dispatch} /></div>);
        }
 
        return (<div>
                
               </div>);
    }
}

export default Boards;
