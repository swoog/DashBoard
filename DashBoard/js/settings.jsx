import linkState from 'react-link-state';
import React, { Component, PropTypes } from "react";
import {addSprintBoard, closeSettings, removeBoard} from "./actions";

class SprintBoardSetting extends Component{
    removeBoard() {
        this.props.dispatch(removeBoard(this.props.index));    
    }
    render() {
        return (<div>{this.props.data.name}<button onClick={this.removeBoard.bind(this)}>Remove</button></div>);
    }
}

class BoardSetting extends Component{
    render() {
        return (<SprintBoardSetting dispatch={this.props.dispatch} index={this.props.index} data={this.props.data} />);
    }
}

class Settings extends Component{
    createSprintBoard() {
        this.props.dispatch(addSprintBoard(this.refs.name.value, this.refs.url.value, this.refs.project.value));
    }
    closeSettings() {
        this.props.dispatch(closeSettings());    
    }
    render () {
        var boardsSettings = [];
        if (this.props.data.boards != null) {
            var i = 0;
            boardsSettings = this.props.data.boards.map(b => {
                return <BoardSetting key={i} data={b} dispatch={this.props.dispatch} index={i++} />;
            });
        }
        return (<div>
                    VSTS Project :
                    <input ref='name' type="text" />
                    <input ref='url' type="text" />
                    <input ref='project' type="text" />
                    <button onClick={this.createSprintBoard.bind(this)}>Add Sprint Board</button>
                    <div>
                       {boardsSettings}
                       <button onClick={this.closeSettings.bind(this)}>Close</button>
                    </div>
                </div>);
    }
}

export default Settings;
